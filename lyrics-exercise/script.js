window.addEventListener("DOMContentLoaded", (event) => { 
    const checkpoint1 = 3350;
    const checkpoint2 = 4000;
    let opacity = 0;
    //document.getElementsByClassName("fadeImg")[0].style.visibility = hidden; //attempts to prevent img from showing at start

    window.addEventListener("scroll", (event2) => {
        const currentScroll = window.pageYOffset;
        //document.getElementsByClassName("fadeImg")[0].style.visibility = visible;
        if (currentScroll <= checkpoint1){
            opacity = 0;
        } else {
            opacity = currentScroll / checkpoint2; 
        }
        document.getElementsByClassName("fadeImg")[0].style.opacity = opacity;
    });
});

//unresolved issues: fadeIn image doesn't extend all the way to the left or top margins