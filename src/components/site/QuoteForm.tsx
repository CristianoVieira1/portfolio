import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { quoteCopy } from "@/content/copy";
import type { Lang } from "@/content/types";
import { track } from "@/lib/analytics";
import {
  buildQuoteMessage,
  quoteWhatsappUrl,
  type QuoteValues,
} from "@/lib/quote";

const empty: QuoteValues = {
  name: "",
  email: "",
  whatsapp: "",
  projectType: "",
  budget: "",
  timeline: "",
  description: "",
};

function emailjsReady() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() ?? "";
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() ?? "";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() ?? "";
  return {
    ready:
      Boolean(serviceId && templateId && publicKey) &&
      !serviceId.startsWith("your_"),
    serviceId,
    templateId,
    publicKey,
  };
}

export default function QuoteForm({ lang }: { lang: Lang }) {
  const t = quoteCopy;
  const started = useRef(false);
  const [values, setValues] = useState<QuoteValues>(empty);
  const [privacy, setPrivacy] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onChange = (field: keyof QuoteValues, value: string) => {
    if (!started.current) {
      started.current = true;
      track("form_start", { form_id: "quote" });
    }
    setValues((current) => ({ ...current, [field]: value }));
  };

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);

  const submitEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validEmail) {
      setStatus("error");
      setMessage(t.errorEmail[lang]);
      return;
    }
    if (!privacy) return;

    const config = emailjsReady();
    if (!config.ready) {
      setStatus("error");
      setMessage(t.errorConfig[lang]);
      return;
    }

    try {
      setStatus("sending");
      const result = await emailjs.send(
        config.serviceId,
        config.templateId,
        {
          name: values.name,
          email: values.email,
          phone: values.whatsapp,
          whatsapp: values.whatsapp,
          subject: values.projectType,
          projectType: values.projectType,
          budget: values.budget,
          timeline: values.timeline,
          message: buildQuoteMessage(values, lang),
          description: values.description,
        },
        { publicKey: config.publicKey },
      );

      if (result.status === 200) {
        setStatus("success");
        setMessage(t.success[lang]);
        setValues(empty);
        setPrivacy(false);
        started.current = false;
        track("form_submit_success", { form_id: "quote", method: "emailjs" });
        track("generate_lead", { form_id: "quote", method: "emailjs" });
      } else {
        setStatus("error");
        setMessage(t.errorSend[lang]);
      }
    } catch {
      setStatus("error");
      setMessage(t.errorGeneric[lang]);
    }
  };

  const sendWhatsapp = () => {
    if (!values.name || !values.description || !privacy) return;
    track("click_whatsapp", { source: "quote_form" });
    track("generate_lead", { form_id: "quote", method: "whatsapp" });
    window.open(quoteWhatsappUrl(values, lang), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="quote-form" onSubmit={submitEmail} noValidate>
      <div className="quote-grid">
        <label>
          {t.name[lang]}
          <input
            name="name"
            autoComplete="name"
            required
            value={values.name}
            onChange={(event) => onChange("name", event.target.value)}
          />
        </label>
        <label>
          {t.email[lang]}
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(event) => onChange("email", event.target.value)}
          />
        </label>
        <label>
          {t.whatsapp[lang]}
          <input
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            required
            value={values.whatsapp}
            onChange={(event) => onChange("whatsapp", event.target.value)}
          />
        </label>
        <label>
          {t.projectType[lang]}
          <select
            name="projectType"
            required
            value={values.projectType}
            onChange={(event) => onChange("projectType", event.target.value)}
          >
            <option value="">{lang === "pt" ? "Selecione" : "Select"}</option>
            {t.types[lang].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          {t.budget[lang]}
          <select
            name="budget"
            value={values.budget}
            onChange={(event) => onChange("budget", event.target.value)}
          >
            <option value="">{lang === "pt" ? "Opcional" : "Optional"}</option>
            {t.budgets[lang].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          {t.timeline[lang]}
          <select
            name="timeline"
            required
            value={values.timeline}
            onChange={(event) => onChange("timeline", event.target.value)}
          >
            <option value="">{lang === "pt" ? "Selecione" : "Select"}</option>
            {t.timelines[lang].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="quote-full">
          {t.description[lang]}
          <textarea
            name="description"
            required
            rows={6}
            value={values.description}
            onChange={(event) => onChange("description", event.target.value)}
          />
        </label>
      </div>
      <label className="quote-privacy">
        <input
          type="checkbox"
          checked={privacy}
          onChange={(event) => setPrivacy(event.target.checked)}
          required
        />
        {t.privacy[lang]}
      </label>
      {message && (
        <p className={status === "success" ? "quote-ok" : "quote-error"} role="status">
          {message}
        </p>
      )}
      <div className="quote-actions">
        <button className="button button-primary" type="submit" disabled={status === "sending" || !privacy}>
          {status === "sending" ? t.sending[lang] : t.submit[lang]}
        </button>
        <button
          className="button button-ghost"
          type="button"
          onClick={sendWhatsapp}
          disabled={!privacy}
        >
          {t.whatsappSend[lang]}
        </button>
      </div>
    </form>
  );
}
