import { useState } from 'react'
import Layout from 'src/commons/components/Layout'
import Rectangle from 'src/commons/components/Rectangle'
import style from 'src/commons/styles/pin.module.css'

const Pin = () => {
    const [pin, setPin] = useState({})
    const inputPin = (event) => {
        if (event.target.value) {
            const pinNext = document.getElementById(`pin-${parseInt(event.target.name, 10) + 1}`)
            if (pinNext !== null) { pinNext.focus() }
        }
        setPin = ({ ...pin, [`pin${event.target.name}`]: event.target.value })
    }

    const handleSubmit = () => {
        const allPin = pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6
    }
    return (
        <Layout title='Zwallet - Create Pin'>
            <Rectangle>
                <div className='container'>
                    <h4 className={`start-access-text ${style['start-access-text']}`}>
                        Secure Your Account, Your Wallet,
                        and Your Data With 6 Digits PIN
                        That You Created Yourself.
                    </h4>
                    <p className={`description-text ${style['description-text']}`}>
                        Create 6 digits pin to secure all your money and your data in Zwallet app.
                        Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.
                    </p>
                    <form id='container-fluid'>
                        <div className={`row justify-content-between m-0 ${style['justify-content-between']}`}>
                            <div className='col-1'>
                                <input className={`${style['input-pin']}`} maxLength='1' name='1' id='pin-1' onChange={(event) => inputPin(event)} />
                            </div>
                            <div className='col-1'>
                                <input className={`${style['input-pin']}`} maxLength='1' name='2' id='pin-2' onChange={(event) => inputPin(event)} />
                            </div>
                            <div className='col-1'>
                                <input className={`${style['input-pin']}`} maxLength='1' name='3' id='pin-3' onChange={(event) => inputPin(event)} />
                            </div>
                            <div className='col-1'>
                                <input className={`${style['input-pin']}`} maxLength='1' name='4' id='pin-4' onChange={(event) => inputPin(event)} />
                            </div>
                            <div className='col-1'>
                                <input className={`${style['input-pin']}`} maxLength='1' name='5' id='pin-5' onChange={(event) => inputPin(event)} />
                            </div>
                            <div className='col-1'>
                                <input className={`${style['input-pin']}`} maxLength='1' name='6' id='pin-6' onChange={(event) => inputPin(event)} />
                            </div>
                        </div>
                        <button className={`btn-auth ${style['btn-auth']}`} onClick={handleSubmit}>Confirm</button>
                    </form>
                </div>
            </Rectangle>
        </Layout>
    )
}

export default Pin