"use client";

import React, { useState, FormEvent } from "react";

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    try {
      sessionStorage.setItem("newsletter_email", email);
      alert(`Thank you! Email address: ${email} has been subscribed.`);
      setEmail("");
    } catch (error) {
      console.error("Failed to save email to session storage", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h6 className="text-xl font-bold text-center">NEWSLETTER</h6>
      <fieldset className="w-80">
        <label className="label">
          <span className="label-text">Enter your email address</span>
        </label>
        <div className="join">
          <input
            type="email"
            placeholder="username@site.com"
            className="input mt-1 bg-white text-black focus:outline-1 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn bg-[#BDD4DA] hover:bg-[#F0C06D] text-[#00231C] join-item mt-1"
          >
            Subscribe
          </button>
        </div>
      </fieldset>
    </form>
  );
};
export default NewsletterSubscribe;
