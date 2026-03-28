import { use } from "react";
import ModelCard from "./ModelCard";
import Cart from "./Cart";

const Main = ({modelsPromise, cart, setCart, setActiveTab}) => {
    const models = use(modelsPromise)
    // console.log(models)

    return ( 
        <main className="">
            <div className="tabs tabs-box flex justify-center bg-transparent">
                <input type="radio" name="my_tabs_1" className="tab w-30 rounded-lg`" aria-label="Models" defaultChecked />
                <input type="radio" name="my_tabs_1" className="tab w-30 rounded-lg" aria-label="Cart" />
            </div>

            <div className="text-center my-5">
                <h1 className="text-3xl">Choose Your AI Model</h1>
                <p>One subscription gives you access to all frontier AI models</p>
            </div>

            {<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    models.map(model=>{
                        return <ModelCard
                        key={model.id}
                        model={model}
                        cart={cart}
                        setCart={setCart}
                        ></ModelCard>
                    })
                }
            </div>}
            <Cart></Cart>
        </main>
     );
}
 
export default Main;