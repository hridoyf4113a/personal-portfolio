import React from "react";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  
  return (
    <div className="w-full mt-8 ">
      <h4 className="text-3xl font-semibold text-gray-300 w-[60%] ">
        You are welcome to contact us for any requirement, A response will be
        provided within 24 hours.
      </h4>
      <ContactForm />

      <p className="text-center mt-6 text-gray-600 font-semibold text-sm">
        Crafting tomorrow’s web, one pixel at a time!
      </p>
    </div>
  );
}
