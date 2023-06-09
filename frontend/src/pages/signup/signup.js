import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { useSignup } from "../../hooks/useSignup"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(username,email, password, role)
  }

  return (
    <form className="signup">
      <h3>Sign Up</h3>

      <label>Username:</label>
      <input 
        type="text" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username} 
      />
      
      <label>Email address:</label>
      <input 
        type="email" 
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
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
          I am:
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="A teacher"
              name="formHorizontalRadios"
              onChange={()=>{setRole("teacher")}}
              id="A teacher"
            />
            <Form.Check
              type="radio"
              label="A student"
              name="formHorizontalRadios"
              onChange={()=>{setRole("student")}}
              id="A student"
            />
          </Col>
        </Form.Group>
      </fieldset>
      
    <Button disabled={isLoading} variant="dark" onClick={handleSubmit}>Sign Up</Button>
    {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup