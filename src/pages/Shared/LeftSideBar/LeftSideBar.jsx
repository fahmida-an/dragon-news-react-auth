import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className="p-4">
            <h2 className="mt-3 mb-8 font-bold text-2xl">All Categories</h2>
            {
                categories.map(category => <Link className="block border h-14 text-center pt-4 mb-2 hover:bg-dark3" to={`/category/${category.id}`} key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideBar;