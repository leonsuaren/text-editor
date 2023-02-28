import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi'

export const CreateTextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreateTextPlusButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const CreateTextPlus = styled(BiPlus)`
  font-size: 2.4rem;
  font-weight: 100;
  color: ${ props => props.theme.primaryThemeColor };
  border-radius: 50%;
  border: 1px solid ${ props => props.theme.primaryThemeColorTransparent };
`;