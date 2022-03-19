import './App.css';
import{BrowserRouter,Route,Routes} from'react-router-dom'
import Users from'./user/pages/Users'
import NewPlace from './places/pages/NewPlace';
import UserPlace from './places/pages/UsersPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation'
import UpdatePlace from './places/pages/UpdatePlaces'
const App=()=> {
 
 
  return(
    <>
    <BrowserRouter>
    <MainNavigation />
    <main>
    <Routes>
    <Route path="/" element={<Users />} />
    <Route path="/places/:placeid" element={<  UpdatePlace/>} />
    <Route path="/places/new" element={< NewPlace />} />
    <Route path="/:uid/places" element={<  UserPlace />} />
    
    <Route path="*" element={<div> 404 page</div>} />
    </Routes>
    </main>
    </BrowserRouter>
    
    
    
    </>
  ) 
  
}

export default App;
