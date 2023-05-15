import Header from './components/Header'
import IntroSection from './components/IntroSection';
import ExploreColloectionsSection from './components/ExploreColloectionsSection';
import AmenitiesSection from './components/AmenitiesSection';
import FeatureProjectsSection from './components/FeatureProjectsSection';
import HighlitesSection from './components/HighlitesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <IntroSection/>
      <ExploreColloectionsSection />
      <AmenitiesSection />
      <FeatureProjectsSection />
      <HighlitesSection />
      <TestimonialsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default App;
