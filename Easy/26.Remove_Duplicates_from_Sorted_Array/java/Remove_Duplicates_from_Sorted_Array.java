public class Remove_Duplicates_from_Sorted_Array {
    public static int removeDuplicates(int[] nums) {
        int l = 0, r = 1;
        while (r < nums.length) {
            if (nums[l] != nums[r]) {
                l++;
                if (l != r + 1) {
                    nums[l] = nums[r];
                }
            }
            r++;
        }
        return l + 1;
    }

    public static void main(String[] args) {
        int[] nums = { 1, 1, 2, 2, 2, 3 };

        int k = removeDuplicates(nums);

        System.out.println("k = " + k);
        System.out.print("nums = [");
        for (int i = 0; i < k; i++) {
            if (i > 0) {
                System.out.print(", ");
            }
            System.out.print(nums[i]);
        }
        System.out.println("]");
    }
}
