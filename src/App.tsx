import Modal from 'react-modal';
import { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionProvider } from './hooks/useTransactions';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './hooks/usePersistedState';

Modal.setAppElement('#root');

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function togggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <ThemeProvider theme={theme}>
        <Header 
          onOpenNewTransactionModal={handleOpenNewTransactionModal}
          toggleTheme={togggleTheme} 
        />
        <Dashboard />

        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle />
      </ThemeProvider>
    </TransactionProvider>
  );
}
