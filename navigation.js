
function setupNavigation() {
  
  const navButtons = document.querySelectorAll('.nav-button');

  navButtons.forEach(button => {
    button.addEventListener('click', function () {
      
      const targetPage = this.getAttribute('data-page');
      
      if (targetPage) {
        window.location.href = targetPage;
      }
    });
  });

 
  const currentPage = window.location.pathname.split('/').pop();
  navButtons.forEach(button => {
    if (button.getAttribute('data-page') === currentPage) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function showThankYouMessage() {
  const form = document.getElementById('contactForm');
  const thankYouMessage = document.getElementById('thankYouMessage');
  if (form.checkValidity()) {
    thankYouMessage.style.display = 'block';
    form.reset();
  }
}

function goToOrderPage() {
  window.location.href = 'order4.html';
}

function handleFormSubmit() {
  const name = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const thankYouMessage = document.getElementById('thankYouMessage');
  thankYouMessage.style.display = 'block';
  document.getElementById('contactForm').reset();

  setTimeout(() => {
    thankYouMessage.style.display = 'none';
  }, 5000);
}

function setupCarousel() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const container = document.querySelector('.cards-container');
  const cards = container.querySelectorAll('.card-grid');

  let currentIndex = 0;

  function getCardsPerView() {
    
    return window.innerWidth <= 768 ? 1 : 3;
  }

  function updateCarousel() {
    const cardsPerView = getCardsPerView();
    
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > cards.length - cardsPerView) {
      currentIndex = cards.length - cardsPerView;
    }

    
    const offset = cards[currentIndex].offsetLeft;
    container.style.transform = `translateX(-${offset}px)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
  
  updateCarousel();
}


document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupCarousel();
});

document.querySelector('.subscribe-button').addEventListener('click', function() {
  const emailInput = document.querySelector('.text-container textarea').value.trim();
  
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {
      alert('Subscription successful! Thank you for subscribing.');
      
  } else {
      alert('Please enter a valid email address.');
  }
});