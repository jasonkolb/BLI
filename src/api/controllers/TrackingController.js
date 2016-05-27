module.exports = {
  Track: function (req, res) {
    console.log("Tracking request and redirecting");
    req.session.device = req.param('device');
    req.session.keyword = req.param('keyword');
    req.session.matchType = req.param('matchtype');
    return res.redirect(req.param('url'));
  }
};
