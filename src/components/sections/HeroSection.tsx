'use client';

import Link from 'next/link';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background min-h-[90vh] flex items-center">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle - left */}
        <div className="decorative-circle w-[600px] h-[600px] -left-[200px] top-1/4" />
        {/* Medium circle - right */}
        <div className="decorative-circle w-[400px] h-[400px] -right-[100px] top-1/3" />
        {/* Small circle - bottom right */}
        <div className="decorative-circle w-[200px] h-[200px] right-[20%] bottom-[10%]" />
        
        {/* Floating dots */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-primary/30" />
        <div className="absolute top-[40%] right-[25%] w-3 h-3 rounded-full bg-primary/20" />
        <div className="absolute bottom-[30%] left-[30%] w-2 h-2 rounded-full bg-primary/40" />
        <div className="absolute top-[60%] right-[15%] w-2 h-2 rounded-full bg-primary/30" />
        
        {/* Code snippets decoration */}
        <div className="code-snippet absolute top-[15%] left-[5%] hidden lg:block">
          assert(checkout === working)
        </div>
        <div className="code-snippet absolute bottom-[20%] left-[3%] hidden lg:block">
          qa.validate()
        </div>
        <div className="code-snippet absolute top-[25%] right-[5%] hidden lg:block">
          test.pass() ✓
        </div>
        
        {/* Vertical dots on right side */}
        <div className="absolute right-[3%] top-1/3 flex flex-col gap-4 hidden lg:flex">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full border border-primary/30" />
          ))}
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-muted-foreground text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Protecting Shopify Revenue Worldwide
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-1 text-foreground mb-6"
            >
              Protect Your <span className="text-gradient">Shopify Revenue</span> with Expert QA
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              We help Shopify stores increase conversions by testing checkout, mobile UX, 
              and purchase flows to prevent lost sales.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center mb-6"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary-light text-white text-lg px-8 py-6 btn-glow"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Get a Free Mini Audit
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            
            {/* Sub-CTA text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-muted-foreground"
            >
              No commitment. Quick results.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
