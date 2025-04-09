document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");//helps to find the sidebar element using the class name
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    hamburgerMenu.addEventListener("click", function ()//adds a click event listener to the hamburger menu 
    {
        sidebar.classList.toggle("sidebar-active");// triggers the class named"side-bar active" on each time clicked
    });
});
//Responsive searchbar code:
window.addEventListener("resize", function () {
    const searchBar = document.querySelector(".search-bar");
    if (window.innerWidth < 600) {
        searchBar.placeholder = "Search...";
    } else {
        searchBar.placeholder = "Search for videos...";
    }
});
function adjustVideoGrid() {
    const videoGrid = document.querySelector(".video-grid");
    if (window.innerWidth < 768) {
        videoGrid.style.gridTemplateColumns = "1fr"; // Single column for small screens
    } else if (window.innerWidth < 1024) {
        videoGrid.style.gridTemplateColumns = "1fr 1fr"; // Two columns for tablets
    } else {
        videoGrid.style.gridTemplateColumns = "1fr 1fr 1fr"; // Three columns for larger screens
    }
}

  function adjustShortsGrid() {
    const grid = document.querySelector('.short-grid');// Select the grid element


    const width = window.innerWidth;

    if (width < 600) {
      grid.style.gridTemplateColumns = '1fr'; // 1 column
    } else if (width < 900) {
      grid.style.gridTemplateColumns = '1fr 1fr'; // 2 columns
    } else {
      grid.style.gridTemplateColumns = '1fr 1fr 1fr 1fr'; // 4columns
    }
  }

  // Run on load
  document.addEventListener('DOMContentLoaded', adjustShortsGrid);

  // Run on resize
  window.addEventListener('resize', adjustShortsGrid);



window.addEventListener("resize", adjustVideoGrid);
document.addEventListener("DOMContentLoaded", adjustVideoGrid);

//code for dark mode:

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.createElement("button");//dynamically creates the button element
    //styles for dark mode button
    darkModeToggle.style.backgroundColor = "#333";
    darkModeToggle.style.color = "#fff";
    darkModeToggle.style.border = "none";
    darkModeToggle.innerText = "Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.bottom = "10px";
    darkModeToggle.style.right = "10px";
    darkModeToggle.style.padding = "10px";
    darkModeToggle.style.cursor = "pointer";
    document.body.appendChild(darkModeToggle);// inserts the dark mode button into the body of the document

    darkModeToggle.addEventListener("click", function () {// on click insertion of the dark mode button
        document.body.classList.toggle("dark-mode");
        //vice versa
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.innerText = "Light Mode";
            darkModeToggle.style.backgroundColor = "#fff";
            darkModeToggle.style.color = "#333";
        } else {
            darkModeToggle.innerText = "Dark Mode";
            darkModeToggle.style.backgroundColor = "#333";
            darkModeToggle.style.color = "#fff";
        }
    });
});
//select all images in the document
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        rootMargin: "0px",
        threshold: 0.1
    });

    images.forEach(img => {
        img.dataset.src = img.src;
        img.src = "";
        observer.observe(img);
    });
});

//code for the notification and account dropdowns:
document.addEventListener("DOMContentLoaded", () => {
    // Selecting all  elements
    const notificationIcon = document.querySelector(".notifications-icon-container");
    const notificationDropdown = document.querySelector(".notifications-dropdown");
    const accountContainer = document.querySelector(".account-container");
    const accountDropdown = document.querySelector(".account-dropdown");

    // Toggle Notification Dropdown
    notificationIcon.addEventListener("click", (event) => {// adding click event to the notification icon
        event.stopPropagation();
        const isVisible = notificationDropdown.style.display === "block";
        notificationDropdown.style.display = isVisible ? "none" : "block";// is visible is true then hide it or else show it.
        setTimeout(() => {
            notificationDropdown.style.opacity = isVisible ? "0" : "1";
            notificationDropdown.style.transform = isVisible ? "scale(0.95)" : "scale(1)";
        }, 10);
    });

    // Toggle Account Dropdown
    accountContainer.addEventListener("click", (event) => {
        event.stopPropagation();// Prevents the click event from bubbling up to the document(automatically closes the dropdown)
        // initially setting the variable to block by checking whether already it is visible or not;
        const isVisible = accountDropdown.style.display === "block";
        //if visible on click hide it
        //if not-visible on click show it.
        accountDropdown.style.display = isVisible ? "none" : "block";
        setTimeout(() => {// runs the function after 10 milliseconds
            accountDropdown.style.opacity = isVisible ? "0" : "1";// setting the opacity to 0 if visible and 1 if not visible
            accountDropdown.style.transform = isVisible ? "scale(0.95)" : "scale(1)";
        }, 10);
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", () => {
        notificationDropdown.style.opacity = "0";
        notificationDropdown.style.transform = "scale(0.95)";
        setTimeout(() => notificationDropdown.style.display = "none", 300);

        accountDropdown.style.opacity = "0";
        accountDropdown.style.transform = "scale(0.95)";
        setTimeout(() => accountDropdown.style.display = "none", 300);
    });

    // Prevent closing dropdown when clicking inside
    notificationDropdown.addEventListener("click", (event) => event.stopPropagation());
    accountDropdown.addEventListener("click", (event) => event.stopPropagation());
});
