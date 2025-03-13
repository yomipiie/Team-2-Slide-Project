let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countitem = items.length;
let itemactive = 0;

// event next click
next.onclick = function () {
    itemactive = itemactive + 1;
    if (itemactive >= countitem) {
        itemactive = 0;
    }
    showslider();
};

// event perv click
prev.onclick = function () {
    itemactive = itemactive - 1;
    if (itemactive < 0) {
        itemactive = countitem - 1
    }
    showslider();
};
let refreshinterval = setInterval(() => {
    next.click();
},8000)
function showslider() {
    // remove old active item
    let itemactiveold = document.querySelector('.slider .list .item.active');
    let thumbnailactiveold = document.querySelector('.thumbnail .item.active');

    if (itemactiveold) itemactiveold.classList.remove('active');
    if (thumbnailactiveold) thumbnailactiveold.classList.remove('active');

    // activate new item
    items[itemactive].classList.add('active');
    thumbnails[itemactive].classList.add('active');
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemactive = index;
        showslider();
    })
})
