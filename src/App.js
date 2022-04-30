import AppProvider from './provider';
import Logo from './components/Logo';

function App() {
  return (
    <AppProvider>
      <Logo variant="dark" />
    </AppProvider>
  );
}

export default App;
