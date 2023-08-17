
const check_box = document.getElementById('cb_1');
const check_box_2 = document.getElementById('cb_2')
const check_box_3 = document.getElementById('cb_3')


check_box.addEventListener("change", function() {
    if (check_box.checked || check_box_2.checked || check_box_3.checked){
        console.log('Box_1 checked')
    }

    else {
        console.log('Box_1 unchecked')
    }
});

check_box_2.addEventListener('change', function() {
    if (check_box_2.checked){
        console.log('Box_2 checked')
    }
    else {
        console.log('Box_2 unchecked')
    }
});

check_box_3.addEventListener('change', function() {
    if (check_box_3.checked){
        console.log('Box_3 checked')
    }
    else {
        console.log('Box_3 unchecked')
    }
});