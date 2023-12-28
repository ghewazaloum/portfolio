import './Information.css'
import {Button,UnFocusedButton} from '../../components/index';
function Information (){
    return(
        <div className="information">
            <p>react.js developer</p>
            <h1> ghewa zaloum </h1>
            <p>software engineer, web developer with a passion for javascript, react.js, CSS, HTML and UI/UX design.</p>
            <p>creating responsive, ready-to-market websites.</p>
            <p>+2 years experience</p>
            <div className='Buttons'>
            <Button>download CV</Button>
            <UnFocusedButton>contact me</UnFocusedButton>
            </div>
        </div>
    );
}
export default Information