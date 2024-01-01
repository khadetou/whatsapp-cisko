"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactEmail } from "@/emails/contact-form-email";
import { sendEmail } from "@/action";
import { ContactFormSchema } from "@/lib/schema";
import toast from "react-hot-toast";

interface ContactUsProps {
  contactUs: {
    subtitle: string;
    title: string;
    paragraph: string;
    form: {
      placeholders: {
        name: string;
        email: string;
        phone: string;
        subject: string;
        occupation: string;
      };
      messagePlaceholder: string;
      submitButton: string;
    };
  };
}

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const ContactUs: FC<ContactUsProps> = ({
  contactUs: {
    subtitle,
    title,
    paragraph,
    form: {
      placeholders: { name, email, phone, subject, occupation },
      messagePlaceholder,
      submitButton,
    },
  },
}) => {
  // USE FORM

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });
  const [messageSent, setMessageSent] = useState(false);
  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      toast.success("Email sent successfully");
      setMessageSent(true);
      reset();
      return;
    }
    console.log(result?.error);
    toast.error("Email not sent");
  };

  return (
    <section className="contact-us">
      <div className="shape-contactus">
        <Image
          className="place-shape01"
          src="/images/shapes/rectangle12.png"
          alt=""
          width={159}
          height={175}
        />
        <Image
          className="place-shape02"
          src="/images/shapes/pie-half08.png"
          alt=""
          width={81}
          height={57}
        />
        <Image
          className="place-shape03"
          src="/images/shapes/pie-half09.png"
          alt=""
          width={93}
          height={69}
        />
        <Image
          className="place-shape04"
          src="/images/shapes/rectangle13.png"
          alt=""
          width={111}
          height={134}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="contact-wrap">
              <h4 className="!tw-text-primary">{subtitle}</h4>
              <h2>{title}</h2>
              <p>{paragraph}</p>
              {messageSent && (
                <div role="alert" className="tw-alert tw-alert-success tw-mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="tw-stroke-current tw-shrink-0 tw-h-6 tw-w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Your message has been sent!</span>
                </div>
              )}
              <div className="contact-formv1">
                <form
                  onSubmit={handleSubmit(processForm)}
                  className="!tw-bg-secondary"
                >
                  <div className="formv1">
                    <div className="tw-w-full tw-flex tw-flex-col tw-mr-0 md:tw-mr-[30px] tw-mb-[20px] md:tw-mb-[30px]">
                      <input
                        type="text"
                        {...register("name")}
                        placeholder={name}
                        className={
                          errors.name?.message
                            ? "tw-input !tw-mr-0 !tw-mb-3 !tw-h-[inherit] !tw-rounded-none tw-input-bordered tw-input-error"
                            : "!tw-m-0"
                        }
                      />
                      {errors.name?.message && (
                        <div
                          role="alert"
                          className="tw-alert tw-justify-items-start tw-grid-cols-[auto_minmax(auto,1fr)] !tw-p-2 !tw-rounded-none !tw-grid-flow-col !tw-bg-white tw-alert-error"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="tw-stroke-current !tw-text-red-600 tw-shrink-0 tw-h-6 tw-w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>
                            <span className="!tw-text-red-600">
                              {errors.name?.message}
                            </span>
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="tw-w-full tw-flex tw-flex-col tw-mr-0 md:tw-mr-[30px] tw-mb-[20px] md:tw-mb-[30px]">
                      <input
                        type="email"
                        {...register("email")}
                        placeholder={email}
                        className={
                          errors.email?.message
                            ? "tw-input !tw-mr-0 !tw-mb-3 !tw-h-[inherit] !tw-rounded-none tw-input-bordered tw-input-error"
                            : "!tw-m-0"
                        }
                      />
                      {errors.email?.message && (
                        <div
                          role="alert"
                          className="tw-alert tw-justify-items-start tw-grid-cols-[auto_minmax(auto,1fr)] !tw-p-2 !tw-rounded-none !tw-grid-flow-col !tw-bg-white tw-alert-error"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="tw-stroke-current !tw-text-red-600 tw-shrink-0 tw-h-6 tw-w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="!tw-text-red-600">
                            {errors.email?.message}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="formv1">
                    <div className="tw-w-full tw-flex tw-flex-col tw-mr-0 md:tw-mr-[30px] tw-mb-[20px] md:tw-mb-[30px]">
                      <input
                        type="text"
                        {...register("phone")}
                        placeholder={phone}
                        className={
                          errors.phone?.message
                            ? "tw-input !tw-mr-0 !tw-mb-3 !tw-h-[inherit] !tw-rounded-none tw-input-bordered tw-input-error"
                            : "!tw-m-0"
                        }
                      />
                      {errors.email?.message && (
                        <div
                          role="alert"
                          className="tw-alert tw-justify-items-start tw-grid-cols-[auto_minmax(auto,1fr)] !tw-p-2 !tw-rounded-none !tw-grid-flow-col !tw-bg-white tw-alert-error"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="tw-stroke-current !tw-text-red-600 tw-shrink-0 tw-h-6 tw-w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="!tw-text-red-600">
                            {errors.phone?.message}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="tw-w-full tw-flex tw-flex-col tw-mr-0 md:tw-mr-[30px] tw-mb-[20px] md:tw-mb-[30px]">
                      <input
                        type="text"
                        {...register("subject")}
                        placeholder={subject}
                        className={
                          errors.phone?.message
                            ? "tw-input !tw-mr-0 !tw-mb-3 !tw-h-[inherit] !tw-rounded-none tw-input-bordered tw-input-error"
                            : "!tw-m-0"
                        }
                      />
                      {errors.subject?.message && (
                        <div
                          role="alert"
                          className="tw-alert tw-justify-items-start tw-grid-cols-[auto_minmax(auto,1fr)] !tw-p-2 !tw-rounded-none !tw-grid-flow-col !tw-bg-white tw-alert-error"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="tw-stroke-current !tw-text-red-600 tw-shrink-0 tw-h-6 tw-w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="!tw-text-red-600">
                            {errors.subject?.message}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="formv1">
                    <div className="tw-w-full tw-flex tw-flex-col tw-mr-0 md:tw-mr-[30px] tw-mb-[20px] md:tw-mb-[30px]">
                      <textarea
                        {...register("message")}
                        placeholder={messagePlaceholder}
                        className={
                          errors.email?.message
                            ? "tw-input !tw-mr-0 !tw-mb-3 !tw-h-[inherit] !tw-rounded-none tw-input-bordered tw-input-error"
                            : "!tw-m-0"
                        }
                      ></textarea>
                      {errors.message?.message && (
                        <div
                          role="alert"
                          className="tw-alert tw-justify-items-start tw-grid-cols-[auto_minmax(auto,1fr)] !tw-p-2 !tw-rounded-none !tw-grid-flow-col !tw-bg-white tw-alert-error"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="tw-stroke-current !tw-text-red-600 tw-shrink-0 tw-h-6 tw-w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="!tw-text-red-600">
                            {errors.message?.message}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    disabled={isSubmitting}
                    className="btn-donate"
                    type="submit"
                  >
                    {isSubmitting ? "Sending..." : submitButton}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
