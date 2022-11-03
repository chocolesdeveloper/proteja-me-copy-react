import { ApplicationMeasure, ApplicationMeasureContent, OtherResources, OtherResourcesContent } from "./styles";

export function AsideHome () {
    return (
        <>
            <ApplicationMeasure>
                <ApplicationMeasureContent>
                <main>
                    <h1>Aplicativo sob medida para sua empresa!</h1>
                    <p>Personalizado com:</p>
                    <ul>
                        <li>Suas Cores</li>
                        <li>Sua Marca</li>
                    </ul>
                    <button>Solicite Informações</button>
                </main>
                <aside>
                    <img src="https://www.proteja-me.com/assets/rondasonline/images/app-personalizado-icone.png" />
                </aside>
                </ApplicationMeasureContent>
            </ApplicationMeasure>

            <OtherResources>
                <OtherResourcesContent>
                    <h1>Outros Recurso do Rondas Online</h1>
                    <main>
                        <div>
                            <ul>
                                <li><span>🗸</span> GPS Integrado</li>
                                <li><span>🗸</span>Botão de Emergência para o Ronda</li>
                                <li><span>🗸</span>Abertura de Ocorrência pelo Ronda</li>
                                <li><span>🗸</span>Sistema de Localização Inteligente (Localiza rondas mais próximos para atendimento de Emergência ou Acompanhamento)</li>
                                <li><span>🗸</span>Rota Inteligente (Mostra caminho mais rapido até o local do atendimento)</li>
                                <li><span>🗸</span>Notificações via Push (Notificações de Rondas, Ocorrências e etc)</li>
                                <li><span>🗸</span>Registro de Ocorrências com Descrição e Fotos</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><span>🗸</span>Opção de Ligar para Cliente quando estiver em atendimento de Emergência ou Acompanhamento</li>
                                <li><span>🗸</span>Mapa com Pontos dos cliente onde deve ser feita a a Ronda</li>
                                <li><span>🗸</span>Controle de Mensalidade (com aviso de vencimento ou atraso e recibo de pagamento)</li>
                                <li><span>🗸</span>Botão de Acompanhamento com Agendamento de Horário</li>
                                <li><span>🗸</span>Avaliação de Atendimento por parte do Cliente</li>
                                <li><span>🗸</span>Bloqueio do Aplicativo Cliente Automaticamente após 5 dias de Atraso</li>
                            </ul>
                        </div>
                    </main>
                    <h3>Se você quer se destacar da sua concorrência e ter resultados diferentes,<p> então você <span>PRECISA</span> ser diferente.</p></h3>
                    <h4>Oferença já ao seus clientes uma nova experiência no ramo das Rondas. A hora é agora, venha fazer parte desta nova era das Rondas.</h4>
                    <button>Experimente agora</button>
                </OtherResourcesContent>
            </OtherResources>
        </>
    );
}