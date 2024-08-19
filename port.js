<script>
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var query = document.getElementById('search-query').value.toLowerCase();
    var content = document.querySelectorAll('.searchable'); // Target elements to search within

    content.forEach(function(item) {
        if (item.textContent.toLowerCase().includes(query)) {
            item.style.display = 'block'; // Show matching content
        } else {
            item.style.display = 'none'; // Hide non-matching content
        }
    });
});
</script>
