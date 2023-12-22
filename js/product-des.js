var currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  displayProduct();
});

function displayProduct() {
  var productInfoElements = document.querySelectorAll(".product-info");

  // Ẩn tất cả các thông tin sản phẩm
  productInfoElements.forEach(function (element) {
    element.style.display = "none";
  });

  // Hiển thị thông tin sản phẩm tương ứng với currentIndex
  var currentProductInfoElement = document.querySelector(
    ".product-info[data-index='" + currentIndex + "']"
  );
  currentProductInfoElement.style.display = "block";
}

// Bắt sự kiện khi click vào hình ảnh hoặc thumb
document.addEventListener("click", function (event) {
  if (
    event.target.tagName === "IMG" &&
    event.target.hasAttribute("data-index")
  ) {
    currentIndex = parseInt(event.target.getAttribute("data-index"), 10);
    displayProduct();
  }
});

// Bắt sự kiện khi click vào mũi tên next
var nextButton = document.getElementsByClassName("slick-next");
if (nextButton) {
  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalImages; // totalImages là số lượng hình ảnh
    displayProduct();
  });
}

var prevButton = document.getElementsByClassName("slick-prev");
if (prevButton) {
  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1) % totalImages; // totalImages là số lượng hình ảnh
    displayProduct();
  });
}

// nút read more
