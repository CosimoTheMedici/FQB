//router
// import IndexRouters from "./router/index"

//scss
import "./assets/scss/hope-ui.scss"
import "./assets/scss/custom.scss"
import "./assets/scss/dark.scss"
import "./assets/scss/rtl.scss"
import "./assets/scss/customizer.scss"

// Redux Selector / Action
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import state selectors
import { setSetting } from './store/setting/actions'
import { AppRouter } from "./router/AppRouter"

function App({children}) {
  // const dispatch = useDispatch()
  // dispatch(setSetting())

 
  return (
    <div className="App">
      {/* <IndexRouters /> */}
      {/* {children} */}
      <AppRouter/>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
    </div>
  );
}

export default App;
