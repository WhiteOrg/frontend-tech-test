export const getDataFromAPI = async () => {
    try {
        const response = await fetch('https://run.mocky.io/v3/e60fb51f-02b1-4ede-bd82-6c0481b5edda')
        const data = await response.json()
        if (data) return data
    } catch (error) {
        throw new Error(error.message)
    }
    return false
}

