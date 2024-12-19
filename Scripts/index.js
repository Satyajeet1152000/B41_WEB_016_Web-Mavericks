import ImageCarasoulGenerator from "./Components/ImageCarasoulGenerator.js";
import { browsePropertyBangloreData, exploreIndiaData } from "./data.js";

function ExploreIndiaImageCarasoul(containerId, data) {
    let cardHtmlData = "";
    data.forEach((d) => {
        cardHtmlData += `
        <div class="swiper-slide">
            <img
                src=${d.imgSrc}
                alt=${d.location}
                 class="w-60 h-48 rounded-lg object-cover"
            />
            <h3 class="font-bold text-xl">${d.location}</h3>
            <p class="text-gray-500">${d.properties} properties</p>
        </div>
        `;
    });

    const headingHtml = `
        <div class="my-4">
            <h1 class="text-3xl font-bold">Explore India</h1>
            <p class="text-gray-500">
                These popular destinations have a lot to offer
            </p>
        </div>
    `;

    ImageCarasoulGenerator(containerId, cardHtmlData, headingHtml);
}
ExploreIndiaImageCarasoul("explore-india", exploreIndiaData);

function BangalorePropertyImageCarasoul(containerId, data) {
    let cardHtmlData = "";
    data.forEach((d) => {
        cardHtmlData += `
        <div class="swiper-slide">
            <img
                src=${d.imgSrc}
                alt=${d.location}
                 class="w-80 h-80 rounded-lg object-cover"
            />
            <h3 class="font-bold text-xl">${d.types}</h3>
            <p class="text-gray-500">${d.info}</p>
            <p class="text-gray-500">${d.availablity} available</p>
        </div>
        `;
    });

    const headingHtml = `
        <div class="my-4">
            <h1 class="text-3xl font-bold">
                Browse by property type in Bangalore
            </h1>
        </div>
    `;

    const breakpoints = {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 4 },
        1536: { slidesPerView: 4 },
    };

    ImageCarasoulGenerator(containerId, cardHtmlData, headingHtml, breakpoints);
}
BangalorePropertyImageCarasoul("property-banglore", browsePropertyBangloreData);
