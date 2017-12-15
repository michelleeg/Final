function checkPrime(number) {
    for (i = 2; i < number/2; i++) {
        if ((number) % i == 0) {
            return "not prime";
        }
    }
    return "prime";
}

function timesTable(number) {

    var rows = 10;
    var cells = 10;

    document.write("<table border=1>");
    for (i = 1; i < rows; i++) {
        document.write("<tr>");
        for (j = 1; j < cells; j++) {
            document.write("<td>", i * j, "</td>");
        }
        document.write("</tr>")
    }
    document.write("</table>")
}
