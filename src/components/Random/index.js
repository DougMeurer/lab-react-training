import style from './style.css'

function Random({min, max}) {

   let mid = Math.floor(Math.random()*(min,max)+min)

    return(<>
            <p className="rndNum">Random value between {min} and {max} is => {mid}</p>
    </>)

}
export default Random