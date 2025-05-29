document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form-sugerencia");
    const mensaje = document.getElementById("mensaje-confirmacion");

    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const jerga = document.getElementById("jerga").value.trim();
        const significado = document.getElementById("significado").value.trim();

        if (!jerga || !significado) {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        try {
            const respuesta = await fetch('http://localhost:3000/api/sugerencias', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, jerga, significado })
            });

            if (!respuesta.ok) throw new Error("Error al enviar la sugerencia");

            const resultado = await respuesta.json();
            console.log("ID insertado:", resultado.id);

            formulario.reset();
            formulario.style.display = "none";
            mensaje.style.display = "block";
        } catch (error) {
            console.error("Error al enviar sugerencia:", error);
            alert("Hubo un problema al enviar tu sugerencia. Inténtalo más tarde.");
        }
    });
});
