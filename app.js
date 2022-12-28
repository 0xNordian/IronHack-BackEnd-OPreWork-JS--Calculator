const buttons = document.querySelectorAll('.div-btn button');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    console.log(this.textContent);
  });
});
