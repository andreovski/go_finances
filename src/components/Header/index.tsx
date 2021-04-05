import { useContext } from 'react';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';

import logoImg from '../../assets/logo.svg';
import moonIcon from '../../assets/moon.svg';
import lightIcon from '../../assets/light_mode.svg';

import { Container, Content, DarkModeIcon, LightModeIcon} from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
  toggleTheme: () => void;
}

export function Header({ onOpenNewTransactionModal, toggleTheme }: HeaderProps) {
  const { title, colors } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />

        <div>
          <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={
              <LightModeIcon src={lightIcon} />
            }
            uncheckedIcon={
              <DarkModeIcon src={moonIcon} />
            }
            height={24}
            width={50}
            handleDiameter={24}
            offColor="#969CB3"
            onColor={colors.background}
          />

          <button type="button" onClick={onOpenNewTransactionModal}>
            Nova transação
          </button>
        </div>
      </Content>
    </Container>
  )
};