
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center my-12">
            <p className="text-white text-2xl">{subHeading}</p>
            <h3 className="text-3xl">{heading}</h3>
        </div>
    );
};

export default SectionTitle;