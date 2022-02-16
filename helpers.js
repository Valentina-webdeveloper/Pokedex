function openImg(i) {
    currentImg = i;
    document.getElementById('id-openImg').style.display = "block";
    document.getElementById('id-fullImg').src = images[i]; 
}
