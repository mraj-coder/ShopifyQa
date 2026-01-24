'use client';

import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/mock-data';

export function SocialProofSection() {
  // Show 4 testimonials - mix of conversion, launch, ongoing QA, and mobile/UX
  const displayTestimonials = [
    testimonials[0], // Conversion focused
    testimonials[1], // Bug Bash / Launch
    testimonials[2], // Ongoing Monthly QA
    testimonials[3], // Mobile & UX Focus
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-foreground mb-4">
            Trusted by <span className="text-gradient">Shopify Brands</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what merchants say about working with ShopifyQA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Quote className="h-5 w-5 text-primary" />
              </div>

              {/* Quote text */}
              <blockquote className="text-foreground text-lg mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
