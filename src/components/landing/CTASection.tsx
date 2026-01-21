import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Configuração em menos de 24 horas",
  "Suporte técnico dedicado",
  "Sem taxa de adesão",
  "Período de teste grátis",
];

const CTASection = () => {
  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-tight mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para transformar seu{" "}
            <span className="text-primary">delivery?</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
            Junte-se a mais de 500 restaurantes que já aumentaram suas vendas com o ClickPrato
          </p>

          {/* Benefits list */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero"
              size="xl"
              asChild
            >
              <a href="https://clickprato.codclick.com.br" target="_blank" rel="noopener noreferrer">
                Ver Demonstração Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button 
              variant="heroOutline"
              size="xl"
            >
              Falar com Consultor
            </Button>
          </div>

          {/* Trust badge */}
          <p className="mt-8 text-sm text-primary-foreground/60">
            ✓ Sem cartão de crédito necessário • ✓ Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
