let fs = require('fs');
let config = require('config');


let arg = process.argv[2];
let name = process.argv[3];

let commands = [];
commands['dist'] = [
    'route',
    'controller',
    'model'
]
commands['public/js'] = [
    'action',
    'component',
    'container',
    'reducer'
]

if(arg.includes('make:')) {
    let item = arg.split('make:')[1].trim();
    for (var dir in commands) {
        if(commands[dir].includes(item)) {
            var filedir = `./${dir}/${item}s`;
            var filename = `${filedir}/${name}.js`;


            var template = `./vendor/templates/${item}/${item}.txt`;
            if(item == 'model') {
                var prefix = config.get('database.driver');
                var template = `./vendor/templates/${item}/${prefix}/${item}.txt`;
            }
        
            // create new file
            let content = fs.readFileSync(template, 'utf8');
            fs.appendFile(filename, content, function (err) {
                if (err) throw err;
                console.log(item + ' created successfully');
            });  

            return true;
        }      
    }
} else {
    console.log('incorrect syntax');
    return false;
}



