
import './App.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }

  }
});

function App() {

  return (
      <QueryClientProvider client={queryClient}>
        <></>
      </QueryClientProvider>
  )
}

export default App
