class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        first, last = 0, len(matrix) - 1


        while first <= last:
          mid_y = (first + last) // 2
          left, right = 0, len(matrix[mid_y]) - 1

          while left <= right:
            mid_x = (left + right) // 2
            if matrix[mid_y][mid_x] > target:
              right = mid_x - 1
            elif matrix[mid_y][mid_x] < target:
              left = mid_x + 1
            else:
              return True
        
          if matrix[mid_y][0] > target:
            last = mid_y - 1
          elif matrix[mid_y][-1] < target:
            first = mid_y + 1
          else:
            return False
        
        return False