import Text from "../components/text";
import AllLink from "../components/link";

const Destination = () => {
    return (
      <div> 
        <div className="mx-auto max-w-3xl text-center">
          <Text title2="Discover the World's Most Enchanting Destinations"
                text="At Voyage, we're passionate about helping you discover the world's wonders, and our collection of top destinations is your gateway to unforgettable adventures. Whether you're seeking pristine beaches, cultural treasures, or thrilling experiences, our selection includes destinations that cater to every traveler's dreams.Browse through our featured destinations, discover the highlights, and imagine yourself strolling along the white-sand beaches of the Maldives, witnessing the Northern Lights in Iceland, or savoring delicious pastries in Paris. These destinations offer an array of experiences that will leave you with lasting memories. Ready to start your journey? Explore our top destinations and begin planning your next adventure today!"
          />
        </div>
        
        <div className="mt-10 flex items-center gap-x-6">
          <AllLink to="/maldives"  className="text-sm font-medium text-blue-600">
              Learn More 
          </AllLink>
        </div>

        <div className="mt-10 flex items-center gap-x-6">
          <AllLink to="/iceland"  className="text-sm font-medium text-blue-600">
              Learn More 
          </AllLink>
        </div>

        <div className="mt-10 flex items-center gap-x-6">
          <AllLink to="/paris"  className="text-sm font-medium text-blue-600">
              Learn More 
          </AllLink>
        </div>
  </div>
    );
  };
  
  export default Destination;