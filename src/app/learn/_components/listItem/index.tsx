
interface ListItemProps {
    title?: string;
    className?: string;
    handleClick: (evt: any) => void;
    children?: React.ReactNode;
}

export default function ListItem({ title, className, handleClick, children }: ListItemProps) {
    return (
        <li className={`${className} navli`} onClick={handleClick}>
            <h2>{title}</h2>
            <ul className='navul'>
                {children}
            </ul>
        </li>
    )
}