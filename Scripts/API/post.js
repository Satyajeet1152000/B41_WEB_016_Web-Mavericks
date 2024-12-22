export async function postDatabaseData(section, data) {
    try {
        const response = await fetch(`${window.apiBaseUrl}${section}.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
}
