import Layout from "../Layout/Layout";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleName = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const validarEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!validarEmail(email)) {
      setError("El email no es válido");
      return;
    }

    
    setError("");
    console.log({ email, password });
    alert("Login completado");
    
setEmail("");
setPassword("");

  };

  return (
    <Layout>
      <h1 className="login-title">Login</h1>
      <section className="registro-form-section">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleName}
            value={email}
          />

        <label htmlFor="password">Contraseña</label>
        <input
            type="password"
            name="password"
            id="password"
            onChange={handlePassword}
            value={password}
        />
        <button type="submit">Ingresar</button>
        {error && <p className="error">{error}</p>}
        </form>
      </section>
    </Layout>
  );
};

export default Login;
