import styled from 'styled-components';

export const BrandWraper = styled.div`
  width: 80px;
  height: 30px;
  border-radius: 20px;
  background: ${ props => props.theme.watermarkThemeColor };
  display: flex;
  align-items: center;
  justify-content: center;
  transform: skewX(10deg);
`;

export const BrandText = styled.span`
  color: white;
  text-transform: uppercase;
`;

export const BrandWraperWatermark = styled.div`
  width: 80px;
  height: 30px;
  border-radius: 20px;
  background: ${ props => props.theme.watermarkThemeColor };
  display: flex;
  align-items: center;
  justify-content: center;
  transform: skewX(10deg);
  opacity: .3;
`;

export const BrandTextWatermark = styled.span`
  color: white;
  text-transform: uppercase;
`;