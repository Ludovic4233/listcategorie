import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetailPage = ({ detailsCategories }) => {
    console.log(detailsCategories);
    const { id } = useParams();
    const detail = detailsCategories.find((element) => element.id === parseInt(id));

    if(!detail) {
        return <div>detail not found</div>
    }

    return(
        <>
            <h1>detail</h1>
            <p>ID: { detail.id } Poste: { detail.name }</p> 
            <p>Description: { detail.description }</p> 
            <table>
                <thead>
                    <tr>
                        <th>Joueurs</th>
                        <th>Taille (m)</th>
                        <th>Franchise</th>
                    </tr>
                </thead>
                <tbody>
                    {detail.players.map((player) => {
                        return (
                            <tr>
                                <td>{ player.name }</td>
                                <td>{ player.size }</td>
                                <td>{ player.franchise }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to="/">retour à la page d'accueil</Link>
        </>
    )
}

export default DetailPage;