document.querySelectorAll('.sidebar ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.sidebar ul li.active').classList.remove('active');
        this.classList.add('active');

        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
        });

        document.getElementById(this.getAttribute('data-content')).classList.add('active');
    });
});
