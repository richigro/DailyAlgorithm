# this is my graph structure in python
graph = {}
graph["you"] = ["Alice", "Bob", "Claire"]
graph["Bob"] = ["Anuj", "Peggy"]
graph["Alice"] = ["Peggy"]
graph["Claire"] = ["Thom", "Johny"]
graph["Anuj"] = []
graph["Peggy"] = []
graph["Thom"] = []
graph["Johny"] = []
# imports the queue library from collections
from collections import deque
# creates a queue
search_queue = deque()
search_queue += graph["you"]

print search_queue

# while the queue is not empty do the following
while search_queue:
  #grabs the first person in the queue
  person = search_queue.popleft()
  # checks person in the queue
  if person_is_seller(person):
    print person + " is a mango seller!"
    return True
  else:
    search_queue += graph[person]
  return False











def person_is_seller(name):
  return name[-1] == 'm'
