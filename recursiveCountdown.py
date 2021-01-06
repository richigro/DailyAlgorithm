def recursiveCountDown(initialVal):
  print initialVal
  # base case
  if initialVal <= -100:
    return
  # recursive case
  recursiveCountDown(initialVal - 1)
  

recursiveCountDown(10)