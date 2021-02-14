<?php
  session_start();
  unset($_SESSION['name']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>strona 3</title>
</head>
<body>
  <h1>Strona 2</h1>
  <?php
    $_SESSION['data']['surname'] = 'Nowak';
    $_SESSION['data']['age'] = 20;
    echo $_SESSION['name'],'<br>'; //error

    ?>
    <button><a href="./sesja1.php">Strona domowa</a></button>
</body>
</html>
