import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/recipes")
            .then((res) => {
                console.log(res.data);
                setItems(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home recipes={recipes} />} />
                <Route path='/about' element={<About />} />
                <Route path='/recipes/:id' element={<RecipePage />} />
            </Routes>
        </div>
        // <div className='App'>
        //     {Recipes.map((Recipes) => {
        //         return <p key={Recipes.id}>{Recipes.recipename}</p>;
        //     })}
        // </div>
    );
}

export default App;
