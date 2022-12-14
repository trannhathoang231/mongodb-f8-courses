const Course = require("../models/Course");

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) =>
                res.render("courses/show", {
                    course,
                })
            )
            .catch(next);
    }

    create(req, res, next) {
        res.render("courses/create");
    }

    store(req, res, next) {
        const formData = req.body;
        formData.image =
            `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        console.log(course);
        course
            .save()
            .then(() => res.redirect("/"))
            .catch(next);
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .lean()
            .then((course) => res.render("courses/edit", { course }))
            .catch(next);
    }

    // update(req, res, next) {
    //     Course.updateOne({ _id: req.params.id }, req.body)
    //         .lean()
    //         .then(() => res.redirect("/me/stored/courses"))
    //         .catch(next);
    // }
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/me/stored/courses"))
            .catch(next);
    }
    // [DELETE] /courses/:id
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }
}

module.exports = new CourseController();
