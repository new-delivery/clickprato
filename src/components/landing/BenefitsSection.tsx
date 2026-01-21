import { motion } from "framer-motion";
import { TrendingUp, Settings, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Venda mais e aumente sua receita",
    description: "Crie cupons, programas de fidelidade e fidelize seus clientes com campanhas personalizadas.",
  },
  {
    icon: Settings,
    title: "Organize sua operação de delivery",
    description: "Centralize seus pedidos em uma só plataforma e organize suas operações com eficiência.",
  },
  {
    icon: DollarSign,
    title: "Economize dinheiro com comissões",
    description: "Com seu canal próprio você não paga mais comissões altas e não fica dependente do marketplace.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-padding bg-background">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por que seu negócio precisa de uma{" "}
            <span className="text-primary">plataforma própria?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como o ClickPrato pode transformar seu delivery e aumentar suas vendas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-elevated p-8 text-center group cursor-pointer"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <benefit.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
