<html>
    <head>
        <script src="Registrazione/verifica.js"></script> 
    </head>
    <body>
        <?php
            $dbconn = pg_connect("host=drinkparty.cpbsxsr2pb7t.us-east-1.rds.amazonaws.com port=5432 dbname=barsapienza
            user=postgres password=ciaociao99")
            or die('Could not connect: '. pg_last_error());
            if (!(isset($_POST ['Mod']))) {
                header("Location: Utente_Loggato.html");
            }
            
            else {
                    
                $username = $_POST ['user'];
                $numero = $_POST ['numero'];
                $mese = $_POST ['scadenza'][0]; //non so se vanno bene [0] e [1]
                $anno = $_POST ['scadenza'][1];
                $cvv =$_POST ['CVV'];
                $titolare =$_POST ['titolare'];
                    

                    $q2 = "update carte set numero = $2, mese = $3, anno = $4, CVV = $5 titolare = $6 where user = $1"; //ricontrollarla
                    $data = pg_query_params( $dbconn, $q2, array ($username, $numero, $mese, $anno, $cvv, $titolare));
                    if ($data) {                           
                        header("Location: Utente_Loggato.html");
                    
                }  
            }
        ?>
    </body>
</html>