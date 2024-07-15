document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logoutButton");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("token");
      window.location.href = "/login";
    });
  }
});
