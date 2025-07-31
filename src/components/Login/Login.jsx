import Layout from "../Layout/Layout";
import "./Login.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import {useAuth} from "../../context/AuthContext.jsx"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()

  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setMessage(null)

    if (!email || !password) {
      setError("Debes completar los campos...")
      return
    }

    try {
      await login(email, password)
      setMessage("Usuario loguedo con éxito...")
      setEmail("")
      setPassword("")
      setTimeout(() => {
        setMessage("Redirigiendo al home...")
      }, 2000)
      setTimeout(() => {
        navigate("/")
      }, 3000)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <Layout>
        <section className="login-section">
          <form onSubmit={handleSubmit} >
            <h1 className="login-title">Login</h1>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setEmail(e.target.value)}
            />

            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button>Iniciar sesión</button>
          </form>
          <h5 className="error-message">{error}</h5>
          <h5 className="success-message">{message}</h5>
        </section>
      </Layout>
    </>
  )
}

export default Login
