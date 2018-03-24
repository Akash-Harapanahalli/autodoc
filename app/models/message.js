'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');

// const Imager = require('imager');
// const config = require('../../config');
// const imagerConfig = require(config.root + '/config/imager.js');

const Schema = mongoose.Schema;

const getTags = tags => tags.join(',');
const setTags = tags => tags.split(',');

/**
 * Article Schema
 */

const MessageSchema = new Schema({
  text: { type: String, default: '', trim : true },
  timestamp: { type: String, default: '0', trim: true },
  tags: { type: [], get: getTags, set: setTags } 
});

//   title: { type : String, default : '', trim : true },
//   body: { type : String, default : '', trim : true },
//   user: { type : Schema.ObjectId, ref : 'User' },
//   comments: [{
//     body: { type : String, default : '' },
//     user: { type : Schema.ObjectId, ref : 'User' },
//     createdAt: { type : Date, default : Date.now }
//   }],
//   tags: { type: [], get: getTags, set: setTags },
//   image: {
//     cdnUri: String,
//     files: []
//   },
//   createdAt  : { type : Date, default : Date.now }
// });

/**
 * Validations
 */

MessageSchema.path('text').required(true, 'Article text cannot be blank');

/**
 * Pre-remove hook
 */

MessageSchema.pre('remove', function (next) {
  // const imager = new Imager(imagerConfig, 'S3');
  // const files = this.image.files;

  // if there are files associated with the item, remove from the cloud too
  // imager.remove(files, function (err) {
  //   if (err) return next(err);
  // }, 'article');

  next();
});

/**
 * Methods
 */

MessageSchema.methods = {

  /**
   * Save article and upload image
   *
   * @param {Object} images
   * @api private
   */

  uploadAndSave: function (image) {
    const err = this.validateSync();
    if (err && err.toString()) throw new Error(err.toString());
    return this.save();

    /*
    if (images && !images.length) return this.save();
    const imager = new Imager(imagerConfig, 'S3');

    imager.upload(images, function (err, cdnUri, files) {
      if (err) return cb(err);
      if (files.length) {
        self.image = { cdnUri : cdnUri, files : files };
      }
      self.save(cb);
    }, 'article');
    */
  }
};
/**
 * Statics
 */

MessageSchema.statics = {

  /**
   * Find article by id
   *
   * @param {ObjectId} id
   * @api private
   */

  load: function (_id) {
    return this.findOne({ _id })
      .populate('user', 'name email username')
      .populate('comments.user')
      .exec();
  },

  /**
   * List articles
   *
   * @param {Object} options
   * @api private
   */

  list: function (options) {
    const criteria = options.criteria || {};
    const page = options.page || 0;
    const limit = options.limit || 30;
    return this.find(criteria)
      .populate('user', 'name username')
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(limit * page)
      .exec();
  }
};

mongoose.model('Message', MessageSchema);
