import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface StatProgressProps {
  currentXP: number;
  requiredXP: number;
}

export const StatProgress = ({ currentXP, requiredXP }: StatProgressProps) => {
  const progress = (currentXP / requiredXP) * 100;

  return (
    <motion.div
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-solo-text font-medium">Progress to next level</span>
          <motion.span 
            className="text-solo-accent"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {currentXP}/{requiredXP} XP
          </motion.span>
        </div>
        <div className="relative">
          <Progress
            value={progress}
            className="h-3 bg-solo-primary/30"
            indicatorClassName="bg-gradient-to-r from-solo-accent via-solo-highlight to-solo-accent"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
};