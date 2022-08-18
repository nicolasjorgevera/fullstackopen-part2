import React from 'react'

const Filter = ({ filter , onChangeFilter}) => {
    return(
        <div>
        Find Countries: <input value={filter} onChange={onChangeFilter}/>
        </div>
    )
}

export default Filter