
import styles from './index.module.scss';

interface ExempleProps {
    children?: React.ReactNode;
}

export default function Exemple({ children }: ExempleProps) {
    return (
        <span className={styles.exemple}>
            {children}
        </span>
    )
}