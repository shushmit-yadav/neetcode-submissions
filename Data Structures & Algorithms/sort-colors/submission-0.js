class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        function merge(arr, l, m, r){
            let left = arr.slice(l, m+1);
            let right = arr.slice(m+1, r+1);
            let i = l, j = 0,k = 0;
            while(j < left.length && k < right.length){
                if(left[j] <= right[k]){
                    arr[i] = left[j];
                    j++
                } else {
                    arr[i] = right[k];
                    k++
                }
                i++;
            }

            while(j < left.length){
                arr[i] = left[j];
                j++;
                i++;
            } 

            while(k < right.length){
                arr[i] = right[k];
                k++;
                i++
            }
        }
        function mergeSort(arr, l, r){
            if(l == r){
                return arr;
            }
            let m = Math.floor((l+r)/2);
            mergeSort(arr, l, m);
            mergeSort(arr, m+1, r);
            merge(arr, l, m, r);
            return arr;
        }

        return mergeSort(nums, 0, nums.length - 1);
    }
}
