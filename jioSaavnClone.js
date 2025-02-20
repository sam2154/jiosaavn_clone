/* ////----------------Prifile SubManu Menu added CSS  START*/
document.getElementById("profilePic").addEventListener("click", function () {
    document.getElementById("submenu").classList.toggle("active");
});

// Close dropdown if clicked outside
document.addEventListener("click", function (event) {
    const submenu = document.getElementById("submenu");
    const profilePic = document.getElementById("profilePic");
    if (!submenu.contains(event.target) && !profilePic.contains(event.target)) {
        submenu.classList.remove("active");
    }
});
/* ////----------------Prifile SubManu Menu added CSS  END*/

// Language SubManu JS START
document.addEventListener('click', function(event) {
    const menu = document.getElementById('toggle-menu');
    const nav = document.querySelector('.nav');
    if (!nav.contains(event.target)) {
        menu.checked = false;
    }
});
// Language SubManu JS END
