import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

// --- CONFIG: replace with your EmailJS values ---
const EMAILJS_SERVICE_ID = "service_d7iarfv";   // ✅ Your Service ID
const EMAILJS_TEMPLATE_ID = "template_zzgorrr"; // ✅ Your Template ID
const EMAILJS_PUBLIC_KEY = "cD8XBmJIzmsXY6T3j"; // ✅ Your Public Key
// ------------------------------------------------

export default function PopupForm() {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState("");

    // Form states
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // Show popup only once
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

    const validate = () => {
        if (!name.trim()) return "First name required";
        if (!email.trim()) return "Email required";
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "Invalid email";
        if (!phone.trim()) return "Phone number required";
        return "";
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setError("");

        const v = validate();
        if (v) return setError(v);

        setLoading(true);

        const date = new Date();
        const userdate = date.toLocaleDateString();
        const usertime = date.toLocaleTimeString();

        const formData = {
            from_name: "Anugrah Homes",
            web_name: "Anugrah Homes",
            message: `
        Name: ${name} ${lastName}
        Email: ${email}
        Phone: ${phone}
        City: ${city}
        Date: ${userdate}
        Time: ${usertime}
      `,
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
                    setDone(true);
                    localStorage.setItem("popupFormShown", "1");
                    setTimeout(() => setDone(false), 4000);
                    setTimeout(() => setVisible(false), 1500);
                },
                (error) => {
                    setLoading(false);
                    console.error("FAILED...", error);
                    setError("Failed to send message. Please try again later.");
                }
            );
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={() => close(true)}
            />

            {/* Popup Box */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                    onClick={() => close(true)}
                >
                    ✕
                </button>

                <h3 className="text-xl font-semibold mb-2">Anugrah Homes</h3>

                {done ? (
                    <div className="p-4 rounded bg-green-50 text-green-700">
                        Thanks! We received your message.
                    </div>
                ) : (
                    <form onSubmit={onSubmit} className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Last Name</label>
                            <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Phone</label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => {
                                    // Remove non-digit characters
                                    let val = e.target.value.replace(/\D/g, "");
                                    // Limit to 13 digits
                                    if (val.length > 13) val = val.slice(0, 13);
                                    setPhone(val);
                                }}
                                className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                                required
                            />
                        </div>


                        <div>
                            <label className="block text-sm font-medium mb-1">City</label>
                            <input
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                            />
                        </div>





                        {error && <div className="text-sm text-red-600">{error}</div>}

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="px-16 py-3 rounded-md bg-orange-500 text-white text-sm font-medium disabled:opacity-70"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>

                            <button
                                type="button"
                                className="text-sm text-gray-600 underline"
                                onClick={() => close(true)}
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
