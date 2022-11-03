import styled from "styled-components";

export const ApplicationMeasure = styled.div`
    width: 100%;
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    padding: 0 2rem;
`;

export const ApplicationMeasureContent = styled.div`
    display: flex;
    justify-content: space-between;

    h1 {
        letter-spacing: 1px;
        font-size: 2rem;
        padding: 3rem 0 1rem 0;
    }

    p {
        font-weight: bold;
    }

    ul{
        list-style: none;
        padding: 1rem 1rem;
        
        li{
            padding: 0.5rem 0;
            font-size: 1.3rem;

            &::before {
                content: '»';
                color: ${props => props.theme.white};
                font-size: 1.8rem;
                padding-right: 0.5rem;
                font-weight: bold;
            }
        }
    }

    button {
        border: 0;
        padding: 1rem 4rem;
        font-size: 2rem;
        margin: 1rem 0;
        letter-spacing: 1.5px;
        border: 1px solid ${props => props.theme.black}; 

        transition: all 0.2s;

        &:hover {
            background: black;
            color: white;
            border: 1px solid ${props => props.theme.white}; 
        }
    }

    aside {
        background: ${props => props.theme.white};
        width: 50%;
        img {
            width: 15rem;
        }
    }
`;

export const OtherResources = styled.div`
    width: 100%;
    min-width: 1120px;
    padding: 2rem 2rem;
`;

export const OtherResourcesContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    h1{
        font-size: 3rem;
        font-weight: 600;
        letter-spacing: 1px;
    }

    main {
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            padding: 2rem 6rem;
            
            ul {
                list-style: none;

                li{
                    padding:1.2rem 0;
                    letter-spacing: 1px;
                    line-height: 1.1;
                    display: flex;
                    align-items: center;

                    span {
                        margin-right: 1rem;
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }

    h3 {
        text-align: center;
        font-size: 2rem;
        line-height: 1.2;
        font-weight: 500;
        margin: 1rem 0;

        span {
            color: ${props => props.theme["red-500"]};
            text-decoration: underline;
        }
    }

    h4 {
        padding: 1rem 0;
        font-weight: 100;
        font-size: 1.1rem;
    }

    button {
        margin: 1rem 0;
        padding: 1rem 16rem;

        border: 0;
        font-size: 2rem;
        letter-spacing: 1.5px;
        cursor: pointer;

        background: ${props => props.theme.black};
        color: ${props => props.theme.white};

        transition: all 0.2s;

        &:hover {
            background: ${props => props.theme["red-500"]};
            color: ${props => props.theme.black};
            scale: 1.1;
            box-shadow: 0px 15px 50px ${props => props.theme.black};
        }
    }
`;