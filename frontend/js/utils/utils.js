export const changeValueFound = (keyword) => {
  const value = document.querySelector("#name-product-searched");
  value.textContent = `'${keyword} on Amazon'`;
};

export const toggleBlockButton = (button) => {
  button.disabled = !button.disabled;
};

export const cleanList = (listContainer) => {
  listContainer.innerHTML = "";
};

export const toggleSpinner = (spinner, visible) => {
  if (visible) {
    spinner.style.display = "block";
  } else {
    spinner.style.display = "none";
  }
};
