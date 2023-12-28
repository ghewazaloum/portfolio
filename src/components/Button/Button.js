import { Link } from 'react-scroll';
import './Button.css'
function Button (props){
    return(
        <button className="focus">
            {props.children}
        </button>
    );
}
function UnFocusedButton (props){
    return(
        <Link to='5'smooth={true}duration={500}>
        <button  className="Unfocus">
            {props.children}
        </button>
        </Link>
    );
}
export default Button
export {UnFocusedButton}