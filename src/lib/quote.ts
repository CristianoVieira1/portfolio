export type QuoteValues = {
  name: string;
  email: string;
  whatsapp: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
};

const WHATSAPP_NUMBER = "5551998884446";

export function buildQuoteMessage(values: QuoteValues, lang: "pt" | "en") {
  if (lang === "en") {
    return [
      "Hello Cristiano, I would like a quote.",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `WhatsApp: ${values.whatsapp}`,
      `Project type: ${values.projectType}`,
      `Approximate budget: ${values.budget || "Not defined"}`,
      `Desired timeline: ${values.timeline}`,
      `Description: ${values.description}`,
    ].join("\n");
  }

  return [
    "Olá Cristiano, quero um orçamento.",
    `Nome: ${values.name}`,
    `E-mail: ${values.email}`,
    `WhatsApp: ${values.whatsapp}`,
    `Tipo de projeto: ${values.projectType}`,
    `Investimento aproximado: ${values.budget || "Não definido"}`,
    `Prazo desejado: ${values.timeline}`,
    `Descrição: ${values.description}`,
  ].join("\n");
}

export function quoteWhatsappUrl(values: QuoteValues, lang: "pt" | "en") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildQuoteMessage(values, lang))}`;
}

export function plainWhatsappUrl(lang: "pt" | "en") {
  const text =
    lang === "en"
      ? "Hello Cristiano, I have a software project and would like to talk."
      : "Olá Cristiano, tenho um projeto de software e gostaria de conversar.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function mailtoUrl(lang: "pt" | "en") {
  const subject =
    lang === "en" ? "Software project quote" : "Orçamento de software";
  return `mailto:cristianovieirati@gmail.com?subject=${encodeURIComponent(subject)}`;
}
