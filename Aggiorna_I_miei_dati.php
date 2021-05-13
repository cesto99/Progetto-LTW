<html>
    <head>
        <script src="verifica.js"></script> 
    </head>
    <body>
        <?php
            $dbconn = pg_connect("host=drinkparty.cpbsxsr2pb7t.us-east-1.rds.amazonaws.com port=5432 dbname=barsapienza
            user=postgres password=ciaociao99")
            or die('Could not connect: '. pg_last_error());
            if (!(isset($_POST ['agg']))) {
                header("Location: Utente_Loggato.html");
            }
            
            else {
                $username = $_POST['user'];
                $q1= "select * from utenti where username = $1";
                $result = pg_query_params($dbconn, $q1, array($username));
                if ($line=pg_fetch_array($result, null, PGSQL_ASSOC)) {
                        alert("c'è qualcosa che non và!");
                }
                else {
                    
                    $nome = $_POST ['nome'];
                    $cognome = $_POST ['surname'];
                    $nascita = $_POST ['birthday'];
                    $matricola = $_POST ['matricola'];

                    $q2 = "insert into utenti values($4, $5, $6, $7)";
                    $data = pg_query_params( $dbconn, $q2, array ($nome, $cognome, $nascita, $matricola));
                    if ($data) {                           
                        alert("Dati inseriti");
                        header("Location: ../Utente_Loggato.html");
                    }
                }  
            }
        ?>
    </body>
</html>