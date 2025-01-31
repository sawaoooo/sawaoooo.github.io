document.addEventListener('DOMContentLoaded', function () {
	const button = document.querySelector('.button');
  
	if (button) {
	  button.addEventListener('click', function () {
		alert('Деньги – это не главное, но с ними веселее!');
	  });
	}
  });
  