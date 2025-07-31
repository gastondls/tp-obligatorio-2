import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./Main.css"
import { db } from "../../config/firebase.js"
import { useAuth } from "../../context/AuthContext.jsx"
import {collection, getDocs, deleteDoc, doc } from "firebase/firestore"


import banner1 from "../../components/Main/banner1.png"
import banner2 from "../../components/Main/banner2.png"
import banner3 from "../../components/Main/banner3.png"

const Main = () => {
    const [productos, setProductos] = useState([])
    const [error, setError] = useState(null)
    const { user } = useAuth()

      const images = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);


    const fetchingProducts = async () => {
        const productosRef = collection(db, "productos")

        const snapshot = await getDocs(productosRef)
const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setProductos(docs)
        
    }

    useEffect(() => {
        fetchingProducts()
    }, [])

    const handleDeleteProduct = async (id) => {
    try {
        if(confirm("Estas seguro de eliminar el producto?")) {
        await deleteDoc(doc(db, "productos", id))
        setProductos(productos.filter(p => p.id !== id))
        }
    } catch (error) {
        setError("Error al eliminar el producto")
    }
    }

    return(
    <main>

      <section className="banner-carousel">
        <img src={images[currentIndex]} alt="banner" className="banner-image" />
        <div className="arrow prev" onClick={prevSlide}>&#10094;</div>
        <div className="arrow next" onClick={nextSlide}>&#10095;</div>
      </section>


      <section className="productList">
        {error && <p>{error}</p>}
        {productos.length === 0 && !error && <p>No hay productos disponibles</p>}

        {productos.map((producto) => (
        <div className="product" key={producto.id}>
        <Link
        to={`/producto/${producto.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <p className="product-title">{producto.name}</p>
        <p className="product-price">Precio: ${producto.price}</p>
        <p className="product-description">{producto.description}</p>
        <p className="product-sku">SKU: {producto.sku}</p>
        </Link>

    {user && (
      <div className="user-buttons">
        <Link className="edit-button" to={`/editar-producto/${producto.id}`}>
          Editar
        </Link>
        <button onClick={() => handleDeleteProduct(producto.id)}>Borrar</button>
      </div>
    )}
    <button>Comprar</button>
  </div>
))}
      </section>
    </main>
  );
};

export default Main