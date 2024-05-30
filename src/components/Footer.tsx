import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  // Estado para determinar si la pantalla es móvil
  const [isMobile, setIsMobile] = useState(false);

  // Efecto para actualizar el estado cuando cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 664);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Renderizado del componente
  return (
    <footer>
      <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
        {/* Condición para mostrar texto dependiendo del estado móvil */}
        <h3 className="mx-auto">{isMobile ? "Esto es mobile" : "Esto es Escritorio"}</h3>
      </Navbar>
    </footer>
  );
};

export default Footer;
