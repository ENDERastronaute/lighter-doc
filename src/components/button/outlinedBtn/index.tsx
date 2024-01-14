
import props from '../props';
import Link from 'next/link';
import styles from './index.module.scss';

export default function OutlinedBtn({ text="", href, className="", onClick }: props) {
    return (
        <>
            {
                href
                ? <Link href={href} className={`${styles.btn} ${className}`} onClick={onClick}><span>{text}</span></Link>
                : <button className={`${styles.btn} ${className}`} onClick={onClick}><span>{text}</span></button>
            }
        </>
    )
}