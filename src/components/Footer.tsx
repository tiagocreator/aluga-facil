import { IconMail, IconPhoneCall } from '@tabler/icons-react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-content'>
          <ul className='footer-content__1'>
            <li>
              <span>Aluga Fácil</span>
            </li>
            <li>
              Nós temos uma grande variedade de veículos para atender a todas as suas necessidades.
            </li>
            <li>
              <a href='tel:123456789'>
                <IconPhoneCall /> &nbsp; (123) 456-789
              </a>
            </li>

            <li>
              <a
                href='mailto: 
                email@exemplo.com'>
                <IconMail />
                &nbsp; email@exemplo.com
              </a>
            </li>
          </ul>

          <ul className='footer-content__2'>
            <li>Empresa</li>
            <li>
              <a href='#home'>Sobre Nós</a>
            </li>
            <li>
              <a href='#home'>Trabalhe Conosco</a>
            </li>
            <li>
              <a href='#home'>Acessibilidade</a>
            </li>
            <li>
              <a href='#home'>Blog</a>
            </li>
          </ul>

          <ul className='footer-content__2'>
            <li>Horários de Funcionamento</li>
            <li>Seg - Sex: 8:00 - 18:00</li>
            <li>Sab: 9:00 - 12:00</li>
            <li>Dom: Fechado</li>
          </ul>

          <ul className='footer-content__2'>
            <li>Receber Novidades</li>
            <li>
              <p>Insira seu E-mail para Receber Atualizações e Promoções.</p>
            </li>
            <li>
              <input type='email' placeholder='Endereço de E-mail'></input>
            </li>
            <li>
              <button className='submit-email'>Inscrever</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
