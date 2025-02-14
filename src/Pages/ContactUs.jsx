import React from 'react'
import HomeNav from '../components/HomeNav'
import Swal from 'sweetalert2'
import Footer from '../components/Footer'
import TextD from '../components/TextD'

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fe295825-79ff-4b13-8b60-1b65c8e848af");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thank you!",
        text: "I really appreciate that!!!",
        icon: "success"
      });
    }
  };
  return (
    <>
    <HomeNav />
    <TextD />
    <div className="flex items-center justify-center min-h-screen">
  <section onSubmit={onSubmit} className="border-2 m-4 p-6 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl bg-[rgba(255,255,255,0.16)] shadow-md rounded-md">
    <form>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">Contact Us</h2>
      
      <div className="mb-6">
        <label className="block text-white text-sm sm:text-base md:text-lg font-bold mb-2" htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 border rounded-md focus:outline-none text-black"
          placeholder="Enter your full name"
          name="name"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-white text-sm sm:text-base md:text-lg font-bold mb-2" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 border rounded-md focus:outline-none text-black"
          placeholder="Enter your email"
          name="Email"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-white text-sm sm:text-base md:text-lg font-bold mb-2" htmlFor="message">Message</label>
        <textarea
          id="message"
          className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 border rounded-md focus:outline-none text-black"
          placeholder="Enter your message"
          name="message"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Send Message
      </button>
    </form>
  </section>
</div>
    <Footer />
    </>
  )
}

export default ContactUs