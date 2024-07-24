import { RouterProvider } from "react-router-dom";
import routes from "./utils/routes/index.routes";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </>
  );
}

export default App;
