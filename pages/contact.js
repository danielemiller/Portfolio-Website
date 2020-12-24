function addClass(e) {
    e.preventDefault();
    document.body.classList.add("sent");
    e.run();
  }
  
  sendLetter.addEventListener("click", addClass);