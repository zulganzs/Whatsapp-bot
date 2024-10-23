import db from '../../lib/database.js';
import { ranNumb } from '../../lib/func.js';
import fs from 'fs';

export async function all(m, {conn}) {
    let datas = db.data.datas;
    let cooldown = 1000 * 60 * 60 * 5; // if release it will be 24 Hours in millisecond

    if (new Date() * 1 - datas.lastupdategraph > cooldown) {
        let d = new Date()
        let date = d.toLocaleDateString('id', {
            minute: 'numeric',
            hour: 'numeric',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })
        //this.reply(global.rowner[0] + '@s.whatsapp.net', `Update shop: ${date}`, null)
        let rannumba = ranNumb(100, 300);
        let rannumbb = ranNumb(100, 500);
        let rannumbc = ranNumb(100, 400);
        let rannumbd = ranNumb(100, 300);
        let rannumbe = ranNumb(100, 400);
        let rannumb1 = ranNumb(1000, 10000)
        let rannumb2 = ranNumb(1000, 10000)
        let rannumb3 = ranNumb(1000, 10000)
        let rannumb4 = ranNumb(1000, 10000)
        let rannumb5 = ranNumb(1000, 10000)
        let rannumb6 = ranNumb(1000, 10000)
        let rannumb7 = ranNumb(1000, 10000)
        let rannumb8 = ranNumb(1000, 10000)
        let rannumb9 = ranNumb(1000, 10000)
        let rannumb10 = ranNumb(1000, 10000)
        let rannumb11 = ranNumb(1000, 10000)
        let rannumb12 = ranNumb(1000, 10000)
        datas.graphshopmangga = rannumba;
        datas.graphshopanggur = rannumbb;
        datas.graphshopjeruk = rannumbc;
        datas.graphshoppisang = rannumbd;
        datas.graphshopapel = rannumbe;
        datas.hargabanteng = rannumb1;
        datas.hargaharimau = rannumb2;
        datas.hargagajah = rannumb3;
        datas.hargakambing = rannumb4;
        datas.hargapanda = rannumb5;
        datas.hargabuaya = rannumb6;
        datas.hargakerbau = rannumb7;
        datas.hargasapi = rannumb8;
        datas.hargamonyet = rannumb9;
        datas.hargababihutan = rannumb10;
        datas.hargababi = rannumb11;
        datas.hargaayam = rannumb12;
        //let graph = fs.writeFilesync('./datagraph.json', JSON.stringify(datas, null, '\t'))
        let caption = `*Harga Buah*\n\n`
        caption += `%Mangga: ${formatRupiah(rannumba)}%\n`
        caption += `%Anggur: ${formatRupiah(rannumbb)}%\n`
        caption += `%Jeruk: ${formatRupiah(rannumbc)}%\n`
        caption += `%Pisang: ${formatRupiah(rannumbd)}%\n`
        caption += `%Apel: ${formatRupiah(rannumbe)}%\n\n`
        caption += `*Harga Hewan*\n\n`
        caption += `%Banteng: ${formatRupiah(rannumb1)}%\n`
        caption += `%Harimau: ${formatRupiah(rannumb2)}%\n`
        caption += `%Gajah: ${formatRupiah(rannumb3)}%\n`
        caption += `%Kambing: ${formatRupiah(rannumb4)}%\n`
        caption += `%Panda: ${formatRupiah(rannumb5)}%\n`
        caption += `%Buaya: ${formatRupiah(rannumb6)}%\n`
        caption += `%Kerbau: ${formatRupiah(rannumb7)}%\n`
        caption += `%Sapi: ${formatRupiah(rannumb8)}%\n`
        caption += `%Monyet: ${formatRupiah(rannumb9)}%\n`
        caption += `%Babi Hutan: ${formatRupiah(rannumb10)}%\n`
        caption += `%Babi: ${formatRupiah(rannumb11)}%\n`
        caption += `%Ayam: ${formatRupiah(rannumb12)}%\n\n`
        caption += `*Update: ${date}*`
        this.reply(global.rowner[0] + '@s.whatsapp.net', caption.replaceAll('%', '```'), null)
        datas.lastupdategraph = new Date() * 1;
    }
    return !0
}