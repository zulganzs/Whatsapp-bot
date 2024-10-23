import db from '../../lib/database.js'
import { ranNumb } from '../../lib/func.js'
import fs from 'fs'

const cooldown = 864000000

let handler = async (m, { conn, usedPrefix }) => {
	try {
		let user = db.data.users[m.sender]
		let timers = (cooldown - (new Date - user.lastbansos))
		/*let aku = Math.ceil(Math.random() * 101)
		let kamu = Math.floor(Math.random() * 76) //hehe Biar Susah Menang :v
		*/
		let persentase = chance(['win', 'lose'], [40, 60])
		let kbansos = 'https://telegra.ph/file/afcf9a7f4e713591080b5.jpg'
		let mbansos = 'https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg'
		if (new Date - user.lastbansos <= cooldown) return m.reply(`Kamu sudah Melakukan Korupsi Bansos 💰\nCooldown *🕐${timers.toTimeString()}*`)
		if (user.atm < 2000000) return m.reply(`[ ! ] Minimal memiliki tabungan *💵 2000000*`)
		if (persentase == 'lose') {
			await conn.sendMsg(m.chat, { image: { url: kbansos }, caption: `Kamu Tertangkap Setelah Kamu korupsi dana bansos🕴️💰\nMembayar denda *💵 3000000*` }, { quoted: m })
			user.money -= 3000000
		} else if (persentase == 'win') {
			let p = ranNumb(1500000, 2450000)
			user.money += p
			await conn.sendMsg(m.chat, { image: { url: mbansos }, caption: `Kamu berhasil  korupsi dana bansos🕴️💰\nMendapatkan *💵 ${formatRupiah(p)}*` }, { quoted: m })
		} else {
			m.reply(`Tidak berhasil korupsi, namun berhasil *kabur keluar negeri 🏃*`)
		}
		user.lastbansos = new Date * 1
	} catch (e) {
		console.log(e)
		m.reply(e)
	}
}

handler.menufun = ['bansos']

handler.tagsfun = ['rpg']
handler.tags = ['rpg']
handler.help = ['bansos']
handler.command = /^(bansos|korupsi)$/i

handler.register = true
export default handler