export async function fetchDataFromAPI(endpoint) {

    try {
        const reponse = fetch(`http://localhost:3000/api/${endpoint}`)
        const data = (await reponse).json();
        return data;
    } catch(e) {
        console.error("Error fetching data:", e)
        return null
    }

}