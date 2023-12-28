import './Cards.css'
function Cards (props){
    return (
        <div className="Card">
            {props.children}
        </div>
    );
}
export default Cards