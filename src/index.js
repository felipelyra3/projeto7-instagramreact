import ReactDOM from 'react-dom';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import FooterMobile from './components/FooterMobile';
import Page from './components/Page';

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
            <Header />
            <HeaderMobile />
            <Page />
            <FooterMobile />
        </div>
    );
}

const app = App();
ReactDOM.render(<App />, document.querySelector(".root"));