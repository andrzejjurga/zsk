<?php //Andrzej Jurga
    echo 'rok-miesiąc-dzień',date('Y-m-d'), '<br>';
    echo date('d-m-Y'),'<br>';
    echo date('j M Y'),'<br>';
    echo date('G:i:s'),'<br>';
    echo date('H:i:s'),'<br>';
    echo date('H:i:sa'),'<br>';
    echo date('Y-m-d G:i:s'),'<br>';
    echo date("w"),'<br>';

    $date = getdate();
    print_r($date);

    $day = $date['mday'];
    $wday = $date['wday'];
    $month = $date['month'];
    $year = $date['year'];
    echo $day;


    switch($month)
    {
        case 'January':
            $month = "Styczeń";
        break;
        case 'February':
            $month = "Luty";
        break;
        case 'March':
            $month = "Marzec";
        break;
        case 'April':
            $month = "Kwiecień";
        break;
        case 'May':
            $month = "Maj";
        break;
        case 'June':
            $month = "Czerwiec";
        break;
        case 'July':
            $month = "Lipiec";
        break;
        case 'August':
            $month = "Sierpień";
        break;
        case 'November':
            $month = "Wrzesień";
        break;
        case 'October':
            $month = "Październik";
        break;
        case 'November':
            $month = "Listopad";
        break;
        case 'December':
            $month = "Grudzień";
        break;
    }
    switch($wday)
    {
        case '1':
            $wday = "poniedziałek";
        break;
        case '2':
            $wday = "wtorek";
        break;
        case '3':
            $wday = "środa";
        break;
        case '4':
            $wday = "czwartek";
        break;
        case '5':
            $wday = "piątek";
        break;
        case '6':
            $wday = "sobota";
        break;
        case '0':
            $wday = "niedziela";
        break;
    }
    echo "<hr>$day $month $year | $wday";
?>