/**
 * ZYZ Home - Main JavaScript
 * Handles product rendering, filters, mobile nav, scroll effects, and hero slider
 */

const products = [
  // Trash Can (6)
  {
    asin: "B0G7FJH36B",
    title: "zyz Kitchen Trash Can 13 Gallon / 50L, Automatic Touchless Sensor Garbage Can with Butterfly Lid, USB Rechargeable 2400mAh Battery, Stainless Steel Soft-Close Trash Bin for Home (20 Count Trash Bags)",
    image: "images/B0G7FJH36B.jpg",
    url: "https://www.amazon.com/dp/B0G7FJH36B",
    category: "trash-can"
  },
  {
    asin: "B0G7FV1NYZ",
    title: "Kitchen Trash Can 13 Gallon / 50L, Automatic Touchless Sensor Garbage Can with Butterfly Lid, USB Rechargeable 2400mAh Battery, Stainless Steel Soft-Close Trash Bin for Home (120 Count Trash Bags)",
    image: "images/B0G7FV1NYZ.jpg",
    url: "https://www.amazon.com/dp/B0G7FV1NYZ",
    category: "trash-can"
  },
  {
    asin: "B0G7F6XRSL",
    title: "Automatic Trash Can Touchless 13 Gallon / 50L, Motion Sensor Trash Can with USB Rechargeable, Automatic Garbage Can for Kitchen, Butterfly Soft-Close Lid & Ozone Sanitizing (Includes 240 Trash Bags)",
    image: "images/B0G7F6XRSL.jpg",
    url: "https://www.amazon.com/dp/B0G7F6XRSL",
    category: "trash-can"
  },
  {
    asin: "B0G7FGW6YV",
    title: "zyz Kitchen Trash Can 13 Gallon / 50L, Automatic Touchless Sensor Garbage Can with Butterfly Lid and Legs, USB 2400mAh Battery, Stainless Steel Soft-Close Trash Bin for Home (20 Count Trash Bags)",
    image: "images/B0G7FGW6YV.jpg",
    url: "https://www.amazon.com/dp/B0G7FGW6YV",
    category: "trash-can"
  },
  {
    asin: "B0G7F8JGK5",
    title: "zyz Kitchen Trash Can 13 Gallon / 50L, Automatic Touchless Sensor Garbage Can with Butterfly Lid and Legs, USB 2400mAh Battery, Stainless Steel Soft-Close Trash Bin for Home (120 Count Trash Bags)",
    image: "images/B0G7F8JGK5.jpg",
    url: "https://www.amazon.com/dp/B0G7F8JGK5",
    category: "trash-can"
  },
  {
    asin: "B0G7FM6T2N",
    title: "Automatic Trash Can Touchless 13 Gallon / 50L, Motion Sensor Trash Can with USB Rechargeable, Butterfly Soft-Close Lid & Ozone Sanitizing, Automatic Garbage Can for Kitchen (Includes 240 Trash Bags)",
    image: "images/B0G7FM6T2N.jpg",
    url: "https://www.amazon.com/dp/B0G7FM6T2N",
    category: "trash-can"
  },
  // Rocking Chair (4)
  {
    asin: "B0FWCG9FSL",
    title: "zyz Oversized Nursery Rocking Chair with Pillow, Teddy Upholstered Rocker Chair with Solid Wood & Steel Frame, 25° Gentle Rocking Accent Chair with DIY Ottoman Footrest for Living Room Bedroom, White",
    image: "images/B0FWCG9FSL.jpg",
    url: "https://www.amazon.com/dp/B0FWCG9FSL",
    category: "rocking-chair"
  },
  {
    asin: "B0GLH18B3V",
    title: "zyz Oversized Nursery Rocking Chair with Pillow, Teddy Upholstered Rocker Chair with Solid Wood & Steel Frame, 25° Gentle Rocking Accent Chair with DIY Ottoman Footrest for Living Room Bedroom, Pink",
    image: "images/B0GLH18B3V.jpg",
    url: "https://www.amazon.com/dp/B0GLH18B3V",
    category: "rocking-chair"
  },
  {
    asin: "B0GLH2ZWK6",
    title: "Oversized Nursery Rocking Chair with Pillow, Teddy Upholstered Rocker Chair with Solid Wood & Steel Frame, 25° Gentle Rocking Accent Chair with DIY Ottoman Footrest for Living Room Bedroom, Purple",
    image: "images/B0GLH2ZWK6.jpg",
    url: "https://www.amazon.com/dp/B0GLH2ZWK6",
    category: "rocking-chair"
  },
  {
    asin: "B0FWCHQG9X",
    title: "ZYZ Rocking Chair with Ottoman and Pillow, Mid-Century Modern Recliner, Reclining Nursery Rocker, Wood Armchair, 25° Rocking Motion, Lazy Sofa for Living Room Bedroom Balcony, PU Leather (Creamy Grey)",
    image: "images/B0FWCHQG9X.jpg",
    url: "https://www.amazon.com/dp/B0FWCHQG9X",
    category: "rocking-chair"
  },
  // Side Table (1)
  {
    asin: "B0G3W8BRQ1",
    title: "zyz Vintage Side Table, Round Solid Wood Pedestal End Table, Accent Table Nightstand for Living Room Bedroom Bedside, Coffee Drink Reading Narrow Table for Sofa Couch Corner Office Small Spaces",
    image: "images/B0G3W8BRQ1.jpg",
    url: "https://www.amazon.com/dp/B0G3W8BRQ1",
    category: "side-table"
  },
  // Ottoman (3)
  {
    asin: "B0G3PGY14X",
    title: "zyz 21 Inch Square Storage Ottoman Coffee Table, Modern Ottoman with Flip-Top Lidm, Solid Wood Panel, Houndstooth Fabric Footstool, Accent Ottoman for Living Room, Bedroom, Corners, Entryways (Brown)",
    image: "images/B0G3PGY14X.jpg",
    url: "https://www.amazon.com/dp/B0G3PGY14X",
    category: "ottoman"
  },
  {
    asin: "B0G3PRMFN6",
    title: "zyz 21 Inch Square Storage Ottoman Coffee Table, Modern Ottoman with Flip-Top Lidm, Solid Wood Panel, Houndstooth Fabric Footstool, Accent Ottoman for Living Room, Bedroom, Corners, Entryways (Black)",
    image: "images/B0G3PRMFN6.jpg",
    url: "https://www.amazon.com/dp/B0G3PRMFN6",
    category: "ottoman"
  },
  {
    asin: "B0G3PRVQ7K",
    title: "zyz 21 Inch Square Storage Ottoman Coffee Table, Modern Ottoman with Flip-Top Lidm, Solid Wood Panel, Houndstooth Fabric Footstool, Accent Ottoman for Living Room, Bedroom, Corners, Entryways (Grey)",
    image: "images/B0G3PRVQ7K.jpg",
    url: "https://www.amazon.com/dp/B0G3PRVQ7K",
    category: "ottoman"
  },
  // Swivel Chair (3)
  {
    asin: "B0GJ2YSFVW",
    title: "zyz Mid Century Modern Accent Chair, Solid Wood Arms & Legs, 360° Swivel Desk Chair No Wheels, Upholstered Vanity Chair, PU Leather Armchair for Home Office Living Room Bedroom (Khaki, Set of 1)",
    image: "images/B0GJ2YSFVW.jpg",
    url: "https://www.amazon.com/dp/B0GJ2YSFVW",
    category: "swivel-chair"
  },
  {
    asin: "B0GJ2TTRRM",
    title: "zyz Mid Century Modern Accent Chair, Solid Wood Arms & Legs, 360° Swivel Desk Chair No Wheels, Upholstered Vanity Chair, PU Leather Armchair for Home Office Living Room Bedroom (Brown, Set of 1)",
    image: "images/B0GJ2TTRRM.jpg",
    url: "https://www.amazon.com/dp/B0GJ2TTRRM",
    category: "swivel-chair"
  },
  {
    asin: "B0GJ4X27RY",
    title: "zyz Mid Century Modern Accent Chair, Solid Wood Arms & Legs, 360° Swivel Desk Chair No Wheels, Upholstered Vanity Chair, PU Leather Armchair for Home Office Living Room Bedroom (Khaki, Set of 2)",
    image: "images/B0GJ4X27RY.jpg",
    url: "https://www.amazon.com/dp/B0GJ4X27RY",
    category: "swivel-chair"
  }
];

const categoryLabels = {
  "trash-can": "Trash Can",
  "rocking-chair": "Rocking Chair",
  "side-table": "Side Table",
  "ottoman": "Ottoman",
  "swivel-chair": "Swivel Chair"
};

function renderProducts(containerId, category, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let items = products;
  if (category) {
    items = items.filter(p => p.category === category);
  }
  if (limit && limit > 0) {
    items = items.slice(0, limit);
  }

  container.innerHTML = items.map(p => `
    <article class="product-card" data-category="${p.category}">
      <div class="product-image">
        <a href="${p.url}" target="_blank" rel="noopener noreferrer">
          <img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy" width="400" height="400">
        </a>
      </div>
      <div class="product-info">
        <h3 class="product-title">${escapeHtml(p.title)}</h3>
        <div class="product-meta">
          <span class="product-category">${categoryLabels[p.category] || p.category}</span>
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View on Amazon</a>
        </div>
      </div>
    </article>
  `).join("");
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function initFilters() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const category = grid.dataset.category;
  if (category) {
    renderProducts("productGrid", category);
  }
}

function initMobileNav() {
  const toggle = document.getElementById("mobileToggle");
  const nav = document.getElementById("navLinks");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    const isOpen = nav.classList.contains("active");
    toggle.innerHTML = isOpen ? "&times;" : "&#9776;";
    toggle.setAttribute("aria-expanded", isOpen);
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      toggle.innerHTML = "&#9776;";
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".feature-item, .faq-item, .product-card").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
}

function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
    } else {
      navbar.style.boxShadow = "none";
    }
    lastScroll = currentScroll;
  });
}

function initHeroSlider() {
  const hero = document.getElementById("heroSlider");
  if (!hero) return;

  const slides = hero.querySelectorAll(".hero-slide");
  if (slides.length === 0) return;

  let current = 0;
  const interval = parseInt(hero.dataset.interval, 10) || 5000;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
      slide.style.zIndex = i === index ? "1" : "0";
    });
  }

  slides.forEach((slide, i) => {
    slide.style.position = "absolute";
    slide.style.top = "0";
    slide.style.left = "0";
    slide.style.width = "100%";
    slide.style.height = "100%";
    slide.style.opacity = i === 0 ? "1" : "0";
    slide.style.transition = "opacity 0.8s ease-in-out";
    slide.style.zIndex = i === 0 ? "1" : "0";
  });

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, interval);
}

function initFaq() {
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-question span").textContent = "+";
      });

      if (!isActive) {
        item.classList.add("active");
        btn.querySelector("span").textContent = "-";
      }
    });
  });
}

const API_BASE_URL = 'https://api.supuzz.cn';

function isLocalhost() {
  const hostname = window.location.hostname;
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.');
}

function reportPageView() {
  const payload = {
    brandName: 'ZYZ',
    domain: window.location.hostname || 'zyzhome.com',
    pageUrl: window.location.pathname,
    referrer: document.referrer || '',
    userAgent: navigator.userAgent || '',
    ipAddress: ''
  };

  if (isLocalhost()) {
    console.log('[PageView]', payload);
    return;
  }

  fetch(`${API_BASE_URL}/api/pageview`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Origin': window.location.origin
    },
    body: JSON.stringify(payload),
    credentials: 'include'
  }).catch(() => {});
}

function initSubscribeForm() {
  const form = document.getElementById('subscribeForm');
  if (!form) return;

  const emailInput = document.getElementById('subscribeEmail');
  const messageDiv = document.getElementById('subscribeMessage');
  const submitBtn = form.querySelector('.subscribe-btn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email) {
      showMessage('Please enter your email', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Subscribing...';
    showMessage('', '');

    try {
      const response = await fetch(`${API_BASE_URL}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': window.location.origin
        },
        body: JSON.stringify({
          brandName: 'ZYZ',
          domain: window.location.hostname || 'zyzhome.com',
          email: email
        }),
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        showMessage('Successfully subscribed!', 'success');
        form.reset();
      } else {
        const errorData = await response.json().catch(() => null);
        showMessage(errorData?.message || 'Subscription failed, please try again', 'error');
      }
    } catch (error) {
      showMessage('Network error, please try again', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Subscribe';
    }
  });

  function showMessage(text, type) {
    if (!messageDiv) return;
    messageDiv.textContent = text;
    messageDiv.className = 'subscribe-message';
    if (type) {
      messageDiv.classList.add(type);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initFilters();
  initMobileNav();
  initScrollReveal();
  initNavbarScroll();
  initHeroSlider();
  initFaq();
  initSubscribeForm();
  reportPageView();
});
