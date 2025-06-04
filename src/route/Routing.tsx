import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "../components/Fragments/ScrollToTop";
// Removed duplicate import of Template
// Lazy load all components
const Template = lazy(() => import("../template/Template"));
const Home = lazy(() => import("../views/Home"));
const Sobre = lazy(() => import("../views/Sobre"));
const Produtos = lazy(() => import("../views/Produtos"));
const Servicos = lazy(() => import("../views/Servicos"));
const NotFound = lazy(() => import("../views/NotFound"));
const Carrinho = lazy(() => import("../views/Carrinho"));
const Auth = lazy(() => import("../views/Auth"));
const ProdutoDetalhe = lazy(()=> import("../views/ProdutosDetalhes"))
const Componentes = lazy(()=> import("../views/Componentes"));



const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function Routing() {

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/regiserSW.js').then(
        (registration) => {
          console.log('SW registered: ', registration);
        },
        (registrationError) => {
          console.log('SW registration failed: ', registrationError);
        }
      );
    });
  }
  
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <ScrollToTop />
        <Routes>
          <Route element={<Template />}>
            <Route index element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/ui" element={<Componentes />} />  
            <Route path="*" element={<NotFound />} />
          </Route>  
              
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Routing;