import { motion } from "framer-motion";
import { 
  Smartphone, 
  MessageCircle, 
  CreditCard, 
  BarChart3, 
  Bell, 
  Users,
  Palette,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Cardápio 100% Responsivo",
    description: "Funciona perfeitamente em celulares, tablets e computadores.",
  },
  {
    icon: MessageCircle,
    title: "Integração com WhatsApp",
    description: "Receba pedidos diretamente no WhatsApp do seu restaurante.",
  },
  {
    icon: CreditCard,
    title: "Múltiplas Formas de Pagamento",
    description: "PIX, cartão de crédito, débito e dinheiro. Você escolhe!",
  },
  {
    icon: BarChart3,
    title: "Relatórios Completos",
    description: "Acompanhe suas vendas, produtos mais vendidos e muito mais.",
  },
  {
    icon: Bell,
    title: "Notificações Push",
    description: "Engaje seus clientes com promoções e novidades em tempo real.",
  },
  {
    icon: Users,
    title: "Gestão de Clientes",
    description: "Cadastro completo de clientes para ações de fidelização.",
  },
  {
    icon: Palette,
    title: "Personalização Total",
    description: "Cores, logo e layout do seu jeito. Sua marca em primeiro lugar.",
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Configure horários de funcionamento e pausas personalizadas.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="section-padding bg-muted">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Funcionalidades que fazem a{" "}
            <span className="text-primary">diferença</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para ter um delivery de sucesso em uma única plataforma
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
