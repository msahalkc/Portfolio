let activeIndex = 0;
let nextIndex = 1;

document.addEventListener('wheel', onMouseScroll)

function onMouseScroll(){
    
    nextIndex = activeIndex + 1 <= 3 ? activeIndex + 1 :0;

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
}

function changeSection(value) {
    allNavs = [0,1,2,3]

    selectedNav = value;
    
    const index = allNavs.indexOf(value);

    allNavs.splice(index, 1);

    const hightlightNav = document.querySelectorAll(`[data-index = "${selectedNav}"]`);
    
    const nonHighlightedNav1 = document.querySelectorAll(`[data-index = "${allNavs[0]}"]`);
    const nonHighlightedNav2 = document.querySelectorAll(`[data-index = "${allNavs[1]}"]`);
    const nonHighlightedNav3 = document.querySelectorAll(`[data-index = "${allNavs[2]}"]`);

    // console.log(currentGroup, nextGroup);
    hightlightNav.forEach(element => {
        element.dataset.status = "active";
    });

    nonHighlightedNav1.forEach(element => {
        element.dataset.status = "inactive";
    });

    nonHighlightedNav2.forEach(element => {
        element.dataset.status = "inactive";
    });

    nonHighlightedNav3.forEach(element => {
        element.dataset.status = "inactive";
    });
}