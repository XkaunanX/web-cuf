document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los artículos FAQ
    const faqItems = document.querySelectorAll(".faq-padding");

    faqItems.forEach((item) => {
        const title = item.querySelector(".faq-title");

        title.addEventListener("click", () => {
            // Alterna la clase activa para abrir/cerrar
            item.classList.toggle("faq-padding--add");
            const answer = item.querySelector(".faq-show");

            // Cambia la altura según el estado
            if (item.classList.contains("faq-padding--add")) {
                answer.style.height = answer.scrollHeight + "px";
            } else {
                answer.style.height = 0;
            }

            // Gira la flecha
            const arrow = item.querySelector(".faq-arrow img");
            arrow.classList.toggle("faq-arrow--rotate");
        });
    });
});
