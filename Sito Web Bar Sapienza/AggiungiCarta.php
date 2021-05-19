<html>
    <head>
        <script src="Registrazione/verifica.js"></script> 
    </head>
    <body>
        <?php
            $dbconn = pg_connect("host=drinkparty.cpbsxsr2pb7t.us-east-1.rds.amazonaws.com port=5432 dbname=barsapienza
            user=postgres password=ciaociao99")
            or die('Could not connect: '. pg_last_error());
            if (!(isset($_POST ['agg2']))) {
                header("Location: Utente_Loggato.html");
            }
            
            else {
                //c'è da cambiare il tipo di mese su pg admin, da integer a string perchè la funzione date restituisce una stringa
                $username = $_POST ['user'];
                $numero = $_POST ['numero'];
                $data = $_POST ['scadenza'];
                $mese = date("m",strtotime($data));
                $anno = date("Y",strtotime($data));
                $cvv =$_POST ['CVV'];
                $titolare =$_POST ['titolare'];
                $q2="select * from utenti where username = $1";

                $result = pg_query_params($dbconn, $q2, array($username));
                if ($line=pg_fetch_array($result, null, PGSQL_ASSOC)) {
                    $q3 = "INSERT INTO carte VALUES($1, $2, $3, $4, $5, $6)";
                        $data = pg_query_params( $dbconn, $q3, array ($username, $numero, $mese, $anno, $cvv, $titolare));
                        if ($data) {
                           header("Location: Utente_Loggato.html");
                        }  
                }
                else{
                    echo "controlla_campi()"; //da implementare
                    // header("Location: Utente_Loggato.html");
                }
                
            }
        ?>
    </body>
</html>
