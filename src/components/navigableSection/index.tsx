
interface NavigableSectionProps {
    id: string;
    children: React.ReactNode;
}

export default function NavigableSection({ id, children }: NavigableSectionProps) {
    return (
        <section className='navigable' id={id}>
            {children}
        </section>
    )
}