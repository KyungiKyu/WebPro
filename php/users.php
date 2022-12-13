// Starts a chat session
<?php
    session_start();
    include_once "config.php";
    // Returns a list of users.
    $outgoing_id = $_SESSION['unique_id'];
    $sql = "SELECT fname,lname FROM users LEFT JOIN messages ON users.unique_id = messages.incoming_msg_id
            WHERE NOT unique_id = {$outgoing_id} ORDER BY user_id DESC";
    $query = mysqli_query($conn, $sql);
    $output = "";
    // Outputs a formatted list of users available to chat
    if(mysqli_num_rows($query) == 0){
        $output .= "No users are available to chat";
    }elseif(mysqli_num_rows($query) > 0){
        include_once "data.php";
    }
    echo $output;
?>
