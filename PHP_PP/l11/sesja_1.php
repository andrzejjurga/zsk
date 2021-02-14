<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sesja 1</title>
</head>
<body>
    <?php 
        $_SESSION['name'] = 'Judasz';
        echo $_SESSION['name'],'<hr>';
    ?>
    <a href="./sesja_2.php">strona sesji 2</a>
</body>
</html>