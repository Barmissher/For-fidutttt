document.addEventListener('DOMContentLoaded', function() {
  // Initialize audio
  const audio = new Audio('https://audio.jukehost.co.uk/Y2gK7feZ5NDUVEXOnSK5HHkcALyaU5bV');
  const playButton = document.querySelector('.play-music');
  let confettiActive = false;
  
  // Play/Pause Music
  if (playButton) {
    playButton.addEventListener('click', function() {
      if (audio.paused) {
        audio.play()
          .then(() => {
            playButton.textContent = 'Pause Lagu';
            startConfetti();
          })
          .catch(error => {
            console.error('Error playing audio:', error);
            playButton.textContent = 'Error: Klik untuk coba lagi';
          });
      } else {
        audio.pause();
        playButton.textContent = 'Putar Lagu Ulang Tahun';
        stopConfetti();
      }
    });
  }
  
  // Confetti Effect
  function startConfetti() {
    if (confettiActive) return;
    
    const confettiSettings = { 
      target: 'confetti',
      max: 120,
      size: 1.5,
      animate: true,
      props: ['circle', 'square', 'triangle', 'line'],
      colors: [[255, 99, 71], [255, 215, 0], [138, 43, 226], [30, 144, 255]],
      clock: 25
    };
    
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    confettiActive = true;
    window.currentConfetti = confetti;
  }
  
  function stopConfetti() {
    if (window.currentConfetti) {
      window.currentConfetti.clear();
      confettiActive = false;
    }
  }

  // Letter Modal
  const letterBtn = document.getElementById('letterBtn');
  if (letterBtn) {
    letterBtn.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('letterModal').style.display = 'flex';
    });
  }

  // Falling Flowers
  createFallingFlowers();
});

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

function createFallingFlowers() {
  const container = document.getElementById('falling-flowers');
  const flowerEmojis = ['🌸', '🌺', '🌷', '🌼', '🏵️', '💐', '🌻'];
  
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const flower = document.createElement('div');
      flower.innerHTML = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
      flower.style.position = 'absolute';
      flower.style.fontSize = `${Math.random() * 20 + 10}px`;
      flower.style.left = `${Math.random() * 100}vw`;
      flower.style.top = '-30px';
      flower.style.opacity = Math.random() * 0.5 + 0.5;
      flower.style.animation = `fall ${Math.random() * 10 + 5}s linear infinite`;
      flower.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(flower);
    }, i * 300);
  }
}

// Add CSS Animation
const style = document.createElement('style');
style.innerHTML = `@keyframes fall { to { transform: translateY(100vh) rotate(360deg); } }`;
document.head.appendChild(style);
