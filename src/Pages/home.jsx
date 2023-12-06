import React from "react";
import Text from "../components/text";
import AllLink from "../components/link";
import Indeximage from "../components/indeximage";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:pt-32">
      <div className="max-w-2xl mx-auto gap-x-14 lg:flex lg:max-w-none lg:items-center">

        <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
          <Text
            title1="Voyage"
            title2="Your Journey, Our Passion"
            text="We believe in the power of exploration, the thrill of adventure, and the magic of discovering new horizons. Join us as we embark on a voyage like no other, where every step is a story, and every moment is an unforgettable memory. Let's make your journey extraordinary, together!" />

          <div className="mt-10 flex items-center gap-x-6">
            <AllLink
              to="/destination"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Get Started <span aria-hidden="true">→</span>
                  <AllLink 
                      to="/destination" 
                      className="text-sm font-semibold leading-6 text-gray-900"
                  >
                      Get Started <span aria-hidden="true">→</span>
                </AllLink>
                </div>
              </div>

              <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <Indeximage className="northern lights.jpg" src="public/assets/northern lights.jpg" alt="Picture of Northern Lights">
                    </Indeximage>
                  </div>

                  <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <Indeximage className="paris.jpg" src="public/assets/paris.jpg" alt="Picture of Paris">
                    </Indeximage>
                  
                    <Indeximage className="switzerland.jpg" src="public/assets/switzerland.jpg" alt="Picture of Switzerland">
                    </Indeximage>
                  </div>

                  <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <Indeximage className="maldives.jpg" src="public/assets/maldives.jpg" alt="Picture of Maldives">
                    </Indeximage>
                  
                    <Indeximage className="prague.jpg" src="public/assets/prague.jpg" alt="Picture of Prague">
                    </Indeximage>
                  </div>
              </div>
              
            </div>
          </div>
        </div>

        <div>
          <Footer></Footer>
        </div>

        
      </div>
      
    );
  };
  
  export default Home;