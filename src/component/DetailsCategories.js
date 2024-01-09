import DetailPage from "../routing/DetailPage";

const DetailsCategories = () => {

    const detailsCategories = [
        {
            id: 1,
            name: 'sport',
            description: "Activité physique exercée dans le sens du jeu et de l'effort, et dont la pratique suppose un entraînement méthodique et le respect de règles."
        },
        {
            id: 2,
            name: 'film',
            description: "Un film est une œuvre du cinéma ou de l'audiovisuel"
        },
        {
            id: 3,
            name: 'voiture',
            description: "Véhicule automobile."
        }
    ]
    
    return(
        <DetailPage detailsCategories = {detailsCategories}/>
    )
    
}

export default DetailsCategories;