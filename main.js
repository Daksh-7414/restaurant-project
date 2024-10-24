// navbar background js
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-black');
        } else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('navbar-black');
        }
    }

    // Initial call to set the correct class on page load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});

// product js
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('#foodFilter .nav-link');
    const foodCards = document.querySelectorAll('#foodCards > div');

    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            foodCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('fade-out');
                    card.classList.add('fade-in');
                    setTimeout(() => {
                        card.classList.remove('d-none');
                    }, 10);
                } else {
                    card.classList.remove('fade-in');
                    card.classList.add('fade-out');
                    setTimeout(() => {
                        card.classList.add('d-none');
                    }, 100);
                }
            });
        });
    });
});

// 

document.addEventListener('DOMContentLoaded', function() {
    const toastTriggers = document.getElementsByClassName('liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastLiveExample);

    Array.from(toastTriggers).forEach(trigger => {
        trigger.addEventListener('click', () => {
            toast.show();
        });
    });
});