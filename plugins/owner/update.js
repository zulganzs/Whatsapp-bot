import { execSync } from 'child_process'
import fs from 'fs'
let handler = async (m, { conn, text, isROwner }) => {
//if (!text) throw `Masukkan Link Repo Github Bot Ini`
    let stdout = execSync('git pull git@github.com:zulganz/bnadrv2.git')
    //if (isROwner) fs.readdirSync('plugins').map(v => reload('', v)) sda
    m.reply(stdout.toString())
}
handler.help = ['update']
handler.command = /^update$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

handler.register = true
export default handler