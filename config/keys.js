if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb+srv://Anton94:Extra112!@exnorr-tvdb-ltgzo.azure.mongodb.net/mevn_auth",
        secret: 'yoursecret'
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/mevn_auth",
        secret: 'yoursecret'
    };
}