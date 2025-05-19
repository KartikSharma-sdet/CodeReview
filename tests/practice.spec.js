import { test, expect } from '@playwright/test';

test("My First Test", async function({page}){
    expect(12).toBe(12)
})

test("My Second Test", async function({page}){
    expect(101).toBe(101)
})

test("My Third Test", async function({page}){
    expect("Kartik Sharma").toContain("Sharma")
})

// test.only / test.skip

test("My Google Test", async function({page}){
    await page.goto("https://google.com")
    const url = await page.url()
    console.log("URL is " + url)

    const title = await page.title()
    // expect(title).toBe("Google")
    await expect(page).toHaveTitle("Google")
    console.log("Title is " + title )

})