import {
    browsePropertyBangloreData,
    DealsOfWeekendData,
    exploreIndiaData,
    OffersData,
    QuickAndEasyTripPlannerData,
    TopUniquePropertiesData,
    TrendingDestinationsData,
} from "./data.js";
import {
    BangalorePropertyImageCarasoul,
    DealsOfWeekend,
    ExploreIndiaImageCarasoul,
    Offers,
    QuickAndEasyTripPlanner,
    TopUniqueProperties,
    TrendingDestinations,
} from "./mainSection.js";

Offers("offers", OffersData);
ExploreIndiaImageCarasoul("explore-india", exploreIndiaData);
BangalorePropertyImageCarasoul("property-banglore", browsePropertyBangloreData);
TrendingDestinations("trending-destination", TrendingDestinationsData);
QuickAndEasyTripPlanner("quick-and-easy", QuickAndEasyTripPlannerData);
DealsOfWeekend("deals-of-weekends", DealsOfWeekendData);
TopUniqueProperties("top-uniqie-property", TopUniquePropertiesData);
