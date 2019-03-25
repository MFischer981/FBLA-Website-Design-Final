function showAnswer() {
   event.target.parentNode.classList.toggle('center'); 
   event.target.parentNode.classList.toggle('opened'); 
   event.target.parentNode.childNodes[5].classList.toggle('show'); 
   event.target.classList.toggle('click'); 
}

