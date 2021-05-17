<html>
    <head>
        <script src="Registrazione/verifica.js"></script> 
    </head>
    <body>
        <?php
            $dbconn = pg_connect("host=drinkparty.cpbsxsr2pb7t.us-east-1.rds.amazonaws.com port=5432 dbname=barsapienza
            user=postgres password=ciaociao99")
            or die('Could not connect: '. pg_last_error());
            if (!(isset($_POST ['ElCart']))) {
                header("Location: Utente_Loggato.html");
            }
            else {
                    
                $username=$_POST['user'];
                $numero_carta=$_POST['numero'];

                $q2 = "DELETE FROM 'carte' WHERE 'carte'.'username' = $username AND 'numero'= $numero_carta";
                $data = pg_query_params( $dbconn, $q2, array ($username, $numero, $mese, $anno, $cvv, $titolare)); //potrbbe andar bene???????
                if ($data) {                           
                    header("Location: Utente_Loggato.html");
                
            }  
        }
    ?>
</body>
</html>