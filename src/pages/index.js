// / import Head from 'next/head'
import Image from 'next/image'
import styles from 'src/commons/styles/Landing.module.css'
import Link from 'next/link'
import Layout from 'src/commons/components/Layout'

import phonesvg from 'src/assets/svg/phone.svg'
import lockSvg from 'src/assets/svg/lock-landing.svg'
import downloadSvg from 'src/assets/svg/download.svg'

import microsoftSvg from 'src/assets/svg/microsoft.svg'
import dropboxSvg from 'src/assets/svg/dropbox.svg'
import HMSvg from 'src/assets/svg/HM.svg'
import airBnBSvg from 'src/assets/svg/airBnB.svg'
import cannonSVG from 'src/assets/svg/cannon.svg'
import dellSvg from 'src/assets/svg/dell.svg'

import phone1 from 'src/assets/img/png-phone.png'
import phone2 from 'src/assets/img/png-phone2.png'

import arrowRight from 'src/assets/svg/arrow-right.svg'
import arrowLeft from 'src/assets/svg/arrow-left.svg'

import dummyProfile from 'src/assets/img/dummy-profile-1.jpg'

const Landing = () => {
  return (
    <Layout title='Zwallet - Digital Wallet'>
      <header className={styles['background-blue-liner']}>
        <nav className='container-fluid'>
          <div className='container d-flex justify-content-between'>
            <h1 className={`mt-4 ${styles['zwallet-head']}`}>Zwallet</h1>
            <div className='mt-4'>
              <Link href='/auth/login' passHref>
                <button className={`btn px-3 btn border-2 border-light text-light ${styles['btn-login-active']}`}>Login</button>
              </Link>
              <Link href='/auth/register' passHref>
                <button className={`mx-2 btn btn-light text-primary ${styles['btn-signup-active']}`}>Sign Up</button>
              </Link>
            </div>
          </div>
        </nav>

        <div className='container mt-5'>
          <div className={styles['saving-flex']}>
            <div className={styles['saving-text']}>
              <h1>Awesome App For Saving Time.</h1>
              <p className='mt-5'>We Bring you a mobile app for banking problems that oftenly wasting much of your times</p>
            </div>
            <button className='mt-5 btn btn-light text-primary'>Try It Free</button>
          </div>
        </div>
      </header>

      <main className={styles['container-main']} style={{ background: '#F0F0F0' }}>
        <section className='container p-5'>
          <h2 className='text-center'><span className='text-primary'>Why</span> Choose Zwallet?</h2>
          <div className='d-flex justify-content-center'>
            <p className={`mt-2 text-center ${styles['decrip']}`}>We have some great features from the application and it`s totally free to use by all users arround the world.</p>
          </div>
          <div className='d-flex justify-content-center mt-4'>
            <div className='row justify-content-between'>
              <div className='col-sm'>
                <div className={`p-3 ${styles['box-card']}`}>
                  <div className={styles['box-circle']}>
                    <Image src={phonesvg} alt='phone' />
                  </div>
                  <h3>24/7 Support</h3>
                  <p className='text-center'>We have 24/7 contact support so you can contacts us wherener you want and we will respond it.</p>
                </div>
              </div>
              <div className='col-sm'>
                <div className={`p-3 ${styles['box-card']}`}>
                  <div className={styles['box-circle']}>
                    <Image src={lockSvg} alt='phone' />
                  </div>
                  <h3>Data Privacy</h3>
                  <p className='text-center'>We make sure your data is safe in out database and we will encrypt any data you submitted to us.</p>
                </div>
              </div>
              <div className='col-sm'>
                <div className={`p-3 ${styles['box-card']}`}>
                  <div className={styles['box-circle']}>
                    <Image src={downloadSvg} alt='phone' />
                  </div>
                  <h3>Easy Download</h3>
                  <p className='text-center'>Zwallet is 100% totally free to use it`s now available on Google Play Store and App Store.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: '#DCDCDC' }}>
          <div className='container pt-5 pb-3'>
            <div className='d-flex justify-content-between flex-wrap'>
              <Image src={microsoftSvg} width={100} alt='microsoft' />
              <Image src={dropboxSvg} width={100} alt='Dropbox' />
              <Image src={HMSvg} width={60} alt='HM' />
              <Image src={airBnBSvg} width={100} alt='airBnB' />
              <Image src={cannonSVG} width={100} alt='cannon' />
              <Image src={dellSvg} width={50} alt='del' />
            </div>
          </div>
        </section>

        <section>
          <div className='container p-5'>
            <div className='d-flex flex-column justify-content-center'>
              <div className='d-flex justify-content-center'>
                <div className={styles['box-money']}>
                  <h3 className={`text-center text-primary ${styles['money-text']}`}>Rp. 390.736.500</h3>
                </div>
              </div>
              <h2 className='mt-3 text-center'><span className='text-primary'>Money</span> has Been Transfered.</h2>
              <div className='d-flex justify-content-center'>
                <p className={`mt-3 text-center ${styles['decrip']}`}>The amount of money has been transfered from all users. We still Counting and going strong!</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: '#DCDCDC' }} >
          <div className='pt-5 pb-3'>
            <div className={styles['flex-greet']}>

              <div className={styles['position-phone']}>
                <Image src={phone1} alt='phone1' />
                <span className={styles['position-phone-2']}>
                  <Image src={phone2} alt='phone1' />
                </span>
              </div>

              <div className={styles['position-greet']} >
                <h2>All The <span className='text-primary'>Greet</span></h2>
                <div className={styles['box-greet']}>
                  <p style={{ fontWeight: 'bold' }}><span className='text-primary'>1.</span> Small Free</p>
                  <p>We Only charge 5% of every success transaction done in Zwallet app</p>
                </div>
                <div className={styles['box-greet']}>
                  <p style={{ fontWeight: 'bold' }}><span className='text-primary'>2.</span> Data Secured</p>
                  <p>All your data is secured properly in our system and it’s encrypted.</p>
                </div>
                <div className={styles['box-greet']}>
                  <p style={{ fontWeight: 'bold' }}><span className='text-primary'>3.</span> User Friendly</p>
                  <p>Zwallet come up with modern and sleek design and not complicated.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='container p-5'>
            <div className='text-center'>
              <h2 style={{ fontWeight: 'bold' }}>What Users are <span className='text-primary'>Saying.</span></h2>
              <div className='d-flex justify-content-center'>
                <p className={`mt-2 text-center ${styles['decrip']}`}>We have some great features from the application and it`s totally free to use by all users arround the world.</p>
              </div>
            </div>

            <div className={styles['flex-profile']}>
              <div className={styles['box-arrow']}>
                <Image src={arrowRight} alt='arrow-Right' />
              </div>
              <div>
                <div className={`text-center ${styles['box-profile']}`}>
                  <Image src={dummyProfile} alt='dumy-profile' />
                  <h4 className='mt-2'>Alex Hansinburg</h4>
                  <p>Designer</p>
                  <div className='d-flex justify-content-center'>
                    <p className={`mt-2 text-center ${styles['decrip']}`}>
                      “This is the most outstanding app that I`ve ever try in my live, this app is such an amazing masterpiece and it`s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles['box-arrow']}>
                <Image src={arrowLeft} alt='arrow-left' />
              </div>
            </div>
          </div>
        </section>

        <footer style={{ background: '#6379F4' }}>
          <div className='container p-5'>
            <h1 className={`mt-4 ${styles['zwallet-head']}`}>Zwallet</h1>
            <p className={`mt-2 pb-4 text-light ${styles['decrip-footer']}`}>
              Simplify financial needs and saving much time in banking needs with one single app.
            </p>
            <div className={styles['flex-footer']}>
              <p className='text-light'>2020 Zwallet. All right reserved.</p>
              <div className={styles['flex-footer-right']}>
                <p className='text-light'>+62 5637 8882 9901</p>
                <p className='text-light'>contact@zwallet.com</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </Layout >
  )
}



export default Landing