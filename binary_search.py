def binary_search(list, target):
    low = 0
    high = len(list) - 1

    while low <= high:
        mid = (low + high) / 2
        guess = list[mid]
        if guess == target:
            return mid
        if guess < target:
            low = mid + 1
        else:
            high = mid - 1

    return None

myList = [1,2,3,4,5,6,7,8,9,10]   

print binary_search(myList, 9);    

