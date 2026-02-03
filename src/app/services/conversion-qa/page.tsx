import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Search, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Conversion QA Audit Request | ShopifyQA',
  description:
    'Request a Conversion QA Audit for your Shopify store. We review your entire buying journey to uncover issues and improve conversions.',
};

const formFields = [
  { num: '1', label: 'Store URL', type: 'text', placeholder: 'Please share your Shopify store link' },
  {
    num: '2',
    label: 'Shopify Plan',
    type: 'select',
    options: ['Basic', 'Shopify', 'Advanced', 'Shopify Plus'],
  },
  {
    num: '3',
    label: 'Monthly Revenue Range',
    type: 'select',
    options: ['Under $10k', '$10k–$50k', '$50k–$200k', '$200k+'],
  },
  {
    num: '4',
    label: 'Number of products in your store',
    type: 'select',
    options: ['Under 50', '50–200', '200+'],
  },
  {
    num: '5',
    label: 'Which payment methods do you use?',
    type: 'checkbox',
    options: ['Shopify Payments', 'PayPal', 'BNPL (Klarna, Afterpay, etc.)', 'Local gateways', 'Subscriptions', 'Other'],
  },
  {
    num: '6',
    label: 'Shipping setup',
    type: 'select',
    options: ['Domestic only', 'Multiple zones', 'International + complex rules'],
  },
  {
    num: '7',
    label: 'Approximate number of apps installed',
    type: 'select',
    options: ['Under 5', '5–15', '15+'],
  },
  {
    num: '8',
    label: 'What is your main goal for this audit?',
    type: 'select',
    options: [
      'Improve conversion rate',
      'Fix checkout issues',
      'Reduce cart abandonment',
      'Improve mobile experience',
      'Identify bugs',
      'Preparing for ads / scaling',
    ],
  },
  {
    num: '9',
    label: 'Which areas should we focus on?',
    type: 'checkbox',
    options: [
      'Homepage',
      'Collection pages (PLP)',
      'Product pages (PDP)',
      'Cart',
      'Checkout',
      'Payment flows',
      'Discounts & coupons',
      'Mobile UX',
      'App / plugin conflicts',
      'Full end-to-end journey',
    ],
  },
  {
    num: '10',
    label: 'Any known issues or concerns?',
    type: 'textarea',
    placeholder: 'Payment errors, mobile checkout problems, slow pages, discount issues',
  },
  {
    num: '11',
    label: 'Timeline preference',
    type: 'select',
    options: ['As soon as possible', 'Within 1 week', 'Flexible'],
  },
  { num: '12', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
  { num: '13', label: 'Email Address', type: 'email', placeholder: 'Enter your email address' },
  { num: '14', label: 'Company / Brand Name', type: 'text', placeholder: 'Enter your company or brand name' },
];

const pricingTiers = [
  { profile: 'Simple store, low revenue', tier: 'Starter', price: '$500' },
  { profile: 'Medium complexity', tier: 'Growth', price: '$1,000' },
  { profile: 'Large / Plus / complex', tier: 'Scale', price: '$2,000' },
];

export default function ConversionQAPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="decorative-circle w-[400px] h-[400px] -left-[150px] top-1/4" />
          <div className="decorative-circle w-[300px] h-[300px] -right-[100px] top-1/3" />
        </div>

        <div className="container-custom relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>

          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Search className="h-3 w-3 mr-1" />
              Most Popular
            </Badge>
            <h1 className="heading-1 text-foreground mb-6">Conversion QA Audit Request</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Please share a few details about your Shopify store so we can recommend the right audit scope and pricing.
            </p>
            <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="heading-3">Audit Request Form</CardTitle>
                  <CardDescription>Fill out the form below and we&apos;ll review your store requirements.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {formFields.map((field) => (
                      <div key={field.num} className="space-y-2">
                        <label className="block text-sm font-medium text-foreground">
                          {field.num}) {field.label}
                          {['1', '2', '3', '12', '13'].includes(field.num) && (
                            <span className="text-destructive ml-1">*</span>
                          )}
                        </label>

                        {field.type === 'text' && (
                          <input
                            type="text"
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          />
                        )}

                        {field.type === 'email' && (
                          <input
                            type="email"
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          />
                        )}

                        {field.type === 'select' && (
                          <div className="space-y-2">
                            {field.options?.map((option) => (
                              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                  type="radio"
                                  name={`field-${field.num}`}
                                  className="w-4 h-4 text-primary border-border focus:ring-primary"
                                />
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                  {option}
                                </span>
                              </label>
                            ))}
                          </div>
                        )}

                        {field.type === 'checkbox' && (
                          <div className="space-y-2">
                            {field.options?.map((option) => (
                              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                  type="checkbox"
                                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                                />
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                  {option}
                                </span>
                              </label>
                            ))}
                          </div>
                        )}

                        {field.type === 'textarea' && (
                          <textarea
                            placeholder={field.placeholder}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                          />
                        )}
                      </div>
                    ))}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary-light text-white btn-glow"
                    >
                      Submit Audit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Guide */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="heading-3 text-lg">Pricing Guide</CardTitle>
                  <CardDescription>
                    Pricing depends on your store complexity. Here&apos;s a quick reference:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pricingTiers.map((tier) => (
                      <div key={tier.tier} className="flex items-center justify-between p-3 rounded-lg bg-background border border-border">
                        <div>
                          <p className="font-medium text-foreground">{tier.tier}</p>
                          <p className="text-sm text-muted-foreground">{tier.profile}</p>
                        </div>
                        <span className="text-lg font-bold text-primary">{tier.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* What Happens Next */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="heading-3 text-lg">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'We review your store',
                      'Recommend audit tier',
                      'Share final pricing',
                      'Confirm timeline',
                      'Begin the audit',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
