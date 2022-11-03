import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    background: ${props => props.theme.black};
    min-width: 1120px;
    padding: 6rem 1rem 1rem 1rem;
`; 

export const HeaderContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6rem;
    padding: 0 3rem;
`;
export const Description = styled.div`
    display: flex;
    flex-direction: column;

    color: ${props => props.theme.white};

    h1 {
        font-size: 3rem;
        font-weight: 400;
        line-height: 1;
        margin: 4rem 0 2rem 0 ;
        line-height: 1.2;
    }

    h2 {
        font-size: 2rem;
        font-weight: 100;
        font-style: italic;
        padding: 1rem 0;
        line-height: 1.2;
    }
`;

export const DescriptionImg = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem 0rem;

    img {
        width: 16rem;
        padding: 2rem 0.5rem;
    }
`;

export const DescriptionFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div { 
        flex-direction: column;
        text-align: center;
        padding: 1.5rem 0;

        h3{
            padding-bottom: 0.5rem;
            font-size: 2.5rem;
            font-weight: 100;
        }

        h3::before {
            content: '+';
            color: ${props => props.theme["red-500"]};
        }
        p {
            font-size: 1.1rem;
        }
    }
`;

export const FormContact = styled.form`
    background: ${props => props.theme.white};
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 1rem 1rem;
    border-top: 3rem solid black;
    border-bottom: 3rem solid black;

    h1 {
        padding: 2rem 0 1rem 0rem;
        font-weight: 600;
        text-align: center;

        span {
            color: ${props => props.theme["red-500"]};
        }
    }

    h3{
        padding: 0rem 0 1.5rem 2.5rem;
        font-size: 1rem;
        font-weight: 100;

        &::before {
            content: '* ';
            color: ${props => props.theme["red-500"]};
        }
    }

    p {
        font-size: 0.9rem;
        padding: 1rem 2rem;
        line-height: 1.5;
        a {
            font-size: 1rem;
            text-decoration: none;
            color: ${props => props.theme["blue-300"]};
        }
    }

    h5{
        font-size: 0.9rem;
        font-weight: 100;
        padding: 1rem 2rem;
        line-height: 1.7;
    }
`;

export const FormContactInput = styled.div`
        display: flex;
        flex-direction: column;

        label {
            position: absolute;
            transform: translate(42px, 22px) scale(1);

            transition: all 0.2s ease-out;
        }

        .ActiveResponsavel {
            transform: translate(30px, -3px) scale(1);
        }
        .ActiveEmpresa {
            transform: translate(30px, -3px) scale(1);
        }
        .ActiveWhatsApp {
            transform: translate(30px, -3px) scale(1);
        }
        input {
            margin: 0.3rem 1rem;
            padding: 1rem 1.5rem;
            background-color: ${props => props.theme["gray-100"]};
            border: 2px solid ${props => props.theme["gray-200"]};
            box-shadow: none;

            &:focus + label {
                transform: translate(30px, -3px) scale(1);
                background: linear-gradient(white, #EEEEEE);
                padding: 0 0.3rem;
                font-weight: bold;
            }

            &::placeholder {
                color: ${props => props.theme["gray-200"]};;
            }

            &:not(:focus)::placeholder{
                color: ${props => props.theme["gray-100"]};
            }

        }
`;

export const FormContactButton = styled.button`
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    border: 0;
    padding:1.5rem 2rem;
    width: 30rem;
    margin: 0 auto 2rem;
    border-radius: 8px;
    font-size: 1.5rem;
    cursor: pointer;

    transition:all 0.3s ;

    &:hover {
        background: ${props => props.theme["red-500"]};
        color: ${props => props.theme.black};
        box-shadow: 0px 0px 30px black;
    }

`;