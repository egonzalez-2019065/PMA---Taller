'use strict'

import  {Schema, model } from 'mongoose'

const appointmentSchema = Schema({
    date: {
        type: Date, 
        requerid: true
    },
    status: {
        type: String, 
        enum: ['CREATED', 'ACCEPTED', 'CANCELLED', 'COMPLETED'],
        defualt: 'CREATED',
        requerid: true
    },
    animal: {
        type: Schema.ObjectId,
        ref: 'animal',
        requerid: true
    }, 
    user: {
        type: Schema.ObjectId,
        ref: 'user',
        requerid: true
    }
},{
    versionKey: false   
})

export default model('appointment', appointmentSchema)