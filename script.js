// Checkout Functionality
let currentProduct = { name: '', price: 0 };

// Checkout product directly
function checkoutNow(productName, price) {
    currentProduct = { name: productName, price: price };
    
    // Update modal content
    document.getElementById('checkoutProduct').innerHTML = `
        <div class="checkout-product-info">
            <h3>${productName}</h3>
            <p class="product-price">Harga per porsi: Rp ${price.toLocaleString()}</p>
        </div>
    `;
    
    // Reset quantity to 1
    document.getElementById('quantity').value = 1;
    updateTotalPrice();
    
    // Show modal
    document.getElementById('checkoutModal').style.display = 'block';
}

// Update total price based on quantity
function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const total = currentProduct.price * quantity;
    document.getElementById('totalPrice').textContent = `Total: Rp ${total.toLocaleString()}`;
}

// Increase quantity
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    if (quantity < 20) {
        quantityInput.value = quantity + 1;
        updateTotalPrice();
    }
}

// Decrease quantity
function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantityInput.value = quantity - 1;
        updateTotalPrice();
    }
}

// Close checkout modal
function closeCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'none';
}

// Proceed to WhatsApp
function proceedToWhatsApp() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const total = currentProduct.price * quantity;
    
    const message = `Halo, saya ingin memesan:
    
🛍️ Produk: ${currentProduct.name}
📦 Jumlah: ${quantity} porsi
💰 Harga per porsi: Rp ${currentProduct.price.toLocaleString()}
💵 Total: Rp ${total.toLocaleString()}

Mohon konfirmasi ketersediaan dan detail pengiriman. Terima kasih!`;

    const phoneNumber = '6282113148932'; // Nomor WhatsApp bisnis
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Close modal
    closeCheckoutModal();
    
    // Show notification
    showNotification('Anda akan diarahkan ke WhatsApp untuk melanjutkan pemesanan!');
}

// Event listener for quantity input change
document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.addEventListener('input', updateTotalPrice);
    }
});

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Form submission
function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (!name || !email || !phone || !message) {
        showNotification('Mohon lengkapi semua field!', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Mengirim pesan...', 'info');
    
    setTimeout(() => {
        showNotification(`Terima kasih ${name}! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.`, 'success');
        event.target.reset();
    }, 1500);
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    // Set notification style based on type
    let bgColor = '#4CAF50'; // success
    if (type === 'error') bgColor = '#f44336';
    if (type === 'info') bgColor = '#2196F3';
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        max-width: 300px;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const checkoutModal = document.getElementById('checkoutModal');
    if (event.target === checkoutModal) {
        closeCheckoutModal();
    }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Add scroll animations
    addScrollAnimations();
});

// Add scroll animations
function addScrollAnimations() {
    const elements = document.querySelectorAll('.product-card, .feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Add specific animations for about section
    addAboutAnimations();
}

// Add animations for about section
function addAboutAnimations() {
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image');
    
    if (aboutText && aboutImage) {
        // Set initial states
        aboutText.style.opacity = '0';
        aboutText.style.transform = 'translateX(-50px)';
        
        aboutImage.style.opacity = '0';
        aboutImage.style.transform = 'translateX(50px)';
        
        // Create observer for about section
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate text from left
                    setTimeout(() => {
                        aboutText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                        aboutText.style.opacity = '1';
                        aboutText.style.transform = 'translateX(0)';
                        aboutText.classList.add('animate');
                    }, 200);
                    
                    // Animate image from right with slight delay
                    setTimeout(() => {
                        aboutImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                        aboutImage.style.opacity = '1';
                        aboutImage.style.transform = 'translateX(0)';
                        aboutImage.classList.add('animate');
                    }, 500);
                    
                    // Stop observing after animation
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe the about section
        const aboutSection = document.querySelector('.about');
        if (aboutSection) {
            aboutObserver.observe(aboutSection);
        }
    }
}

// Product search functionality
function searchProducts(query) {
    const products = document.querySelectorAll('.product-card');
    const searchTerm = query.toLowerCase();
    
    products.forEach(product => {
        const title = product.querySelector('.product-title').textContent.toLowerCase();
        const description = product.querySelector('.product-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Filter products by category
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const title = product.querySelector('.product-title').textContent.toLowerCase();
        
        if (category === 'all') {
            product.style.display = 'block';
        } else if (category === 'tempe' && title.includes('tempe')) {
            product.style.display = 'block';
        } else if (category === 'pare' && title.includes('pare')) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Switch between image and video (legacy function - kept for compatibility)
function switchMedia(button, mediaId) {
    // This function is kept for backward compatibility but may not be used
    // in the current simplified design
    const productCard = button.closest('.product-card');
    const allTabs = productCard.querySelectorAll('.media-tab');
    const allMedia = productCard.querySelectorAll('.product-image, .product-video');
    
    allTabs.forEach(tab => tab.classList.remove('active'));
    allMedia.forEach(media => media.classList.remove('active'));
    
    button.classList.add('active');
    
    const selectedMedia = document.getElementById(mediaId);
    if (selectedMedia) {
        selectedMedia.classList.add('active');
    }
}

// Slide images with arrow buttons
function slideImage(productType, direction) {
    const productCard = document.querySelector(`[onclick*="${productType}"]`).closest('.product-card');
    const allImages = productCard.querySelectorAll('.product-image, .product-video');
    const imageTab = productCard.querySelector('.media-tab[onclick*="image"]');
    const allDots = productCard.querySelectorAll('.dot');
    
    let currentIndex = -1;
    
    // Find current active image/video
    allImages.forEach((image, index) => {
        if (image.classList.contains('active')) {
            currentIndex = index;
        }
    });
    
    // Calculate new index
    let newIndex = currentIndex + direction;
    
    // Handle wrap-around
    if (newIndex < 0) {
        newIndex = allImages.length - 1;
    } else if (newIndex >= allImages.length) {
        newIndex = 0;
    }
    
    // Update active image/video and dot
    allImages.forEach(image => image.classList.remove('active'));
    allDots.forEach(dot => dot.classList.remove('active'));
    
    allImages[newIndex].classList.add('active');
    if (imageTab) imageTab.classList.add('active');
    allDots[newIndex].classList.add('active');
}

// Go to specific slide
function goToSlide(productType, slideIndex) {
    const productCard = document.querySelector(`[onclick*="${productType}"]`).closest('.product-card');
    const allImages = productCard.querySelectorAll('.product-image, .product-video');
    const imageTab = productCard.querySelector('.media-tab[onclick*="image"]');
    const allDots = productCard.querySelectorAll('.dot');
    
    // Update active image/video and dot
    allImages.forEach(image => image.classList.remove('active'));
    allDots.forEach(dot => dot.classList.remove('active'));
    
    allImages[slideIndex].classList.add('active');
    if (imageTab) imageTab.classList.add('active');
    allDots[slideIndex].classList.add('active');
}

// Auto slide functionality
let autoSlideIntervals = {};

function startAutoSlide(productType) {
    if (autoSlideIntervals[productType]) {
        clearInterval(autoSlideIntervals[productType]);
    }
    
    autoSlideIntervals[productType] = setInterval(() => {
        slideImage(productType, 1);
    }, 3000); // Change slide every 3 seconds
}

function stopAutoSlide(productType) {
    if (autoSlideIntervals[productType]) {
        clearInterval(autoSlideIntervals[productType]);
        autoSlideIntervals[productType] = null;
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Add scroll animations
    addScrollAnimations();
    
    // Start auto slide for both products after 2 seconds
    setTimeout(() => {
        startAutoSlide('tempe');
        startAutoSlide('pare');
    }, 2000);
    
    // Pause auto slide when user hovers over product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const productType = card.querySelector('[onclick*="tempe"]') ? 'tempe' : 'pare';
        
        card.addEventListener('mouseenter', () => {
            stopAutoSlide(productType);
        });
        
        card.addEventListener('mouseleave', () => {
            startAutoSlide(productType);
        });
    });
});

// Add to wishlist functionality
function addToWishlist(productName) {
    showNotification(`${productName} ditambahkan ke wishlist!`);
}

// Share product functionality
function shareProduct(productName) {
    if (navigator.share) {
        navigator.share({
            title: productName,
            text: `Lihat produk ${productName} di SnackDelight!`,
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Link produk disalin ke clipboard!');
        });
    }
}

// Newsletter subscription
function subscribeNewsletter(email) {
    if (!email) {
        showNotification('Mohon masukkan email Anda!', 'error');
        return;
    }
    
    // Simulate newsletter subscription
    showNotification('Mengirim permintaan...', 'info');
    
    setTimeout(() => {
        showNotification('Berhasil berlangganan newsletter!', 'success');
    }, 1500);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .product-card {
        transition: all 0.3s ease;
    }
    
    .product-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }
    
    .feature-card {
        transition: all 0.3s ease;
    }
    
    .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    
    /* About section animations */
    .about-text {
        animation-fill-mode: both;
    }
    
    .about-image {
        animation-fill-mode: both;
    }
    
    .about-text.animate {
        animation: slideInLeft 0.8s ease forwards;
    }
    
    .about-image.animate {
        animation: slideInRight 0.8s ease forwards;
    }
`;

document.head.appendChild(style);

// Export functions for global use
window.checkoutNow = checkoutNow;
window.updateTotalPrice = updateTotalPrice;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.closeCheckoutModal = closeCheckoutModal;
window.proceedToWhatsApp = proceedToWhatsApp;
window.scrollToSection = scrollToSection;
window.submitForm = submitForm;
window.showNotification = showNotification;
window.searchProducts = searchProducts;
window.filterProducts = filterProducts;
window.switchMedia = switchMedia;
window.slideImage = slideImage;
window.goToSlide = goToSlide;
window.startAutoSlide = startAutoSlide;
window.stopAutoSlide = stopAutoSlide;
window.addToWishlist = addToWishlist;
window.shareProduct = shareProduct;
window.subscribeNewsletter = subscribeNewsletter; 