import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/layouts/Header';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <div className="font-open-sans">
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <div className="max-w-2xl mx-auto px-4 lg:px-0 my-4 lg:my-8 flex flex-col space-y-6 text-gray-900">
              <Header />
              <Routes />
            </div>
          </Router>
        </QueryClientProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
