export const Card = ({info}) => {

    console.log("Info card: ", info.name);
    return(
        <div className='result'>
            <div>
            <span style={{color: 'black', fontWeight: "bold"}}>Hola </span> <span style={{color: 'black'}}>{info.name}</span>
            </div>
            <div>
            <span style={{color: 'black', fontWeight: "bold"}}>Esta es tu canción favorita: </span> <span style={{color: 'black'}}>{info.favoriteSong}</span>
            </div>
        </div>
    );
}