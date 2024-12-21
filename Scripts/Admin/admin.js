import activeBtnController from "../activeButtonController.js";
import {
    browsePropertyBangloreData,
    DealsOfWeekendData,
    exploreIndiaData,
    OffersData,
    QuickAndEasyTripPlannerData,
    TopUniquePropertiesData,
    TrendingDestinationsData,
} from "../data.js";

window.apiBaseUrl = "https://your-api-base-url.com/api"; // Replace with your backend API base URL

const contentContainer = document.getElementById("content-container");
const tabButtons = document.querySelectorAll(".tab-btn");
let currentSection = null;
let currentData = [];

const activeBtnCtrl = new activeBtnController(tabButtons);
activeBtnCtrl.update("offers");

const sections = {
    offers: "Offers",
    "explore-india": "Explore India",
    "bangalore-properties": "Properties",
    "trending-destinations": "Trending Destinations",
    "trip-planner": "Quick & Easy Trip ",
    "deals-weekend": "Deals Of Weekend",
    "unique-properties": "Unique Properties",
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

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const section = button.dataset.section;

        activeBtnCtrl.update(section);
        loadSectionData(section);
    });
});

async function loadSectionData(section) {
    // const endpoint = `${apiBaseUrl}/${sections[section]}`;
    try {
        // const response = await fetch(endpoint);
        // const data = await response.json();
        currentData = apiData[section];

        renderTable(section, currentData);
    } catch (error) {
        console.error("Failed to fetch data:", error);
        contentContainer.innerHTML = `<p class="text-red-500">Failed to load data.</p>`;
    }
}
loadSectionData("offers");

function renderTable(section, data) {
    let html = `<div class="flex justify-between mb-4">
                    <h2 class="text-2xl font-bold">${sections[
                        section
                    ].toUpperCase()}</h2>
                    <button class="bg-green-500 text-white px-4 py-2 rounded" onclick="handleAddNewBtn('create')">Add New</button>
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
                            <td class="border border-gray-300 px-4 py-2 text-center">
                                <div class="inline-flex space-x-2">
                                    <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded" onclick="handleEditButton(${index})">
                                    
                                        <i class="ri-pencil-line"></i>
                                    </button>
                                    <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" 
                                    onclick="handleDeleteButton(${index})"><i class="ri-delete-bin-6-line"></i></button>
                                </div>
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

function handleEditButton(index) {
    openModal("edit", currentData, index);
}

function handleAddNewBtn(type) {
    // console.log(type);
    openModal(type, currentData);
}
function handleDeleteButton(index) {
    deleteItem(index);
    // openModal("edit", currentData[index], index);
}
window.handleAddNewBtn = handleAddNewBtn;
window.handleEditButton = handleEditButton;
window.handleDeleteButton = handleDeleteButton;
