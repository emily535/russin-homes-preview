import { expect, test } from "@playwright/test";
import { routes } from "../data/site";

test("all required routes render cleanly with one H1 and local images", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.ok(), route).toBeTruthy();
    await expect(page.locator("h1"), `${route} H1`).toHaveCount(1);
    await expect(page.locator("body"), `${route} overflow`).toHaveJSProperty(
      "scrollWidth",
      await page.locator("body").evaluate((body) => body.clientWidth),
    );
    const sources = await page
      .locator("img")
      .evaluateAll((images) => images.map((image) => (image as HTMLImageElement).currentSrc));
    expect(
      sources
        .filter(Boolean)
        .every(
          (source) => source.includes("/_next/image") || source.includes("/images/russin-homes/"),
        ),
    ).toBeTruthy();
  }
  expect(errors).toEqual([]);
});

test("desktop dropdown supports keyboard and escape", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop");
  await page.goto("/");
  const button = page.getByRole("button", { name: "Where We Build" });
  await button.focus();
  await page.keyboard.press("Enter");
  await expect(button).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: "Youngsville", exact: true })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(button).toHaveAttribute("aria-expanded", "false");
});

test("mobile navigation opens and closes", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile");
  await page.goto("/");
  const open = page.getByRole("button", { name: "Open navigation" });
  await open.click();
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  await page.getByRole("button", { name: "Close navigation" }).click();
});

test("homesite controls preserve stable project layout", async ({ page }) => {
  await page.goto("/opportunities");
  const cards = page.locator(".project-card");
  await expect(cards).toHaveCount(7);
  for (const [label, count] of [
    ["Move-in Ready", 2],
    ["Under Construction", 1],
    ["Presale Homesites", 4],
  ] as const) {
    await page.getByRole("button", { name: label }).click();
    await expect(cards).toHaveCount(count);
    await expect(page.locator(".filter-note")).toContainText(String(count));
  }
});

test("contact form shows invalid, accepted, failure, and retry states", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send Inquiry" }).click();
  await expect(page.locator(".form-status")).toContainText("correct");
  await page.getByLabel("Name").fill("Browser QA");
  await page.getByLabel("Email").fill("browser@example.com");
  await page.getByLabel("Message").fill("Please send current property details.");
  await page.route("**/__forms.html", (route) => route.fulfill({ status: 200, body: "ok" }));
  await page.getByRole("button", { name: "Send Inquiry" }).click();
  await expect(page.locator(".form-status")).toContainText("received");
  await page.unroute("**/__forms.html");
  await page.getByLabel("Name").fill("Browser QA");
  await page.getByLabel("Email").fill("browser@example.com");
  await page.getByLabel("Message").fill("Retry test.");
  await page.route("**/__forms.html", (route) => route.fulfill({ status: 500, body: "error" }));
  await page.getByRole("button", { name: "Send Inquiry" }).click();
  await expect(page.locator(".form-status")).toContainText("could not send");
  await expect(page.getByRole("button", { name: "Send Inquiry" })).toBeEnabled();
});

test("capture inspected screenshots", async ({ page }, testInfo) => {
  test.skip(!["mobile", "desktop"].includes(testInfo.project.name));
  for (const [route, name] of [
    ["/", "homepage"],
    ["/portfolio/205-red-cardinal-court", "property"],
    ["/portfolio/1121-dovefield-lane", "missing-photo-property"],
    ["/opportunities", "opportunities"],
    ["/contact", "contact"],
  ] as const) {
    await page.goto(route);
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 40));
      }
      window.scrollTo(0, 0);
    });
    await page.screenshot({
      path: `screenshots/${name}-${testInfo.project.name}.png`,
      fullPage: true,
    });
  }
});

test("unknown project slug returns a real 404", async ({ page }) => {
  const response = await page.goto("/portfolio/not-a-real-project");
  expect(response?.status()).toBe(404);
  await expect(page.locator("h1")).toHaveCount(1);
});
