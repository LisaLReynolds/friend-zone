document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".like-button");

  likeButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      const postId = button.getAttribute("data-post-id");

      try {
        const response = await fetch(`/api/likes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ PostId: postId }),
        });

        if (response.ok) {
          const data = await response.json();
          document.getElementById(`like-count-${postId}`).textContent =
            data.likesCount;
        } else {
          const data = await response.json();
          alert(data.error || "Failed to like the post");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  });
});
