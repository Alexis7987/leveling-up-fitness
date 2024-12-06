import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Stat {
  name: string;
  value: number;
  maxValue: number;
}

interface StatusCardProps {
  level: number;
  stats: Stat[];
}

export const StatusCard = ({ level, stats }: StatusCardProps) => {
  return (
    <Card className="w-full p-6 bg-solo-dark border-solo-accent">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-solo-text">Status Window</h2>
        <span className="text-solo-accent animate-status-pulse">
          Level {level}
        </span>
      </div>
      <div className="space-y-4">
        {stats.map((stat) => (
          <div key={stat.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-solo-text">{stat.name}</span>
              <span className="text-solo-accent">
                {stat.value}/{stat.maxValue}
              </span>
            </div>
            <Progress
              value={(stat.value / stat.maxValue) * 100}
              className="h-2 bg-solo-primary"
              indicatorClassName="bg-solo-accent"
            />
          </div>
        ))}
      </div>
    </Card>
  );
};