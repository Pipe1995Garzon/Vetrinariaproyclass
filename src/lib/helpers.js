const bycryp = require('bcrypt');
const helpers = {};
helpers.encriptar = async(pass) => {
    const salt = await bycryp.genSalt(10);
    //en este caso esta en 10 segundos, entre mas tenga mas seguro es el cifrado, pero 10 esta bien
    const hashoclavefinal = await bycryp.hash(pass, salt);
    return hashoclavefinal;
};

helpers.compararclave = async(pass, claveguardada) => {
    try {
        return await bycryp.compare(pass, claveguardada)
    } catch (e) {
        console.log(e)
    }
}
module.exports = helpers;