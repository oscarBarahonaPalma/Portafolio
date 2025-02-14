import { useState, useEffect } from 'react';
import '../Estilos/RelojDigital.css';

const RelojDigital = () => {
  const [horaActual, setHoraActual] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setHoraActual(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatoHora = (numero) => (numero < 10 ? `0${numero}` : numero);
  const horas = formatoHora(horaActual.getHours());
  const minutos = formatoHora(horaActual.getMinutes());
  const segundos = formatoHora(horaActual.getSeconds());

  return (
    <div className="reloj-container">
      <div className="reloj">
        <div className="hora">
          {horas}:{minutos}:{segundos}
        </div>
        <div className="subtitulo"></div>
      </div>
    </div>
  );
};

export default RelojDigital;
