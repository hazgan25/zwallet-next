import MenuHome from 'src/commons/components/MenuHome'
import Layout from 'src/commons/components/Layout'
import styles from 'src/commons/styles/Transfer.module.css'
import Image from 'next/image'
import { connect } from 'react-redux'

import { searchReceiverAction } from 'src/redux/actions/user'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import photoDefault from 'src/assets/img/profile-default.png'

const userArr = [1, 2, 4, 5]

const Transfer = (props) => {
    // console.log(props)
    // console.log(state)
    const [param, setParam] = useState({})
    const token = props.token

    const userReceiverArr = props

    // props.searchRecaiverDispatch(param, token)

    // console.log(userReceiverArr)
    // const getDataUsers = () => {
    //     // const state = useSelector((state) => state)
    //     return props.searchRecaiverDispatch(param, token)
    // }

    // console.log(props)



    // const handleReceiver = (e) => {
    //     const newParam = {
    //         ...param,
    //         search: e.target.value
    //     }
    //     setParam(newParam)
    //     props.searchRecaiverDispatch(newParam, token)
    // }
    // useEffect(() => {
    //     handleReceiver
    // }, [props])
    return (
        <>
            <Layout title='Zwallet - Transfer'>
                <MenuHome>
                    <div className={`${styles['transfer-box']}`}>
                        <div className='container'>
                            <p className={`${styles['search-txt']}`}>Search Receiver</p>
                            <h4 className={`bi bi-search ${styles['bi-search']}`}></h4>
                            <input className={`${styles['input-search']}`} placeholder='Search receiver here' />
                            {/* {userArr.map(() =>
                                <>
                                    <div className={`${styles['box-users']}`}>
                                        <div className={`${styles['photo-users']}`}>
                                            <Image src={photoDefault} alt='avatar' className='rounded' height={56} width={56} objectFit='cover' />
                                            <p className={`${styles['name-text']}`}>Name</p>
                                            <p className={`${styles['status-text']}`}>status</p>
                                        </div>
                                    </div>
                                </>
                            )} */}
                            { }
                        </div>
                    </div>
                </MenuHome>
            </Layout>
        </>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         token: state.auth.userData.token,
//         id: state.auth.userData.id,
//         pin: state.auth.userData.pin,
//         balance: state.user.userData.balance,
//         noTelp: state.user.userData.noTelp,
//         totalIncome: state.dashboad.dashboardData.totalIncome,
//         totalExpense: state.dashboad.dashboardData.totalExpense,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         searchRecaiverDispatch: (param, token) => {
//             dispatch(searchReceiverAction(param, token))
//         }
//     }
// }



const mapStateToProps = (state) => {
    console.log(state)
    return {
        // state
        token: state.auth.userData.token,
        receiver: state.searchReceiver.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchRecaiverDispatch: (param, token) => {
            dispatch(searchReceiverAction(param, token))
        }
    }
}


// export default connect(mapStateToProps, mapDispatchToProps)(Transfer)
export default connect(mapStateToProps)(Transfer)
// export default Transfer
