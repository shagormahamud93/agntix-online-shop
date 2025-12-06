"use client";
import { contact_schema, ContactFormType } from "../types/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ErrorMsg from "./ErrorMassage";
import { toast } from "react-toastify";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contact_schema),
    mode: "onBlur",
  });

  const onSubmit = (data: ContactFormType) => {
    console.log("Form Submitted:", data);
    toast.success("Message sent successfully!");
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">

        {/* Name */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              {...register("name")}
              type="text"
              placeholder="Enter your name"
            />
            {errors.name && <ErrorMsg error={errors.name.message} />}
          </div>
        </div>

        {/* Email */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && <ErrorMsg error={errors.email.message} />}
          </div>
        </div>

        {/* Phone */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              {...register("phone")}
              type="text"
              placeholder="Mobile no"
            />
            {errors.phone && <ErrorMsg error={errors.phone.message} />}
          </div>
        </div>

        {/* Company */}
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              {...register("subject")}
              type="text"
              placeholder="Subject / Topic"
            />
            {errors.subject && <ErrorMsg error={errors.subject.message} />}
          </div>
        </div>

          {/* Order ID */}
        <div className="col-md-12">
          <div className="contact__input-2">
            <input
              {...register("orderid")}
              type="text"
              placeholder="Order ID"
            />
            {errors.subject && <ErrorMsg error={errors.subject.message} />}
          </div>
        </div>

        {/* Message */}
        <div className="col-md-12">
          <div className="contact__input-2">
            <textarea
              {...register("msg")}
              placeholder="Your message"
            ></textarea>
            {errors.msg && <ErrorMsg error={errors.msg.message} />}
          </div>
        </div>

        {/* Terms */}
        <div className="col-md-12">
          <div className="contact__agree d-flex align-items-start mb-25">
            <input
              className="e-check-input"
              type="checkbox"
              id="e-agree"
            />
            <label className="e-check-label" htmlFor="e-agree">
              I am bound by the terms of the Service I accept Privacy Policy.
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-md-5">
          <div className="contact__btn-2">
            <button type="submit" className="sk-btn">
              Send Message
            </button>
          </div>
        </div>

      </div>
    </form>
  );
};

export default ContactForm;
