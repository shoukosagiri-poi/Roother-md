/**
   * Create By ShoukoSagiri.
   * Contact Me on wa.me/6282179438863
   * Follow https://github.com/shoukosagiri-poi
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
    lolhuman: 'https://api.lolhuman.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'YOUR API KEY',
    'https://api.lolhuman.xyz': 'YOUR API KEY',
}

// Other
global.owner = ['6282179438863', '6283174265007', '6288286942847', '6283170320846', '6283129544189', '62895359540670', '6285157881621']
global.owner1 = ['6283174265007', '6288286942847', '6283170320846', '6283129544189', '62895359540670', '6285157881621'] // case : owner
global.bot2 = ['6285156084586'] 
global.premium = ['6282179438863']
global.packname = 'Roother'
global.author = 'WhatsApp Bot'
global.sessionName = 'roother'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 1000
}
global.thumb = fs.readFileSync('./lib/gif.gif')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
