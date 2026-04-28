"use client";

import { useState } from "react";
import Button from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Please enter a valid email.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    else if (form.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-all duration-200";

  return (
    <section id="contact" className="bg-[#0d1425] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
          Let&apos;s work <span className="text-amber-400">together</span>
        </h2>
        <p className="text-gray-500 mb-16 max-w-lg">
          Have a project in mind or just want to say hello? My inbox is always open.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <div className="w-14 h-14 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-2xl">✓</div>
                <h3 className="text-white text-xl font-semibold">Message sent!</h3>
                <p className="text-gray-500">Thanks for reaching out. I&apos;ll be in touch soon.</p>
                <button onClick={() => setSubmitted(false)} className="text-amber-400 text-sm hover:underline mt-2">
                  Send another message
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Juan dela Cruz" className={inputClass} />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="juan@example.com" className={inputClass} />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about your project..." className={`${inputClass} resize-none`} />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                <Button variant="primary" onClick={handleSubmit} disabled={loading} className="self-start px-8">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6 pt-2">
            {[
              { label: "Email", value: "bayona.sk1@gmail.com", href: "mailto:you@example.com" },
              { label: "Location", value: "Iloilo City, Philippines", href: null },
              { label: "Availability", value: "Open to opportunities", href: null },
            ].map((info) => (
              <div key={info.label} className="border-l-2 border-amber-400/30 pl-4">
                <p className="text-gray-600 text-xs uppercase tracking-widest mb-1">{info.label}</p>
                {info.href ? (
                  <a href={info.href} className="text-gray-300 hover:text-amber-400 transition-colors duration-200">{info.value}</a>
                ) : (
                  <p className="text-gray-300">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}