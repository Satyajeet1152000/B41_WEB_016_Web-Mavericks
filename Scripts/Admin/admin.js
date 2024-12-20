import {
    browsePropertyBangloreData,
    DealsOfWeekendData,
    exploreIndiaData,
    OffersData,
    QuickAndEasyTripPlannerData,
    TopUniquePropertiesData,
    TrendingDestinationsData,
} from "../data.js";

const apiBaseUrl = "https://your-api-base-url.com/api"; // Replace with your backend API base URL

const contentContainer = document.getElementById("content-container");
const tabButtons = document.querySelectorAll(".tab-btn");

const sections = {
    offers: "OffersData",
    "explore-india": "ExploreIndiaData",
    "bangalore-properties": "BrowsePropertyBangloreData",
    "trending-destinations": "TrendingDestinationsData",
    "trip-planner": "TripPlannerData",
    "deals-weekend": "DealsOfWeekendData",
    "unique-properties": "TopUniquePropertiesData",
};

const apiData = {
    offers: OffersData,
    "explore-india": exploreIndiaData,
    "bangalore-properties": browsePropertyBangloreData,
    "trending-destinations": TrendingDestinationsData,
    "trip-planner": QuickAndEasyTripPlannerData,
    "deals-weekend": DealsOfWeekendData,
    "unique-properties": TopUniquePropertiesData,
};

let activeBtn = tabButtons[0]; // Set the first button as active by default

// Initialize the first button with active styles
activeBtn.className =
    "hover:bg-blue-600 hover:text-white border-2 border-blue-600 text-blue-600 px-4 py-2 mr-2 rounded-md";

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const section = button.dataset.section;

        // Remove active styles from the previously active button
        if (activeBtn !== button) {
            activeBtn.className =
                "hover:bg-blue-600 hover:text-white border-2 border-blue-600 text-blue-600 px-4 py-2 mr-2 rounded-md";
        }

        // Set the clicked button as the active button
        activeBtn = button;
        activeBtn.className =
            "hover:bg-blue-600 hover:text-white border-2 border-blue-600 text-blue-600 px-4 py-2 mr-2 rounded-md";

        // Load the section's data
        loadSectionData(section);
    });
});

async function loadSectionData(section) {
    // const endpoint = `${apiBaseUrl}/${sections[section]}`;
    try {
        // const response = await fetch(endpoint);
        // const data = await response.json();
        renderTable(section, apiData[section]);
    } catch (error) {
        console.error("Failed to fetch data:", error);
        contentContainer.innerHTML = `<p class="text-red-500">Failed to load data.</p>`;
    }
}

function renderTable(section, data) {
    let html = `<div class="flex justify-between mb-4">
                    <h2 class="text-2xl font-bold">${section
                        .replace("-", " ")
                        .toUpperCase()}</h2>
                    <button class="bg-green-500 text-white px-4 py-2 rounded" onclick="openModal('create')">Add New</button>
                </div>`;
    if (data.length === 0) {
        html += `<p class="text-center text-gray-600">No data available.</p>`;
    } else {
        html += `
            <table class="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr class="bg-gray-200">
                        ${Object.keys(data[0])
                            .map(
                                (key) =>
                                    `<th class="border border-gray-300 px-4 py-2 w-fit">${key}</th>`
                            )
                            .join("")}
                        <th class="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${data
                        .map(
                            (item, index) => `
                        <tr>
                            ${Object.keys(item)
                                .map(
                                    (key) =>
                                        `<td class="border border-gray-300 px-4 py-2">${
                                            key == "imgSrc"
                                                ? `<img src=${item[key]} alt="" class="w-24"></img>`
                                                : item[key]
                                        }</td>`
                                )
                                .join("")}
                            <td class="border border-gray-300 px-4 py-2 text-center flex">
                                <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded mr-2" onclick="openModal('edit', ${index})"><i class="ri-pencil-line"></i></button>
                                <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onclick="deleteItem(${index})"><i class="ri-delete-bin-6-line"></i></button>
                            </td>
                        </tr>
                    `
                        )
                        .join("")}
                </tbody>
            </table>`;
    }
    contentContainer.innerHTML = html;
}

renderTable(sections.offers, apiData["offers"]);
