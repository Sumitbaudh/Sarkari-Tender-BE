import mongoose from "mongoose";

const CorrigendumsSchema = new mongoose.Schema({
    title: { type: String },
    referenceNo: { type: String },
    closingDate: { type: String },
    bidOpeningDate : { type : String},
    link : { type : String}
}, { timestamps: true });

export const Corrigendum = mongoose.model("corrigendums" ,CorrigendumsSchema );
