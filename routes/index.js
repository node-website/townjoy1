
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('./zh/index');
};
exports.summary = function(req, res){
  res.render('./zh/summary');
};
exports.product = function(req, res){
  res.render('./zh/product');
};
exports.contact = function(req, res){
  res.render('./zh/contact');
};