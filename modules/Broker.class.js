module.exports = class Broker {
  schema() {
    return {
      sellers: [
        {
          id: {type: Number},
          firstName: {type: String},
          lastName: {type: String},
          contact: {
            phone: String,
            mail: String,
            personDesc: String
          },
          profile_image_src: {type: String}
        }
      ]
    };
  }
};
