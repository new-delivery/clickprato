import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Silva",
    business: "Pizzaria Bella Napoli",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Desde que implementamos o ClickPrato, nossas vendas aumentaram 40%. Os clientes adoram a facilidade de fazer pedidos pelo celular!",
  },
  {
    name: "Maria Santos",
    business: "Hamburgueria Top Burger",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "O melhor investimento que fizemos! Zero comissão e ainda conseguimos fidelizar mais clientes com os cupons de desconto.",
  },
  {
    name: "Carlos Oliveira",
    business: "Restaurante Sabor da Casa",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "A integração com WhatsApp mudou nosso delivery. Organização total e os clientes recebem atualizações em tempo real.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes{" "}
            <span className="text-primary">dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Restaurantes de todo o Brasil já transformaram seu delivery com o ClickPrato
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-elevated p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
