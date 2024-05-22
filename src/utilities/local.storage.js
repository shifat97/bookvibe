const getDataFromLS = () => {
  const getData = localStorage.getItem("wishlist");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
};

const setDataToLS = (dataID) => {
  const getData = getDataFromLS();
  getData.push(dataID);
  localStorage.setItem("wishlist", JSON.stringify(getData));
};

export { setDataToLS, getDataFromLS };
