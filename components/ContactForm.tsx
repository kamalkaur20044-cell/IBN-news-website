"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "news-tip",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate submission
    setTimeout(() => {
      setSubmittedData({ ...formData });
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "news-tip",
        message: "",
      });
    }, 600);
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 shadow-sm">
      <div className="border-b border-neutral-200 pb-4 mb-6">
        <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#c81e1e] inline-block rounded-xs" />
          Send a Message to the Desk
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1">
          Fill out the official inquiry form below. Inquiries are routed directly to the appropriate department.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-800 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-900">Thank you for contacting IBN News.</p>
            <p className="text-xs text-emerald-700 mt-0.5">
              Your message regarding <strong className="capitalize">{submittedData?.subject.replace("-", " ")}</strong> has been recorded. Our desk will review and respond if necessary.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 text-xs font-semibold text-emerald-800 underline hover:text-emerald-900"
            >
              Send another message
            </button>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900">Unable to submit form.</p>
            <p className="text-xs text-red-700 mt-0.5">
              Please check your information or email us directly at desk@ibnpunjabnews.com.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-neutral-800 uppercase tracking-wide mb-1.5">
            Full Name <span className="text-[#c81e1e]">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Gurpreet Singh / Rajesh Kumar"
            className="w-full bg-white border border-neutral-300 rounded-md px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#c81e1e] focus:ring-1 focus:ring-[#c81e1e] transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-neutral-800 uppercase tracking-wide mb-1.5">
              Email Address <span className="text-[#c81e1e]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full bg-white border border-neutral-300 rounded-md px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#c81e1e] focus:ring-1 focus:ring-[#c81e1e] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-neutral-800 uppercase tracking-wide mb-1.5">
              Contact Number <span className="text-neutral-400 text-[11px] font-normal lowercase">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full bg-white border border-neutral-300 rounded-md px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#c81e1e] focus:ring-1 focus:ring-[#c81e1e] transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-semibold text-neutral-800 uppercase tracking-wide mb-1.5">
            Subject / Department <span className="text-[#c81e1e]">*</span>
          </label>
          <div className="relative">
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-white border border-neutral-300 rounded-md px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-[#c81e1e] focus:ring-1 focus:ring-[#c81e1e] transition-colors cursor-pointer"
            >
              <option value="news-tip">News Tip / Press Release / Story Leak</option>
              <option value="advertisement">Advertisement &amp; Commercial Solutions</option>
              <option value="grievance">Editorial Grievance / Content Redressal (Rule 11)</option>
              <option value="reader-support">Reader Support &amp; Technical Feedback</option>
              <option value="general">General Inquiries &amp; Synergies</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-neutral-800 uppercase tracking-wide mb-1.5">
            Message <span className="text-[#c81e1e]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail your tip, query, or feedback with relevant dates and specifics..."
            className="w-full bg-white border border-neutral-300 rounded-md p-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#c81e1e] focus:ring-1 focus:ring-[#c81e1e] transition-colors resize-y min-h-[120px]"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-[11px] text-neutral-500 leading-relaxed max-w-sm">
            Confidential news tips are reviewed under standard journalistic source protection guidelines.
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 bg-[#c81e1e] hover:bg-[#a81414] active:bg-[#8e1111] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3 rounded-md transition-colors shadow-sm cursor-pointer disabled:opacity-70 shrink-0"
          >
            {status === "submitting" ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Submit Message</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
