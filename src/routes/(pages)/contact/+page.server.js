import { fail } from "@sveltejs/kit";
import { object, string, number, date, InferType } from "yup";

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const contactFormSchema = object({
      name: string().min(2, "too short").required("We only accept named users"),
      email: string().required().email(),
      message: string().required(),
    });

    try {
      const result = await contactFormSchema.validate(
        { name, email, message },
        { abortEarly: false }
      );

      const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSclmZ239HtDCsMu-EjBy-ZSYsuit2z0-DdsGLj6a6yt2ujCfw/formResponse?usp=pp_url&entry.842558629=${name}&entry.1774261948=${email}&entry.609857191=${message}& submit=Submit`;

      const res = await fetch(prefilledLink);

      return {
        success: true,
        status: "Form is submitted",
      };
    } catch (error) {
      console.log({ error });
      const errors = error.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});

      return {
        errors,
        name,
        email,
        message,
      };
    }
  },
};