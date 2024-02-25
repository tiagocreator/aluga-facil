import { BookBanner, Footer, HeroPages, Testimonials } from '../components';

const TestimonialsPage: React.FC = () => {
  return (
    <section className='testimonial-page'>
      <HeroPages name='Testemunhas' />
      <Testimonials />
      {/* book banner */}
      <BookBanner />
      {/* footer */}
      <Footer />
    </section>
  );
};

export default TestimonialsPage;
