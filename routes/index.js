
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
exports.sofa = function(req, res){
  res.render('./zh/sofa');
};
exports.scarf = function(req, res){
  res.render('./zh/scarf');
};
exports.quilt = function(req, res){
  res.render('./zh/quilt');
};
exports.contact = function(req, res){
  res.render('./zh/contact');
};
