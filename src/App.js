import AppProvider from './provider';
import Header from './components/Header';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <AppProvider>
      <SideMenu />
      <Header />
    </AppProvider>
  );
}

export default App;
