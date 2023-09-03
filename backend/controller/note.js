const modelNote = require('../model/modelNote.js')
const sequelize = require('../config/koneksi.js')
const { v4 } = require('uuid')
const { Op, QueryTypes } = require('sequelize')
// const { param } = require('../router/router.js')

const createNote = async (req, res) => {
    try {
        const { data, title } = req.body
        const id_note = v4()
        const id_user = req.params.id
        console.log(id_user);
        await modelNote.create({ id: id_note, id_user: id_user, title: title, data: data })
        res.json({ "message": "succes create note" })
    } catch (err) {
        res.status(500)
        res.json({ "error": err.toString() })
    }

}
const getNote = async (req, res) => {
    try {
        console.log(req.query.note_id);
        const result = await sequelize.query("SELECT note.id,note.title,note.data FROM note INNER JOIN public.user ON note.id_user = public.user.id WHERE note.id = $1 AND public.user.id = $2", { bind: [req.query.id_note, req.params.id], type: QueryTypes.SELECT });
        // const users = await 
        console.log(result);
        res.json({ "message": "succes get note", "data": result[0] })
    } catch (err) {
        res.status(500)
        res.json({ "error": err.toString() })
    }
}
const getNotes = async (req, res) => {
    try {
        // console.log(req.query.note_id);
        const result = await sequelize.query("SELECT note.id,note.title,note.data FROM note INNER JOIN public.user ON note.id_user = public.user.id WHERE note.id_user = $1", { bind: [req.params.id], type: QueryTypes.SELECT });
        // const users = await 
        console.log(result);
        res.json({ "message": "succes get notes", "data": result })
    } catch (err) {
        res.status(500)
        res.json({ "error": err.toString() })
    }
}
const updateNote = async (req, res) => {
    try {
        const { title, data } = req.body
        const id_note = req.query.id_note
        // console.log(req.query.note_id);
        // const result = await sequelize.query("SELECT * FROM note INNER JOIN public.user ON note.id_user = public.user.id WHERE note.id_user = $1", { bind: [req.params.id], type: QueryTypes.SELECT });
        // const users = await 
        const result = await modelNote.update({ title: title, data: data }, { where: { id: id_note } })
        console.log(result);
        res.json({ "message": "succes update note" })
    } catch (err) {
        res.status(500)
        res.json({ "error": err.toString() })
    }
}
const deleteNote = async (req, res) => {
    try {
        // const { title, data } = req.body
        const id_note = req.query.note_id
        // console.log(req.query.note_id);
        // const result = await sequelize.query("SELECT * FROM note INNER JOIN public.user ON note.id_user = public.user.id WHERE note.id_user = $1", { bind: [req.params.id], type: QueryTypes.SELECT });
        // const users = await 
        await modelNote.destroy({where:{id:id_note}})
        // console.log(result);
        res.json({ "message": "succes delete note" })
    } catch (err) {
        res.status(500)
        res.json({ "error": err.toString() })
    }
}


module.exports = { getNote, getNotes, createNote, updateNote, deleteNote }