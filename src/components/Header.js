export default function Header() {
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