import db from '../../lib/database.js'

let handler = async (m, { conn }) => {
    let datas = db.data.datas  
    let caption = `*Graph Shop*\n\nBanana: ${formatRupiah(datas.graphshopbanana)}\nApple: ${formatRupiah(datas.graphshopapple)}\nWatermelon: ${formatRupiah(datas.graphshopwatermelon)}`
    m.reply(caption)
}
handler.command = /^(updateharga)$/i
handler.owner = true
export default handler