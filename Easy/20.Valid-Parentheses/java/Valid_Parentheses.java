import java.util.HashMap;
import java.util.Stack;

public class Valid_Parentheses {
    public static boolean isValid(String s) {
        HashMap var1 = new HashMap();
        var1.put(')', '(');
        var1.put(']', '[');
        var1.put('}', '{');
        Stack stack = new Stack();

        for (char c : s.toCharArray()) {
            if (var1.containsValue(c)) {
                stack.push(c);
            } else {
                if (stack.isEmpty() || stack.pop() != var1.get(c)) {
                    return false;
                }
            }
        }
        return stack.size() == 0;

    }

    public static void main(String[] var0) {
        System.out.println(isValid("(]"));
    }
}
