import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppRoutes } from "@routes";
import { Toaster } from 'react-hot-toast';


function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AppRoutes />
        <Toaster/>

      </QueryClientProvider>
    </>
  );
}

export default App;
