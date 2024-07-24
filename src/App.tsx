import { RouterProvider } from "react-router-dom";
import routes from "./utils/routes/index.routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProvider } from "./utils/context/providers/app.provider";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </AppProvider>
    </>
  );
}

export default App;
