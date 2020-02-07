import React from 'react';

function Footer(props){
    return(
    <button type="button" className="btn btn-dark">{props.subButton}</button>
    );
}

export default Footer;