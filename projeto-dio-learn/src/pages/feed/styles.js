import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 20px;
    line-height: 25px;

    color: #FFFFFF;

`
export const TitleHighlight = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 20px;

    color: #FFFFFF70;
`
//Flex dinamico como abaixo, determina o peso dos componentes dentro do flexbox e quanto maior mais espaço ele ocupa.
export const Column = styled.div`
    flex:${({flex}) => flex};
    padding-right: 25px;
`


