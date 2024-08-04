import Botao from 'components/Botao';
import styles from './Formulario.module.css';

function Formulario () {
    return (
        <main>
            <div className={styles.titulo}>
                <h1>novo vídeo</h1>
                <h2>Complete o formulário para criar um novo card de vídeo.</h2>
            </div>
            <form className={styles.formulario}>
                <h3>Criar Card</h3>
                <div>
                    <Botao>guardar</Botao>
                    <Botao>limpar</Botao>
                </div>
            </form>
        </main>
    )
}

export default Formulario;