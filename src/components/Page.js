import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Page() {
    return (
        <div class="pagina">
            <div class="caixaDosStoriesMaisPosts">
            
            <Stories />

            <div class="todosOsPosts">
            
            <Posts />

                
                
                
                </div> {/* Closes all the posts ('.todosOsPosts') */}

        </div> {/* Closes Stories + Posts ('.caixaDosStoriesMaisPosts') */}

        <Sidebar />

        </div> /* Closes all elements in page ('.pagina') */
    );
}