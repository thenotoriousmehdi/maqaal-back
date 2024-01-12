import Navbar from './components/navbar'
import Footer from './components/footer'

import { Route, Routes } from "react-router-dom";
import { Admin } from './pages/Admin';
import Apropospage from "./pages/Apropspage"
 import { Home } from './pages/Home';
import Articles from "./pages/Articles"
import Faq from './pages/Faq';
import Notreequipe from './pages/Notreequipe';
import { ModifyModerateur } from './pages/ModifyModerateur';
import Headroom from 'react-headroom/src';
import ArticleDetails from './pages/ArticleDetails';
import ArticlesSauvgardes from './pages/ArticlesSauvgardes'
import { Moderateur } from './pages/Moderateur';
import Log_in from './pages/Log_in';
import Sign_in from './pages/sign_in'
import CompteValide from './pages/CompteValide';
import Confirmer_mdp from './pages/confirmer_mdp';

function App() {
 
  return (
   
 <>
   
     <Headroom><Navbar /> </Headroom>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={ <Apropospage />} />
        <Route path="/Articles" element={<Articles/>} />
        <Route path="/ArticlesSauvgardes" element={<ArticlesSauvgardes  />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path='/Adminpage' element={<Admin/> } />
        <Route path='/Moderateurpage' element={<Moderateur/> } />
        <Route path="/Notreequipe" element={<Notreequipe />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="/Adminpage/Moderateur:id" element={<ModifyModerateur />} />
        <Route path="/LogIn" element={<Log_in/> }/>
        <Route path="/SignIn" element={<Sign_in/> }/>
        <Route to={"/SignIn/Verification"}  element={<Confirmer_mdp/> }  />
        <Route to={"/SignIn/Verification/Confirmation"}  element={<CompteValide/> }  />
        

        
  </Routes> 

  <Footer /> 
    </>  
  )
}

export default App