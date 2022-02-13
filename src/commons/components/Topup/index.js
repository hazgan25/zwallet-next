import { Modal, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import styles from 'src/commons/styles/Topup.module.css'
import { connect } from 'react-redux'
import { topUpAction } from 'src/redux/actions/topup'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'

const Topup = ({ children }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [amount, setAmount] = useState(0)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const state = useSelector((state) => state)
    const { token } = state.auth.userData

    const { data } = state.topup.dataTopup

    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleTopup = () => {
        dispatch(topUpAction({ amount }, token))
        handleClose()
        if (state.topup.isFulfilled) {
            const { msg } = data
            const { redirectUrl } = data.data
            Swal.fire({
                title: `<strong>${msg}</strong>`,
                icon: 'info',
                html:
                    'please go to the ' +
                    `<a href="${redirectUrl}" target="_blank">link here</a> ` +
                    'to complete the top up' +
                    'or you can press the button below to go to the payment link',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    `
                <a href ='${redirectUrl}' class='text-white text-decoration-none' target="_blank">
                Topup
                </a>
                `,
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText: '<a>Cancel</a>',
                cancelButtonAriaLabel: 'Thumbs down'
            })
        }
    }

    return (
        <>
            <i variant="primary" onClick={handleShow}>{children}</i>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Top Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className={`${styles['topup-text']}`}>Enter the amount of money, and click submit</p>
                    <i>Rp.</i>
                    <input type='number' name='amount' placeholder='example 50000' className={`${styles['topup-input']}`} onChange={(e) => handleAmount(e)} />
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn btn-primary' type='submit' onClick={handleTopup} >Submit</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Topup

// const Topup = (props) => {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const [amount, setAmount] = useState(0)
//     // console.log(props)
//     const token = props.token

//     const handleAmount = (e) => {
//         setAmount(e.target.value)
//         // props.topupDispatch(body, token)
//     }

//     const handleTopup = () => {
//         props.topupDispatch({ amount }, token)
//         if (props.topup.isFulfilled) {
//             const redirectUrl = props.topup.dataTopup.data.data.redirectUrl
//             Swal.fire({
//                 title: '<strong>Topup Info</strong>',
//                 icon: 'info',
//                 html:
//                     'please go to the ' +
//                     `<a href="${redirectUrl}" target="_blank">link here</a> ` +
//                     'to complete the top up' +
//                     'or you can press the button below to go to the payment link',
//                 showCloseButton: true,
//                 showCancelButton: true,
//                 focusConfirm: false,
//                 confirmButtonText:
//                     `
//                 <a href ='${redirectUrl}' class='text-white text-decoration-none' target="_blank">
//                 Topup
//                 </a>
//                 `,
//                 confirmButtonAriaLabel: 'Thumbs up, great!',
//                 cancelButtonText: '<a>Cancel</a>',
//                 cancelButtonAriaLabel: 'Thumbs down'
//             })
//         }
//     }


//     // console.log(props)



//     return (
//         <>

//             <i variant="primary" onClick={handleShow}>{props.children}</i>
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Top Up</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p className={`${styles['topup-text']}`}>Enter the amount of money, and click submit</p>
//                     <i>Rp.</i>
//                     <input type='number' name='amount' placeholder='example 50000' className={`${styles['topup-input']}`} onChange={(e) => handleAmount(e)} />
//                 </Modal.Body>

//                 <Modal.Footer>
//                     <button type='submit' onClick={handleTopup} >Submit</button>
//                 </Modal.Footer>
//             </Modal>

//         </>
//     )
// }

// const mapStateToProps = (state) => {
//     // console.log(state.topup)
//     return {
//         token: state.auth.userData.token,
//         topup: state.topup
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         topupDispatch: (body, token) => {
//             dispatch(topUpAction(body, token))
//         }
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Topup)



