// ==========================================================================
// 1. Dynamic Skills Rendering
// Requirement: Store at least 5 skills (name and level) in a JavaScript array
// and render them onto the page with code instead of typing them in HTML.
// ==========================================================================
const skills = [
  { name: "HTML5 & CSS3 (SASS)", level: "Advanced" },
  { name: "Java", level: "Beginner" },
  { name: "Python", level: "Intermediate" },
  { name: "Kotlin & React Native", level: "Beginner" },
  { name: "Git, GitHub & VS Code", level: "Intermediate" },
  { name: "Android Studio & Figma", level: "Advanced" },
  { name: "CapCut Pro & Canva", level: "Advanced" },
  { name: "Microsoft Excel & PowerPoint", level: "Advanced" }
];

const skillsListElement = document.getElementById("skills-list");

// Loop through each skill object and create an <li> item inside <ul id="skills-list">
for (let i = 0; i < skills.length; i++) {
  const currentSkill = skills[i];

  const listItem = document.createElement("li");
  listItem.className = "skill-item";

  const skillName = document.createElement("span");
  skillName.className = "skill-name";
  skillName.textContent = currentSkill.name;

  const skillLevel = document.createElement("span");
  skillLevel.className = "skill-meta";
  skillLevel.textContent = " — " + currentSkill.level;

  listItem.appendChild(skillName);
  listItem.appendChild(skillLevel);
  skillsListElement.appendChild(listItem);
}

// ==========================================================================
// 2. Show More / Show Less Button (Experience & Certifications Section)
// Requirement: Reveal and collapse extra details in the Experience section.
// ==========================================================================
const toggleDetailsBtn = document.getElementById("toggle-details-btn");
const extraExperienceBox = document.getElementById("extra-experience");

toggleDetailsBtn.addEventListener("click", function () {
  // Check if the extra details section is currently hidden
  const isCurrentlyHidden = extraExperienceBox.hidden;

  if (isCurrentlyHidden) {
    extraExperienceBox.hidden = false;
    toggleDetailsBtn.textContent = "Show less";
    toggleDetailsBtn.setAttribute("aria-expanded", "true");
  } else {
    extraExperienceBox.hidden = true;
    toggleDetailsBtn.textContent = "Show more";
    toggleDetailsBtn.setAttribute("aria-expanded", "false");
  }
});

// ==========================================================================
// 3. Theme Toggle (Light Mode / Dark Mode)
// Requirement: Toggle a CSS class on <body> to switch color variables.
// ==========================================================================
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // Toggle the "dark-theme" class on the <body> element
  const isDarkMode = document.body.classList.toggle("dark-theme");

  // Update the button label so the user knows which mode they can switch to
  if (isDarkMode) {
    themeToggleBtn.textContent = "Light Mode";
    themeToggleBtn.setAttribute("aria-pressed", "true");
  } else {
    themeToggleBtn.textContent = "Dark Mode";
    themeToggleBtn.setAttribute("aria-pressed", "false");
  }
});

// ==========================================================================
// 4. Mobile Burger Menu Toggle
// Shows or hides the navigation links when the burger button is clicked.
// ==========================================================================
const menuToggleBtn = document.getElementById("menu-toggle");
const navLinksList = document.getElementById("nav-links");

menuToggleBtn.addEventListener("click", function () {
  const isMenuOpen = navLinksList.classList.toggle("open");
  menuToggleBtn.setAttribute("aria-expanded", String(isMenuOpen));
});

// Close the mobile menu automatically after clicking a navigation link
const navAnchors = navLinksList.querySelectorAll("a");
for (let i = 0; i < navAnchors.length; i++) {
  navAnchors[i].addEventListener("click", function () {
    navLinksList.classList.remove("open");
    menuToggleBtn.setAttribute("aria-expanded", "false");
  });
}

// ==========================================================================
// 5. Contact Form Validation
// Checks that Name is not empty, Email is valid, and Message >= 20 characters.
// ==========================================================================
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("sender-name");
const emailInput = document.getElementById("sender-email");
const messageInput = document.getElementById("sender-message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const formSuccess = document.getElementById("form-success");

contactForm.addEventListener("submit", function (event) {
  // Prevent the browser from reloading the page on submit
  event.preventDefault();

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  formSuccess.textContent = "";

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  let isFormValid = true;

  // 1. Validate Name (required)
  if (nameValue === "") {
    nameError.textContent = "Please enter your full name.";
    isFormValid = false;
  }

  // 2. Validate Email (must contain "@" and ".")
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "" || !emailPattern.test(emailValue)) {
    emailError.textContent = "Please enter a valid email address (for example, name@example.com).";
    isFormValid = false;
  }

  // 3. Validate Message (at least 20 characters)
  if (messageValue.length < 20) {
    messageError.textContent = "Please enter a message of at least 20 characters.";
    isFormValid = false;
  }

  // If all fields pass validation, show confirmation and reset the inputs
  if (isFormValid) {
    formSuccess.textContent = "Thank you, " + nameValue + "! Your message has been validated and is ready to send.";
    contactForm.reset();
  }
});
