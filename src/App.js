import './App.css';
import{BrowserRouter,Route,Routes} from'react-router-dom'
import Users from'./user/pages/Users'
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation'
const App=()=> {
 
 
  return(
    <>
    <BrowserRouter>
    <MainNavigation />
    <Routes>
    <Route path="/" element={<Users />} />
    <Route path="/places/new" element={< NewPlace />} />
    <Route path="*" element={<div> 404 page</div>} />
    </Routes>
    </BrowserRouter>
    
    
    
    </>
  ) 
  
}

export default App;
