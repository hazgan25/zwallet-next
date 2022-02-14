import Layout from 'src/commons/components/Layout'
import MenuHome from 'src/commons/components/MenuHome'
import styles from 'src/commons/styles/TransferId.module.css'
import Image from 'next/image'
import photoDefault from 'src/assets/img/profile-default.png'
import { useDispatch, useSelector } from 'react-redux'
import { transferUserAction, transferParamAction } from 'src/redux/actions/transfer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import formatRupiah from 'src/modules/helper/formarterRupiah'
import Swal from 'sweetalert2'

const TransferById = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const state = useSelector((state) => state)

    const [transfer, setTransfer] = useState(transaction)
    const { transaction } = state.userTransfer
    const { userData } = state.user

    const { token } = state.auth.userData
    const { balance } = userData

    const transferId = router.query.transferId ?? ''
    // console.log(transferId)
    // console.log(state.userTransfer.userData)
    const { image, firstName, lastName, noTelp } = state.userTransfer.userData


    // console.log(...transfer)
    const handleAmount = (e) => {
        const param = { ...transfer, amount: parseInt(e.target.value) }
        setTransfer(param)
        dispatch(transferParamAction(param))
    }

    const handleNotes = (e) => {
        const param = { ...transfer, notes: e.target.value }
        dispatch(transferParamAction(param))
    }

    const handleContinue = () => {
        if (balance < transfer.amount) {
            Swal.fire({
                icon: 'error',
                title: 'Oops... Something went wrong!',
                text: 'Your balance is not enough',
            })
        }
        dispatch(transferParamAction(transfer))
        router.push('/home/confirmation')
    }

    useEffect(() => {
        // const param = { ...transfer, receiverId: transferId }
        setTransfer({ ...transfer, receiverId: transferId })
        dispatch(transferUserAction(transferId, token))
    }, [])
    return (
        <>
            <Layout title='Zwallet - Transfer'>
                <MenuHome>
                    <div className={`${styles['transfer-box']}`} style={{ height: '100%' }}>
                        <div className='container'>
                            <h5 className={`${styles['transfer-text']}`}>Transfer Money</h5>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles['wrapper-user']}`}>

                                    <Image src={!image ? photoDefault :
                                        !`${process.env.NEXT_PUBLIC_IMAGE_USER}/${image}` ? photoDefault :
                                            photoDefault
                                    }
                                        alt='avatar' className='rounded' height={56} width={56} objectFit='cover'
                                    />
                                    <p className={`${styles['name-text']}`}>{firstName} {lastName}</p>
                                    <p className={`${styles['phone-text']}`}>{noTelp}</p>
                                </div>
                                <p className={`${styles['type-amount-text']}`}>Type the amount you want to transfer and then press continue to the next steps.</p>
                                <input type='number' className={`${styles['input-amount']}`} placeholder='0' onChange={handleAmount} />
                                <p className={`${styles['available-text']}`}>{`Rp.${formatRupiah(balance)} Available`}</p>
                                <input className={`${styles['note-text']}`} placeholder='Add some notes' onChange={handleNotes} />
                                <i className={`bi bi-pencil ${styles['bi']}`}></i>

                            </div>

                            <div>
                                <button className={`btn btn-primary ${styles['button']}`} onClick={handleContinue}>Continue</button>
                            </div>
                        </div>

                    </div>
                </MenuHome>
            </Layout>
        </>
    )
}

export default TransferById