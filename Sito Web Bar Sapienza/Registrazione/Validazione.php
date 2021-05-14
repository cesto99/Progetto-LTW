<!DOCTYPE html>
<html>
    <head>
        <!-- includo il file JS in cui definisco le funzioni per i messaggi di errore -->
        <script type=text/javascript src="verifica.js"></script> 
    </head>
    <body>
        <?php
            $dbconn = pg_connect("host=drinkparty.cpbsxsr2pb7t.us-east-1.rds.amazonaws.com port=5432 dbname=barsapienza
            user=postgres password=ciaociao99")
            or die('Could not connect: '. pg_last_error());
            if(!(isset($_POST['acc']))){
                header("Location: ../index.html");
            }
            else{
                $username = $_POST['user'];
                $q1="select * from utenti where username = $1";
                $result=pg_query_params($dbconn, $q1, array($username));
                if (!($line=pg_fetch_array($result, null, PGSQL_ASSOC))){
                    echo "<script> verifica_utente2(); </script>";
                }
                else{
                    $password = $_POST['password']; // con md5 non funzionava
                    $q2 = "select * from utenti where username = $1 and pass = $2";
                    $result = pg_query_params($dbconn, $q2, array ($username, $password));
                    if (!($line = pg_fetch_array($result, null, PGSQL_ASSOC))){
                        echo "<script> controlla_password(); </script>";    
                    }
                    else {
                        $line=pg_fetch_array($result, 0, PGSQL_NUM);
                        echo "<script>caricaUtente('$username','$line[3]','$line[4]', '$line[5]', '$line[6]')</script>";
                    }
                }
            }
        ?>
    </body>
</html>
