import { useContext } from "react";
import { AssetContext } from "../GrandFather/GrandFather";


const Friend = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Friend</h2>
            <p>Has : {gift}</p>

        </div>
    );
};

export default Friend;