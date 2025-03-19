
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Wallet,
  Users,
  TrendingUp,
  Share2,
  CheckCircle,
  ChevronRight,
  Copy,
  Coins,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AffiliatePage = () => {
  const { toast } = useToast();
  const affiliateLink = `https://leveling-up-fitness.com/ref?id=${Math.random().toString(36).substring(2, 8)}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(affiliateLink);
    toast({
      title: "Lien d'affiliation copié!",
      description: "Partagez-le avec vos amis pour commencer à gagner",
      variant: "default",
    });
  };

  const tiers = [
    {
      name: "Débutant",
      earnings: "Jusqu'à 100€/mois",
      requirements: "5 affiliés actifs",
      commission: "15% par vente",
      features: [
        "Commission sur les ventes directes",
        "Tableau de bord basique",
        "Support par email"
      ],
      recommended: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Intermédiaire",
      earnings: "Jusqu'à 500€/mois",
      requirements: "15 affiliés actifs",
      commission: "20% par vente",
      features: [
        "Commission sur les ventes directes",
        "Commission de second niveau (5%)",
        "Matériel promotionnel exclusif",
        "Tableau de bord avancé"
      ],
      recommended: true,
      color: "from-solo-accent to-solo-highlight"
    },
    {
      name: "Expert",
      earnings: "1000€+ par mois",
      requirements: "30+ affiliés actifs",
      commission: "25% par vente",
      features: [
        "Commission sur les ventes directes",
        "Commission multi-niveaux (3 niveaux)",
        "Matériel promotionnel personnalisé",
        "Manager dédié",
        "Accès anticipé aux nouveaux produits"
      ],
      recommended: false,
      color: "from-purple-600 to-purple-800"
    }
  ];

  const testimonials = [
    {
      name: "Thomas D.",
      role: "Coach sportif",
      content: "Grâce au programme d'affiliation Leveling Up, je gagne 650€ supplémentaires chaque mois sans effort. J'ai simplement partagé mon lien avec ma communauté d'entraînement!",
      earnings: "650€/mois",
      avatar: "/leveling-up-fitness/placeholder.svg"
    },
    {
      name: "Marie L.",
      role: "Influenceuse fitness",
      content: "J'ai commencé avec zéro connaissance en marketing et maintenant je gagne plus avec mon lien d'affiliation qu'avec mon travail principal. L'équipe de support est extraordinaire!",
      earnings: "1200€/mois",
      avatar: "/leveling-up-fitness/placeholder.svg"
    },
    {
      name: "Karim B.",
      role: "Blogueur santé",
      content: "Le système de commission multi-niveaux est génial. Je gagne non seulement sur mes affiliés directs mais aussi sur leurs recommandations. Revenu vraiment passif!",
      earnings: "850€/mois",
      avatar: "/leveling-up-fitness/placeholder.svg"
    }
  ];

  const steps = [
    {
      title: "Inscrivez-vous",
      description: "Créez votre compte d'affilié gratuitement en quelques minutes",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Partagez votre lien",
      description: "Utilisez votre lien unique sur vos réseaux sociaux, blog ou email",
      icon: <Share2 className="h-6 w-6" />
    },
    {
      title: "Observez vos gains",
      description: "Suivez vos performances et vos commissions en temps réel",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Recevez vos paiements",
      description: "Paiements automatiques tous les mois directement sur votre compte",
      icon: <Wallet className="h-6 w-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-solo-dark to-black text-solo-text p-4 md:p-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-20 text-center pt-8"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-solo-accent to-solo-highlight">
            Gagnez de l'Argent Pendant Votre Sommeil
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-solo-text/80">
            Notre programme d'affiliation vous permet de générer des revenus passifs en partageant simplement ce que vous aimez déjà
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <Button size="lg" className="bg-gradient-to-r from-solo-accent to-solo-highlight hover:opacity-90">
            Commencer maintenant <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-solo-accent text-solo-text hover:bg-solo-primary/20">
            En savoir plus
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Card className="p-6 bg-solo-dark/50 backdrop-blur-lg border-solo-accent/20 max-w-2xl">
            <h3 className="text-xl font-semibold mb-4">Votre lien d'affiliation personnel</h3>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={affiliateLink}
                readOnly
                className="flex-1 bg-solo-primary/20 border border-solo-accent/30 rounded-md px-4 py-2 text-solo-text"
              />
              <Button variant="outline" onClick={copyToClipboard} className="flex items-center gap-2 border-solo-accent">
                <Copy className="h-4 w-4" /> Copier
              </Button>
            </div>
            <p className="mt-4 text-sm text-solo-text/70">
              Partagez ce lien pour gagner des commissions sur chaque achat effectué
            </p>
          </Card>
        </motion.div>
      </motion.section>

      {/* Comment ça marche */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto my-20"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment Gagner de l'Argent</h2>
          <p className="text-lg text-solo-text/80 max-w-2xl mx-auto">
            Suivez ces étapes simples pour commencer à générer des revenus passifs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-solo-primary/20 backdrop-blur-md rounded-xl p-6 border border-solo-accent/20"
            >
              <div className="bg-gradient-to-r from-solo-accent to-solo-highlight rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-solo-text/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tiers */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto my-20"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Niveaux de Revenus</h2>
          <p className="text-lg text-solo-text/80 max-w-2xl mx-auto">
            Plus vous partagez, plus vous gagnez - c'est aussi simple que ça
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-xl overflow-hidden border ${
                tier.recommended ? 'border-solo-highlight' : 'border-solo-accent/20'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 right-0 bg-solo-highlight text-white px-4 py-1 text-sm font-semibold">
                  Recommandé
                </div>
              )}
              <div className={`p-6 h-full flex flex-col bg-gradient-to-b ${tier.color} bg-opacity-50`}>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{tier.earnings}</span>
                </div>
                <p className="text-sm mb-2 opacity-90">Requis: {tier.requirements}</p>
                <p className="text-sm mb-6 opacity-90">Commission: {tier.commission}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`mt-auto ${
                    tier.recommended 
                      ? 'bg-white text-solo-primary hover:bg-white/90' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  Commencer <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Statistiques */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto my-20 bg-solo-primary/30 rounded-2xl p-8 border border-solo-accent/20"
      >
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div variants={itemVariants}>
            <Coins className="h-12 w-12 mx-auto mb-4 text-solo-highlight" />
            <h3 className="text-4xl font-bold mb-2">25%</h3>
            <p className="text-solo-text/70">Commission maximale</p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Users className="h-12 w-12 mx-auto mb-4 text-solo-highlight" />
            <h3 className="text-4xl font-bold mb-2">5,400+</h3>
            <p className="text-solo-text/70">Affiliés actifs</p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Wallet className="h-12 w-12 mx-auto mb-4 text-solo-highlight" />
            <h3 className="text-4xl font-bold mb-2">2.5M€</h3>
            <p className="text-solo-text/70">Commissions versées</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Témoignages */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto my-20"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Affiliés Témoignent</h2>
          <p className="text-lg text-solo-text/80 max-w-2xl mx-auto">
            Découvrez comment d'autres personnes gagnent déjà de l'argent avec notre programme
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-solo-primary/20 backdrop-blur-md rounded-xl p-6 border border-solo-accent/20"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-solo-text/70">{testimonial.role}</p>
                </div>
              </div>
              <p className="mb-4 italic">"{testimonial.content}"</p>
              <div className="mt-4 pt-4 border-t border-solo-accent/20">
                <span className="font-semibold text-solo-highlight">{testimonial.earnings}</span>
                <span className="text-solo-text/70 text-sm"> en revenus passifs</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Final */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center my-20 py-16"
      >
        <motion.h2 
          variants={itemVariants} 
          className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-solo-accent to-solo-highlight"
        >
          Prêt à Gagner Sans Effort?
        </motion.h2>
        <motion.p variants={itemVariants} className="text-xl mb-8 text-solo-text/80">
          Rejoignez notre programme d'affiliation aujourd'hui et commencez à toucher des commissions dès demain
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button size="lg" className="bg-gradient-to-r from-solo-accent to-solo-highlight hover:opacity-90 px-8 py-6 text-lg">
            Démarrer maintenant <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AffiliatePage;
