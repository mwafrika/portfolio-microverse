const menuContainer = document.querySelector('.mobile-menu-list');
const menuItem = document.querySelectorAll('.mobile-menu-item');
const hamburger = document.querySelector('.mobile');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const work = document.getElementById('works');

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
        image,
        link,
        linkText,
        link2,
        linkText2,
        id,
      } = item;
      const techno = Object.values(technologies);
      container =
        container +
        ` 
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
                  <li>${techno[1]}</li>
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
    console.log('hey', work);
  })
  .then(() => {
    const btn = document.querySelectorAll('.btn-tonic.bbtn');

    console.log('My data', btn);

    btn.forEach((item) => {
      item.addEventListener('click', () => {
        modal.style.display = 'block';
      });
    });
  })
  .catch((error) => {
    console.log('error', error);
  });

const close = document.getElementsByClassName('close-modal')[0];
const modal = document.getElementById('popup');

close.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
