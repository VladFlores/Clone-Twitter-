import styled, { css } from "styled-components";

import { LocationOn, Cake } from '../../styles/Icons'; 
import Button from '../Button';

export const Container = styled.div `
    display: flex; /* para consumir todo espaço possivel*/
    flex-direction: column; /* coluna porque tem uma info embaixo da outra */

    max-width: 100%; /* altura maxima de 100% */
    overflow-y: auto; /* o que for muito grande a gente manda scrollar */

    scrollbar-width: none; /* config para o firebox */
    ::-webkit-scrollbar {
        display: none; /* para quando for scrollar, não aparecer a barra de scroll para o google chrome */
    }

`;
    export const Banner = styled.div`
        flex-shrink: 0; /* para não diminuir o tamanho como se fosse encolher */

        width: 100%;
        height: min(33vw, 199px);

        background: var(--twitter);
        
        position: relative; /* precisamos colocar relative para usar o absolute no avater */
    `;

    export const Avatar = styled.div`
        width: max(45px, min(135px, 22vw));
        height: max(45px, min(135px, 22vw));
        
        border: 3.75px solid var(--primary);
        background: var(--gray);
        border-radius: 50%;

        position: absolute;
        bottom: max(-60px, -10vw);
        left: 15;

    `;

    export const ProfileData = styled.div`
        padding: min(calc(10vw + 7px), 67px) 16px 0;

        display: flex; 
        flex-direction: column;

        position: relative;

        > h1 {
            font-weight: bold;
            font-size: 19px; 
        }
        > h2 {
            font-weight: normal;
            font-size: 15px;

            color: var(--gray);
        }
        > p {
            font-size: 15px;
            margin-top: 11px;

            > a {
                text-decoration: none;
                color: var(--twitter);
            }
        }
        > ul {
            list-style: none; /* para tirar as bolinhas da lista */
            margin-top: 10px;
            margin-bottom: 10px;
            

            > li {
                font-size: 15px;
                color: var(--gray);

                > svg {
                fill: var(--gray);
                margin-right: 5px;
                }
            }
        } 
    `;

    const IconCSS = css`
        width: 20px;
        height: 20px;
        
        color: var(--gray);
    `;

    export const Location = styled(LocationOn)`
        ${IconCSS}
    `;
    export const CakeIcon = styled(Cake) `
        ${IconCSS}
    `;

    export const Followage = styled.div`
        display: flex;
        
        > span {
            font-size: 15px;
            color: var(--gray);

        & + span { /* para cada span eu vou pegar o proximo span e vou fazer uma regra nele */
            margin-left: 20px;
            }
        }
    `;

    export const EditButton = styled(Button)`
        position: absolute; //Absolute não funciona se o pai não for relative
        top: 2vw;
        right: 7px;

        padding: 4px 16px;
        font-size:13px;

        @media (min-width: 320px) {
            top: 10px;
            padding: 10px 19px;
            font-size: 15px;
        }
    `;
