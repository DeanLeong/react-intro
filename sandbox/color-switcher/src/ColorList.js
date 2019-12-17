// import React from 'react'
// create the ColorList functional Component
// return some HTML
// export the ColorList Component
// in App...
//  - import the ColorList Component
//  - render the ColorList Component 

import React from 'react'

function ColorList() {
    return (
     <ul id="switcher">
        <li className="white"></li>
        <li className="gray"></li>
        <li className="blue"></li>
        <li className="green"></li>
      </ul>
    )
}

export default ColorList