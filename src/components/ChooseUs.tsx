import MainImg from '../images/chooseUs/main.webp';
import Box1 from '../images/chooseUs/icon1.png';
import Box2 from '../images/chooseUs/icon2.png';
import Box3 from '../images/chooseUs/icon3.png';

import { IconChevronRight } from '@tabler/icons-react';

const ChooseUs: React.FC = () => {
  return (
    <section className='choose-section'>
      <div className='container'>
        <div className='choose-container'>
          <img className='choose-container__img' src={MainImg} alt='três carros' />
          <div className='text-container'>
            <div className='text-container__left'>
              <span>Porque Somos Melhores</span>
              <h2>Os melhores carros pelo melhor preço que você já viu!</h2>
              <p>
                Explore oportunidades incríveis com nossas ofertas irresistíveis. Nosso compromisso
                é garantir o melhor custo-benefício para você, permitindo desfrutar de produtos e
                serviços de alta qualidade sem comprometer suas finanças. Não deixe passar a chance
                de economizar enquanto vive uma experiência de locação excepcional.
              </p>
              <a href='#home'>
                Saiba Mais &nbsp;
                <IconChevronRight />
              </a>
            </div>
            {/* advantages list */}
            <div className='text-container__right'>
              <div className='text-container__right__box'>
                <div className='text-container__right__box__img-container'>
                  <img src={Box1} alt='' />
                </div>
                <div className='text-container__right__box__text'>
                  <span>Aventura de Carro pelo Brasil</span>
                  <p>
                    Eleve sua jornada ao volante para um novo patamar com nossos veículos de
                    qualidade para suas aventuras pelo país.
                  </p>
                </div>
              </div>
              <div className='text-container__right__box'>
                <div className='text-container__right__box__img-container'>
                  <img src={Box2} alt='' />
                </div>
                <div className='text-container__right__box__text'>
                  <span>Preços Transparentes</span>
                  <p>
                    Tenha tudo o que precisa em um só lugar, com nossa política de preços
                    transparentes e sem surpresas.
                  </p>
                </div>
              </div>
              <div className='text-container__right__box'>
                <div className='text-container__right__box__img-container'>
                  <img src={Box3} alt='' />
                </div>
                <div className='text-container__right__box__text'>
                  <span>Sem Custos Escondidos</span>
                  <p>
                    Desfrute da tranquilidade de saber que não haverá custos ocultos. Aqui,
                    valorizamos a transparência e a honestidade em todas as etapas da sua viagem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
