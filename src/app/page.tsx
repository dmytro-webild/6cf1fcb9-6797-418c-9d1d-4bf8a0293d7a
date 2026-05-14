"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="large"
        background="circleGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "home" },
        { name: "New Arrivals", id: "arrivals" },
        { name: "Best Sellers", id: "best-sellers" },
        { name: "Reviews", id: "reviews" },
      ]}
      brandName="Bellissima"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDualMedia
      background={{ variant: "gradient-bars" }}
      title="Beauty Refined."
      description="Experience our curated collection of luxury skincare and cosmetics, inspired by the world's finest beauty standards."
      tag="New Season"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-purple-nail-polish-against-white_181624-44649.jpg",          imageAlt: "Luxury Beauty Promo 1"
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dreamy-aesthetic-cosmetic-product-with-fresh-background_23-2151382903.jpg",          imageAlt: "Luxury Beauty Promo 2"
        }
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Rated by 10,000+ beauty enthusiasts"
      tagIcon={Sparkles}
      buttons={[{ text: "Shop Collection", href: "#arrivals" }]}
    />
  </div>

  <div id="brands" data-section="brands">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["Chanel", "Estée Lauder", "Dior", "Lancôme", "Gisou", "Mac", "The Ordinary"]}
      title="Shop Premium Brands"
      description="Exclusively featuring high-end beauty brands that define luxury and innovation."
    />
  </div>

  <div id="arrivals" data-section="arrivals">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Luminous Serum", price: "$89", imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-cream-blue-gray-background_23-2148241791.jpg" },
        { id: "2", name: "Matte Lip Velvet", price: "$45", imageSrc: "http://img.b2bpic.net/free-photo/top-view-blush-with-palm-branch-shadow_23-2148210782.jpg" },
        { id: "3", name: "Rich Facial Cream", price: "$120", imageSrc: "http://img.b2bpic.net/free-photo/pink-cream-jar-with-gold-lid-beauty-skincare-products_187299-47318.jpg" },
        { id: "4", name: "Eyeshadow Harmony", price: "$65", imageSrc: "http://img.b2bpic.net/free-photo/model-career-kit-still-life_23-2150217972.jpg" },
        { id: "5", name: "Hydrating Toner", price: "$38", imageSrc: "http://img.b2bpic.net/free-photo/close-up-elegant-beauty-selfcare-treatment_23-2149238321.jpg" },
        { id: "6", name: "Brush Pro Set", price: "$95", imageSrc: "http://img.b2bpic.net/free-photo/dirty-makeup-brushes_23-2147710659.jpg" }
      ]}
      title="New Arrivals"
      description="The latest in beauty innovation just landed."
    />
  </div>

  <div id="best-sellers" data-section="best-sellers">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        { id: "7", name: "Midnight Serum", price: "$150", imageSrc: "http://img.b2bpic.net/free-photo/foundation-assortment-with-dark-background_23-2148978145.jpg" },
        { id: "8", name: "Silk Lipstick", price: "$52", imageSrc: "http://img.b2bpic.net/free-photo/top-view-blush-brush-table_23-2148301782.jpg" },
        { id: "9", name: "Hydra Cream", price: "$95", imageSrc: "http://img.b2bpic.net/free-photo/stack-cosmetics-jars_23-2147787936.jpg" },
        { id: "10", name: "Palette Night", price: "$78", imageSrc: "http://img.b2bpic.net/free-photo/makeup-tools-case_23-2148109500.jpg" },
        { id: "11", name: "Soft Toner", price: "$42", imageSrc: "http://img.b2bpic.net/free-photo/close-up-nail-polish-floating-water_23-2150963111.jpg" },
        { id: "12", name: "Pro Tool Set", price: "$110", imageSrc: "http://img.b2bpic.net/free-photo/close-up-makeup-brushes-black_23-2147784011.jpg" }
      ]}
      title="Our Best Sellers"
      description="The gold standard of beauty—loved by beauty experts worldwide."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Routine Essentials", description: "Perfecting your daily skincare.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-notebook-with-make-up_23-2148136639.jpg" },
        { title: "Makeup Looks", description: "Express yourself with color.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-different-beauty-products-composition_23-2148574460.jpg" },
        { title: "Glowing Results", description: "Achieve that natural shine.", imageSrc: "http://img.b2bpic.net/free-photo/skin-care-tools-flower-pots-wooden-table_23-2148116100.jpg" },
        { title: "Luxury Touches", description: "Elevated beauty every day.", imageSrc: "http://img.b2bpic.net/free-photo/skincare-routine-with-fresh-face-cream-jar_23-2152010137.jpg" },
        { title: "Pro Techniques", description: "Master the artistry.", imageSrc: "http://img.b2bpic.net/free-photo/woman-using-face-roller-her-beauty-routine_23-2150166445.jpg" },
        { title: "Morning Bliss", description: "Start your day radiant.", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-still-life-arrangement-with-water_23-2149176150.jpg" }
      ]}
      title="Beauty Inspiration"
      description="Explore our curated lifestyle gallery and find your next beauty essential."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Bellissima has completely transformed my skincare routine. The quality of products is unmatched and the shopping experience is truly premium."
      rating={5}
      author="Sarah Johnson"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/portrait-young-woman-with-headphones_23-2148856136.jpg", alt: "Sarah J." },
        { src: "http://img.b2bpic.net/free-photo/blogger-putting-make-up-recording-it_23-2148538851.jpg", alt: "Michael C." },
        { src: "http://img.b2bpic.net/free-photo/smiley-bride-getting-ready-front-view_23-2149721977.jpg", alt: "Emily R." },
        { src: "http://img.b2bpic.net/free-photo/smiling-female-with-dark-wavy-hair-wearing-black-outfit-with-glad-facial-expression-looks-confident-posing-isolated-pink-wall_176532-10880.jpg", alt: "David K." },
        { src: "http://img.b2bpic.net/free-photo/close-up-beautiful-woman-outdoors_23-2148926749.jpg", alt: "Lisa M." }
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Are products original?", content: "Yes, we guarantee 100% authenticity from official brand suppliers." },
        { id: "f2", title: "How long is shipping?", content: "Orders are typically processed within 24 hours and delivered within 3-5 days." },
        { id: "f3", title: "Can I return items?", content: "Yes, we accept returns on unopened items within 14 days of purchase." },
        { id: "f4", title: "Do you offer gifts?", content: "Yes, we offer premium luxury gift wrapping for all orders." },
        { id: "f5", title: "Track my order?", content: "You will receive a tracking link via email as soon as your order ships." }
      ]}
      sideTitle="Beauty FAQ"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Bellissima"
      leftLink={{ text: "Privacy Policy", href: "#" }}
      rightLink={{ text: "Terms of Service", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}