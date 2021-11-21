
let scale = 1;
window.addEventListener('wheel', function(event){
    const yuhi = this.document.getElementById('yuhi');
    scale += event.deltaY * -0.001;
    yuhi.style.transform = `scale(${scale})`;
});

var touchposition;
window.addEventListener('touchstart',function(event){
    touchposition = event.changedTouches[0].pageY;
})

window.addEventListener('touchmove', function(event){
    const yuhi = this.document.getElementById('yuhi');
    scale +=  (event.changedTouches[0].pageY - touchposition) * -0.001;
    yuhi.style.transform = `scale(${scale})`;
});


function handleTouchMove(event) {
    event.preventDefault();
}
function handleWheel(event){
    event.preventDefault();
}


//スクロールの禁止
document.addEventListener('wheel', handleTouchMove, { passive: false });
document.addEventListener('touchmove', handleWheel, { passive: false });

window.onload = function () { 
    const profileDiv = document.getElementById("profile");
    profileDiv.addEventListener('click', event => {
        profileDiv.style.visibility = 'hidden';
    })
};

function showProfile() {
    const target = document.getElementById("profile");
    target.style.visibility = 'visible';
}

function showHowToPlay() {
    alert("howtoplay");
}
