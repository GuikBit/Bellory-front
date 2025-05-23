// import { Outlet, } from "react-router-dom";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import ThemeFooter from "../components/Footer/theme-footer";
// import ThemeHeader from "../components/Header/theme-header";

// const Template = () => {

//   return (
//     <div className="flex flex-col min-h-screen w-full bg-neutral-100 dark:bg-neutral-950">

//       <ThemeHeader />

//       <main className="flex-grow text-black dark:text-white">
//         <Outlet />
//       </main>

//       <ThemeFooter />
//     </div>
//   );
// };

// export default Template;


"use client"


import { useTheme } from "../contexts/Theme-context"
import ThemeHeader from "../components/Header/theme-header"
import ThemeFooter from "../components/Footer/theme-footer"
import { Outlet } from "react-router"


const Template = () => {
  const { currentTheme } = useTheme()

  return (
    <div
      className="flex flex-col min-h-screen w-full"
      style={{
        backgroundColor: currentTheme.colors.background,
        color: currentTheme.colors.text,
      }}
    >
      <ThemeHeader />

      <main
        className="flex-grow pt-20"
        style={{
          color: currentTheme.colors.text,
          fontFamily: currentTheme.fonts.body,
        }}
      >
        <Outlet />
      </main>

      <ThemeFooter />
    </div>
  )
}

export default Template

