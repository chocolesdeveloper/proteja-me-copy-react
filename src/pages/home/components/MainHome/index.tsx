import { Clock, PoliceCar, VideoCamera, WhatsappLogo } from "phosphor-react";
import { Container, ContainerContent, ContentInfoLeft, ContentInfoRight, Depositions, HeaderMain, Plans, PlansLeftRight, PlansMid } from "./styles";

export function MainHome () {
    return (
        <Container>
            <ContainerContent>
                <HeaderMain>
                    <h1>O que é o Rondas Online?</h1>
                    <p>Rondas Online e um aplicativo que tem o foco de resolver os principais problemas do dia-a-dia das Empresas de Ronda Patrimonial. Não importa o tamanho de sua empresa, se ela faz ronda / patrulhamento / vigilância esta plataforma e para você.</p>
                </HeaderMain>
                <ContentInfoRight>
                    <div>
                        <Clock  size={70}/>
                        <h1>Registro de Rondas</h1>
                        <h2></h2>
                        <p>Pare de gastar dinheiro com equipamentos caros ou utilizar buzinas altas que atrapalham o sossego só para mostrar que você esta realizando as rondas. Com o sistema inteligente de Rondas Online da Proteja-me, ao passar em frente ao patrimônio do cliente, ele será notificado automaticamente sem a necessidade de fazer check-in.</p>
                    </div>
                    <img src="https://www.proteja-me.com/assets/rondasonline/images/modulos-icone-registro-rondas.png" alt="Imagem Aplicativo Rondas Online - Registro de Rondas" title="Imagem Aplicativo Rondas Online - Registro de Rondas"></img>
                </ContentInfoRight>

                <ContentInfoLeft>
                <img src="https://www.proteja-me.com/assets/rondasonline/images/modulos-icone-botao-emergencia.png" alt="Imagem Aplicativo Rondas Online - Botão Emergência" title="Imagem Aplicativo Rondas Online - Botão Emergência"  />
                    <div>
                        <PoliceCar  size={70}/>
                        <h1>Botão Emergência</h1>
                        <h2></h2>
                        <p>Diga adeus à burocracia desnecessária de ligações sempre que alguém precisar de atendimento, com o Rondas Online os clientes solicitam atendimento com apenas um toque. Simples e fácil.</p>
                    </div>
                </ContentInfoLeft>

                <ContentInfoRight>
                    <div>
                        <VideoCamera  size={70}/>
                        <h1>Sistema Anti-Roubo</h1>
                        <h2></h2>
                        <p>Com o sistema Anti-Roubo da Proteja-me, qualquer câmera ou DVR com acesso a internet passa a identificar com precisão movimentação de pessoas e notifica Rondas e Clientes com a foto da mvimentação da área monitorada.</p>
                    </div>
                    <img src="https://www.proteja-me.com/assets/rondasonline/images/modulos-icone-cameras-de-seguranca.png" alt="Imagem Aplicativo Rondas Online - Sistema Anti-Roubo" title="Imagem Aplicativo Rondas Online - Sistema Anti-Roubo"  />
                </ContentInfoRight>
                
                <ContentInfoLeft variant="green">
                <img src="https://www.proteja-me.com/assets/rondasonline/images/modulos-icone-suporte-whatsapp.png" alt="Imagem Aplicativo Rondas Online - Suporte via Whatsapp" title="Imagem Aplicativo Rondas Online - Suporte via Whatsapp"  />
                    <div>
                        <WhatsappLogo  size={70}/>
                        <h1>Suporte via Whatsapp</h1>
                        <h2></h2>
                        <p>Aqui você tem atendimento humanizado, sem robôs. Quando precisar de ajuda ou suporte, você poderá conversar com alguém de nossa equipe que realmente vai estar interessado em ajudá-lo.</p>
                    </div>
                </ContentInfoLeft>

                <Depositions>
                    <h1>Depoimentos de clientes</h1>
                    <div>
                        <img src="https://www.proteja-me.com/assets/rondasonline/images/depoimentos-depoimento5.jpg" alt="Depoimentos" />
                        <img src="https://www.proteja-me.com/assets/rondasonline/images/depoimentos-depoimento3.jpg" alt="Depoimentos" />
                        <img src="https://www.proteja-me.com/assets/rondasonline/images/depoimentos-depoimento2.jpg" alt="Depoimentos" />
                        <img src="https://www.proteja-me.com/assets/rondasonline/images/depoimentos-depoimento1.jpg" alt="Depoimentos" />
                        <img src="https://www.proteja-me.com/assets/rondasonline/images/depoimentos-depoimento4.jpg" alt="Depoimentos" />
                    </div>
                </Depositions>

                <Plans>
                    <h1>Nossos valores</h1>
                    <main>
                        <PlansLeftRight>
                            <h3>Básico</h3>
                            <p>R$ <span>149,90</span>/mês</p>
                            <ul>
                                <li><strong>100</strong> Clientes</li>
                                <li><strong>5</strong> Funcionários</li>
                                <li>Gerenciador de Ocorrências</li>
                                <li>Controle de Mensalidade</li>
                                <li>Kit de Marketing <strong>(Material Digital)</strong></li>
                            </ul>
                            <button>QUERO ESTE</button>
                        </PlansLeftRight>
                        <PlansMid>
                            <h4>Mais Vendido</h4>
                            <div></div>
                            <h3>Essencial</h3>
                            <p>R$ <span>199,90</span>/mês</p>
                            <ul>
                                <li><strong>300</strong> Clientes</li>
                                <li><strong>15</strong> Funcionários</li>
                                <li>Gerenciador de Ocorrências</li>
                                <li>Controle de Mensalidade</li>
                                <li>Kit de Marketing <strong>(Material Digital)</strong></li>
                            </ul>
                            <button>QUERO ESTE</button>
                        </PlansMid>
                        <PlansLeftRight>
                            <h3>Master</h3>
                            <p>R$ <span>249,90</span>/mês</p>
                            <ul>
                                <li><strong>500</strong> Clientes</li>
                                <li><strong>25</strong> Funcionários</li>
                                <li>Gerenciador de Ocorrências</li>
                                <li>Controle de Mensalidade</li>
                                <li>Kit de Marketing <strong>(Material Digital)</strong></li>
                            </ul>
                            <button>QUERO ESTE</button>
                        </PlansLeftRight>
                    </main>
                </Plans>

                
            </ContainerContent>
        </Container>
    );
}