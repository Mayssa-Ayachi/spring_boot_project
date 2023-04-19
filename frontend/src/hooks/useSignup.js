import { useState } from 'react'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const signup = async (username,email, password, role) => {
    setIsLoading(true)
    setError(null)

    console.log([role])

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, email, password, role:[role]})
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      console.log("ok")
    }
    else{
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
    }
  }

  return { signup, isLoading, error }
}