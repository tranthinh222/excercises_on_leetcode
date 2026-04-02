import java.util.HashMap;
import java.util.Map;


class TwoSum {
    // public int[] twoSum(int[] nums, int target) {
    //     for (int i = 0; i < nums.length; i++)
    //     {
    //         for (int j = 0; j < nums.length; j++)
    //         {
    //             if (i != j && (nums[i] + nums[j] == target))
    //             {
    //                 return new int[]{i, j};
    //             }
    //         }
    //     }

    //     return null;
    // }


    // another solution
    // static public int[] twoSum(int[] nums, int target) {
    //     Map<Integer, Integer> map = new HashMap<Integer, Integer>();
    //     for (int i = 0; i < nums.length; i++)
    //     {
    //         if (map.get(target - nums[i]) != null && (nums[i] + nums[map.get(target - nums[i])]== target))
    //         {
    //             return new int[]{i, map.get(target - nums[i])};
    //         }
    //         map.put(target - nums[i], i);
    //     }
            
    //     for (int i = 0; i < nums.length; i++)
    //     {
    //         if ((map.get(nums[i]) != null) && (map.get(nums[i]) != i))
    //             return new int[]{i, map.get(nums[i])};
    //     }

    //     return null;
    // }

    

    // other solution
    static public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++)
        {
            int complement = target - nums[i];
            if (map.containsKey(complement))
            {
                return new int[]{map.get(complement), i};
            }
            else
            {
                map.put(nums[i], i);
            }
        }
            

        return null;
    }


    public static void main(String[] args) {
        int[] nums = {3, 2, 4};
        int[] res = twoSum(nums, 6);
        System.out.printf("index 1: %s, index 2: %s\n", res[0], res[1]);    
        
    }
}