export default async function handler(req, res) {
  try {
    const apiUrl =
      "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN";

    const response = await fetch(apiUrl);
    const data = await response.json();

    const imgPath = data.images[0].url;
    const imageUrl = "https://cn.bing.com" + imgPath;

    res.setHeader(
      "Cache-Control",
      "public, max-age=3600, s-maxage=3600"
    );

    return res.redirect(302, imageUrl);
  } catch (err) {
    console.error(err);
    return res.redirect(302, "https://bucket.uicp.cn/blog/wallpaper/202543.jpg");
  }
}
