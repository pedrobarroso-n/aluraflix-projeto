import styles from './TituloSecao.module.css';

function TituloSecao({ color, children }) {
    return <h2 style={{ backgroundColor: color }}>{children}</h2>
}

export default TituloSecao;