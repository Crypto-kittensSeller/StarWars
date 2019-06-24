module.exports = {
  mongoURI:
    process.env.NODE_MONGODB_URI ||
    'mongodb+srv://jedi:star_wars@cluster0-synnb.mongodb.net/development?retryWrites=true&w=majority'
};
