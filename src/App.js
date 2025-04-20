import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes';

function App() {
  return (
    <Router basename="/finmate">
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
