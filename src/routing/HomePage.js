import { Link } from 'react-router-dom';

const HomePage = ({ categories }) => {
    
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