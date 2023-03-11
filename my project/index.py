import os
print('Enter Number of Seconds to Shutdown System: ')
se = int(input())

strOne = 'Shutdown /s/t'
strTwo = str(se)
str = strOne+strTwo

os.system(str)