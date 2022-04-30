import AppProvider from './provider';
import Header from './components/Header';

function App() {
  return (
    <AppProvider>
      <Header />
    </AppProvider>
  );
}

export default App;
