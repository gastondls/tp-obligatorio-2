import { useEffect } from "react"
import { useState } from "react"
import "./Main.css"
const Main = () => {
    const [productos, setProductos] = useState([])
    const [error, setError] = useState(null)

    const fetchingProducts = async () => {
        try {
        const respuesta = await fetch ("https://fakestoreapi.com/products")
        const data = await respuesta.json()
        setProductos(data)
        } catch (error) {
            setError("No pude capturar los productos")
        }
        
    }

    useEffect(() => {
        fetchingProducts()
    }, [])
  
    return(
    <main>
    <section className="banner">
        <h1>Bienvenido a la tienda </h1>
    </section>
    <section className="productList">
        {
            error && <p>{error}</p>
        }
        {
            productos.length === 0 && !error && <p>No hay productos disponibles</p>
        }
    {
        productos.map((producto) => (
            <div className="product">
                <img src={producto.image} alt={producto.title} />
            <p>{producto.title}</p>
            <p>Precio: ${producto.price}</p>
            <p>{producto.description}</p>
            <button>Comprar</button>
            </div>
        ))
    }
    </section>
    </main>

    )
}

export default Main