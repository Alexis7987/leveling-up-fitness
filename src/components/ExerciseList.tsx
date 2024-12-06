import { Card } from "@/components/ui/card";
import { Dumbbell, Trophy } from "lucide-react";

interface Exercise {
  name: string;
  difficulty: string;
  xp: number;
  completed: boolean;
}

interface ExerciseListProps {
  exercises: Exercise[];
}

export const ExerciseList = ({ exercises }: ExerciseListProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-solo-text">Daily Quests</h2>
      <div className="grid gap-4">
        {exercises.map((exercise) => (
          <Card
            key={exercise.name}
            className={`p-4 flex items-center justify-between bg-solo-dark border-solo-primary hover:border-solo-accent transition-colors cursor-pointer ${
              exercise.completed ? "opacity-50" : ""
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-solo-primary rounded-lg">
                <Dumbbell className="w-5 h-5 text-solo-accent" />
              </div>
              <div>
                <h3 className="font-medium text-solo-text">{exercise.name}</h3>
                <p className="text-sm text-solo-text opacity-70">
                  {exercise.difficulty}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-solo-accent">{exercise.xp} XP</span>
              {exercise.completed && (
                <Trophy className="w-5 h-5 text-solo-highlight" />
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};