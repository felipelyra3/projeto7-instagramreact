function FinalText() {
    return (
        <><p> <a href="http://instagram.com">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
            Termos • Localizações • Contas mais relevantes • Hashtags •
            Idioma</a></p><p>© 2021 INSTAGRAM DO FACEBOOK</p></>
    );
}

function SitebarItems(props) {
    return (
        <div class="sugestoesDePerfis">
            <div class="sugestoesDePerfisPerfil">
                <img src={props.img} />
                <div class="sidebarPerfilTexto">
                    <h1>{props.h1}</h1>
                    <h4>{props.h4}</h4>
                </div>
                <div class="sidebarPerfilTextoSeguir">
                    <h3>Seguir</h3>
                </div>
            </div>
        </div>
    );
}

export default function Sidebar() {
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

            <SitebarItems img="imagens/Hyoga.jpg" h1="Hyoga" h4="segue você" />
            <SitebarItems img="imagens/Shun.jpg" h1="Shun" h4="segue você" />
            <SitebarItems img="imagens/Shiryu.jpg" h1="Shiryu" h4="Novx no Instagram" />
            <SitebarItems img="imagens/Saga.jpg" h1="Saga" h4="segue você" />
            <SitebarItems img="imagens/Shaka.jpg" h1="Shaka" h4="segue você" />

            <FinalText />

        </div>
    );
}