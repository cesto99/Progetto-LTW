<!DOCTYPE html>
<html>
    <head>
        <script src="../js/verifica.js"></script>
        <script src="../js/memoria.js"></script>
    </head>
    <body>
        <?php
            session_start();
            session_destroy();
            echo '<script>esci();</script>'
        ?>
    </body>
</html>
