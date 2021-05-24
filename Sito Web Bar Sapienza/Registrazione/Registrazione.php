<!DOCTYPE html>
<html>
    <head>
        <!-- includo il file JS in cui definisco le funzioni per i messaggi di errore -->
        <script src="../js/verifica.js"></script>
        <script src="../js/memoria.js"></script>
    </head>
    <body>
        <?php
            $dbconn = pg_connect("host=drinkparty.cpbsxsr2pb7t.us-east-1.rds.amazonaws.com port=5432 dbname=barsapienza
            user=postgres password=ciaociao99")
            or die('Could not connect:'.pg_last_error() );
            if (!(isset($_POST ['reg']))) {
                header("Location: ../Home/index.html");
            }
            else {
                $username = $_POST['user'];
                $q1= "select * from utenti where username = $1";
                $result = pg_query_params($dbconn, $q1, array($username));
                if ($line=pg_fetch_array($result, null, PGSQL_ASSOC)) {
                    echo "<script> verifica_utente1(); </script>";
                }
                else {
                    $username = $_POST ['user'];
                    $password1 = $_POST ['password1'];
                    $password2 = $_POST ['password2'];
                    $email = $_POST ['email'];
                    
                    // Se le 2 password inserite sono uguali procedo con la query
                    if ($password1 == $password2) {
                        $q2 = "insert into utenti values($1, $2, $3)";
                        $data = pg_query_params( $dbconn, $q2, array ($username, $password1, $email));
                        if ($data) {
                           header("Location: ../Utente/Utente_Loggato.html");
                        }  
                    }
                    // Altrimenti do il messaggio di errore
                    else {
                        echo "<script> confronta_password(); </script>";
                    }

                }  
            }
        ?>
    </body>
</html>