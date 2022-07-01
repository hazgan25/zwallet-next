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
    const state = useSelector(state => state)
    const router = useRouter()
    const dispatch = useDispatch()

    const { auth } = state
    const { token } = auth.userData
    const { userData, transaction } = state.userTransfer
    const { transferId } = router.query
    const { balance } = state.user.userData
    const { image, firstName, lastName, noTelp } = userData

    const [transfer, setTransfer] = useState(transaction)

    useEffect(() => {
        dispatch(transferUserAction(transferId, token))
    }, [dispatch, token, transferId, transfer])

    const handleAmount = (e) => {
        const param = {
            ...transfer,
            amount: parseInt(e.target.value),
            balance: balance - parseInt(e.target.value),
        }
        setTransfer(param)
        dispatch(transferParamAction(param))
    }
    const handleNotes = (e) => {
        const param = { ...transfer, notes: e.target.value }
        setTransfer(param)
        dispatch(transferParamAction(param))
    }

    const handleContinue = () => {
        if (balance < transfer.amount) {
            Swal.fire({
                icon: 'error',
                title: 'Oops... Something went wrong!',
                text: 'Your balance is not enough',
            })
        } else {
            if (transfer.amount <= 1000) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Something went wrong!',
                    text: 'Please input amount > 1000',
                })
            } else {
                const param = {
                    ...transfer,
                    receiverId: transferId,
                    senderId: auth.userData.id
                }
                dispatch(transferParamAction(param))
                router.push('/home/confirmation')
            }
        }
    }
    return (
        <>
            <Layout title='Zwallet - Transfer'>
                <MenuHome>
                    <div className='container'>
                        <div className={`${styles['transfer-box']}`} style={{ height: '100%' }}>
                            <h5 className={`${styles['transfer-text']}`}>Transfer Money</h5>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles['wrapper-user']}`}>
                                    <Image src={!image ? photoDefault : `${process.env.NEXT_PUBLIC_IMAGE_USER}/${image}`}
                                        alt='avatar' className='rounded' height={56} width={56} objectFit='cover' onError={(e) => {
                                            e.currentTarget.onerror = null
                                            currentTarget.src = `${photoDefault}`
                                        }}
                                    />
                                    <p className={`${styles['name-text']}`}>{firstName} {lastName}</p>
                                    <p className={`${styles['phone-text']}`}>{!noTelp ? 'no number phone' : noTelp}</p>
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