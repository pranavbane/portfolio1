import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasVisited, setHasVisited] = useState(false)

  useEffect(() => {
    const visited = sessionStorage.getItem('hasVisited')
    if (visited) {
      setHasVisited(true)
      setIsLoading(false)
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false)
        setHasVisited(true)
        sessionStorage.setItem('hasVisited', 'true')
      }, 3500)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ isLoading, setIsLoading, hasVisited }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
