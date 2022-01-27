import appConfig from '../config.json';
import LinkNav from './LinkNav';

function Header(props) {

    function tema(theme) {
        if(theme == 'light') {
            return appConfig.theme.colors.neutrals['000'];
        } else if(theme == 'dark') {
            return appConfig.theme.colors.neutrals[700];
        } else {
            return appConfig.theme.colors.neutrals['000'];
        }
    }

    function title() {

    }

    return (
        <>
            <header>
                <h1>{ props.title ? props.title : 'titulo' }</h1>
                <ul>
                    {
                        props.children ? props.children : <LinkNav>links</LinkNav>
                    }
                </ul>
            </header>
            <style jsx>{`
                header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: ${props.theme ? tema(props.theme) : tema()};
                    box-shadow: 0 2px 10px 0 rgb(0, 0, 0, 20%);
                    padding: 10px 10px;
                }
                h1 {
                    color: blue;
                    margin: 10px;
                    padding: 5px;
                }
                ul {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 10px;
                    gap: 20px;
                }
                
            `}</style>
        </>
    );
}

export default Header;