import React from "react"

function Country ({name , handleClick}) {
    return(
        <li>{name.common} <button value={name.common} onClick={handleClick}>Show</button></li>
    )
}

export default Country