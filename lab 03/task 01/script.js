
  const html = document.documentElement;
  const toggleBtn = document.getElementById("themeToggle");
  const moon = document.getElementById("icon-moon");
  const sun = document.getElementById("icon-sun");

  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  toggleBtn.addEventListener("click", () => {
    const newTheme =
      html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });

  function setTheme(theme) {
    html.setAttribute("data-bs-theme", theme);

    if (theme === "dark") {
      moon.classList.add("d-none");
      sun.classList.remove("d-none");
    } else {
      sun.classList.add("d-none");
      moon.classList.remove("d-none");
    }
  }

console.log("hello");
