import styled from "styled-components";


export const Container = styled.div`
    min-width: 320px;
    margin: 0 auto;
    
    padding: 0 18px;

    

    @media screen and (min-width: 1000px) {
        max-width: 1158px;
        
        padding: 0 24px;
    }

    @media screen and (min-width: 1440px) {

        max-width: 1440px;
        padding: 0 24px;

    }
`
export const ConatnierCards = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    flex-direction: row;

    & > * {
        flex-basis: calc((100% - 90px) / 4); 
    }


`