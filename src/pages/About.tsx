import { Footer, HeroPages, PlanTrip } from '../components';

import { IconPhone } from '@tabler/icons-react';

import AboutMain from '../images/about/about-main.jpg';
import Box1 from '../images/about/icon1.png';
import Box2 from '../images/about/icon2.png';
import Box3 from '../images/about/icon3.png';

const About: React.FC = () => {
  return (
    <>
      <section className='about-page'>
        <HeroPages name='Sobre Nós' />
        <div className='container'>
          <div className='about-main'>
            <img className='about-main__img' src={AboutMain} alt='' />
            <div className='about-main__text'>
              <h3>Sobre Nossa Empresa</h3>
              <h2>Alugue Carros Confiáveis</h2>
              <p>
                Oferecemos uma experiência de viagem sem complicações. Com uma variedade de veículos
                bem-mantidos e tarifas acessíveis, estamos aqui para tornar sua próxima aventura
                memorável e sem estresse. Reserve conosco e comece a sua jornada hoje mesmo!
              </p>
              <div className='about-main__text__icons'>
                <div className='about-main__text__icons__box'>
                  <img src={Box1} alt='' />
                  <span>
                    <h4>10</h4>
                    <p>Modelos</p>
                  </span>
                </div>
                <div className='about-main__text__icons__box'>
                  <img src={Box2} alt='' />
                  <span>
                    <h4>12</h4>
                    <p>Locadoras</p>
                  </span>
                </div>
                <div className='about-main__text__icons__box'>
                  <img src={Box3} alt='' />
                  <span>
                    <h4>25</h4>
                    <p>Oficinas</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      {/* book banner */}
      <div className='book-banner'>
        <div className='book-banner__overlay'></div>
        <div className='container'>
          <div className='text-content'>
            <h2>Entre em contato agora mesmo!</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>(123) 456-7869</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
