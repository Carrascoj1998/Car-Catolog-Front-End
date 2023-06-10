
function VehicleItem(props){
    return (
        <li>
            <div>
                <h3>{props.year}</h3>
                <h3>{props.make}</h3>
                <h3>{props.model}</h3>
                <h3>{props.color}</h3>
                <h3>{props.vin}</h3>
                <div>
                    <button>My Favorites</button>
                </div>
            </div>
        </li>
    );
}

export default VehicleItem;