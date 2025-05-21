function openLetter() {
  document.getElementById("letterModal").style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = (3 + Math.random() * 5) + 's';
  document.getElementById('falling-flowers').appendChild(flower);

  setTimeout(() => flower.remove(), 8000);
}

setInterval(createFlower, 300);
