class MinStack:

    def __init__(self):
      self.stack = []
      self.minimum = []
        

    def push(self, val: int) -> None:
        self.minimum.append(val)
        self.minimum.sort()
        self.stack.append(val)
        

    def pop(self) -> None:
        self.minimum.remove(self.stack[-1])
        self.stack = self.stack[:len(self.stack)-1]        

    def top(self) -> int:
        return self.stack[-1]
        

    def getMin(self) -> int:
        return self.minimum[0]

        
