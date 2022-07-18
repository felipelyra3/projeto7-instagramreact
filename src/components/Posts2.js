import React from "react";

const postsProps = [
    { imgProfile: "/imagens/trans.jpg", h1: "LGBTQIA+", imgPost: "/imagens/Kurama.png", imgLikes: "/imagens/Shun.jpg", nameLikes: "Shun", nLikes: "101.523" },
    { imgProfile: "imagens/Sakura2.jpg", h1: "Sakura", imgPost: "imagens/SakuraEYue.jpg", imgLikes: "imagens/Yue2.jpg", nameLikes: "Yue", nLikes: "101.523" },
    { imgProfile: "imagens/Sailor Jupiter.jpg", h1: "Sailor Jupiter", imgPost: "imagens/Sailor Jupiter.jpg", imgLikes: "imagens/Sakura2.jpg", nameLikes: "Sakura", nLikes: "101.523" },
    { imgProfile: "imagens/Shun.jpg", h1: "Shun", imgPost: "imagens/Hyoga.jpg", imgLikes: "imagens/Hyoga.jpg", nameLikes: "Hyoga", nLikes: "101.523" }
];

function PostItems(props) {
    const [corBotao, setCorBotao] = React.useState("heart");
    const [contador, setContador] = React.useState(101523);
    const [heartState, setHeartState] = React.useState("heart-outline");

    function verifyLike() {
        if(corBotao === "heart") {
            setCorBotao("red");
            setContador(contador + 1);
            setHeartState("heart")
        } else {
            setCorBotao("heart");   
            setContador(contador - 1);
            setHeartState("heart-outline")
        }
        return corBotao;
    }

    return (
        <div class="caixaDePosts">
            <div class="post">
                <div class="postTopo">
                    <img src={props.imgProfile} />
                    <div class="postPerfil">
                        <h1>{props.h1}</h1>
                        <h2>...</h2>
                    </div>
                </div>
                <img src={props.imgPost} />

                <div class="postRodape">
                    <div class="postRodapeIcones">
                        <div class="postRodapeIconesDireita">
                            <ion-icon name={heartState} class={corBotao} onClick={() => verifyLike()}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div class="postRodapeIconesEsquerda">
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="postRodapeCurtidas">
                        <img src={props.imgLikes} />
                        <p>Curtido por <strong>{props.nameLikes}</strong> e <strong>outras {contador} pessoas</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default function Posts() {
    return(
        <div class="caixaDePosts">
            {postsProps.map(postsProps => (<PostItems imgProfile={postsProps.imgProfile} h1={postsProps.h1} imgPost={postsProps.imgPost} imgLikes={postsProps.imgLikes} nameLikes={postsProps.nameLikes} nLikes={postsProps.nLikes} />))}
        </div>
    );
}