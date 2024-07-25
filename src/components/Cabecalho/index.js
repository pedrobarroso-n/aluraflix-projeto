import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';;

function Cabecalho() {

    const themes = {
        border: '2px solid var(--azul)',
        boxShadow: '0px 0px 12px 4px var(--azul) inset',
        color: 'var(--azul)',
    }

/*
    const icons = document.querySelectorAll("imag.icons");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(()=> {
        const screenResize = ()=> { window.innerWidth < 700 ? setScreenWidth("block") : setScreenWidth("none"); }

        window.addEventListener("resize", screenResize);

        return ()=> { window.removeEventListener("resize", screenResize); }
    }, []);
*/ 
    return (
        <header className={styles.container}>
            <img src='/images/logo.png' alt='Logo do projeto react AluraFlix' />
            <nav>
                <ul className={styles.links}>
                    <li>  
                        <Link to='./'>
                            <img className={styles.icons}
                                src="/images/home.png"
                                alt='icone da aba Home do AluraFlix'
                            />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='./novovideo'>
                            <img className={styles.icons}
                                src="/images/novovideo.png"
                                alt='icone da aba Novo Vídeo do AluraFlix'
                            />
                             <p>Novo Vídeo</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header> 
    )
}

export default Cabecalho;