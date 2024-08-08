document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log('Form submitted:', { name, email, message });

  alert('Thank you for your message!');
  this.reset();
});
