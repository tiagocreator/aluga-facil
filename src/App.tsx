import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { Models, TestimonialsPage, Team, Contact, Home, About } from './pages';
import { Navbar } from './components';

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/600.css';
import '@fontsource/rubik/700.css';

import '../src/dist/styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='models' element={<Models />} />
        <Route path='testimonials' element={<TestimonialsPage />} />
        <Route path='team' element={<Team />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
