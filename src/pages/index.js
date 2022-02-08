// import Head from 'next/head'
// import Image from 'next/image'
// import styles from 'src/commons/styles/Home.module.css'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import Layout from 'src/commons/components/Layout'

const Home = (props) => {
  const [history, setHistory] = useState(null)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (history === null) {
      const token = props.token
    }
  })
  return (
    <Layout title='Zwallet - Digital Wallet'>

    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.userData.id,
    token: state.auth.userData.token,
    userData: state.users.data
  }
}

export default connect(mapStateToProps)(Home)