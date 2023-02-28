import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 200px;

  @media (min-width: 320px) and (max-width:480px ) {
    margin: 0 10px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin: 0 50px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin: 0 100px;
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    margin: 0 200px;
  }

  @media (min-width: 1201px) {
    margin: 0 200px;
  }
`;