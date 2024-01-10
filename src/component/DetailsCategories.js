import DetailPage from "../routing/DetailPage";

const DetailsCategories = () => {

    const detailsCategories = [
        {
            id: 1,
            name: 'Meneur',
            description: "gérer le ballon et le jeu",
            players: [
                {
                    id:1,
                    name: "Stephen Curry",
                    size: 1.88,
                    franchise: "Warriors Golden State"
                },
                {
                    id:2,
                    name: "Tyrese Haliburton",
                    size: 1.96,
                    franchise: "Pacers Indiana"
                },
                {
                    id:3,
                    name: "Damian Lillard",
                    size: 1.88,
                    franchise: "Bucks de Milwaukee"
                }
            ]
        },
        {
            id: 2,
            name: 'Arrière',
            description: "épauler le meneur dans la création du jeu",
            players: [
                {
                    id:1,
                    name: "Shai Gilgeous-Alender",
                    size: 1.98,
                    franchise: "Thunder Oklahoma City"
                },
                {
                    id:2,
                    name: "James Harden",
                    size: 1.96,
                    franchise: " Clippers Los Angeles"
                },
                {
                    id:3,
                    name: "Jaylen Brown",
                    size: 2.13,
                    franchise: "Celtics Boston"
                }
            ]
        },
        {
            id: 3,
            name: 'Pivot',
            description: "Fait un chantier dans la raquette, contre et intimide en défense",
            players: [
                {
                    id:1,
                    name: "Nikola Jokić",
                    size: 2.13,
                    franchise: "Nuggets Denver"
                },
                {
                    id:2,
                    name: "Joel Embiid",
                    size: 2.13,
                    franchise: "76ers Philadelphie"
                },
                {
                    id:3,
                    name: "Domantas Sabonis",
                    size: 2.08,
                    franchise: "Kings Sacramento"
                }
            ]
        }
    ]
    
    return(
        <DetailPage detailsCategories = {detailsCategories}/>
    )
    
}

export default DetailsCategories;