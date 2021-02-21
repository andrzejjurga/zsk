<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sesja 2</title>
</head>
<body>
    <?php 
        //$_SESSION['name'] = 'Judasz';
        echo $_SESSION['name'],'<hr>';
        unset($_SESSION['name']);
    ?>
    <a href="./sesja_3.php">strona sesji 3</a>
</body>
</html>