import { IconQuote } from '@tabler/icons-react';

import User1 from '../images/testimonials/user-1.webp';
import User2 from '../images/testimonials/user-2.webp';

const Testimonials: React.FC = () => {
  return (
    <section className='testimonials-section'>
      <div className='container'>
        <div className='testimonials-content'>
          <div className='testimonials-content__title'>
            <span>100% de Satisfação</span>
            <h2>Avaliações de Clientes</h2>
            <p>
              Descubra o impacto positivo que temos gerado em nossos clientes lendo os depoimentos.
              Nossos clientes têm experimentado nossos serviços e resultados, e estão ansiosos para
              compartilhar suas experiências positivas com você.
            </p>
          </div>

          <div className='all-testimonials'>
            <div className='all-testimonials__box'>
              <span className='quotes-icon'>
                <IconQuote width={60} height={60} />
              </span>
              <p>
                "Alugamos um carro neste site e tivemos uma experiência incrível! A reserva foi
                simples e as tarifas de aluguel foram muito acessíveis. "
              </p>
              <div className='all-testimonials__box__name'>
                <div className='all-testimonials__box__name__profile'>
                  <img src={User1} alt='' />
                  <span>
                    <h1>João Pedro</h1>
                    <p>Recife</p>
                  </span>
                </div>
              </div>
            </div>

            <div className='all-testimonials__box box-2'>
              <span className='quotes-icon'>
                <IconQuote width={60} height={60} />
              </span>
              <p>
                "O carro estava em ótimo estado e tornou nossa viagem ainda melhor. Altamente
                recomendado este site de aluguel de carros!"
              </p>
              <div className='all-testimonials__box__name'>
                <div className='all-testimonials__box__name__profile'>
                  <img src={User2} alt='' />
                  <span>
                    <h1>Maria Joana</h1>
                    <p>São Paulo</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
