import React, { useState } from 'react';
import './Contacto.css';
import Layout from '../Layout/Layout';

const Contacto = () => {

  const seccionesFAQ = [
    {
      categoria: 'Procesos de Compra',
      preguntas: [
        {
          question: 'Contacto',
          answer: 'Para contactarte con nosotros comunicate a nuestro número:3517564540 o envianos un mensaje a nustro instagram.',
        },
        {
          question: '¿Cuáles son los pasos para comprar?',
          answer: 'Para comprar, selecciona el producto, agrégalo al carrito y sigue el proceso de pago.',
        },
        {
          question: '¿Cómo sé que mi compra se ha realizado?',
          answer: 'Recibirás un correo de confirmación de tu compra. Si no lo encuentras, revisa en tu carpeta de spam.',
        },
        {
          question: '¿Qué hacer en caso de problemas con el pago?',
          answer: 'Comunícate con nuestro equipo de soporte para resolver cualquier problema relacionado con el pago.',
        },
      ],
    },
    {
        categoria: 'Cambios y Devoluciones',
        preguntas: [
          {
            question: '¿Puedo devolver un producto?',
            answer: 'Sí, puedes devolver un producto dentro de los primeros 30 días después de la compra.',
          },
          {
            question: '¿Cómo hago una devolución?',
            answer: 'Para hacer una devolución, completa el formulario en la sección de devoluciones.',
          },
        ],
      },

    {
      categoria: 'Envíos',
      preguntas: [
        {
          question: '¿Cuánto tiempo tarda el envío?',
          answer: 'El envío tarda entre 3 y 7 días hábiles, dependiendo de tu ubicación.',
        },
        {
          question: '¿Cómo puedo rastrear mi pedido?',
          answer: 'Una vez que el pedido sea enviado, recibirás un número de seguimiento.',
        },
      ],
    },
     
    {
        categoria: 'Guía de talles',
        preguntas: [
          {
            question: '¿Cómo se cual es mi talle?',
            answer: 'Comunicate con nuestro numero de whatsaap y consulta por la tabla de talles del producto, nuestro asesor te contestará lo más rápido posible.',
          },
        ],
      },



   
  ];

  const [activeIndex, setActiveIndex] = useState({}); 


  const handleToggle = (sectionIndex, questionIndex) => {
    setActiveIndex((prevState) => ({
      ...prevState,
      [sectionIndex]: prevState[sectionIndex] === questionIndex ? null : questionIndex,
    }));
  };

  return (
    <Layout>
    <div className="contacto-container">
      {seccionesFAQ.map((seccion, sectionIndex) => (
        <div key={sectionIndex} className="faq-section">
          <div className="faq-card"> 
            <h2>{seccion.categoria}</h2>
            <p>Aquí podrás encontrar respuestas más comunes relacionadas con {seccion.categoria.toLowerCase()}.</p>
            <div className="contacto-list">
              {seccion.preguntas.map((pregunta, questionIndex) => (
                <div key={questionIndex} className="contacto-item">
                  <div
                    className="contacto-question"
                    onClick={() => handleToggle(sectionIndex, questionIndex)}
                  >
                    <h3>{pregunta.question}</h3>
                    <span>{activeIndex[sectionIndex] === questionIndex ? '−' : '+'}</span>
                  </div>
                  {activeIndex[sectionIndex] === questionIndex && (
                    <div className="contacto-answer">
                      <p>{pregunta.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default Contacto;