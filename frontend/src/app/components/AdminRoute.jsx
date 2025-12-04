'use client'
import React from 'react'
import { toast } from 'sonner'

export default function AdminRoute() {
  return (
    <p onClick={()=> toast.info("This route can only be accessed by admins.")} className="font-semibold cursor-pointer">
          Admin Panel
        </p>
  )
}
