const request = require('request')

module.exports.retrieve = async (req, res) => {
    const hashtag   = req.body.hashtag
    const count     = req.body.count

    const url       = "https://www.instagram.com/explore/tags/" + hashtag + "/?__a=1";

    // use hashtag to get json
    request.get(url, null, (err, response, json) => {
        const obj = JSON.parse(json);
        var nodes = [];
        var i = 0;
        while(i++ < count) {
            let node = obj.graphql.hashtag.edge_hashtag_to_media.edges[i].node
            nodes.push(node)
        }
        
        res.status(201).render('detail', { hashtag, count, nodes });
    })
    // prettify json
    // parse until there's no more images or
    // we reach the given count
}

/*
"graphql":{  
      "hashtag":{  
         "name":"hashtag",
         "is_top_media_only":false,
         "edge_hashtag_to_media":{  
            "count":17203908,
            "page_info":{  
               "has_next_page":true,
               "end_cursor":"AQCuC_LlmIOzQ4cXpltyft9GTXC4tYqxp3DYlYsaLsxIp4eje9MU-JYrTbRuvIqzuM4mqt1VzWulmJwkvOGLCDF7-dMf6gC2IiLXQ8PB6nW2Ig"
            },
            "edges":[  
               {  
                  "node":{  
                     "comments_disabled":false,
                     "id":"1739660019898893865",
                     "edge_media_to_caption":{  
                        "edges":[  
                           {  
                              "node":{  
                                 "text":"WONDERCHEESE\n\nKerepek yg tengah viral sekarang ni. Siap keluar kt radio hot fm & fly fm lagi. So, sesiapa nak try rasa boleh whatsapp saya. Klik link kt bawah tu. ❤RM25 sebalang❤\n🛎Rangup-Pedas2 manis-Sedap-Cheezy🛎\n🔥Sekali dah makan, confirm susah nak stop. Memang sedap sampai menjilat jari🔥\n\nBerminat? Tekan link kat bawah\n\nWasap.my/60134317627\nWasap.my/60134317627\nWasap.my/60134317627\n\nBoleh tengok kt #hashtag bawah tu untuk area yg boleh COD termasuk kawasan sekitarnya.. Korang pon boleh buat duit poket dengan menjadi agent wondercheese. Untuk keterangan lanjut, tekan je link kat atas. #agentwanted\n\n#wondercheese88 #melaka #utem #melakatengah #ayerkeroh #duriantunggal #mitc #tamantasikutama #batuberendam #melakasentral #bandarayamelaka #uitmbandarayamelaka #menaratamingsari #mahkotaparade #dataranpahlawan #bukitberuang #ayerkerohheight #bukitkatil #bukitbaru #cheng #kolejpolitechmara #kolejyayasanmelaka\n#ayermolek\n#telokmas\n#alai\n#krubong\n#payarumput"
                              }
                           }
                        ]
                     },
                     "shortcode":"Bgkg5IsBcYp",
                     "edge_media_to_comment":{  
                        "count":0
                     },
                     "taken_at_timestamp":1521603656,
                     "dimensions":{  
                        "height":1350,
                        "width":1080
                     },
                     "display_url":"https://scontent-ort2-2.cdninstagram.com/vp/a6fb617c5f4d02b3dd46f8f197ce22b4/5B2B16DE/t51.2885-15/e35/29087635_1898233976915459_2155474181251137536_n.jpg",
                     "edge_liked_by":{  
                        "count":0
                     },
                     "edge_media_preview_like":{  
                        "count":0
                     },
                     "owner":{  
                        "id":"2262805960"
                     },
                     "thumbnail_src":"https://scontent-ort2-2.cdninstagram.com/vp/a3a8deec6276907d885be1718fe998a4/5B2E4EDD/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/29087635_1898233976915459_2155474181251137536_n.jpg",
                     "thumbnail_resources":[  
                        {  
                           "src":"https://scontent-ort2-2.cdninstagram.com/vp/34e680439bb8824b6d93c43e29c1e761/5B35C479/t51.2885-15/s150x150/e35/c0.135.1080.1080/29087635_1898233976915459_2155474181251137536_n.jpg",
                           "config_width":150,
                           "config_height":150
                        },
                        {  
                           "src":"https://scontent-ort2-2.cdninstagram.com/vp/de2441fa67ba53c11b8f49b93383c43c/5B4CA989/t51.2885-15/s240x240/e35/c0.135.1080.1080/29087635_1898233976915459_2155474181251137536_n.jpg",
                           "config_width":240,
                           "config_height":240
                        },
                        {  
                           "src":"https://scontent-ort2-2.cdninstagram.com/vp/5f21ebdae080773e05b9b768ab4e5e57/5B365988/t51.2885-15/s320x320/e35/c0.135.1080.1080/29087635_1898233976915459_2155474181251137536_n.jpg",
                           "config_width":320,
                           "config_height":320
                        },
                        {  
                           "src":"https://scontent-ort2-2.cdninstagram.com/vp/d79b5b5e293fc4bb244c698b3c6021a0/5B4ECBA5/t51.2885-15/s480x480/e35/c0.135.1080.1080/29087635_1898233976915459_2155474181251137536_n.jpg",
                           "config_width":480,
                           "config_height":480
                        },
                        {  
                           "src":"https://scontent-ort2-2.cdninstagram.com/vp/a3a8deec6276907d885be1718fe998a4/5B2E4EDD/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/29087635_1898233976915459_2155474181251137536_n.jpg",
                           "config_width":640,
                           "config_height":640
                        }
                     ],
                     "is_video":false
                  }
               },
               ...
               */