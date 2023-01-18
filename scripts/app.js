const div = document.getElementById('responses');
const template = document.getElementById('templateResponses');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://63b870193329392049dcbc60.mockapi.io/responses');

xhr.responseType = 'json';

xhr.onload = function() {
  const res = xhr.response;

  for(const item of res) {
    const el = document.importNode(template.responses);

    const h5 = document.querySelector('h4');
    h4.textContent = item.name;

    const p = el.querySelector('p');
    p.textContent = item.body;

    div.append(el);
  }

}

xhr.send();