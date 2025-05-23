"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useTheme } from "../../contexts/Theme-context"

interface StepIndicatorProps {
  step: number
  currentStep: number
  onClickStep: (clicked: number) => void
  disableStepIndicators?: boolean
  template?: string
}

export function BarbeariaStepIndicator({
  step,
  currentStep,
  onClickStep,
  disableStepIndicators = false,
  // template,
}: StepIndicatorProps) {
  const status = currentStep === step ? "active" : currentStep < step ? "inactive" : "complete"
  const { currentTheme } = useTheme()

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) {
      onClickStep(step)
    }
  }

  return (
    <motion.div
      onClick={handleClick}
      className={`relative outline-none focus:outline-none ${
        disableStepIndicators ? "cursor-default" : "cursor-pointer"
      }`}
      animate={status}
      initial={false}
    >
      <motion.div
        variants={{
          inactive: {
            scale: 1,
            backgroundColor: currentTheme.isDark ? "#262626" : "#f5f5f5", // Adaptado para tema claro/escuro
            borderColor: currentTheme.isDark ? "#404040" : "#d4d4d4",
            color: currentTheme.isDark ? "#737373" : "#737373",
          },
          active: {
            scale: 1.1,
            backgroundColor: currentTheme.colors.primary,
            borderColor: currentTheme.colors.primary,
            color: "#FFFFFF",
          },
          complete: {
            scale: 1,
            backgroundColor: "#22c55e", // Verde de sucesso
            borderColor: "#22c55e",
            color: "#FFFFFF",
          },
        }}
        transition={{ duration: 0.3 }}
        className="flex h-10 w-10 items-center justify-center rounded-full font-semibold border-2"
      >
        {status === "complete" ? <Check className="h-5 w-5 text-white" /> : <span className="text-sm">{step}</span>}
      </motion.div>
    </motion.div>
  )
}

interface StepConnectorProps {
  isComplete: boolean
}

export function BarbeariaStepConnector({ isComplete }: StepConnectorProps) {
  const { currentTheme } = useTheme()

  return (
    <div
      className="relative mx-2 h-0.5 flex-1 overflow-hidden rounded"
      style={{ backgroundColor: currentTheme.isDark ? "#404040" : "#d4d4d4" }}
    >
      <motion.div
        className="absolute left-0 top-0 h-full"
        style={{ backgroundColor: currentTheme.colors.primary }}
        initial={{ width: 0 }}
        animate={{ width: isComplete ? "100%" : 0 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  )
}
