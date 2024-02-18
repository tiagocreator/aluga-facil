import { HeroPages, Footer } from '../components';

import { IconMail, IconMailOpened, IconPhone, IconLocation } from '@tabler/icons-react';

const Contact: React.FC = () => {
  return (
    <section className='contact-page'>
      <HeroPages name='Contato' />
      <div className='container'>
        <div className='contact-div'>
          <div className='contact-div__text'>
            <h2>Fale conosco</h2>
            <p>
              Estamos aqui para tornar seu aluguel de carros fácil e conveniente. Entre em contato
              conosco para reservas, assistência ou qualquer dúvida que você possa ter. Nossa equipe
              dedicada está pronta para ajudar!
            </p>
            <a href='/'>
              <IconPhone /> &nbsp; (123) 456-7869
            </a>
            <a href='/'>
              <IconMail /> &nbsp; email@exemplo.com
            </a>
            <a href='/'>
              <IconLocation />
              &nbsp; São Paulo, SP
            </a>
          </div>
          <div className='contact-div__form'>
            <form>
              <label>
                Nome Completo <b>*</b>
              </label>
              <input type='text' placeholder='Nome Completo'></input>

              <label>
                Endereço de Email <b>*</b>
              </label>
              <input type='email' placeholder='seuemail@exemplo.com'></input>

              <label>
                Sua mensagem <b>*</b>
              </label>
              <textarea placeholder='Escreva sua dúvida aqui...'></textarea>

              <button type='submit'>
                <IconMailOpened />
                &nbsp; Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
