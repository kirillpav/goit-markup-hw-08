const refs = {
            openMenuBtn: document.querySelector("[data-open-menu]"),
            closeMenyBtn: document.querySelector("[data-open-menu]"),
            menu: document.querySelector("[data-menu]"),
        };

        refs.openMenuBtn.addEventListener("click", toggleMenu);
        refs.closeMenuBtn.addEventListener("click", toggleMenu);

        refs.backdrop.addEventListener("click", logBackdropClick);

        function toggleMenu() {
            refs.menu.classList.toggle("is-hidden");
        }