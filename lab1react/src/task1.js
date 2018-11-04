export default () => {
    self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
        var fileDownload = require('js-file-download');
        fileDownload('https://picsum.photos/200/300', 'filename.txt');
    })
}


