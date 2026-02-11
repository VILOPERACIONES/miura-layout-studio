import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminLayout } from "@/components/admin/AdminLayout";

import AdminLogin from "@/pages/admin/Login";
import AdminDashboard from "@/pages/admin/Dashboard";
import PromotionsList from "@/pages/admin/PromotionsList";
import PromotionForm from "@/pages/admin/PromotionForm";
import PromotionDetail from "@/pages/admin/PromotionDetail";

import { Preloader } from "@/components/Preloader";

gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      // smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value)
          : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // luego esto se conecta al video o assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* PRELOADER GLOBAL */}
        <Preloader visible={loading} />

        <BrowserRouter>
          <AuthProvider>
            <div
              className={`
                transition-opacity duration-700 ease-in-out
                ${loading ? "opacity-0" : "opacity-100"}
              `}
            >
              <Routes>
                <Route path="/" element={<Index />} />

                {/* Admin routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="promotions" element={<PromotionsList />} />
                  <Route path="promotions/new" element={<PromotionForm />} />
                  <Route path="promotions/:id" element={<PromotionDetail />} />
                  <Route path="promotions/:id/edit" element={<PromotionForm />} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
