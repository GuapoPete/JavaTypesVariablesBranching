public class FieldNamingExample {
    // Declare legal and illegal field names
    private int validField;
    private int _123illegalField; // Using an underscore to make an illegal field name

    public FieldNamingExample() {
        validField = 0; // Initialize validField
    }

    public void printValues() {
        // Print uninitialized field values
        System.out.println("Valid Field: " + validField);
        System.out.println("Illegal Field: " + _123illegalField); // Error: Illegal field name

        // Attempt to use uninitialized local variable
        int uninitializedVar;
        System.out.println("Uninitialized Variable: " + uninitializedVar); // Error: Variable might not have been initialized
    }

    public static void main(String[] args) {
        FieldNamingExample example = new FieldNamingExample();
        example.printValues();
    }
}
