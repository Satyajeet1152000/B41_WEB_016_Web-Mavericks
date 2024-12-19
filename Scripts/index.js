function ImageCarasoulGenerator(parentContainer, innerContainer, data) {
    const cardContainer = document.querySelector(
        `#${parentContainer} #${innerContainer}`
    );
    cardContainer.setAttribute(
        "class",
        "flex justify-center items-center gap-4 bbr pl-4 overflow-x-auto scrollbar-hide"
    );

    cardContainer.innerHTML = data;

    // Add padding to the first and last cards for better visibility
    const firstCard = cardContainer.firstElementChild;
    const lastCard = cardContainer.lastElementChild;

    if (firstCard) firstCard.style.marginLeft = "500px"; // Adjust as needed
    // if (lastCard) lastCard.style.marginRight = "16px";

    // next button
    let nextButton = document.createElement("button");
    nextButton.setAttribute(
        "class",
        "bg-gray-200 absolute h-12 w-12 text-xl font-bold rounded-full right-5"
    );
    nextButton.innerHTML = `<i class="ri-arrow-right-s-line"></i>`;

    // prev button
    let prevButton = document.createElement("button");
    prevButton.setAttribute(
        "class",
        "bg-gray-200 absolute h-12 w-12 text-2xl font-bold rounded-full left-5"
    );
    prevButton.innerHTML = `<i class="ri-arrow-left-s-line"></i>`;

    const parent = cardContainer.parentElement;
    parent.appendChild(prevButton);
    parent.appendChild(nextButton);

    // Event Listeners
    nextButton.addEventListener("click", () => {
        cardContainer.scrollBy({
            left: 0,
            behavior: "smooth",
        });
    });

    prevButton.addEventListener("click", () => {
        cardContainer.scrollBy({
            left: -200,
            behavior: "smooth",
        });
    });
}

function ExploreIndiaImageCarasoul(parentContainer, innerContainer, data) {
    let htmlData = "";
    data.forEach((d) => {
        htmlData += `
        <div class="flex-shrink-0">
            <img
                src=${d.imgSrc}
                alt=${d.location}
                 class="w-52 h-52 rounded-lg object-cover"
            />
            <h3 class="font-bold text-xl">${d.location}</h3>
            <p class="text-gray-500">${d.properties} properties</p>
        </div>
        `;
    });

    // const cardContainer = document.querySelector(`#${parentContainer}`);

    // cardContainer.innerHTML = htmlData
    ImageCarasoulGenerator(parentContainer, innerContainer, htmlData);
}

const expIndiaData = [
    {
        imgSrc: "https://q-xx.bstatic.com/xdata/images/city/2000x2000/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=",
        properties: 2048,
        location: "Bangalore",
    },
    {
        imgSrc: "https://q-xx.bstatic.com/xdata/images/city/2000x2000/684741.jpg?k=8c41bcf34cc0d96ff2208796dc11e047e10da8adb0430b01bc2716ac99443fee&o=",
        properties: 330,
        location: "Mysore",
    },
    {
        imgSrc: "https://r-xx.bstatic.com/xdata/images/region/2000x2000/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=",
        properties: 3670,
        location: "Goa",
    },
    {
        imgSrc: "https://q-xx.bstatic.com/xdata/images/city/2000x2000/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o=",
        properties: 472,
        location: "Ooty",
    },
    {
        imgSrc: "https://q-xx.bstatic.com/xdata/images/city/2000x2000/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=",
        properties: 1652,
        location: "Mumbai",
    },
    {
        imgSrc: "https://q-xx.bstatic.com/xdata/images/region/2000x2000/70669.jpg?k=8c2f6c7512748330b72821f9de3a000915e7df4dcef73711e1e4a6b68c42f38e&o=",
        properties: 687,
        location: "Coorg",
    },
    {
        imgSrc: "https://r-xx.bstatic.com/xdata/images/city/2000x2000/822956.jpg?k=c553b16ee67434b26dae6d59a85a92169df50a1355b722ade24541356e497d9e&o=",
        properties: 145,
        location: "Manglore",
    },
    {
        imgSrc: "https://r-xx.bstatic.com/xdata/images/city/2000x2000/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o=",
        properties: 814,
        location: "Hyderabad",
    },
    {
        imgSrc: "https://q-xx.bstatic.com/xdata/images/city/2000x2000/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=",
        properties: 1406,
        location: "Chennai",
    },
    {
        imgSrc: "https://q-xx.bstatic.com/xdata/images/city/2000x2000/684769.jpg?k=146b18e42b9eb74078f2e80e07e573e8dbac879208b86bae451f99882f566a99&o=",
        properties: 694,
        location: "Puducherry",
    },
];
ExploreIndiaImageCarasoul("explore-india", "card-container", expIndiaData);
