<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sesja 3</title>
</head>
<body>
    <?php 
        session_destroy();
        //$_SESSION['name'] = 'Judasz';
        echo $_SESSION['name'],'<hr>';
    ?>
    <a href="./sesja_1.php">strona sesji 1</a>
</body>
</html>