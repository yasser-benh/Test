import React from "react"
import './vedioplayer.css'
const VedioPlayer = ()=> {
    return (
        <div  className="vedio-player">
            <iframe 
                 width="600"
                 height="340"
                 src="https://www.youtube.com/embed/--l408sIbt8"
                 title="YouTube video player"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

             ></iframe>
        </div>
    )
}
export default VedioPlayer