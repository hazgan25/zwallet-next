import 'src/commons/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'src/commons/styles/auth.css'

import { PersistGate } from 'redux-persist/integration/react'
import { store, pStore } from 'src/redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={pStore}>
          < Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
