import {Selector, RequestLogger} from 'testcafe';
process.env.NODE_ENV = "test";

const logger = RequestLogger();

fixture`Testing Teacher UI`
    .page`http://localhost:4401/`
   .requestHooks(logger);

test('Testing search Teachers', async t => {
    await t.navigateTo("/");
    await t.typeText("#teacher-search", "su");

    const table = Selector('#teacher-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount-1).innerText;
    await t.expect(rowCount).eql(2)

    await t.navigateTo("/dbinitialize");
});
