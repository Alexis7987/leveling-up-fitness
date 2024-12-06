import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface StatProgressProps {
  currentXP: number;
  requiredXP: number;
}

export const StatProgress = ({ currentXP, requiredXP }: StatProgressProps) => {
  const progress = (currentXP / requiredXP) * 100;

  return (
    <Card className="p-4 bg-solo-dark border-solo-primary">
      <div className="flex justify-between mb-2">
        <span className="text-solo-text">Progress to next level</span>
        <span className="text-solo-accent">
          {currentXP}/{requiredXP} XP
        </span>
      </div>
      <Progress
        value={progress}
        className="h-2 bg-solo-primary"
        indicatorClassName="bg-solo-highlight"
      />
    </Card>
  );
};