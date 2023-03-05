import React from "react";

export const ButtonMsg = () => {
  return (
    <button
      onClick={() => {
        alert("Hola mundo desde remote app");
      }}
    >
      Este es un boton externo
    </button>
  );
};
