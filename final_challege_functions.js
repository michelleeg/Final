function checkPrime(number) {
    var message = "prime";
    if (number < 0) {
        message = "not prime";
    }
    if (number % 1 != 0) {
        message = "not prime";
    }
    for (i = 2; i <= number / 2; i++) {
        if ((number) % i == 0) {
        message = "not prime";
        }
    }
    document.write(message);
}

function timesTable(number) {

    var rows = number;
    var cells = number;

    document.write("<table border=1>");
    for (i = 1; i <= rows; i++) {
        document.write("<tr>");
        for (j = 1; j <= cells; j++) {
            document.write("<td>", i * j, "</td>");
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

function primeTable(number) {

    if (number < 1) {
        return;
    }
    var rows = (number / 10);
    var cells = 10;
    var value = 1;

    document.write("<table border=1");
    for (i = 0; i < rows; i++) {
        document.write("<tr>");
        for (x = 0; x < 10; x++) {
            if (value <= number) {
                var isPrime = true;
                if (value < 0) {
                    isPrime = false;
                }
                if (value % 1 != 0) {
                    isPrime = false;
                }
                for (a = 2; a <= value / 2; a++) {
                    if ((value) % a == 0) {
                        isPrime = false;
                    }
                }
                if (isPrime) {
                    document.write("<td><b>", value++, "</b></td>");
                } else {
                    document.write("<td>", value++, "</td>");
                }
            } else {
                document.write("<td></td>");
            }

        }
        document.write("</tr>")
    }
    document.write("</table>")
}
