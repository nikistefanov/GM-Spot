import converter from 'scripts/converter.js';
import data from 'scripts/data.js';

var Comment = Parse.Object.extend("Comment");

export default {
  all: function() {
    var query = new Parse.Query(Comment);
    return new Promise(function(resolve, reject) {
      query.find()
        .then(function(data) {
          return data.map(function(item) {
            return converter.dbCommentToCommentVM(item);
          });
        })
        .then(function(data) {
          var currentUserId = Parse.User.current() ? Parse.User.current().id : '';
          data.map(function(item) {
            item.isOwner = currentUserId === item.ownerId;
            return item;
          });
          resolve({
            comments: data
          });
        });
    });
  },
  get: function(id) {
    var commentId = id;
    var query = new Parse.Query(Comment);
    return query.get(commentId)
      .then(function(data) {
        return converter.dbCommentToCommentVM(data);
      })
      .then(function(currentComment) {
        var currentUserId = Parse.User.current() ? Parse.User.current().id : '';
        currentGame.isOwner = currentUserId === currentGame.ownerId;
        return {
          comment: currentComment
        };
      });
  },
  add: function(commentData) {
    var comment = new Comment();


    ['text', 'date', 'owner'].forEach((key) => {
      comment.set(key, commentData[key]);
    });

    return comment.save();
  },
  remove: function(id) {
    var query = new Parse.Query(Comment);

    return new Promise(function(resolve, reject) {
      query.get(id)
        .then(function(comment) {
          resolve(comment.destroy());
        });
    });
  }
};
