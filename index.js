const http = require('http')

const server = http.createServer((req, res) => {

    const URL = req.url

    if (URL === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2> Index sayfasina hosgeldiniz </h2>')
    } else if (URL === '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2> Hakkimda sayfasina hosgeldiniz </h2>')
    } else if (URL === '/iletisim') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2> Iletisim sayfasina hosgeldiniz </h2>')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write('<h2> 404, Sayfa Bulunamadi </h2>')
    }
    res.end()
})

const PORT = 5000
server.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda başlatıldı.`)
})



