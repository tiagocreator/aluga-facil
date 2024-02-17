import AppStore from '../images/download/appstore.svg';
import PlayStore from '../images/download/googleapp.svg';

const Download: React.FC = () => {
  return (
    <section className='download-section'>
      <div className='container'>
        <div className='download-text'>
          <h2>Baixe o app para desbloquear ofertas exclusivas!</h2>
          <p>
            Nosso app oferece uma maneira simples e conveniente de reservar seu veículo. Com uma
            interface intuitiva e opções de pagamento flexíveis, você pode garantir seu carro de
            aluguel em poucos cliques.
          </p>
          <div className='download-text__btns'>
            <img alt='' src={AppStore} />
            <img alt='' src={PlayStore} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
