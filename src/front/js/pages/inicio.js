import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ProductCard } from "../component/ProductCard";
import "../../styles/inicio.css";
import Masonry from "react-masonry-css";
import black from "../../img/black.png";

export const Inicio = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.productosInicio();
    store.listaCesta = false;
    store.listaPerfil = false;
    store.listaPedidos = false;
    store.productoPedido = false;
  }, []);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const prd = store.productos;

  useEffect(() => {
    localStorage.getItem("productSelect") &&
      localStorage.removeItem("productSelect");
  }, []);

  return (
    <div className="container-fluid container-inicio">
      {/* Seccion portada */}

      <div className="container-portada d-flex justify-content-center align-items-center">
        <div className="row row-logo d-flex align-items-center">
          <div className="contenedor-logo">
            <p className="logo-portada">Libertè!</p>
            {/* <img
              className="img-logo"
              // src={
              //   "https://res.cloudinary.com/yisusrobles/image/upload/v1657809752/image/lymgdwlcjwbseldkzljg.png"
              // }
              src={black}
              alt="logo-liberte"
            /> */}

          </div>
        </div>
      </div>

      {/* Seccion productos */}

      <div className="container container-titulo-productos d-flex justify-content-center">
        <p className="titulo-seccion-producto fst-italic fw-light mt-3 mb-4">
          Productos
        </p>
      </div>

      <div className="container container-lista-productos d-flex justify-content-center">
        <div className="row  row-productos">
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {prd ? (
              prd.map((ele, i) => {
                let productCard = (
                  <ProductCard
                    key={ele.id}
                    id={ele.id}
                    nombre={ele.nombre}
                    img={ele.foto_producto}
                    precio={ele.precio}
                    descripcion={ele.descripcion}
                    dimensiones={ele.dimensiones}
                    categoria={ele.categoria}
                    nombreArtista={ele.vendedor_nombre}
                    fotoArtista={ele.vendedor_foto}
                    idUser={ele.vendedor_user_id}
                  />
                );
                return productCard;
              })
            ) : (
              <div className="no"></div>
            )}
          </Masonry>
        </div>
      </div>
    </div>
  );
};
