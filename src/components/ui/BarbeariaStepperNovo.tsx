"use client"

import React, { useState, Children, useRef, useLayoutEffect, type HTMLAttributes, type ReactNode } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { ArrowLeft, ArrowRight, Save, Scissors, Check } from "lucide-react"
import { useThemeHelpers } from "../../hooks/useThemeHelpers"
import { useTheme } from "../../global/Theme-context"


// Tipos
export type StepperLabelPosition = "top" | "bottom" | "left" | "right" | "none"
export type StepperVariant = "default" | "numbered" | "icon" | "minimal" | "dots"
export type StepperSize = "sm" | "md" | "lg" | "xl"
export type StepperOrientation = "horizontal" | "vertical"

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  /** Conteúdo dos passos */
  children: ReactNode
  /** Passo inicial (começa em 1) */
  initialStep?: number
  /** Template personalizado (não usado atualmente) */
  template?: string
  /** Callback quando o passo muda */
  onStepChange?: (step: number) => void
  /** Callback quando o último passo é completado */
  onFinalStepCompleted?: () => void
  /** Título do stepper */
  title?: string
  /** Subtítulo do stepper */
  subtitle?: ReactNode
  /** Posição do título/label do stepper */
  labelPosition?: StepperLabelPosition
  /** Variante visual do stepper */
  variant?: StepperVariant
  /** Tamanho do stepper */
  size?: StepperSize
  /** Orientação do stepper */
  orientation?: StepperOrientation
  /** Se deve mostrar o progresso em porcentagem */
  showProgress?: boolean
  /** Se deve mostrar o título dos passos */
  showStepTitles?: boolean
  /** Se deve mostrar o contador de passos (ex: "Passo 1 de 5") */
  showStepCounter?: boolean
  /** Se deve desabilitar os indicadores de passo (não clicáveis) */
  disableStepIndicators?: boolean
  /** Se deve permitir navegação não-linear (pular passos) */
  allowNonLinearNavigation?: boolean
  /** Texto do botão voltar */
  backButtonText?: string
  /** Texto do botão próximo */
  nextButtonText?: string
  /** Texto do botão finalizar */
  completeButtonText?: string
  /** Props para o botão voltar */
  backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  /** Props para o botão próximo */
  nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  /** Props para o botão finalizar */
  completeButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  /** Renderizador customizado para o indicador de passo */
  renderStepIndicator?: (props: {
    step: number
    currentStep: number
    onStepClick: (clicked: number) => void
  }) => ReactNode
  /** Renderizador customizado para o conector entre passos */
  renderStepConnector?: (props: { isComplete: boolean }) => ReactNode
  /** Renderizador customizado para o conteúdo do passo */
  renderStepContent?: (props: { children: ReactNode; step: number; currentStep: number }) => ReactNode
  /** Renderizador customizado para os botões de navegação */
  renderNavigation?: (props: {
    currentStep: number
    totalSteps: number
    handleBack: () => void
    handleNext: () => void
    handleComplete: () => void
    isLastStep: boolean
  }) => ReactNode
  /** Renderizador customizado para o cabeçalho do stepper */
  renderHeader?: (props: { title?: string; subtitle?: string }) => ReactNode
  /** Classe CSS para o container dos indicadores de passo */
  stepCircleContainerClassName?: string
  /** Classe CSS para o container dos passos */
  stepContainerClassName?: string
  /** Classe CSS para o conteúdo do passo */
  contentClassName?: string
  /** Classe CSS para o rodapé com os botões */
  footerClassName?: string
}

interface BarbeariaStepIndicatorProps {
  step: number
  currentStep: number
  disableStepIndicators: boolean
  allowNonLinearNavigation: boolean
  variant: StepperVariant
  size: StepperSize
  icon?: ReactNode
  onClickStep: (clicked: number) => void
}

function BarbeariaStepIndicator({
  step,
  currentStep,
  disableStepIndicators,
  allowNonLinearNavigation,
  variant,
  size,
  icon,
  onClickStep,
}: BarbeariaStepIndicatorProps) {
  const { getColor } = useThemeHelpers();

  const sizeConfig = {
    sm: {
      indicatorSize: "32px",
      fontSize: "12px",
      iconSize: "14px",
    },
    md: {
      indicatorSize: "40px",
      fontSize: "14px",
      iconSize: "16px",
    },
    lg: {
      indicatorSize: "48px",
      fontSize: "16px",
      iconSize: "20px",
    },
    xl: {
      indicatorSize: "56px",
      fontSize: "18px",
      iconSize: "24px",
    },
  }

  const isCurrentStep = step === currentStep
  const isCompletedStep = step < currentStep

  let backgroundColor = getColor("background", "#fff")
  let color = getColor("textSecondary", "#6b7280")
  let borderColor = getColor("border", "#e5e7eb")

  if (isCurrentStep) {
    backgroundColor = getColor("primary", "#3b82f6")
    color = getColor("buttonText", "#ffffff")
    borderColor = getColor("primary", "#3b82f6")
  } else if (isCompletedStep) {
    backgroundColor = getColor("success", "#10b981")
    color = getColor("buttonText", "#ffffff")
    borderColor = getColor("success", "#10b981")
  }

  const handleClick = () => {
    if (disableStepIndicators) return
    if (!allowNonLinearNavigation && step > currentStep) return
    onClickStep(step)
  }

  const renderContent = () => {
    if (variant === "icon" && icon) {
      return icon
    }

    if (variant === "numbered") {
      return step
    }

    if (isCompletedStep) {
      return <Check size={Number.parseInt(sizeConfig[size].iconSize)} />
    }

    return null
  }

  return (
    <motion.button
      onClick={handleClick}
      disabled={disableStepIndicators}
      style={{
        width: sizeConfig[size].indicatorSize,
        height: sizeConfig[size].indicatorSize,
        borderRadius: "50%",
        backgroundColor: backgroundColor,
        color: color,
        border: `2px solid ${borderColor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: sizeConfig[size].fontSize,
        fontWeight: "600",
        cursor: disableStepIndicators ? "default" : "pointer",
      }}
      whileHover={{ scale: disableStepIndicators ? 1 : 1.1 }}
      whileTap={{ scale: disableStepIndicators ? 1 : 0.9 }}
    >
      {renderContent()}
    </motion.button>
  )
}

interface BarbeariaStepConnectorProps {
  isComplete: boolean
  orientation: StepperOrientation
  size: StepperSize
}

function BarbeariaStepConnector({ isComplete, orientation, size }: BarbeariaStepConnectorProps) {
  const { getColor } = useThemeHelpers()

  const sizeConfig = {
    sm: {
      connectorHeight: "2px",
    },
    md: {
      connectorHeight: "3px",
    },
    lg: {
      connectorHeight: "4px",
    },
    xl: {
      connectorHeight: "5px",
    },
  }

  const backgroundColor = isComplete ? getColor("success", "#10b981") : getColor("border", "#e5e7eb")

  return (
    <div
      style={{
        height: orientation === "vertical" ? "1rem" : sizeConfig[size].connectorHeight,
        width: orientation === "vertical" ? sizeConfig[size].connectorHeight : "1rem",
        backgroundColor: backgroundColor,
        transition: "background-color 0.3s ease",
      }}
    />
  )
}

export default function BarbeariaStepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  title,
  subtitle,
  labelPosition = "top",
  variant = "default",
  size = "md",
  orientation = "horizontal",
  showProgress = false,
  showStepTitles = false,
  showStepCounter = false,
  disableStepIndicators = false,
  allowNonLinearNavigation = true,
  backButtonText = "Voltar",
  nextButtonText = "Próximo",
  completeButtonText = "Finalizar",
  backButtonProps = {},
  nextButtonProps = {},
  completeButtonProps = {},
  renderStepIndicator,
  renderStepConnector,
  renderStepContent,
  renderNavigation,
  renderHeader,
  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  footerClassName = "",
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
  const { getColor, getShadow, getBorderRadius, getTransition } = useThemeHelpers()

  // Configurações de tamanho
  const sizeConfig = {
    sm: {
      indicatorSize: "32px",
      fontSize: "12px",
      iconSize: "14px",
      connectorHeight: "2px",
      padding: "16px",
      gap: "8px",
    },
    md: {
      indicatorSize: "40px",
      fontSize: "14px",
      iconSize: "16px",
      connectorHeight: "3px",
      padding: "24px",
      gap: "12px",
    },
    lg: {
      indicatorSize: "48px",
      fontSize: "16px",
      iconSize: "20px",
      connectorHeight: "4px",
      padding: "32px",
      gap: "16px",
    },
    xl: {
      indicatorSize: "56px",
      fontSize: "18px",
      iconSize: "24px",
      connectorHeight: "5px",
      padding: "40px",
      gap: "20px",
    },
  }

  // Atualizar o passo atual
  const updateStep = (newStep: number) => {
    // Verificar se a navegação não-linear está permitida
    if (!allowNonLinearNavigation && newStep > currentStep + 1) {
      return
    }

    setCurrentStep(newStep)
    if (newStep > totalSteps) {
      onFinalStepCompleted()
    } else {
      onStepChange(newStep)
    }
  }

  // Handlers de navegação
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

  // Calcular o progresso
  const progress = Math.round(((currentStep - 1) / totalSteps) * 100)

  // Obter o título do passo atual
  const getStepTitle = (index: number) => {
    const step = stepsArray[index] as React.ReactElement<any>
    return step?.props?.title || `Passo ${index + 1}`
  }

  // Obter o ícone do passo atual
  const getStepIcon = (index: number) => {
    const step = stepsArray[index] as React.ReactElement<{ icon?: ReactNode }>
    return step?.props?.icon
  }

  // Estilos base do container
  const containerStyles = {
    width: "100%",
    backgroundColor: getColor("cardBackground", "#ffffff"),
    borderColor: getColor("border", "#e5e7eb"),
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: getBorderRadius("large", "1rem"),
    boxShadow: getShadow("md", "none"),
    overflow: "hidden",
    fontFamily: currentTheme.fonts?.body,
  }

  // Renderizar o cabeçalho
  const renderStepperHeader = () => {
    if (renderHeader) {
      return renderHeader({ title })
    }

    if (!title && !subtitle) return null

    return (
      <div
        style={{
          padding: `${sizeConfig[size].padding} ${sizeConfig[size].padding} 0`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title && (
          <h2
            style={{
              fontSize: size === "sm" ? "1.25rem" : size === "lg" ? "2rem" : size === "xl" ? "2.25rem" : "1.5rem",
              fontWeight: "700",
              color: getColor("text", "#1f2937"),
              fontFamily: currentTheme.fonts?.heading,
              margin: 0,
              marginBottom: "0.5rem",
              textAlign: "center",
            }}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "48px",
                backgroundColor: getColor("primary", "#3b82f6"),
              }}
            />
            <div
              style={{
                margin: "0 0.5rem",
                display: "flex",
                alignItems: "center",
                color: getColor("primary", "#3b82f6"),
              }}
            >
              {typeof subtitle === "string" ? <Scissors size={16} /> : subtitle}
            </div>
            <div
              style={{
                height: "1px",
                width: "48px",
                backgroundColor: getColor("primary", "#3b82f6"),
              }}
            />
          </div>
        )}

        {showProgress && (
          <div
            style={{
              width: "100%",
              maxWidth: "200px",
              marginTop: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "6px",
                backgroundColor: getColor("border", "#e5e7eb"),
                borderRadius: "9999px",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  height: "100%",
                  backgroundColor: getColor("primary", "#3b82f6"),
                  borderRadius: "9999px",
                }}
                initial={{ width: `${((initialStep - 1) / totalSteps) * 100}%` }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.75rem",
                color: getColor("textSecondary", "#6b7280"),
                marginTop: "0.25rem",
              }}
            >
              <span>0%</span>
              <span>{progress}%</span>
              <span>100%</span>
            </div>
          </div>
        )}

        {showStepCounter && (
          <div
            style={{
              fontSize: "0.875rem",
              color: getColor("textSecondary", "#6b7280"),
              marginBottom: "1rem",
            }}
          >
            Passo {currentStep} de {totalSteps}
          </div>
        )}
      </div>
    )
  }

  // Renderizar os indicadores de passo
  const renderStepIndicators = () => {
    // Determinar a direção do flex baseado na orientação
    const flexDirection = orientation === "vertical" ? "column" : "row"

    return (
      <div
        className={stepContainerClassName}
        style={{
          display: "flex",
          flexDirection: flexDirection as "row" | "column",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: sizeConfig[size].padding,
          gap: sizeConfig[size].gap,
        }}
      >
        {/* Renderizar os indicadores e conectores */}
        {stepsArray.map((_, index) => {
          const stepNumber = index + 1
          const isNotLastStep = index < totalSteps - 1
          const stepTitle = getStepTitle(index)
          const stepIcon = getStepIcon(index)

          // Determinar onde renderizar o título do passo
          const renderStepLabel = () => {
            if (!showStepTitles) return null

            return (
              <div
                style={{
                  fontSize: sizeConfig[size].fontSize,
                  color:
                    currentStep === stepNumber
                      ? getColor("primary", "#3b82f6")
                      : currentStep > stepNumber
                        ? getColor("success", "#10b981")
                        : getColor("textSecondary", "#6b7280"),
                  fontWeight: currentStep === stepNumber ? "600" : "400",
                  textAlign: "center",
                  margin: labelPosition === "top" || labelPosition === "bottom" ? "0.5rem 0" : "0 0.5rem",
                  maxWidth: orientation === "horizontal" ? "120px" : "auto",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {stepTitle}
              </div>
            )
          }

          // Wrapper para o indicador e seu label
          const indicatorWithLabel = (
            <div
              style={{
                display: "flex",
                flexDirection:
                  labelPosition === "top"
                    ? "column-reverse"
                    : labelPosition === "bottom"
                      ? "column"
                      : labelPosition === "left"
                        ? "row-reverse"
                        : "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              {labelPosition !== "none" && renderStepLabel()}

              {/* Indicador de passo */}
              {renderStepIndicator ? (
                renderStepIndicator({
                  step: stepNumber,
                  currentStep,
                  onStepClick: (clicked) => {
                    if (disableStepIndicators) return
                    if (!allowNonLinearNavigation && clicked > currentStep) return
                    setDirection(clicked > currentStep ? 1 : -1)
                    updateStep(clicked)
                  },
                })
              ) : (
                <BarbeariaStepIndicator
                  step={stepNumber}
                  currentStep={currentStep}
                  disableStepIndicators={disableStepIndicators}
                  allowNonLinearNavigation={allowNonLinearNavigation}
                  variant={variant}
                  size={size}
                  icon={stepIcon}
                  onClickStep={(clicked) => {
                    setDirection(clicked > currentStep ? 1 : -1)
                    updateStep(clicked)
                  }}
                />
              )}
            </div>
          )

          return (
            <React.Fragment key={stepNumber}>
              {indicatorWithLabel}

              {/* Conector entre passos */}
              {isNotLastStep &&
                (renderStepConnector ? (
                  renderStepConnector({ isComplete: currentStep > stepNumber })
                ) : (
                  <BarbeariaStepConnector isComplete={currentStep > stepNumber} orientation={orientation} size={size} />
                ))}
            </React.Fragment>
          )
        })}
      </div>
    )
  }

  // Renderizar o conteúdo do passo atual
  const renderCurrentStepContent = () => {
    if (renderStepContent) {
      return renderStepContent({
        children: stepsArray[currentStep - 1],
        step: currentStep,
        currentStep,
      })
    }

    return (
      <StepContentWrapper
        isCompleted={isCompleted}
        currentStep={currentStep}
        direction={direction}
        className={contentClassName}
      >
        {stepsArray[currentStep - 1]}
      </StepContentWrapper>
    )
  }

  // Renderizar os botões de navegação
  const renderNavigationButtons = () => {
    if (renderNavigation) {
      return renderNavigation({
        currentStep,
        totalSteps,
        handleBack,
        handleNext,
        handleComplete,
        isLastStep,
      })
    }

    if (isCompleted) return null

    return (
      <div
        className={footerClassName}
        style={{
          display: "flex",
          justifyContent: currentStep === 1 ? "flex-end" : "space-between",
          padding: sizeConfig[size].padding,
          paddingTop: 0,
        }}
      >
        {currentStep !== 1 && (
          <motion.button
            onClick={handleBack}
            style={{
              backgroundColor: "transparent",
              color: getColor("primary", "#3b82f6"),
              border: "none",
              borderRadius: getBorderRadius("medium", "0.5rem"),
              padding: "0.625rem 1rem",
              fontSize: sizeConfig[size].fontSize,
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: getTransition("normal", "300ms ease"),
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            // {...backButtonProps}
          >
            <ArrowLeft size={Number.parseInt(sizeConfig[size].iconSize)} style={{ marginRight: "0.5rem" }} />
            {backButtonText}
          </motion.button>
        )}

        <motion.button
          onClick={isLastStep ? handleComplete : handleNext}
          style={{
            backgroundColor: isLastStep ? getColor("success", "#10b981") : getColor("primary", "#3b82f6"),
            color: getColor("buttonText", "#ffffff"),
            border: "none",
            borderRadius: getBorderRadius("medium", "0.5rem"),
            padding: "0.625rem 1rem",
            fontSize: sizeConfig[size].fontSize,
            fontWeight: "600",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: getTransition("normal", "300ms ease"),
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          // {...(isLastStep ? completeButtonProps : nextButtonProps)}
        >
          {isLastStep ? (
            <>
              <Save size={Number.parseInt(sizeConfig[size].iconSize)} style={{ marginRight: "0.5rem" }} />
              {completeButtonText}
            </>
          ) : (
            <>
              {nextButtonText}
              <ArrowRight size={Number.parseInt(sizeConfig[size].iconSize)} style={{ marginLeft: "0.5rem" }} />
            </>
          )}
        </motion.button>
      </div>
    )
  }

  return (
    <div
      className={`barberia-stepper ${orientation === "vertical" ? "vertical" : "horizontal"}`}
      style={containerStyles}
      {...rest}
    >
      {/* Cabeçalho do stepper */}
      {renderStepperHeader()}

      {/* Indicadores de passo */}
      {!disableStepIndicators && renderStepIndicators()}

      {/* Conteúdo do passo atual */}
      {renderCurrentStepContent()}

      {/* Botões de navegação */}
      {renderNavigationButtons()}
    </div>
  )
}

// Componente para animar a transição entre passos
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

// Componente para animar a transição de slide
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

// Variantes de animação para os passos
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

// Componente de passo individual
interface StepProps {
  children: ReactNode
  title?: string
  icon?: ReactNode
  className?: string
}

export function BarbeariaStep({ children, className = "" }: StepProps) {
  return (
    <div className={`barberia-step ${className}`} style={{ padding: "1rem 1.5rem" }}>
      {children}
    </div>
  )
}
