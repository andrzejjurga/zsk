<?php
  // wersja PHP 7.4.9
  echo PHP_VERSION,"<BR>";
  //echo phpinfo(); - wyświetla panel informacji

  $pow = 2**10; //operator potęgi
  echo $pow," = 2**10 <BR>";

  echo 'a','b'; //wyświetli ab
  echo 'a'.'b'; //doda a i b potem wyświetli sume

  //operatory bitowe
  //and &, or |, or ^, not ~,przesunięcie w lewo <<, w prawo >>
  echo '<br><hr>';

  $x = 0b1101; //binarny zapis 13
  echo $x,"<BR>";
  
  echo $x << 2,"<BR>"; // dodanie dwóch pozycji na końcu 0b110100
  echo $x >> 2,"<BR>"; // usunięcie dwóch pozycji z końcu 0b11
  echo '<HR>';

  $x = 1;
  $y = 1.0;
  if($x === $y)//operator identyczności
    echo '$x jest identyczny $y <br>';
  else
    echo '$x nie jest identyczny $y <br>';

    echo gettype($x)," ",gettype($y),'<br><hr>';

  //pre i post fixy
  $x = 1;
  $x = $x++;
  echo $x,"<BR>";
  $x = ++$x;
  echo $x,"<BR>";
  $y = $x++;
  echo $x," ",$y,"<BR>";
  $y = ++$x;
  echo $x," ",$y,"<BR><HR>";

  //operatory rzutowania
  //bool, int, float, string, array, object, unset

  $test1 = '123abc';
  $test2 = 0;
  $test3 = 20;

  echo 'Typ danych $test1: ',gettype($test1),' ',$test1,'<BR>';
  echo 'Typ danych $test2: ',gettype($test2),' ',$test2,'<BR>';
  echo 'Typ danych $test3: ',gettype($test3),' ',$test3,'<BR>';

  echo (int)$test1,"<br>";
  echo (bool)$test2,"<br>";
  echo (float)$test3,"<br>";

  $w;
  echo @gettype($w); //oparator ignorowania błędów
 ?>