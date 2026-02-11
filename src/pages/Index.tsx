import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experiences } from '@/components/Experiences';
import { Billing } from '@/components/Billing';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <About />
      <Experiences />
      <Billing />
      <Contact />
    </main>
  );
};

export default Index;
