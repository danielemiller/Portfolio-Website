function addClass(e) {
    // e.preventDefault()
    document.body.classList.add("sent");
    setTimeout(() => document.getElementById("myForm").submit(), 4500);
  }
  
  sendLetter.addEventListener("click", addClass);