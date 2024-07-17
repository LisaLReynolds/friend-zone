document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(registerForm);

      try {
        const response = await fetch("/api/users/register", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          alert(data.message);
          window.location.href = "/";
        } else {
          const data = await response.json();
          alert(data.error || "Registration failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }
});
