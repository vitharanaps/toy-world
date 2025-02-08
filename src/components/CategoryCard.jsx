import Image from 'next/image'
import React from 'react'

const CategoryCard = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[100px] gap-4 cursor-pointer '>
        {/* image container */}
        <div className='w-20 h-20 flex items-center justify-center bg-gray-100  rounded-full  '>
            <Image src="/img/logo.svg" width={20} height={20} alt='category image' />
        </div>
        {/* Text Container */}
        <h3 className='text-xs text-center'>Auction Figures</h3>
    </div>
  )
}

export default CategoryCard