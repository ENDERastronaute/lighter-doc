import Link from "next/link";
import styles from '../../page.module.scss';

interface ListLinkProps {
    href: string;
    activeSection: string;
    children?: React.ReactNode;
}

export default function ListLink({ href, activeSection, children }: ListLinkProps) {
    return (
        <li className={`#${activeSection}` === href ? styles.active : ''}><Link href={href}>{children}</Link></li>
    )
}