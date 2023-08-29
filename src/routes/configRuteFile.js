const isProd = false;
const isProdApi = true;

export const configRuteFile = (name) => {
  if (isProd) {
    return `./assets/${name}`;
  } else {
    return `../../public/assets/${name}`;
  }
};

export const envRuteApi = () => {
  if (isProdApi) {
    return "https://ecommerce-back-5t41.onrender.com/";
  } else {
    return "http://localhost:3000/";
  }
};
