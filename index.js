document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    answer.classList.toggle('active');
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});