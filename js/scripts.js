document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#actionButton');
    if (button) {
      button.addEventListener('click', () => {
        alert('Thank you for visiting The Red Ribbon Platform!');
      });
    }
  });
  