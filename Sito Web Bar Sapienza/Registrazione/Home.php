<?php
 session_start();
?>

<html>
    <head>
        <title> HomePage </title>
</head>
<body>
    <a href="logout.php"> LOGOUT </a>
    <h1> Welcome <?php echo $_SESSION['username']; ?> </h1>
</body>
</html>
