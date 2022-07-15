const sidebarProps = [
    { img: "imagens/Hyoga.jpg", h1: "Hyoga", h4: "segue você" },
    { img: "imagens/Shun.jpg", h1: "Shun", h4: "segue você" },
    { img: "imagens/Shiryu.jpg", h1: "Shiryu", h4: "Novx no Instagram" },
    { img: "imagens/Saga.jpg", h1: "Saga", h4: "segue você" },
    { img: "imagens/Shaka.jpg", h1: "Shaka", h4: "segue você" }
];

function FinalText() {
    return (
        <><p> <a href="http://instagram.com">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
            Termos • Localizações • Contas mais relevantes • Hashtags •
            Idioma</a></p><p>© 2021 INSTAGRAM DO FACEBOOK</p></>
    );
}

function SidebarItems2() {
    const componentsSidebar = sidebarProps.map(sidebarProps => <>
        <div class="sugestoesDePerfis">
            <div class="sugestoesDePerfisPerfil">
                <img src={sidebarProps.img} />
                <div class="sidebarPerfilTexto">
                    <h1>{sidebarProps.h1}</h1>
                    <h4>{sidebarProps.h4}</h4>
                </div>
                <div class="sidebarPerfilTextoSeguir">
                    <h3>Seguir</h3>
                </div>
            </div>
        </div>
    </>);
    return (componentsSidebar);
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

function SidebarUser(props) {
    return (
        <div class="sidebarPerfil">
            <img src={props.img} />
            <div class="sidebarPerfilTexto">
                <h1>{props.h1}</h1>
                <h2>{props.h2}</h2>
            </div>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div class="sidebar">
            <SidebarUser img="imagens/Yue.jpg" h1="CardCaptorsYue" h2="Yue" />

            <div class="sidebarLinhaHorizontal"></div>

            <div class="sugestoesParaVoceTexto">
                <h1>Sugestões para você</h1>
                <h2>ver tudo</h2>
            </div>

            <SidebarItems2 />

            {/* <SitebarItems img="imagens/Hyoga.jpg" h1="Hyoga" h4="segue você" />
            <SitebarItems img="imagens/Shun.jpg" h1="Shun" h4="segue você" />
            <SitebarItems img="imagens/Shiryu.jpg" h1="Shiryu" h4="Novx no Instagram" />
            <SitebarItems img="imagens/Saga.jpg" h1="Saga" h4="segue você" />
            <SitebarItems img="imagens/Shaka.jpg" h1="Shaka" h4="segue você" /> */}

            <FinalText />

        </div>
    );
}