
import { useState } from "react";
import Layout from "../Layout/Layout";
import "./Registro.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import {auth} from "../../config/firebase"

const Registro = () => {
  const [name, setName] = useState("") 
  const [email, setEmail] = useState("")
  const [apellido, setApellido] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  const navigate = useNavigate()
  const { register } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setMessage(null)

    if (!name || !apellido || !email || !password) {
      setError("Debes completar todos los campos...")
      return
    }

    if (name.length < 2) {
      setError("El nombre debe tener al menos 2 caracteres.")
      return
    }

    if (apellido.length < 2) {
  setError("El apellido debe tener al menos 2 caracteres.")
  return
}

    try {
      await register(email, password)
      setMessage("Usuario registrado con éxito...")
      setName("")
      setApellido("")      
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
  <Layout>
    <section className="registro-form-section">
      <form onSubmit={handleSubmit}>
        <h1 className="registro-title">Registrate</h1>

        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />

        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Registrarme</button>

        {error && <p className="error">{error}</p>}
        {message && <p className="success-message">{message}</p>}
      </form>
    </section>
  </Layout>
)
}

export default Registro
