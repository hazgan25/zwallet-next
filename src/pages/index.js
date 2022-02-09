// import Head from 'next/head'
// import Image from 'next/image'
// import styles from 'src/commons/styles/Home.module.css'
import Link from 'next/link'
import Layout from 'src/commons/components/Layout'

const Home = () => {
  return (
    <Layout title='Zwallet - Digital Wallet'>
      <Link href='/auth/login' passHref>
        <button>Login</button>
      </Link>
      <Link href='/auth/register' passHref>
        <button>Register</button>
      </Link>
    </Layout>
  )
}



export default Home