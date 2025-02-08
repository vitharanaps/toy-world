import CategorySection from "@/components/CategorySection";
import FeaturedSection from "@/components/FeaturedSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/ProductSection";
import Top from "@/components/Top";


export default function Home() {
  return (
    <div>
      <Top message="Free Shipping on Orders Over $50! 🚚" />
      <Navbar />
      <Hero />
      <CategorySection />
      <ProductSection />
      <FeaturedSection  />
    </div>
  );
}
