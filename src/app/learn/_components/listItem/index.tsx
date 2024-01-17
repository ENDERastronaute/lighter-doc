
interface ListItemProps {
    title?: string;
    handleClick: (evt: any) => void;
    children?: React.ReactNode;
}

export default function ListItem({ title, handleClick, children }: ListItemProps) {
    return (
        <li onClick={handleClick}>
            <h2>{title}</h2>
            <ul className='navul'>
                {children}
            </ul>
        </li>
    )
}