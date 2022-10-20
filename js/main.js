const btnHamburger = document.querySelector(".header-blogr__hamburger");
const btnClose = document.querySelector(".header-blogr__close");
const subMenu = document.querySelector(".header-blogr-sub-menu");
const subMenuConnect = document.querySelector(".connect");
const MenuConnect = document.querySelector(".header-blogr-sub-menu-connect");
const subMenuCompany = document.querySelector(".company");
const MenuCompany = document.querySelector(".header-blogr-sub-menu-company");
const subMenuProduct = document.querySelector(".product");
const MenuProduct = document.querySelector(".header-blogr-sub-menu-product");
const arrowProduct = document.querySelector("#img-product");
const arrowCompany = document.querySelector("#img-company");
const arrowConnect = document.querySelector("#img-connect");
const arrowMobileProduct = document.querySelector("#arrow-product");
const arrowMobileCompany = document.querySelector("#arrow-company");
const arrowMobileConnect = document.querySelector("#arrow-connect");
const arrowSummaryProduct = document.querySelector("#arrow-summary-product");
const arrowSummaryCompany = document.querySelector("#arrow-summary-company");
const arrowSummaryConnect = document.querySelector("#arrow-summary-connect");

btnHamburger.addEventListener("click", () => {
  subMenu.style.display = "flex";
  btnHamburger.style.display = "none";
  btnClose.style.display = "block";
});

btnClose.addEventListener("click", () => {
  subMenu.style.display = "none";
  btnHamburger.style.display = "block";
  btnClose.style.display = "none";
});

subMenuConnect.addEventListener("click", () => {
  deleteArrows(false, true, true);
  arrowConnect.classList.toggle("reverse-arrow");
  MenuConnect.classList.toggle("display-flex");
  MenuCompany.classList.remove("display-flex");
  MenuProduct.classList.remove("display-flex");
});

subMenuCompany.addEventListener("click", () => {
  deleteArrows(true, false, true);
  arrowCompany.classList.toggle("reverse-arrow");
  MenuCompany.classList.toggle("display-flex");
  MenuConnect.classList.remove("display-flex");
  MenuProduct.classList.remove("display-flex");
});

subMenuProduct.addEventListener("click", () => {
  arrowProduct.classList.toggle("reverse-arrow");
  deleteArrows(true, true, false);
  MenuProduct.classList.toggle("display-flex");
  MenuCompany.classList.remove("display-flex");
  MenuConnect.classList.remove("display-flex");
});

arrowSummaryProduct.addEventListener("click", () => {
  arrowMobileProduct.classList.toggle("reverse-arrow");
  deleteArrows(false, true, true);
});

arrowSummaryCompany.addEventListener("click", () => {
  arrowMobileCompany.classList.toggle("reverse-arrow");
  deleteArrows(true, false, true);
});

arrowSummaryConnect.addEventListener("click", () => {
  arrowMobileConnect.classList.toggle("reverse-arrow");
  deleteArrows(true, true, false);
});

function deleteArrows(arr1 = true, arr2 = true, arr3 = true) {
  if (arr1) {
    arrowProduct.classList.remove("reverse-arrow");
  }
  if (arr2) {
    arrowCompany.classList.remove("reverse-arrow");
  }
  if (arr3) {
    arrowConnect.classList.remove("reverse-arrow");
  }
}

function deleteMobileArrows(arr1 = true, arr2 = true, arr3 = true) {
  if (arr1) {
    arrowMobileConnect.classList.remove("reverse-arrow");
  }
  if (arr2) {
    arrowMobileCompany.classList.remove("reverse-arrow");
  }
  if (arr3) {
    arrowMobileProduct.classList.remove("reverse-arrow");
  }
}
