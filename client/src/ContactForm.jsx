
import React, { useState } from "react";
import { apiRequest } from "./api";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    type: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ type: "", message: "" });

    if (Object.values(form).some((value) => !value.trim())) {
      setFeedback({
        type: "error",
        message: "Please fill in all fields."
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email)) {
      setFeedback({
        type: "error",
        message: "Please enter a valid email address."
      });
      return;
    }

    try {
      setLoading(true);

      const response = await apiRequest("/contact", {
        method: "POST",
        body: JSON.stringify(form)
      });

      setFeedback({
        type: "success",
        message: response.message || "Message sent successfully!"
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.message || "Something went wrong."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        maxLength={80}
        disabled={loading}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        maxLength={120}
        disabled={loading}
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        maxLength={150}
        disabled={loading}
      />

      <textarea
        name="message"
        placeholder="Write your message..."
        value={form.message}
        onChange={handleChange}
        maxLength={2000}
        disabled={loading}
      />

      {feedback.message && (
        <p role="status" className={`form-feedback ${feedback.type}`}>
          {feedback.message}
        </p>
      )}

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}

export default ContactForm;
