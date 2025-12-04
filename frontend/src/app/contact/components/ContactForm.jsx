"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactForm = async (e) => {
    e.preventDefault();
    if(!username || !email || !message) return toast.error("All fields are required!")
    const userData = {
      username,
      email,
      message,
    };
    const response = await axios.post(
      "https://personal-portofolio-backend-production.up.railway.app/contact/admin",
      userData
    );
    setUsername("");
    setEmail("");
    setMessage("");
    if (response.status !== 200)
      toast.error("Can't sent message right now, try again letter");
    toast.success("Message sent successfully!");
  };

  return (
    <form action="#" onSubmit={handleContactForm} className="mt-4">
      <label htmlFor="username" className="text-lg font-bold text-gray-300">
        Enter your name
      </label>
      <br />
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        name="username"
        placeholder="Your name"
        className="px-4 py-4 bg-neutral-900 outline-0 border mb-4  border-[#262626] mt-1 w-full rounded text-xl"
      />
      <label htmlFor="email" className="text-lg font-bold text-gray-300">
        Enter email address
      </label>
      <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        name="email"
        placeholder="example@email.com"
        className="px-4 py-4 bg-neutral-900 mb-4 outline-0 border border-[#262626] mt-1 w-full rounded text-xl"
      />
      <label htmlFor="message" className="text-lg font-bold text-gray-300">
        Write message
      </label>
      <br />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        name="message"
        placeholder="type .."
        className="px-4 py-4 bg-neutral-900 outline-0 border resize-none mb-2 border-[#262626] h-80 mt-1 w-full rounded text-xl"
      />
      <input
        type="submit"
        value="Send Message"
        className="px-4 py-5 font-extrabold bg-neutral-800 text-gray-400 tracking-wide hover:text-green-700 transition-all cursor-pointer mt-1 w-full rounded border border-neutral-800 text-xl"
      />
    </form>
  );
}
