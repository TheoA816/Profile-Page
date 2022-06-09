function toggleDropdown () {

    const dropdown = document.querySelector('.dropdown-list');
    if (dropdown.style.display === "none") {
        dropdown.style.display = "flex";
    } else {
        dropdown.style.display = "none";
    }

    const icon = document.querySelector('#dropdown-icon');
    icon.classList.toggle('rotate');
}

function main () {

    const items = document.querySelectorAll(".list_item");

    for (const item of items) {

        item.addEventListener("click", (e) => {

            items.forEach(function(currentLink) {
                currentLink.classList.remove('list_item-active');
            });

            // if target already had .active. remove it. Otherwise, add it
            item.classList.toggle('list_item-active');
        })
    }
}

function scrollToSection (section) {

    document.querySelector(section).scrollIntoView({
        behavior: "smooth", block: "start", inline: "nearest"
    });
}