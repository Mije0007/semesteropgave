(() => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("#site-nav");

  // Stop hvis elementerne ikke findes
  if (!burger || !nav) return;

  const setOpen = (open) => {
    burger.classList.toggle("is-open", open);
    nav.dataset.state = open ? "open" : "closed";
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Luk menu" : "Åbn menu");
  };

  // Klik på burger
  burger.addEventListener("click", () => {
    const isOpen = nav.dataset.state === "open";
    setOpen(!isOpen);
  });

  // Klik på link → luk menu (kun mobil)
  nav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    if (window.matchMedia("(max-width: 899px)").matches) {
      setOpen(false);
    }
  });

  // Luk med ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  });

  // Reset hvis man går fra mobil → desktop
  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 900px)").matches) {
      setOpen(false);
    }
  });
})();
