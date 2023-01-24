"use client"
import { setCookie } from "cookies-next";
import React, { useState } from "react";

function ServerCookie({hasArmut, allCookies}){
    const [customCookie, setCustomCookie] = useState("");

    const changeCustomCookie = (e) => {
        setCustomCookie(e.target.value);
    }

    const addCustomCookie = () => {
        setCookie(customCookie, Math.random().toFixed(3).toString);
    }

    console.log(allCookies);

    return (
        <div className="content">
            <ol className="notes">
                <h2>Dikkat</h2>
                    <li>
                        <p>
                            Bu sayfada cookie'lerinizi görebilirsiniz.
                        </p>
                    </li>
                </ol>
                </div>
    )
            
} 