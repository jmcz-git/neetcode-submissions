class Solution:
    def isValid(self, s: str) -> bool:
        mapping = {
            ")": "(",
            "]": "[",
            "}": "{"
        }
        stack = []

        for p in s:
            if p in mapping:
                if stack and stack[-1] == mapping[p]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(p)
        
        return True if not stack else False
