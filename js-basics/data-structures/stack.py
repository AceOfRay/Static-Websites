
class Ray_Stack:
    def __init__(self):
        self.stack = []
        
    def push(self, object: any):
        self.stack.append(object)
        
    def pop(self):
        try:
            var = self.stack[-1]
            self.stack = self.stack[:-1]
            return var
        except:
            raise IndexError

    def isEmpty(self):
        if self.stack:
            return False
        else:
            return True
        
    def getSize(self):
        return len(self.stack)
    
    def peek(self):
        return self.stack[-1]
    
