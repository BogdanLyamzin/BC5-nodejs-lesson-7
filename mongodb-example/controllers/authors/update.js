const {author: service} = require("../../services");

const update = async (req, res, next) => {
    const {id} = req.params;
    try {
        const result = await service.update(id, req.body);
        res.status(200).json({
            status: "success",
            code: 201,
            data: {
                result
            }
        })
    }
    catch(error) {
        next(error);
    }
}

module.exports = update;