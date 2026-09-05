import java.util.HashMap;
import java.util.Map;

class Long_Common_Prefix {

    // other solution
    static public String longestCommonPrefix(String[] strs) {
        String res = "";
        for (int i = 0; i < strs.length; i++) {
            if (i == 0) {
                res = strs[0];
                continue;
            }
            int length = Math.min(res.length(), strs[i].length());
            int j = 0;
            while (j < length && strs[i].charAt(j) == res.charAt(j))
                j++;

            res = res.substring(0, j);

        }
        return res;
    }

    public static void main(String[] args) {
        String[] strs = { "flower", "flow", "flight" };
        System.out.println(longestCommonPrefix(strs));

    }
}