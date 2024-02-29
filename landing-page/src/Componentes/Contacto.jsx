import React from "react";

function Contacto(prop) {
  const imagenContacto = require(`../Imagenes/${prop.imagen}.jpg`);

// Supongamos que tienes una lista de información de contacto
const informacionContacto = [
  {
    icono: require("../Imagenes/IconoDir.png"),
    titulo: "Dirección",
    parrafo: "11 calle 10-56 zona 1.",
    parrafo2: " Edificio Santo Domingo, 6to Nivel Of. 602",
  },
  {
    icono: require("../Imagenes/iconoCorr.png"),
    titulo: "Correo Electrónico",

    parrafo2: "nancycentenoaldana@yahoo.es",
  },
  {
    icono: require("../Imagenes/iconoTel.png"),
    titulo: "Teléfono",
    parrafo: ["Oficina: ", "4469-8179"]
  },
];

return (
  <div className="h-full w-full bg-gray-100 pt-4">
    {/* Imagen principal */}
    <img src={imagenContacto} alt="Imagen de inicio" className="lg:w-full lg:h-500 mb-10 lg:mx-0 lg:mt-0 min-[320px]:w-64 min-[320px]:h-64 min-[320px]:mx-auto " />

    {/* Información de contacto */}
    <div className="lg:grid lg:grid-cols-3 gap-4 lg:mt-10  min-[320px]:p-10 ">
      {informacionContacto.map((item, index) => (
        <div key={index} className="text-center">
          <img
            src={item.icono}
            alt={item.titulo}
            className="w-10 h-10 mx-auto"
          />
          <p className="mt-2 text-black font-bold">{item.titulo}</p>
          <p className="text-black">{item.parrafo}</p>
          <p className="text-black">{item.parrafo2}</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default Contacto;