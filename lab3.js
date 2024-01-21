// Zad 1
function toBase64(text) {
    let encodedValue = btoa(text);
    return encodedValue;
}

function fromBase64(base64text) {
    let decodedValue = atob(base64text);
    return decodedValue;
}

let exampleText = "Sia la la,laby sa fajne";
console.log(exampleText);

base64text = toBase64(exampleText);
console.log(base64text);

revertedText = fromBase64(base64text);
console.log(revertedText);

// Zad 2
function generatePassword() {
    /**
     * Base for password creation
     */
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const allChars = lowercase + uppercase + numbers + symbols;

    let password = "";
    let allTypes = false;

    /**
     * Add characters as long as password has at leat 8 characters
     * and all types were used (lowercase, uppercase, numbers, symbols)
     */
    while (password.length < 8 && !allTypes) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];

        // Check if all types of characters were used
        if (password.length >= 8) {
            let containsLowercase = false;
            let containsUppercase = false;
            let containsNumbers = false;
            let containsSymbols = false;

            for (let i = 0; i < password.length; i++) {
                if (lowercase.includes(password[i])) {
                    containsLowercase = true;
                } else if (uppercase.includes(password[i])) {
                    containsUppercase = true;
                } else if (numbers.includes(password[i])) {
                    containsNumbers = true;
                } else if (symbols.includes(password[i])) {
                    containsSymbols = true;
                }

                if (
                    containsLowercase &&
                    containsUppercase &&
                    containsNumbers &&
                    containsSymbols
                ) {
                    allTypes = true;
                    break;
                }
            }
        }
    }

    return password;
}

let pass = generatePassword();
console.log(pass);
