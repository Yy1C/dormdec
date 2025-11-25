import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { AIConsultant } from './components/AIConsultant';
import { ServiceType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState<ServiceType | undefined>(undefined);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service);
    handleNavigate('booking');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Services onSelectService={handleServiceSelect} />
            <Gallery onNavigate={handleNavigate} />
            <AIConsultant />
          </>
        );
      case 'services':
        return <Services onSelectService={handleServiceSelect} />;
      case 'blueprints':
        return <Gallery onNavigate={handleNavigate} />;
      case 'booking':
        return <BookingForm initialServiceType={selectedService} />;
      case 'consult':
        return <AIConsultant />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div class="min-h-screen bg-brand-50 flex flex-col">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main class="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;