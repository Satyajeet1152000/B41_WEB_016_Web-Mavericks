export async function getDatabaseData(endpoint) {
    try {
        const response = await fetch(`${window.apiBaseUrl}${endpoint}.json`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
