import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ShopifyQA.',
};

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="heading-1 text-foreground mb-8">Privacy Policy</h1>
          
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="heading-3 text-foreground mb-4">1. Introduction</h2>
              <p>
                ShopifyQA (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <h3 className="font-semibold text-foreground mt-4 mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Company/store name</li>
                <li>Shopify store URL</li>
              </ul>
              <h3 className="font-semibold text-foreground mt-4 mb-2">Technical Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>IP address</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide and improve our QA testing services</li>
                <li>Communicate with you about our services</li>
                <li>Send you relevant updates and marketing communications</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">4. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">6. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">7. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">9. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:contact@shopifyqa.com" className="text-primary hover:underline">
                  contact@shopifyqa.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
