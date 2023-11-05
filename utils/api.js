export async function fetchDataFromAPI(endpoint) {

    try {
        const reponse = fetch(`https://ibayjimwell.vercel.app/api/${endpoint}`)
        const data = (await reponse).json();
        return data;
    } catch(e) {
        console.error("Error fetching data:", e)
        return null
    }

}