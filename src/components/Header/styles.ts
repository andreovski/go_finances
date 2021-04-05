import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin-left: 2rem;
    height: 3rem;

    font-size: 1rem;
    color: #FFF;
    background: var(--blue_light);

    border: 0;
    padding: 0 2rem;

    border-radius: 0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const DarkModeIcon = styled.img`
  width: 18px;
  height: 18px;

  margin-left: 4px;
  margin-top: 3px;
`

export const LightModeIcon = styled.img`
  width: 18px;
  height: 18px;

  margin-left: 5px;
  margin-top: 3px;
`

