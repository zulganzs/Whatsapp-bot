import db from '../../lib/database.js'
import { isNumber, readMore, somematch } from '../../lib/func.js'

const items = {
	buy: {
		limit: {
			money: 1000
		},
		potion: {
			money: 1250,
		},
		wood: {
			money: 2000,
		},
		rock: {
			money: 2000,
		},
		string: {
			money: 2500,
		},
		iron: {
			money: 3000,
		},
		sand: {
			money: 1500,
		},
		emerald: {
			money: 200000,
		},
		diamond: {
			money: 300000,
		},
		gold: {
			money: 100000,
		},
		petfood: {
			money: 2500,
		},
		bawang: {
			money: 150,
		},
		cabai: {
			money: 250,
		},
		kemiri: {
			money: 100,
		},
		jahe: {
			money: 100,
		},
		saus: {
			money: 70,
		},
		asam: {
			money: 50,
		},
		bibitapel: {
			money: 150,
		},
		bibitanggur: {
			money: 200,
		},
		bibitmangga: {
			money: 250,
		},
		bibitpisang: {
			money: 50,
		},
		bibitjeruk: {
			money: 300,
		},
		common: {
			money: 10000,
		},
		uncommon: {
			money: 15000,
		},
		mythic: {
			money: 25000,
		},
		legendary: {
			money: 40000,
		},
		banteng: {
			money: 11000,
		},
		harimau: {
			money: 18000,
		},
		gajah: {
			money: 16000,
		},
		kambing: {
			money: 12000,
		},
		panda: {
			money: 20000,
		},
		buaya: {
			money: 5000,
		},
		kerbau: {
			money: 9000,
		},
		sapi: {
			money: 10000,
		},
		monyet: {
			money: 5000,
		},
		babihutan: {
			money: 4000,
		},
		babi: {
			money: 8000,
		},
		ayam: {
			money: 3000,
		},
		orca: {
			money: 20000,
		},
		paus: {
			money: 45000,
		},
		lumba: {
			money: 5000,
		},
		hiu: {
			money: 4500,
		},
		ikan: {
			money: 2500,
		},
		lele: {
			money: 3000,
		},
		bawal: {
			money: 3500,
		},
		nila: {
			money: 3000,
		},
		kepiting: {
			money: 7000,
		},
		lobster: {
			money: 15000,
		},
		gurita: {
			money: 3000,
		},
		cumi: {
			money: 5000,
		},
		udang: {
			money: 7500,
		},
		horse: {
			money: 500000,
		},
		cat: {
			money: 500000,
		},
		fox: {
			money: 500000,
		},
		dog: {
			money: 500000,
		},
		wolf: {
			money: 1000000,
		},
		centaur: {
			gold: 15,
		},
		phoenix: {
			emerald: 10,
		},
		dragon: {
			diamond: 10,
		},
		rumahsakit: {
			money: 2000000,
		},
		restoran: {
			money: 2500000,
		},
		pabrik: {
			money: 1000000,
		},
		tambang: {
			money: 2000000,
		},
		pelabuhan: {
			money: 2500000,
		}
	},
	sell: {
		potion: {
			money: 125,
		},
		petfood: {
			money: 125,
		},
		trash: {
			money: 20,
		},
		banteng: {
			money: 9900,
		},
		harimau: {
			money: 16200,
		},
		gajah: {
			money: 14400,
		},
		kambing: {
			money: 10800,
		},
		panda: {
			money: 18000,
		},
		buaya: {
			money: 4500,
		},
		kerbau: {
			money: 8100,
		},
		sapi: {
			money: 9000,
		},
		monyet: {
			money: 4500,
		},
		babihutan: {
			money: 3600,
		},
		babi: {
			money: 7200,
		},
		ayam: {
			money: 2700,
		},
		orca: {
			money: 18000,
		},
		paus: {
			money: 40500,
		},
		lumba: {
			money: 4500,
		},
		hiu: {
			money: 4050,
		},
		ikan: {
			money: 2250,
		},
		lele: {
			money: 2700,
		},
		bawal: {
			money: 3150,
		},
		nila: {
			money: 2700,
		},
		kepiting: {
			money: 6300,
		},
		lobster: {
			money: 13500,
		},
		gurita: {
			money: 2700,
		},
		cumi: {
			money: 4500,
		},
		udang: {
			money: 6750,
		},
		mangga: {
			money: null,
		},
		anggur: {
			money: null,
		},
		jeruk: {
			money: null,
		},
		pisang: {
			money: null,
		},
		apel: {
			money: null,
		},
		steak: {
			money: 35000,
		},
		sate: {
			money: 45000,
		},
		rendang: {
			money: 31000,
		},
		kornet: {
			money: 27000,
		},
		nugget: {
			money: 32000,
		},
		bluefin: {
			money: 65000,
		},
		seafood: {
			money: 65000,
		},
		sushi: {
			money: 54500,
		},
		moluska: {
			money: 65000,
		},
		squidprawm: {
			money: 60500,
		},
		horse: {
			money: 450000,
		},
		cat: {
			money: 450000,
		},
		fox: {
			money: 450000,
		},
		dog: {
			money: 450000,
		},
		wolf: {
			money: 900000,
		},
		centaur: {
			money: 1350000,
		},
		phoenix: {
			money: 1800000,
		},
		dragon: {
			money: 2700000,
		},
		rumahsakit: {
			money: 1800000,
		},
		restoran: {
			money: 2250000,
		},
		pabrik: {
			money: 900000,
		},
		tambang: {
			money: 1800000,
		},
		pelabuhan: {
			money: 2250000,
		}
	}
}

let handler = async (m, { command, usedPrefix, args, isPrems }) => {
	let user = db.data.users[m.sender]
	const listItems = Object.fromEntries(Object.entries(items[`${somematch(['buy','shop','beli'], command) ? 'buy' : 'sell'}`]).filter(([v]) => v && v in user))
	let info = `Format : *${usedPrefix + command} [item] [jumlah]*\n`
	info += `Contoh : *${usedPrefix}${command} limit 10*\n\n`
	info += `*━━━[ DAILY ITEMS ]━━━*\n%🌌 limit%\n%🥤 potion%\n%🍖 petfood%\n\n`
	info += `*━━━[ CRAFT ITEMS ]━━━*\n`
	info += `%| 🪵 wood:  ${formatRupiah(items.buy.wood.money)}%\n`
	info += `%| 🪨 rock:  ${formatRupiah(items.buy.rock.money)}%\n`
	info += `%| 🧵 string:${formatRupiah(items.buy.string.money)}%\n`
	info += `%| ⛓️ iron:  ${formatRupiah(items.buy.iron.money)}%\n`
	info += `%| 🏝️ sand:  ${formatRupiah(items.buy.sand.money)}%\n`
	info += `%| 💚 emerald:${formatRupiah(items.buy.emerald.money)}%\n`
	info += `%| 💎 diamond:${formatRupiah(items.buy.diamond.money)}%\n`
	info += `%| 💛 gold:  ${formatRupiah(items.buy.gold.money)}%\n\n`
	info += `*━━━[ COOKING INGREDIENTS ]━━━*${readMore}\n`
	info += `%| bawang:  ${formatRupiah(items.buy.bawang.money)}%\n`
	info += `%| cabai:   ${formatRupiah(items.buy.cabai.money)}%\n`
	info += `%| kemiri:  ${formatRupiah(items.buy.kemiri.money)}%\n`
	info += `%| jahe:    ${formatRupiah(items.buy.jahe.money)}%\n`
	info += `%| saus:    ${formatRupiah(items.buy.saus.money)}%\n`
	info += `%| asam:    ${formatRupiah(items.buy.asam.money)}%\n\n`
	info += `*━━━[ GARDENING MATERIALS ]━━━*\n`
	info += `%| 🌾 bibitmangga:  ${formatRupiah(items.buy.bibitmangga.money)}%\n`
	info += `%| 🌾 bibitapel: ${formatRupiah(items.buy.bibitapel.money)}%\n`
	info += `%| 🌾 bibitanggur: ${formatRupiah(items.buy.bibitanggur.money)}%\n`
	info += `%| 🌾 bibitpisang: ${formatRupiah(items.buy.bibitpisang.money)}%\n`
	info += `%| 🌾 bibitjeruk: ${formatRupiah(items.buy.bibitjeruk.money)}%\n\n`
	info += `*━━━[ GACHA BOX ]━━━*\n`
	info += `%| 📦 common%:  ${formatRupiah(items.buy.common.money)}\n`
	info += `%| 📦 uncommon%:  ${formatRupiah(items.buy.uncommon.money)}\n`
	info += `%| 📦 mythic%:  ${formatRupiah(items.buy.mythic.money)}\n`
	info += `%| 📦 legendary%:  ${formatRupiah(items.buy.legendary.money)}\n\n`
	info += `*━━━[ LAND ANIMALS ]━━━*\n`
	info += `%| 🐂 banteng:  ${formatRupiah(items.buy.banteng.money)}%\n`
	info += `%| 🐅 harimau:  ${formatRupiah(items.buy.harimau.money)}%\n`
	info += `%| 🐘 gajah:    ${formatRupiah(items.buy.gajah.money)}%\n`
	info += `%| 🐐 kambing:  ${formatRupiah(items.buy.kambing.money)}%\n`
	info += `%| 🐼 panda:    ${formatRupiah(items.buy.panda.money)}%\n`
	info += `%| 🐊 buaya:    ${formatRupiah(items.buy.buaya.money)}%\n`
	info += `%| 🐃 kerbau:   ${formatRupiah(items.buy.kerbau.money)}%\n`
	info += `%| 🐄 sapi:     ${formatRupiah(items.buy.sapi.money)}%\n`
	info += `%| 🐒 monyet:   ${formatRupiah(items.buy.monyet.money)}%\n`
	info += `%| 🐗 babihutan:${formatRupiah(items.buy.babihutan.money)}%\n`
	info += `%| 🐖 babi:     ${formatRupiah(items.buy.babi.money)}%\n`
	info += `%| 🐔 ayam:     ${formatRupiah(items.buy.ayam.money)}%\n\n`
	info += `*━━━[ SEA ANIMALS ]━━━*\n`
	info += `%| 🐋 orca:     ${formatRupiah(items.buy.orca.money)}%\n`
	info += `%| 🐳 paus:     ${formatRupiah(items.buy.paus.money)}%\n`
	info += `%| 🐬 lumba:    ${formatRupiah(items.buy.lumba.money)}%\n`
	info += `%| 🦈 hiu:      ${formatRupiah(items.buy.hiu.money)}%\n`
	info += `%| 🐟 ikan:     ${formatRupiah(items.buy.ikan.money)}%\n`
	info += `%| 🐟 lele:     ${formatRupiah(items.buy.lele.money)}%\n`
	info += `%| 🐡 bawal:    ${formatRupiah(items.buy.bawal.money)}%\n`
	info += `%| 🐠 nila:     ${formatRupiah(items.buy.nila.money)}%\n`
	info += `%| 🦀 kepiting: ${formatRupiah(items.buy.kepiting.money)}%\n`
	info += `%| 🦞 lobster:  ${formatRupiah(items.buy.lobster.money)}%\n`
	info += `%| 🐙 gurita:   ${formatRupiah(items.buy.gurita.money)}%\n`
	info += `%| 🦑 cumi:     ${formatRupiah(items.buy.cumi.money)}%\n`
	info += `%| 🦐 udang:    ${formatRupiah(items.buy.udang.money)}%\n\n`
	info += `*━━━[ PET SHOP ]━━━*\n`
	info += `%| 🐎 horse:    ${formatRupiah(items.buy.horse.money)}%\n`
	info += `%| 🐈 cat:      ${formatRupiah(items.buy.cat.money)}%\n`
	info += `%| 🦊 fox:      ${formatRupiah(items.buy.fox.money)}%\n`
	info += `%| 🐕 dog:      ${formatRupiah(items.buy.dog.money)}%\n`
	info += `%| 🐺 wolf:     ${formatRupiah(items.buy.wolf.money)}%\n`
	info += `%| 🐎 centaur:  ${items.buy.centaur.gold}%\n`
	info += `%| 🦜 phoenix:  ${items.buy.phoenix.emerald}%\n`
	info += `%| 🐉 dragon:   ${items.buy.dragon.diamond}%\n\n`
	info += `*━━━[ BUILDINGS ]━━━*\n`
	info += `%| 🏥 rumahsakit:${formatRupiah(items.buy.rumahsakit.money)}%`
	info += `%| 🏭 restoran: ${formatRupiah(items.buy.restoran.money)}%\n`
	info += `%| 🏯 pabrik:   ${formatRupiah(items.buy.pabrik.money)}%\n`
	info += `%| ⚒️ tambang:  ${formatRupiah(items.buy.tambang.money)}%\n`
	info += `%| 🛳️ pelabuhan:${formatRupiah(items.buy.pelabuhan.money)}%\n\n`

	let infos = `Format : *${usedPrefix + command} [item] [jumlah]*\n`
	infos += `Contoh : *${usedPrefix}${command} potion 10*\n\n`
	infos += `Harga barang akan di update setiap beberapa menit.\n\n`
	/*infos += `*━━━[ DAILY ITEMS ]━━━*\n%🥤 potion%\n%🍖 petfood%\n%🌌 trash%\n\n`
	infos += `*━━━[ SELL ANIMALS ]━━━*\n`
	infos += `%| 🐂 banteng | 🐅 harimau%\n`
	infos += `%| 🐘 gajah   | 🐐 kambing%\n`
	infos += `%| 🐼 panda   | 🐊 buaya%\n`
	infos += `%| 🐃 kerbau  | 🐄 sapi%\n`
	infos += `%| 🐒 monyet  | 🐗 babihutan%\n`
	infos += `%| 🐖 babi	| 🐔 ayam%\n\n`
	infos += `*━━━[ SEA ANIMALS ]━━━*${readMore}\n`
	infos += `%| 🐋 orca	| 🐳 paus%\n`
	infos += `%| 🐬 lumba   | 🦈 hiu%\n`
	infos += `%| 🐟 ikan	| 🐟 lele%\n`
	infos += `%| 🐡 bawal   | 🐠 nila%\n`
	infos += `%| 🦀 kepiting| 🦞 lobster%\n`
	infos += `%| 🐙 gurita  | 🦑 cumi%\n`
	infos += `%| 🦐 udang%\n\n`
	infos += `*━━━[ SELL FRUITS ]━━━*\n`
	infos += `%| 🥭 mangga%\n`
	infos += `%| 🍇 anggur%\n`
	infos += `%| 🍊 jeruk%\n`
	infos += `%| 🍌 pisang%\n`
	infos += `%| 🍎 apel%\n\n`
	infos += `*━━━[ PET SELL ]━━━*\n`
	infos += `%| 🐎 horse   | 🐈 cat%\n`
	infos += `%| 🦊 fox	 | 🐕 dog%\n`
	infos += `%| 🐺 wolf	| 🐎 centaur%\n`
	infos += `%| 🦜 phoenix | 🐉 dragon%\n\n`
	infos += `*━━━[ BUILDINGS ]━━━*\n`
	infos += `%| 🏥 rumahsakit%\n`
	infos += `%| 🏭 restoran%\n`
	infos += `%| 🏯 pabrik%\n`
	infos += `%| ⚒️ tambang%\n`
	infos += `%| 🛳️ pelabuhan%`*/
	infos += `*━━━[ DAILY ITEMS ]━━━*\n%🥤 potion%\n%🍖 petfood%\n%🌌 trash%\n\n`
	infos += `*━━━[ SELL FRUITS ]━━━*\n`
	infos += `%| 🥭 mangga:   ${formatRupiah(db.data.datas.graphshopmangga)}%\n`
	infos += `%| 🍇 anggur:   ${formatRupiah(db.data.datas.graphshopanggur)}%\n`
	infos += `%| 🍊 jeruk:    ${formatRupiah(db.data.datas.graphshopjeruk)}%\n`
	infos += `%| 🍌 pisang:   ${formatRupiah(db.data.datas.graphshoppisang)}%\n`
	infos += `%| 🍎 apel:     ${formatRupiah(db.data.datas.graphshopapel)}%\n\n`
	infos += `*━━━[ SELL ANIMALS ]━━━*\n`
	infos += `%| 🐂 banteng:  ${formatRupiah(db.data.datas.hargabanteng)}%\n%| 🐅 harimau:  ${formatRupiah(db.data.datas.hargaharimau)}%\n`
	infos += `%| 🐘 gajah:    ${formatRupiah(db.data.datas.hargagajah)}%\n%| 🐐 kambing:  ${formatRupiah(db.data.datas.hargakambing)}%\n`
	infos += `%| 🐼 panda:    ${formatRupiah(db.data.datas.hargapanda)}%\n%| 🐊 buaya:    ${formatRupiah(db.data.datas.hargabuaya)}%\n`
	infos += `%| 🐃 kerbau:   ${formatRupiah(db.data.datas.hargakerbau)}%\n%| 🐄 sapi:     ${formatRupiah(db.data.datas.hargasapi)}%\n`
	infos += `%| 🐒 monyet:   ${formatRupiah(db.data.datas.hargamonyet)}%\n%| 🐗 babihutan:${formatRupiah(db.data.datas.hargababihutan)}%\n`
	infos += `%| 🐖 babi:     ${formatRupiah(db.data.datas.hargababi)}%\n%| 🐔 ayam:     ${formatRupiah(db.data.datas.hargaayam)}%\n\n`
	infos += `*━━━[ SEA ANIMALS ]━━━*\n`
	infos += `%| 🐋 orca:     ${formatRupiah(items.sell.orca.money)}%\n%| 🐳 paus:     ${formatRupiah(items.sell.paus.money)}%\n`
	infos += `%| 🐬 lumba:    ${formatRupiah(items.sell.lumba.money)}%\n%| 🦈 hiu:      ${formatRupiah(items.sell.hiu.money)}%\n`
	infos += `%| 🐟 ikan:     ${formatRupiah(items.sell.ikan.money)}%\n%| 🐟 lele:     ${formatRupiah(items.sell.lele.money)}%\n`
	infos += `%| 🐡 bawal:    ${formatRupiah(items.sell.bawal.money)}%\n%| 🐠 nila:     ${formatRupiah(items.sell.nila.money)}%\n`
	infos += `%| 🦀 kepiting: ${formatRupiah(items.sell.kepiting.money)}%\n%| 🦞 lobster:  ${formatRupiah(items.sell.lobster.money)}%\n`
	infos += `%| 🐙 gurita:   ${formatRupiah(items.sell.gurita.money)}%\n%| 🦑 cumi:     ${formatRupiah(items.sell.cumi.money)}%\n`
	infos += `%| 🦐 udang:    ${formatRupiah(items.sell.udang.money)}%\n\n`
	infos += `*━━━[ PET SELL ]━━━*${readMore}\n`
	infos += `%| 🐎 horse:    ${formatRupiah(items.sell.horse.money)}%\n`
	infos += `%| 🐈 cat:      ${formatRupiah(items.sell.cat.money)}%\n`
	infos += `%| 🦊 fox:      ${formatRupiah(items.sell.fox.money)}%\n`
	infos += `%| 🐕 dog:      ${formatRupiah(items.sell.dog.money)}%\n`
	infos += `%| 🐎 centaur:  ${formatRupiah(items.sell.centaur.money)}%\n`
	infos += `%| 🦜 phoenix:  ${formatRupiah(items.sell.phoenix.money)}%\n`
	infos += `%| 🐉 dragon:   ${formatRupiah(items.sell.dragon.money)}%\n\n`
	infos += `*━━━[ BUILDINGS ]━━━*\n`
	infos += `%| 🏥 rumahsakit:${formatRupiah(items.sell.rumahsakit.money)}%\n`
	infos += `%| 🏭 restoran: ${formatRupiah(items.sell.restoran.money)}%\n`
	infos += `%| 🏯 pabrik:   ${formatRupiah(items.sell.pabrik.money)}%\n`
	infos += `%| ⚒️ tambang:  ${formatRupiah(items.sell.tambang.money)}%\n`
	infos += `%| 🛳️ pelabuhan:${formatRupiah(items.sell.pelabuhan.money)}%`

	
	const item = (args[0] || '').toLowerCase()
	const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
	if (!listItems[item] && somematch(['buy','shop','beli'], command)) return m.reply(info.replaceAll('%', '```'))
	if (!listItems[item] && somematch(['sell','jual'], command)) return m.reply(infos.replaceAll('%', '```'))
	let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
	if (somematch(['buy','shop','beli'], command)) {
		if (isPrems && item == 'limit') throw `[!] Premium User tidak perlu limit.`
		if (somematch(['horse', 'cat', 'fox', 'dog', 'wolf', 'centaur', 'phoenix', 'dragon', 'rumahsakit', 'restoran', 'pabrik', 'tambang', 'pelabuhan'], args[0].toLowerCase())) {
			if (user[`${item}`] == 0) {
				if (total > 1) return m.reply(`Kamu belum memiliki *${global.rpg.emoticon(item)}${item}*, hanya dapat beli 1`)
				if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`Kamu tidak memiliki cukup ${paymentMethod} untuk membeli *${total} ${global.rpg.emoticon(item)}${item}*.\nDibutuhkan *${formatRupiah((listItems[item][paymentMethod] * total) - user[paymentMethod])} ${global.rpg.emoticon(paymentMethod)} ${paymentMethod}* untuk dapat membeli.`)
				user[paymentMethod] -= listItems[item][paymentMethod] * total
				user[item] += total
				user[`${item}lvl`] += 1
				return m.reply(`Membeli *${total} ${global.rpg.emoticon(item)}${item}* seharga *${formatRupiah(listItems[item][paymentMethod]) * total} ${global.rpg.emoticon(paymentMethod)} ${paymentMethod}*`)
			} else {
				if (user[`${item}`] + total > 2 * user[`${item}lvl`]) return m.reply(`Perlu upgrade ${global.rpg.emoticon(item)} ${item} ke level ${2 * user[`${item}lvl`]} terlebih dahulu.`)
				let harga = listItems[item][paymentMethod] * total * user[`${item}`] * user[`${item}lvl`]
				if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`Kamu tidak memiliki cukup ${paymentMethod} untuk membeli *${total} ${global.rpg.emoticon(item)}${item} level ${user[`${item}lvl`]}*.\nDibutuhkan *${formatRupiah((listItems[item][paymentMethod] * total) - user[paymentMethod])} ${global.rpg.emoticon(paymentMethod)} ${paymentMethod}* untuk dapat membeli.`)
				user[paymentMethod] -= harga
				user[item] += total
				return m.reply(`Membeli *${total} ${global.rpg.emoticon(item)}${item}* seharga *${formatRupiah(harga)} ${global.rpg.emoticon(paymentMethod)} ${paymentMethod}*`)
			}
		} else {
			if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`Kamu tidak memiliki cukup ${paymentMethod} untuk membeli *${total}* ${global.rpg.emoticon(item)}${item}.\nDibutuhkan ${global.rpg.emoticon(paymentMethod)} *${formatRupiah((listItems[item][paymentMethod] * total) - user[paymentMethod])} ${paymentMethod}* untuk dapat membeli.`)
			user[paymentMethod] -= listItems[item][paymentMethod] * total
			user[item] += total
			return m.reply(`Membeli *${total} ${global.rpg.emoticon(item)}${item}* seharga *${formatRupiah(listItems[item][paymentMethod] * total)} ${global.rpg.emoticon(paymentMethod)} ${paymentMethod}*`)
		}
	} else {
		if (somematch(['horse', 'cat', 'fox', 'dog', 'wolf', 'centaur', 'phoenix', 'dragon', 'rumahsakit', 'restoran', 'pabrik', 'tambang', 'pelabuhan'], args[0].toLowerCase())) {
			let harga = listItems[item][paymentMethod] * total * user[`${item}lvl`]
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]}${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			user[item] -= total
			user.money += harga
			let meh = user[`${item}lvl`]
			if (user[item] == 0) user[`${item}lvl`] = 0
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item} Level ${meh}* dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(harga)} ${paymentMethod}*`)
		} else if (somematch(['mangga'], args[0].toLowerCase())) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]}${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.graphshopmangga * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item}* dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.graphshopmangga * total)} ${paymentMethod}*`)
		} else if (somematch(['anggur'], args[0].toLowerCase())) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]}${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.graphshopanggur * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item}* dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.graphshopanggur * total)} ${paymentMethod}*`)
		} else if (somematch(['jeruk'], args[0].toLowerCase())) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]}${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.graphshopjeruk * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item}* dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.graphshopjeruk * total)} ${paymentMethod}*`)
		} else if (somematch(['pisang'], args[0].toLowerCase())) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]}${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.graphshoppisang * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item}* dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.graphshoppisang * total)} ${paymentMethod}*`)
		} else if (somematch(['apel'], args[0].toLowerCase())) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]}${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.graphshopapel * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item}* dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.graphshopapel * total)} ${paymentMethod}*`)
		} else if (somematch(['banteng'])) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]}${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.hargabanteng * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item}* dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.hargabanteng * total)} ${paymentMethod}*`)
		} else if (somematch(['harimau'])) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item} untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]} ${global.rpg.emoticon(item)}${item} untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.hargaharimau * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item} dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.hargaharimau * total)} ${paymentMethod}*`)
		} else if (somematch(['gajah'])) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item} untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]} ${global.rpg.emoticon(item)}${item} untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.hargagajah * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item} dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.hargagajah * total)} ${paymentMethod}*`)
		} else if (somematch(['kambing'])) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item} untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]} ${global.rpg.emoticon(item)}${item} untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.hargakambing * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item} dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.hargakambing * total)} ${paymentMethod}*`)
		} else if (somematch(['panda'])) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item} untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]} ${global.rpg.emoticon(item)}${item} untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.hargapanda * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item} dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.hargapanda * total)} ${paymentMethod}*`)
		} else if (somematch(['buaya'])) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item} untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]} ${global.rpg.emoticon(item)}${item} untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.hargabuaya * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item} dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.hargabuaya * total)} ${paymentMethod}*`)
		} else if (somematch(['kerbau'])) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item} untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]} ${global.rpg.emoticon(item)}${item} untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.hargakerbau * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item} dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.hargakerbau * total)} ${paymentMethod}*`)
		} else if (somematch(['sapi'])) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item} untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]} ${global.rpg.emoticon(item)}${item} untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.hargasapi * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item} dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.hargasapi * total)} ${paymentMethod}*`)
		} else if (somematch(['monyet'])) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item}untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]} ${global.rpg.emoticon(item)}${item}untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.hargamonyet * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item}untuk dijual dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.hargamonyet * total)} ${paymentMethod}*`)
		} else if (somematch(['babihutan'])) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item}untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]} ${global.rpg.emoticon(item)}${item}untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.hargababihutan * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item}untuk dijual dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.hargababihutan * total)} ${paymentMethod}*`)
		} else if (somematch(['babi'])) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item}untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]} ${global.rpg.emoticon(item)}${item}untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.hargababi * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item}untuk dijual dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.hargababi * total)} ${paymentMethod}*`)
		} else if (somematch(['ayam'])) {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item}untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]} ${global.rpg.emoticon(item)} ${item}untuk dijual.`)
			user[item] -= total
			user.money += db.data.datas.hargaayam * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)} ${item}untuk dijual dengan harga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(db.data.datas.hargaayam * total)} ${paymentMethod}*`)
		} else {
			if (user[item] == 0) return m.reply(`Kamu tidak memiliki *${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			if (user[item] < total) return m.reply(`Kamu hanya memiliki *${user[item]}${global.rpg.emoticon(item)}${item}* untuk dijual.`)
			user[item] -= total
			user.money += listItems[item].money * total
			return m.reply(`Menjual *${total} ${global.rpg.emoticon(item)}${item}* dengan sharga *${global.rpg.emoticon(paymentMethod)} ${formatRupiah(listItems[item].money * total)} ${paymentMethod}*`)
		}
	}
}

handler.menufun = ['buy', 'sell'].map(v => v + ' [item] [count]')


handler.tagsfun = ['rpg']
handler.tags = ['rpg']
handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.command = /^(buy|beli|shop|sell|jual)$/i

handler.disabled = false

handler.register = true
export default handler