"use client";

import { useState } from "react";
import { ChevronDown, User, Phone, Mail, DollarSign, Briefcase, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xgvzdozr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const dir = t("dir") === "ltr" ? "ltr" : "rtl";
  const chevronClass = dir === "ltr" ? "right-4" : "left-4";

  // Reusable input field with icon
  const InputField = ({
    icon: Icon,
    ...props
  }: {
    icon?: React.ElementType;
    [key: string]: any;
  }) => (
    <div className="relative">
      {Icon && (
        <Icon
          size={18}
          className={`absolute top-1/2 -translate-y-1/2 ${
            dir === "ltr" ? "left-4" : "right-4"
          } text-gray-400`}
        />
      )}
      <input
        {...props}
        className={`h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 ${
          Icon ? (dir === "ltr" ? "pl-11" : "pr-11") : ""
        } text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-[#259DF3] focus:bg-white focus:ring-2 focus:ring-[#259DF3]/20 md:h-14 md:text-base`}
      />
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {t("contactHeading")}
          </h2>
          <p className="mt-3 text-gray-500 text-base md:text-lg">
            {t("contactSubheading")}
          </p>
          <div className="w-20 h-1 bg-[#259DF3] mx-auto mt-4 rounded-full" />
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 p-6 md:p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1: Name + Subject */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  {t("contactFullName")}
                </label>
                <InputField
                  icon={User}
                  type="text"
                  required
                  name="name"
                  placeholder={t("contactFullNamePlaceholder")}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  {t("contactSubject")}
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-800 outline-none transition focus:border-[#259DF3] focus:bg-white focus:ring-2 focus:ring-[#259DF3]/20 md:h-14 md:text-base"
                  >
                    <option>{t("contactSubjectPlaceholder")}</option>
                    <option>{t("contactSubjectWebsite")}</option>
                    <option>{t("contactSubjectMobileApp")}</option>
                    <option>{t("contactSubjectUiUxDesign")}</option>
                    <option>{t("contactSubjectOdoo")}</option>
                  </select>
                  <ChevronDown
                    size={18}
                    className={`pointer-events-none absolute ${chevronClass} top-1/2 -translate-y-1/2 text-gray-400`}
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Phone + Email */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  {t("contactPhone")}
                </label>
                <InputField
                  icon={Phone}
                  type="text"
                  required
                  name="phone"
                  placeholder={t("contactPhonePlaceholder")}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  {t("contactEmail")}
                </label>
                <InputField
                  icon={Mail}
                  type="email"
                  required
                  name="email"
                  placeholder={t("contactEmailPlaceholder")}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                {t("contactMessage")}
              </label>
              <div className="relative">
                <MessageSquare
                  size={18}
                  className={`absolute top-4 ${
                    dir === "ltr" ? "left-4" : "right-4"
                  } text-gray-400`}
                />
                <textarea
                  rows={4}
                  name="message"
                  placeholder={t("contactMessagePlaceholder")}
                  className={`min-h-[120px] w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 ${
                    dir === "ltr" ? "pl-11" : "pr-11"
                  } text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-[#259DF3] focus:bg-white focus:ring-2 focus:ring-[#259DF3]/20 md:min-h-[140px] md:text-base`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative inline-flex items-center gap-2 rounded-xl bg-[#259DF3] px-8 py-3 text-sm font-semibold text-white shadow-md shadow-[#259DF3]/30 transition-all hover:bg-[#1782d1] hover:shadow-lg hover:shadow-[#259DF3]/40 disabled:opacity-60 disabled:hover:shadow-md md:px-10 md:py-3.5 md:text-base"
              >
                <span>{status === "loading" ? t("contactSending") : t("contactSendMessage")}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <p className="mt-4 text-center text-green-600 bg-green-50 rounded-lg py-2">
                {t("contactSuccessMessage")}
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-center text-red-600 bg-red-50 rounded-lg py-2">
                {t("contactErrorMessage")}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}