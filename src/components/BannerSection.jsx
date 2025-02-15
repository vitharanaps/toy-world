import React from 'react'
import BannerCard from './BannerCard'

const BannerSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-5 gap-6 mx-8 my-10  items-center justify-between
    ">
      <BannerCard color="#e0ffe9" title="Title1 bgbgbg" img="https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  subTitle="sub title 1 hvjuy hj hjuy h vhvhuyvyuvf uyf yuf uyf yuf yuf" />
      <BannerCard color="#F4F8D3" title="Title1 bghbghiohio" img="https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  subTitle="sub title 1 bvuuivuig uguiiu giug iugiug iu"/>
      <BannerCard color="#FFE2E2" title="Title1 bhkjgugu" img="https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  subTitle="sub title 1  guguiguiguigiuok hoih io oih io hioh io" />

      </div>

  )
}

export default BannerSection