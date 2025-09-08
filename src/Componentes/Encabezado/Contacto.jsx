import { useState } from 'react';
import '../../Estilos/Contacto.css';
import { buildWhatsAppLink } from '../../utils/whatsapp';

function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      setStatus('Completa todos los campos.');
      return;
    }
    setStatus('Gracias por tu mensaje. Me pondré en contacto pronto.');
    // En un backend real, aquí enviarías los datos
  };

  return (
    <section className="contacto">
      <div className="contacto__container">
        <header className="contacto__header">
          <h1>Contacto</h1>
          <p>
            ¿Tienes un proyecto o idea? Escríbeme y conversemos.
          </p>
        </header>

        <div className="contacto__grid">
          <form className="contacto__form" onSubmit={handleSubmit} noValidate>
            <label>
              <span>Nombre</span>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="tu@correo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="full">
              <span>Mensaje</span>
              <textarea
                name="mensaje"
                rows="5"
                placeholder="Cuéntame sobre tu proyecto..."
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="btn btn--primary">Enviar</button>
            {status && <p className="form__status" role="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
