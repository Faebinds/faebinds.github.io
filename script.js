document.addEventListener('DOMContentLoaded', function() {
    // Book Editor Functionality
    const materialSelect = document.getElementById('material-select');
    const designOptions = document.querySelectorAll('.design-option');
    const colorOptions = document.querySelectorAll('.color-option');
    const bookTitle = document.getElementById('book-title');
    const bookAuthor = document.getElementById('book-author');
    const titleFont = document.getElementById('title-font');
    const coverDisplay = document.getElementById('cover-display');
    const titleDisplay = document.getElementById('title-display');
    const authorDisplay = document.getElementById('author-display');
    const totalPrice = document.getElementById('total-price');
    
    // Base price
    let currentPrice = 99;
    
    // Update price display
    function updatePrice() {
        totalPrice.textContent = `$${currentPrice}`;
    }
    
    // Material change
    materialSelect.addEventListener('change', function() {
        // In a real implementation, this would change the cover texture
        console.log('Material selected:', this.value);
        
        // Update price based on material
        switch(this.value) {
            case 'leather':
                currentPrice = 99;
                break;
            case 'cloth':
                currentPrice = 69;
                break;
            case 'imitation':
                currentPrice = 79;
                break;
            case 'special':
                currentPrice = 149;
                break;
        }
        
        updatePrice();
    });
    
    // Design selection
    designOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            designOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Get design type
            const design = this.getAttribute('data-design');
            
            // Update cover image (in a real app, this would change the actual design)
            if (design === 'custom') {
                // This would trigger a file upload in a real implementation
                console.log('Custom design selected - would open file upload');
            } else {
                coverDisplay.src = `${design}-design.jpg`;
                console.log('Design selected:', design);
            }
        });
    });
    
    // Color selection
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            colorOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Get color
            const color = this.getAttribute('data-color');
            
            // Update cover color (in a real app, this would change the actual color)
            console.log('Color selected:', color);
            coverDisplay.style.filter = `hue-rotate(${getHueRotation(color)}deg)`;
        });
    });
    
    // Helper function to calculate hue rotation (simplified)
    function getHueRotation(hexColor) {
        // This is a simplified example - real implementation would be more complex
        if (hexColor === '5e2c04') return 0;
        if (hexColor === '1a1a2e') return 200;
        if (hexColor === '4e3620') return 30;
        if (hexColor === '3d0c02') return 10;
        if (hexColor === '0d1b2a') return 220;
        return 0;
    }
    
    // Title and author updates
    bookTitle.addEventListener('input', function() {
        titleDisplay.textContent = this.value || 'Your Book Title';
    });
    
    bookAuthor.addEventListener('input', function() {
        authorDisplay.textContent = this.value || 'Author Name';
    });
    
    // Font selection
    titleFont.addEventListener('change', function() {
        // In a real implementation, this would change the font on the spine
        console.log('Font selected:', this.value);
    });
    
    // Special features checkboxes
    const specialFeatures = document.querySelectorAll('.checkbox-option input');
    specialFeatures.forEach(feature => {
        feature.addEventListener('change', function() {
            const priceChange = parseInt(this.getAttribute('data-price')) || 0;
            
            if (this.checked) {
                currentPrice += priceChange;
            } else {
                currentPrice -= priceChange;
            }
            
            updatePrice();
        });
    });
    
    // Add to cart button
    document.getElementById('add-to-cart').addEventListener('click', function() {
        alert('Your custom book design has been added to your cart!');
        // In a real implementation, this would send the design to your cart
    });
    
    // Initialize first design option as active
    if (designOptions.length > 0) {
        designOptions[0].classList.add('active');
    }
    
    // Initialize first color option as active
    if (colorOptions.length > 0) {
        colorOptions[0].classList.add('active');
    }
});