const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>{greeting}</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;