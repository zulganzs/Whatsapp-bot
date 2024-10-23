import db from '../../lib/database.js'
import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari 🌆"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }

    let user = db.data.users[m.sender]
    let txt = `👋 Hai, ${res}

${user.banned ? '📮Maaf, kamu dimute & Tidak bisa menggunakan bot ini lagi' : `💬 Ada yg bisa ${this.user.name} bantu?\nSilahkan ketik *.menu* untuk melihat daftar menu pada bot.` && user.permaban ? '📮Maaf, kamu diban & Tidak bisa menggunakan bot ini lagi' : `💬 Ada yg bisa ${this.user.name} bantu?\nSilahkan ketik *.menu* untuk melihat daftar menu pada bot.`}`.trim()

    if (new Date() - user.privatecht < 21600000) return // waktu ori 21600000 (6 jam)
    await this.reply(m.chat, txt, null)
    user.privatecht = new Date * 1
}