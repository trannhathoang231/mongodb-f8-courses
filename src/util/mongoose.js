module.exports = {
    multipleMongooseToObject: function (mongoooses) {
        return mongoooses.map(mongooose => mongooose.toObject());
    },
    mongooseToObject:function (mongoooses) {
        return mongoooses ? mongooose.toObject() : mongooose;
    }
};