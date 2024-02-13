import { Selector, RequestLogger } from 'testcafe';

// Create a request logger instance
const logger = RequestLogger();

fixture`Testing Student UI`
    .page`http://localhost:4401/student`
    .requestHooks(logger);

test('Testing add students', async t => {
    // Set page request timeout here
    await t.pageRequestTimeout(30000); 
    await t.retryTestPages();

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
