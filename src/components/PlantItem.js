import CareScale from "./CareScale";
import "./style/PlantItem.css"

const handleClick = (type, amount, e) => {
    let string_alert = 'This plant requires a '
    if(amount === 3) string_alert += 'large'
    else if(amount === 2) string_alert += 'medium'
    else string_alert += 'small'
    string_alert += ' amount of ' + type

    alert(string_alert)
}

const PlantItem = ({ id, cover, name, water, light }) => {

    return(
        // Old thing 
        //  {isBestSale && <span>🔥</span>}

        <li key={id} className='jh-plant-item'>
            <img className='jh-plant-item-cover' src={cover} alt={`${name} cover`}/>
            {name}
            <div>
                <div onClick={() => handleClick("light", light)}>
                    <CareScale careType="light" scaleValue={light} />
                </div>
                <div onClick={() => handleClick("water", water)}>
                    <CareScale careType="water" scaleValue={water} />
                </div>
            </div>
        </li>
    )
}

export default PlantItem