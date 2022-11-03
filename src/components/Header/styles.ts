import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    position: fixed;
    width: 100%;
    z-index: 2;
`;

export const HeaderContent = styled.div`
    height: 6rem;
    min-width: 1120px;
    padding: 1rem 3rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LeftDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        color: ${props => props.theme.white};
        font-size: 2rem;
        font-weight: 600;
        padding-left: 0.2rem;

        img {
            width: 20px;
            margin-right: 0.5rem;
        }
    }
`;

export const RightDiv = styled.div`
    a {
        text-decoration: none;
        color: ${props => props.theme.white};

        font-size: 1.2rem;
        font-weight: 600;
        padding: 0rem 1rem;

        margin-left: 1rem;
        display: inline-block;
        height: 6rem;
        line-height: 6rem;
        cursor: pointer;

        transition: 0.5s;

        :hover {
            color: ${props => props.theme.black};
            background-color: ${props => props.theme.white};
        }
    }
`;
