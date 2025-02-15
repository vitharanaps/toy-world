import BannerSection from "@/components/BannerSection";
import BigBannerSection from "@/components/BigBannerSection";
import CategorySection from "@/components/CategorySection";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/ProductSection";
import Top from "@/components/Top";


export default function Home() {
  return (
    <div className="">
      <Top message="Free Shipping on Orders Over $50! 🚚" />
      <Navbar />
      <Hero2 />
      <CategorySection />
      <ProductSection title="New Released" />
      <BannerSection />
      <FeaturedSection  />
      <BigBannerSection title="Best Offers" subTitle="Sho and view more offers with today" buttonText="Shop Now" imgLeft="https://images.pexels.com/photos/6692922/pexels-photo-6692922.jpeg?auto=compress&cs=tinysrgb&w=1200" imgRight="https://images.pexels.com/photos/6692922/pexels-photo-6692922.jpeg?auto=compress&cs=tinysrgb&w=1200" percentage={true} value="20" />
      <ProductSection title="Best Selling Items" />
      {/* <ProductSection title="Recent Viewed" /> */}
      <Footer/>
    </div>
  );
}
