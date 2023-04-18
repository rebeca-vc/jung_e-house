import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "./style/ShoppingList.css";

const ShoppingList = ({ cart, updateCart }) => {
    // const categories = plantList.reduce(
    //     (catlist, plant) =>
    //         catlist.includes(plant.category) ? catlist : catlist.concat(plant.category),
    //         []
    // ) 
        // console.log(categories)

    return (
        // <div>
        //     {/* <div style={{display: "flex", padding: 20, alignContent: "center", justifyContent: "center"}}>
        //         {categories.map((cat) => (
        //             <div key={cat} style={{margin: 20}}> {cat} </div>
        //         ))} */}
        //     </div>
        <div>
            <ul className="jh-plant-list">
                {plantList.map(({ id, cover, name, water, light }) => (
                    <div className="plant" key={id}>
                        <PlantItem 
                            id={id}
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                        />
                        <button className="add" onClick={() => updateCart(cart + 1)}> Add </button>

                    </div>
                    ))}
            </ul>
        </div>
    );
}

export default ShoppingList;

