
import NavigableSection from '@/components/navigableSection';
import styles from '../../page.module.scss';
import CodeBlock from '@/components/codeBlock';

export default function Main() {
    return (
        <main className={styles.main}>
            <section id="installation">
                <h2>Installation</h2>
                <p>We'll see through this guide how you can install Lighter.</p>

                <NavigableSection id='install-composer'>
                    <h3><span>#</span> Using Composer</h3>
                    <p>You can use Composer to install Lighter.</p>
                    <CodeBlock>composer install enderastronaute/lighter</CodeBlock>
                </NavigableSection>
                <NavigableSection id='install-git'>
                    <h3><span>#</span> Using git</h3>
                    <p>You can use git to install test versions of lighter.</p>
                    <CodeBlock>git clone https://github.com/ENDERastronaute/Lighter.git</CodeBlock>
                </NavigableSection>
                <NavigableSection id='init'>
                    <h3><span>#</span> Using git</h3>
                    <p>You can use git to install test versions of lighter.</p>
                    <CodeBlock>git clone https://github.com/ENDERastronaute/Lighter.git</CodeBlock>
                </NavigableSection>
            </section>
        </main>
    )
}