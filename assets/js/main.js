const menuButton = document.querySelector("[data-menu-button]");
const mobilePanel = document.querySelector("[data-mobile-panel]");

if (menuButton && mobilePanel) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobilePanel.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const enquirySelect = document.querySelector("#enquiry-type");
const conditionalFields = document.querySelectorAll("[data-show-for]");
const form = document.querySelector("[data-contact-form]");
const successNote = document.querySelector("[data-success-note]");

function syncConditionalFields() {
  if (!enquirySelect) return;

  const value = enquirySelect.value;
  conditionalFields.forEach((field) => {
    const rules = field.dataset.showFor.split(" ");
    field.hidden = !rules.includes(value);
  });
}

if (enquirySelect) {
  enquirySelect.addEventListener("change", syncConditionalFields);
  syncConditionalFields();
}

if (form && successNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    successNote.classList.add("is-visible");
    successNote.focus();
  });
}
