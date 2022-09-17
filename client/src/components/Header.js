import React from "react";
import css from "./index.css"


function Header(){
    return(
    <div className="bg-transparent fixed w-full top-0 left-0 z-30">
        <div class="container p-5 mx-auto ">
            <div class="flex mx-auto">
                <p class="text-5xl text-white logo" style="font-family:'Passion One', cursive ;">AFFIXITY</p>
            </div>
        </div>
    </div>
    )
  
}

export default Header;