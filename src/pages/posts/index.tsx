import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>05 de outubro de 2022</time>
            <strong>Título Original do Meu Novo Post</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem vitae sequi aliquam error repellendus,
              quaerat unde quasi nostrum. Eos et quasi in dolores ullam perferendis quis eveniet iure nisi impedit!
            </p>
          </a>
          <a href="">
            <time>05 de outubro de 2022</time>
            <strong>Título Original do Meu Novo Post</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem vitae sequi aliquam error repellendus,
              quaerat unde quasi nostrum. Eos et quasi in dolores ullam perferendis quis eveniet iure nisi impedit!
            </p>
          </a>
          <a href="">
            <time>05 de outubro de 2022</time>
            <strong>Título Original do Meu Novo Post</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem vitae sequi aliquam error repellendus,
              quaerat unde quasi nostrum. Eos et quasi in dolores ullam perferendis quis eveniet iure nisi impedit!
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
