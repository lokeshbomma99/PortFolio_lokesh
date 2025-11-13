// src/components/sections/Contact.jsx
import { useState } from 'react';
import React from 'react';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "282c423d-c8e4-4ad4-8330-4566379c75ee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      id="contact"
      className="flex flex-col gap-10 pt-16"
    >
      <header className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">📧 Get In Touch</h2>
        <p className="text-white/80 text-lg">
          Have a project idea or just want to chat? Feel free to reach out!
        </p>
      </header>

      <form
        onSubmit={onSubmit}
        className="w-full max-w-xl mx-auto p-8 rounded-xl glassmorphic border border-white/10 flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:ring-white focus:border-primary text-white placeholder-white/50 input-field"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:ring-white focus:border-white text-white placeholder-white/50 input-field"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:ring-white focus:border-white text-white placeholder-white/50 input-field"
        ></textarea>

        <button
          type="submit"
          className="cursor-pointer w-full flex items-center justify-center h-12 px-6 bg-white text-background-dark text-base font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-glow-primary"
        >
          {result ? result : "Send Message"}
        </button>
        <p>{result}</p>
      </form>
    </motion.section>
  );
};

export default Contact;
