import { HeaderContainer, HeaderContent, LeftDiv, RightDiv } from "./styles";

export function Header () {
    return (
        <HeaderContainer>
            <HeaderContent>
                <LeftDiv>
                    <a href=""><img src="https://www.proteja-me.com/assets/rondasonline/images/icone-rondas-online.png" alt="Logo" /></a>
                    <a href="./">Rondas Online</a>
                </LeftDiv>

                <RightDiv>
                    <a href="./">Fazer Login</a>
                    <a href="./">Solicitar teste</a>
                </RightDiv>
            </HeaderContent>
        </HeaderContainer>
    );
}