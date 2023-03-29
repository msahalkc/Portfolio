let activeIndex = 0;
let nextIndex = 1;

const groups = document.getElementsByClassName('sectionPage')

document.addEventListener('keypress', () => {
    
    nextIndex = activeIndex + 1 <= groups.length -1 ? activeIndex + 1 :0;

    console.log(activeIndex, nextIndex);

    const currentGroup = document.querySelectorAll(`[data-index = "${activeIndex}"]`),
    nextGroup = document.querySelectorAll(`[data-index = "${nextIndex}"]`)

    console.log(currentGroup);

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