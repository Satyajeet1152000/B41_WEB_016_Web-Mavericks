const contentContainer = document.getElementById("content-container");
const tabButtons = document.querySelectorAll(".tab-btn");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalForm = document.getElementById("modal-form");
const formFields = document.getElementById("form-fields");
const cancelBtn = document.getElementById("cancel-btn");

modal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.querySelector("div").addEventListener("click", (e) => {
    e.stopPropagation();
});

function openModal(action, currentData = null, index) {
    modalTitle.textContent = action === "create" ? "Add New Item" : "Edit Item";
    formFields.innerHTML = "";

    if (action === "edit") {
        console.log(index);
        const item = currentData[index];
        Object.keys(item).forEach((key) => {
            formFields.innerHTML += `
                <div>
                    <label class="block text-gray-700">${key}</label>
                    <input type="text" name="${key}" value="${item[key]}" class="w-full border border-gray-300 rounded px-4 py-2">
                </div>`;
        });
    } else {
        Object.keys(currentData[0] || {}).forEach((key) => {
            formFields.innerHTML += `
                <div>
                    <label class="block text-gray-700">${key}</label>
                    <input type="text" name="${key}" class="w-full border border-gray-300 rounded px-4 py-2">
                </div>`;
        });
    }

    modalForm.onsubmit = (e) => handleFormSubmit(e, action, index);
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

cancelBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

async function handleFormSubmit(e, action, index) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(modalForm));
    try {
        if (action === "create") {
            await fetch(`${apiBaseUrl}/${sections[currentSection]}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
        } else {
            await fetch(`${apiBaseUrl}/${sections[currentSection]}/${index}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
        }
        modal.classList.add("hidden");
        loadSectionData(currentSection);
    } catch (error) {
        console.error("Failed to submit form:", error);
    }
}

async function deleteItem(index) {
    if (confirm("Are you sure you want to delete this item?")) {
        try {
            await fetch(`${apiBaseUrl}/${sections[currentSection]}/${index}`, {
                method: "DELETE",
            });
            loadSectionData(currentSection);
        } catch (error) {
            console.error("Failed to delete item:", error);
        }
    }
}

window.openModal = openModal;
window.deleteItem = deleteItem;
