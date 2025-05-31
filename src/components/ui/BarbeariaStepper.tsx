"use client"

import React, { useState, Children, useRef, useLayoutEffect, type HTMLAttributes, type ReactNode } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { ArrowLeft, ArrowRight, Save } from "lucide-react"
import { BarbeariaStepConnector, BarbeariaStepIndicator } from "./BarbeariaStepperIndicator"
import { useTheme } from "../../global/Theme-context"
import EleganteSubTitle from "../Fragments/Feminino/EleganteSubTitleIcon"
import BarbeariaButton from "./BarbeariaButton"



interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  initialStep?: number
  template?: string
  onStepChange?: (step: number) => void
  onFinalStepCompleted?: () => void
  stepCircleContainerClassName?: string
  stepContainerClassName?: string
  contentClassName?: string
  footerClassName?: string
  backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  backButtonText?: string
  nextButtonText?: string
  disableStepIndicators?: boolean
  renderStepIndicator?: (props: {
    step: number
    currentStep: number
    onStepClick: (clicked: number) => void
  }) => ReactNode
}

export default function BarbeariaStepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  footerClassName = "",
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = "Voltar",
  nextButtonText = "Próximo",
  disableStepIndicators = false,
  renderStepIndicator,
  template,
  ...rest
}: StepperProps) {
  const [currentStep, setCurrentStep] = useState<number>(initialStep)
  const [direction, setDirection] = useState<number>(0)
  const stepsArray = Children.toArray(children)
  const totalSteps = stepsArray.length
  const isCompleted = currentStep > totalSteps
  const isLastStep = currentStep === totalSteps
  const { currentTheme } = useTheme()

  const updateStep = (newStep: number) => {
    setCurrentStep(newStep)
    if (newStep > totalSteps) {
      onFinalStepCompleted()
    } else {
      onStepChange(newStep)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1)
      updateStep(currentStep - 1)
    }
  }

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1)
      updateStep(currentStep + 1)
    }
  }

  const handleComplete = () => {
    setDirection(1)
    updateStep(totalSteps + 1)
  }

  return (
    <div className="flex items-center justify-center" {...rest}>
      <div
        className={`mx-auto w-full border rounded-xl pt-15 ${stepCircleContainerClassName}`}
        style={{
          // backgroundColor: currentTheme.colors.cardBackground,
          borderColor: currentTheme.colors.secondary,
          borderRadius: currentTheme.borderRadius.large,
        }}
      >
        {/* Título do stepper */}
        {/* <div className="flex flex-col items-center justify-center pt-8 pb-4">
          <h2
            className="text-2xl font-bold mb-2"
            style={{
              color: currentTheme.colors.text,
              fontFamily: currentTheme.fonts.heading,
            }}
          >
            AGENDAMENTO
          </h2>
          <div className="flex items-center mb-4">
            <div className="h-[1px] w-12" style={{ backgroundColor: currentTheme.colors.primary }}></div>
            <Scissors className="mx-2" size={16} style={{ color: currentTheme.colors.primary }} />
            <div className="h-[1px] w-12" style={{ backgroundColor: currentTheme.colors.primary }}></div>
          </div>
        </div> */}

        {/* <EleganteSubTitle title="Agendamento" /> */}

        {/* Indicadores de etapa */}
        <div className={`${stepContainerClassName} flex w-full items-center px-8 pb-8`}>
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1
            const isNotLastStep = index < totalSteps - 1
            return (
              <React.Fragment key={stepNumber}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    onStepClick: (clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1)
                      updateStep(clicked)
                    },
                  })
                ) : (
                  <BarbeariaStepIndicator
                    step={stepNumber}
                    disableStepIndicators={disableStepIndicators}
                    currentStep={currentStep}
                    onClickStep={(clicked: any) => {
                      setDirection(clicked > currentStep ? 1 : -1)
                      updateStep(clicked)
                    }}
                  />
                )}
                {isNotLastStep && <BarbeariaStepConnector isComplete={currentStep > stepNumber} />}
              </React.Fragment>
            )
          })}
        </div>

        {/* Conteúdo da etapa atual */}
        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          className={` ${contentClassName}`}
        >
          {stepsArray[currentStep - 1]}
        </StepContentWrapper>

        {/* Botões de navegação */}
        {!isCompleted && (
          <div className={`  ${footerClassName}`}>
            <div className={`mb-10 px-8 flex ${currentStep !== 1 ? "justify-between" : "justify-end"}`}>
              
              {currentStep !== 1 && (

                <BarbeariaButton variant="ghost" onClick={handleBack} leftIcon={<ArrowLeft size={20} />}>{backButtonText}</BarbeariaButton>
              )}

              <BarbeariaButton variant={isLastStep ? "success" : 'primary'} onClick={isLastStep ? handleComplete : handleNext} rightIcon={isLastStep ?<Save size={20} /> : <ArrowRight size={20} />}>
                {isLastStep ? "Agendar" : nextButtonText}
              </BarbeariaButton>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface StepContentWrapperProps {
  isCompleted: boolean
  currentStep: number
  direction: number
  children: ReactNode
  className?: string
}

function StepContentWrapper({
  isCompleted,
  currentStep,
  direction,
  children,
  className = "",
}: StepContentWrapperProps) {
  const [parentHeight, setParentHeight] = useState<number>(0)

  return (
    <motion.div
      style={{ position: "relative", overflow: "hidden" }}
      animate={{ height: isCompleted ? 0 : parentHeight }}
      transition={{ type: "spring", duration: 0.4 }}
      className={className}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isCompleted && (
          <SlideTransition key={currentStep} direction={direction} onHeightReady={(h) => setParentHeight(h)}>
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

interface SlideTransitionProps {
  children: ReactNode
  direction: number
  onHeightReady: (height: number) => void
}

function SlideTransition({ children, direction, onHeightReady }: SlideTransitionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (containerRef.current) {
      onHeightReady(containerRef.current.offsetHeight)
    }
  }, [children, onHeightReady])

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      style={{ position: "absolute", left: 0, right: 0, top: 0 }}
    >
      {children}
    </motion.div>
  )
}

const stepVariants: Variants = {
  enter: (dir: number) => ({
    x: dir >= 0 ? "-100%" : "100%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir >= 0 ? "50%" : "-50%",
    opacity: 0,
  }),
}

interface StepProps {
  children: ReactNode
  title?: string
  icon?: any
  className?: string
}

export function BarbeariaStep({ children }: StepProps) {
  return <div className="px-4">{children}</div>
}
