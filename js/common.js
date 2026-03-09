// 页面跳转
function navigateTo(page) {
    window.location.href = page;
}

// 显示提示信息
function showToast(message, duration = 2000) {
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, duration);
}

// 格式化价格
function formatPrice(price) {
    return '¥' + price.toFixed(2);
}

// 初始化轮播图
function initSwiper() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}

// 商品卡片模板
function createProductCard(product, isHot = false) {
    return `
        <div class="product-card fade-in" onclick="navigateTo('detail.html?id=${product.id}')">
            <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.src='images/default-product.jpg'">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                ${isHot && product.rank ? `<div class="product-rank">TOP ${product.rank}</div>` : ''}
                <div class="product-price">
                    ${formatPrice(product.price)}
                    ${product.originalPrice ? `<span class="original">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
                ${product.sales ? `<div class="product-sales">已售${product.sales}件</div>` : ''}
            </div>
        </div>
    `;
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 初始化轮播图
    if (document.querySelector('.swiper-container')) {
        initSwiper();
    }
    
    // 设置当前导航激活状态
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        }
    });
});