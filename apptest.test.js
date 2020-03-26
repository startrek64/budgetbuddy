const app = require('./apptest')

test('tests array is avalible for report tracking', () => {
    let data = app.data2
expect(app(data))
});


test('tests that varible is avalible for current account value tracking', () => {
    let val = app.val2
expect(app(val))
});

test('tests that varible is avalible for current account value editing', () => {
    let vale = app.vale
expect(app(vale))
});
