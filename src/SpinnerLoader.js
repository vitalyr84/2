import './SeasonDisplay.css'
import React from "react";


const SpinnerLoader = (props) => {
    return (
        <>
            <div className="ui active dimmer">
                    <div className="ui massive text loader">{props.message}</div>
                </div>
        </>
    )
}
SpinnerLoader.defaultProps = {
    message: 'Loading...'
}


export default SpinnerLoader