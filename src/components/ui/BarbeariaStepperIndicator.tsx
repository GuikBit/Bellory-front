"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { COLORS } from "../../styles/theme-guid"

interface StepIndicatorProps {
  step: number
  currentStep: number
  onClickStep: (clicked: number) => void
  disableStepIndicators?: boolean
}

export function BarbeariaStepIndicator({
  step,
  currentStep,
  onClickStep,
  disableStepIndicators = false,
}: StepIndicatorProps) {
  const status = currentStep === step ? "active" : currentStep < step ? "inactive" : "complete"

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) {
      onClickStep(step)
    }
  }

  return (
    <motion.div
      onClick={handleClick}
      className={`relative cursor-pointer outline-none focus:outline-none ${
        disableStepIndicators ? "cursor-default" : "cursor-pointer"
      }`}
      animate={status}
      initial={false}
    >
      <motion.div
        variants={{
          inactive: {
            scale: 1,
            backgroundColor: "#262626", // neutral-800
            borderColor: "#404040", // neutral-700
            color: "#737373", // neutral-500
          },
          active: {
            scale: 1.1,
            backgroundColor: COLORS.primary.main,
            borderColor: COLORS.primary.main,
            color: "#FFFFFF",
          },
          complete: {
            scale: 1,
            backgroundColor: COLORS.state.success,
            borderColor: COLORS.state.success,
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
  return (
    <div className="relative mx-2 h-0.5 flex-1 overflow-hidden rounded bg-neutral-700">
      <motion.div
        className="absolute left-0 top-0 h-full bg-bigode-amber"
        initial={{ width: 0 }}
        animate={{ width: isComplete ? "100%" : 0 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  )
}
