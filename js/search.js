document.getElementById('course-search').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const courses = document.querySelectorAll('.product');
    
    if (searchQuery === '') {
      
        courses.forEach(course => {
            course.style.display = 'block';
        });
    } else {
        let found = false;
        courses.forEach(course => {
            const title = course.querySelector('.product-title').innerText.toLowerCase();
            if (!found && title.includes(searchQuery)) {
                course.style.display = 'block';
                found = true;
            } else {
                course.style.display = 'none';
            }
        });
    }
});
