import ReactDOM from 'react-dom';

function Topo() {
    return (
        /* <!-- TOPO --> */
        <div class="topo">
            {/* <!-- ÍCONE, LINHA E LOGO --> */}
            <div class="topoIconeELogo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="linhaVertical"></div>
                <img src="imagens/logo.png" />
            </div>
            {/* <!-- BARRA DE PESQUISA --> */}
            <div class="topoPesquisa">
                <input type="text" placeholder="Pesquisar"></input>
            </div>
            {/* <!-- ÍCONES DO FINAL --> */}
            <div class="topoIconesDoFinal">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>

        </div>
    );
}

function TopoMobile() {
    return (
        <div class="topoMobile">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="imagens/logo.png" />
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
}

function RodaPeMobile() {
    return (
        <div class="rodapeMobile">
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    );
}

function Page() {
    return (
        <div class="pagina">
            <div class="caixaDosStoriesMaisPosts">
            
            <Stories />

            <div class="todosOsPosts">
            
            <FirstPost />
            <SecondPost />

                
                
                
                </div> {/* Closes all the posts ('.todosOsPosts') */}

        </div> {/* Closes Stories + Posts ('.caixaDosStoriesMaisPosts') */}

        <Sidebar />

        </div> /* Closes all elements in page ('.pagina') */
    );
}

function Stories() {
    return (
        <div class="caixaDosStories">
            <ion-icon name="chevron-forward-circle"></ion-icon>
                <div class="storiesComBorda">
                    <div class="bordaDosStories">
                        <img src="/imagens/9gag.jpg" />
                    </div>
                        <p>9gag</p>
                </div>
                <div class="storiesComBorda">
                    <div class="bordaDosStories">
                        <img src="/imagens/Sakura1.jpg" />
                    </div>
                        <p>Sakura</p>
                </div>
                <div class="storiesComBorda">
                    <div class="bordaDosStories">
                        <img src="/imagens/Sakura2.jpg" />
                    </div>
                        <p>Sakura2</p>
                </div>
                <div class="storiesComBorda">
                    <div class="bordaDosStories">
                        <img src="/imagens/Sailor Jupiter.jpg" />
                    </div>
                        <p>Sailor...</p>
                </div>
                <div class="storiesComBorda">
                    <div class="bordaDosStories">
                        <img src="/imagens/lgbtqia.jpg" />
                    </div>
                        <p>LGBT...</p>
                </div>
                <div class="storiesComBorda">
                    <div class="bordaDosStories">
                        <img src="/imagens/trans.jpg" />
                    </div>
                        <p>Trans</p>
                </div>
                <div class="storiesComBorda">
                    <div class="bordaDosStories">
                        <img src="/imagens/lgbtqiaEtrans.webp" />
                    </div>
                        <p>LGBT...</p>
                </div>
                <div class="storiesComBorda">
                    <div class="bordaDosStories">
                        <img src="/imagens/Kurama.png" />
                    </div>
                        <p>Kurama</p>
                </div>
                <div class="storiesComBorda">
                    <div class="bordaDosStories">
                        <img src="/imagens/Shun.jpg" />
                    </div>
                        <p>Shun</p>
                </div>
                <div class="storiesComBorda">
                    <div class="bordaDosStories">
                        <img src="/imagens/Yue.jpg" />
                    </div>
                        <p>Yue</p>
                </div>

            </div>
    );
}

function FirstPost() {
    return (
        <div class="caixaDePosts">
            <div class="post">
            <div class="postTopo">
                                <img src="imagens/Sakura2.jpg" />
                                <div class="postPerfil">
                                    <h1>Sakura</h1>
                                    <h2>...</h2>
                                </div>
                            </div>
                            <img src="imagens/SakuraEYue.jpg" />

                            <div class="postRodape">
                                <div class="postRodapeIcones">
                                    <div class="postRodapeIconesDireita">
                                        <ion-icon name="heart-outline"></ion-icon>
                                        <ion-icon name="chatbubble-outline"></ion-icon>
                                        <ion-icon name="paper-plane-outline"></ion-icon>
                                    </div>
                                    <div class="postRodapeIconesEsquerda">
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </div>
                                </div>
                                <div class="postRodapeCurtidas">
                                    <img src="imagens/Yue2.jpg" />
                                    <p>Curtido por <strong>Yue</strong> e <strong>outras 101.523 pessoas</strong></p>
                                </div>
                            </div>
                </div></div>
    );
}

function SecondPost() {
    return (
        <div class="caixaDePosts">
                <div class="post">
                <div class="postTopo">
                                <img src="imagens/Sailor Jupiter.jpg" />
                                <div class="postPerfil">
                                    <h1>Sailor Jupiter</h1>
                                    <h2>...</h2>
                                </div>
                            </div>
                            <img src="imagens/Sailor Jupiter.jpg" />
                            <div class="postRodape">
                                <div class="postRodapeIcones">
                                    <div class="postRodapeIconesDireita">
                                        <ion-icon name="heart-outline"></ion-icon>
                                        <ion-icon name="chatbubble-outline"></ion-icon>
                                        <ion-icon name="paper-plane-outline"></ion-icon>
                                    </div>
                                    <div class="postRodapeIconesEsquerda">
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </div>
                                </div>
                                <div class="postRodapeCurtidas">
                                    <img src="imagens/Sakura2.jpg" />
                                    <p>Curtido por <strong>Sakura</strong> e <strong>outras 101.523 pessoas</strong></p>
                                </div>
                            </div>

                    </div></div>
    );
}

function Sidebar() {
    return (
        <div class="sidebar">
            <div class="sidebarPerfil">
                <img src="imagens/Yue.jpg" />
                <div class="sidebarPerfilTexto">
                        <h1>CardCaptorsYue</h1>
                        <h2>Yue</h2>
                </div>
            </div>

            <div class="sidebarLinhaHorizontal"></div>

            <div class="sugestoesParaVoceTexto">
                    <h1>Sugestões para você</h1>
                    <h2>ver tudo</h2>
            </div>

            <div class="sugestoesDePerfis">
                    <div class="sugestoesDePerfisPerfil">
                        <img src="imagens/Hyoga.jpg" />
                        <div class="sidebarPerfilTexto">
                            <h1>Hyoga</h1>
                            <h4>segue você</h4>
                        </div>
                        <div class="sidebarPerfilTextoSeguir">
                            <h3>Seguir</h3>
                        </div>
                    </div>
                </div>

                <div class="sugestoesDePerfis">
                    <div class="sugestoesDePerfisPerfil">
                        <img src="imagens/Shun.jpg" />
                        <div class="sidebarPerfilTexto">
                            <h1>Shun</h1>
                            <h4>segue você</h4>
                        </div>
                        <div class="sidebarPerfilTextoSeguir">
                            <h3>Seguir</h3>
                        </div>
                    </div>
                </div>

                <div class="sugestoesDePerfis">
                    <div class="sugestoesDePerfisPerfil">
                        <img src="imagens/Shiryu.jpg" />
                        <div class="sidebarPerfilTexto">
                            <h1>Shiryu</h1>
                            <h4>Novx no Instagram</h4>
                        </div>
                        <div class="sidebarPerfilTextoSeguir">
                            <h3>Seguir</h3>
                        </div>
                    </div>
                </div>

                <div class="sugestoesDePerfis">
                    <div class="sugestoesDePerfisPerfil">
                        <img src="imagens/Saga.jpg" />
                        <div class="sidebarPerfilTexto">
                            <h1>Saga</h1>
                            <h4>segue você</h4>
                        </div>
                        <div class="sidebarPerfilTextoSeguir">
                            <h3>Seguir</h3>
                        </div>
                    </div>
                </div>

                <div class="sugestoesDePerfis">
                    <div class="sugestoesDePerfisPerfil">
                        <img src="imagens/Shaka.jpg" />
                        <div class="sidebarPerfilTexto">
                            <h1>Shaka</h1>
                            <h4>segue você</h4>
                        </div>
                        <div class="sidebarPerfilTextoSeguir">
                            <h3>Seguir</h3>
                        </div>
                    </div>
                </div>

        <FinalText />

        </div>    
    );
}

function FinalText() {
    return (
        <><p> <a href="http://instagram.com">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
            Termos • Localizações • Contas mais relevantes • Hashtags •
            Idioma</a></p><p>© 2021 INSTAGRAM DO FACEBOOK</p></>
    );
}


function App() {
    return (
        <div>
            <Topo />
            <TopoMobile />
            <Page />
            <RodaPeMobile />
        </div>
    );
}

const app = App();
ReactDOM.render(<App />, document.querySelector(".root"));