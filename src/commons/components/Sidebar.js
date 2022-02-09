import styles from 'src/commons/styles/Sidebar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const router = useRouter()
    return (
        <>
            <div className={`${styles['sidebar']} ${styles['sidebar-top']}`}>

                <div className={`row ${styles['row']}`}>
                    <div className={`col ${styles['col']}`}>
                        <Link href='/home' passHref>
                            <h5 className={router.pathname == '/home' ? `bi bi-grid ${styles['bi-blue']}` : `bi bi-grid ${styles['bi']}`}>
                                <span className={router.pathname == '/home' ? `${styles['dashboard-text-blue']}` : `${styles['dashboard-text']}`}>
                                    Dashboard
                                </span>
                            </h5>
                        </Link>
                    </div>
                    <div className={`col ${styles['col']}`}>
                        <Link href='/home/transfer' passHref>
                            <h5 className={router.pathname == '/transfer' ? `bi bi-arrow-up ${styles['bi-blue']}` : `bi bi-arrow-up ${styles['bi']}`}>
                                <span className={router.pathname == '/transfer' ? `${styles['dashboard-text-blue']}` : `${styles['dashboard-text']}`}>
                                    Transfer
                                </span>
                            </h5>
                        </Link>
                    </div>
                </div>

                <div className={`row ${styles['row']}`}>
                    <div className={`col ${styles['col']}`}>
                        <Link href='/home/topup' passHref>
                            <h5 className={router.pathname == '/topup' ? `bi bi-plus-lg ${styles['bi-blue']}` : `bi bi-plus-lg ${styles['bi']}`}>
                                <span className={router.pathname == '/topup' ? `${styles['dashboard-text-blue']}` : `${styles['dashboard-text']}`}>
                                    Top Up
                                </span>
                            </h5>
                        </Link>
                    </div>
                    <div className={`col ${styles['col']}`}>
                        <Link href='/home/profile' passHref>
                            <h5 className={router.pathname == '/profile' ? `bi bi bi-person ${styles['bi-blue']}` : `bi bi bi-person ${styles['bi']}`}>
                                <span className={router.pathname == '/profile' ? `${styles['dashboard-text-blue']}` : `${styles['dashboard-text']}`}>
                                    Profile
                                </span>
                            </h5>
                        </Link>
                    </div>
                </div>

                <Link href='/logout' passHref>
                    <h5 className={`bi bi-box-arrow-right ${styles['bi']} ${styles['logout']}`}>
                        <span className={`${styles['dashboard-text']}`}>
                            Logout
                        </span>
                    </h5>
                </Link>

            </div>
        </>
    )
}

export default Sidebar