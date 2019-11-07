const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');
  
  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _items.addEventListener('click', commit);
    _items.addEventListener('click', deleteItem);
    _form.addEventListener('submit', formHandler);
  }

  function formHandler(e) {
    e.preventDefault();
    const input = document.querySelector('.form__input');
    if (input) {
      add(input.value);
      input.value = '';
    }
    console.log('halló heimur');
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {

  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    if (e.target.tagName === 'INPUT') {
      e.target.parentElement.classList.toggle('item--done');
    }
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
      const li = document.createElement('li');
      li.classList.add('item');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.classList.add('item__checkbox');
      li.appendChild(input);
      const text = document.createElement('span');
      text.classList.add('item__text');
      const textText = document.createTextNode(value);
      text.appendChild(textText);
      li.appendChild(text);
      const button = document.createElement('button');
      button.classList.add('item__button')
      const buttonText = document.createTextNode('Eyða');
      button.appendChild(buttonText);
      li.appendChild(button);
      items.appendChild(li);
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    if (e.target.tagName === 'BUTTON') {
      e.target.parentElement.remove();
    }
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
