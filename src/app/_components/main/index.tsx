
import FilledBtn from '@/components/button/filledBtn';
import styles from '../../page.module.scss';
import OutlinedBtn from '@/components/button/outlinedBtn';
import Image from 'next/image';

import testImage from '@public/LighterLogo.svg';

export default function Main() {
    return (
        <main className={styles.main}>
            <section className={styles.landing}>
                <h1>
                    <span>Lighter</span>
                    <br />
                    PHP Framework
                </h1>
                <p>
                    Lighter is a light, easy to use and intuitive PHP framework.
                    It allows you to fully create an app in a simple way while leaving full control of what you are doing.
                </p>
                <div>
                    <FilledBtn text='Get started' href='/learn' className={styles.btn}></FilledBtn>
                    <OutlinedBtn text='Documentation' href='/documentation' className={styles.btn}></OutlinedBtn>
                </div>
            </section>

            <section className={styles.exemples}>
                <article className={styles.left}>
                    <div>
                        <span>
                            <h2>Full control over your project</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, pariatur? Suscipit, repellat similique ipsa aperiam consequuntur dolores numquam tempora, quo aspernatur inventore illo non explicabo necessitatibus doloribus commodi quos sunt!</p>
                        </span>

                        <OutlinedBtn text='Learn more' href='/documentation#fullcontrol'></OutlinedBtn>
                    </div>

                    <Image className={styles.image} src={testImage} alt='Exemple of code' priority={true}></Image>
                </article>
                <article>
                    <Image className={styles.image} src={testImage} alt='Schema of customizations'></Image>

                    <div>
                        <span>
                            <h2>Customizable frontend</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint id autem blanditiis iure. Voluptate dolores velit praesentium. Ducimus fugit perspiciatis veritatis facere fuga commodi! Deleniti perspiciatis ipsum animi rem ex.</p>
                        </span>

                        <OutlinedBtn text='Learn more' href='/documentation#custom'></OutlinedBtn>
                    </div>
                </article>
            </section>
        </main>
    )
}