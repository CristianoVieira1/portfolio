import React, {useRef} from 'react'
import emailjs from 'emailjs-com';
import { useAlert } from "react-alert";

import { FaLinkedinIn, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { ContactContainer } from './styled';


const Contact = () => {
  const alert = useAlert();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ujd8tya', 'template_lg9y4b6', form.current, '4OWu2JtRiPHScY_3Z')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Entrar em contato</h5>
      <h2>Contato</h2>

      <ContactContainer className='container'>
        <div>
          <article>
            <FaRegEnvelope />
            <h4>Email</h4>
            <h5>cristianovieirati@gmail.com</h5>
            <a href="mailto:cristianovieirati@gmail.com" target="_blank" rel="noreferrer">Enviar email</a>
          </article>
          <article>
            <FaLinkedinIn />
            <h4>Linkedin</h4>
            <h5>Cristiano Borges</h5>
            <a href="https://www.linkedin.com/in/cristianobv/" target="_blank" rel="noreferrer">Linkedin</a>
          </article>
          <article>
            <FaWhatsapp />
            <h4>Whatsapp</h4>
            <h5>51-998884446</h5>
            <a href="https://api.whatsapp.com/send?phone=51998884446" target="_blank" rel="noreferrer">Enviar mensagem</a>
          </article>

        </div>
        {/* end contact  */}
        <form ref={form} onSubmit={sendEmail}>
          <input className="form-control" type="text" name="name" placeholder="Nome Completo" required/>
          <input className="form-control" type="email" name="email" placeholder="Seu email" required/>
          <textarea className="form-control" name="message" rows="10" placeholder="Mensagem" required></textarea>
          <button type="submit" className="btn btn-primary"  onClick={() => {
                alert.success('Obrigado pelo contato!')
      }}>Enviar</button>
        </form>
      </ContactContainer>
    </section>
  )
}

export default Contact
