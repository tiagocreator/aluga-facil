import { Footer, HeroPages } from '../components';

import { IconPhone } from '@tabler/icons-react';

import Person1 from '../images/team/1.jpg';
import Person2 from '../images/team/2.jpg';
import Person3 from '../images/team/3.jpg';
import Person4 from '../images/team/4.jpg';
import Person5 from '../images/team/5.jpg';
import Person6 from '../images/team/6.jpg';

const Team: React.FC = () => {
  interface TeamMember {
    img: string;
    name: string;
    job: string;
  }

  const teamMember: TeamMember[] = [
    { img: Person1, name: 'Carla Santos', job: 'Gerente Geral' },
    { img: Person2, name: 'Rafael Costa', job: 'Gerente de Frota' },
    { img: Person3, name: 'Pedro Almeida', job: 'Gerente de Operações' },
    { img: Person4, name: 'Lucas Silva', job: 'Agente de Atendimento' },
    { img: Person5, name: 'Mariana Santos', job: 'Analista Financeiro' },
    { img: Person6, name: 'Ana Oliveira', job: 'Analista de Dados' },
  ];

  return (
    <section className='team-page'>
      <HeroPages name='Nossa Equipe' />
      <div className='container'>
        <div className='team-container'>
          {teamMember.map((member, id) => (
            <div key={id} className='team-container__box'>
              <div className='team-container__box__img-div'>
                <img src={member.img} alt='' />
              </div>
              <div className='team-container__box__descr'>
                <h3>{member.name}</h3>
                <p>{member.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
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
    </section>
  );
};

export default Team;
