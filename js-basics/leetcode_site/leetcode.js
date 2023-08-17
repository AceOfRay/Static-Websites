

let submit_btn = document.getElementById('button').value;

button.addEventListener('click', function() {
    let in_list = document.getElementById('list_input').value;
    let list = in_list.split(',');
    let target_num = parseFloat(document.getElementById('target_input').value);
    let result = submit(list, target_num)
    document.getElementById('result').textContent = 'The result is: ' + result;
});

function submit(list, target) {
    let left = 0;
    let right = 0;
    let current_sum = 0;
    let min_length = Number.POSITIVE_INFINITY;

    while (right < list.length) {
        current_sum = current_sum + list[right];

        while (left <= right && current_sum >= target) {
            min_length = Math.min(min_length, right - left + 1);
            current_sum = current_sum - list[left];
            left = left + 1;
        }

        right = right + 1;
    }

    return min_length !== Number.POSITIVE_INFINITY ? min_length : 0;
}



