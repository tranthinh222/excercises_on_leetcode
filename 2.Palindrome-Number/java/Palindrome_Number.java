import java.util.HashMap;
import java.util.Map;

class Palindronme_Number {

    // other solution
    static public boolean isPalindrome(int x) {
        if (x < 0)
            return false;
        String tmp = String.valueOf(x);
        int right = tmp.length() - 1, left = 0;

        while (left < right) {
            if (tmp.charAt(left) != tmp.charAt(right))
                return false;

            left++;
            right--;
        }

        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome(121));

    }
}