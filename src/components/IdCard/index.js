import style from "./style.css"
    
function IdCard(prop) {

    return(
        <div className="box">
            <ul className="list">
            <li><strong>Last name:</strong> {prop.lastName}</li>
            <li><strong>First name:</strong> {prop.firstName}</li>
            <li><strong>Gender:</strong> {prop.gender}</li>
            <li><strong>Height:</strong> {prop.height}</li>
            <li><strong>Birth":</strong> {prop.birth}</li>
            </ul>
            <img src={prop.picture} alt="profile picture"/>
        </div>
    )
}

export default IdCard