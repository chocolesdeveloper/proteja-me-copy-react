import { FacebookLogo, InstagramLogo } from "phosphor-react";
import { Footer, FooterPage, FooterPageButton, FooterPageContent, Header, Left, Rigth } from "./styles";

export function FooterHome () {
    return(
        <FooterPage>
            <FooterPageContent>
                <Header>
                    <div>
                        <h1>Pronto para começar?</h1>
                        <p>Crie sua conta agora e teste por <strong>3 dias grátis.</strong></p>
                    </div>
                    <div>
                        <FooterPageButton variant="red" >
                            <a href="https://api.whatsapp.com/send/?phone=5553991560306&text=Ol%C3%A1%2C+gostaria+de+experimentar+o+%2AAplicativo+Rondas+Online%2A.+Como+fa%C3%A7o%3F&type=phone_number&app_absent=0" target="-blanck">
                                Experimentar agora    
                            </a>
                        </FooterPageButton>
                        <FooterPageButton variant="black" >
                            <a href="https://api.whatsapp.com/send/?phone=5553991560306&text=Ol%C3%A1%2C+estou+com+alguma%28s%29+d%C3%BAvida%28s%29+sobre+o+%2AAplicativo+Rondas+Online%2A.+Pode+me+ajudar%3F&type=phone_number&app_absent=0" target="-blanck">
                                Converse conosco
                            </a>
                        </FooterPageButton>
                    </div>
                </Header>
                <Footer>
                    <Left>
                        <div>
                            <a href="https://api.whatsapp.com/send/?phone=5553991560306&text=Ol%C3%A1%2C+estou+com+alguma%28s%29+d%C3%BAvida%28s%29+sobre+o+%2AAplicativo+Rondas+Online%2A.+Pode+me+ajudar%3F&type=phone_number&app_absent=0" target='_blank'>
                                Dúvidas? Whatsapp + 55 53 99156-0306
                            </a>

                            <div>
                                <a href="https://www.facebook.com/protejameOficial" target="_blank">
                                    <FacebookLogo size={40} />
                                </a>
                                <a href="https://www.instagram.com/protejameoficial/" target="_blank">
                                    <InstagramLogo size={40} />
                                </a>
                            </div>
                            <p>© 2022 Proteja-me</p>
                        </div>
                    </Left>
                    <Rigth>
                        <div>
                            <a href="https://play.google.com/store/apps/details?id=com.protejame.rondasonline" target="_blank">
                                <img src="https://www.proteja-me.com/assets/padrao/images/google-play-store.png" alt="Ver na Google Play" width={200} />
                            </a>
                            <a href="https://apps.apple.com/br/app/rondas-online/id1615571963" target="_blank">
                                <img src="https://www.proteja-me.com/assets/padrao/images/app-store-apple.png" alt="Ver na Apple Story" width={200} />
                            </a>
                        </div>
                        <div>
                            <a href="/">Privacidade</a>
                            <a href="/">Termos</a>
                        </div>
                    </Rigth>
                </Footer>
            </FooterPageContent>
        </FooterPage>
    );
} 