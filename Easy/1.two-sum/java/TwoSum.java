import java.util.HashMap;
import java.util.Map;

class TwoSum {

    // other solution
    static public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(target - nums[i]) == true)
                return new int[] { map.get(target - nums[i]), i };

            map.put(nums[i], i);
        }

        return new int[] {};

    }

    public static void main(String[] args) {
        int[] nums = { 3, 2, 4 };
        int[] res = twoSum(nums, 6);
        System.out.printf("index 1: %s, index 2: %s\n", res[0], res[1]);

    }
}