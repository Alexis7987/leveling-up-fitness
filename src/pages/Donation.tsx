
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Donation = () => {
  const [amount, setAmount] = useState("5");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simuler un traitement de paiement
    setTimeout(() => {
      toast({
        title: "Merci pour votre soutien!",
        description: `Votre donation de ${amount}€ a été reçue avec succès.`,
      });
      setIsLoading(false);
    }, 1500);
  };

  const predefinedAmounts = [5, 10, 20, 50, 100];

  return (
    <div className="min-h-screen bg-gradient-to-b from-solo-dark to-black p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto space-y-8"
      >
        <header className="text-center mb-12">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-solo-text bg-clip-text text-transparent bg-gradient-to-r from-solo-accent to-solo-highlight mb-2"
          >
            Soutenez Mon Travail
          </motion.h1>
          <p className="text-solo-text/70">Votre support me permet de continuer à créer du contenu de qualité</p>
        </header>

        <Card className="p-6 bg-solo-dark/50 backdrop-blur-lg border-solo-accent/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Votre nom</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="John Doe" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Votre email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="john@example.com" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label>Montant de la donation (€)</Label>
              <div className="grid grid-cols-5 gap-2">
                {predefinedAmounts.map((amt) => (
                  <Button
                    key={amt}
                    type="button"
                    variant={amount === amt.toString() ? "default" : "outline"}
                    onClick={() => setAmount(amt.toString())}
                    className="w-full"
                  >
                    {amt}€
                  </Button>
                ))}
              </div>
              <Input
                id="amount"
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-2"
              />
            </div>
            
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-solo-accent to-solo-highlight hover:opacity-90"
                disabled={isLoading}
              >
                {isLoading ? "Traitement..." : `Faire un don de ${amount}€`}
              </Button>
            </div>
          </form>
        </Card>
        
        <div className="text-center text-solo-text/70 text-sm">
          <p>Tous les paiements sont traités de manière sécurisée.</p>
          <p className="mt-2">Merci pour votre soutien!</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Donation;
