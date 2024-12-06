import { StatusCard } from "@/components/StatusCard";
import { ExerciseList } from "@/components/ExerciseList";
import { StatProgress } from "@/components/StatProgress";

const Index = () => {
  const playerStats = {
    level: 15,
    stats: [
      { name: "Strength", value: 75, maxValue: 100 },
      { name: "Endurance", value: 60, maxValue: 100 },
      { name: "Agility", value: 45, maxValue: 100 },
    ],
  };

  const dailyExercises = [
    {
      name: "Push-ups",
      difficulty: "B-Rank Quest",
      xp: 100,
      completed: true,
    },
    {
      name: "Pull-ups",
      difficulty: "A-Rank Quest",
      xp: 150,
      completed: false,
    },
    {
      name: "Squats",
      difficulty: "C-Rank Quest",
      xp: 80,
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-solo-dark p-4 md:p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <StatusCard level={playerStats.level} stats={playerStats.stats} />
        <StatProgress currentXP={450} requiredXP={1000} />
        <ExerciseList exercises={dailyExercises} />
      </div>
    </div>
  );
};

export default Index;