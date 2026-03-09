// 商品数据模拟
const mallData = {
    // 首页轮播图
    banners: [
        { id: 1, image: 'images/banner1.jpg', title: '新年大促 全场5折起', link: '#' },
        { id: 2, image: 'images/banner2.jpg', title: '限时秒杀 抢购进行中', link: '#' },
        { id: 3, image: 'images/banner3.jpg', title: '数码配件 买一送一', link: '#' },
        { id: 4, image: 'images/banner4.jpg', title: '二手电脑 特价专场', link: '#' }
    ],
    
    // 新品上市商品
    newProducts: [
        { 
            id: 1, 
            name: '华为Mate 60 Pro 5G手机', 
            price: 6999, 
            originalPrice: 7999,
            image: 'images/product1.jpg',
            sales: 1250,
            description: '华为旗舰手机，麒麟9000S芯片，卫星通话',
            category: '手机',
            brand: '华为',
            specs: '12GB+512GB 雅川青'
        },
        { 
            id: 2, 
            name: 'iPhone 15 Pro Max', 
            price: 8999, 
            originalPrice: 9999,
            image: 'images/product2.jpg',
            sales: 980,
            description: '苹果最新旗舰，钛金属边框，A17 Pro芯片',
            category: '手机',
            brand: 'Apple',
            specs: '256GB 原色钛金属'
        },
        { 
            id: 3, 
            name: '小米14 Ultra', 
            price: 6499, 
            originalPrice: 6999,
            image: 'images/product3.jpg',
            sales: 850,
            description: '徕卡影像，骁龙8 Gen3处理器',
            category: '手机',
            brand: '小米',
            specs: '16GB+512GB 白色'
        },
        { 
            id: 4, 
            name: '华为MateBook X Pro', 
            price: 9999, 
            originalPrice: 11999,
            image: 'images/product4.jpg',
            sales: 320,
            description: '3.1K触控全面屏，13代酷睿i7',
            category: '电脑',
            brand: '华为',
            specs: 'i7/16GB/1TB'
        }
    ],
    
    // 推荐榜商品
    hotProducts: [
        { 
            id: 5, 
            rank: 1,
            name: 'AirPods Pro 2代', 
            price: 1499, 
            originalPrice: 1899,
            image: 'images/product5.jpg',
            sales: 3560,
            description: '主动降噪，空间音频，MagSafe充电盒',
            category: '数码产品',
            brand: 'Apple'
        },
        { 
            id: 6, 
            rank: 2,
            name: '小米平板6 Pro', 
            price: 2499, 
            originalPrice: 2799,
            image: 'images/product6.jpg',
            sales: 2140,
            description: '11英寸2.8K屏幕，骁龙8+处理器',
            category: '数码产品',
            brand: '小米'
        },
        { 
            id: 7, 
            rank: 3,
            name: '华为Watch GT 4', 
            price: 1299, 
            originalPrice: 1499,
            image: 'images/product7.jpg',
            sales: 1890,
            description: '智能运动手表，心率监测，两周续航',
            category: '数码产品',
            brand: '华为'
        },
        { 
            id: 8, 
            rank: 4,
            name: '罗技G502无线鼠标', 
            price: 399, 
            originalPrice: 499,
            image: 'images/product8.jpg',
            sales: 1560,
            description: 'HERO 25K传感器，LIGHTSPEED无线技术',
            category: '数码产品',
            brand: '罗技'
        },
        { 
            id: 9, 
            rank: 5,
            name: '三星T7移动硬盘', 
            price: 599, 
            originalPrice: 699,
            image: 'images/product9.jpg',
            sales: 1320,
            description: '1TB高速移动固态硬盘，1050MB/s',
            category: '数码产品',
            brand: '三星'
        }
    ],
    
    // 分类商品数据
    categories: {
        '数码产品': [
            { 
                id: 10, 
                name: 'AirPods 3代', 
                price: 1199, 
                image: 'images/digital1.jpg',
                description: '空间音频，自适应均衡',
                type: '耳机',
                condition: '95新'
            },
            { 
                id: 11, 
                name: '小米100W快充头', 
                price: 129, 
                image: 'images/digital2.jpg',
                description: '氮化镓技术，小巧便携',
                type: '充电头',
                condition: '全新'
            },
            { 
                id: 12, 
                name: 'iPhone 15 硅胶壳', 
                price: 69, 
                image: 'images/digital3.jpg',
                description: '官方同款，MagSafe磁吸',
                type: '手机壳',
                condition: '全新'
            },
            { 
                id: 13, 
                name: '华为超级快充线', 
                price: 39, 
                image: 'images/digital4.jpg',
                description: '6A大电流，1.2米',
                type: '数据线',
                condition: '全新'
            }
        ],
        '手机': [
            { 
                id: 14, 
                name: '华为P60 Pro', 
                price: 5499, 
                image: 'images/phone1.jpg',
                specs: '8GB+256GB 洛可可白',
                config: '麒麟9000E | 6.6英寸OLED | 5000mAh',
                condition: '98新'
            },
            { 
                id: 15, 
                name: 'iPhone 14 Pro', 
                price: 6899, 
                image: 'images/phone2.jpg',
                specs: '128GB 深空黑色',
                config: 'A16仿生 | 6.1英寸超视网膜屏 | 3200mAh',
                condition: '95新'
            },
            { 
                id: 16, 
                name: '小米13 Pro', 
                price: 4299, 
                image: 'images/phone3.jpg',
                specs: '12GB+256GB 陶瓷黑',
                config: '骁龙8 Gen2 | 6.73英寸2K屏 | 4820mAh',
                condition: '99新'
            },
            { 
                id: 17, 
                name: 'vivo X100 Pro', 
                price: 4999, 
                image: 'images/phone4.jpg',
                specs: '16GB+512GB 日落橙',
                config: '天玑9300 | 6.78英寸AMOLED | 5400mAh',
                condition: '全新'
            }
        ],
        '电脑': [
            { 
                id: 18, 
                name: 'MacBook Pro 14 M3', 
                price: 12999, 
                image: 'images/pc1.jpg',
                specs: '8核CPU/10核GPU/16GB/512GB',
                config: '苹果M3芯片 | Liquid视网膜XDR屏 | 18小时续航',
                condition: '99新',
                warranty: '官方保修至2026年12月'
            },
            { 
                id: 19, 
                name: '华为MateBook 14s', 
                price: 6999, 
                image: 'images/pc2.jpg',
                specs: 'i7/16GB/1TB/2.5K触控',
                config: '13代酷睿i7 | 14.2英寸2.5K | 90Hz高刷',
                condition: '95新',
                warranty: '店铺保修6个月'
            },
            { 
                id: 20, 
                name: '联想拯救者Y9000P', 
                price: 8999, 
                image: 'images/pc3.jpg',
                specs: 'i9/32GB/1TB/RTX4060',
                config: '13代酷睿i9 | 16英寸2.5K | 240Hz刷新率',
                condition: '98新',
                warranty: '官方保修至2025年6月'
            },
            { 
                id: 21, 
                name: '戴尔XPS 13 Plus', 
                price: 10999, 
                image: 'images/pc4.jpg',
                specs: 'i7/16GB/1TB/3.5K OLED',
                config: '12代酷睿i7 | 13.4英寸OLED触控 | 4K+',
                condition: '97新',
                warranty: '店铺保修1年'
            }
        ]
    },
    
    // 购物车数据
    cartItems: [
        {
            id: 1,
            productId: 5,
            name: 'AirPods Pro 2代',
            price: 1499,
            image: 'images/product5.jpg',
            quantity: 1,
            selected: true
        },
        {
            id: 2,
            productId: 12,
            name: 'iPhone 15 硅胶壳',
            price: 69,
            image: 'images/digital3.jpg',
            quantity: 2,
            selected: true
        }
    ],
    
    // 订单数据
    orders: [
        {
            id: '20241215001',
            date: '2024-12-15',
            status: '待发货',
            total: 1568,
            items: [
                { name: 'AirPods Pro 2代', quantity: 1, price: 1499 },
                { name: 'iPhone 15 硅胶壳', quantity: 1, price: 69 }
            ]
        },
        {
            id: '20241210001',
            date: '2024-12-10',
            status: '已完成',
            total: 2499,
            items: [
                { name: '小米平板6 Pro', quantity: 1, price: 2499 }
            ]
        }
    ]
};

// 用户信息
const userInfo = {
    name: '数码达人小明',
    userId: 'user_001',
    avatar: 'images/avatar.jpg',
    phone: '138****8888',
    address: '北京市朝阳区'
};

// 本地存储管理
const storage = {
    // 获取购物车
    getCart: function() {
        const cart = localStorage.getItem('mall_cart');
        return cart ? JSON.parse(cart) : mallData.cartItems;
    },
    
    // 保存购物车
    saveCart: function(cart) {
        localStorage.setItem('mall_cart', JSON.stringify(cart));
    },
    
    // 添加商品到购物车
    addToCart: function(product, quantity = 1) {
        const cart = this.getCart();
        const existingItem = cart.find(item => item.productId === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: Date.now(),
                productId: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity,
                selected: true
            });
        }
        
        this.saveCart(cart);
        return cart;
    },
    
    // 更新购物车商品数量
    updateCartItem: function(id, quantity) {
        const cart = this.getCart();
        const item = cart.find(item => item.id === id);
        
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(id);
            } else {
                item.quantity = quantity;
                this.saveCart(cart);
            }
        }
        
        return cart;
    },
    
    // 从购物车移除商品
    removeFromCart: function(id) {
        const cart = this.getCart();
        const index = cart.findIndex(item => item.id === id);
        
        if (index > -1) {
            cart.splice(index, 1);
            this.saveCart(cart);
        }
        
        return cart;
    },
    
    // 切换商品选中状态
    toggleSelect: function(id) {
        const cart = this.getCart();
        const item = cart.find(item => item.id === id);
        
        if (item) {
            item.selected = !item.selected;
            this.saveCart(cart);
        }
        
        return cart;
    },
    
    // 全选/取消全选
    toggleSelectAll: function(selected) {
        const cart = this.getCart();
        cart.forEach(item => item.selected = selected);
        this.saveCart(cart);
        return cart;
    },
    
    // 获取选中商品
    getSelectedItems: function() {
        const cart = this.getCart();
        return cart.filter(item => item.selected);
    },
    
    // 获取选中商品总价
    getSelectedTotal: function() {
        const selected = this.getSelectedItems();
        return selected.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    // 清空购物车
    clearCart: function() {
        localStorage.removeItem('mall_cart');
    }
};