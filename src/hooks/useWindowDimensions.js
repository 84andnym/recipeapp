import { useState, useEffect } from 'react'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

export const useWindowDimensions = () => {
  const [windowDimenstions, setWindowDimensions] = useState(getWindowDimensions())

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    console.log(windowDimenstions)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimenstions
}
