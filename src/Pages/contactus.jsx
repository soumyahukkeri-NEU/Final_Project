import Footer from "../components/footer";
import ContactForm from "../components/contactform";
import ContactUsInfo from "../components/contactusinfo";
import ContactText from "../components/contacttext";

const ContactUs = () => {
    return (
      <div>
        <ContactForm></ContactForm>

        <div class="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
          <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <p class="mt-6 max-w-2xl text-base leading-7 text-gray-600">Have questions about your upcoming journey? Browse through our list of frequently asked questions (FAQs) to find answers to common queries and make your travel experience smoother. If you can't find the information you need, don't hesitate to reach out to our friendly team for personalized assistance</p>
            
          <div class="mt-20">
            <dl class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
              <ContactText 
                title="How do I book a tour with your agency"
                text="To book a tour with us, simply visit our website, choose your desired destination, select your preferred tour package, and follow the easy booking process. You can also get in touch with our friendly customer support team for personalized assistance.">
              </ContactText>
              <ContactText 
                title="What's included in the tour packages?"
                text="Our tour packages typically include accommodations, guided tours, meals, and various activities depending on the destination. You'll find detailed information on what each package includes on our website.">
              </ContactText>
              <ContactText 
                title="Can I customize my travel itinerary?"
                text="No, our travel itineraries are carefully crafted to provide a comprehensive and hassle-free experience for our customers. Our expert team designs each itinerary to ensure that you can make the most of your journey without the need for extensive customizations. Rest assured, we've covered all the essentials to make your trip memorable and convenient.">
              </ContactText>
            </dl>
          </div>
          <div class="mt-20">
            <dl class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
              <ContactText 
                title="Is travel insurance included in the packages?"
                text="Travel insurance is not included in the standard packages, but we strongly recommend purchasing travel insurance to protect your trip. We can assist you in arranging suitable coverage.">
              </ContactText>
              <ContactText 
                title="What is your cancellation policy?"
                text="Our cancellation policy varies depending on the package and destination. You can find detailed information in the terms and conditions of each tour package on our website. Feel free to contact us for more information or clarification.">
              </ContactText>
              <ContactText 
                title="How can I reach your customer support for assistance during my trip?"
                text="Our customer support team is available 24/7. You'll receive contact information upon booking, and we'll provide you with emergency contact details to ensure your peace of mind throughout your journey.">
              </ContactText>
            </dl>
          </div>
        </div>

        <br></br><br></br>
          <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="bg-white px-3 text-lg font-semibold leading-6 text-gray-900">Didnt find what you're looking for?</span>
            </div>
          </div>
        <br></br><br></br>
        <ContactUsInfo></ContactUsInfo>
        <Footer></Footer>
      </div>
    );
  };
  
  export default ContactUs;