import MenuHome from 'src/commons/components/MenuHome'
import Layout from 'src/commons/components/Layout'
import styles from 'src/commons/styles/Transfer.module.css'
import Image from 'next/image'
import { connect } from 'react-redux'

import { searchReceiverAction } from 'src/redux/actions/user'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import photoDefault from 'src/assets/img/profile-default.png'

// const userArr = [1, 2, 4, 5]

const Transfer = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [param, setParam] = useState({})
    const { token } = state.auth.userData
    // console.log(state.searchReceiver.data)
    // console.log(state.searchReceiver)
    const dataArr = state.searchReceiver.data

    const handleClick = (id) => {
        router.push(`/transfer/${id}`)
    }

    const handleSearch = (e) => {
        const newParam = {
            ...param,
            search: e.target.value
        }
        setParam(newParam)
        dispatch(searchReceiverAction(newParam, token))
    }

    useEffect(() => {
        dispatch(searchReceiverAction(param, token))

    }, [dispatch, param, token])

    return (
        <>
            <Layout title='Zwallet - Transfer'>
                <MenuHome>
                    <div className={`${styles['transfer-box']}`} style={{ height: '100%' }}>
                        <div className='container'>
                            <p className={`${styles['search-txt']}`}>Search Receiver</p>
                            <i className={`bi bi-search ${styles['bi-search']}`}></i>
                            <input className={`${styles['input-search']}`} placeholder='Search receiver here' onChange={(e) => handleSearch(e)} />
                            {Array.isArray(dataArr) && dataArr.length > 0 &&
                                dataArr.map((data, idx) => (
                                    <div className={`${styles['box-users']}`} key={idx} onClick={() => handleClick(data.id)}>
                                        <div className={`${styles['photo-users']}`}>
                                            {/* {console.log(data.image)} */}
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
                                            <p className={`${styles['name-text']}`}>{data.firstName} {data.lastName}</p>
                                            <p className={`${styles['status-text']}`}>{data.noTelp !== null ? data.noTelp : 'no phone number'}</p>
                                            {/* {console.log(!data)} */}
                                        </div>
                                    </div>
                                ))
                            }
                            <h5 style={{ position: 'relative', top: '23px', textAlign: 'center', marginBottom: '23px' }}>{dataArr.length == 0 ? 'Not Found' : ''}</h5>
                        </div>
                    </div>
                </MenuHome>
            </Layout>
        </>
    )
}
export default Transfer

// const Transfer = (props) => {
//     // console.log(props)
//     // console.log(state)
//     const [param, setParam] = useState({})
//     const token = props.token

//     const userReceiverArr = props

//     // props.searchRecaiverDispatch(param, token)

//     // console.log(userReceiverArr)
//     const getDataUsers = () => {
//         // const state = useSelector((state) => state)
//         return props.searchRecaiverDispatch(param, token)
//     }

//     // console.log(props)



//     const handleReceiver = (e) => {
//         const newParam = {
//             ...param,
//             search: e.target.value
//         }
//         setParam(newParam)
//         props.searchRecaiverDispatch(newParam, token)
//     }

//     useEffect(() => {
//         getDataUsers()
//         handleReceiver
//     }, [])
//     return (
//         <>
//             <Layout title='Zwallet - Transfer'>
//                 <MenuHome>
//                     <div className={`${styles['transfer-box']}`}>
//                         <div className='container'>
//                             <p className={`${styles['search-txt']}`}>Search Receiver</p>
//                             <h4 className={`bi bi-search ${styles['bi-search']}`}></h4>
//                             <input className={`${styles['input-search']}`} placeholder='Search receiver here' />
//                             {/* {userArr.map(() =>
//                                 <>
//                                     <div className={`${styles['box-users']}`}>
//                                         <div className={`${styles['photo-users']}`}>
//                                             <Image src={photoDefault} alt='avatar' className='rounded' height={56} width={56} objectFit='cover' />
//                                             <p className={`${styles['name-text']}`}>Name</p>
//                                             <p className={`${styles['status-text']}`}>status</p>
//                                         </div>
//                                     </div>
//                                 </>
//                             )} */}
//                             { }
//                         </div>
//                     </div>
//                 </MenuHome>
//             </Layout>
//         </>
//     )
// }

// // const mapStateToProps = (state) => {
// //     return {
// //         token: state.auth.userData.token,
// //         id: state.auth.userData.id,
// //         pin: state.auth.userData.pin,
// //         balance: state.user.userData.balance,
// //         noTelp: state.user.userData.noTelp,
// //         totalIncome: state.dashboad.dashboardData.totalIncome,
// //         totalExpense: state.dashboad.dashboardData.totalExpense,
// //     }
// // }

// // const mapDispatchToProps = (dispatch) => {
// //     return {
// //         searchRecaiverDispatch: (param, token) => {
// //             dispatch(searchReceiverAction(param, token))
// //         }
// //     }
// // }



// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         // state
//         token: state.auth.userData.token,
//         receiver: state.searchReceiver.data
//     }
// }

// // const mapDispatchToProps = (dispatch) => {
// //     return {
// //         searchRecaiverDispatch: (param, token) => {
// //             dispatch(searchReceiverAction(param, token))
// //         }
// //     }
// // }


// // export default connect(mapStateToProps, mapDispatchToProps)(Transfer)
// export default connect(mapStateToProps)(Transfer)
// // export default Transfer
