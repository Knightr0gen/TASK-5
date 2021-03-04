let cards = document.querySelectorAll('.card');

Array.prototype.forEach.call(cards, function (card) {
  card.addEventListener('mouseenter', ()=> {
    card.classList.add('active');
  });
  card.addEventListener('mouseleave', ()=> {
    card.classList.remove('active');
  });
});
