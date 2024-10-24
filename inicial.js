/*carrosel */
// Seleciona os elementos principais
const track = document.getElementById('carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
let totalItems = items.length;
let startX = 0;
let endX = 0;

// Função para mover o carrossel para a posição correta
function updateCarouselPosition() {
  const translateX = -currentIndex * 100; // Move a track em % baseado no index atual
  track.style.transform = `translateX(${translateX}%)`;
}

// Função para ir para a próxima imagem
function nextSlide() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Volta ao primeiro
  }
  updateCarouselPosition();
}

// Função para ir para a imagem anterior
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1; // Vai para o último slide
  }
  updateCarouselPosition();
}

// Botões de navegação
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Adiciona eventos de toque (touch)
track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

track.addEventListener('touchend', () => {
  if (startX > endX + 50) { // Deslizou para a esquerda
    nextSlide();
  } else if (startX < endX - 50) { // Deslizou para a direita
    prevSlide();
  }
});


/*carrosel fim*/