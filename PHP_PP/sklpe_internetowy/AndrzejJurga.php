<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sklep</title>
</head>
<body>
    <form action="AndrzejJurga2.php" methot="get">
            <?php 
              $_SESSION['mouse'] = 43.99;
              $_SESSION['keyboard'] = 53.99;
            ?>
            <h2>Witaj w sklepie podróżniku!</h2>
            <h3>Podaj ilość przedmiotów, które chcesz kupić</h3>
            Mysz: <?php echo $_SESSION['mouse']?>zł 
            <input type="number" name="mouse" id="mouse" min="0"><br>
            Klawiatura: <?php echo $_SESSION['keyboard']?>zł 
            <input type="number" name="keyboard" id="keyboard" min="0"><br>
            <input type="submit" value="Podsumowanie">
    </form>
</body>
</html>