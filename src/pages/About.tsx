import { Footer, HeroPages, PlanTrip, BookBanner } from '../components';

import AboutMain from '../images/about/about-main.webp';
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
              <span>Sobre Nossa Empresa</span>
              <h2>Carros Confiáveis</h2>
              <p>
                Oferecemos uma experiência de viagem sem complicações. Com uma variedade de veículos
                bem-mantidos e tarifas acessíveis, estamos aqui para tornar sua próxima aventura
                memorável e sem estresse. Reserve conosco e comece a sua jornada hoje mesmo!
              </p>
              <div className='about-main__text__icons'>
                <div className='about-main__text__icons__box'>
                  <img src={Box1} alt='' />
                  <div>
                    <span>10</span>
                    <p>Modelos</p>
                  </div>
                </div>
                <div className='about-main__text__icons__box'>
                  <img src={Box2} alt='' />
                  <div>
                    <span>12</span>
                    <p>Locadoras</p>
                  </div>
                </div>
                <div className='about-main__text__icons__box'>
                  <img src={Box3} alt='' />
                  <div>
                    <span>25</span>
                    <p>Oficinas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      {/* book banner */}
      <BookBanner />
      {/* footer */}
      <Footer />
    </>
  );
};

export default About;
