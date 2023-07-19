var togglebtn = document.querySelector(".togglebtn");
        var nav = document.querySelector(".navlinks");
        var links = document.querySelector(".navlinks a");
        togglebtn.addEventListener("click", function () {
            this.classList.toggle("click");
            nav.classList.toggle("open");
        })