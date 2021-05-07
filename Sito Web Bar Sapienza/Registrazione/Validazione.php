<html>
    <head></head>
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
                    echo "<h1> Spiacente, non sei un utente registrato </h1>
                    <a href=signup.html>
                    Clicca qui per registrarti
                    </a>";  
                }
                else{
                    $password = $_POST['password']; // con md5 non funzionava
                    $q2 = "select * from utenti where username = $1 and pass = $2";
                    $result = pg_query_params($dbconn, $q2, array ($username, $password));
                    if (!($line = pg_fetch_array($result, null, PGSQL_ASSOC))){
                        echo "<h1> La password è errata </h1>";    
                    }
                    else {
                        echo "<h1>Accesso eseguito con successo</h1>"; //Non si vede questo messaggio
                        header("Location: ../Utente_Loggato.html");
                    }
                }
            }
        ?>
    </body>
</html>
