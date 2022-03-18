import ReactDOM from 'react-dom'
import './SideDrawer.css'
import { CSSTransition } from 'react-transition-group';
const SideDrawer = (props) => {
    const { children, show } = props;
   
     
    const content = (
    <CSSTransition onClick={props.onClick} in={show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
     <aside className="side-drawer"> {children} </aside>
     </CSSTransition>);
    return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
  };


export default SideDrawer;