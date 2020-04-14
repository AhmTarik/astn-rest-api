const { logger } = require('../helpers/index');
const moment = require('moment')
const { courseEntity } = require('../models/db/index');


exports.validate = async (req, res) => {
    try {        
        let course = await courseEntity.findOne({
            token: req.query.token
        });
        if (!course) {
            return res.Ok(false);
        }
        return res.Ok(true);
        course = course._doc || course;
        if (course.uid == req.query.uid) {
            return res.Ok(true);
        } else {
            let current = moment();
            let tmpDate = moment(course.date).add(90, 'seconds');
            if (current.isAfter(tmpDate)) {
                return res.Ok(true);
            }
            return res.Ok(false);
        }

    } catch (error) {
        console.error(error);
        return res.InternalServerError();
    }

}



exports.pool = async (req, res) => {
    try {
        // let s = await courseEntity.find();
        let course = await courseEntity.findOne({
            token: req.query.token
        });
        if (!course) {
            return res.Ok(false);
        }
         course = course._doc || course;
        course.date = new Date();
        course.uid = req.query.uid;
        await course.save();
        return res.Ok(course);
    } catch (error) {
        console.error(error);
        return res.InternalServerError();
    }
}
