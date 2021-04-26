import React, { useEffect, useState } from 'react'

export const HomeView = () => {
  const [count, setcount] = useState(0)

  useEffect(() => {
    ("Component is being rendered")
    return () => {
      ("Component is being removed")
    }
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>Increment with 1</button>
    </div>
  )
}
