// Hàm chung để tạo các sự kiện nhấp chuột cho các phần tử HTML
function createViewProductEvents(loginBtnClass, loginClass, closeClass, loginCtnClass) {
    // Lựa chọn các phần tử HTML theo lớp CSS
    const loginbtn = document.querySelector(loginBtnClass)
    const login = document.querySelector(loginClass)
    const close = document.querySelector(closeClass)
    const loginctn = document.querySelector(loginCtnClass) 
  
    // Hàm để hiển thị phần tử login
    function showViewProduct() {
      login.classList.add('open')
    }
  
    // Hàm để ẩn phần tử login
    function outViewProduct() {
      login.classList.remove('open')
    }
  
  
    // Thêm các sự kiện nhấp chuột cho các phần tử HTML
    loginbtn.addEventListener('click', showViewProduct)
    close.addEventListener('click', outViewProduct)
    login.addEventListener('click', outViewProduct)
    loginctn.addEventListener('click', function(event) {
      event.stopPropagation()
})
}

// Sử dụng hàm chung cho các div HTML khác nhau
createViewProductEvents('.js-view_product-btn', '.view_product', '.js-view_product-close', '.js-view_product-container')