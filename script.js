// Complete toner data with skin types, benefits, and prices
const tonerData = {
    "50ml": [
        {
            uniqueName: "RoseMist Hydrate",
            benefits: "Deep hydration & soothing relief with rose water infusion",
            skinType: "Dry / Normal / Sensitive",
            price: "600"
        },
        {
            uniqueName: "GlowBerry", 
            benefits: "Brightening & dark spot correction for radiant complexion",
            skinType: "All skin types",
            price: "630"
        },
        {
            uniqueName: "LumiFade",
            benefits: "Advanced dark spot correcting & evening skin tone",
            skinType: "All skin types", 
            price: "670"
        },
        {
            uniqueName: "PrepPerfection",
            benefits: "Makeup prep & lightweight hydration for flawless application",
            skinType: "All skin types",
            price: "520"
        },
        {
            uniqueName: "SunSoothe",
            benefits: "After-sun cooling, redness reduction & skin repair",
            skinType: "Dry / Sensitive",
            price: "640"
        },
        {
            uniqueName: "MatteBalance",
            benefits: "Oil control, pore minimization & shine reduction",
            skinType: "Oily / Combination",
            price: "610"
        },
        {
            uniqueName: "AquaChill", 
            benefits: "Cooling & refreshing summer mist with energizing effect",
            skinType: "All skin types, especially Oily / Normal",
            price: "600"
        },
        {
            uniqueName: "ToneBalance",
            benefits: "Gentle exfoliation, pH balancing & texture refinement",
            skinType: "Oily / Combination (caution for sensitive)",
            price: "600"
        },
        {
            uniqueName: "SereniSkin",
            benefits: "Ultra-gentle calming for sensitive & reactive skin types",
            skinType: "Sensitive / Dry / Normal",
            price: "600"
        },
        {
            uniqueName: "RadiantDew",
            benefits: "Radiance boost & glow enhancement for dewy skin",
            skinType: "All skin types",
            price: "590"
        },
        {
            uniqueName: "ShieldBoost",
            benefits: "Barrier repair, moisture lock & skin protection",
            skinType: "Dry / Sensitive / Compromised skin",
            price: "580"
        },
        {
            uniqueName: "NightRevive",
            benefits: "Overnight repair, dark spot reduction & renewal",
            skinType: "Dry / Normal / Mature",
            price: "680"
        },
        {
            uniqueName: "TargetBright",
            benefits: "Spot treatment for targeted hyperpigmentation areas",
            skinType: "All skin types (especially Oily/Combination prone to dark spots)",
            price: "640"
        },
        {
            uniqueName: "FreshKick",
            benefits: "Pre-workout refreshing & post-exercise energizing boost",
            skinType: "All skin types",
            price: "540"
        },
        {
            uniqueName: "SunriseGlow",
            benefits: "Morning radiance boost & light antioxidant protection",
            skinType: "All skin types",
            price: "560"
        },
        {
            uniqueName: "MoonCalm",
            benefits: "Nighttime calming, overnight nourishment & repair",
            skinType: "Dry / Sensitive / Normal",
            price: "610"
        },
        {
            uniqueName: "TightRadiance",
            benefits: "Gently tightens pores, firms the skin, and brightens dull complexions. Helps reduce dark spots while keeping skin hydrated and fresh.",
            skinType: "All Skin Types — especially ideal for Normal to Oily skin",
            price: "630"
        }
    ],
    "100ml": [
        {
            uniqueName: "RoseMist Hydrate",
            benefits: "Deep hydration & soothing relief with rose water infusion",
            skinType: "Dry / Normal / Sensitive", 
            price: "950"
        },
        {
            uniqueName: "GlowBerry",
            benefits: "Brightening & dark spot correction for radiant complexion",
            skinType: "All skin types",
            price: "950"
        },
        {
            uniqueName: "LumiFade",
            benefits: "Advanced dark spot correcting & evening skin tone", 
            skinType: "All skin types",
            price: "1000"
        },
        {
            uniqueName: "PrepPerfection",
            benefits: "Makeup prep & lightweight hydration for flawless application",
            skinType: "All skin types",
            price: "750"
        },
        {
            uniqueName: "SunSoothe",
            benefits: "After-sun cooling, redness reduction & skin repair",
            skinType: "Dry / Sensitive",
            price: "950"
        },
        {
            uniqueName: "MatteBalance",
            benefits: "Oil control, pore minimization & shine reduction",
            skinType: "Oily / Combination",
            price: "930"
        },
        {
            uniqueName: "AquaChill",
            benefits: "Cooling & refreshing summer mist with energizing effect",
            skinType: "All skin types, especially Oily / Normal",
            price: "870"
        },
        {
            uniqueName: "ToneBalance",
            benefits: "Gentle exfoliation, pH balancing & texture refinement",
            skinType: "Oily / Combination (caution for sensitive)",
            price: "900"
        },
        {
            uniqueName: "SereniSkin",
            benefits: "Ultra-gentle calming for sensitive & reactive skin types",
            skinType: "Sensitive / Dry / Normal",
            price: "860"
        },
        {
            uniqueName: "RadiantDew",
            benefits: "Radiance boost & glow enhancement for dewy skin",
            skinType: "All skin types",
            price: "850"
        },
        {
            uniqueName: "ShieldBoost",
            benefits: "Barrier repair, moisture lock & skin protection",
            skinType: "Dry / Sensitive / Compromised skin",
            price: "810"
        },
        {
            uniqueName: "NightRevive",
            benefits: "Overnight repair, dark spot reduction & renewal",
            skinType: "Dry / Normal / Mature",
            price: "1000"
        },
        {
            uniqueName: "TargetBright",
            benefits: "Spot treatment for targeted hyperpigmentation areas",
            skinType: "All skin types (especially Oily/Combination prone to dark spots)",
            price: "950"
        },
        {
            uniqueName: "FreshKick",
            benefits: "Pre-workout refreshing & post-exercise energizing boost",
            skinType: "All skin types",
            price: "810"
        },
        {
            uniqueName: "SunriseGlow",
            benefits: "Morning radiance boost & light antioxidant protection",
            skinType: "All skin types",
            price: "810"
        },
        {
            uniqueName: "MoonCalm",
            benefits: "Nighttime calming, overnight nourishment & repair",
            skinType: "Dry / Sensitive / Normal",
            price: "850"
        },
        {
            uniqueName: "TightRadiance",
            benefits: "Gently tightens pores, firms the skin, and brightens dull complexions. Helps reduce dark spots while keeping skin hydrated and fresh.",
            skinType: "All Skin Types — especially ideal for Normal to Oily skin",
            price: "920"
        }
    ]
};

// Skin type to toner mapping
const skinTypeMapping = {
    'dry': ['RoseMist Hydrate', 'SunSoothe', 'SereniSkin', 'ShieldBoost', 'NightRevive', 'MoonCalm'],
    'oily': ['MatteBalance', 'ToneBalance', 'AquaChill', 'TargetBright', 'GlowBerry', 'FreshKick', 'TightRadiance'],
    'combination': ['MatteBalance', 'ToneBalance', 'AquaChill', 'TargetBright', 'GlowBerry', 'FreshKick', 'TightRadiance'],
    'sensitive': ['RoseMist Hydrate', 'SunSoothe', 'SereniSkin', 'ShieldBoost', 'MoonCalm'],
    'normal': ['RoseMist Hydrate', 'GlowBerry', 'LumiFade', 'PrepPerfection', 'AquaChill', 'RadiantDew', 'NightRevive', 'FreshKick', 'SunriseGlow', 'MoonCalm', 'TightRadiance'],
    'all': ['GlowBerry', 'LumiFade', 'PrepPerfection', 'AquaChill', 'RadiantDew', 'TargetBright', 'FreshKick', 'SunriseGlow', 'TightRadiance']
};

// User selections for custom creation
let userSelections = {
    skinType: null,
    goal: null,
    size: null
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadProducts('50ml');
    showStep(1);
});

// Load products based on selected size
function loadProducts(size) {
    const productsGrid = document.getElementById('productsGrid');
    const products = tonerData[size];
    
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.uniqueName}</h3>
            <div class="product-benefits">${product.benefits}</div>
            <div class="product-skin-type">${product.skinType}</div>
            <div class="product-prices">
                <div class="price-option">
                    <div class="price-size">${size}</div>
                    <div class="price-amount">PKR ${product.price}</div>
                </div>
            </div>
            <button class="order-btn" onclick="orderProduct('${product.uniqueName}', '${size}', ${product.price})">
                Order Now
            </button>
        `;
        productsGrid.appendChild(card);
    });
}

// Switch between 50ml and 100ml views
function switchSize(size) {
    const buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');
    loadProducts(size + 'ml');
}

// Scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Custom Creation Functions
function selectSkinType(skinType) {
    userSelections.skinType = skinType;
    
    // Update UI
    document.querySelectorAll('.skin-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // Show skin type in next step
    document.getElementById('skinTypeDisplay').textContent = `For ${getSkinTypeDisplayName(skinType)} skin`;
    
    // Load appropriate goals
    loadGoalOptions(skinType);
    
    // Move to next step
    setTimeout(() => {
        showStep(2);
    }, 500);
}

function getSkinTypeDisplayName(skinType) {
    const names = {
        'dry': 'Dry',
        'oily': 'Oily', 
        'combination': 'Combination',
        'sensitive': 'Sensitive',
        'normal': 'Normal',
        'all': 'All'
    };
    return names[skinType];
}

function loadGoalOptions(skinType) {
    const goalOptions = document.getElementById('goalOptions');
    const availableToners = skinTypeMapping[skinType];
    
    goalOptions.innerHTML = '';
    
    availableToners.forEach(tonerName => {
        // Find toner data to get benefits
        const toner = tonerData['50ml'].find(t => t.uniqueName === tonerName);
        
        const option = document.createElement('div');
        option.className = 'goal-option';
        option.onclick = () => selectGoal(tonerName, toner.benefits);
        option.innerHTML = `
            <div class="option-icon">V</div>
            <span>${tonerName}</span>
            <small>${toner.benefits.substring(0, 60)}...</small>
        `;
        goalOptions.appendChild(option);
    });
}

function selectGoal(goalName, benefits) {
    userSelections.goal = { name: goalName, benefits: benefits };
    
    // Update UI
    document.querySelectorAll('.goal-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // Update price previews
    updatePricePreviews(goalName);
    
    // Move to next step
    setTimeout(() => {
        showStep(3);
    }, 500);
}

function updatePricePreviews(goalName) {
    const toner50ml = tonerData['50ml'].find(t => t.uniqueName === goalName);
    const toner100ml = tonerData['100ml'].find(t => t.uniqueName === goalName);
    
    document.getElementById('price50ml').textContent = toner50ml ? toner50ml.price : '-';
    document.getElementById('price100ml').textContent = toner100ml ? toner100ml.price : '-';
}

function selectSize(size) {
    userSelections.size = size;
    
    // Update UI
    document.querySelectorAll('.size-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // Show creation summary
    showCreationSummary();
}

function showCreationSummary() {
    const summary = document.getElementById('creationSummary');
    const toner = tonerData[userSelections.size].find(t => t.uniqueName === userSelections.goal.name);
    
    document.getElementById('summaryName').textContent = userSelections.goal.name;
    document.getElementById('summaryBenefits').textContent = userSelections.goal.benefits;
    document.getElementById('summarySkinType').textContent = toner.skinType;
    document.getElementById('finalPrice').textContent = `PKR ${toner.price}`;
    document.getElementById('sizeIndicator').textContent = userSelections.size;
    
    summary.style.display = 'block';
    summary.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showStep(stepNumber) {
    document.querySelectorAll('.creation-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step${stepNumber}`).classList.add('active');
}

// Order Functions
function orderProduct(productName, size, price) {
    const toner = tonerData[size].find(t => t.uniqueName === productName);
    const message = `Hello VAMOS! I want to order:

Product: ${productName}
Size: ${size}
Skin Type: ${toner.skinType}
Benefits: ${toner.benefits}
Price: PKR ${price}

Please confirm availability and payment details.`;
    
    openWhatsApp(message);
}

function placeCustomOrder() {
    if (!userSelections.skinType || !userSelections.goal || !userSelections.size) {
        alert('Please complete all steps before ordering.');
        return;
    }
    
    const toner = tonerData[userSelections.size].find(t => t.uniqueName === userSelections.goal.name);
    
    const message = `Hello VAMOS! I want to order my custom toner:

Skin Type: ${getSkinTypeDisplayName(userSelections.skinType)}
Product: ${userSelections.goal.name}
Size: ${userSelections.size}
Benefits: ${userSelections.goal.benefits}
Suitable For: ${toner.skinType}
Price: PKR ${toner.price}

Please confirm availability and payment details.`;
    
    openWhatsApp(message);
}

function openWhatsApp(message) {
    // REPLACE THIS WITH YOUR ACTUAL WHATSAPP NUMBER
    const whatsappNumber = '923706236674'; 
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
}
// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const isDisplayed = navLinks.style.display === 'flex';
            navLinks.style.display = isDisplayed ? 'none' : 'flex';
            
            // Position the menu properly on mobile
            if (window.innerWidth <= 768) {
                if (!isDisplayed) {
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '100%';
                    navLinks.style.left = '0';
                    navLinks.style.right = '0';
                    navLinks.style.backgroundColor = 'rgba(35, 28, 28, 0.98)';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.padding = '2rem';
                    navLinks.style.gap = '1.5rem';
                }
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    });
    
    // Adjust menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
            navLinks.style.position = 'static';
            navLinks.style.backgroundColor = 'transparent';
            navLinks.style.flexDirection = 'row';
            navLinks.style.padding = '0';
        } else {
            navLinks.style.display = 'none';
        }
    });
});
