// Starts the user logout session.
<?php
    session_start();
    // Include the logout config.php if it exists
    if(isset($_SESSION['unique_id'])){
        include_once "config.php";
        $logout_id = mysqli_real_escape_string($conn, $_GET['logout_id']);
        // Update the users status
        if(isset($logout_id)){
            $status = "Offline now";
            $sql = mysqli_query($conn, "UPDATE users SET status = '{$status}' WHERE unique_id={$_GET['logout_id']}");
            // Sets the login.php header
            if($sql){
                session_unset();
                session_destroy();
                header("location: ../login.php");
            }
            // Sets the login headers.
        }else{
            header("location: ../users.php");
        }
    }else{
        header("location: ../login.php");
    }
?>
