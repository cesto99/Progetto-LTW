<html>
    <head>
        <script src="../js/verifica.js"></script>
        <script src="../js/memoria.js"></script>  
    </head>
    <body>
        <?php
            $dbconn = pg_connect("host=drinkparty.cpbsxsr2pb7t.us-east-1.rds.amazonaws.com port=5432 dbname=barsapienza
            user=postgres password=ciaociao99")
            or die('Could not connect: '. pg_last_error());
            if (!(isset($_POST ['agg2']))) {
                header("Location: ../Home/index.html");
            }
            
            else {
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
                        // chiamo la funzione JS per il messaggio su schermo e per caricare i dati della carta
                        echo "<script> aggiungi_carta(); caricaCarte('$username','$numero','$mese','$anno','$cvv','$titolare'); location.href='Metodo_di_pagamento.html'</script>";
                    }else{
                        echo "<script> carta_gia_inserita(); </script>";
                    }
                }
                
            }
        ?>
    </body>
</html>
