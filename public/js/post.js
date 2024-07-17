document.addEventListener("DOMContentLoaded", () => {
  const postForm = document.getElementById("postForm");

  if (postForm) {
    postForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(postForm);

      try {
        const response = await fetch("/api/posts", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          window.location.href = "/";
        } else {
          const data = await response.json();
          alert(data.error || "Post creation failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }
});
