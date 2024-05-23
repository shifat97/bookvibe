const getDataFromLS = () => {
  const getData = localStorage.getItem("read");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
};

const setReadDataToLS = (dataID) => {
  const getData = getDataFromLS();
  getData.push(dataID);
  localStorage.setItem("read", JSON.stringify(getData));
};

const getWishlistDataFromLS = () => {
  const getData = localStorage.getItem("wishlist");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
};

const setWishlistDataToLS = (dataID) => {
  const getData = getWishlistDataFromLS();
  getData.push(dataID);
  localStorage.setItem("wishlist", JSON.stringify(getData));
};

export {
  setReadDataToLS,
  getDataFromLS,
  setWishlistDataToLS,
  getWishlistDataFromLS,
};
