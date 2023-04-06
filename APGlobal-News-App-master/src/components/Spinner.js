import React from 'react'
import loading from './loading.gif'

const Spinner = (props)=> {
        return (
            <div className="text-center" style={{backgroundColor:props.mode==='light'?'white':'#0e1319', color:props.mode==='dark'?'white':'black'}}>
                <img className="my-3" src={loading} alt="loading" />
            </div>
        )
}

export default Spinner;