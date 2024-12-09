import { Card } from "@/components/ui/card";
import { Dumbbell, Trophy, Swords, Target } from "lucide-react";
import { motion } from "framer-motion";

interface Exercise {
  name: string;
  difficulty: string;
  xp: number;
  completed: boolean;
}

interface ExerciseListProps {
  exercises: Exercise[];
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "S-Rank Quest":
      return "text-red-500";
    case "A-Rank Quest":
      return "text-yellow-500";
    case "B-Rank Quest":
      return "text-blue-500";
    default:
      return "text-green-500";
  }
};

export const ExerciseList = ({ exercises }: ExerciseListProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-solo-text">Daily Quests</h2>
        <div className="flex items-center space-x-2">
          <Target className="w-5 h-5 text-solo-accent" />
          <span className="text-solo-text/70">Available Quests: {exercises.length}</span>
        </div>
      </div>
      <div className="grid gap-4">
        {exercises.map((exercise, index) => (
          <motion.div
            key={exercise.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className={`p-6 flex items-center justify-between bg-solo-dark/50 backdrop-blur-lg border-solo-accent/20 hover:bg-solo-primary/20 transition-all duration-300 cursor-pointer ${
                exercise.completed ? "opacity-70" : ""
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-solo-primary/30 border border-solo-accent/20">
                  {exercise.completed ? (
                    <Trophy className="w-6 h-6 text-solo-highlight" />
                  ) : (
                    <Swords className="w-6 h-6 text-solo-accent" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-solo-text">{exercise.name}</h3>
                  <p className={`text-sm ${getDifficultyColor(exercise.difficulty)}`}>
                    {exercise.difficulty}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-solo-accent font-bold">{exercise.xp} XP</p>
                  <p className="text-sm text-solo-text/70">
                    {exercise.completed ? "Completed" : "In Progress"}
                  </p>
                </div>
                <motion.div
                  animate={exercise.completed ? { rotate: 360 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {exercise.completed && (
                    <div className="p-2 rounded-full bg-solo-highlight/20">
                      <Trophy className="w-5 h-5 text-solo-highlight" />
                    </div>
                  )}
                </motion.div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};