import React from 'react';

function NavBar(probs){
     return (
        <a href={probs.pagUrl}>{probs.enlace}</a>
     );
}

export default NavBar;