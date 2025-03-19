
import { StatusCard } from "@/components/StatusCard";
import { ExerciseList } from "@/components/ExerciseList";
import { StatProgress } from "@/components/StatProgress";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, DollarSign, Users, ArrowRight } from "lucide-react";

const Index = () => {
  const playerStats = {
    level: 15,
    stats: [
      { name: "Strength", value: 75, maxValue: 100 },
      { name: "Endurance", value: 60, maxValue: 100 },
      { name: "Agility", value: 45, maxValue: 100 },
      { name: "Recovery", value: 55, maxValue: 100 },
      { name: "Intelligence", value: 80, maxValue: 100 },
    ],
  };

  const dailyExercises = [
    {
      name: "Shadow Push-ups",
      difficulty: "S-Rank Quest",
      xp: 250,
      completed: true,
    },
    {
      name: "Demon's Pull-ups",
      difficulty: "A-Rank Quest",
      xp: 150,
      completed: false,
    },
    {
      name: "Beast Squats",
      difficulty: "B-Rank Quest",
      xp: 100,
      completed: false,
    },
    {
      name: "Dragon's Breath Cardio",
      difficulty: "S-Rank Quest",
      xp: 200,
      completed: false,
    },
  ];

  const features = [
    {
      title: "Boutique",
      description: "Découvrez nos programmes d'entraînement exclusifs",
      icon: <ShoppingBag className="h-6 w-6 text-solo-highlight" />,
      link: "/shop",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Programme d'Affiliation",
      description: "Gagnez de l'argent en partageant avec vos amis",
      icon: <DollarSign className="h-6 w-6 text-solo-highlight" />,
      link: "/affiliate",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Soutenir le Projet",
      description: "Contribuez au développement de nouvelles fonctionnalités",
      icon: <Users className="h-6 w-6 text-solo-highlight" />,
      link: "/donation",
      color: "from-orange-500 to-red-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-solo-dark to-black p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <header className="text-center mb-12">
          <motion.h1 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-solo-text bg-clip-text text-transparent bg-gradient-to-r from-solo-accent to-solo-highlight mb-2"
          >
            Hunter Status
          </motion.h1>
          <p className="text-solo-text/70">Arise and conquer your fitness goals</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <StatusCard level={playerStats.level} stats={playerStats.stats} />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-solo-dark/50 backdrop-blur-lg border-solo-accent/20">
              <h2 className="text-xl font-bold text-solo-text mb-4">Daily Achievements</h2>
              <div className="space-y-4">
                <StatProgress currentXP={450} requiredXP={1000} />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-4 rounded-lg bg-solo-primary/30 border border-solo-accent/20">
                    <p className="text-solo-text/70 text-sm">Completed Quests</p>
                    <p className="text-2xl font-bold text-solo-accent">3/8</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-solo-primary/30 border border-solo-accent/20">
                    <p className="text-solo-text/70 text-sm">Total XP Today</p>
                    <p className="text-2xl font-bold text-solo-highlight">450</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ExerciseList exercises={dailyExercises} />
        </motion.div>

        {/* Nouvelles fonctionnalités mises en avant */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-solo-text text-center mb-8">Découvrez nos fonctionnalités</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link to={feature.link} className="block h-full">
                  <Card className="p-6 h-full bg-solo-dark/50 backdrop-blur-lg border-solo-accent/20 hover:bg-solo-primary/30 transition-all duration-300 flex flex-col">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${feature.color} w-fit mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-solo-text mb-2">{feature.title}</h3>
                    <p className="text-solo-text/70 mb-4 flex-grow">{feature.description}</p>
                    <Button 
                      variant="ghost" 
                      className="mt-auto justify-start p-0 hover:bg-transparent hover:text-solo-highlight"
                    >
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
