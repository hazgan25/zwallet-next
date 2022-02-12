import Header from 'src/commons/components/Header'
import Footer from 'src/commons/components/Footer'
import Sidebar from 'src/commons/components/Sidebar'

const MenuHome = ({ children }) => {
    return (
        <>
            <Header />
            <main className='container-fluid' style={{ background: '#FAFCFF', paddingBottom: '60px' }}>
                <div className='container'>
                    <div className='row'>
                        <section className='col-sm-3'>
                            <Sidebar />
                        </section>
                        <section className='col' style={{ position: 'relative', top: '40px' }}>
                            {children}
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default MenuHome
