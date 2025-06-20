import { createRoot } from 'react-dom/client'
import { PrimeReactProvider, addLocale, locale } from 'primereact/api';
import './index.css'
import { classNames } from 'primereact/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStateProvider } from './global/GlobalContext.tsx';
import Routing from './route/Routing.tsx';
import { ThemeProvider } from './global/Theme-context.tsx';
import { AuthProvider } from './global/AuthContext.tsx';

addLocale('pt-BR', {
  firstDayOfWeek: 0,
  dayNames: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-fFira', 'Sábado'],
  dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
  dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  today: 'Hoje',
  now: 'Hoje',
  clear: 'Limpar',
});

locale('pt-BR');

const TRANSITIONS = {
  overlay: {
      enterFromClass: 'opacity-0 scale-75',
      enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
      leaveActiveClass: 'transition-opacity duration-150 ease-linear',
      leaveToClass: 'opacity-0'
  },
  toggleable: {
      enterFromClass: 'max-h-0',
      enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
      enterToClass: 'max-h-40	',
      leaveFromClass: 'max-h-40',
      leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
      leaveToClass: 'max-h-0'
  },
   overlay2: {
        timeout: 150,
        classNames: {
            enter: 'opacity-0 scale-75',
            enterActive: 'opacity-100 !scale-100 transition-transform transition-opacity duration-150 ease-in',
            exit: 'opacity-100',
            exitActive: '!opacity-0 transition-opacity duration-150 ease-linear'
        }
    }
};

const MyDesignSystem: any = {

  inputtext: {
      root: ({ props, context }:{props: any, context: any}) => ({
          className: classNames(
              'm-0',
              'font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border  transition-colors duration-200 appearance-none rounded-lg',
              {
                  'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                  'opacity-60 select-none pointer-events-none cursor-default': context.disabled
              },
              {
                  'text-lg px-4 py-4': props.size == 'large',
                  'text-xs px-2 py-2': props.size == 'small',
                  'p-3 text-base': props.size == null
              }
          )
      })
  },
  panel: {
      header: ({ props }:{props: any}) => ({
          className: classNames(
              'flex items-center justify-between', // flex and alignments
              'border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg', // borders and colors
              'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80', // Dark mode
              { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
          )
      }),
      title: () => ({ className: 'leading-none font-bold' }),
      toggler: {
          className: classNames(
              'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
              'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
              'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
              'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
          )
      },
      togglerIcon: 'inline-block',
      content: {
          className: classNames(
              'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg',
              'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
          )
      },
      transition: TRANSITIONS.toggleable
  },
  image: {
      root: 'relative inline-block',
      button: {
          className: classNames(
              'absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300',
              'bg-transparent text-gray-100',
              'hover:opacity-100 hover:cursor-pointer hover:bg-black hover:bg-opacity-50' //Hover
          )
      },
      mask: {
          className: classNames('fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90')
      },
      toolbar: {
          className: classNames('absolute top-0 right-0 z-10 flex', 'p-4')
      },
      rotaterightbutton: {
          className: classNames(
              'flex justify-center items-center',
              'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
              'hover:text-white hover:bg-white/10',
              'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
          )
      },
      rotaterighticon: 'w-6 h-6',
      rotateleftbutton: {
          className: classNames(
              'flex justify-center items-center',
              'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
              'hover:text-white hover:bg-white/10',
              'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
          )
      },
      rotatelefticon: 'w-6 h-6',
      zoomoutbutton: {
          className: classNames(
              'flex justify-center items-center',
              'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
              'hover:text-white hover:bg-white/10',
              'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
          )
      },
      zoomouticon: 'w-6 h-6',
      zoominbutton: {
          className: classNames(
              'flex justify-center items-center',
              'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
              'hover:text-white hover:bg-white/10',
              'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
          )
      },
      zoominicon: 'w-6 h-6',
      closebutton: {
          className: classNames(
              'flex justify-center items-center',
              'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
              'hover:text-white hover:bg-white/10',
              'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
          )
      },
      closeicon: 'w-6 h-6',
      transition: {
          enterFromClass: 'opacity-0 scale-75',
          enterActiveClass: 'transition-all duration-150 ease-in-out',
          leaveActiveClass: 'transition-all duration-150 ease-in',
          leaveToClass: 'opacity-0 scale-75'
      }
  },
  carousel: {
    root: 'flex flex-col',
    content: 'flex flex-col overflow-auto',
    container: ({ props }:{props: any}) => ({
        className: classNames('flex', {
            'flex-row': props.orientation !== 'vertical',
            'flex-col': props.orientation == 'vertical'
        })
    }),
    previousbutton: {
        className: classNames('flex justify-center items-center self-center overflow-hidden relative shrink-0 grow-0', 'w-8 h-8 text-gray-600 cursor-pointer border-0 rounded-full transition duration-200 ease-in-out mx-2')
    },
    itemscontent: 'overflow-hidden w-full ',
    itemscontainer: ({ props }:{props: any}) => ({
        className: classNames('flex ', {
            'flex-row': props.orientation !== 'vertical',
            'flex-col h-full': props.orientation == 'vertical'
        })
    }),
    item: ({ props }:{props: any}) => ({
        className: classNames('flex shrink-0 grow', 
            {
            'w-1/3': props.orientation !== 'vertical',
            'w-full': props.orientation == 'vertical'
        }
    )
    }),
    indicators: {
        className: classNames('flex flex-row justify-center flex-wrap')
    },
    indicator: 'mr-2 mb-2',
    indicatorbutton: ({ context }:{context: any}) => ({
        className: classNames('w-8 h-2 transition duration-200 rounded-0', 'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]', {
            'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600': !context.active,
            'bg-blue-500 hover:bg-blue-600': context.active
        })
    })
  },
  dialog: {
      root: ({ state }:{state: any}) => ({
          className: classNames('rounded-lg shadow-lg border-0', 'max-h-[90%] transform scale-100', 'm-0 w-[50vw]', 'dark:border dark:border-blue-900/40', {
              'transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': state.maximized
          })
      }),
      header: {
          className: classNames('flex items-center justify-between shrink-0', 'bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6', 'dark:bg-gray-900  dark:text-white/80')
      },
      headerTitle: 'font-bold text-lg',
      headerIcons: 'flex items-center',
      closeButton: {
          className: classNames(
              'flex items-center justify-center overflow-hidden relative',
              'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition-all duration-300 ease-in-out mr-2 last:mr-0',
              'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
              'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
              'dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
          )
      },
      closeButtonIcon: 'w-4 h-4 inline-block',
      content: ({ state }:{state: any}) => ({
          className: classNames('overflow-y-auto', 'bg-white text-gray-700 px-6 pb-8 pt-0', 'rounded-bl-lg rounded-br-lg', 'dark:bg-gray-900  dark:text-white/80 ', {
              grow: state.maximized
          })
      }),
      footer: {
          className: classNames('shrink-0 ', 'border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-lg', 'dark:bg-gray-900  dark:text-white/80')
      },
      mask: ({ state }:{state: any}) => ({
          className: classNames('transition-all duration-300 ease-in-out', { 'bg-black/60': state.containerVisible })
      }),
      transition: ({ props }:{props: any}) => {
          return props.position === 'top'
              ? {
                    enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
                    enterActiveClass: 'transition-all duration-200 ease-out',
                    leaveActiveClass: 'transition-all duration-200 ease-out',
                    leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0'
                }
              : props.position === 'bottom'
              ? {
                    enterFromClass: 'opacity-0 scale-75 translate-y-full',
                    enterActiveClass: 'transition-all duration-200 ease-out',
                    leaveActiveClass: 'transition-all duration-200 ease-out',
                    leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0'
                }
              : props.position === 'left' || props.position === 'top-left' || props.position === 'bottom-left'
              ? {
                    enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
                    enterActiveClass: 'transition-all duration-200 ease-out',
                    leaveActiveClass: 'transition-all duration-200 ease-out',
                    leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0'
                }
                : props.position === 'right' || props.position === 'top-right' || props.position === 'bottom-right'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
                  }
              : {
                    enterFromClass: 'opacity-0 scale-75',
                    enterActiveClass: 'transition-all duration-200 ease-out',
                    leaveActiveClass: 'transition-all duration-200 ease-out',
                    leaveToClass: 'opacity-0 scale-75'
                };
      }
  },
  button: {
      root: ({ props, context }: { props: any, context: any }) => ({
          className: classNames(
              'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom',
              'transition duration-200 ease-in-out',
              'focus:outline-none focus:outline-offset-0',
              {
                  'text-white dark:text-gray-900 bg-blue-500 dark:bg-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:border-blue-600 dark:hover:border-blue-500 focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                      !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                  'text-blue-600 bg-transparent border-transparent focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                      props.link
              },
              {
                  'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(176,185,198,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(203,213,225,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                      props.severity === 'secondary',
                  'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(136,234,172,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(134,239,172,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                      props.severity === 'success',
                  'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                      props.severity === 'info',
                  'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(250,207,133,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(252,211,77,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                      props.severity === 'warning',
                  'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(212,170,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(216,180,254,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                      props.severity === 'help',
                  'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(247,162,162,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(252,165,165,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                      props.severity === 'danger'
              },
              {
                  'text-white dark:text-gray-900 bg-gray-500 dark:bg-gray-400 border border-gray-500 dark:border-gray-400 hover:bg-gray-600 dark:hover:bg-gray-500 hover:border-gray-600 dark:hover:border-gray-500':
                      props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                  'text-white dark:text-gray-900 bg-green-500 dark:bg-green-400 border border-green-500 dark:border-green-400 hover:bg-green-600 dark:hover:bg-green-500 hover:border-green-600 dark:hover:border-green-500':
                      props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                  'text-white dark:text-gray-900 dark:bg-blue-400 bg-blue-500 dark:bg-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500':
                      props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                  'text-white dark:text-gray-900 bg-orange-500 dark:bg-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-600 dark:hover:bg-orange-500 hover:border-orange-600 dark:hover:border-orange-500':
                      props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
                  'text-white dark:text-gray-900 bg-purple-500 dark:bg-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 hover:border-purple-600 dark:hover:border-purple-500':
                      props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                  'text-white dark:text-gray-900 bg-red-500 dark:bg-red-400 border border-red-500 dark:border-red-400 hover:bg-red-600 dark:hover:bg-red-500 hover:border-red-600 dark:hover:border-red-500':
                      props.severity === 'danger' && !props.text && !props.outlined && !props.plain,
                  'text-white dark:text-gray-200 bg-red-500 dark:bg-red-700 border border-red-700 dark:border-red-400 hover:bg-red-600 dark:hover:bg-red-500 hover:border-red-600 dark:hover:border-red-500':
                      props.severity === 'contrast' && !props.text && !props.outlined && !props.plain
              },
              { 'shadow-lg': props.raised },
              { 'rounded-md': !props.rounded, 'rounded-full': props.rounded },
              {
                  'bg-transparent border-transparent': props.text && !props.plain,
                  'text-blue-500 dark:text-blue-400 hover:bg-blue-300/20': props.text && (props.severity === null || props.severity === 'info') && !props.plain,
                  'text-gray-500 dark:text-gray-400 hover:bg-gray-300/20': props.text && props.severity === 'secondary' && !props.plain,
                  'text-green-500 dark:text-green-400 hover:bg-green-300/20': props.text && props.severity === 'success' && !props.plain,
                  'text-orange-500 dark:text-orange-400 hover:bg-orange-300/20': props.text && props.severity === 'warning' && !props.plain,
                  'text-purple-500 dark:text-purple-400 hover:bg-purple-300/20': props.text && props.severity === 'help' && !props.plain,
                  'text-red-500 dark:text-red-400 hover:bg-red-300/20': props.text && props.severity === 'danger' && !props.plain
              },
              { 'shadow-lg': props.raised && props.text },
              {
                  'text-gray-500 hover:bg-gray-300/20': props.plain && props.text,
                  'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.plain && props.outlined,
                  'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.plain && !props.outlined && !props.text
              },
              {
                  'bg-transparent border': props.outlined && !props.plain,
                  'text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-300/20': props.outlined && (props.severity === null || props.severity === 'info') && !props.plain,
                  'text-gray-500 dark:text-gray-400 border border-gray-500 dark:border-gray-400 hover:bg-gray-300/20': props.outlined && props.severity === 'secondary' && !props.plain,
                  'text-green-500 dark:text-green-400 border border-green-500 dark:border-green-400 hover:bg-green-300/20': props.outlined && props.severity === 'success' && !props.plain,
                  'text-orange-500 dark:text-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-300/20': props.outlined && props.severity === 'warning' && !props.plain,
                  'text-purple-500 dark:text-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-300/20': props.outlined && props.severity === 'help' && !props.plain,
                  'text-red-500 dark:text-red-400 border border-red-500 dark:border-red-400 hover:bg-red-300/20': props.outlined && props.severity === 'danger' && !props.plain
              },
              { 'px-4 py-3 text-base': props.size === null, 'text-xs py-2 px-3': props.size === 'small', 'text-xl py-3 px-4': props.size === 'large' },
              { 'flex-column': props.iconPos == 'top' || props.iconPos == 'bottom' },
              { 'opacity-60 pointer-events-none cursor-default': context.disabled }
          )
      }),
      label: ({ props }: { props: any }) => ({
          className: classNames(
              'flex-1',
              'duration-200',
              'font-bold',
              {
                  'hover:underline': props.link
              },
              { 'invisible w-0': props.label == null }
          )
      }),
      icon: ({ props }: { props: any }) => ({
          className: classNames('mx-0', {
              'mr-2': props.iconPos == 'left' && props.label != null,
              'ml-2 order-1': props.iconPos == 'right' && props.label != null,
              'mb-2': props.iconPos == 'top' && props.label != null,
              'mt-2 order-2': props.iconPos == 'bottom' && props.label != null
          })
      }),
      loadingIcon: ({ props }: { props: any }) => ({
          className: classNames('mx-0', {
              'mr-2': props.loading && props.iconPos == 'left' && props.label != null,
              'ml-2 order-1': props.loading && props.iconPos == 'right' && props.label != null,
              'mb-2': props.loading && props.iconPos == 'top' && props.label != null,
              'mt-2 order-2': props.loading && props.iconPos == 'bottom' && props.label != null
          })
      }),
      badge: ({ props }: { props: any }) => ({
          className: classNames({ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge })
      })
  },
  dropdown: {
      root: ({ props }:{ props: any }) => ({
          className: classNames(
              'cursor-pointer inline-flex relative select-none',
              'bg-neutral-800 border  transition-colors duration-200 ease-in-out rounded-md',
              'dark:bg-gray-900',
              'w-full md:w-56',
              'hover:border-blue-500 focus:outline-none focus:outline-offset-0  focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
              { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
          )
      }),
      input: ({ props }:{ props: any }) => ({
          className: classNames(
              'cursor-pointer block flex flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative',
              'bg-transparent border-0 text-gray-800',
              'dark:text-white/80',
              'p-3 transition duration-200 bg-transparent rounded appearance-none font-sans text-base',
              'focus:outline-none focus:shadow-none ',
              { 'pr-7': props.showClear }
          )
      }),
      trigger: {
          className: classNames('flex items-center justify-center shrink-0', 'bg-transparent text-gray-500 w-12 rounded-tr-lg rounded-br-lg')
      },
      wrapper: {
          className: classNames('max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80')
      },
      list: 'py-3 list-none m-0 dark:bg-neutral-900 border border-neutral-800 rounded-lg',
      item: ({ context }: { context: any }) => ({
          className: classNames(
              'cursor-pointer flex items-center gap-3 font-normal overflow-hidden relative whitespace-nowrap ',
              'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
              'dark:text-white/80 dark:hover:bg-neutral-800',
              '!dark:hover:text-neutral-700 hover:bg-gray-200 ',
              {
                  'text-neutral-700 ': !context.focused && !context.selected,
                  'bg-gray-300 text-neutral-700 dark:text-white/80 dark:bg-neutral-800/70': context.focused && !context.selected,
                  'bg-neutral-300 text-blue-700 dark:bg-neutral-700 dark:text-white/80': context.focused && context.selected,
                  'bg-neutral-50 text-blue-700 dark:bg-neutral-700 dark:text-white/80': !context.focused && context.selected,
                  'opacity-60 select-none pointer-events-none cursor-default': context.disabled
              }
          )
      }),
      itemgroup: {
          className: classNames('m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-neutral-800 dark:hover:bg-neutral-800', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto')
      },
      header: {
          className: classNames('p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg', 'dark:bg-gray-800 dark:text-white/80 dark:border-blue-900/40')
      },
      filtercontainer: 'relative dark:bg-neutral-800',
      filterinput: {
          className: classNames(
              'pr-7 -mr-7',
              'w-full',
              'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
              'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80',
              'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
          )
      },
      filtericon: '-mt-2 absolute top-1/2',
      clearicon: 'text-gray-500 right-12 -mt-2 absolute top-1/2',
      transition: TRANSITIONS.overlay
  },
  inputtextarea: {
      root: ({ context }:{ context: any }) => ({
          className: classNames(
              'm-0',
              'font-sans text-base text-gray-600 dark:text-white/80 bg-white dark:bg-neutral-800 p-3 transition-colors duration-200 appearance-none rounded-lg',
              'hover:border-neutral-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
              { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled }
          )
      })
  },
  tag: {
      root: ({ props }: { props: any }) => ({
          className: classNames(
              'inline-flex items-center justify-center',
              'bg-blue-500 text-white text-xs font-semibold px-2 py-1 ',
              {
                  'bg-gray-500 ': props.severity == 'secondary',
                  'bg-green-500 ': props.severity == 'success',
                  'bg-blue-500 ': props.severity == 'info',
                  'bg-orange-500 ': props.severity == 'warning',
                  'bg-purple-500 ': props.severity == 'help',
                  'bg-red-500 ': props.severity == 'danger',
                  'dark:bg-black bg-white ': props.severity == 'contrast',
              },
              {
                  'rounded-md': !props.rounded,
                  'rounded-full': props.rounded
              }
          )
      }),
      value: 'leading-6',
      icon: 'mr-1 text-sm'
  },
  message: {
      root: ({ props }: { props: any }) => ({
          className: classNames('inline-flex items-center justify-center align-top', 'p-1 m-0 rounded-md', {
              'bg-blue-100 border-0 text-blue-700': props.severity == 'info',
              'bg-green-100 border-0 text-green-700': props.severity == 'success',
              'bg-orange-100 border-0 text-orange-700': props.severity == 'warn',
              'border-0 text-red-700 dark:text-red-500/70': props.severity == 'error'
          })
      }),
      icon: 'text-base mr-2'
  },
  global: {
      css: `
          .progress-spinner-circle {
              stroke-dasharray: 89, 200;
              stroke-dashoffset: 0;
              animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
              stroke-linecap: round;
          }

          @keyframes p-progress-spinner-dash{
              0% {
                  stroke-dasharray: 1, 200;
                  stroke-dashoffset: 0;
              }
              
              50% {
                  stroke-dasharray: 89, 200;
                  stroke-dashoffset: -35px;
              }
              100% {
                  stroke-dasharray: 89, 200;
                  stroke-dashoffset: -124px;
              }
          }
          @keyframes p-progress-spinner-color {
              100%, 0% {
                  stroke: #ff5757;
              }
              40% {
                  stroke: #696cff;
              }
              66% {
                  stroke: #1ea97c;
              }
              80%, 90% {
                  stroke: #cc8925;
              }
          }
      `
  },        
  progressspinner: {
      root: {
          className: 'relative mx-auto w-28 h-28 inline-block before:block before:pt-full'
      },
      spinner: 'absolute top-0 bottom-0 left-0 right-0 m-auto w-full h-full transform origin-center animate-spin',
      circle: 'text-red-500 progress-spinner-circle'
  },
  card: {
    root: {
        className: classNames(
            'bg-white text-gray-700 shadow-md rounded-md', // Background, text color, box shadow, and border radius.
            'dark:bg-gray-900 dark:text-white ' //dark
        )
    },
    body: 'p-5', // Padding.
    title: 'text-2xl font-bold mb-2', // Font size, font weight, and margin bottom.
    subtitle: {
        className: classNames(
            'font-normal mb-2 text-gray-600', // Font weight, margin bottom, and text color.
            'dark:text-white/60 ' //dark
        )
    },
    content: 'py-5', // Vertical padding.
    footer: 'pt-5' // Top padding.
  },
  badge: {
    root: ({ props }:{props: any}) => ({
        className: classNames(
            'rounded-full p-0 text-center inline-block',
            'bg-blue-500 text-white font-bold',
            {
                'bg-gray-500 ': props.severity == 'secondary',
                'bg-green-500 ': props.severity == 'success',
                'bg-blue-500 ': props.severity == 'info',
                'bg-orange-500 ': props.severity == 'warning',
                'bg-purple-500 ': props.severity == 'help',
                'bg-red-500 ': props.severity == 'danger'
            },
            {
                'text-xs min-w-[1.5rem] h-[1.5rem] leading-[1.5rem]': props.size == null,
                'text-lg min-w-[2.25rem] h-[2.25rem] leading-[2.25rem]': props.size == 'large',
                'text-2xl min-w-[3rem] h-[3rem] leading-[3rem]': props.size == 'xlarge'
            }
        )
    })
  },
  avatar: {
    root: ({ props, state }:{props: any, state: any}) => ({
        className: classNames(
            'flex items-center justify-center',
            'bg-gray-300 dark:bg-gray-800',
            {
                'rounded-lg': props.shape == 'square',
                'rounded-full': props.shape == 'circle'
            },
            {
                'text-base h-8 w-8': props.size == null || props.size == 'normal',
                'w-12 h-12 text-xl': props.size == 'large',
                'w-16 h-16 text-2xl': props.size == 'xlarge'
            },
            {
                '-ml-4 border-2 border-white dark:border-gray-900': state.isNestedInAvatarGroup
            }
        )
    }),
    image: 'h-full w-full'
  },
  avatargroup: {
    root: 'flex items-center'
  },
  calendar: {
        root: ({ props }:{props: any}) => ({
            className: classNames('inline-flex max-w-full relative', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        input: ({ props }:{props: any}) => ({
            root: {
                className: classNames('font-sans text-base text-neutral-600 dark:text-white/80 bg-white dark:bg-neutral-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none', 'hover:border-blue-500', {
                    'rounded-lg': !props.showIcon,
                    'border-r-0 rounded-l-lg': props.showIcon
                })
            }
        }),
        dropdownButton: {
            root: ({ props }:{props: any}) => ({
                className: classNames({ 'rounded-l-none': props.icon })
            })
        },
        panel: ({ props }:{props: any}) => ({
            className: classNames('bg-white dark:bg-neutral-900/50', 'min-w-full', {
                'shadow-md border-0 absolute': !props.inline,
                'inline-block overflow-x-auto border border-amber-300 dark:border-amber-900/50 p-2 rounded-lg': props.inline
            })
        }),
        header: {
            className: classNames('flex items-center justify-between', 'p-2 text-gray-700 dark:text-white bg-white dark:bg-neutral-900/50 font-semibold m-0 border-b border-gray-300 dark:border-amber-900/50 rounded-t-lg')
        },
        previousButton: {
            className: classNames(
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-amber-600 dark:text-amber-400 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-amber-700 dark:hover:text-amber-500 hover:border-transparent hover:bg-amber-200 dark:hover:bg-amber-500/10  '
            )
        },
        title: { className: 'leading-8 mx-auto' },
        monthTitle: {
            className: classNames('text-gray-700 dark:text-white transition duration-200 font-semibold p-2', 'mr-2', 'hover:text-amber-500')
        },
        yearTitle: {
            className: classNames('text-gray-700 dark:text-white transition duration-200 font-semibold p-2', 'hover:text-amber-500')
        },
        nextButton: {
            className: classNames(
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-amber-600 dark:text-amber-400 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-amber-700 dark:hover:text-amber-500 hover:border-transparent hover:bg-amber-200 dark:hover:bg-amber-500/10 '
            )
        },
        table: {
            className: classNames('border-collapse w-full', 'my-2')
        },
        tableHeaderCell: { className: 'p-2' },
        weekday: { className: 'text-neutral-600 dark:text-white/90' },
        day: { className: 'p-2' },
        dayLabel: ({ context }:{context: any}) => ({
            className: classNames(
                'w-10 h-10 rounded-full transition-shadow duration-200 border-transparent border',
                'flex items-center justify-center mx-auto overflow-hidden relative',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'opacity-60 cursor-default': context.disabled,
                    'cursor-pointer': !context.disabled
                },
                {
                    'text-gray-600 dark:text-white dark:hover:text-white font-bold bg-transprent hover:bg-amber-500 dark:hover:bg-amber-500/10': !context.selected && !context.disabled,
                    'text-amber-700 dark:text-neutral-950 font-bold bg-amber-100 dark:bg-amber-500 dark:hover:bg-amber-400': context.selected && !context.disabled
                }
            )
        }),
        monthPicker: { className: 'my-2' },
        month: ({ context }:{context: any}) => ({
            className: classNames(
                'w-1/3 inline-flex items-center justify-center cursor-pointer overflow-hidden relative',
                'p-2 transition-shadow duration-200 rounded-lg',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled, 'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled }
            )
        }),
        yearPicker: {
            className: classNames('my-2')
        },
        year: ({ context }:{context: any}) => ({
            className: classNames(
                'w-1/2 inline-flex items-center justify-center cursor-pointer overflow-hidden relative',
                'p-2 transition-shadow duration-200 rounded-lg',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                    'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled
                }
            )
        }),
        timePicker: {
            className: classNames('flex justify-center items-center', 'border-t-1 border-solid border-gray-300 p-2')
        },
        separatorContainer: { className: 'flex items-center flex-col px-2' },
        separator: { className: 'text-xl' },
        hourPicker: { className: 'flex items-center flex-col px-2' },
        minutePicker: { className: 'flex items-center flex-col px-2' },
        ampmPicker: { className: 'flex items-center flex-col px-2' },
        incrementButton: {
            className: classNames(
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            )
        },
        decrementButton: {
            className: classNames(
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            )
        },
        groupContainer: { className: 'flex' },
        group: {
            className: classNames('flex-1', 'border-l border-gray-300 pr-0.5 pl-0.5 pt-0 pb-0', 'first:pl-0 first:border-l-0')
        },
        transition: TRANSITIONS.overlay2
  },
  datatable: {
    root: ({ props }:{ props: any }) => ({
        className: classNames('relative', {
            'flex flex-col h-full': props.scrollable && props.scrollHeight === 'flex'
        })
    }),
    loadingoverlay: {
        className: classNames(
            'fixed w-full h-full t-0 l-0 bg-gray-100/40',
            'transition duration-200',
            'absolute flex items-center justify-center z-2',
            'dark:bg-gray-950/40' // Dark Mode
        )
    },
    loadingicon: 'w-8 h-8',
    wrapper: ({ props }:{ props: any }) => ({
        className: classNames({
            relative: props.scrollable,
            'flex flex-col grow h-full': props.scrollable && props.scrollHeight === 'flex'
        })
    }),
    header: ({ props }:{ props: any }) => ({
        className: classNames(
            'bg-slate-50 text-slate-700 border-gray-300 font-bold p-4',
            'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', // Dark Mode
            props.showGridlines ? 'border-x border-t border-b-0' : 'border-y border-x-0'
        )
    }),
    table: 'w-full border-spacing-0',
    thead: ({ context }:{ context: any }) => ({
        className: classNames({
            'bg-slate-50 top-0 z-[1]': context.scrollable
        })
    }),
    tbody: ({ props, context }:{ props: any, context: any }) => ({
        className: classNames({
            'sticky z-[1]': props.frozenRow && context.scrollable
        })
    }),
    tfoot: ({ context }:{ context: any }) => ({
        className: classNames({
            'bg-slate-50 bottom-0 z-[1]': context.scrollable
        })
    }),
    footer: {
        className: classNames(
            'bg-slate-50 text-slate-700 border-t-0 border-b border-x-0 border-gray-300 font-bold p-4',
            'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900' // Dark Mode
        )
    },
    column: {
        headercell: ({ context, props }:{ context: any , props: any}) => ({
            className: classNames(
                'text-left border-0 border-b border-solid border-gray-300 dark:border-blue-900/40 font-bold',
                'transition duration-200',
                context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                context.sorted ? 'bg-blue-50 text-blue-700' : 'bg-slate-50 text-slate-700', // Sort
                context.sorted ? 'dark:text-white/80 dark:bg-blue-300' : 'dark:text-white/80 dark:bg-gray-900', // Dark Mode
                {
                    'sticky z-[1]': props.frozen || props.frozen === '', // Frozen Columns
                    'border-x border-y': context?.showGridlines,
                    'overflow-hidden space-nowrap border-y relative bg-clip-padding': context.resizable // Resizable
                }
            )
        }),
        headercontent: 'flex items-center',
        bodycell: ({ props, context }:{ props: any, context: any }) => ({
            className: classNames(
                'text-left border-0 border-b border-solid border-gray-300',
                context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                'dark:text-white/80 dark:border-blue-900/40', // Dark Mode
                {
                    'sticky bg-inherit': props && (props.frozen || props.frozen === ''), // Frozen Columns
                    'border-x border-y': context.showGridlines
                }
            )
        }),
        footercell: ({ context }:{context: any }) => ({
            className: classNames(
                'text-left border-0 border-b border-solid border-gray-300 font-bold',
                'bg-slate-50 text-slate-700',
                'transition duration-200',
                context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                'dark:text-white/80 dark:bg-gray-900 dark:border-blue-900/40', // Dark Mode
                {
                    'border-x border-y': context.showGridlines
                }
            )
        }),
        sorticon: ({ context }:{context: any }) => ({
            className: classNames('ml-2', context.sorted ? 'text-blue-700 dark:text-white/80' : 'text-slate-700 dark:text-white/70')
        }),
        sortbadge: {
            className: classNames(
                'flex items-center justify-center align-middle',
                'rounded-[50%] w-[1.143rem] leading-[1.143rem] ml-2',
                'text-blue-700 bg-blue-50',
                'dark:text-white/80 dark:bg-blue-400' // Dark Mode
            )
        },
        columnfilter: 'inline-flex items-center ml-auto',
        filteroverlay: {
            className: classNames(
                'bg-white text-gray-600 border-0 rounded-md min-w-[12.5rem]',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' //Dark Mode
            )
        },
        filtermatchmodedropdown: {
            root: 'min-[0px]:flex mb-2'
        },
        filterrowitems: 'm-0 p-0 py-3 list-none ',
        filterrowitem: ({ context }:{context: any }) => ({
            className: classNames(
                'm-0 py-3 px-5 bg-transparent',
                'transition duration-200',
                context?.highlighted ? 'text-blue-700 bg-blue-100 dark:text-white/80 dark:bg-blue-300' : 'text-gray-600 bg-transparent dark:text-white/80 dark:bg-transparent'
            )
        }),
        filteroperator: {
            className: classNames(
                'px-5 py-3 border-b border-solid border-gray-300 text-slate-700 bg-slate-50 rounded-t-md',
                'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900' // Dark Mode
            )
        },
        filteroperatordropdown: {
            root: 'min-[0px]:flex'
        },
        filterconstraint: 'p-5 border-b border-solid border-gray-300 dark:border-blue-900/40',
        filteraddrule: 'py-3 px-5',
        filteraddrulebutton: {
            root: 'justify-center w-full min-[0px]:text-sm',
            label: 'flex-auto grow-0',
            icon: 'mr-2'
        },
        filterremovebutton: {
            root: 'ml-2',
            label: 'grow-0'
        },
        filterbuttonbar: 'flex items-center justify-between p-5',
        filterclearbutton: {
            root: 'w-auto min-[0px]:text-sm border-blue-500 text-blue-500 px-4 py-3'
        },
        filterapplybutton: {
            root: 'w-auto min-[0px]:text-sm px-4 py-3'
        },
        filtermenubutton: ({ context }:{context: any }) => ({
            className: classNames(
                'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative ml-2',
                'w-8 h-8 rounded-[50%]',
                'transition duration-200',
                'hover:text-slate-700 hover:bg-gray-300/20', // Hover
                'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                'dark:text-white/70 dark:hover:text-white/80 dark:bg-gray-900', // Dark Mode
                {
                    'bg-blue-50 text-blue-700': context.active
                }
            )
        }),
        headerfilterclearbutton: ({ context }:{context: any }) => ({
            className: classNames('inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative', 'text-left bg-transparent m-0 p-0 border-none select-none ml-2', {
                invisible: !context.hidden
            })
        }),
        columnresizer: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',
        rowreordericon: 'cursor-move',
        roweditorinitbutton: {
            className: classNames(
                'inline-flex items-center justify-center overflow-hidden relative',
                'text-left cursor-pointer select-none',
                'w-8 h-8 border-0 rounded-[50%]',
                'transition duration-200',
                'text-slate-700 border-transparent',
                'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                'dark:text-white/70' // Dark Mode
            )
        },
        roweditorsavebutton: {
            className: classNames(
                'inline-flex items-center justify-center overflow-hidden relative',
                'text-left cursor-pointer select-none',
                'w-8 h-8 border-0 rounded-[50%]',
                'transition duration-200',
                'text-slate-700 border-transparent',
                'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                'dark:text-white/70' // Dark Mode
            )
        },
        roweditorcancelbutton: {
            className: classNames(
                'inline-flex items-center justify-center overflow-hidden relative',
                'text-left cursor-pointer select-none',
                'w-8 h-8 border-0 rounded-[50%]',
                'transition duration-200',
                'text-slate-700 border-transparent',
                'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                'dark:text-white/70' // Dark Mode
            )
        },
        radioButton: {
            className: classNames('relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6')
        },
        radioButtonInput: {
            className: classNames(
                'w-full h-full top-0 left-0 absolute appearance-none select-none',
                'p-0 m-0 opacity-0 z-[1] rounded-[50%] outline-none',
                'cursor-pointer peer'
            )
        },
        radioButtonBox: ({ context }:{context: any }) => ({
            className: classNames(
                'flex items-center justify-center',
                'h-6 w-6 rounded-full border-2 text-gray-700 transition duration-200 ease-in-out',
                context.checked
                    ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400 peer-hover:bg-blue-700 peer-hover:border-blue-700'
                    : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900 peer-hover:border-blue-500',
                {
                    'hover:border-blue-500 focus:shadow-input-focus focus:outline-none focus:outline-offset-0 dark:hover:border-blue-400 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                    'cursor-default opacity-60': context.disabled,
                },
            ),
        }),
        radioButtonIcon: ({ context }:{context: any }) => ({
            className: classNames(
                'transform rounded-full',
                'block h-3 w-3 bg-white transition duration-200 dark:bg-gray-900',
                {
                    'backface-hidden scale-10 invisible': context.checked === false,
                    'visible scale-100 transform': context.checked === true,
                },
            ),
        }),
        headercheckboxwrapper: {
            className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6')
        },
        headercheckbox: ({ context }:{context: any }) => ({
            className: classNames(
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                    'cursor-default opacity-60': context.disabled
                }
            )
        }),
        headercheckboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900',
        checkboxwrapper: {
            className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6')
        },
        checkbox: ({ context }:{context: any }) => ({
            className: classNames(
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                    'cursor-default opacity-60': context.disabled
                }
            )
        }),
        checkboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900',
        transition: TRANSITIONS.overlay2
    },
    bodyrow: ({ context }:{ context: any }) => ({
        className: classNames(
            context.selected ? 'bg-blue-50 text-blue-700 dark:bg-blue-300' : 'bg-white text-gray-600 dark:bg-gray-900',
            context.stripedRows ? (context.index % 2 === 0 ? 'bg-white text-gray-600 dark:bg-gray-900' : 'bg-blue-50/50 text-gray-600 dark:bg-gray-950') : '',
            'transition duration-200',
            'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]', // Focus
            'dark:text-white/80 dark:focus:outline dark:focus:outline-[0.15rem] dark:focus:outline-blue-300 dark:focus:outline-offset-[-0.15rem]', // Dark Mode
            {
                'cursor-pointer': context.selectable,
                'hover:bg-gray-300/20 hover:text-gray-600': context.selectable && !context.selected // Hover
            }
        )
    }),
    rowexpansion: 'bg-white text-gray-600 dark:bg-gray-900 dark:text-white/80',
    rowgroupheader: {
        className: classNames('sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200')
    },
    rowgroupfooter: {
        className: classNames('sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200')
    },
    rowgrouptoggler: {
        className: classNames(
            'text-left m-0 p-0 cursor-pointer select-none',
            'inline-flex items-center justify-center overflow-hidden relative',
            'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-[50%]',
            'transition duration-200',
            'dark:text-white/70' // Dark Mode
        )
    },
    rowgrouptogglericon: 'inline-block w-4 h-4',
    resizehelper: 'absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300'
  },
  multiselect: {
        root: ({ props }:{ props: any }) => ({
            className: classNames('inline-flex cursor-pointer select-none', 'bg-white dark:bg-gray-900 border border-gray-400 dark:border-blue-900/40  transition-colors duration-200 ease-in-out rounded-md', 'w-full md:w-80', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        labelContainer: 'overflow-hidden flex flex-auto cursor-pointer',
        label: ({ props }:{ props: any }) => ({
            className: classNames('block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis', 'text-gray-800 dark:text-white/80', 'p-3 transition duration-200', {
                '!p-3': props.display !== 'chip' && (props.value == null || props.value == undefined),
                '!py-1.5 px-3': props.display === 'chip' && props.value !== null
            })
        }),
        token: {
            className: classNames('py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center')
        },
        removeTokenIcon: 'ml-2',
        trigger: {
            className: classNames('flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 dark:text-white/70 w-12 rounded-tr-lg rounded-br-lg')
        },
        panel: {
            className: classNames('bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg')
        },
        header: {
            className: classNames('p-3 border-b border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 bg-gray-100 dark:bg-gray-800 rounded-t-lg', 'flex items-center justify-between')
        },
        headerCheckboxContainer: {
            className: classNames('inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6')
        },
        headerCheckbox: {
            root: ({ props }:{ props: any }) => ({
                className: classNames(
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 dark:text-white/70 rounded-lg transition-colors duration-200',
                    'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                    {
                        'border-gray-300 dark:border-blue-900/40 bg-white dark:bg-gray-900': !props?.checked,
                        'border-blue-500 bg-blue-500': props?.checked
                    }
                )
            })
        },
        headerCheckboxIcon: 'w-4 h-4 transition-all duration-200 text-white text-base',
        closeButton: {
            className: classNames(
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 dark:text-white/70 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 ',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        closeIcon: 'w-4 h-4 inline-block',
        wrapper: {
            className: classNames('max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80')
        },
        list: 'py-3 list-none m-0',
        item: ({ context }:{ context: any }) => ({
            className: classNames('cursor-pointer font-normal overflow-hidden relative whitespace-nowrap', 'm-0 p-3 border-0  transition-shadow duration-200 rounded-none', {
                'text-gray-700 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': !context.focused && !context.selected,
                'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': context.focused && !context.selected,
                'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.selected,
                'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.selected
            })
        }),
        checkboxContainer: {
            className: classNames('inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6')
        },
        checkbox: ({ context }:{ context: any }) => ({
            className: classNames(
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 dark:text-white/80 rounded-lg transition-colors duration-200',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'border-gray-300 dark:border-blue-900/40  bg-white dark:bg-gray-900': !context?.selected,
                    'border-blue-500 bg-blue-500': context?.selected
                }
            )
        }),
        checkboxIcon: 'w-4 h-4 transition-all duration-200 text-white text-base',
        itemGroup: {
            className: classNames('m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto')
        },
        filterContainer: 'relative',
        filterInput: {
            root: {
                className: classNames(
                    'pr-7 -mr-7',
                    'w-full',
                    'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80',
                    'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
                )
            }
        },
        filterIcon: '-mt-2 absolute top-1/2',
        clearIcon: 'text-gray-500 right-12 -mt-2 absolute top-1/2',
        transition: TRANSITIONS.overlay2
  }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider value={{ locale: 'pt-BR',unstyled: true, pt: MyDesignSystem }} >
    <QueryClientProvider client={ queryClient }>
      <ThemeProvider >
        <AuthProvider>
          <GlobalStateProvider>
            <Routing />
          </GlobalStateProvider>
        </AuthProvider>
      </ThemeProvider >
    </QueryClientProvider>
  </PrimeReactProvider>
)
