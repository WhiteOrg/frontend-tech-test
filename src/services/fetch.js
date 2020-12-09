const ENDPOINT= `https://run.mocky.io/v3/e60fb51f-02b1-4ede-bd82-6c0481b5edda`;

const fetchData = async () => {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    return data;
}

export default fetchData;
