import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import VantaBackground from "@/components/VantaBackground";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <VantaBackground>
          <TooltipProvider>
            <Toaster position="bottom-right" richColors />
            <Router />
          </TooltipProvider>
        </VantaBackground>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
