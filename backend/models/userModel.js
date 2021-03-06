const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Pleasea add a name'],
    },
    email: {
      type: String,
      required: [true, 'Pleasea add a email'],
      unique: true,
    },
    phone: {
      type: String,
      require: [true, 'Please add a phone'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Pleasea add a password'],
    },
    groupId: {
      type: Number,
      unique: true,
    },
    role: {
      type: String,
      default: 'admin',
    },
    resetLink: {
      data: String,
      default: '',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
