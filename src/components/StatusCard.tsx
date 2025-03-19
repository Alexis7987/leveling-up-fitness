
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  return (
    <Card className="w-full p-4 sm:p-6 bg-solo-dark/50 backdrop-blur-lg border-solo-accent/20">
      <div className="flex justify-between items-center mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-solo-text">Status Window</h2>
        <motion.span 
          className="text-solo-accent text-lg sm:text-xl font-bold px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-solo-primary/30 border border-solo-accent/20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Level {level}
        </motion.span>
      </div>
      <div className="space-y-4 sm:space-y-6">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-1 sm:space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="text-solo-text font-medium text-sm sm:text-base">{stat.name}</span>
              <span className="text-solo-accent text-sm sm:text-base">
                {stat.value}/{stat.maxValue}
              </span>
            </div>
            <div className="relative">
              <Progress
                value={(stat.value / stat.maxValue) * 100}
                className="h-1.5 sm:h-2 bg-solo-primary/30"
                indicatorClassName="bg-gradient-to-r from-solo-accent to-solo-highlight"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-solo-accent/10 to-transparent animate-pulse" />
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};
