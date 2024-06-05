import SideBar from '@/components/SideBar/SideBar'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='min-h-screen'>
        <div className='mx-auto flex'>
          <SideBar/>
        </div>
      </div>
    </>
  )
}

export default page