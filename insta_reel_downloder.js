

// axios.get('https://www.gadgets360.com/news')
//   .then((res) => {
//     let main_data = res.html();
//     return main_data
//   })
//   .then((data) => {
//     console.log(data);
    
//   })


// var url1 = 'https://randomuser.me/api/'

// async function name() {
//     let nake = "fdgndgfod";
//     console.log(nake);
//     let data = await axios.get(url1);
//     setTimeout(() => {       
//         console.log(data);  
//     }, 5000);

    
    
// }
// name()



 

//   async function data() {
//     let data = await axios.get(url1);
//     console.log(data.data);
//   }

//   data()





let url = 'https://v3.savevid.net/api/ajaxSearch'

async function getdata() {

    

    let data = {
        q: 'https://www.instagram.com/reel/C9VS-kNy511/?utm_source=ig_web_copy_link',
        t: 'media',
        lang: 'en',
        v: 'v2'
    }

    let header = {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        'Content-Length': '110',
        'Content-Type': 'application/x-www-form-urlencoded;',
        'Origin': 'https://savevid.net',
        'Priority': 'u=1, i',
        'Referer': 'https://savevid.net/',
        'Sec-CH-UA': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'Sec-CH-UA-Mobile': '?1',
        'Sec-CH-UA-Platform': '"Android"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36'

    }


    
  
    axios.post(url , Qs.stringify(data) , {header}).then((res) => {
        console.log(res.config );
        
    }).catch((err) => {
        console.log(err.response.data);
        
    })

}
getdata()






// fetch("https://savevid.net/api/ajaxSearch", {
//     method: "POST",
//     body: JSON.stringify({
//         q: 'https://www.instagram.com/reel/C9VS-kNy511/?utm_source=ig_web_copy_link',
//         t: "media",
//         lang: "en",
//     }),
//     headers: {
//         'Accept': '*/*',
//         'Accept-Encoding': 'gzip, deflate, br, zstd',
//         'Accept-Language': 'en-US,en;q=0.9',
//         'Content-Length': '110',
//         'Content-Type': 'application/x-www-form-urlencoded;', 
//         'Origin': 'https://savevid.net',
//         'Priority': 'u=1, i',
//         'Referer': 'https://savevid.net/',
//         'Sec-CH-UA': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
//         'Sec-CH-UA-Mobile': '?1',
//         'Sec-CH-UA-Platform': '"Android"',
//         'Sec-Fetch-Dest': 'empty',
//         'Sec-Fetch-Mode': 'cors',
//         'Sec-Fetch-Site': 'same-site',
//         'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36'
//     }
//   })
//   .then((response) => response.json())
//   .then((json) => console.log(json));




