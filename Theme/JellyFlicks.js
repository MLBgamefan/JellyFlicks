// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Target all main page cards
  const cards = document.querySelectorAll(".card, .itemPosterCard, .posterCard");

  cards.forEach(card => {

    // Find the play button container
    const playBtn = card.querySelector(".cardOverlayContainer .playButton");

    if (playBtn) {
      // Style it like Netflix
      playBtn.style.backgroundColor = "#e50914"; // red circle
      playBtn.style.borderRadius = "50%";
      playBtn.style.width = "48px";
      playBtn.style.height = "48px";
      playBtn.style.display = "flex";
      playBtn.style.alignItems = "center";
      playBtn.style.justifyContent = "center";

      // Icon inside
      const icon = playBtn.querySelector("i");
      if (icon) {
        icon.style.color = "#fff";
        icon.style.fontSize = "20px";
      }

      // Optional: scale on hover
      playBtn.addEventListener("mouseenter", () => {
        playBtn.style.transform = "scale(1.1)";
      });
      playBtn.addEventListener("mouseleave", () => {
        playBtn.style.transform = "scale(1)";
      });
    }

  });

});
