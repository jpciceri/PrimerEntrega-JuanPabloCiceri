
        const buscar = document.getElementById('texto_busqueda');
        buscar.addEventListener("keyup", (ev) => {        
            if(ev.key === "Enter"){
                renderProductos(ev.target.value);
            }        
        });
    
        document.getElementById('boton_buscar').addEventListener("click", (ev) => {
            renderProductos(document.getElementById('texto_busqueda').value.toLowerCase());
        });
    