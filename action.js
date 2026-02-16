// ========================
// Select Elements
// ========================
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter");
const priceInput = document.querySelector(".search-price input");
const priceButton = document.querySelector(".search-price button");
const products = document.querySelectorAll(".product-item");

// ========================
// Global State
// ========================
let state = {
  searchValue: "",
  category: "all",
  maxPrice: Infinity,
};

// ========================
// Utility: Update Active Button
// ========================
const updateActiveButton = () => {
  filterButtons.forEach(button => {
    button.classList.toggle(
      "selected",
      button.dataset.filter === state.category
    );
  });
};

// ========================
// Main Render Function
// ========================
const renderProducts = () => {
  products.forEach(product => {
    const name = product.querySelector("p").innerText.toLowerCase();
    const category = product.dataset.category;
    const priceText = product.querySelector("span").innerText;
    const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));

    const matchSearch = name.includes(state.searchValue);
    const matchCategory =
      state.category === "all" || category === state.category;
    const matchPrice = price <= state.maxPrice;

    if (matchSearch && matchCategory && matchPrice) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

// ========================
// Event Handlers
// ========================

// Search by name
searchInput.addEventListener("input", e => {
  state.searchValue = e.target.value.toLowerCase().trim();
  renderProducts();
});

// Filter by category
filterButtons.forEach(button => {
  button.addEventListener("click", e => {
    state.category = e.target.dataset.filter;
    updateActiveButton();
    renderProducts();
  });
});

// Filter by price
priceButton.addEventListener("click", () => {
  const value = parseFloat(priceInput.value);
  state.maxPrice = isNaN(value) ? Infinity : value;
  renderProducts();
});
