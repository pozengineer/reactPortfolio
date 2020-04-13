import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Footer() {
    return (
        <div className="pageFooter">
            <span className="text-muted">Copyright &#169; 2020 POZ DRAFTING &#38; IT SOLUTIONS - All Rights Reserved</span>
            <br />
            <span className="text-muted">dhani@pozitsolutions.com.au </span>
            <span className="text-muted">| 0412 966 933</span>
            <br />
            <span className="text-muted">ROSE BAY, NSW</span>
        </div>
    );
}

export default Footer;
