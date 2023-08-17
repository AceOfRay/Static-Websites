
def din_slid(list, target):
    left, right, current_sum = 0, 0, 0
    min_length = float('inf')
    while right < len(list):
        current_sum = current_sum + list[right]
        while left <=right and current_sum >= target:
            min_length = min(min_length, right - left + 1)
            current_sum = current_sum - list[left]
            left += 1
        right += 1
    return min_length

list = [1, 2, 3, 4]
t = 6
print(din_slid(list, t))
    