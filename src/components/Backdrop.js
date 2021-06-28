import React from 'react'

const Backdrop = ({showSidebar,toggleSidebar}) => {
    return (
        showSidebar && <div onClick={toggleSidebar} className="backdrop">
            
        </div>
    )
}

export default Backdrop
