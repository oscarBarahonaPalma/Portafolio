// Utilidades para construir enlaces de WhatsApp según el dispositivo
// phone debe estar en formato internacional SIN + (ej: 529984817174)

export function isMobileDevice() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  return /android|iphone|ipad|ipod|windows phone/i.test(ua);
}

export function buildWhatsAppLink(phone, text) {
  const encodedText = text ? encodeURIComponent(text) : undefined;
  if (isMobileDevice()) {
    // En móviles, usar wa.me para abrir la app directamente
    return encodedText
      ? `https://wa.me/${phone}?text=${encodedText}`
      : `https://wa.me/${phone}`;
  }
  // En escritorio, forzar WhatsApp Web para evitar prompts de descarga
  return encodedText
    ? `https://web.whatsapp.com/send?phone=${phone}&text=${encodedText}`
    : `https://web.whatsapp.com/send?phone=${phone}`;
}



