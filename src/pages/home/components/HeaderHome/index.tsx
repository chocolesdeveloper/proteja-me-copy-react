import { useState } from "react";
import { FormContact, HeaderContent, Description, DescriptionImg, DescriptionFooter, FormContactButton, FormContactInput, HeaderContainer } from "./style";

export function HeaderHome () {

    const [ isActiveResponsavel, setIsActiveResponsavel] = useState(false);
    const [ isActiveEmpresa, setIsActiveEmpresa] = useState(false);
    const [ isActiveWhatsApp, setIsActiveWhatsApp] = useState(false);

    function handleTextChangeResponsavel(text: string) {
        console.log(text)

        if(text !== ''){
            setIsActiveResponsavel(true);
        } else {
            setIsActiveResponsavel(false);
        }
    }
    function handleTextChangeEmpresa(text: string) {
        console.log(text)

        if(text !== ''){
            setIsActiveEmpresa(true);
        } else {
            setIsActiveEmpresa(false);
        }
    }
    function handleTextChangeWhatsApp(text: string) {
        console.log(text)

        if(text !== ''){
            setIsActiveWhatsApp(true);
        } else {
            setIsActiveWhatsApp(false);
        }
    }

    return(
       <HeaderContainer>
            <HeaderContent>
                <Description>
                    <h1>Problemas com suas Rondas?</h1>
                    <h2>Nós temos a solução, conheça o App de Rondas Online da Proteja-me.</h2>

                    <DescriptionImg>
                        <a href="https://play.google.com/store/apps/details?id=com.protejame.rondasonline" target="_blank">
                            <img src="https://www.proteja-me.com/assets/padrao/images/google-play-store.png" alt="Ver na Google Play" />
                        </a>
                        <a href="https://apps.apple.com/br/app/rondas-online/id1615571963" target="_blank">
                            <img src="https://www.proteja-me.com/assets/padrao/images/app-store-apple.png" alt="Ver na Apple Story" />
                        </a>
                    </DescriptionImg>
                    <DescriptionFooter>
                        <div>
                            <h3>3k</h3>
                            <p>Locais atendidos</p>
                        </div>
                        <div>
                            <h3>11k</h3>
                            <p>Rondas por dia</p>
                        </div>
                        <div>
                            <h3>10k</h3>
                            <p>Ocorrencias atendidas</p>
                        </div>
                    </DescriptionFooter>
                </Description>

                <FormContact>
                    <h1>Teste grátis por <span>3</span> dias</h1>
                    <h3>Após 3 dias, seu plano é renovado automaticamente. Cancele quando quiser.</h3>
                    <FormContactInput>
                        <input 
                            type="text" 
                            id="inputResponsavel" 
                            placeholder="Digite nome do responsável"
                            onChange={(e) => handleTextChangeResponsavel(e.target.value)}
                        />
                        <label 
                            htmlFor="inputResponsavel"
                            className={ isActiveResponsavel ? "ActiveResponsavel" : ""}
                        >
                            Nome do responsável
                        </label>
                    </FormContactInput>
                    <FormContactInput>
                        <input 
                            type="text" 
                            id="inputEmpresa" 
                            placeholder="Digite nome da empresa"
                            onChange={(e) => handleTextChangeEmpresa(e.target.value)}
                        />
                        <label 
                            htmlFor="inputEmpresa"
                            className={ isActiveEmpresa ? "ActiveEmpresa" : ""}
                        >
                            Nome da empresa
                        </label>
                    </FormContactInput>
                    <FormContactInput>
                        <input 
                            type="tel" 
                            pattern="([0-9]{3}) [0-9]{5}-[0-9]{4}"
                            id="inputWhatsapp" 
                            placeholder="(XX) X XXXX XXXX"
                            onChange={(e) => handleTextChangeWhatsApp(e.target.value)}
                        />
                        <label 
                            htmlFor="inputWhatsapp"
                            className={ isActiveWhatsApp ? "ActiveWhatsApp" : ""}
                        >
                            WhatsApp com DDD
                        </label>
                    </FormContactInput>

                    <p>Ao continuar, eu concordo com os <a href="">Termos de Uso</a> e afirmo que li a <a href="/">Política de Privacidade</a>.</p>

                    <h5>Também concordo que a Proteja-me ou seus representantes podem entrar em contato comigo por e-mail, telefone, SMS (inclusive por meios automatizados) ou WhatsApp, no endereço de e-mail ou número que eu fornecer, para fins de marketing e suporte.</h5>
                    <FormContactButton>QUERO TESTAR AGORA!</FormContactButton>
                </FormContact>
            </HeaderContent>
        </HeaderContainer>
    );
}