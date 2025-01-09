// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const heart = document.getElementById('heart');
  const message = document.getElementById('message');

  // Yes button interaction
  yesBtn.addEventListener('click', () => {
    message.textContent = "Yay! You're my Valentine! ❤️";
    message.style.color = "green";
    heart.style.animation = "heartPulse 1s infinite";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  });

  // No button interaction
  noBtn.addEventListener('click', () => {
    message.textContent = "Oops, maybe next time... 😢";
    message.style.color = "red";
    noBtn.disabled = true; // Disable "No" button after rejection
  });

  // Fun animation when clicking "Yes"
  const heartPulse = `
    @keyframes heartPulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(heartPulse, styleSheet.cssRules.length);
});
