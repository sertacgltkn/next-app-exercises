import React from 'react'
import { redirect } from "next/navigation"

function Redirect({searchParams}) {
    if (searchParams.rediretMe){
        redirect("/font")
    }
  return (
    <div>Redirect</div>
  )
}

export default Redirect;