
interface SingleServiceProps {
    icon: React.ReactNode;
    title: string;
    subtitle: React.ReactNode;
}

const SingleService:React.FC<SingleServiceProps> = ({ icon, title, subtitle }) => {
    return (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="features__item-13 d-flex align-items-start mb-40">
                <div className="features__icon-13">
                    <span>{icon}</span>
                </div>
                <div className="features__content-13">
                    <h3 className="features__title-13">{title}</h3>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
