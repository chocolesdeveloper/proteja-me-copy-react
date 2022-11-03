import styled from "styled-components";

export const FooterPage = styled.footer`
    width: 100%;
    min-width: 1120px;
    padding: 0 2rem;
    background: ${props => props.theme.black};

`;

export const FooterPageContent = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.white};
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 4rem 0;
    border-bottom: 0.5px solid ${props=> props.theme.white};

    h1 {
        letter-spacing: 1px;
        font-size: 2.5rem;
        padding-bottom: 0.5rem;
        font-weight: 400;
    }
`;

interface FooterPageButtonProps {
    variant?: 'black' | 'red';
}

export const FooterPageButton = styled.button<FooterPageButtonProps>`
        border: 0;
        padding: 1.5rem 2rem;
        margin: 0 1rem 0 0;

        background: ${props => props.variant === 'red' ? props.theme["red-500"] : props.theme.black};
        cursor: pointer;
        border: 1px solid ${props => props.theme.black};

        transition: all 0.5s;

        &:hover {
            text-decoration: underline;
            scale: 1.1;
            border: 1px solid ${props => props.theme.white};
        }

        a{
            color: ${props => props.theme.white};
            text-decoration: none;
        }
`;

export const Footer = styled.footer`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    grid-gap: 23rem;
`;

export const Left = styled.div`

    div{
        margin: 3rem 0;
        a{
            text-decoration: none;
            color: white;
        }

        svg{
            color: ${props => props.theme.white};
            display: inline-block;
            margin: 0 0.8rem;

            &:hover {
                background: rgba(234, 237, 237, 0.3);
            }
        }
    }
`;

export const Rigth = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;

    a {
        color: ${props => props.theme.white};
        text-decoration: none;
        padding: 0 0.5rem;

        &:hover {
            text-decoration: underline;
        }
    }

    img {
            width: 200px;
            height: 60px;
            margin: 4rem 0.3rem 0 0;
        }
`;



