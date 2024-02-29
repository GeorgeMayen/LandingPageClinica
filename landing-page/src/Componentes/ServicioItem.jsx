import React from "react";

function ServicioItem(props) {
  const imagenStyle = {
    width: "700px",
    height: "400px", // Ajusta la altura según tus necesidades
    objectFit: "cover", // Esto hará que la imagen se ajuste y se recorte si es necesario
  };

  return (
    <div className="w-full h-full flex lg:flex-row min-[320px]:flex-col pb-8">
      {/* Imagen del servicio a la izquierda */}
      <img
        src={props.imagen}
        alt={`Imagen de ${props.titulo}`}
        style={imagenStyle}
        className="lg:ml-150px mx-auto"
      />

      {/* Título y descripción del servicio a la derecha */}
      <div className=" bg-pink lg:mt-0 lg:w-1/2 min-[320px]:mx-auto min-[320px]:mt-4">
        <h2 className="lg:ml-10 text-2xl font-bold text-center text-3xl ">{props.titulo}</h2>
        <p className="lg:ml-10 text-justify w-full text-xl">{props.descripcion}</p>
      </div>
    </div>
  );
}

export default ServicioItem;