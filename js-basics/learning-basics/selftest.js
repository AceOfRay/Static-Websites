
const button_1 = document.getElementById('button_1');
let count = 0;
let clicks_arr = [];

button_1.addEventListener('click', function() {
        count += 1
        clicks_arr.push(count);
        console.log(clicks_arr);
});