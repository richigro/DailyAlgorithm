from collections import deque

graph = {
  "you": ["Alice", "Bob", "Claire"],
  "Bob": ["Anuj", "Peggy"],
  "Alice": ["Peggy"],
  "Claire": ["Thom", "Johny"],
  "Anuj": [],
  "Peggy": [],
  "Thom": [],
  "Johny": []
}

def search(name):
  # creates a new queue
  search_queue = deque()
  # enqueues array from dictionary graph
  search_queue += graph[name]
  # Stores the people already serached to avoid infinite loops
  searched = []

  # While the queue is not empty keep searching for a mango seller
  while search_queue:
    print("current queue: {}".format(search_queue))
    # create a variable off of the person that is first dequeue
    person = search_queue.popleft()
    # log the person beign searched
    print("person getting checked now: " + person)
    # if the person is not in the array searched then don't do anything
    if not person in searched:
      #  if the person is a mango seller return their name 
      #  and the program is done
      if is_mango_seller(person):
        # print the string with his/her name
        print(person + " is a mango seller!")
        print("No need to check anymore. Done")
        return True
      else:
        # say that this person is not a mango seller
        print(person + " is not a mango seller")
        # add that person's friends to the back of the queue
        print("Adding " + person + "'s friends to the back of the Queue")
        search_queue += graph[person]
        # add the person to the searched array
        searched.append(person)
  # this line will only run if there are no mango sellers in the queue
  return False


# if the last letter of thr person's name is and m we'll just
# say that he or she is a mango seller
def is_mango_seller(person):
  return person[-1] == 'm'

search("you")