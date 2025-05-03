import { createRoot } from 'react-dom/client'
import { PrimeReactProvider, addLocale, locale } from 'primereact/api';
import './index.css'
import { classNames } from 'primereact/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './theme/Theme.tsx';
import { GlobalStateProvider } from './global/ContextGlobalState.tsx';
import Routing from './route/Routing.tsx';

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
      <ThemeProvider defaultTheme='dark' >
        <GlobalStateProvider>
          <Routing />
        </GlobalStateProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </PrimeReactProvider>,
)
