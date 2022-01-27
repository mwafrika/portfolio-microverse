const menuContainer = document.querySelector('.mobile-menu-list');
let menuItem = document.querySelectorAll('.mobile-menu-item');
const hamburger = document.querySelector('.mobile');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
let work = document.getElementById('works');
const modal = document.getElementById('popup');
const closeError = document.getElementById('close-error');
let errorMessage = document.querySelector('.error-message');
const email = document.querySelector('#email');
const name = document.querySelector('#name');
const message = document.querySelector('#message');
const form = document.querySelector('.form-contact');

const dataStore = {
  name: form.elements.name.value,
  email: form.elements.email.value,
  message: form.elements.message.value,
};
function toggleMenu() {
  if (menuContainer.classList.contains('showMenu')) {
    menuContainer.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menuContainer.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItem.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});

// const handleGetJson = () => {
fetch('data.json', {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
  .then((response) => response.json())
  .then((messages) => {
    const data = Object.values(messages);
    let container = '';

    data.forEach((item) => {
      const { title, description, technologies, id } = item;
      const techno = Object.values(technologies);
      container += ` 
            <div class="card-${id}">
              <div class="card-1-2">
                <div class="image-container${id}"></div>
              </div>
              <div class="card-1-1">
                <h2 class="titre">${title}</h2>
                <ul>
                  <li class="cano">CANOPY</li>
                  <li class="dot empty"></li>
                  <li class="dot">Back End Dev</li>
                  <li class="dot empty"></li>
                  <li class="dot">2015</li>
                </ul>
                <p class="desc">${description}</p>
                <ul class="skills">
                  <li>${techno[0]}</li>
                  <li>${techno[2]}</li>
                  <li>${techno[3]}</li>
                </ul>
                <button type="button" class="btn-tonic bbtn">
                  See project
                </button>
              </div>
            </div>
          `;
    });
    work.innerHTML = container;
  })
  .then(() => {
    const btn = document.querySelectorAll('.btn-tonic.bbtn');
    btn.forEach((item) => {
      item.addEventListener('click', () => {
        modal.style.display = 'block';
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });

const close = document.getElementsByClassName('close-modal')[0];

close.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

closeError.onclick = () => {
  errorMessage.style.display = 'none';
};
errorMessage.style.display = 'none';

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    errorMessage.style.display = 'block';
    email.style.border = '1px solid red';
  }
  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 5000);
});

// get data from local storage when the page is reloaded
document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('contact-info', dataStore));
  if (data) {
    name.value = data.name;
    email.value = data.email;
    message.value = data.message;
  }
  console.log(data);
});

form.onchange = (event) => {
  dataStore[event.target.id] = event.target.value;
  localStorage.setItem('contact-info', JSON.stringify(dataStore));
};
