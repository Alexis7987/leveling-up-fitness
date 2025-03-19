
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart, PlusCircle, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  description: string;
}

const Shop = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const products: Product[] = [
    {
      id: "p1",
      name: "Programme Elite Training",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 4.9,
      category: "programmes",
      description: "Programme complet d'entraînement pour atteindre vos objectifs de fitness en 12 semaines."
    },
    {
      id: "p2",
      name: "Guide Nutrition Avancé",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 4.7,
      category: "nutrition",
      description: "Guide nutritionnel complet avec plus de 100 recettes et plans de repas personnalisables."
    },
    {
      id: "p3",
      name: "Accès Premium 1 an",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 4.8,
      category: "abonnements",
      description: "Accès illimité à tous nos programmes, suivi personnalisé et coaching vidéo pendant 12 mois."
    },
    {
      id: "p4",
      name: "Consultation Coaching",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1598631478025-7336e6d1a689?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 5.0,
      category: "coaching",
      description: "Session de coaching personnalisée d'une heure avec l'un de nos experts certifiés."
    },
  ];

  const categories = [
    { id: "all", name: "Tous les produits" },
    { id: "programmes", name: "Programmes" },
    { id: "nutrition", name: "Nutrition" },
    { id: "abonnements", name: "Abonnements" },
    { id: "coaching", name: "Coaching" },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    toast({
      title: "Produit ajouté!",
      description: `${product.name} a été ajouté à votre panier.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-solo-dark to-black p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-8"
      >
        <header className="text-center mb-12">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-solo-text bg-clip-text text-transparent bg-gradient-to-r from-solo-accent to-solo-highlight mb-4"
          >
            Boutique
          </motion.h1>
          <p className="text-solo-text/70 text-lg max-w-2xl mx-auto">
            Découvrez nos programmes, guides et services exclusifs pour optimiser vos performances
          </p>
          
          <div className="mt-8 flex justify-center items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="relative mr-2 bg-solo-primary/30 border-solo-accent/20"
            >
              <ShoppingCart className="h-5 w-5 text-solo-text" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-solo-highlight text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Button>
            <div className="text-solo-text/70">
              {cart.length > 0 ? `${cart.length} produit(s) dans le panier` : "Panier vide"}
            </div>
          </div>
        </header>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-solo-accent to-solo-highlight hover:opacity-90"
                    : "bg-solo-primary/30 border-solo-accent/20 text-solo-text"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Card className="overflow-hidden bg-solo-dark/50 backdrop-blur-lg border-solo-accent/20 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-solo-primary/50 hover:bg-solo-primary/70 text-solo-text rounded-full"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-solo-text">{product.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-solo-text/70 text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-solo-text/70 mb-4 text-sm flex-grow">{product.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xl font-bold text-solo-accent">{product.price.toFixed(2)} €</span>
                    <Button
                      onClick={() => addToCart(product)}
                      className="bg-gradient-to-r from-solo-accent to-solo-highlight hover:opacity-90"
                    >
                      {cart.some(item => item.id === product.id) ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" /> Ajouté
                        </>
                      ) : (
                        <>
                          <PlusCircle className="mr-2 h-4 w-4" /> Ajouter
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Shop;
