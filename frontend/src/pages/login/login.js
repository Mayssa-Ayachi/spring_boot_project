import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { useLogin } from "../../hooks/useLogin"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form className="login">
      <h3>Log in</h3>
      
      <label>Username</label>
      <input 
        type="text" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        autoComplete="on"
      />

    <Button variant="dark" disabled={isLoading} onClick={handleSubmit}>Log In</Button>
    {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login