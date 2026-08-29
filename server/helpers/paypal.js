const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "BAAQmEIiQWwAnB5f8GAY3KgxPApKwEFA3t4Eyahqq73-vp8O_9PnnNw58kds7HYFzP7vfebB7dE_IJ_CWQ",
  client_secret: "EOJxwX7cwg-2K7UBFp5CKy9vk1yiLtV_zgymXv0ICdtvUvSlZcOExaCzt_J02Lk2wI9_zvF2db-kxeUK",
});

module.exports = paypal;