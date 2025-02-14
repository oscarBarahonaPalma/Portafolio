const Facebook = document.getElementById('Facebook');
if (Facebook) {
  // Cambiar el color de fondo a rojo cuando el mouse pasa sobre el elemento
  Facebook.addEventListener('mouseenter', () => {
    Facebook.style.backgroundColor = 'blue';
    Facebook.style.scale = '0.9';
    Facebook.style.borderTopColor = 'white';
  });
  // Restaurar el color de fondo original cuando el mouse sale del elemento
  Facebook.addEventListener('mouseleave', () => {
    Facebook.style.backgroundColor = ''; // O el color original que desees
    Facebook.style.scale = '1';
    Facebook.style.borderTopColor = 'blue';
  }); 
    // Redirigir al chat de WhatsApp al hacer clic
    Facebook.addEventListener('mouseup', () => {
      window.open('https://www.facebook.com/profile.php?id=100077129336456', '_blank');
    });
    
}
const Whatsapp = document.getElementById('Whatsapp');
if (Whatsapp) {
  // Cambiar el color de fondo a rojo cuando el mouse pasa sobre el elemento
  Whatsapp.addEventListener('mouseenter', () => {
    Whatsapp.style.backgroundColor = 'green';
    Whatsapp.style.scale = '0.9';
    Whatsapp.style.borderTopColor = 'blue';
  });

  // Restaurar el color de fondo original cuando el mouse sale del elemento
  Whatsapp.addEventListener('mouseleave', () => {
    Whatsapp.style.backgroundColor = ''; // O el color original que desees
    Whatsapp.style.scale = '1';
    Whatsapp.style.borderTopColor = 'yellowgreen';
  });
  // Redirigir al chat de WhatsApp al hacer clic
  Whatsapp.addEventListener('mouseup', () => {
    window.open('https://wa.me/5219902470787', '_blank');
  });
  
}
const Istagram = document.getElementById('Istagram');
if (Istagram) {
  // Cambiar el color de fondo a rojo cuando el mouse pasa sobre el elemento
  Istagram.addEventListener('mouseenter', () => {
    Istagram.style.backgroundColor = '#F20587';
    Istagram.style.scale = '0.9';
    Istagram.style.borderTopColor = 'pink';
  });

  // Restaurar el color de fondo original cuando el mouse sale del elemento
  Istagram.addEventListener('mouseleave', () => {
    Istagram.style.backgroundColor = 'White'; // O el color original que desees
    Istagram.style.scale = '1';
    Istagram.style.borderTopColor = '#F20587';
  });
  Istagram.addEventListener('mouseup', () => {
    window.open('https://www.instagram.com/desarrollador_front/', '_blank');
  });
  
}
const Telegram = document.getElementById('Telegram');
if (Telegram) {
  // Cambiar el color de fondo a rojo cuando el mouse pasa sobre el elemento
  Telegram.addEventListener('mouseenter', () => {
    Telegram.style.backgroundColor = '#1FA2BF';
    Telegram.style.scale = '0.9';
    Telegram.style.borderTopColor = '#F20587';
  });

  // Restaurar el color de fondo original cuando el mouse sale del elemento
  Telegram.addEventListener('mouseleave', () => {
    Telegram.style.backgroundColor = 'White'; // O el color original que desees
    Telegram.style.scale = '1';
    Telegram.style.borderTopColor = '#1FA2BF';
  });
}