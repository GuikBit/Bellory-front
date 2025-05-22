import { Outlet, } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Template = () => {

  return (
    <div className="flex flex-col min-h-screen w-full bg-neutral-100 dark:bg-neutral-950">

      <Header/>

      <main className="flex-grow text-black dark:text-white">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Template;
