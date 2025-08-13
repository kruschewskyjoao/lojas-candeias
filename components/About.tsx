
import React from 'react';
import { QuoteIcon } from './Icons';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  avatarUrl: string;
}

interface AboutProps {
  story: {
    title: string;
    text: string;
    imageUrl: string;
  };
  testimonials: Testimonial[];
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-brand-accent p-6 rounded-lg shadow-sm">
    <QuoteIcon className="w-8 h-8 text-brand-secondary mb-4" />
    <p className="text-brand-dark italic mb-4">"{testimonial.text}"</p>
    <div className="flex items-center">
      <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-bold text-brand-primary">{testimonial.name}</p>
      </div>
    </div>
  </div>
);

const About: React.FC<AboutProps> = ({ story, testimonials }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
            <h2 className="font-serif text-3xl text-brand-primary mb-4">{story.title}</h2>
            <p className="text-brand-dark leading-relaxed">{story.text}</p>
          </div>
          <div className="md:w-1/2">
            <img src={story.imageUrl} alt="Nossa História" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <h2 className="text-3xl font-serif text-center mb-10 text-brand-primary">O que nossas clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
