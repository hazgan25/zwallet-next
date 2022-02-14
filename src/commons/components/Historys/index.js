// import { connect } from 'react-redux'
import styles from 'src/commons/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import formatRupiah from 'src/modules/helper/formarterRupiah'
import photoDefault from 'src/assets/img/profile-default.png'

import { useSelector } from 'react-redux'


const History = () => {
    const state = useSelector((state) => state)
    const { historyData } = state.history
    return (
        <>
            <div className='col'>
                <p className={`${styles['transaction-history-text']}`}>Transaction History</p>
                {Array.isArray(historyData) && historyData.length > 0 &&
                    historyData.map((data, idx) => (
                        <div className={`${styles['photo-users']}`} key={idx}>
                            <Image src={
                                !data.image ? photoDefault :
                                    !`${process.env.NEXT_PUBLIC_IMAGE_USER}/${data.image}` ? photoDefault :
                                        `${process.env.NEXT_PUBLIC_IMAGE_USER}/${data.image}`
                            }
                                placeholder='blur'
                                blurDataURL={photoDefault}
                                onError={() => {
                                    photoDefault
                                }}
                                alt='avatar' className='rounded' height={56} width={56} objectFit='cover' />
                            <p className={`${styles['name-text']}`}>{data.fullName}</p>
                            <p className={`${styles['status-text']}`}>{data.type === 'send' ? 'transfer' : data.status === 'pending' ? `Pending ${data.type}` : data.type}</p>
                        </div>
                    ))
                }
            </div>

            <div className='col-3'>
                <Link href='/home/history' passHref>
                    <p className={`${styles['see-all-text']}`}>See all</p>
                </Link>
                {Array.isArray(historyData) && historyData.length > 0 &&
                    historyData.map((data, idx) => (
                        <div key={idx}>
                            <p className={`${data.type === 'send' ? 'text-danger' : data.status === 'pending' ? 'text-secondary' : 'text-success'} ${styles['transaction-payment']}`}>
                                {`${data.type === 'send' ? `-RP.${formatRupiah(data.amount)}` : `+RP.${formatRupiah(data.amount)}`}`}
                            </p>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default History

// const History = (props) => {

//     const historyArr = props.history
//     return (
//         <>
//             <div className='col'>
//                 <p className={`${styles['transaction-history-text']}`}>Transaction History</p>
//                 {Array.isArray(historyArr) && historyArr.length > 0 &&
//                     historyArr.map((data, idx) => (
//                         <div className={`${styles['photo-users']}`} key={idx}>
//                             {/* {console.log(`${process.env.NEXT_PUBLIC_IMAGE_USER}/${data.image}`)} */}
//                             <Image src={
//                                 !data.image ? photoDefault :
//                                     !`${process.env.NEXT_PUBLIC_IMAGE_USER}/${data.image}` ? photoDefault :
//                                         `${process.env.NEXT_PUBLIC_IMAGE_USER}/${data.image}`
//                             }
//                                 placeholder='blur'
//                                 blurDataURL={photoDefault}
//                                 onError={() => {
//                                     photoDefault
//                                 }}
//                                 alt='avatar' className='rounded' height={56} width={56} objectFit='cover' />
//                             <p className={`${styles['name-text']}`}>{data.fullName}</p>
//                             <p className={`${styles['status-text']}`}>{data.type === 'send' ? 'transfer' : data.type}</p>
//                         </div>
//                     ))
//                 }
//             </div>

//             <div className='col-3'>
//                 <Link href='/home/history' passHref>
//                     <p className={`${styles['see-all-text']}`}>See all</p>
//                 </Link>
//                 {Array.isArray(historyArr) && historyArr.length > 0 &&
//                     historyArr.map((data, idx) => (
//                         <div key={idx}>
//                             <p className={`${data.type === 'send' ? 'text-danger' : 'text-success'} ${styles['transaction-payment']}`}>
//                                 {`${data.type === 'send' ? `-RP.${formatRupiah(data.amount)}` : `+RP.${formatRupiah(data.amount)}`}`}
//                             </p>
//                         </div>
//                     ))
//                 }

//             </div>
//         </>
//     )
// }

// const mapStateToProps = (state) => {
//     // console.log(state.history.historyData)
//     return {
//         history: state.history.historyData
//     }
// }

// export default connect(mapStateToProps)(History)
// // export default History