export function useMDXComponents(components) {
    return {
        h1: ({ children }) => (
            <h1 style={{ color: 'red', fontSize: '48px' }}>{children}</h1>
          ),
          ...components
    }
  }