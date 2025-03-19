
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, DollarSign, Users, TrendingUp } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Affiliate = () => {
  const affiliateLink = "https://leveling-up-fitness.com/?ref=user123";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(affiliateLink);
    toast({
      title: "Lien copié!",
      description: "Le lien d'affiliation a été copié dans votre presse-papiers.",
    });
  };

  const stats = [
    { 
      title: "Jusqu'à 30% de commission", 
      description: "Sur chaque vente générée par votre lien", 
      icon: <DollarSign className="w-8 h-8 text-solo-accent" /> 
    },
    { 
      title: "Paiements mensuels", 
      description: "Recevez votre argent directement sur votre compte", 
      icon: <TrendingUp className="w-8 h-8 text-solo-accent" /> 
    },
    { 
      title: "Suivi en temps réel", 
      description: "Suivez vos performances et conversions", 
      icon: <Users className="w-8 h-8 text-solo-accent" /> 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-solo-dark to-black p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-10"
      >
        <header className="text-center mb-12">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-solo-text bg-clip-text text-transparent bg-gradient-to-r from-solo-accent to-solo-highlight mb-4"
          >
            Programme d'Affiliation
          </motion.h1>
          <p className="text-solo-text/70 text-lg max-w-2xl mx-auto">
            Gagnez de l'argent en partageant Leveling Up Fitness avec votre communauté. Obtenez jusqu'à 30% de commission sur chaque vente!
          </p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="p-8 bg-solo-dark/50 backdrop-blur-lg border-solo-accent/20">
            <h2 className="text-2xl font-bold text-solo-text mb-6">Comment ça fonctionne</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-solo-primary/20 border border-solo-accent/20"
                >
                  <div className="mb-4 p-3 rounded-full bg-solo-primary/30">
                    {stat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-solo-text mb-2">{stat.title}</h3>
                  <p className="text-solo-text/70">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="p-8 bg-solo-dark/50 backdrop-blur-lg border-solo-accent/20">
            <h2 className="text-2xl font-bold text-solo-text mb-6">Votre lien d'affiliation</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Input 
                  value={affiliateLink} 
                  readOnly 
                  className="pr-10 bg-solo-primary/20 border-solo-accent/20 text-solo-text"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 top-0" 
                  onClick={copyToClipboard}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <Button 
                className="bg-gradient-to-r from-solo-accent to-solo-highlight hover:opacity-90"
                onClick={copyToClipboard}
              >
                Copier le lien
              </Button>
            </div>
            <div className="mt-6 p-4 rounded-lg bg-solo-accent/10 border border-solo-accent/20">
              <p className="text-solo-text/90">
                Partagez ce lien sur vos réseaux sociaux, votre blog ou votre site web. Vous gagnerez une commission pour chaque utilisateur qui s'inscrit ou achète via votre lien.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center mt-8"
        >
          <Link to="/shop">
            <Button 
              className="bg-gradient-to-r from-solo-accent to-solo-highlight hover:opacity-90"
            >
              Découvrir nos produits
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Affiliate;
