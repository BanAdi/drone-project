document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const siteMenu = document.querySelector(".links-site");

  if (!toggle || !siteMenu) return;

  const closeMenu = () => {
    siteMenu.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = siteMenu.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  siteMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 620px)").matches) closeMenu();
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 620) closeMenu();
  });
});
