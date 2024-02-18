import {
  Hero,
  BookCar,
  PlanTrip,
  PickCar,
  Banner,
  ChooseUs,
  Testimonials,
  Faq,
  Download,
  Footer,
} from '../components';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </main>
  );
};

export default Home;
