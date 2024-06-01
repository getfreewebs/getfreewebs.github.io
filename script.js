document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  fetch('https://formspree.io/f/mrgnwqze', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Mensaje enviado con éxito');
      this.reset();
    } else {
      alert('Hubo un problema al enviar el mensaje');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Hubo un problema al enviar el mensaje');
  });
});
