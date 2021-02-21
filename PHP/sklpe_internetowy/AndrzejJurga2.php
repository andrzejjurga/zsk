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
    <h2>Podsumowanie</h2>
            <?php 
              $k_amount = $_GET['keyboard'];
              $m_amount = $_GET['mouse'];
              $suma = $k_amount * $_SESSION['keyboard'] + $m_amount * $_SESSION['mouse'];
              echo "Koszt całkowity: $suma";
            ?>
</body>
</html>