import appConfig from '../config.json';

function LinkNav(props) {

    function tema(theme) {
        if(theme == 'light') {
            return appConfig.theme.colors.neutrals['999'];
        } else if(theme == 'dark') {
            return appConfig.theme.colors.neutrals['000'];
        } else {
            return appConfig.theme.colors.default.links;
        }
    }

    return (
        <>
            <a  href={props.link ? props.link : ''}
                className='links-nav'
            >
                <li>{props.children ? props.children : 'Clique Aqui'}</li>
            </a>
            <style jsx>{`
                a {
                    text-decoration: none;
                    color: ${props.theme ? tema(props.theme) : tema()};
                    cursor: pointer;
                    padding: 10px;
                    font-weight: 600;
                }
                a:hover {
                    opacity: 60%;
                }
            `}</style>
        </>
    )
}

export default LinkNav;