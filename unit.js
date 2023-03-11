var inch =
    document.getElementById('inch');
var feet =
    document.getElementById('feet');
feet.addEventListener('input', function () {
    let z = this.value;
    let i = z * 12;
    inch.value = i;
});

inch.addEventListener('input', function () {
    let i = this.value;
    let z = i / 12;
    if(!Number.isInteger(z)){
        z=z.toFixed(2)
    }
    feet.value = z;
});