<!DOCTYPE html>
<html>
    <head>
        <script src="verifica.js"></script> 
    </head>
    <body>
        <?php
            session_start();
            session_destroy();
            echo '<script>esci();</script>'
        ?>
    </body>
</html>
