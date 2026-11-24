
// Page information
const pageInformation = {
    dashboard: {
        title: "Dashboard",
        subtitle: "Welcome to your student management workspace."
    },
    students: {
        title: "Students",
        subtitle: "Manage student records."
    },
    departments: {
        title: "Departments",
        subtitle: "Manage academic departments."
    },
    lecturers: {
        title: "Lecturers",
        subtitle: "Manage lecturer records."
    },
    courses: {
        title: "Courses",
        subtitle: "Manage academic courses."
    },
    registrations: {
        title: "Registrations",
        subtitle: "Manage student course registrations."
    }
};

// Get HTML elements
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const menuButton = document.getElementById("menuButton");
const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");


// Display current date
function displayCurrentDate() {
    const dateElement = document.getElementById("currentDate");

    dateElement.textContent = new Date().toLocaleDateString("en-NG", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}


// Navigate between dashboard sections
function navigateToPage(page) {
    const information = pageInformation[page];

    if (!information) return;

    // Update page heading
    pageTitle.textContent = information.title;
    pageSubtitle.textContent = information.subtitle;

    // Show the appropriate page
    document.getElementById("dashboardPage").classList.toggle(
        "hidden",
        page !== "dashboard"
    );

    document.getElementById("managementPage").classList.toggle(
        "hidden",
        page === "dashboard"
    );

    // Update management page heading
    document.getElementById("managementHeading").textContent =
        `${information.title} Management`;

    // Update active navigation link
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.toggle(
            "active",
            link.dataset.page === page
        );
    });

    // Close mobile sidebar after navigation
    closeSidebar();
}


// Open mobile sidebar
function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    sidebarOverlay.classList.remove("hidden");
}


// Close mobile sidebar
function closeSidebar() {
    if (window.innerWidth < 1024) {
        sidebar.classList.add("-translate-x-full");
        sidebarOverlay.classList.add("hidden");
    }
}


// Navigation event listeners
document.querySelectorAll("[data-page]").forEach((element) => {
    element.addEventListener("click", () => {
        navigateToPage(element.dataset.page);
    });
});


// Mobile menu events
menuButton.addEventListener("click", openSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);


// Initialise dashboard
displayCurrentDate();

// Render Lucide icons
lucide.createIcons();
