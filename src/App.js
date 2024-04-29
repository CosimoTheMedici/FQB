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

// import state selectors
import { setSetting } from './store/setting/actions'
import { AppRouter } from "./router/AppRouter"

function App({children}) {
  const dispatch = useDispatch()
  dispatch(setSetting())
  return (
    <div className="App">
      {/* <IndexRouters /> */}
      {/* {children} */}
      <AppRouter/>
    </div>
  );
}

export default App;
