import React from 'react'

const Top = ({message}) => {
  return (
    <div className='flex items-center justify-center text-sm w-full h-[40px] bg-primary text-white font-semibold'>
      {message}
    </div>
  )
}

export default Top