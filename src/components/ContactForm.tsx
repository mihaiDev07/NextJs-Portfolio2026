"use client";

import { FormEvent, useState } from "react";

const initialFields = { name: "", email: "", subject: "", message: "" };
type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const inputClass = "mt-2 w-full rounded-xl border border-white/15 bg-gray-950/60 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/20";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback("");
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setFeedback("The contact form is not configured yet. Please try again later.");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service_id: serviceId, template_id: templateId, user_id: publicKey, template_params: { from_name: fields.name.trim(), from_email: fields.email.trim(), subject: fields.subject.trim(), message: fields.message.trim(), reply_to: fields.email.trim() } }),
      });
      if (!response.ok) throw new Error("EmailJS request failed");
      setFields(initialFields);
      setStatus("success");
      setFeedback("Thanks! Your message was sent successfully.");
    } catch {
      setStatus("error");
      setFeedback("Your message could not be sent. Please try again in a moment.");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-white/80">Name<input name="name" autoComplete="name" required minLength={2} maxLength={80} value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} className={inputClass} placeholder="Your name" /></label>
        <label className="text-sm font-semibold text-white/80">Email<input type="email" name="email" autoComplete="email" required maxLength={120} value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })} className={inputClass} placeholder="you@example.com" /></label>
      </div>
      <label className="block text-sm font-semibold text-white/80">Subject<input name="subject" required minLength={3} maxLength={120} value={fields.subject} onChange={(e) => setFields({ ...fields, subject: e.target.value })} className={inputClass} placeholder="What would you like to build?" /></label>
      <label className="block text-sm font-semibold text-white/80">Message<textarea name="message" required minLength={10} maxLength={2000} rows={6} value={fields.message} onChange={(e) => setFields({ ...fields, message: e.target.value })} className={`${inputClass} resize-y`} placeholder="Tell me a little about your project..." /></label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "loading"} className="inline-flex h-12 cursor-pointer items-center justify-center rounded-xl bg-white px-7 font-semibold text-gray-950 transition hover:bg-white/80 disabled:cursor-not-allowed disabled:opacity-60">{status === "loading" ? "Sending..." : "Send message"}</button>
        <p role="status" aria-live="polite" className={status === "error" ? "text-sm text-red-300" : "text-sm text-emerald-300"}>{feedback}</p>
      </div>
    </form>
  );
}
