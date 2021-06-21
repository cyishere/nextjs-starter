export const getHeadings = (source) => {
  const regex = /<h2>(.*?)<\/h2>/g;

  if (source.match(regex)) {
    return source.match(regex).map((heading) => {
      const headingText = heading.replace("<h2>", "").replace("</h2>", "");

      const link = "#" + headingText.replace(/ /g, "_").toLowerCase();

      return {
        text: headingText,
        link,
      };
    });
  }

  return [];
};
