class Solution:
    def isPalindrome(self, s: str) -> bool:
        s_ = s.lower()
        s__ = []
        for i in range(len(s_)):
            o = ord(s_[i])
            if o >= 97 and o <= 122 or o >= 48 and o <= 57:
                s__.append(s_[i])

        for i in range(len(s__)):
            if s__[i] == s__[-i - 1]:
                continue
            else:
                print(s__)
                return False

        return True