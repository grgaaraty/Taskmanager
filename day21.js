document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.boxShadow = "0 10px 30px rgba(79,70,229,0.4)";
  });
  box.addEventListener('mouseleave', () => {
    box.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  });
});

const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
let progress = 0;
const target = 70; // You can change this to your progress %

const loading = setInterval(() => {
  if (progress < target) {
    progress++;
    progressFill.style.width = progress + "%";
    progressText.textContent = `Progress: ${progress}% completed`;
  } else {
    clearInterval(loading);
    progressText.textContent = `🎉 Great job, Aaraty! You’ve completed ${target}% of your Web Dev Journey!`;
  }
}, 30);
