import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Monthly Release QA Support | ShopifyQA',
  description:
    'Request Monthly Release QA Support for your Shopify store. Structured QA checks for every release using a proven checklist.',
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
    label: 'How many releases do you need QA for each month?',
    type: 'select',
    options: ['1 release', '2 releases', '3 releases', 'Weekly releases (4 per month)'],
  },
  {
    num: '5',
    label: 'What types of updates do you usually make?',
    type: 'checkbox',
    options: [
      'Theme / UI changes',
      'App / plugin updates',
      'Checkout changes',
      'Payment / shipping updates',
      'Promotions / discounts',
      'Custom development',
      'Store migrations',
    ],
  },
  {
    num: '6',
    label: 'Which areas should be tested in each release?',
    type: 'checkbox',
    options: [
      'PLP (Collection pages)',
      'PDP (Product pages)',
      'Cart',
      'Checkout',
      'Payment methods',
      'Subscriptions',
      'Discounts & coupons',
      'International checkout',
      'App / plugin conflicts',
      'Full end-to-end journey',
    ],
  },
  {
    num: '7',
    label: 'Number of products in your store',
    type: 'select',
    options: ['Under 50', '50–200', '200+'],
  },
  {
    num: '8',
    label: 'Approximate number of apps installed',
    type: 'select',
    options: ['Under 5', '5–15', '15+'],
  },
  {
    num: '9',
    label: 'Which payment methods do you use?',
    type: 'checkbox',
    options: ['Shopify Payments', 'PayPal', 'BNPL', 'Local gateways', 'Subscriptions'],
  },
  {
    num: '10',
    label: 'Which devices should we test on?',
    type: 'select',
    options: ['Desktop only', 'Mobile only', 'Desktop + Mobile (+ $500 / month)'],
  },
  {
    num: '11',
    label: 'How critical is release QA for your business?',
    type: 'select',
    options: ['Medium (steady sales)', 'High (ads running / high revenue)', 'Very high (major campaigns / high risk)'],
  },
  {
    num: '12',
    label: 'Preferred QA turnaround per release',
    type: 'select',
    options: ['24–48 hours', 'Flexible'],
  },
  { num: '13', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
  { num: '14', label: 'Email Address', type: 'email', placeholder: 'Enter your email address' },
  { num: '15', label: 'Company / Brand Name', type: 'text', placeholder: 'Enter your company or brand name' },
];

const pricingTiers = [
  { plan: '1 Release / Month', price: '$1,500' },
  { plan: '2 Releases / Month', price: '$2,500' },
  { plan: '3 Releases / Month', price: '$3,000' },
  { plan: 'Weekly (4 Releases)', price: '$4,000' },
  { plan: 'Desktop + Mobile Add-on', price: '+$500' },
];

export default function MonthlyQAPage() {
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
              <RefreshCw className="h-3 w-3 mr-1" />
              Ongoing Support
            </Badge>
            <h1 className="heading-1 text-foreground mb-6">Monthly Release QA Support</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Please share a few details about your Shopify store and release process so we can recommend the right
              monthly QA plan and pricing.
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
                  <CardTitle className="heading-3">Monthly QA Request Form</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll review your monthly QA requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {formFields.map((field) => (
                      <div key={field.num} className="space-y-2">
                        <label className="block text-sm font-medium text-foreground">
                          {field.num}) {field.label}
                          {['1', '2', '3', '4', '13', '14'].includes(field.num) && (
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
                      </div>
                    ))}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary-light text-white btn-glow"
                    >
                      Submit Monthly QA Request
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
                  <CardTitle className="heading-3 text-lg">Monthly Pricing</CardTitle>
                  <CardDescription>Pricing depends on the number of releases per month.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pricingTiers.map((tier) => (
                      <div
                        key={tier.plan}
                        className="flex items-center justify-between p-3 rounded-lg bg-background border border-border"
                      >
                        <p className="font-medium text-foreground text-sm">{tier.plan}</p>
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
                      'We review your details',
                      'Recommend the right plan',
                      'Share final monthly pricing',
                      'Confirm scope & timeline',
                      'Begin monthly QA support',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">We usually respond within 24 hours.</p>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="heading-3 text-lg">Why Monthly QA?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'Ship updates without breaking sales',
                      'Consistent quality checks',
                      'Priority support',
                      'Go-live confidence',
                      'Peace of mind',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
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
