class Solution:
    def trap(self, h: List[int]) -> int:
        l, r = 0, len(h) - 1
        mL, mR = h[l], h[r]
        c = 0

        while l < r:
            if mL < mR:
                l += 1
                mL = max(mL, h[l])
                c += mL - h[l]
            else:
                r -= 1
                mR = max(mR, h[r])
                c += mR - h[r]

        return c