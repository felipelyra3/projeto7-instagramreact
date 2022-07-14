function StoriesItems(props) {
    return (
        <div class="storiesComBorda">
            <div class="bordaDosStories">
                <img src={props.img} />
            </div>
            <p>{props.p}</p>
        </div>
    );
}

export default function Stories() {
    return (
        <div class="caixaDosStories">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            <StoriesItems img="/imagens/9gag.jpg" p="9gag"/>
            <StoriesItems img="/imagens/Sakura1.jpg" p="Sakura"/>
            <StoriesItems img="/imagens/Sakura2.jpg" p="Sakura2"/>
            <StoriesItems img="/imagens/Sailor Jupiter.jpg" p="Sailor..."/>
            <StoriesItems img="/imagens/lgbtqia.jpg" p="LGBT..."/>
            <StoriesItems img="/imagens/trans.jpg" p="Trans"/>
            <StoriesItems img="/imagens/lgbtqiaEtrans.webp" p="LGBT..."/>
            <StoriesItems img="/imagens/Kurama.png" p="Kurama"/>
            <StoriesItems img="/imagens/Shun.jpg" p="Shun"/>
            <StoriesItems img="/imagens/Yue.jpg" p="Yue"/>
        </div>
    );
}