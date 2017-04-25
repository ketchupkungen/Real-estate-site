module.exports = class Broker {
  schema() {
    return {
      firstName: {type: String},
      lastName: {type: String},
      brokerId: Number,
      contact: {
        phone: String,
        mail: String,
        personDesc: String
      },
      profile_image_src: {type: String}
    };
  }
};
