import { useEffect, useState } from "react"
import Layout from "../Layout/Layout"
import "../Dashboard/Dashboard.css"
import {db} from "../../config/firebase"
import {addDoc, collection} from "firebase/firestore"
import { useNavigate } from "react-router-dom"


const Dashboard = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const [error, setError] = useState(null)
  const [isDisabled, setIsDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const [sku, setSku] = useState("")

  const navigate = useNavigate()


  const productosRef = collection(db, "productos")

  const createProduct = async (productData) => {
    const createdAt =  Date.now()
    const updatedAt =  Date.now()
    try {
      const productRef = await addDoc (productosRef, {createdAt, updatedAt, ...productData})
      return productRef
    } catch (error) {
      console.log("Error al cargar el producto")
    }
  }
  const handleName = (event) => {
    setName(event.target.value)
  }

  const handlePrice = (event) => {
    setPrice(Number(event.target.value))
  }

  const handleDescription =  (event) => {
    setDescription(event.target.value)
  }
  const handleSku = (event) => {
  setSku(event.target.value)
}

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError("")

    if (!name || !price || !description || !sku) {
      setError("Necesitas completar los campos.")
      return
    }

    if (name.length < 2) {
      setError("El nombre debe tener una largo mínimo de 2 caracteres.")
      return
    }

    if (price < 0) {
      setError("Debes agregar un precio mayor a 0")
      return
    
      if (!sku) {
  setError("Debes ingresar un SKU para el producto.")
  return
}
    }

    const newProduct = { name, price, description, sku}

    console.log("Nuevo producto: ", newProduct)
  try {
    await createProduct(newProduct)
    setMessage("Producto creado con éxito")
    setName("")
    setPrice(0)
    setDescription("")
    setSku("")

    setTimeout(() => {
      setMessage("")
      navigate("/")
    },2000)

  } catch (error) {
    setError(error.message)
  }
  }

  useEffect(() => {
    if (name && price && description) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [name, price, description])

  return (
    <Layout>
      <section id="admin-section">
        <h1>Panel de administración</h1>
        <p>Aquí puedes administrar todos tus productos. Puedes agregar, modificar o borrar lo que desees.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre del producto:</label>
          <input type="text" name="name" id="name" onChange={handleName} value={name} />

          <label htmlFor="price">Precio del producto:</label>
          <input type="number" name="price" id="price" onChange={handlePrice} value={price} />

          <label htmlFor="description">Descripción del producto:</label>
          <textarea name="description" id="description" onChange={handleDescription} value={description}></textarea>

          <label htmlFor="sku">SKU del producto:</label>
          <input type="text" name="sku" id="sku" onChange={handleSku} value={sku} />

          <button disabled={isDisabled}>Agregar producto</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {message && <p style={{ color: "green" }}>{message}</p>}
        </form>
      </section>
    </Layout>
  )
}

export default Dashboard