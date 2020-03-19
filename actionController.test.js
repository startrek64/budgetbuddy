const con = require('./controllers/actionController')

test('tests array is avalible for report tracking', () => {
    let data = con.data2
expect(con(data))
});


test('tests that varible is avalible for current account value tracking', () => {
    let val = con.val2
expect(con(val))
});

test('tests that varible is avalible for current account value editing', () => {
    let vale = con.vale
expect(con(vale))
});