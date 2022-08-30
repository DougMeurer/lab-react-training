import style from './style.css'

function Greetings({lang, children}) {
        
        if (lang === "de") {
             return(
                <div>
                    <p className='boxName2'><strong>Hallo {children}</strong></p>
                </div>
             )  
        }
        if (lang === "fr") {
           return (
            <div>
                <p className='boxName2'><strong>Bonjour {children}</strong></p>
            </div>
           )
        }
        if (lang === "es") {
            return(
                <div>
                    <p className='boxName2'><strong>Hola {children}</strong></p>
                </div>
            )
        }
        if (lang === "en") {
            return(
                <div>
                    <p className='boxName2'><strong>Hello {children}</strong></p>
                </div>
            )
        }

}

export default Greetings