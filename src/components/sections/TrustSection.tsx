import { 
  ShoppingCart, 
  Smartphone, 
  CreditCard, 
  Puzzle, 
  Gauge, 
  Tag 
} from 'lucide-react';
import { problems } from '@/data/mock-data';

const iconMap = [
  ShoppingCart,
  Smartphone,
  CreditCard,
  Puzzle,
  Gauge,
  Tag,
];

export function TrustSection() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-foreground mb-4">
            Why Shopify Stores <span className="text-gradient">Lose Money</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most stores lose sales due to issues they don&apos;t even know exist:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={problem.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="heading-3 text-lg text-foreground mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-primary/20">
            <span className="text-2xl">⚠️</span>
            <p className="text-muted-foreground text-left">
              <span className="text-foreground font-medium">Your ads may be working</span> — but your store experience is leaking revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
