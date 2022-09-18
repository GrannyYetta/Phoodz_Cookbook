import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/posts")
            .then((res) => {
                console.log(res.data);
                setItems(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return <div className='App'></div>;
}

export default App;
