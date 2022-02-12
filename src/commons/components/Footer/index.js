import styles from 'src/commons/styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={`${styles['footer']}`}>
                <p className={`${styles['copyright-text']}`}>2020 Zwallet. All right reserved.</p>
                <p className={`${styles['number-phone-text']}`}>+62 5637 8882 9901</p>
                <p className={`${styles['contact-text']}`}>contact@zwallet.com</p>
            </footer>
        </>
    )
}

export default Footer
