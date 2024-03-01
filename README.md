[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

### QuickSort Analysis:

Iterative QuickSort sorts an array by breaking it down into smaller parts, deciding which elements go before or after a central pivot point. Here's how it works:

### The Phases of Iterative QuickSort:

1. **Partitioning**: The algorithm picks an element to be the pivot and arranges the array so that all smaller elements are before the pivot and all larger ones are after it. This process operates in linear time, $O(n)$, across the array's length for each partitioning action.
2. **Using a Stack**: Instead of calling itself like in a recursive approach, this iterative version keeps track of which parts to sort next using a stack. The stack mimics the recursive depth-first processing method without actual recursion.
3. **Pivot Selection**: The algorithm's efficiency can vary based on how the pivot divides the array. In an ideal scenario, it splits the array evenly, but a bad choice can lead to poor partitions, thus affecting runtime.

### Worst-Case Complexity Analysis:
**Worst-Case Scenario**: In the worse-case, especially with poor pivot selections, QuickSort iteratively splits the array into segments of size $n - 1$ and $1$ repeatedly. A scenario like this would require n partitioning operations, each taking linear time, resulting in a worst-case complexity of $O(n^2)$.

**Overall Efficiency**: Generally, for the worst-case, the efficiency of iterative QuickSort is $Θ(n^2)$, largely due to how the array gets divided at each step in these unfortunate situations.

### Conclusion:
Even though QuickSort can sort very quickly on average $O(n \log n)$, its performance relies heavily on how well the pivot divides the array. In the worst cases, where the division isn't even, it can slow down signifcantly. This iterative QuickSort version uses a stack to avoid recursion, showing that QuickSort can adapt to different situations while highlighting the need to consider how much the pivot selection can influence sorting speed.
