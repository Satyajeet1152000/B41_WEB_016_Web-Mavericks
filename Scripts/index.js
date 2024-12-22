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
        await getDatabaseData("properties")
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



    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });
  
