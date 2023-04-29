window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  function req(e) {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append('id', Math.floor(Math.random() * 10000));

    // const obj = Object.fromEntries(formData.entries());

    // // ------ XMLHttpRequest
    // // const json = JSON.stringify(obj);

    // const request = new XMLHttpRequest();
    // request.open('POST', './api.php');
    // // request.setRequestHeader(
    // //   'Content-Type',
    // //   'multipart/form-data; charset=utf-8'
    // // );
    // request.send(formData);
    // request.addEventListener('load', () => {
    //   console.log(request.status);

    //   if (request.status === 200 || request.status === 201) {
    //     // const data = JSON.parse(request.response);
    //     console.log(request.response);
    //     // createCards(data);
    //   } else {
    //     console.error('Something goes wrong...');
    //   }
    // });

    // ------ FETCH
    // getResource('./api.php', formData)
    //   // .then((data) => data.json())
    //   .then((data) => {
    //     console.log(data);
    //     // createCards(data.data);
    //   })
    //   .catch((err) => console.error(err));

    // ------ AXIOS
    // axios.post('http://localhost:3000/people', obj);
    axios
      .post({
        method: 'POST',
        url: 'http://localhost:3000/people',
        data: formData,
      })
      .then((data) => console.log(data.data));

    // this.remove();
  }

  async function getResource(url, data) {
    const res = await fetch(`${url}`, {
      method: 'POST',
      body: data,
    });

    if (
      !res.ok ||
      !(res.headers.get('status') === 201 || res.headers.get('status') !== 200)
    ) {
      throw new Error(`Could not fetch ${url}, status: ${res.statusText}`);
    }

    return await res.text();
  }

  form.addEventListener('submit', (e) => req(e));
});
