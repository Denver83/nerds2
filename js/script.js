 let link = document.querySelector('.write-us');
 let popup = document.querySelector('.feedback-form');
 let close = document.querySelector('.feedback-form__close')

link.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.add('feedback-show');
});
close.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.remove('feedback-show');
});