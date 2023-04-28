window.addEventListener('DOMContentLoaded', () => {
  function req() {
    getResource('http://localhost:3000/people')
      // .then((data) => data.json())
      .then((data) => {
        console.log(data);
        createCards(data.data);
      })
      .catch((err) => console.error(err));

    this.remove();
  }

  document
    .querySelector('button')
    .addEventListener('click', req, { once: true });

  async function getResource(url) {
    const res = await axios(`${url}`);

    if (res.status !== 200) {
      throw new Error(`Could not fetch ${url}, status: ${res.statusText}`);
    }

    return res;
  }

  function createCards(response) {
    response.forEach((item) => {
      const card = document.createElement('div');

      card.classList.add('card');

      let icon;
      if (item.sex === 'male') {
        icon = 'icons/mars.png';
      } else {
        icon = 'icons/female.png';
      }

      card.innerHTML = `
          <img src='${item.photo}' alt=''>
          <div class='name'>${item.name} ${item.surname}</div>
          <div class='sex'>
            <img src='${icon}' alt='male'>
          </div>
          <div class="age">${item.age}</div>
          `;

      document.querySelector('.app').appendChild(card);
    });
  }
});
