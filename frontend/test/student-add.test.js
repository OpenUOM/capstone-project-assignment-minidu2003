import { Selector, RequestLogger } from 'testcafe';

// Create a request logger instance
const logger = RequestLogger();

fixture`Testing Student UI`
    .page`http://localhost:4401/student`
    .requestHooks(logger)
    .pageRequestTimeout(10000) // Adjust the timeout value as needed
    .retryTestPages(); // Enable retrying test pages

test('Testing add students', async t => {
    await t.navigateTo("/dbinitialize");
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "999999");
    await t.typeText("#student-name", "Pasindu Basnayaka");
    await t.typeText("#student-age", "45");
    await t.typeText("#student-Hometown", "Catholic");
    await t.click("#student-add");

    await t.navigateTo("/student");

    const table = Selector('#student-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(tdText).contains("Pasindu Basnayaka");
});
