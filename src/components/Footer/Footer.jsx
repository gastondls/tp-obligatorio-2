import React from 'react';
import '../Footer/Footer.css';
import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="brand">
        <img src={logo} alt="LOFTSTORE Logo" className="footer-logo" />
        </div>

        <div className="footer-sections">
          <div className="section">
            <h4>MENÚ</h4>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="section">
            <h4>ASISTENCIA</h4>
            <ul>
              <li><a href="/contacto">Cambios y Devoluciones</a></li>
              <li><a href="/contacto">Procesos de compra</a></li>
            </ul>
          </div>
          <div className="section">
            <h4>AYUDA</h4>
            <ul>
              <li><a href="/contacto">Envíos</a></li>
              <li><a href="/contacto">Guía de Talles</a></li>
            </ul>
          </div>
          <div className="section">
            <h4>INSTITUCIONAL</h4>
            <ul>
              <li><a href="/contacto">Sobre LOFTSTORE</a></li>
            </ul>
          </div>
        </div>

        <div className="contact-info">
          <p>LOFTSTORE Showroom</p>
          <p>Córdoba (Capital), Argentina</p>
        </div>

        <div className="social-media">
          <a href="https://wa.link/jinbik" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://www.instagram.com/lofttstore/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.tiktok.com/@lofttstore" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={30} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Hecho con <span className="heart">❤️</span> por Gastón De Los Santos</p>
      </div>
    </footer>
  );
};

export default Footer;
