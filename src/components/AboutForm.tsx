"use client";

import React, { useState } from "react";
import { Mail, Phone, Clock, User, AtSign, Send } from "lucide-react";

// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form submission handler
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const formData: FormData = { name, email, message };

    // Save to local session storage
    try {
      sessionStorage.setItem("contactFormData", JSON.stringify(formData));
    } catch (error) {
      console.error("Could not save to session storage", error);
    }

    setIsModalOpen(true);
  };

  // Modal confirmation
  const handleConfirmSubmit = () => {
    alert("Thank you, your message has been submitted");

    setIsModalOpen(false);

    // Clear fields
    setName("");
    setEmail("");
    setMessage("");

    // Clear session storage after submission
    sessionStorage.removeItem("contactFormData");
  };

  return (
    <div className="bg-[#BDD4DA] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[#00231C] sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-[#00231C] max-w-2xl mx-auto">
            We're here to help and answer any question you might have. We look
            forward to hearing from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column*/}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="flex-shrink-0 h-6 w-6 text-[#96BAA0] mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Our Address
                  </h3>
                  <p className="text-gray-600">
                    123 Main Street
                    <br />
                    Anytown, USA 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="flex-shrink-0 h-6 w-6 text-[#96BAA0] mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Contact Phone
                  </h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="flex-shrink-0 h-6 w-6 text-[#96BAA0] mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Working Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSendMessage} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-[#00231C] block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AtSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-[#00231C] block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Write your message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-[#00231C] block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your message..."
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#014038] hover:bg-[#96BAA0] hover:text-[#00231C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-lg mx-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Confirm Your Message
            </h2>

            <div className="space-y-4 text-gray-700">
              <div>
                <strong className="text-gray-900">Name:</strong>
                <p className="p-2 bg-gray-100 rounded-md">{name}</p>
              </div>
              <div>
                <strong className="text-gray-900">Email:</strong>
                <p className="p-2 bg-gray-100 rounded-md">{email}</p>
              </div>
              <div>
                <strong className="text-gray-900">Message:</strong>
                <p className="p-2 bg-gray-100 rounded-md h-24 overflow-y-auto">
                  {message}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
              >
                Confirm and Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
