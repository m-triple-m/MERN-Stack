import { Schema, model } from 'mongoose';

const mySchema = new Schema({
    title: String,
    completed: { type: Boolean, default: false },
}, { timestamps: true })

export default model('todolist', mySchema);