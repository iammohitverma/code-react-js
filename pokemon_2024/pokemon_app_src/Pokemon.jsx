function Pokemon({ Pokemon }) {
    // console.log(Pokemon);
    return (
        <>
            <div className="col-lg-4" >
                <div className="card text-center p-5" >
                    <img src={Pokemon.sprites.other.dream_world.front_default} className="card-img-top" alt="..." style={{ height: "100px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{Pokemon.name}</h5>
                        <span className="badge text-bg-primary">
                            {
                                Pokemon.types.map((element) => element.type.name).join(" and ")
                            }
                        </span>
                        <p className="card-text"> Speed: &nbsp;
                            {
                                Pokemon.stats[5].base_stat
                            }
                        </p>
                        <span className="badge text-bg-warning">
                            {
                                Pokemon.abilities.map((element) => element.ability.name).slice(0, 1).join(" and ")
                            }
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pokemon;