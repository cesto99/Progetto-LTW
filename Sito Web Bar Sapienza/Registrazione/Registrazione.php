<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <?php
            $dbconn = pg_connect("host=drinkparty.cpbsxsr2pb7t.us-east-1.rds.amazonaws.com port=5432 dbname=barsapienza
                                    user=postgres password=ciaociao99")
            or die('Could not connect:'.pg_last_error() );
            if (!(isset($_POST ['reg']))) {
                header("Location: ../index.html");

            }
            else {
                $username = $_POST['user'];
                $q1= "select * from utenti where username=$1";
                $result = pg_query_params($dbconn, $q1, array($username));
                if ($line=pg_fetch_array($result, null, PSGQL_ASSOC)) {
                    echo "<h1> Utente giá registrato </h1> 
                            <a href=../index.html> Torna al login </a>";
                }
                else {
                    $username = $_POST ['user'];
                    $password = $_POST ['password'];
                    $email = $_POST ['email'];
                    $q2 = "insert into utenti values($1, $2, $3)";
                    $data = pg_query_params( $dbconn, $q2, array ($username, $password, $email));
                    if ($data) {
                       echo "<h1> Registrazione completata.</h1>";
                       header("Location: ../Utente_Loggato.html");
                    }
                }  
            }
        ?>
    </body>
</html>

