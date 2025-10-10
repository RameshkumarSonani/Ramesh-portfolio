import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_u42epnk", // 🔹 Replace with your EmailJS Service ID
        "template_z0iu9kb", // 🔹 Replace with your EmailJS Template ID
        formData,
        "k9MkJiy9rtDY_0-RJ" // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setStatus("❌ Failed to send message. Try again!");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl bg-gray-800 p-10 rounded-2xl shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
        <p className="text-center text-gray-300 mb-8">
          Feel free to reach out by filling this form 👇
        </p>

        <form onSubmit={sendEmail} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors p-3 rounded-lg text-lg font-semibold"
          >
            Send Message
          </motion.button>

          {/* Status Message */}
          {status && (
            <p className="text-center text-sm mt-4 text-gray-300">{status}</p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
