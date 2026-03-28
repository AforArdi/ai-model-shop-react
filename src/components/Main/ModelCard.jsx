import { useState } from "react";

const ModelCard = ({model, cart, setCart}) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleSubscribeBtn=()=>{
        setIsSelected(prev=> !prev)
        setCart(prev=> ({
            ...prev,
            cart
        }))
    }
    
    return ( 
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                src={model.image}
                alt={model.title}
                className="h-40 w-40 object-contain p-2" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{model.title}</h2>
                <p>{model.description}</p>
                <p className="card-title">${model.price}/month</p>
                <div className="card-actions justify-end">
                    <button onClick={handleSubscribeBtn} disabled={isSelected} className="btn btn-secondary w-full">
                        {isSelected ? 'Subscribed' : 'Subscribe'}
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default ModelCard;