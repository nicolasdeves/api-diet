export const getCurrentDate = () => {
  const dateNow = new Date();
  
  const year = dateNow.getFullYear();
  const month = String(dateNow.getMonth() + 1).padStart(2, '0');
  const day = String(dateNow.getDate()).padStart(2, '0');
  const hour = String(dateNow.getHours()).padStart(2, '0');
  const minute = String(dateNow.getMinutes()).padStart(2, '0');
  const second = String(dateNow.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
