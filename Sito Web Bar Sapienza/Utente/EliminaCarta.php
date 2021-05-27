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
            if (!(isset($_POST ['ElCart']))) {
                header("Location: ../Home/index.html");
            }
            else {
                $numero=$_POST['numero'];
                $q2 = "DELETE FROM carte WHERE numero= $1";
                $data = pg_query_params( $dbconn, $q2, array ($numero));
                if($data){
                    // chiamo la funzio JS per il messaggio su schermo e per caricare i dati della carta
                    echo "<script> elimina_carta(); eliminaCarta('$numero'); location.href='../Utente/Metodo_di_pagamento.html'</script>";
                }
            }  
        ?>
</body>
</html>