import java.util.HashMap;
import java.util.List;

public class Roman_to_Integer {
    static public int romanToInt(String s) {
        HashMap<Character, Integer> hashMap = new HashMap<>();
        hashMap.put('I', 1);
        hashMap.put('V', 5);
        hashMap.put('X', 10);
        hashMap.put('L', 50);
        hashMap.put('C', 100);
        hashMap.put('D', 500);
        hashMap.put('M', 1000);
        
        int res = 0;
        for (int i = s.length() - 1; i >= 0; i--)
        {
            if (i - 1 >= 0)
            {
                System.out.printf("Res: %d, hashMap: %d\n", res, hashMap.get(s.charAt(i)));
                int a = hashMap.get(s.charAt(i));
                int b = hashMap.get(s.charAt(i - 1));
                if (a > b)
                {
                    res -= b;
                }
            }
            else{
                res += hashMap.get(s.charAt(i));
            }
                
        }

        return res;
    }


    public static void main(String[] args) {
        System.out.println(romanToInt("VI"));
    }
}
