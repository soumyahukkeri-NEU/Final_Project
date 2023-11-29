import Text from "../components/text";
import AllLink from "../components/link";

const Home = () => {
    return (
      <div>
        <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
          <Text 
                title1="Voyage"
                title2="Your Journey, Our Passion"
                text="We believe in the power of exploration, the thrill of adventure, and the magic of discovering new horizons. Join us as we embark on a voyage like no other, where every step is a story, and every moment is an unforgettable memory. Let's make your journey extraordinary, together!"
            />
        </div>
        
        <div className="mt-10 flex items-center gap-x-6">
          <AllLink 
              to="/destination" 
              className="text-sm font-semibold leading-6 text-gray-900"
          >
              Get Started <span aria-hidden="true">→</span>
        </AllLink>
        </div>
      </div>
    );
  };
  
  export default Home;