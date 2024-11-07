document.addEventListener("DOMContentLoaded", () => {
    function agregarImagenes() {
      // Obtener los valores de los campos de entrada por su id
      const nombre = document.getElementById("nombre").value;
      const precio = document.getElementById("precio").value;
      const urlImagen = "img/" + document.getElementById("imagenUrl").value; // Agregar prefijo 'img/'
  
      if (!nombre || !precio || !urlImagen) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      // Crear contenedor para el producto
      const contenedorImagen = document.createElement("div");
      contenedorImagen.classList.add("producto-item");
  
      // Crear el elemento de texto para nombre y precio
      const infoProducto = document.createElement("div");
      infoProducto.classList.add("producto-info");
      infoProducto.innerHTML = `<p>Nombre: ${nombre}</p><p>Precio: ${precio}</p>`;
  
      // Crear el elemento de imagen
      const nuevaImagen = document.createElement("img");
      nuevaImagen.src = urlImagen;
      nuevaImagen.alt = nombre;
  
      // Añadir texto y imagen al contenedor del producto
      contenedorImagen.appendChild(infoProducto);
      contenedorImagen.appendChild(nuevaImagen);
  
      // Agregar el contenedor del producto al contenedor principal
      document.querySelector(".contenedor-imagenes").appendChild(contenedorImagen);
    }
  
    function limpiarImagenes() {
      const contenedor = document.querySelector(".contenedor-imagenes");
      contenedor.innerHTML = ""; // Eliminar todo el contenido
    }
  
    document.querySelector(".enviar").addEventListener("click", agregarImagenes);
    document.querySelector(".limpiar").addEventListener("click", limpiarImagenes);
  });