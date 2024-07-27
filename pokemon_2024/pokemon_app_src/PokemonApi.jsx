import { useState } from "react";
import Pokemon from "./Pokemon";
import { useEffect } from "react";

function PokemonApi() {
    const [searchVal, updateSearchVal] = useState("");
    const [apiData, updateApiData] = useState([]);
    const [loading, updateLoading] = useState(true);
    const [error, updateError] = useState(null);

    const apiURL = "https://pokeapi.co/api/v2/pokemon/?offset=9&limit=9"; // Fixed URL

    let destuctureData = "";
    const getNestedApiData = (allPokemons) => {
        destuctureData = allPokemons.map(async (Pokemon) => {
            try {
                const response = await fetch(Pokemon.url);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        });
    }

    const getDataFromApi = async (apiURL) => {
        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            getNestedApiData(data.results);
            const detailedResponse = await Promise.all(destuctureData);
            updateApiData(detailedResponse);
            updateLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            updateLoading(false);
            updateError(error.message || 'An error occurred');
        }
    }

    useEffect(() => {
        getDataFromApi(apiURL);
    }, []);

    // search functionality
    const searchData = apiData.filter((data) => {
        return data.name.includes(searchVal);
    })

    if (loading) return (
        <>
            <p>Loading...</p>
        </>
    )
    if (error) return (
        <>
            <p>{error}</p>
        </>
    )
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="search" className="form-label">Search</label>
                                    <input type="email" className="form-control" id="search" value={searchVal} onChange={(e) => updateSearchVal(e.target.value)} />
                                </div>
                            </form>
                        </div>
                        {
                            searchData.map((data) => {
                                return (
                                    <Pokemon key={data.id} Pokemon={data} />
                                )
                            })
                        }
                    </div>
                </div>
            </section >
        </>
    )
}
export default PokemonApi;