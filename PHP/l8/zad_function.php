<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Zad Spr</title>
</head>
<body>
    <?php
        $price1 = 25;
        function calcPrice($quantity, $barrelBulk="zł")
        {
            global $price1;
            global $result;
            $result = $price1*$quantity.$barrelBulk;
        }
            calcPrice(6);
            echo $result;
    ?>
</body>
</html>