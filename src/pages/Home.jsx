import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";

import { db } from "../services/firebase";

/* COMPONENTES */
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Viewer3D from "../components/Viewer3D";

/* ESTILOS */
import "./Home.css";

function Home() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const querySnapshot = await getDocs(
          collection(db, "Productos")
        );

        const data = querySnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data(),
          })
        );

        setProducts(data);

      } catch (error) {

        console.error(
          "Error cargando productos:",
          error
        );

      } finally {

        setLoading(false);

      }
    };

    fetchProducts();

  }, []);

  /* LOADING */

  if (loading) {

    return (

      <div className="loading-container">

        <h2>Cargando catálogo...</h2>

      </div>
    );
  }

  return (

    <div className="home-container">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* VISOR 3D */}
      <section className="viewer-section">

        <div className="viewer-text">

          <h2>
            Experiencia 3D ✨
          </h2>

          <p>
            Explora prendas interactivas,
            rota los modelos y visualiza
            cada detalle de manera inmersiva.
          </p>

        </div>

        <Viewer3D />

      </section>

      {/* CATÁLOGO */}
      <section className="catalogo">

        <h2 className="catalogo-title">
          Catálogo
        </h2>

        <div className="grid">

          {products.length === 0 ? (

            <p>
              No hay productos aún
            </p>

          ) : (

            products.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))

          )}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <h3>Bazar 3D ✨</h3>

        <p>
          Moda interactiva y experiencia premium
        </p>

      </footer>

    </div>
  );
}

export default Home;