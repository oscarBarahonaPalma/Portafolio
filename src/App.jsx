import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Importaciones desde Componentes/
import Header from './Componentes/Header';
import Intro from './Componentes/Intro';
import Cuerpo from './Componentes/Cuerpo';
import Proyectos from './Componentes/Encabezado/Proyectos';
import Sobre_Mi from './Componentes/Encabezado/Sobre_Mi';
import Contacto from './Componentes/Encabezado/Contacto';

// Componente Inicio simple
function Inicio() {
  return <Cuerpo />;
}

// Crear gotas una sola vez fuera del componente para evitar recreación
const GOTAS = Array.from({ length: 18 }).map((_, i) => {
  const left = Math.random() * 100;
  const delay = Math.random() * 1.2;
  return (
    <div
      key={i}
      className="raindrop"
      style={{ left: `${left}%`, animationDelay: `${delay}s` }}
    />
  );
});

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Mostrar intro si aún está activa
  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }

  // Si ya pasó el intro, renderizar el contenido real
  return (
    <div className='layout' style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Fondo de gotas animadas */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        {GOTAS}
      </div>

      {/* Contenido principal */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/Sobre_Mi" element={<Sobre_Mi />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
