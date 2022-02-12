import styles from 'src/commons/styles/Rectangle.module.css'
import Image from 'next/image'
import Phone from 'src/assets/img/png-phone.png'
import PhoneTwo from 'src/assets/img/png-phone2.png'

const Rectangle = ({ children }) => {
    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <section className="col-sm p-0">
                        <div className={`${styles['background-blue-linear']}`}>
                            <h4 className={`${styles['brand-text']}`}>Zwallet</h4>

                            <div className={`${styles['phone']}`}>
                                <div className={`${styles['phone-one']}`}>
                                    <Image src={Phone} alt="Phone 1" />
                                </div>
                                <div className={`${styles['phone-two']}`}>
                                    <Image src={PhoneTwo} alt="Phone 2" />
                                </div>
                            </div>
                            <h5 className={`${styles['app-banking-text']}`}>App that Covering Banking Needs.</h5>
                            <p className={`${styles['decription-app-text']}`}>
                                Zwallet is an application that focussing in banking needs for all users
                                in the world. Always updated and always following world trends.
                                5000+ users registered in Zwallet everyday with worldwide
                                users coverage.
                            </p>
                        </div>
                    </section>
                    <section className='col-sm'>
                        {children}
                    </section>
                </div>
            </div>

        </>
    )
}

export default Rectangle