import styles from './Botao.module.css';

function Botao ({ icone='', children }) {
    return (
        <button className={styles.botao}>
            <p>
                {children}
            </p>
        </button>
    )
}

export default Botao;