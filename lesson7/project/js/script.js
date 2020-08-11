/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против...'],
  };

  const promo = document.querySelector('.promo');
  promo.querySelector('.promo__adv').remove();
  promo.querySelector('.promo__genre').textContent = 'Драма';
  promo.querySelector('.promo__bg').style.background = 'url(img/bg.jpg) no-repeat 50% 20% / cover';

  movieDB.movies.sort();

  function updateMovies() {
    promo.querySelector('.promo__interactive-list').innerHTML = '';

    let list = ``;
    movieDB.movies.forEach((v, i) => {
      // console.log(v);
      list += `
      <li class="promo__interactive-item">${i + 1}. ${v}
          <div class="delete"></div>
      </li>
      `;
    });

    promo.querySelector('.promo__interactive-list').insertAdjacentHTML('afterbegin', list);
    // console.log(movieDB);
  }
  updateMovies();

  /* ----------------------------- */

  const addForm = document.querySelector('form.add');
  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newMovie = addForm.querySelector('.adding__input').value;
    console.log(newMovie.length);
    console.log(!newMovie);
    if (!!newMovie) {
      if (newMovie.length > 21) {
        newMovie = newMovie.substr(0, 21) + '...';
      }
      if (addForm.querySelector('input[type=checkbox]').checked) {
        console.warn('Любимый фильм');
      }
      movieDB.movies.push(newMovie);
      movieDB.movies.sort();
      // console.log(movieDB);
      updateMovies();
      e.target.reset();
    }
  });

  document.querySelector('.promo__interactive-list').addEventListener('click', function (e) {
    // console.log(e.target.classList);
    if (e.target.classList.contains('delete')) {
      let text = e.target.parentElement.textContent.trim();
      const pos = text.indexOf('. ', 0);
      text = text.slice(pos + 2);
      // console.log(text);

      movieDB.movies.find((str, i, arr) => {
        if (str == text) {
          arr.splice(i, 1);
          updateMovies();
        }
      });
    }
  });
});
