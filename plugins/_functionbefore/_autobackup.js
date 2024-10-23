import fs from 'fs'
import db from '../../lib/database.js'
let handler = (m) => m
handler.all = async function (m) {
    const setting = db.data.datas
        if (new Date() * 1 - setting.backup > 1000 * 60 * 60) {
            let d = new Date()
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            })
            await db.write()
            this.reply(global.rowner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            let data = fs.readFileSync('./database.json')
            await this.sendMessage(global.rowner[0] + '@s.whatsapp.net', {
                document: data,
                mimetype: 'application/json',
                fileName: 'database.json',
            }, {
                quoted: null
            })
            //await conn.sendMessage(m.sender, { document: fs.readFileSync('./database.json'), fileName: 'database.json', mimetype: 'application/json' }, { quoted: m })
		//await this.sendMessage(m.sender, { document: await fs.readFileSync('./sessions/creds.json'), fileName: 'creds.json', mimetype: 'application/json' }, { quoted: m })
            setting.backup = new Date() * 1
        }
    return !0
}
export default handler