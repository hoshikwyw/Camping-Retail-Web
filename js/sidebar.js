function toggleNavbar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.transitionDelay = "0.1s";
    sidebar.style.transform =
      sidebar.style.transform === "translateX(0px)"
        ? "translateX(-1000000px)"
        : "translateX(0px)";
  }