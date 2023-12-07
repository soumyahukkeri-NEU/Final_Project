import React from "react";
import Text from "../components/text";
import AllLink from "../components/link";
import Indeximage from "../components/indeximage";
import Footer from "../components/footer";
import Maindestinationcard from "../components/maindestinationcard";

const Home = () => {
  return (
    <>
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
                </AllLink>
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

    <div className="relative bg-gray-50 px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find Your Next Travel Tale</h2>
          <p className="mx-auto mt-3 max-w-4xl text-xl text-gray-500 sm:mt-4">
            Discover a world of enchanting destinations and captivating experiences with us. Dive into a realm of picturesque landscapes, rich cultures, and thrilling adventures that will leave you with unforgettable stories to tell. Your next travel tale begins here.
          </p>
          <br />
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {/* Destination 1 */}
          <Maindestinationcard
              imageSrc="/assets/main_attraction_1.jpg"
              altText="Picture of Maldives"
              title="Maldives"
              description="In the Maldives, you'll discover a realm of unmatched opulence where pristine white-sand beaches beckon beneath endless blue skies. This paradisiacal haven also unveils a captivating underwater world, offering a perfect setting for an extraordinary vacation that will remain etched in your memories forever."
              link="/destination/maldives"
          ></Maindestinationcard>

          {/* Destination 2 */}
          <Maindestinationcard
              imageSrc="/assets/main_attraction_2.jpg"
              altText="Picture of Icaeland"
              title="Iceland"
              description="Iceland, the land of fire and ice, is a magical destination that will leave you spellbound with its dramatic landscapes, majestic glaciers, and awe-inspiring natural wonders. Explore the land of the midnight sun and the northern lights, and discover a world of enchanting beauty and adventure."
              link="/destination/iceland"
          ></Maindestinationcard>

          {/* Destination 3 */}
          <Maindestinationcard
              imageSrc="/assets/main_attraction_3.jpg"
              altText="Picture of Paris"
              title="Paris"
              description="Paris, the City of Lights, is a dream destination that will sweep you off your feet with its timeless beauty, rich history, and romantic charm. From the iconic Eiffel Tower to the magnificent Louvre, Paris is a treasure trove of enchanting sights and experiences that will leave you mesmerized."
              link="/destination/paris"
          ></Maindestinationcard>
          </div>
        </div>
      
    </div>

    <div>
      <Footer></Footer>
    </div>
    </>
        
    );
  };
  
  export default Home;