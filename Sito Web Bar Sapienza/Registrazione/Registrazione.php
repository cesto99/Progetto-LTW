<?php
    session_start();
    //$con = mysqli_connect('localhost', 'root');

    //mysqli_select_db($con, 'registrazione_utente');

    $dbconn=pg_connect("host=localost port=5500 
            dbname=registrazione_utente
            user=root")
            or die('ould not connect: ' . preg_last_error());

    $name = $_POST['user'];
    $pass = $_POST['password'];

  
    $s = " select * from user_table where name = '$name' && password = '$pass'";

    //$result = mysqli_query($con, $s);
    $result = mysqli_query($dbconn, $s);
   
    $num = mysqli_num_rows($result);

    if($num == 1){
        echo " Utente già esistente!";
        header('location:Login.php');
        
     
    }else{
            $reg = " insert into user_table(Nome, Password) values ('$name' , '$pass')";
            mysqli_query($con, $reg);
            echo " Registrazione andata a buon fine!";
            header('location:Home.php');
            
        }
    

?>

