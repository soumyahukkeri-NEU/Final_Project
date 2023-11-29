import React from "react";
import Text from "../components/text";
import AllLink from "../components/link";

const Home = () => {
    return (
      <div>
        <div class="overflow-hidden">
          <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            
              <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <Text 
                    title1="Voyage"
                    title2="Your Journey, Our Passion"
                    text="We believe in the power of exploration, the thrill of adventure, and the magic of discovering new horizons. Join us as we embark on a voyage like no other, where every step is a story, and every moment is an unforgettable memory. Let's make your journey extraordinary, together!"
                  />
              
                <div className="mt-10 flex items-center gap-x-6">
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
                    <div class="relative">
                      <img className="northern lights.jpg" src="public/assets/northern lights.jpg" alt="Picture of Northern Lights" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"/>
                      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                  </div>
                  <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div class="relative">
                      <img className="paris.jpg" src="public/assets/paris.jpg" alt="Picture of Paris" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"/>
                      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <div class="relative">
                      <img className="switzerland.jpg" src="public/assets/switzerland.jpg" alt="Picture of Switzerland" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"/>
                      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                  </div>
                  <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div class="relative">
                      <img className="maldives.jpg" src="public/assets/maldives.jpg" alt="Picture of Maldives" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"/>
                      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <div class="relative">
                      <img className="prague.jpg" src="public/assets/prague.jpg" alt="Picture of Prague" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"/>
                      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                  </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;