import React from "react";
export default function Posts(props) {
    const postsProps = [
        { imgProfile: "/imagens/trans.jpg", h1: "LGBTQIA+", imgPost: "/imagens/Kurama.png", imgLikes: "/imagens/Shun.jpg", nameLikes: "Shun", nLikes: "12" },
        { imgProfile: "imagens/Sakura2.jpg", h1: "Sakura", imgPost: "imagens/SakuraEYue.jpg", imgLikes: "imagens/Yue2.jpg", nameLikes: "Yue", nLikes: "101" },
        { imgProfile: "imagens/Sailor Jupiter.jpg", h1: "Sailor Jupiter", imgPost: "imagens/Sailor Jupiter.jpg", imgLikes: "imagens/Sakura2.jpg", nameLikes: "Sakura", nLikes: "2330" },
        { imgProfile: "imagens/Shun.jpg", h1: "Shun", imgPost: "imagens/Hyoga.jpg", imgLikes: "imagens/Hyoga.jpg", nameLikes: "Hyoga", nLikes: "101523" }
    ];
    function PostItem(props){
        const [corBotao, setCorBotao] = React.useState("heart");
        const [contador, setContador] = React.useState(props.nLikes);
        const [heartState, setHeartState] = React.useState("heart-outline");    
        return(
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
                        <ion-icon name={heartState} class={corBotao} onClick={() => {
                            if(corBotao === "heart") {
                                setCorBotao("red");
                                setContador(contador + 1);
                                setHeartState("heart")
                            } else {
                                setCorBotao("heart");
                                setContador(contador - 1);
                                setHeartState("heart-outline")
                            }
                        }}></ion-icon>
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
);}
    
    return (
        <div class="todosOsPosts">
             {postsProps.map(post =>(<PostItem imgProfile= {post.imgProfile} h1= {post.h1} imgPost={post.imgPost} imgLikes= {post.imgLikes} nameLikes={post.nameLikes} curtiu={post.curtiu} nLikes ={post.nLikes}/>))} 
       </div>
    );
}