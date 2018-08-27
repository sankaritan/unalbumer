import puppeteer from "puppeteer";

const Selectors = {
  APP_TITLE: "#app-title",
  PHOTO_CARD: ".photo-card",
  NEW_ALBUM_LINK: "#new-album-link",
  NEW_ALBUM_BUTTON: "#new-album-button"
};

describe("Unalbumer E2E Test", () => {
  let page;
  let browser;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
  });

  afterAll(async () => {
    await browser.close();
  });

  it("should display app title", async () => {
    await page.waitForSelector(Selectors.APP_TITLE);
    const title = await page.$(Selectors.APP_TITLE);
    const titleText = await page.evaluate((el) => el.innerText, title);
    await expect(titleText).toEqual("Unalbumer");
  });

  it("should display three photos", async () => {
    await page.waitForSelector(Selectors.PHOTO_CARD);
    const photosElements = await page.$$(Selectors.PHOTO_CARD);
    await expect(photosElements.length).toEqual(3);
  });

  it("should display new album link on button click", async () => {
    let successMessage = await page.$$(Selectors.NEW_ALBUM_LINK);
    await expect(successMessage.length).toEqual(0);

    await page.waitForSelector(Selectors.NEW_ALBUM_BUTTON);
    await page.click(Selectors.NEW_ALBUM_BUTTON);

    successMessage = await page.$$(Selectors.NEW_ALBUM_LINK);
    await expect(successMessage.length).toEqual(1);
  });
});
