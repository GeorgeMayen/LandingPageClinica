import React from "react";
import { useLocation, Link } from "react-router-dom";

function MenuBar(prop) {
  // Obtiene la ubicación actual
  const location = useLocation();

  // Verifica si la ubicación actual corresponde a la página indicada
  const Home = location.pathname === "/";
  const Clinica = location.pathname === "/Clinica";
  const Servicios = location.pathname === "/Servicios";
  const Contacto = location.pathname === "/Contacto";

  return (
    //bg-gray quiere decir: fondo gris,  text-white es texto blanco, p-4 es padding de 4

    <nav className="w-full lg:h-24 p-3 bg-pink-600 flex text-2xl text-white lg:flex-row lg:mx-0 min-[320px]:flex-col min-[320px]:h-full">
  <div className="lg:w-1/2 text-left flex items-center lg:flex-row min-[320px]:flex-col min-[320px]:w-full">
    <img
      className="w-20 h-20 rounded-full bg-white p-2 ml-3 "
      src={require(`../Imagenes/${prop.logo}.png`)}
      alt="Logo clínica"
    />
    <div className="text-center italic w-full  min-[320px]:w-full ">
      <p>Clínica de ginecología y obstetricia</p>
      <p>Dra. Nancy Centeno</p>
    </div>
  </div>
  <div className="w-1/2  flex min-[320px]:text-center items-center min-[320px]:justify-center lg:justify-end min-[320px]:mx-auto min-[320px]:pt-10 ">
    <ul className="flex lg:space-x-9 lg:flex-row lg:pb-10 min-[320px]:flex-col min-[320px]:space-x-0">
      <li>
        <Link to="/" className={Home ? "underline" : "hover:underline"}>
          Inicio
        </Link>
      </li>
      <li>
        <Link
          to="/Clinica"
          className={Clinica ? "underline" : "hover:underline"}
        >
          Clínica
        </Link>
      </li>
      <li>
        <Link
          to="/Servicios"
          className={Servicios ? "underline" : "hover:underline"}
        >
          Servicios
        </Link>
      </li>
      <li>
        <Link
          to="/Contacto"
          className={Contacto ? "underline" : "hover:underline"}
        >
          Contacto
        </Link>
      </li>
    </ul>
  </div>
</nav>




  );
}

export default MenuBar;
//Instalamos react router para el enrutamiento
//npm install react-router-dom

//Instalamos fontawesome
/*
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
 */
