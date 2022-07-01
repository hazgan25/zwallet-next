import MenuHome from 'src/commons/components/MenuHome'
import Layout from 'src/commons/components/Layout'
import styles from 'src/commons/styles/Transfer.module.css'
import Image from 'next/image'

// import { searchReceiverAction } from 'src/redux/actions/user'
import { searchReceiverUser } from 'src/modules/utils/users'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import photoDefault from 'src/assets/img/profile-default.png'

const Transfer = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const { token } = state.auth.userData

    const [data, setData] = useState({})
    const [dataArr, setDataArr] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const limit = 4

    useEffect(() => {
        const param = {
            search: search,
            limit: limit,
            page: page
        }
        searchReceiverUser(param, token)
            .then((res) => {
                setData(res.data)
                setDataArr(res.data.data)
            }).catch(({ ...err }) => {
                console.log(err)
            })
    }, [search, token, page])

    const handleClick = (id) => {
        router.push(`/transfer/${id}`)
    }

    return (
        <>
            <Layout title='Zwallet - Transfer'>
                <MenuHome>
                    <main className={`${styles['transfer-box']}`}>
                        <div className='container'>
                            <p className={`${styles['search-txt']}`}>Search Receiver</p>
                            <i className={`bi bi-search ${styles['bi-search']}`}></i>
                            <input className={`${styles['input-search']}`} placeholder='Search receiver here' onChange={(e) => setSearch(e.target.value)} />
                            {
                                Array.isArray(dataArr) && dataArr.length > 0 &&
                                dataArr.map((data, idx) => (
                                    <div className={`${styles['box-users']}`} key={idx} onClick={() => handleClick(data.id)}>
                                        <div className={`${styles['photo-users']}`}>
                                            <Image src={!data.image ? photoDefault : `${process.env.NEXT_PUBLIC_IMAGE_USER}/${data.image}`}
                                                alt='avatar' className='rounded' height={56} width={56} objectFit='cover' onError={(e) => {
                                                    e.currentTarget.onerror = null
                                                    currentTarget.src = `${photoDefault}`
                                                }} />
                                            <p className={`${styles['name-text']}`}>{data.firstName} {data.lastName}</p>
                                            <p className={`${styles['status-text']}`}>{data.noTelp !== null ? data.noTelp : 'no phone number'}</p>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className='mt-5 d-flex justify-content-center'>
                                <div className={`d-flex justify-content-between ${styles['pagination']}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor"
                                        className={`bi bi-arrow-bar-left mx-3 ${styles['bi']}`} viewBox="0 0 16 16"
                                        onClick={() => {
                                            if (page > 1) {
                                                setPage(page - 1)
                                            }
                                        }}
                                    >
                                        <path d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                    <p className={styles['pagination-text']}>{page}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" className={`bi bi-arrow-bar-left mx-3 ${styles['bi']}`} viewBox="0 0 16 16"
                                        onClick={() => {
                                            // console.log(data)
                                            if (page <= data.pagination.totalPage) {
                                                setPage(page + 1)
                                            }
                                        }}
                                    >
                                        <path d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </main>
                </MenuHome>
            </Layout>
        </>
    )
}

export default Transfer