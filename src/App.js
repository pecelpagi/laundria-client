import AppProvider from './provider';
import Logo from './components/Logo';

function App() {
  return (
    <AppProvider>
      <Logo />
    </AppProvider>
  );
}

export default App;
