import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { IconChevronRight, IconCircleCheck } from '@tabler/icons-react';

import BgShape from '../images/hero/hero-bg.png';
import HeroCar from '../images/hero/hero-image.png';

const Hero: React.FC = () => {
  const [goUp, setGoUp] = useState<boolean>(false);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const bookBtn = (): void => {
    const bookingSection = document.querySelector<HTMLElement>('#booking-section');

    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener('scroll', onPageScroll);

    return () => {
      window.removeEventListener('scroll', onPageScroll);
    };
  }, []);

  return (
    <section id='home' className='hero-section'>
      <div className='container'>
        <img className='bg-shape' src={BgShape} alt='' />
        <div className='hero-content'>
          <div className='hero-content__text'>
            <h4>Os melhores preços e condições</h4>
            <h1>
              Alugue seu carro na <span>Alugue Fácil</span>.
            </h1>
            <p>
              Oferecemos uma frota diversificada, desde econômicos até SUVs luxuosos. Sua jornada
              começa aqui - reserve agora e explore o mundo ao seu próprio ritmo.
            </p>
            <div className='hero-content__text__btns'>
              <Link onClick={bookBtn} className='hero-content__text__btns__book-ride' to='/'>
                Alugue Agora &nbsp; <IconCircleCheck />
              </Link>
              <Link className='hero-content__text__btns__learn-more' to='/about'>
                Saiba Mais &nbsp; <IconChevronRight />
              </Link>
            </div>
          </div>

          {/* right side img */}
          <img
            src={HeroCar}
            alt='carro da marca fiat modelo onix cor azul'
            className='hero-content__car-img'
          />
        </div>
      </div>

      {/* page up */}
      <div onClick={scrollToTop} className={`scroll-up ${goUp ? 'show-scroll' : ''}`}>
        ^
      </div>
    </section>
  );
};

export default Hero;
