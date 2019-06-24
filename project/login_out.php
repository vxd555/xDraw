<script>
    window.localStorage.clear();
</script>
<?php
session_start();
session_destroy();
header("Location: select_page.php");
?>
