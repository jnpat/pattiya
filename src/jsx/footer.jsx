import React from "react";
import { IconButton } from '@material-ui/core';

function Footer (){

    return(
        <div className="footer" style={{ backgroundColor: "#8C9086" }}>
            <IconButton href="https://www.instagram.com/jnpat_/">
                <i class="fab fa-github"></i>
            </IconButton>
            <IconButton href="https://www.facebook.com/jeanpattiya/">
                <i class="fab fa-facebook"></i>
            </IconButton>
            <IconButton href="https://github.com/jnpat">
                <i class="fab fa-instagram"></i>
            </IconButton>
        </div>
    );
}

export default Footer;