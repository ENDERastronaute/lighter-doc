
import NavigableSection from '@/components/navigableSection';
import styles from '../../page.module.scss';
import CodeBlock from '@/components/codeBlock';
import Link from 'next/link';
import Exemple from '@/components/exemple';

export default function Main() {
    return (
        <main className={styles.main}>
            <section id="installation">
                <h2>Installation</h2>
                <p>We'll see through this guide how you can install Lighter.</p>
                <p>There are two main ways to install Lighter, Composer or Git.</p>

                <NavigableSection id='install-composer'>
                    <h3><span>#</span> Using Composer</h3>
                    <p>You can use Composer to install Lighter.</p>
                    <CodeBlock>composer create-project enderastronaute/lighter app-name</CodeBlock>
                </NavigableSection>
                <NavigableSection id='install-git'>
                    <h3><span>#</span> Using Git</h3>
                    <p>You can use Git to install test versions of lighter.</p>
                    <CodeBlock>git clone https://github.com/ENDERastronaute/Lighter.git</CodeBlock>
                </NavigableSection>
            </section>
            <section id='setup'>
                <h2>Routes</h2>
                <p>Now that you've installed Lighter your app needs to be setup.</p>

                <NavigableSection id='basic'>
                    <h3><span>#</span> Basic</h3>
                    <p>Good for basic apps, prefer <Link className='link' href='#mvc'>MVC</Link> for more complex ones.</p>
                    <p>Open <Exemple>routes/Web.php</Exemple> and add your first route.</p>
                    <CodeBlock>{`Router::GET('/', function () {
    return view('exemple');
})`}
                    </CodeBlock>
                    <p>This will render <Exemple>/app/Views/exemple.php</Exemple>. See <Link href='/documentation/#view-function' className='link'>view()</Link> for more informations</p>
                </NavigableSection>
                <NavigableSection id='mvc'>
                    <h3><span>#</span> MVC</h3>
                    <p>Lighter is mainly made for the MVC approach.</p>
                    <p>You'll need a controller. create one with the command below.</p>
                    <CodeBlock>php project create:controller Exemple</CodeBlock>

                    <p>This will create <Exemple>/app/Controllers/ExempleController.php</Exemple>, modify its show() method.</p>
                    <CodeBlock>return view('exemple');</CodeBlock>

                    <p>Now that the controller is created head back to <Exemple>/routes/Web.php</Exemple>.</p>
                    <p>Add the controller namespace at the top of the page.</p>
                    <CodeBlock>use App\Controllers\ExempleController</CodeBlock>

                    <p>Now create a new route and give it the show method of your controller.</p>
                    <CodeBlock>Router::GET('/', [ExempleController::class, 'show']);</CodeBlock>

                    <p>Fun fact : we use an array because in PHP an array with a class and the name of a method is a callable object.</p>
                    <p>It can be called by <Link href='https://www.php.net/manual/fr/function.call-user-func.php' target='_blank' rel='nooperator noreferrer' className='link'>call_user_func()</Link>.</p>
                </NavigableSection>
            </section>
        </main>
    )
}