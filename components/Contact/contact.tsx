"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast"
import { FormErrors } from "@/types/formTypes";
import { z } from "zod";

const contactSchema = z.object({
  user_name: z.string().min(1, "Name is required"),
  user_email: z.string().min(1, "Email is required").email("Invalid email"),
  user_subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

/*--------------------
* Contact Section
----------------------*/



export default function Contact() {
    const { toast } = useToast()

  const initialFormState = {
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "" ? ["Please fill this field"] : [],
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form data
    const formValues = {
      user_name: form.current?.user_name.value,
      user_email: form.current?.user_email.value,
      user_subject: form.current?.user_subject.value,
      message: form.current?.message.value,
    };

    const result = contactSchema.safeParse(formValues);
    
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      setFormErrors(errors);
      toast({
        title: "Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    emailjs
      .sendForm(
        'service_ivue7qg', 
        'template_af9stjf', 
        form.current as HTMLFormElement,
        'HBF2TH4vUhSDWi1Ea' 
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setFormData(initialFormState);
          setFormErrors({});
          if (form.current) {
            form.current.reset();
          }
          toast({
            title: "Success!",
            description: "Your message has been sent successfully.",
            variant: "default",
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            variant: "destructive",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <section
        data-scroll-data="4"
        id="contactus"
        className="section contactus-section bg-slate-900"
        style={{
          backgroundImage: "url(img/effect/bg-effect-3.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 ">
              <div className="p-[25px] md:p-[35px] bg-white">
                <h6 className="text-[32px] font-[600] text-black mb-[5px]">
                  Get in touch
                </h6>
                <p className="text-[18px] mb-[30px]">
                  Our friendly team would love to hear from you.
                </p>

                <form
                  ref={form as React.RefObject<HTMLFormElement>}
                  id="contact-form"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-6">
                      <div className="form-group">
                        <label className="form-label">First name</label>
                        <input
                          name="user_name"
                          id="name"
                          placeholder="Name *"
                          className={`form-control ${formErrors.user_name ? 'border-red-500' : ''} ${
                            isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                          }`}
                          type="text"
                          onChange={handleChange}
                          disabled={isSubmitting}
                          value={formData.user_name}
                        />
                        {formErrors.user_name && (
                          <span className="text-red-500 text-sm">{formErrors.user_name[0]}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div className="form-group">
                        <label className="form-label">Your Email</label>
                        <input
                          name="user_email"
                          id="email"
                          placeholder="Email *"
                          className={`form-control ${formErrors.user_email ? 'border-red-500' : ''}`}
                          type="email"
                          onChange={handleChange}
                          disabled={isSubmitting}
                          value={formData.user_email}
                        />
                        {formErrors.user_email && (
                          <span className="text-red-500 text-sm">{formErrors.user_email[0]}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="form-group">
                        <label className="form-label">Subject</label>
                        <input
                          name="user_subject"
                          id="subject"
                          placeholder="Subject *"
                          className={`form-control ${formErrors.user_subject ? 'border-red-500' : ''}`}
                          type="text"
                          onChange={handleChange}
                          disabled={isSubmitting}
                          value={formData.user_subject}
                        />
                        {formErrors.user_subject && (
                          <span className="text-red-500 text-sm">{formErrors.user_subject[0]}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="form-group">
                        <label className="form-label">Your message</label>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your message *"
                          rows={4}
                          className={`form-control ${formErrors.message ? 'border-red-500' : ''}`}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          value={formData.message}
                        ></textarea>
                        {formErrors.message && (
                          <span className="text-red-500 text-sm">{formErrors.message[0]}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="send">
                        <button
                          className="px-btn px-btn-theme2"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 flex">
              <div className="lg:max-w-[410px] w-full lg:ml-auto pt-[50px] lg:pt-0">
                <div className="pb-10">
                  <img
                    className="w-3/4"
                    src="img/nelson-again.png"
                    title=""
                    alt=""
                  />
                </div>
                <ul className="contact-infos">
                  <li>
                    <div className="icon bg-1">
                      <FaPhoneAlt />
                    </div>
                    <div className="col">
                      <h5>Phone</h5>
                      <a
                        href="tel:+12163041233"
                        className="text-[#fefefe] underline hover:text-[#fff] hover:no-underline"
                      >
                        +1 216 304 1233
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon bg-2">
                      <IoMdMail />
                    </div>
                    <div className="col">
                      <h5>Mail</h5>
                      <Link
                        className="text-[#fefefe] underline hover:text-[#fff] hover:no-underline"
                        href="mailto:nelsonbaguma08@gmail.com"
                      >
                        nelsonbaguma08@gmail.coms
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="icon bg-3">
                      <AiFillGithub />
                    </div>
                    <div className="col">
                      <h5>Visit My Github</h5>

                      <Link
                        target="_blank"
                        href="https://github.com/nelsonAndelson"
                        className="text-[#fefefe] underline hover:text-[#fff] hover:no-underline"
                      >
                        Github
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
