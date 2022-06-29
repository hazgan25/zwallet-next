import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

const Private = () => {
    const router = useRouter()
    const auth = useSelector((state) => state.auth)
    const { token } = auth.userData

    if (!token) {
        Swal.fire(
            'There is an error ?',
            'you have to login first',
            'question'
        )
        router.replace('/')
    }

}

export default Private