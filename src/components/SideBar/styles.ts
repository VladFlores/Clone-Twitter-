import styled from "styled-components";

import { Search } from "../../styles/Icons";

export const Container = styled.div`
  display: none;

  @media (min-width:1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }
`;

  export const SearchWrapper = styled.div`
    padding: 10px 24px;
    width: min(399px, 100%);

    position: fixed; /* para deixar fixado a barra de pesquisa, mesmo scrollando a barra fica fixa */
    top: 0; /* para que fique fixado na parte de cima */
    z-index: 2; /* colocar para que esse elemento fique encima de todos os elementos, 2 porque vai ficar duas camadas pra frente  */
    background: var(--primary);

    max-height: 57px;
  `;

  export const SearchInput = styled.input`
    width: 100%; /* vai utilizar 100% do espaço que o pai deixou para ele */
    height: 39px;
    font-size: 14px;
    padding: 0 10px 0 52px;
    border-radius: 19.5px;
    background: var(--search);
    
    &::placeholder {
      color: var(--gray);
    }

    ~ svg {
      position: relative;
      top: -33px;
      left: 15px;
      z-index: 1;

      transition: 180ms ease-in-out;
    }

    outline: 0;

    &:focus {
      border: 1px solid var(--twitter);

      ~ svg {
        fill: var(--twitter);
      }
    }
    
  `;

  export const SearchIcon = styled(Search)`
    width: 27px;
    height: 27px;

    fill: var(--gray);
  `;

  export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 57px 24px 200px;
    margin-top: 3px;

    > div + div {
      margin-top: 15px;
    }
  `;