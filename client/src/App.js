import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import RootNavigation from './navigations/RootNavigation';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <RootNavigation></RootNavigation>
    </div>
  );
}

export default App;
