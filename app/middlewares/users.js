module.exports = {

  verifyOwner: function (req, res, next) {
    if (req.params.id === req.user.user) {
      next()
    } else {
      res.status(403)
      res.json({
        code: 4300
      })
    }
  }
}