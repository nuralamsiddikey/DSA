# check palindrome

def isPalindrome(num):
    num = str(num)
    left = 0
    right = len(num) -1
    
    while left < right:
        if(num[left] != num[right]):
            return False
        else:
            left += 1
            right -= 1
    return True

num = 123211
print(isPalindrome(num))
