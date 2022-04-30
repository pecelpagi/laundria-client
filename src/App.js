import AppProvider from './provider';
import AccountMenu from './components/AccountMenu';

function App() {
  return (
    <AppProvider>
      <AccountMenu />
    </AppProvider>
  );
}

export default App;
