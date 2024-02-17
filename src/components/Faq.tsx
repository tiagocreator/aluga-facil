import { useState } from 'react';

import { IconChevronDown } from '@tabler/icons-react';

const Faq: React.FC = () => {
  const [activeQ, setActiveQ] = useState<string>('q1');

  const openQ = (id: string): void => {
    setActiveQ(activeQ === id ? '' : id);
  };

  const getClassAnswer = (id: string): string => {
    return activeQ === id ? 'active-answer' : '';
  };

  const getClassQuestion = (id: string): string => {
    return activeQ === id ? 'active-question' : '';
  };

  return (
    <section className='faq-section'>
      <div className='container'>
        <div className='faq-content'>
          <div className='faq-content__title'>
            <h5>Dúvidas?</h5>
            <h2>Dúvidas Mais Frequentes</h2>
            <p>
              Perguntas Frequentes Sobre o Processo de Reserva de Aluguel de Carros em Nosso Site:
              Respostas para Dúvidas e Perguntas Comuns.
            </p>
          </div>

          <div className='all-questions'>
            <div className='faq-box'>
              <div
                id='q1'
                onClick={() => openQ('q1')}
                className={`faq-box__question  ${getClassQuestion('q1')}`}>
                <p>1. Como posso saber se estou obtendo o melhor preço de aluguel de carro?</p>
                <IconChevronDown />
              </div>
              <div
                id='q1'
                onClick={() => openQ('q1')}
                className={`faq-box__answer ${getClassAnswer('q1')}`}>
                No nosso site, garantimos transparência nos preços e oferecemos uma comparação fácil
                entre diferentes opções de veículos e tarifas. Além disso, frequentemente temos
                promoções especiais e descontos exclusivos para nossos clientes.
              </div>
            </div>
            <div className='faq-box'>
              <div
                id='q2'
                onClick={() => openQ('q2')}
                className={`faq-box__question ${getClassQuestion('q2')}`}>
                <p>
                  2. Como posso confiar na qualidade dos carros disponíveis para aluguel na Aluga
                  Fácil?
                </p>
                <IconChevronDown />{' '}
              </div>
              <div
                id='q2'
                onClick={() => openQ('q2')}
                className={`faq-box__answer ${getClassAnswer('q2')}`}>
                Trabalhamos apenas com locadoras de carros de renome e confiáveis, garantindo que
                todos os veículos disponíveis para aluguel em nosso site estejam em ótimo estado e
                sejam regularmente mantidos. Além disso, oferecemos uma variedade de categorias de
                veículos para atender às diferentes necessidades e preferências dos nossos clientes.
              </div>
            </div>
            <div className='faq-box'>
              <div
                id='q3'
                onClick={() => openQ('q3')}
                className={`faq-box__question ${getClassQuestion('q3')}`}>
                <p>3. Quais são as opções de pagamento disponíveis ao reservar um carro?</p>
                <IconChevronDown />
              </div>
              <div
                id='q3'
                onClick={() => openQ('q3')}
                className={`faq-box__answer ${getClassAnswer('q3')}`}>
                Aceitamos uma variedade de métodos de pagamento, incluindo cartões de crédito/débito
                principais e, em alguns casos, pagamento em dinheiro no momento da retirada do
                veículo. Garantimos segurança e conveniência em todas as transações financeiras
                realizadas.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
