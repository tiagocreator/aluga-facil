import SelectCar from '../images/plan/select-car.png';
import Contact from '../images/plan/contact.png';
import Drive from '../images/plan/drive.png';

const PlanTrip: React.FC = () => {
  return (
    <section className='plan-section'>
      <div className='container'>
        <div className='plan-container'>
          <div className='plan-container__title'>
            <h3>Alugue rápido e sem buroracia</h3>
            <h2>Como funciona?</h2>
          </div>

          <div className='plan-container__boxes'>
            <div className='plan-container__boxes__box'>
              <img src={SelectCar} alt='' width='117' />
              <h3>Escolha um carro</h3>
              <p>
                Oferecemos uma grande variedade de veículos para todas as suas necessidades de
                condução. Temos o carro perfeito para atender às suas necessidades.
              </p>
            </div>

            <div className='plan-container__boxes__box'>
              <img src={Contact} alt='' width='52' />
              <h3>Preencha o formulário</h3>
              <p>Nosso time irá entrar em contato com voce para confirmar o seu pedido.</p>
            </div>

            <div className='plan-container__boxes__box'>
              <img src={Drive} alt='' width='44' />
              <h3>Saia dirigindo!</h3>
              <p>
                Agora você pode partir e aproveitar o conforto da sua viagem. Nós temos o que você
                precisa com nossa ampla variedade de carros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTrip;
