const mongoose              = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pricePelican');

const RespondentSchema = new mongoose.Schema({
    respondentEmail: String,
    respondentName: String,
    respondentTeam: String,
    surveyInstance: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'SurveyInstance',
    },
    responses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Response',
    }],
    status:Boolean,
    progress:{
        type: String,
        enum: ['new','saved','completed']
    }
});

const Respondent = mongoose.model('Respondent', RespondentSchema);

module.exports = Respondent;