import styled from 'styled-components';

export const BrandWraper = styled.div`
  width: 20px;
  height: 30px;
  border-radius: 20px;
  margin: 0px;
  background: ${ props => props.theme.watermarkThemeColor };
  display: flex;
  align-items: center;
  justify-content: center;
  transform: skewY(-10deg);
  cursor: pointer;
  overflow: hidden;
  box-shadow: ${ props => props.theme.floatigShadow };
  animation: floating 5s ease-in-out infinite alternate;

  @keyframes floating {
    0%{
      transform: translate(0, 0);
    }

    50%{
      transform: translate(0, -5px);
    }

    100%{
      transform: translate(0, 0);
    }

  }

  &::after {
    content: '';
    position: absolute;
    left: -15px;
    height: 40px;
    width: 5px;
    background-color: #f3f3f3;
    box-shadow: 0 0 10px #FFFFFF;
    filter: blur(2px);
    opacity: .9;
    transform: rotate(-20deg) translateX(0);
    animation: brand-animation 5s ease-in-out infinite;
  }

  @keyframes brand-animation {
    0% {
      position: absolute;
      left: -15px;
    }

    100% {
      position: absolute;
      left: 25px;
    }
  }
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
  transform: skewY(-10deg);
  opacity: .3;
`;

export const BrandTextWatermark = styled.span`
  color: white;
  text-transform: uppercase;
`;