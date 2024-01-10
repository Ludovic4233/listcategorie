import { Link } from 'react-router-dom';

const HomePage = () => {

    const categories = [
        { id: 1, name: 'Meneur'},
        { id: 2, name: 'Arrière'},
        { id: 3, name: 'Pivot'}
    ];
    
    return (
        <>
            <h1>Liste Catégories</h1>
            <ul>
                {categories.map(
                    (categorie) => {
                        return (<Link to={`/details/${categorie.id}`}><li>{categorie.name}</li></Link>)
                    }
                )}
            </ul>
        </>
    )
}

export default HomePage;