import './App.css'
import Signup from './pages/Signup/Signup'
import {Toaster} from 'react-hot-toast';
import {Routes, Route} from 'react-router-dom';
import VerifyEmail from './pages/VerifyEmail/VerifyEmail';
import Signin from './pages/Signin/Signin';

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} toastOptions={{style: {background: '#363636', color: '#fff'}}}/>
      <Routes>
        {/* All public routes are here  */}
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/verify-email' element={<VerifyEmail/>}/>
        <Route path='/verify-email-token/:token' element={<VerifyEmail/>}/>
        <Route path='/forgot-password' element={<VerifyEmail/>}/>
        <Route path='/reset-password' element={<VerifyEmail/>}/>
        

        {/* All private routes are here  */}

      </Routes>
    </>
  )
}

export default App
