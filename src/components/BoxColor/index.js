
function BoxColor({r,g,b}) {

    return(
        <div
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
    >
      <h2>
        rgb({r}, {g}, {b})
      </h2>
    </div>
    )
}


export default BoxColor