// Music and Confetti Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize audio
  const audio = new Audio('https://audio.jukehost.co.uk/lAn6MreyCUC9AZmrpet5TOg6pfxn5Qx1');
  const playButton = document.querySelector('.play-music');
  let confettiActive = false;
  
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
  
  // Confetti function
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

  // Create falling flowers
  createFallingFlowers();
});

// Modal Functions
function openLetter() {
  document.getElementById('letterModal').style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Falling Flowers Effect
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

// Add falling animation to CSS
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
    }
  }
`;
document.head.appendChild(style);
