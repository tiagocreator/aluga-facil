import { Link } from 'react-router-dom';

interface HeroPagesProps {
  name: string;
}

const HeroPages: React.FC<HeroPagesProps> = ({ name }) => {
  return (
    <section className='hero-pages'>
      <div className='hero-pages__overlay'></div>
      <div className='container'>
        <div className='hero-pages__text'>
          <h3>{name}</h3>
          <p>
            <Link to='/'>Início</Link> / {name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroPages;
