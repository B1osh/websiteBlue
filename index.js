document.querySelectorAll("button[data-target]").forEach(button => {
    button.addEventListener("click", () => {
        const target = button.getAttribute("data-target");
        window.location.href = target;
    });
});
