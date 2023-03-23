import Navigation from './components/Navigation';
import RootNavigation from './navigation/RootNavigation';
import reset from './reset.css';

function App() {
  return (
    <div className={reset}>
      <Navigation></Navigation>
      <RootNavigation></RootNavigation>
    </div>
  );
}

export default App;
