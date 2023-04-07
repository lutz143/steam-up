// require schema and model from mongoose, bcrypt for encrypting password
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// create new schema for user
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    }, 
  },
  // utilize the toJSON virtual
  {
    toJSON: {
      virtuals: true,
    }
  }
)

// hash the password provided by the user using bcrypt
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;