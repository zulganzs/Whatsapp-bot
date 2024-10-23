
const timeout = 1800000
import db from '../../lib/database.js'
import { ranNumb } from '../../lib/func.js'
let handler = async (m, { conn, usedPrefix, text }) => {
	    let time = db.data.users[m.sender].lastmulung + 1800000
      let user = db.data.users[m.sender]
      const common = ranNumb(1, 2)
      const uncommon = ranNumb(1, 2)
      const legendary = ranNumb(1, 2)
      const mythic = ranNumb(1, 2)
      const gold = 1
      const emerald = 1
      const diamond = 1
    
  if (new Date - db.data.users[m.sender].lastmulung < 1800000) throw `Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(time - new Date())} lagi`
	let botolnye = `${Math.floor(Math.random() * 1000)}`.trim()
    db.data.users[m.sender].trash += botolnye * 1
	db.data.users[m.sender].lastmulung = new Date * 1
  let txt = `Selamat kamu mendapatkan : \nSampah 🗑️+${botolnye}`
  let RNGmomen = chance(['none', 'common', 'gold', 'emerald', 'diamond', 'uncommon', 'legendary', 'mythic'], [50, 10, 5, 2, 1, 10, 5, 2])
	if (RNGmomen == 'common') {
		user.common += common
		txt += `\n\nSelamat anda mendapatkan *📦 common*`
	} else if (RNGmomen == 'gold') {
		user.gold += gold
		txt += `\n\nSelamat anda mendapatkan *👑 gold*`
	} else if (RNGmomen == 'emerald') {
		user.emerald += emerald
		txt += `\n\nSelamat anda mendapatkan *💚 emerald*`
	} else if (RNGmomen == 'diamond') {
		user.diamond += diamond
		txt += `\n\nSelamat anda mendapatkan *💎 diamond*`
	} else if (RNGmomen == 'uncommon') {
		user.uncommon += uncommon
		txt += `\n\nSelamat anda mendapatkan *📦 uncommon*`
	} else if (RNGmomen == 'legendary') {
		user.legendary += legendary
		txt += `\n\nSelamat anda mendapatkan *📦 legendary*`
	} else if (RNGmomen == 'mythic') {
		user.mythic += mythic
		txt += `\n\nSelamat anda mendapatkan *📦 mythic*`
	} else if (RNGmomen == 'none') {
		txt += `\n\nTidak ada bonus`
	}
  m.reply(txt)
  setTimeout(() => {
					conn.reply(m.chat, `Yuk waktunya mulung lagi 😅`, m)
					}, timeout)
}
handler.help = ['mulung']
handler.tags = ['rpg']
handler.command = /^(mulung)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
handler.exp = 0
handler.money = 0

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}