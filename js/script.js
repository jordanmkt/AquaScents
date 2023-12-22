function openPopup() {
  document.getElementById("purchaseForm").style.display = "block";
}

function closePurchaseForm() {
  document.getElementById("purchaseForm").style.display = "none";
}

function submitPurchaseForm() {
  // Thực hiện xử lý khi người dùng nhấn nút Đặt mua
  // Ví dụ: Kiểm tra thông tin, gửi đơn hàng, ...
  alert("Đơn hàng đã được đặt thành công!");
  closePurchaseForm(); // Đóng pop-up sau khi đặt hàng
}

// Hàm này để cập nhật tên sản phẩm khi mua ngay
function updateProductName(productName) {
  document.getElementById("product").value = productName;
}
