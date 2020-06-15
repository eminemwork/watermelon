const URI = {
  FRONT_URI: "",
  BACK_URI: "",
};

if (process.env.REACT_APP_ENV === "local") {
  URI.FRONT_URI = process.env.REACT_APP_LOCAL_FRONT_ADDRESS!;
  URI.BACK_URI = process.env.REACT_APP_LOCAL_BACK_ADDRESS!;
} else if (process.env.REACT_APP_ENV === "production") {
  URI.FRONT_URI = process.env.REACT_APP_CLOUD_FRONT_ADDRESS!;
  URI.BACK_URI = process.env.REACT_APP_CLOUD_BACK_ADDRESS!;
}

export default URI;
