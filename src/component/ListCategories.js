import HomePage from "../routing/HomePage";

const ListCategories = () => {
    const categories = [
        { id: 1, name: 'Sport'},
        { id: 2, name: 'Film'},
        { id: 3, name: 'Voiture'}
    ];

    return (
        <HomePage categories={categories}/>
    )
}

export default ListCategories;