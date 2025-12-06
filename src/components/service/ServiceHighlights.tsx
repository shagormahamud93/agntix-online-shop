import PaymentIcon from "@/svg/PaymentIcon";
import RefundIcon from "@/svg/RefundIcon";
import ShippingCarIcon from "@/svg/ShippingCarIcon";
import SupportIcon from "@/svg/SupportIcon";
import SingleService from "./subComponent/SingleService";

const ServiceHighlights = () => {
  return (
    <>
      <section className="features__area pt-80 pb-20">
        <div className="container">
          <div className="row">
            <SingleService
              icon={<ShippingCarIcon />}
              title="Free Shipping"
              subtitle={
                <>
                  Free Shipping for orders <br /> over $120
                </>
              }
            />
            <SingleService
              icon={<RefundIcon />}
              title="Refund"
              subtitle={
                <>
                  Within 30 days for an <br /> exchange.
                </>
              }
            />
            <SingleService
              icon={<SupportIcon />}
              title="Support"
              subtitle={
                <>
                  24 hours a day, 7 days <br /> a week
                </>
              }
            />
            <SingleService
              icon={<PaymentIcon />}
              title="Payment"
              subtitle={
                <>
                  Pay with Multiple Credit <br /> Cards
                </>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHighlights;
