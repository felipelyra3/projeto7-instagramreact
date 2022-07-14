import ReactDOM from 'react-dom';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import FooterMobile from './components/FooterMobile';
import Page from './components/Page';

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