import { getDatabaseData } from "./API/get.js";
import {
    BangalorePropertyImageCarasoul,
    DealsOfWeekend,
    ExploreIndiaImageCarasoul,
    Offers,
    QuickAndEasyTripPlanner,
    TopUniqueProperties,
    TrendingDestinations,
} from "./mainSection.js";

(async () => {
    Offers("offers", await getDatabaseData("offers"));
    ExploreIndiaImageCarasoul(
        "explore-india",
        await getDatabaseData("explore")
    );
    BangalorePropertyImageCarasoul(
        "property-banglore",
        await getDatabaseData("propertiesTypes")
    );

    TrendingDestinations(
        "trending-destination",
        await getDatabaseData("trendingDestinations")
    );
    QuickAndEasyTripPlanner(
        "quick-and-easy",
        await getDatabaseData("quickAndEasyTrip")
    );
    DealsOfWeekend(
        "deals-of-weekends",
        await getDatabaseData("dealsOfWeekend")
    );
    TopUniqueProperties(
        "top-uniqie-property",
        await getDatabaseData("topUniqueProperties")
    );
})();

document.querySelectorAll("#register-btn").forEach((b) => {
    b.addEventListener("click", function () {
        window.location.href = "register.html";
    });
});

document.querySelectorAll("#sign-in-btn").forEach((b) => {
    b.addEventListener("click", function () {
        window.location.href = "signin.html";
    });
});

// Check if user is logged in by looking for userInfo cookie
const userCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("userInfo="));

if (userCookie) {
    const userInfo = JSON.parse(userCookie.split("=")[1]);
    console.log("Logged in user:", userInfo);
    document
        .querySelectorAll("#register-btn, #sign-in-btn")
        .forEach((button) => {
            button.style.display = "none";
        });

    document.querySelectorAll("#user-account").forEach((userAccountBtn) => {
        if (userAccountBtn) {
            userAccountBtn.style.display = "block";

            // Create dropdown menu
            const dropdown = document.createElement("div");
            dropdown.className =
                "absolute w-48 bg-white rounded-md shadow-lg hidden p-2 text-xl font-semibold";
            dropdown.innerHTML = `
                <a href="" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 ">My Profile</a>
                <button id="logout-btn" class="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</button>
            `;
            userAccountBtn.parentElement.appendChild(dropdown);

            // Toggle dropdown on click
            userAccountBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                dropdown.classList.toggle("hidden");
                let pos = userAccountBtn.getBoundingClientRect();

                let dPos = dropdown.getBoundingClientRect();

                dropdown.style.top = pos.bottom + "px";
                dropdown.style.left = pos.right - dPos.width + "px";
            });

            // Hide dropdown when clicking outside
            document.addEventListener("click", () => {
                dropdown.classList.add("hidden");
            });

            // Handle logout
            dropdown
                .querySelector("#logout-btn")
                .addEventListener("click", () => {
                    document.cookie =
                        "userInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    window.location.reload();
                });
        }
    });
}

//    footer
