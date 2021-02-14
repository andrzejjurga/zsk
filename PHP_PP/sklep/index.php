<!DOCTYPE html><!
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sklep</title>
    <style>
    td { border: 1px solid black;
        padding: 5px;}
    </style>
</head>
<body>
    <?php
        $maslo = 4.99;
        $margaryna = 2.99;
        $ogorek = 1.99;
        $cukinia = 3.99;
        $makaron = 5.99;

    ?>
    <h4>Ile rzeczy chcesz kupić?</h4>
    <form action="./zakupy.php" method="post">
        <table>
        <tr>
            <td>LP.</td> <td>Produkt:</td> <td>Cena:</td> <td>Ilość sztuk:</td>
        </tr>
        <tr>
            <td> 1.</td> <td>Masło</td> <td><?php echo $maslo;?> zł</td> <td><input type="number" name="count_1" placeholder="Ilość"></td>
        </tr>
        <tr>
            <td> 2.</td> <td>Margaryna</td> <td><?php echo $margaryna?> zł</td> <td><input type="number" name="count_2" placeholder="Ilość"></td>
        </tr>
        <tr>
            <td> 3.</td> <td>Ogórek</td> <td><?php echo $ogorek;?> zł</td> <td><input type="number" name="count_3" placeholder="Ilość"></td>
        <tr>
            <td> 4.</td> <td>Cukinia</td> <td><?php echo $cukinia;?> zł</td> <td><input type="number" name="count_4" placeholder="Ilość"></td>
        <tr>
            <td> 5.</td> <td>Makaron</td> <td><?php echo $makaron;?> zł</td> <td><input type="number" name="count_5" placeholder="Ilość"></td>
        </tr>

        </table>
        <input type="submit" value="Wyślij">
    </form>

</body>
</html>

