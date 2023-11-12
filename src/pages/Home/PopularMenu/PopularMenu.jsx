import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    /* const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data => {
            const popular = data.filter(item => item.category === 'popular');
            setMenu(popular)})
    },[]) */
    return (
        <section>
            <SectionTitle
                heading={"From Our menu"}
                subHeading={"Popular Items"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item=> <MenuItem
                    key={item._id} item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;