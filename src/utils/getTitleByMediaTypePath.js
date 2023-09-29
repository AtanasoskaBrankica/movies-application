const getTitleByMediaTypePath = (path) => {
  const pathSegments = path.split("-");
  const title = pathSegments
    .map((segment) => {
      return segment.charAt(0).toUpperCase() + segment.slice(1);
    })
    .join(" ");

  return title;
};

export default getTitleByMediaTypePath;
