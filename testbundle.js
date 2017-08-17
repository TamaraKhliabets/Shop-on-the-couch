let fs = require('fs'),
    xml2js = require('xml2js'),
    content,
    myTest;

let parser = new xml2js.Parser();
fs.readFile(__dirname + '/1137439.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        content = result;
        test();
    });
});

function test() {
    let offer = content.yml_catalog.shop[0].offers[0].offer;
    for (let i = 0; i < offer.length; i++) {
        delete offer[i].$;
        delete offer[i].age;
        delete offer[i].param;
    }
    myTest = JSON.stringify(offer);
    fs.writeFile('book.json', myTest, (err) => {
        if (err) throw err;
    });
}