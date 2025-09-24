import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// --- CONFIG: replace these with your EmailJS values ---
const EMAILJS_SERVICE_ID = "service_d7iarfv";
const EMAILJS_TEMPLATE_ID = "template_zzgorrr";
const EMAILJS_PUBLIC_KEY = "cD8XBmJIzmsXY6T3j";
// ------------------------------------------------------

export default function PopupForm() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const shown = localStorage.getItem("popupFormShown");
    if (!shown) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const close = (remember = true) => {
    setVisible(false);
    if (remember) localStorage.setItem("popupFormShown", "1");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Name required";
    if (!form.phone.trim()) return "Phone required";
    if (!form.email.trim()) return "Email required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return "Invalid email";
    if (!form.subject.trim()) return "Subject required";
    if (!form.message.trim()) return "Message required";
    return "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) return setError(v);

    setLoading(true);

    const userdate = new Date().toLocaleDateString();
    const usertime = new Date().toLocaleTimeString();

    const formData = {
      from_name: "Anugrah Homes",
      web_name: "Anugrah Homes",
      message: `\n        Name: ${form.name}\n        Phone: ${form.phone}\n        Email: ${form.email}\n        Subject: ${form.subject}\n        Message: ${form.message}\n        Date: ${userdate}\n        Time: ${usertime}`,
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current?.reset();
          localStorage.setItem("popupFormShown", "1");
          setTimeout(() => {
            setSuccess(false);
            setVisible(false);
          }, 2000);
        },
        (err) => {
          setLoading(false);
          console.error("FAILED...", err);
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => close(true)}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={() => close(true)}
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold mb-2">Anugrah Homes</h3>

        {success ? (
          <div className="p-4 rounded bg-green-50 text-green-700">
            ✅ Thanks! We received your message.
          </div>
        ) : (
          <form ref={formRef} onSubmit={onSubmit} className="space-y-3">
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={onChange}
              className="w-full border px-3 py-2 rounded-md"
              required
            />
            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={onChange}
              className="w-full border px-3 py-2 rounded-md"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
              className="w-full border px-3 py-2 rounded-md"
              required
            />
            <input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={onChange}
              className="w-full border px-3 py-2 rounded-md"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={onChange}
              rows={3}
              className="w-full border px-3 py-2 rounded-md"
              required
            />

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div className="flex justify-between">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 rounded-md bg-orange-500 text-white"
              >
                {loading ? "Sending..." : "Send"}
              </button>
              <button
                type="button"
                onClick={() => close(true)}
                className="text-sm text-gray-600 underline"
              >
                Not now
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}