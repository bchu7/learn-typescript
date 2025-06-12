// ## Item 33: Push Null Values to the Perimeter of Your Types

namespace Item33 {

    function greet(user: { name: string }) {
        return `Hello, ${user.name.toUpperCase()}`;
    }

    // Handle null earlier:
    function maybeGreet(user: { name: string | null }) {
        if (user.name === null) {
            return "Hello, guest";
        }
        return greet({ name: user.name });
    }



}
