import ContactFormArea from "@/src/components/contact/ContactArea";
import FooterArea from "@/src/layout/footer/FooterArea";
import HeaderArea from "@/src/layout/header/HeaderArea";
import Wrapper from "@/src/layout/Wrapper";

const ContactMain = () => {
    return (
        <Wrapper>
            <HeaderArea/>
            <ContactFormArea />
            <FooterArea/>
        </Wrapper>
    );
};

export default ContactMain;