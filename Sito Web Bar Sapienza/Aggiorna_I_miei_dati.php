<html>
    <head>
        <script src="Registrazione/verifica.js"></script> 
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
                    
                $username=$_POST['user'];
                $matricola = $_POST ['matr'];
                $nome = $_POST ['nome'];
                $cognome = $_POST ['cogn'];
                $nascita = $_POST ['nascita'];
                

                $q2 = "update utenti set nome = $2, cognome = $3, matricola = $5, nascita = $4 where username = $1";
                $data = pg_query_params( $dbconn, $q2, array ($username, $nome, $cognome, $nascita, $matricola));
                if ($data) {                       
                    echo "<script> aggiorna_dati(); caricaUtente('$username','$matricola','$nome', '$cognome', '$nascita'); caricaDati(); </script>";
                }  
                
            }
        ?>
    </body>
</html>