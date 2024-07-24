import styles from './Rodape.module.css';

function Rodape() {
    return (
        <footer className={styles.container}>
            <img src="/images/logo.png" alt='Logo do projeto react AluraFlix' />
        </footer>
    )
}

export default Rodape;