let fs = require('fs');
let arg = process.argv[2];
let name = process.argv[3];

switch (arg) {
    case 'make:action':
        var item = 'action';

        var filedir = './public/js/actions/';
        var filename = filedir + name + '.js';
        var template = './vendor/templates/action/action.txt';
        break;
    case 'make:component':
        var item = 'component';

        var filedir = './public/js/components/';
        var filename = filedir + name + '.js';
        var template = './vendor/templates/component/component.txt';
        break;
    case 'make:container':
        var item = 'container';

        var filedir = './public/js/containers/';
        var filename = filedir + name + '.js';
        var template = './vendor/templates/container/container.txt';
        break;      
    case 'make:reducer':
        var item = 'reducer';

        var filedir = './public/js/reducers/';
        var filename = filedir + name + '.js';
        var template = './vendor/templates/reducer/reducer.txt';
        break;            
    default:
        console.log('incorrect syntax');
        return false;
        break;
}



let content = fs.readFileSync(template, 'utf8');

fs.appendFile(filename, content, function (err) {
    if (err) throw err;
    console.log(item + ' created successfully');
});