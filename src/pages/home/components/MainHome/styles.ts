import styled from 'styled-components'

export const Container = styled.main`
    background: ${props => props.theme['gray-100']};
    width: 100%;
    min-width: 1120px;
    padding: 0 3.5rem;
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HeaderMain = styled.header`
    h1{
        width: 100%;
        padding: 2rem 2rem;
        font-size: 4rem;
        font-weight: 100;
    }

    p{
        font-size: 1.2rem;
        padding: 0 2rem;
        line-height: 1.3;
        font-style: italic;
    }
`;

interface ContentInfoProps {
    variant?: 'green' | 'red';
}

const ContentInfo = styled.div<ContentInfoProps> `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;

    svg {
        color: ${props => props.variant === 'green' ? props.theme["green-500"] : props.theme["red-500"]}
    }

    h1{
        font-style: italic;
        line-height: 1.5;
        letter-spacing: 4px;
        font-weight: 100;
    }

    h2{
        border-bottom: 4px solid black;
        width: 9rem;
        border-radius: 8px;
        margin: 0 0 0.5rem 0;
    }

    p {
        letter-spacing: 1px;
        line-height: 1.3;
    }

    img {
        width: 30rem;
    }
    
`;

export const ContentInfoRight = styled(ContentInfo)<ContentInfoProps>`
    div {
        padding: 0 8rem 0 2rem;
    }
`;

export const ContentInfoLeft = styled(ContentInfo)<ContentInfoProps>`
    div {
        padding: 0 6rem;
    }
`;


export const Depositions = styled.div`
    display: flex;
    flex-direction: column;
    
    h1 {
        font-size: 3.5rem; 
        letter-spacing: 1px;
        font-weight: 400;
        padding: 1rem 0 2rem 0;
        text-align: center;
    }

    div {
        display: flex;
        align-items: flex-start;
        
        img {
            width: 15rem;
            height: auto;
            margin: 0 0.5rem;
        }
    }
`;

export const Plans = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;

    h1{
        text-align: center;
    }

    main{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        margin: 2rem 0;
        align-items: flex-end;        
    }
`;

const PlansIndentical = styled.div`
        background: ${props => props.theme.white};
        border: 1px solid ${props => props.theme["gray-200"]};
        padding: 2.5rem 3rem;
        margin: 0 0.5rem;
        z-index: 0;

    h3{
        font-weight: 300;
        font-size: 2rem;
        text-align: center;
    }

    p{
        font-weight: bold;
        text-align: center;

        span {
            font-size: 3.5rem;
        }
    }

    ul {
        list-style: none;
        text-align: center;

        li{
            padding: 1.3rem 0;
            margin: 1rem 0;
            border-bottom: 1px solid ${props => props.theme["gray-200"]};
        }
    }

    
`;

export const PlansLeftRight = styled(PlansIndentical)`

    button {
        background: ${props => props.theme.black};
        color: ${props => props.theme.white};
        border: 0;
        padding:1.5rem 0;
        width: 20rem;
        border-radius: 8px;
        font-size: 1.5rem;
        cursor: pointer;

        transition:all 0.2s;

        &:hover {
            background: ${props => props.theme["red-500"]};
            color: ${props => props.theme.black};
        }
    }
`;

export const PlansMid = styled(PlansIndentical)`
    
    div{
        background: ${props => props.theme["red-500"]};
        border-top-left-radius: 9999px;
        border-bottom-left-radius: 9999px;
        width: 11rem;
        height: 1.8rem;
        position: absolute;
        transform: translate(176px, -36px) scale(1);
        z-index: -1;
    }
    
    h4 {
        font-weight: 100;
        color: ${props => props.theme.white};
        text-align: right;
        line-height: 2;

        &::before {
            content: '●';
            font-size: 1.5rem;
            margin-right: 1rem;
            color: ${props => props.theme.white};
            border-radius: 99999px;
        }
    }

    button {
        background: ${props => props.theme["red-500"]};
        color: ${props => props.theme.black};
        border: 0;
        padding:1.5rem 0;
        width: 20rem;
        border-radius: 8px;
        font-size: 1.5rem;
        cursor: pointer;

        transition:all 0.2s;

        &:hover {
            background: ${props => props.theme.black};
            color: ${props => props.theme.white};
        }
    }
`;

