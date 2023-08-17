
class Node:
    def __init__(self, capacity=10):
        self.data = None
        self.next = None
        self.size = 0
        self.capacity = capacity

class Ray_Queue:
    def __init__(self):
        self.queue = []
        self.node = Node()
        
    def enqueue(self, data:any):
        self.size += 1
        if self.size <= self.capacity:
            new = Node()
            new.next = self.node
            new.data = data
        else:
            raise ValueError
        
    def dequeue(self)
         