const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
    removeBorder();
    removeShow();

    //add border to current tab
    this.classList.add('tab-border');

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
//tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));