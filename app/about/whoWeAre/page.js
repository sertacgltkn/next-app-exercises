import React from "react";
import Link from "next/link";

export default function WhoWeAre() {
    return (
        <>
        <Link href={`/link/?search=${Math.random()}`}>
            <button style={{color:"black"}}>blog</button>

        </Link>
        </>
    );
    }

 