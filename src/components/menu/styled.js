import styled from 'styled-components';

export const MenuLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${ props => props.theme.primaryThemeColor };
`;

export const MenuWrapper = styled.div`
  height: 70px;
`