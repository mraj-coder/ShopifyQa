import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, ArrowRight, Clock, ShieldCheck, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with ShopifyQA. Request a free mini audit or learn more about our QA services for Shopify stores.',
};

const contactOptions = [
  {
    icon: ShieldCheck,
    title: 'Conversion QA Audit',
    description: 'Get a comprehensive review of your checkout flow and conversion paths.',
    cta: 'Request Audit',
    link: '/services/conversion-qa',
    primary: true,
    external: false,
  },
  {
    icon: MessageSquare,
    title: 'General Inquiry',
    description: 'Have questions? We\'re happy to help.',
    cta: 'Send Message',
    link: 'mailto:contact@shopifyqa.com',
    primary: false,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 text-foreground mb-6">
              Let&apos;s Protect Your Revenue
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Ready to find the bugs costing you sales? Get in touch and we&apos;ll help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Card key={option.title} className={option.primary ? 'border-primary/30 bg-primary/5' : ''}>
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="heading-3">{option.title}</CardTitle>
                    <CardDescription className="text-base">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      className={`w-full ${option.primary ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={option.primary ? 'default' : 'outline'}
                    >
                      <Link
                        href={option.link}
                        {...(option.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="flex items-center justify-center gap-2"
                      >
                        {option.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Direct Contact */}
          <div className="mt-16 max-w-xl mx-auto text-center">
            <h2 className="heading-3 text-foreground mb-4">Prefer Email?</h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href="mailto:contact@shopifyqa.com"
                className="text-lg text-primary hover:underline"
              >
                contact@shopifyqa.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">We typically respond within 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-foreground mb-4">What Happens Next?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Quick Review',
                  description: 'We review your submission and assess your store\'s needs.',
                },
                {
                  step: '2',
                  title: 'Personalized Response',
                  description: 'You\'ll receive a tailored response with recommendations.',
                },
                {
                  step: '3',
                  title: 'Get Started',
                  description: 'We begin protecting your revenue with expert QA testing.',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
