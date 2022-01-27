const menuContainer = document.querySelector('.mobile-menu-list');
const menuItem = document.querySelectorAll('.mobile-menu-item');
const hamburger = document.querySelector('.mobile');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const work = document.getElementById('works');
const modal = document.getElementById('popup');

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
      const {
        title,
        description,
        technologies,
        id,
      } = item;
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
