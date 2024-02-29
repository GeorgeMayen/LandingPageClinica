import React from "react";

function Clinica(prop) {
  const edificio = require(`../Imagenes/${prop.edificio}.jpeg`);
  // Supongamos que tienes una lista de imágenes y sus descripciones
  const imagenesConDescripcion = [
    {
      imagen: require("../Imagenes/Edificio.jpg"),
      descripcion: "Edificio Santo Domingo",
    },
    {
      imagen: require("../Imagenes/oficina602.jpg"),
      descripcion: "Oficina 602",
    },
    {
      imagen: require("../Imagenes/LugarEspera.jpg"),
      descripcion: "Sala de espera",
    },
    {
      imagen: require("../Imagenes/Secretaría.jpg"),
      descripcion: "Secretaría",
    },
    {
      imagen: require("../Imagenes/Doctora.jpg"),
      descripcion: "Área de entrevista",
    },
    {
      imagen: require("../Imagenes/LugarExamen.jpg"),
      descripcion: "Área de examen",
    },
  ];

  return (
    <div className="h-full w-full bg-gray-100 pb-50 ">

 {/* Información del edificio centrada */}
 <div className="w-full lg:flex min-[320px]:grid lg:justify-center items-center p-6">
        <img
          src={edificio}
          alt="Edificio Santo domingo"
          className="min-[320px]:mx-auto lg:mx-16 w-128 h-500 mb-4"
        />
        <p className="min-[320px]:mx-auto min-[320px]:text-center lg:mx-0 lg:text-left text-xl">
          Dra.Nancy A. Centeno Aldana <br />
          Ginecóloga-Obstetra <br />
          Dirección: 11 calle 10-56 zona1<br />
          Edificio Santo Domingo. 6to. Nivel Of.602
        </p>
      </div>
      <div className="text-center text-4xl font-bold">
        <p>Instalaciones</p>
      </div>
      {/* Cuadrícula de imágenes y descripciones */}
      <div className="grid lg:grid-cols-3 gap-4 mt-6 lg:ml-5 ">
        {imagenesConDescripcion.map((imagenConDescripcion, index) => (
          <div key={index} className="text-center">
            <img
              src={imagenConDescripcion.imagen}
              alt={`Imagen ${index + 1}`}
              className="lg:w-600 lg:h-400 mx-auto"
            />
            <p className="mt-2 text-black text-xl">{imagenConDescripcion.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Clinica;
