import ContactForm from "@/src/form/ContactForm";

const ContactFormArea = () => {
  return (
    <section className="contact__form-area pt-180 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="contact__form-2">
              <h3 className="contact__form-2-title">Send a message</h3>
              {/* form start */}
              <ContactForm />
              {/* form end */}
              <p className="ajax-response"></p>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormArea;