import React from 'react'
import { headers } from "next/headers"

function Headers() {
    const headersList = headers();
  return (
    <div>Headers</div>
  )
}

export default Headers