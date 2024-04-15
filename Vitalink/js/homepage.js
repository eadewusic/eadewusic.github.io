// const doc = document;
// const menuOpen = doc.querySelector(".menu");
// const menuClose = doc.querySelector(".close");
// const overlay = doc.querySelector(".overlay");

// menuOpen.addEventListener("click", () => {
//   overlay.classList.add("overlay--active");
// });

// menuClose.addEventListener("click", () => {
//   overlay.classList.remove("overlay--active");
// });

// Qualified Doctors Section
export var counter = 1;
            setInterval(function () {
                document.getElementById('radio' + counter).checked = true;
                counter++;
                if (counter > 5) {
                    counter = 1;
                }
            }, 5000);