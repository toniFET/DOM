/*create Navbar dynamically*/
function createNav() {

    const navEntry = ["The Best", "Saint", "Suspension", "Sattle"];
    const bingo = document.querySelector("ul");

    for (let entry of navEntry) {
       let li = document.createElement("li");
       li.innerHTML += `<button class="button";>${entry}</button>`;
       let target = document.getElementById(entry.toLowerCase())
       li.addEventListener("click", () => {
        target.scrollIntoView({behavior: "smooth", block: "start"})
        })
       bingo.appendChild(li);
    }
}

createNav();

/*Checks which part of the Page is in View, and changes its color*/
function partInView () {

    function InViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }    

    const cards = ["the best", "saint", "suspension", "sattle"]
    for (let item of cards) {
            
        let InView = document.getElementById(item);

        window.addEventListener(
        "scroll",
        function(event) {
            if (InViewport(InView)) {
            InView.classList.add("active");
            } else {
            InView.classList.remove("active");
        }
        },
        false
        );
    }
}

partInView();
