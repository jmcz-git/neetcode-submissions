import math

class Solution:
    def token_to_fn(self, t, a, b):
        match t:
            case "*":
                return a * b
            case "+":
                return a + b
            case "-":
                return a - b
            case "/":
                if a // b < 0:
                    return math.ceil(a / b)
                else:
                    return a // b

    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for t in tokens:
            if t.isdigit():
               stack.append(int(t))
            elif len(t) > 1:
                stack.append(int(t))
            else:
                tmp = stack.pop()
                stack[-1] = self.token_to_fn(t, stack[-1], tmp)
        
        return stack[0]
