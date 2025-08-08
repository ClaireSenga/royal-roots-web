import emailjs from "@emailjs/browser";

export const sendEmail = async (form: HTMLFormElement) => {
  try {
    const result = await emailjs.sendForm(
      "service_3r1qruv",      // ✅ Your Service ID
      "template_17rt2qe",     // ✅ Your Template ID
      form,
      "MRnqNXRysRqqHDggh"     // ✅ Your Public API Key
    );
    return result;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
};
