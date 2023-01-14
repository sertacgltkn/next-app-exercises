import React from "react";
import { getData } from "./page";

async function Head() {

    const data = await getData();
    console.log(data);
    return <h1>{data.title}</h1>
    }

export default Head;