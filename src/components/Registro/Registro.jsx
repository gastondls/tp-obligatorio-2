
import { useState } from "react";
import Layout from "../Layout/Layout";
import "./Registro.css";

const Registro = () => {
  const [formData, setFormData] = useState({name: "",email: "",password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validarEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!validarEmail(email)) {
      setError("El email no es válido");
      return;
    }


    setError("");
    console.log("Registro exitoso:", formData);
    alert("Registro completado");


    setFormData({name: "",email: "",password: "",});
  };

  return (
    <Layout>
      <h1 className="registro-title">Registrate</h1>
      <section className="registro-form-section">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
        />

        <label htmlFor="password">Contraseña</label>
        <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
        />

        <button type="submit">Registrarme</button>

        {error && <p className="error">{error}</p>}
        </form>
    </section>
    </Layout>
  );
};

export default Registro;
