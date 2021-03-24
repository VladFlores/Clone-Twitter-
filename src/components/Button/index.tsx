// este componente botão foi criado dentro de components (separado dos outros) por que vamos reutilizar outras vezes

import styled from 'styled-components';
 
interface Props {
    outlined?: boolean;
}

export default styled.button<Props>`
    background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
    //Se a pessoa passsou a cor do fundo com a propriedade contornado (outlined)
    //A cor do fundo do botão vai ser tranparente, se não vai ser azul

    color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
    //Se o background for contonado (outlined) a cor da fonte vai ser azul
    //Se não a cor vai ser branco. 

    border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none' )};
    //Se tiver a propriedade outlined (contornado) vai ter uma borda da cor azul 
    //Se não, não vai ter borda azul

    padding: 16px;
    border-radius: 25px;

    font-weight: bold; //Para que a fonte seja mais grossa
    font-size: 15px;

    cursor: pointer;
    outline: 0;

    &:hover{
        background: ${(props) => props.outlined ? 'var(--twitter-dark-hover)' : 'var(--twitter-light-hover)'};
    }
`;