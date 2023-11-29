
import React from "react";
import "./Popup.css"

function Popup(Props){
    return(
        <div>
       <div className="popup-box">
      <div className="box">
        <button className='btn-close' onClick={Props.handleClose}></button>    
        {Props.content}
        
      </div>
    </div>
        </div>
    )
}

export default Popup;