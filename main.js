let activeIndex = 0;
let nextIndex = 1;

document.addEventListener('wheel', () => {
    
    nextIndex = activeIndex + 1 <= 3 ? activeIndex + 1 :0;

    console.log(activeIndex, nextIndex);

    const currentGroup = document.querySelectorAll(`[data-index = "${activeIndex}"]`),
    nextGroup = document.querySelectorAll(`[data-index = "${nextIndex}"]`);

    currentGroup.forEach(element => {
        element.dataset.status = "inactive";
    });

    nextGroup.forEach(element => {
        element.dataset.status = "active";
    });

    activeIndex = nextIndex;

    nextIndex++;

    console.log(activeIndex, nextIndex);

})