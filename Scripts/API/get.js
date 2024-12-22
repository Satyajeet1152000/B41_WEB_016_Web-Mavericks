export async function getDatabaseData(endpoint) {
    try {
        const response = await fetch(`${window.apiBaseUrl}${endpoint}.json`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = Object.entries(await response.json());
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export async function getUserByEmail(email) {
    const users = await getDatabaseData("/users");
    return users.find((user) => user[1].email === email);
}
