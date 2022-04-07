const qrcode = require("qrcode");

const qrcodeFunctions = {
    async generateQRCode (url) {
        const qrCodeString = await qrcode.toBuffer(url);
        return qrCodeString;

    }
}

module.exports = qrcodeFunctions;