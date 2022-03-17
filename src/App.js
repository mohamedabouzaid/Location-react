import './App.css';
import{BrowserRouter,Route,Routes} from'react-router-dom'
import Users from'./user/pages/Users'
import NewPlace from './places/pages/NewPlace'
const App=()=> {
 
 
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Users />} />
    <Route path="/places/new" element={< NewPlace />} />
    <div>hello</div>
    <Route path="*" element={<div> 404 page</div>} />
    </Routes>
    </BrowserRouter>
    
    
    
    </>
  ) 
  
}

export default App;
