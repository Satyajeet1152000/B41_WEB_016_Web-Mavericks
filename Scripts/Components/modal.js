const contentContainer = document.getElementById("content-container");
const tabButtons = document.querySelectorAll(".tab-btn");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalForm = document.getElementById("modal-form");
const formFields = document.getElementById("form-fields");
const cancelBtn = document.getElementById("cancel-btn");

let currentSection = null;
let currentData = [];
