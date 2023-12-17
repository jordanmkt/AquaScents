var arrNH = [
  {
    brand: "Hermes",
    hinh: "images_1/product/Hermes/Hermes Un Jardin sur le Toit Eau de Toilette.jpg",
    sp: "Hermes Un Jardin sur le Toit Eau de Toilette",
    gioitinh: "Unisex",
    dungtich: "100",
    gia: "2700000",
    nongdo: "EDT",
  },

  {
    brand: "Hermes",
    hinh: "images_1/product/Hermes/Hermes L’Ambre des Merveilles.jpg",
    sp: "Hermes L’Ambre des Merveilles",
    gioitinh: "Unisex",
    dungtich: "100",
    gia: "2950000",
    nongdo: "EDP",
  },

  {
    brand: "Hermes",
    hinh: "images_1/product/Hermes/Hermes L’ombre des Merveilles.jpg",
    sp: "Hermes L’ombre des Merveilles",
    gioitinh: "Unisex",
    dungtich: "100",
    gia: "2499000",
    nongdo: "EDP",
  },

  {
    brand: "Hermes",
    hinh: "images_1/product/Hermes/Hermes Twilly DHermes For Women EDP.jpg",
    sp: "Hermes Twilly DHermes For Women EDP",
    gioitinh: "Nữ",
    dungtich: "85",
    gia: "3150000",
    nongdo: "EDP",
  },
];

function hienNH(
  brandcheck_arr = [],
  pricecheck_arr = [],
  gendercheck_arr = []
) {
  var countproducts = 0;
  var countproducts2 = 0;

  var list = document.getElementById("list");

  list.innerHTML = "";
  for (i = 0; i < arrNH.length; i++) {
    thuonghieuNH = arrNH[i].brand;
    picNH = arrNH[i].hinh;
    tenNH = arrNH[i].sp;
    gioitinhNH = arrNH[i].gioitinh;
    dungtichNH = arrNH[i].dungtich;
    giaNH = arrNH[i].gia;
    nongdoNH = arrNH[i].nongdo;
    giaFormatted = parseFloat(giaNH).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    //filter brand
    if (brandcheck_arr.length > 0) {
      if (brandcheck_arr.includes(thuonghieuNH) == false) continue;
    }
    //filter price
    if (pricecheck_arr.length > 0) {
      if (giaNH < 1000000 && !pricecheck_arr.includes("1")) continue;
      if (giaNH >= 1000000 && giaNH < 2000000 && !pricecheck_arr.includes("2"))
        continue;
      if (giaNH >= 2000000 && giaNH < 4000000 && !pricecheck_arr.includes("3"))
        continue;
      if (giaNH >= 4000000 && !pricecheck_arr.includes("4")) continue;
    }
    //filter gender
    if (gendercheck_arr.length > 0) {
      if (gendercheck_arr.includes(gioitinhNH) == false) continue;
    }
    countproducts++;
    countproducts2++;

    list.innerHTML += `
    <div class="col-lg-3 col-md-3 col-sm-3 col-6 mt-40 mb-35">
                    <!-- single-product-wrap start -->
                    <div class="single-product-wrap">
                      <div class="product-image">
                        <a href="#">
                          <img
                            src="${picNH}"
                            alt="Li's Product Image"
                          />
                        </a>
                        <span class="sticker">New</span>
                      </div>
                      <div class="product_desc">
                        <div class="product_desc_info">
                          <div class="product-review">
                            <h5 class="manufacturer">
                              <a href="product-details.html">${thuonghieuNH}</a>
                            </h5>
                            <div class="rating-box">
                              <ul class="rating">
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li class="no-star">
                                  <i class="fa fa-star-o"></i>
                                </li>
                                <li class="no-star">
                                  <i class="fa fa-star-o"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h4>
                            <a class="product_name" href="#"
                              >${tenNH}</a
                            >
                          </h4>
                          <div class="price-box">
                            <span class="new-price">${giaFormatted}</span>
                            <span>${dungtichNH}ML</span>
                          </div>
                        </div>
                        <div class="add-actions">
                          <ul class="add-actions-link">
                            <li class="add-cart active">
                              <a href="#">Mua ngay</a>
                            </li>
                            <!-- <li>
                              <a
                                href="#"
                                title="quick view"
                                class="quick-view-btn"
                                data-toggle="modal"
                                data-target="#exampleModalCenter"
                                ><i class="fa fa-eye"></i
                              ></a>
                            </li>
                            <li>
                              <a
                                class="links-details"
                                href="wishlist.html"
                                ><i class="fa fa-heart-o"></i
                              ></a>
                            </li> -->
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- single-product-wrap end -->
                  </div>

    `;
  }
  document.getElementById(
    "countproducts"
  ).innerHTML = `Showing ${countproducts} of 4 items`;

  document.getElementById(
    "countproducts2"
  ).innerHTML = `Showing ${countproducts2} of 4 items`;
}
hienNH();

function chonNH() {
  var arrbrand = document.getElementsByClassName("brand");
  var brandcheck_arr = [];
  for (i = 0; i < arrbrand.length; i++) {
    if (arrbrand[i].checked) brandcheck_arr.push(arrbrand[i].value);
  }

  var arrprice = document.getElementsByClassName("price");
  var pricecheck_arr = [];
  for (i = 0; i < arrprice.length; i++) {
    if (arrprice[i].checked) pricecheck_arr.push(arrprice[i].value);
  }

  var arrgender = document.getElementsByClassName("gender");
  var gendercheck_arr = [];
  for (i = 0; i < arrgender.length; i++) {
    if (arrgender[i].checked) gendercheck_arr.push(arrgender[i].value);
  }

  hienNH(brandcheck_arr, pricecheck_arr, gendercheck_arr);
}

//nút clearall
function clearAll() {
  var arrbrand = document.getElementsByClassName("brand");
  for (i = 0; i < arrbrand.length; i++) {
    arrbrand[i].checked = false;
  }

  var arrprice = document.getElementsByClassName("price");
  for (i = 0; i < arrprice.length; i++) {
    arrprice[i].checked = false;
  }

  var arrgender = document.getElementsByClassName("gender");
  for (i = 0; i < arrgender.length; i++) {
    arrgender[i].checked = false;
  }

  hienNH(); // Gọi lại hàm hiển thị sản phẩm sau khi xóa lựa chọn
}
