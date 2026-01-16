import React from "react";

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/meeeovve", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("Thanks! Please check your email to confirm your message.");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your name" required />
        <input name="email" type="email" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message" required />
        <button type="submit">Send message</button>
      </form>
    </section>
  );
}
