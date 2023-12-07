import Footer from "../components/footer";
import ContactForm from "../components/contactform";
import ContactUsInfo from "../components/contactusinfo";

const ContactUs = () => {
    return (
      <div>
        <ContactForm></ContactForm>
        <br></br>
          <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="bg-white px-3 text-lg font-semibold leading-6 text-gray-900">Didnt find what you're looking for?</span>
            </div>
          </div>
        <br></br>
        <ContactUsInfo></ContactUsInfo>
        <Footer></Footer>
      </div>
    );
  };
  
  export default ContactUs;