import React from "react";
import { IconButton } from '@material-ui/core';

function Footer() {

    return(
        <div className="footer fixed-bottom" style={{ backgroundColor: "#8C9086" }}>
            <IconButton href="https://github.com/jnpat">
                <i style={{ color: "black" }} class="fab fa-github"></i>
            </IconButton>
            <IconButton href="https://www.facebook.com/jeanpattiya/">
                <i style={{ color: "black" }} class="fab fa-facebook"></i>
            </IconButton>
            <IconButton href="https://www.instagram.com/jnpat_/">
                <i style={{ color: "black" }} class="fab fa-instagram"></i>
            </IconButton>
        </div>
    );
}

export default Footer;