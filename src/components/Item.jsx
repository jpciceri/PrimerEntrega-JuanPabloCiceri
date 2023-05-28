const Item = ({item}) => {
    return (
        <div className="col-md-3 my-4">  
            <div className="card" >
                <img src={item.imagen} className="card-img-top" alt={item.titulo}/>
                    <div className="card-body">
                        <h2>{item.titulo}</h2>
                        <p className="card-text">{item.descripcion} <br /><b>${item.precio}</b></p>
                    </div>
            </div>
        </div>  
    )
}

export default Item;