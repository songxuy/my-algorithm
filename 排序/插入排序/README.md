### 思想

> 通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入

### 思路

> 从第一个元素开始，该元素可以认为已经被排序；
> 取出下一个元素，在已经排序的元素序列中从后向前扫描；
> 如果该元素（已排序）大于新元素，将该元素移到下一位置；
> 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；
> 重复步骤 2~5。
