---
title: 'Building Muse: Easing into System Design'
date: '2024-07-24'
description: "Let's review fundamentals of system design as I prepare to build Muse, covering key concepts like architecture, networking, API design, caching, load balancing, and database management.
"
---

Whether you’re an experienced developer or just starting out, building a web app from scratch can be challenging if you don't plan ahead. Before writing any code, it’s essential to understand what your application is, what it does, and what it needs. This process is known as **System Design**.

In this post, I’ll review the essentials of system design while creating a system for my next project, Muse. We’ll begin by exploring what a production app's system might look like. Then, we’ll examine how all the components in the system are connected. Following that, we’ll dive into some critical aspects of creating a scalable system. Finally, we’ll briefly cover database design. By the end, you’ll have a solid understanding of the key components needed to build a high-performing web app. Let’s get started!

### System Design Basics

System design is akin to constructing a building: before laying the foundation, you need a detailed blueprint that outlines everything from the structural framework to the placement of electrical wiring and plumbing. Just as an architect considers a building’s purpose, materials, and safety regulations, a developer must understand the application’s requirements, data flow, and technical constraints to create a robust and scalable system. Without this careful planning, both buildings and applications risk collapsing under their own weight.

Here’s an example of what a production app's system might look like.

![Example High-Level Overview of a Production App.](/Diagram.png)

Here’s a breakdown of the process:

1. Code is written by you or your team.
2. It’s processed through CI/CD (Continuous Integration/Continuous Deployment) pipelines.
3. The code is then hosted on servers.
4. It is deployed and integrated into the live environment.
5. Users interact with the application.
6. The system scales and adapts.
7. Ongoing updates and maintenance are performed.

A well-designed system should be scalable, maintainable, efficient, and reliable. This ensures the system can grow and adapt over time while maintaining high performance and stability. At its core, a good system effectively moves, stores, and transforms data to meet user needs. An important concept to understand in system design is the CAP theorem, which highlights the trade-offs between consistency, availability, and partition tolerance in distributed systems. Let’s explore these concepts in more detail.

-   **Consistency** ensures that every read from the system returns the most recent write. All users see the same data at the same time.
-   **Availability** guarantees that every request receives a response, whether it’s a success or failure. The system is always operational and responsive. Availability is often measured using uptime percentages, known as "nines." For example, 99.9% uptime (three nines) means the system can be down for up to 8.76 hours per year, 99.99% uptime (four nines) allows for 52.56 minutes of downtime per year, and 99.999% uptime (five nines) permits only 5.26 minutes of downtime per year. Teams often set performance goals such as processing 99.99% of requests within 100ms. This is called a **Service Level Objective** or **SLO**.

-   **Partition Tolerance** allows the system to continue operating even if network partitions split the communication between different parts of the system. This means if a part of the system fails, such as a server, the system can adapt and continue functioning.

While it would be ideal to achieve all three of these qualities, the CAP Theorem states that it is impossible for a distributed system to simultaneously provide all three guarantees.

### Networking Basics

**Networking** is crucial for connecting different parts of a system, enabling efficient data exchange and communication. At its core, networking involves transmitting data between devices over a network, using protocols like TCP/IP to ensure reliable communication. The application layer, the top layer in the OSI model, includes protocols such as HTTP, HTTPS, FTP, and SMTP, which support functions like web browsing, file transfers, and email communication. These protocols facilitate interaction between clients and servers, allowing users to access and use applications seamlessly. Networking and application layer protocols are vital for the functionality and performance of distributed systems, ensuring all parts of the system communicate and work together effectively. This overview is quite basic; for a deeper understanding, you should explore more detailed resources on networking and application layer protocols.

### API Design

Next, let’s delve into another critical aspect of system design: API design. APIs, or Application Programming Interfaces, are the building blocks that allow different software components to communicate with each other. Here are some principles and best practices for designing robust APIs that will form the backbone of your system.

Suppose you are designing an API for a fansite dedicated to your favorite artist, such as my favorite group, Red Velvet. What functionalities should your application offer? To answer this, consider the user's perspective.

For example:

-   As a user, I want to log into my account.
-   As a user, I want to see posts made by other fans or retrieve a specific post.
-   As a user, I want to create my own posts.
-   As a user, I want to comment on posts.

These requirements can be translated into API endpoints:

-   POST /auth/login
-   GET /posts or /post/:id
-   POST /posts
-   POST /posts/{post_id}/comments

After defining your API needs, it’s time to choose an API paradigm. There are three common types of APIs: REST, GraphQL, and gRPC.

###### REST

**Representational State Transfer (REST)** is an architectural style for designing networked applications. REST uses standard HTTP methods like GET, POST, PUT, and DELETE to perform operations on resources identified by URLs. It is stateless, meaning each request from a client to a server must contain all the information needed to process the request. REST is widely adopted due to its simplicity, scalability, and compatibility with web standards.

**Pros**:

-   Simplicity in implementation and usage.
-   Leverages standard HTTP methods and status codes.
-   Wide adoption and extensive tooling support.

**Cons**:

-   Can lead to over-fetching or under-fetching of data.
-   May require multiple round-trips to the server for complex queries.
-   Lacks a formal schema, making it harder to enforce strict types.

###### GraphQL

**GraphQL** is a query language for APIs developed by Facebook. It allows clients to request exactly the data they need, reducing over-fetching and under-fetching issues. Clients can specify queries and receive tailored responses from a single endpoint. GraphQL provides a strongly typed schema and supports real-time updates with subscriptions.

**Pros**:

-   Allows precise data fetching, reducing unnecessary data transfer.
-   Strongly typed schema ensures predictable and error-free API interactions.
-   Supports complex queries and real-time updates efficiently.

**Cons**:

-   Can be more complex to implement and optimize, especially for beginners.
-   Requires learning a new query language and ecosystem.
-   Potential for overloading the server with expensive queries if not properly managed.

###### gRPC

**gRPC** is a high-performance, open-source framework developed by Google that uses HTTP/2 for transport, Protocol Buffers (Protobuf) for serialization, and supports multiple programming languages. It allows for efficient and robust communication between services, supporting both unary and streaming operations.

**Pros**:

-   High performance and efficiency due to binary serialization and HTTP/2.
-   Supports bi-directional streaming and real-time communication.
-   Strongly typed contracts with Protobuf ensure reliable and consistent APIs.

**Cons**:

-   Steeper learning curve and more complex setup compared to REST.
-   Limited human-readability of Protobuf messages.
-   Requires clients to use generated code, adding complexity to client-side development.

### Leveraging Caching and CDNs

**Caching** is a technique for storing copies of data in a temporary storage location, called a cache, to reduce access time and improve performance. There are different types of caching, each serving a specific purpose:

#### Client-Side Caching

Client-Side Caching stores data on the user's device, typically in the browser or within a mobile app. Common methods include browser cache, local storage, session storage, and cookies. This type of caching reduces the need to repeatedly fetch resources from the server, improving load times and reducing server load.

**Pros**:

-   Reduces server load and network traffic.
-   Enhances performance by providing faster data access.
-   Simple to implement with built-in browser and app support.

**Cons**:

-   Limited storage capacity.
-   Data may become stale if not managed properly.
-   Security concerns with sensitive data stored on the client-side.

#### Server-Side Caching

Server-Side Caching involves storing frequently accessed data on the server to reduce database load and improve response times. Common techniques include in-memory caching (using tools like Redis or Memcached), reverse proxy caching (like Varnish), and database caching.

**Pros**:

-   Significant performance improvements by reducing database queries.
-   Can handle larger amounts of data compared to client-side caching.
-   Transparent to the client, no changes needed on the client-side.

**Cons**:

-   Requires careful cache invalidation strategies to avoid serving stale data.
-   Increased complexity in managing and configuring the cache.
-   Additional infrastructure needed for caching servers.

##### CDN Caching

Content Delivery Network (CDN) Caching involves caching static and dynamic content at various edge locations around the world. CDNs store copies of resources closer to end-users, reducing latency and improving load times.

**Pros**:

-   Improved performance by reducing latency and load times.
-   Offloads traffic from the origin server, enhancing scalability.
-   Provides built-in redundancy and improves availability.

**Cons**:

-   Costs associated with using CDN services.
-   Complexity in configuring and managing CDN settings.
-   Potential for cache consistency issues if content changes frequently.

###### Database Caching

Database Caching involves storing query results or frequently accessed data in a fast, intermediate storage layer. Techniques include using in

-memory databases like Redis or Memcached or query caching within the database management system.

### Implementing Proxy Servers and Load Balancers

Proxy servers and load balancers play crucial roles in managing traffic and ensuring high availability and performance of web applications. Understanding their functions and types is key to designing a robust system.

###### Proxy Servers

Proxy servers act as intermediaries between clients and servers, forwarding client requests to servers and returning server responses to clients. There are several types of proxy servers, each serving a specific purpose:

**1. Forward Proxy**: A forward proxy sits between client devices and the internet, forwarding client requests to the internet. It is commonly used for caching, content filtering, and anonymity.

**Pros**:

-   Enhances security by hiding client IP addresses.
-   Improves performance through caching.
-   Allows content filtering and monitoring.

**Cons**:

-   Can introduce latency.
-   Requires configuration on client devices.

**2. Reverse Proxy**: A reverse proxy sits between client devices and backend servers, forwarding client requests to the appropriate server. It is used for load balancing, security, and caching.

**Pros**:

-   Distributes client requests across multiple servers, improving load balancing.
-   Enhances security by hiding server IP addresses.
-   Can cache content to improve performance.

**Cons**:

-   Single point of failure if not properly managed.
-   Adds complexity to the system.

**3. Transparent Proxy**: A transparent proxy intercepts client requests without requiring any configuration on the client side. It is often used for content filtering and monitoring.

**Pros**:

-   No client configuration needed.
-   Effective for monitoring and filtering content.

**Cons**:

-   Can introduce latency.
-   Limited client control over proxy settings.

###### Load Balancers

Load balancers distribute incoming network traffic across multiple servers to ensure high availability, reliability, and performance. There are different types of load balancers, each with specific methods of distributing traffic:

**1. DNS Load Balancing**: DNS load balancing uses DNS to distribute traffic by returning different IP addresses based on server load or geographical location.

**Pros**:

-   Simple to implement.
-   Can distribute traffic globally.

**Cons**:

-   DNS caching can cause delays in updates.
-   Less control over traffic distribution.

**2. Hardware Load Balancers**: Hardware load balancers are dedicated devices that manage traffic distribution. They offer high performance and advanced features.

**Pros**:

-   High performance and reliability.
-   Advanced features like SSL termination and DDoS protection.

**Cons**:

-   Expensive to purchase and maintain.
-   Requires physical setup and management.

**3. Software Load Balancers**: Software load balancers are applications that run on standard servers to manage traffic distribution. They are flexible and cost-effective.

**Pros**:

-   Cost-effective and flexible.
-   Easy to scale and manage.

**Cons**:

-   May have lower performance compared to hardware solutions.
-   Requires server resources for operation.

**4. Application Load Balancers (ALBs)**: ALBs operate at the application layer (Layer 7) and make routing decisions based on application-level information, such as URL paths.

**Pros**:

-   Can make intelligent routing decisions based on application data.
-   Supports advanced features like content-based routing and sticky sessions.

**Cons**:

-   More complex to configure and manage.
-   May introduce additional latency.

**5. Network Load Balancers (NLBs)**: NLBs operate at the transport layer (Layer 4) and make routing decisions based on network information, such as IP addresses and TCP/UDP ports.

**Pros**:

-   High performance with low latency.
-   Simple to configure and manage.

**Cons**:

-   Limited to basic load balancing based on network information.
-   Fewer advanced features compared to ALBs.

### Optimizing Database Design

When designing the database for your web application, it's important to consider various factors to ensure it performs well and scales effectively. There are two main types of databases to choose from: relational and non-relational.

**Relational databases**, like MySQL and PostgreSQL, use structured tables and SQL (Structured Query Language) for managing data. They follow **ACID** principles—Atomicity, Consistency, Isolation, and Durability—which guarantee that transactions are processed reliably and maintain data integrity.

**Non-relational databases**, like MongoDB and Cassandra, offer flexibility by storing data in formats like documents or key-value pairs. They are particularly useful for handling large volumes of unstructured data and are designed to scale out easily across multiple servers.

To ensure your database is scalable and performant, consider the following techniques:

**In-memory databases**, such as Redis and Memcached, store data directly in the server’s RAM rather than on disk. This approach provides extremely fast access times, making these databases ideal for caching frequently accessed data to improve overall performance and reduce the load on your primary database.

**Sharding** is a technique used to split a large database into smaller, more manageable pieces called shards. Each shard is stored on a different server, which helps distribute the load and makes it easier to scale the database horizontally as your data grows.

**Indexing** involves creating special data structures that improve the speed of data retrieval operations. By indexing the columns you frequently query, you can significantly reduce the time it takes to fetch results. Additionally, **query optimization** focuses on refining the queries you run against your database to ensure they execute as efficiently as possible. Both indexing and query optimization help maintain quick response times and handle larger volumes of data effectively.

## Whew, that was a lot.

Designing and building a web application involves a meticulous process that requires careful planning and understanding of several key concepts. From establishing a solid system design blueprint to addressing the intricacies of networking, API design, caching, load balancing, and database management, each aspect plays a crucial role in ensuring your application performs efficiently and scales effectively.
