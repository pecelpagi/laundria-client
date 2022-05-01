import AppProvider from './provider';
import MainLayout from './mainlayout';

function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;
