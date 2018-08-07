/**
 * MeController
 *
 * @description :: Server-side logic for managing Us
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    async getName (req, res) {
        if (!req.query || !req.query.name) {
            res.badRequest("request param error")
            return
        }
        res.ok(MeService.getName(req.query))
    }
};

