import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import './Featured.css';
const Featured = () => {
    return (
        <div className="Featured-item pt-8 my-20 bg-fixed">
            <SectionTitle subHeading={'Check it out'} heading={'Feature Items'}></SectionTitle>
            <div className="md:flex justify-center items-center pb-16 pt-12 px-36 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className="md:ml-8">
                    <p>Aug 20, 2023</p>
                    <h3 className="uppercase">Where can I see?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab in magnam aliquam nesciunt quas iste ipsum quidem minima tenetur eligendi? Eaque ipsa rerum, quasi nobis aspernatur, dolorum, perferendis a quidem voluptas officiis doloremque enim molestiae tempore distinctio accusamus ipsum autem?</p>
                    <button className="btn btn-outline border-0 border-b-2 mt-5">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;