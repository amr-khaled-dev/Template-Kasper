let textDivList = Array.from(document.querySelectorAll("#text .content"));
let bullets = Array.from(document.querySelectorAll("#mainBullets li"));
let currentIndex = 1;
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let filterList = document.getElementById("shuffle");
let imgContainer = Array.from(document.querySelectorAll("#imgContainer .box"));


function updateDisplay() {
    textDivList.forEach(div => {
        div.classList.remove("active");
        if (div.getAttribute("data-index") == currentIndex) {
            div.classList.add("active")
        }
    });

    bullets.forEach(bullet => {
        bullet.classList.remove("active");
        if (bullet.getAttribute("data-index") === currentIndex.toString()) {
            bullet.classList.add("active")
        }
    })
}

function goToNext() {
    if (currentIndex === textDivList.length) {
        nextBtn.disabled = true;
        return false;
    }
    currentIndex++;
    updateDisplay();
    nextBtn.disabled = false;
    prevBtn.disabled = false;
}

function goToPrev() {
    if (currentIndex === 1) {
        prevBtn.disabled = true;
        return false;
    }
    currentIndex--;
    updateDisplay();
    nextBtn.disabled = false;
    prevBtn.disabled = false;
}

function filtering(filter) {
    imgContainer.forEach(box => {
        box.classList.remove("active");
        if (box.getAttribute("data-category") === filter || filter === "all") {
            box.classList.add("active")
        }
    });
}

nextBtn.addEventListener("click", goToNext);
prevBtn.addEventListener("click", goToPrev);
filterList.addEventListener("click", (e) => {
    if (e.target.closest("li")) {
        e.target.closest("ul").querySelectorAll("li").forEach(li => {
            li.classList.remove("active");
        });
        e.target.closest("li").classList.add("active");
        let filter = e.target.closest("li").getAttribute("filter");
        filtering(filter);
    }
});

// Initial display setup
updateDisplay();
filtering("all");