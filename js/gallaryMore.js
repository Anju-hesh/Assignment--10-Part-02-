document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    const lightimgBtns = document.querySelectorAll('.lightimg-btn');
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    lightimgBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('href');
            const item = this.closest('.gallery-item');
            const title = item.querySelector('h3').textContent;
            const description = item.querySelector('p').textContent;
            
            modalImage.src = imgSrc;
            modalImage.alt = title;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            
            modal.show();
        });
    });
    
    const loadMoreBtn = document.getElementById('loadMore');
    let currentItems = 9;
    
    const allItems = document.querySelectorAll('.gallery-item');
    if (allItems.length > 9) {
        for (let i = 9; i < allItems.length; i++) {
            allItems[i].style.display = 'none';
        }
    } else {
        loadMoreBtn.style.display = 'none';
    }
    
    loadMoreBtn.addEventListener('click', function() {
        const items = [...document.querySelectorAll('.gallery-item')];
        
        for (let i = currentItems; i < currentItems + 3 && i < items.length; i++) {
            items[i].style.display = 'block';
        }
        
        currentItems += 3;
        
        if (currentItems >= items.length) {
            loadMoreBtn.style.display = 'none';
        }
        
        items[currentItems - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    
    lightGallery(document.querySelector('.gallery-container'), {
        selector: '.lightimg-btn',
        download: false,
        counter: false
    });
});