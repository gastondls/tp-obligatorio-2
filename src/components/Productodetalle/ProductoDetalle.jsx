import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import Layout from "../Layout/Layout";
import './ProductoDetalle.css';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  const toggleDescripcion = () => {
    setMostrarDescripcion(!mostrarDescripcion);
  };

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("Producto no encontrado");
        }
      } catch (err) {
        setError("Error al obtener el producto");
      }
    };

    fetchProducto();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!producto) return <p>Cargando producto...</p>;

  return (
    <Layout>
      <div className="info-producto-container">
        <div className="producto-detalles">
          <div className="detalles-card">
            <h1 className="nombre-producto">{producto.name}</h1>
            <p className="precio">${producto.price}</p>
            {producto.sku && <p className="sku">SKU: {producto.sku}</p>}

            <div className="descripcion-container">
              <button className="toggle-descripcion" onClick={toggleDescripcion}>
                {mostrarDescripcion ? 'Ocultar descripción' : 'Ver descripción'}{' '}
                <span className={`flecha ${mostrarDescripcion ? 'abierta' : ''}`}>
                  ▼
                </span>
              </button>
              {mostrarDescripcion && (
                <div className="descripcion-texto">
                  {producto.description.split('\n').map((line, index) => (
                    <p key={index} className="material">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button className="agregar-carrito">
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductoDetalle;
