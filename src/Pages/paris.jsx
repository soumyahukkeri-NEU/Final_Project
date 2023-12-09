import Text from "../components/text";
import HeroBanner from "../components/HeroBanner";

const Paris = () => {
    return (
      <div>
        <div>
        <HeroBanner
          imageSrc="paris1.jpg"
          title="Explore Paris"
          subtitle="with Voyage"
        />
        </div>
        <div class="mx-auto max-w-3xl text-center">
          <Text 
                title2="A Parisian Extravaganza: Explore the City of Love"
                text="Are you prepared for an extraordinary voyage to the City of Love? Picture yourself strolling along the romantic Seine River, gazing at the iconic Eiffel Tower, and savoring delectable pastries at charming street-side cafes. Welcome to Paris, where every corner is a work of art, and every experience feels like a page out of a fairytale. Get ready for an enchanting journey into the heart of this captivating city, where culture, cuisine, and grandeur blend seamlessly to create a truly magical experience. Paris awaits you with its timeless charm and unparalleled allure."
            />
        </div>
        <div class="mx-auto max-w-5xl text-center">
          <Text 
                title2="Why Choose Our Paris Tour Package:"
                text="Paris, the City of Love, holds endless enchantment for travelers. Our tour package offers a seamless and unforgettable experience. From luxurious accommodations in the heart of the city to guided tours of iconic landmarks, we provide the opportunity to immerse yourself in the charm, culture, and culinary delights of Paris. Our expertly planned itinerary ensures you make the most of your visit, leaving you with cherished memories and a desire to return. Let us make your Parisian dream a reality."
            />
        </div>
      </div>
    );
  };
  
  export default Paris;