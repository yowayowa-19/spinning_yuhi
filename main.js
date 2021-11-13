
let scale = 1;
window.addEventListener('wheel', function(event){
    const yuhi = this.document.getElementById('yuhi');
    scale += event.deltaY * -0.001;
    yuhi.style.transform = `scale(${scale})`;
});

function handleTouchMove(event) {
    event.preventDefault();
}
//スクロールの禁止
document.addEventListener('wheel', handleTouchMove, { passive: false });

function showProfile() {
    alert("profile");
}

function showHowToPlay() {
    alert("howtoplay");
}