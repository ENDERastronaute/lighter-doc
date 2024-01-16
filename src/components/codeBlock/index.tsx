'use client'

import { useRef } from 'react';
import styles from './index.module.scss';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

interface CodeBlockProps {
    children?: React.ReactNode;
}

export default function CodeBlock({ children }: CodeBlockProps) {
    const codeRef = useRef<HTMLPreElement>(null);
    const btn1Ref = useRef<HTMLButtonElement>(null);
    const btn2Ref = useRef<HTMLButtonElement>(null);

    const toggleClassnames = () => {
        btn1Ref.current!.classList.toggle(styles.active);
        btn2Ref.current!.classList.toggle(styles.active);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(codeRef.current!.innerHTML);

        toggleClassnames();

        setTimeout(toggleClassnames, 2000)
    }

    return (
        <div className={styles.block}>
            <pre ref={codeRef}>
                {`${children}`}
            </pre>
            <button className={`${styles.btn} ${styles.active}`} onClick={handleCopy} ref={btn1Ref}><ContentCopyIcon className={styles.icon}></ContentCopyIcon></button>
            <button className={styles.btn} onClick={handleCopy} ref={btn2Ref}><ContentPasteIcon className={styles.icon}></ContentPasteIcon></button>
        </div>
    )
}