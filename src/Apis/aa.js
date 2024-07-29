
const BaseDatos = [
    {
        id: 1,
        titulo: 'Contra todos (2023)',
        genero: 'Drama',
        ano: 2023,
        imagen: 'https://th.bing.com/th/id/R.4a2eb55218778a002e799c88b2ef9514?rik=cwMX7xEszCUz6g&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/scl/fi/7qbqbj0ybedspkz8tt5qi/Contra-todos-2023.mkv?rlkey=mqokf3eghm5g63o48igdfrjyf&st=6ai5f302',
        descripcion: 'Un joven sordomudo lucha contra la opresión de una familia tiránica que controla su comunidad.'
    },
    {
        id: 2,
        titulo: 'David contra los bancos (2023)',
        genero: 'Drama',
        ano: 2023,
        imagen: 'https://th.bing.com/th/id/OIP.SJ-1IHBoaLYjGc4VTdfMOgHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/rokmbhgboafto4yncr5i8/David-contra-los-bancos-2023.mkv?rlkey=bp4e0ufzsvrsyzw4egyla9u88&',
        descripcion: 'Un empresario desafía a los bancos en un inspirador drama basado en hechos reales.'
    },
    {
        id: 3,
        titulo: 'Escape bajo fuego (2023)',
        genero: 'Acción',
        ano: 2023,
        imagen: 'https://th.bing.com/th/id/OIP.mvihZt5pI0kjDIAomENqLwHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/vecyid0bc4paglh7m6ra0/Escape-bajo-fuego-2023.mkv?rlkey=xwdhmhaxegk90s43h99l6e6h1&',
        descripcion: 'Un agente de la CIA debe escapar tras sabotear un reactor nuclear en Irán.'
    },
    {
        id: 4,
        titulo: 'El bastardo (2023)',
        genero: 'Drama',
        ano: 2023,
        imagen: 'https://th.bing.com/th/id/OIP.1fCjajTHq5Y8C1Yl5cxROAHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/clfcu54pv24e53bjttfws/El-bastardo-2023.mkv?rlkey=q4skh9bqw5qy4d8snlzmazepr&st=p6dlilrq&',
        descripcion: 'Un boxeador filipino se enfrenta a dilemas morales mientras busca ayudar a su madre enferma.'
    },
    {
        id: 5,
        titulo: 'Desafiantes (2024)',
        genero: 'Deportes',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.IJ4kWoFhfd3r7ILx5kNf4AHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/tacw46yrby5wlsd0oov22/Desafiantes-2024.mkv?rlkey=nkdvzeimac7iupqrjpujwuli8&st=jxg5a2qu&',
        descripcion: 'Una ex prodigio del tenis se convierte en entrenadora, desafiando las normas del deporte.'
    },
    {
        id: 6,
        titulo: 'la mesita del comedor (2024)',
        genero: 'Comedia',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.ofNWHvBthuXn4YnbgwWb_wAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/k08g0nmb9o11pqr2ufv70/la-mesita-del-comedor-2024.mkv?rlkey=fgk8l8crds7a4fewsvkwjkwil&st=1vorii2r&',
        descripcion: 'Una pareja enfrenta una crisis tras una desafortunada compra que cambia sus vidas.'
    },
    {
        id: 7,
        titulo: 'La hija del pantano (2023)',
        genero: 'Thriller',
        ano: 2023,
        imagen: 'https://th.bing.com/th/id/OIP.ussdt31W48f6ZVDYrk6uCAHaFj?w=263&h=197&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/c9gsz4cedmu6380hyr4a2/La-hija-del-pantano-2023.mkv?rlkey=02kkon0dz19q0jd4nrzgt6lbf&',
        descripcion: 'Una mujer busca venganza contra el hombre que secuestró a su madre.'
    },
    {
        id: 8,
        titulo: 'Atlas (2024)',
        genero: 'Ciencia Ficción',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.5MK4ab00wihxx5tjjOTwEwHaEK?w=329&h=184&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/qjx1wc302giitp48xei94/Atlas-2024.mkv?rlkey=azmd0snqq1q15pyt6qt2ach3t&st=dwhrlgla&',
        descripcion: 'Un analista investiga a un terrorista que lideró una rebelión de IA devastadora.'
    },
    {
        id: 9,
        titulo: 'MI amigo robot (2023)',
        genero: 'Anime',
        ano: 2023,
        imagen: 'https://th.bing.com/th/id/OIP.KNtkzPtNzZGitKoa9MMAEQHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/cd18o00yt9bfr7qyctsop/Mi-amigo-robot-2023.mp4?rlkey=rbdpvs3tedmt56wj5cbi55dxc&',
        descripcion: 'La historia de un perro solitario que busca compañía en Nueva York.'
    },
    {
        id: 10,
        titulo: 'La zona de interés (2023)',
        genero: 'Drama',
        ano: 2023,
        imagen: 'https://th.bing.com/th/id/OIP.tMJI_vhNl5pXj4uGeDu38AHaLX?w=115&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/q7lft18xwjbo2j4fm21jx/La-zona-de-inter-s-2023.mkv?rlkey=swjzaf7hbd4dnfgpwezn1xquz&',
        descripcion: 'La vida de un comandante de Auschwitz y su familia en un entorno perturbador.'
    },
    {
        id: 11,
        titulo: 'Mi soledad tiene alas (2023)',
        genero: 'Drama',
        ano: 2023,
        imagen: 'https://th.bing.com/th/id/OIP.5K0SK1Ne7goNsZWcpzx6QAHaE7?w=281&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/tjw34bl6fqkh2ozjp98lv/Mi-soledad-tiene-alas-2023.mkv?rlkey=l8h7pr1xmze9pwhrf1zjrz400&',
        descripcion: 'La vida de tres amigos en un barrio humilde de Barcelona y sus luchas cotidianas.'
    },
    {
        id: 12,
        titulo: 'Argylle Agente secreto (2024)',
        genero: 'Acción',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.nWBLbwylIsBUrSLJX_EBqQHaD4?w=284&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/r1qc3rt15am4oiqfk26a8/Argylle-Agente-secreto-2024.mkv?rlkey=skhs433klogh5xcaf3o5uo326&',
        descripcion: 'El mejor espía del mundo se embarca en una aventura global llena de peligros.'
    },
    {
        id: 13,
        titulo: 'Mean Girls (2024)',
        genero: 'Comedia',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.wdQzos5jW0TCMdO8S89MpwHaEO?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/scl/fi/zxl4kfpeddkzvodbut56x/Mean-Girls-2024.mkv?rlkey=y8qvil4yq8hbx19tyh4pfiif4&',
        descripcion: 'Una nueva versión de la clásica comedia sobre la vida en la escuela secundaria.'
    },
    {
        id: 14,
        titulo: 'Garfield (2004)',
        genero: 'Comedia',
        ano: 2004,
        imagen: 'https://th.bing.com/th/id/OIP.EbwTWAnOjJbrQaN-cnukRQHaEK?w=254&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/0kotm2oj8quzh9vqzfixp/Garfield-2004.mp4?rlkey=vfbtx51neqi0oggoykkvclgw5&st=tss80pow&',
        descripcion: 'Las aventuras del gato perezoso Garfield y su rivalidad con el perro Odie.'
    },
    {
        id: 15,
        titulo: 'Yo capitán (2023)',
        genero: 'Drama',
        ano: 2023,
        imagen: 'https://th.bing.com/th/id/OIP.dD9sC1YIwhtgWYRl4mAVNwHaEK?w=293&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/ir8hd584p8ehzq3mcipxp/Yo-capit-n-2023.mkv?rlkey=aamwgi5wy9x6xm5xoiotcjs9o&st=3z08hyrv&',
        descripcion: 'Dos jóvenes de Dakar emprenden un peligroso viaje hacia Europa.'
    },
    {
        id: 16,
        titulo: 'Los tres mosqueteros mi lady (2024)',
        genero: 'Aventura',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.0vMxyQA5VoDtbjxKrYoPGQHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/scl/fi/7npw098306x8e5y5gpdjl/Los-tres-mosqueteros-mi-lady-2024.mkv?rlkey=fg6g2d147zrqjelcbnau2u7e8&',
        descripcion: "D'Artagnan se une a Milady de Winter para rescatar a Constance Bonacieux, mientras viejas alianzas se rompen en medio de la guerra."
    },
    {
        id: 17,
        titulo: 'Rescate imposible (2024)',
        genero: 'Acción',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.V0CjuqqM2Fx-VBxbPoJDowHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/scl/fi/sk3hiba6kkjmevp88ako4/Rescate-imposible-2024.mkv?rlkey=eshs1wpomzfhu7tzulwckgy9r&',
        descripcion: 'Un equipo de fuerzas especiales debe confiar en un piloto de drones para escapar de una situación crítica.'
    },
    {
        id: 18,
        titulo: 'Queen Rock Montreal (2024)',
        genero: 'Documental/Música',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.KoS6nEMOGOufdoo1Rp1X2AHaD4?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/scl/fi/dga33b110t8qszuawzizm/Queen-Rock-Montreal-2024.mkv?rlkey=lc68slltft4zdmgowpa26rfiw&st=huw5rz2d&',
        descripcion: 'Un concierto de Queen que captura la energía de la banda en un momento clave de su carrera.'
    },
    {
        id: 19,
        titulo: 'Dos chicas a la fuga (2024)',
        genero: 'Comedia',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.uZZYf130-n-kBsHNcRI6DAHaK9?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/scl/fi/0fy4jjxhvthdfc955hfl2/Dos-chicas-a-la-fuga-2024.mkv?rlkey=8rxem87tkl9xp4xn1chbewq9z&',
        descripcion: 'Una chica fiestera y su amiga reservada se embarcan en un viaje lleno de sorpresas y obstáculos inesperados.'
    },
    {
        id: 20,
        titulo: 'Aquaman y el reino perdido (2023)',
        genero: 'Acción/Aventura',
        ano: 2023,
        imagen: 'https://th.bing.com/th/id/OIP.4tktZIJBEXPeh8I9zM64lQHaES?w=259&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/o8hr0g3gin4k6x7r81hkx/Aquaman-y-el-reino-perdido-2023.mkv?rlkey=0yzlkb6zz7xndqgzthwccf7ij&',
        descripcion: 'Aquaman debe liberar a su hermanastro de prisión para detener a un enemigo que amenaza Atlantis.'
    },
    {
        id: 21,
        titulo: 'One piece episodio de la isla del cielo (2018)',
        genero: 'Anime',
        ano: 2018,
        imagen: 'https://th.bing.com/th/id/R.7404235241c3da4f7ba014b8bd6e162f?rik=P1%2fwNnpKfgwJrw&riu=http%3a%2f%2ftorrent.unionfansub.com%2fcaptura%2f8536-1.jpg&ehk=3pu%2foBQmxGXlFGg6d7vK3QN7M%2fBAxPJquJiCkFsKtZQ%3d&risl=&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/scl/fi/eyb0ndz5y5nxi3883m46o/One-piece-episodio-de-la-isla-del-cielo-2018.mkv?rlkey=h6o0rse0i6mql0hi1z5tpif9z&',
        descripcion: 'Un episodio especial de One Piece que sigue las aventuras de Luffy y su tripulación.'
    },
    {
        id: 22,
        titulo: 'One Piece Episodio del East Blue La gran aventura de Luffy y sus cuatro camaradas (2017)',
        genero: 'Anime',
        ano: 2017,
        imagen: 'https://th.bing.com/th/id/R.7404235241c3da4f7ba014b8bd6e162f?rik=P1%2fwNnpKfgwJrw&riu=http%3a%2f%2ftorrent.unionfansub.com%2fcaptura%2f8536-1.jpg&ehk=3pu%2foBQmxGXlFGg6d7vK3QN7M%2fBAxPJquJiCkFsKtZQ%3d&risl=&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/scl/fi/pov2p347wwcjlihkxiihk/One-Piece-Episodio-del-East-Blue-La-gran-aventura-de-Luffy-y-sus-cuatro-camaradas-2017.mkv?rlkey=jm6c159gk52iv96k2zaarsmbq&',
        descripcion: 'La historia de cómo Luffy y sus amigos comienzan su viaje en el East Blue.'
    },
    {
        id: 23,
        titulo: 'One Piece: 3D2Y ¡Superar la muerte de Ace! ¡El voto de Luffy a su tripulación! (2014)',
        genero: 'Anime',
        ano: 2014,
        imagen: 'https://th.bing.com/th/id/R.7404235241c3da4f7ba014b8bd6e162f?rik=P1%2fwNnpKfgwJrw&riu=http%3a%2f%2ftorrent.unionfansub.com%2fcaptura%2f8536-1.jpg&ehk=3pu%2foBQmxGXlFGg6d7vK3QN7M%2fBAxPJquJiCkFsKtZQ%3d&risl=&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/scl/fi/blu9ihq8y33m4f8imhitn/One-Piece-3D2Y-Superar-la-muerte-de-Ace-El-voto-de-Luffy-a-su-tripulaci-n-2014.mkv?rlkey=1758h5becz7pu2itiuaatetwn&',
        descripcion: 'Un especial que sigue el viaje emocional de Luffy tras la muerte de su hermano Ace.'
    },
    {
        id: 24,
        titulo: 'One Piece: Aventura en Nebulandia (2015)',
        genero: 'Anime',
        ano: 2015,
        imagen: 'https://th.bing.com/th/id/R.7404235241c3da4f7ba014b8bd6e162f?rik=P1%2fwNnpKfgwJrw&riu=http%3a%2f%2ftorrent.unionfansub.com%2fcaptura%2f8536-1.jpg&ehk=3pu%2foBQmxGXlFGg6d7vK3QN7M%2fBAxPJquJiCkFsKtZQ%3d&risl=&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/scl/fi/g7478tb14rvucbh46fng1/One-Piece-Aventura-en-Nebulandia-2015.mkv?rlkey=nu0ioj5poxmwpsvm4zt8hp7na&',
        descripcion: 'Luffy y su tripulación enfrentan nuevos desafíos en la misteriosa Nebulandia.'
    },
    {
        id: 25,
        titulo: 'One Piece: Heart of Gold (2016)',
        genero: 'Anime',
        ano: 2016,
        imagen: 'https://th.bing.com/th/id/R.7404235241c3da4f7ba014b8bd6e162f?rik=P1%2fwNnpKfgwJrw&riu=http%3a%2f%2ftorrent.unionfansub.com%2fcaptura%2f8536-1.jpg&ehk=3pu%2foBQmxGXlFGg6d7vK3QN7M%2fBAxPJquJiCkFsKtZQ%3d&risl=&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/scl/fi/lr2xzuw7ojqeg8nm9rwe6/One-Piece-Heart-of-Gold-2016.mkv?rlkey=cf7mpxl5keqid2benro7atxzi&',
        descripcion: 'Una aventura que revela la historia detrás del legendario tesoro de One Piece.'
    },
    {
        id: 26,
        titulo: 'Dream 9 Toriko & One Piece & Dragon Ball Z (2013)',
        genero: 'Anime',
        ano: 2013,
        imagen: 'https://th.bing.com/th/id/OIP.x5H5z_0BNNUVpgELqM1jSAHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/nrjaxzwditotz0f/Dream%209%20Toriko%20%26%20One%20Piece%20%26%20Dragon%20Ball%20Z%C2%A0%282013%29.mkv',
        descripcion: 'Un crossover épico que une a personajes de Toriko, One Piece y Dragon Ball Z.'
    },
    {
        id: 27,
        titulo: 'One Piece Film Red (2022)',
        genero: 'Anime/Música',
        ano: 2022,
        imagen: 'https://th.bing.com/th/id/R.7404235241c3da4f7ba014b8bd6e162f?rik=P1%2fwNnpKfgwJrw&riu=http%3a%2f%2ftorrent.unionfansub.com%2fcaptura%2f8536-1.jpg&ehk=3pu%2foBQmxGXlFGg6d7vK3QN7M%2fBAxPJquJiCkFsKtZQ%3d&risl=&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/7mtyg1tpz264yj4/One%20Piece%20Film%20Red%20%282022%29.mkv',
        descripcion: 'Una película musical que explora la historia de Shanks y su conexión con Luffy.'
    },
    {
        id: 28,
        titulo: 'Toriko x One piece x Dragon Ball Z (2013)',
        genero: 'Anime',
        ano: 2013,
        imagen: 'https://th.bing.com/th/id/R.7404235241c3da4f7ba014b8bd6e162f?rik=P1%2fwNnpKfgwJrw&riu=http%3a%2f%2ftorrent.unionfansub.com%2fcaptura%2f8536-1.jpg&ehk=3pu%2foBQmxGXlFGg6d7vK3QN7M%2fBAxPJquJiCkFsKtZQ%3d&risl=&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/nrjaxzwditotz0f/Dream%209%20Toriko%20%26%20One%20Piece%20%26%20Dragon%20Ball%20Z%C2%A0%282013%29.mkv',
        descripcion: 'Un evento especial que reúne a los héroes de tres universos de anime.'
    },
    {
        id: 29,
        titulo: 'One Piece Episodio del East Blue La gran aventura de Luffy y sus cuatro camaradas (2017)',
        genero: 'Anime',
        ano: 2017,
        imagen: 'https://th.bing.com/th/id/R.7404235241c3da4f7ba014b8bd6e162f?rik=P1%2fwNnpKfgwJrw&riu=http%3a%2f%2ftorrent.unionfansub.com%2fcaptura%2f8536-1.jpg&ehk=3pu%2foBQmxGXlFGg6d7vK3QN7M%2fBAxPJquJiCkFsKtZQ%3d&risl=&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/scl/fi/pov2p347wwcjlihkxiihk/One-Piece-Episodio-del-East-Blue-La-gran-aventura-de-Luffy-y-sus-cuatro-camaradas-2017.mkv?rlkey=jm6c159gk52iv96k2zaarsmbq&',
        descripcion: 'La historia de cómo Luffy y sus amigos comienzan su viaje en el East Blue.'
    },
    {
        id: 30,
        titulo: 'Dragon Ball GT: 100 años después (1997)',
        genero: 'Anime',
        ano: 1997,
        imagen: 'https://th.bing.com/th/id/OIP.xCSiHZBnSoJVnbKowBXtugHaEK?rs=1&pid=ImgDetMain',
        url: 'https:/www.dropbox.com/s/h36r437g586nkmf/Dragon%20Ball%20GT%20100%20a%C3%B1os%20despu%C3%A9s%20%281997%29.mkv',
        descripcion: 'Un episodio que explora el futuro de los personajes de Dragon Ball GT un siglo después.'
    },
    {
        id: 31,
        titulo: 'Dragon Ball Super Broly (2019)',
        genero: 'Anime',
        ano: 2019,
        imagen: 'https://th.bing.com/th/id/OIP.xCSiHZBnSoJVnbKowBXtugHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/qkek4a0zkwkrgfs/Dragon%20Ball%20Super%20Broly%20%282019%29.mkv',
        descripcion: 'Broly, un poderoso Saiyajin, se enfrenta a Goku y Vegeta en una batalla épica.'
    },
    {
        id: 32,
        titulo: 'Dragon Ball Super Super Hero (2022)',
        genero: 'Anime',
        ano: 2022,
        imagen: 'https://th.bing.com/th/id/OIP.SPpEIKJ7fxWOoG6xEBVCjgAAAA?w=243&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/kyu1aecdr5nsezojnya2t/Dragon-Ball-Super-Super-Hero-2022.mkv?rlkey=4cba7k1a7qo8paiy8re5nbitt&',
        descripcion: 'Los Guerreros Z se enfrentan a una nueva amenaza mientras Gohan y Piccolo se preparan para una batalla crucial.'
    },
    {
        id: 33,
        titulo: 'Dragon Ball Z: Broly el legendario super saiyajin (1993)',
        genero: 'Anime',
        ano: 1993,
        imagen: 'https://th.bing.com/th/id/R.9f21bdb96c7d87eaa1cec443f1d459c8?rik=6KNHpqnxOd8SEQ&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/gh4b85qwoknj0ff/Dragon%20Ball%20Z%20Broly%20el%20legendario%20super%20saiyajin%20%281993%29.mkv',
        descripcion: 'Goku y sus amigos se enfrentan al poderoso Broly, un Saiyajin legendario.'
    },
    {
        id: 34,
        titulo: 'Dragon Ball Z: El combate definitivo (1994)',
        genero: 'Anime',
        ano: 1994,
        imagen: 'https://th.bing.com/th/id/OIP.hCloHmOlMwDMn1eUFECGzQHaEK?w=318&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/7jqxlkueo9h71wn/Dragon%20Ball%20Z%20El%20combate%20definitivo%20%281994%29.mkv',
        descripcion: 'Los guerreros Z se preparan para la batalla definitiva contra una amenaza cósmica.'
    },
    {
        id: 35,
        titulo: 'Dragon Ball Z: El más fuerte del mundo (1989)',
        genero: 'Anime',
        ano: 1989,
        imagen: 'https://th.bing.com/th/id/OIP.SEe2eH4YzB65pmYhX4wFogHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/l8u5o8bjgeu3p5x/Dragon%20Ball%20Z%20El%20m%C3%A1s%20fuerte%20del%20mundo%20%281989%29.mkv',
        descripcion: 'Goku y sus amigos compiten en un torneo para determinar al guerrero más poderoso del mundo.'
    },
    {
        id: 36,
        titulo: 'Dragon Ball Z: El Padre de Goku (1990)',
        genero: 'Anime',
        ano: 1990,
        imagen: 'https://th.bing.com/th/id/OIP.4MiYz_TdZh-i5jFeAnUBPgHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/ulw30y0d8g9i2x1/Dragon%20Ball%20Z%20El%20Padre%20de%20Goku%20%281990%29.mkv',
        descripcion: 'Goku descubre los secretos de su pasado y se enfrenta a su padre, un poderoso Saiyajin.'
    },
    {
        id: 37,
        titulo: 'Dragon Ball Z: El regreso de Broly (1994)',
        genero: 'Anime',
        ano: 1994,
        imagen: 'https://th.bing.com/th/id/R.1328f30b2477f6ab6949d08527829cca?rik=krUXqj80H0sfLw&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/0m3kjdnz2k31yjb/Dragon%20Ball%20Z%20El%20regreso%20de%20Broly%20%281994%29.mkv',
        descripcion: 'Broly, el legendario Super Saiyajin, regresa para enfrentarse a Goku y sus amigos.'
    },
    {
        id: 41,
        titulo: 'Scary Movie (2000)',
        genero: 'Comedia/Terror',
        ano: 2000,
        imagen: 'https://th.bing.com/th/id/OIP.5MsLtgQmDMp9VyKZP01a_wHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/nedhf5p7lkf9vhd/Scary%20Movie%20%282000%29%20.mkv',
        descripcion: 'Una parodia de películas de terror donde un asesino acecha a un grupo de adolescentes.'
    },
    {
        id: 42,
        titulo: 'Scary Movie 2 (2001)',
        genero: 'Comedia/Terror',
        ano: 2001,
        imagen: 'https://th.bing.com/th/id/OIP.hOBhq1dxpcZ6vDK7dvqfrQHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/whh2bxwvu66zb5z/Scary%20Movie%202%20Otra%20pel%C3%ADcula%20de%20miedo%20%282011%29.mkv',
        descripcion: 'Un profesor engaña a cuatro adolescentes para que visiten una mansión embrujada para un experimento.'
    },
    {
        id: 43,
        titulo: 'Scary Movie 3 (2003)',
        genero: 'Comedia/Terror',
        ano: 2003,
        imagen: 'https://th.bing.com/th/id/OIP.wTm440sfzXRzOpI_CXiGOgHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/ye77vja6lyrsb93/Scary%20Movie%203%20%282003%29%20.mkv',
        descripcion: 'Una reportera descubre que la Tierra está amenazada por eventos terroríficos y debe evitar que el mal se apodere del mundo.'
    },
    {
        id: 44,
        titulo: 'Scary Movie 4 (2006)',
        genero: 'Comedia/Terror',
        ano: 2006,
        imagen: 'https://th.bing.com/th/id/R.dd1d8f9c0a2b6b0d327e9fa90c3118a8?rik=GtWT%2bhySwK%2fNwQ&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/apm5ih61yzoq89s/Scary%20Movie%204%20%282006%29%20.mkv',
        descripcion: 'Cindy y sus amigos se unen para salvar al mundo de una invasión extraterrestre, parodiando películas famosas.'
    },
    {
        id: 45,
        titulo: 'Scary Movie 5 (2013)',
        genero: 'Comedia/Terror',
        ano: 2013,
        imagen: 'https://th.bing.com/th/id/OIP.BTo09EDIUTMlheqr3xYXHAHaCx?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/ode22tt8chlqjt9/Scary%20Movie%205%20%282013%29%20.mkv',
        descripcion: 'Una pareja con un bebé recién nacido es acosada por una presencia demoníaca en su hogar.'
    },
    {
        id: 46,
        titulo: 'Son como niños (2010)',
        genero: 'Comedia',
        ano: 2010,
        imagen: 'https://th.bing.com/th/id/OIP.Yts3ITA0tn2MCOrLBSsB2gHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/afowdoqemmayc8s/Son%20como%20ni%C3%B1os%20%282010%29%20.mkv',
        descripcion: 'Un grupo de amigos y excompañeros descubre que envejecer no siempre significa madurar cuando se reúnen para honrar la memoria de su entrenador de baloncesto.'
    },
    {
        id: 47,
        titulo: 'Son como niños 2 (2013)',
        genero: 'Comedia',
        ano: 2013,
        imagen: 'https://th.bing.com/th/id/OIP.9yCxHH9KUhRbJEgnfMxPmAAAAA?w=321&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/o70sh7gs4tnna0y/Son%20como%20ni%C3%B1os%202%20%282013%29%20.mkv',
        descripcion: 'Tres años después de la reunión que volvió a unirlo a sus amigos de la infancia, Lenny Feder regresa junto a su familia a su pueblo natal para poder estar más cerca de sus amigos.'
    },
    {
        id: 48,
        titulo: 'Y donde estan las rubias (2004)',
        genero: 'Comedia',
        ano: 2004,
        imagen: 'https://th.bing.com/th/id/OIP.INdM3NjpvN9nvmLYWTuK3wHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/t44d6pqzq2aibn5/Y%20donde%20estan%20las%20rubias%20%282004%29.mkv',
        descripcion: 'Dos torpes agentes del FBI se hacen pasar por dos chicas de la alta sociedad para investigar una serie de secuestros.'
    },
    {
        id: 49,
        titulo: 'Chiquito pero poderoso (2006)',
        genero: 'Comedia',
        ano: 2006,
        imagen: 'https://th.bing.com/th/id/OIP.SPJss7e8mM2lbY9lQCGB_wHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/ozgmfd5n60ysgsa/Little%20Man%20%282006%29.mkv',
        descripcion: 'Un pequeño fugitivo de la ley finge ser un niño para poder llegar hasta una gema robada que está oculta en la bolsa de una mujer.'
    },
    {
        id: 50,
        titulo: 'Shaolin Soccer (2001)',
        genero: 'Comedia/Deportes',
        ano: 2001,
        imagen: 'https://th.bing.com/th/id/OIP.F8dDbMPEB3YN1wlqUuVnqAAAAA?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/dlvrkwhghixxqha/Shaolin%20Soccer%20%282001%29.mkv',
        descripcion: 'Un hombre normal se une a un grupo de maestros de kung-fu para formar un equipo de fútbol y cambiar el deporte para siempre.'
    },
    {
        id: 51,
        titulo: 'El ascenso de las tortugas Ninja (2022)',
        genero: 'Acción/Aventura',
        ano: 2022,
        imagen: 'https://th.bing.com/th/id/OIP.U1hhGa7rh9Mjt1K1kcakfgHaEA?w=262&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/tai6innccjzmjw0/El%20ascenso%20de%20las%20tortugas%20Ninja%20%282022%29.mkv',
        descripcion: 'Un extraño llamado Casey Jones llega del futuro para advertir a los mutantes de una inminente invasión de la fuerza alienígena más peligrosa de la galaxia: los Krang.'
    },
    {
        id: 52,
        titulo: 'Tortugas Ninja caos mutante (2023)',
        genero: 'Acción/Aventura',
        ano: 2023,
        imagen: 'https://th.bing.com/th/id/OIP.e6TUItuGQBZeDnJLvwLwTgHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/scl/fi/mvww9xrsf241wxscfy4tb/Tortugas-Ninja-caos-mutante-2023.mkv?rlkey=45gouv2nuau6j17jyen0pjueq&',
        descripcion: 'Los hermanos tortuga quieren ganarse el corazón de los neoyorquinos mientras luchan contra criminales y mutantes.'
    },
    {
        id: 53,
        titulo: 'Bad Boys (1995)',
        genero: 'Acción/Comedia',
        ano: 1995,
        imagen: 'https://th.bing.com/th/id/OIP.GGrBVIrqVjU4NwO_yhYTfAHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/l23rvbdarnckhmp/Bad%20Boys%20%281995%29%20.mkv',
        descripcion: 'Dos policías de Miami tienen 72 horas para encontrar 100 millones de dólares en heroína robada del almacén de evidencias de su comisaría.'
    },
    {
        id: 54,
        titulo: 'Bad Boys 2 (2003)',
        genero: 'Acción/Comedia',
        ano: 2003,
        imagen: 'https://th.bing.com/th/id/OIP.hlGNERTv8fjG8-o7YXoRBQAAAA?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/rgud7d9h9h8bmxz/Bad%20Boys%202%20%282003%29%20.mkv',
        descripcion: 'Los detectives Mike Lowrey y Marcus Burnett intentan detener a un narcotraficante que inunda Miami con éxtasis.'
    },
    {
        id: 55,
        titulo: 'Bad Boys para siempre (2020)',
        genero: 'Acción/Comedia',
        ano: 2020,
        imagen: 'https://th.bing.com/th/id/OIP.m7dDNUI2Xh6-A873HwpJlAHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/cp622ylpql2u10b/Bad%20Boys%20para%20siempre%20%282020%29%20.mkv',
        descripcion: 'Los agentes Mike Lowrey y Marcus Burnett vuelven a colaborar para detener a un violento líder de un cartel de la droga.'
    },
    {
        id: 56,
        titulo: 'Spiderman a través del spider verso (2023)',
        genero: 'Anime/Superhéroes',
        ano: 2023,
        imagen: 'https://th.bing.com/th/id/R.4c1659a6a6d716f9a5e9df80944aaf44?rik=WlkXUr5EiF0c9A&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/scl/fi/s1kyoa993ojl0segyn3ur/Spiderman-a-trav-s-del-spider-verso-2023.mkv?rlkey=hhq7j3eps6my58gmy13yzx4bn&',
        descripcion: 'Spider-Man es lanzado a través del multiverso y se une a un equipo de héroes araña para proteger su existencia.'
    },
    {
        id: 57,
        titulo: 'El Gato con Botas El último deseo (2022)',
        genero: 'Anime/Aventura',
        ano: 2022,
        imagen: 'https://th.bing.com/th/id/OIP.lfHEJSbKciyT5REcVu0RwQHaD4?w=325&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/s4003uqyqcd7oyt/El%20gato%20con%20botas%20el%20%C3%BAltimo%20deseo%20%282022%29.mkv',
        descripcion: 'El Gato con Botas busca el legendario Último Deseo para restaurar las vidas que ha perdido.'
    },
    {
        id: 58,
        titulo: 'El gato con botas (2011)',
        genero: 'Anime/Aventura',
        ano: 2011,
        imagen: 'https://th.bing.com/th/id/OIP.McTwRgOZHAzVR72GIt3dYQHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/129amaxh8dwzzgm/El%20gato%20con%20botas%20%282011%29.mkv',
        descripcion: 'El Gato con Botas se une a Humpty Dumpty y Kitty para robarse al ganso de los huevos de oro.'
    },
    {
        id: 59,
        titulo: 'Shrek (2001)',
        genero: 'Anime/Comedia',
        ano: 2001,
        imagen: 'https://th.bing.com/th/id/R.66644fb8f4c7eb2fc15a6882e39b22e3?rik=mhlY%2bTH%2bcGL5Fg&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/x8ky43bombl0s1o/Shrek%20%282001%29.mkv',
        descripcion: 'Un ogro llamado Shrek se embarca en una aventura para rescatar a la princesa Fiona y recuperar su pantano.'
    },
    {
        id: 60,
        titulo: 'Shrek 2 (2004)',
        genero: 'Anime/Comedia',
        ano: 2004,
        imagen: 'https://th.bing.com/th/id/R.ec78cad0770bee01c78546902761ef90?rik=ZFncLXr5mzqsmA&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/ra87ty17hsij189/Shrek%202%20%282004%29.mkv',
        descripcion: 'Un ogro llamado Shrek vive en su pantano, pero su preciada soledad se ve súbitamente interrumpida por la invasión de los ruidosos personajes de los cuentos de hadas. Todos fueron expulsados de sus reinos por el malvado Lord Farquaad. Decidido a salvar su hogar, Shrek hace un trato con Farquaad y se prepara para rescatar a la princesa Fiona, quien será la esposa de Farquaad.'
    },
    {
        id: 61,
        titulo: 'Shrek 3 (2007)',
        genero: 'Anime/Comedia',
        ano: 2007,
        imagen: 'https://th.bing.com/th/id/OIP.Tk-7Q4QUkDFjce-qldBHLQHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/fq15i7ncczcz6xk/Shrek%203%20%282007%29.mkv',
        descripcion: 'Cuando el Rey Harold enferma, Shrek y la Princesa Fiona descubren que tendrán que dirigir la Tierra Muy Muy Lejana a menos que puedan encontrar al Príncipe Artie, el verdadero heredero, y llevarlo a casa.'
    },
    {
        id: 62,
        titulo: 'Shrek 4 (2010)',
        genero: 'Anime/Comedia',
        ano: 2010,
        imagen: 'https://th.bing.com/th/id/R.2661ed84aab3cd52f72e81c56513a2e7?rik=48%2fqpwIVE1scqg&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/owevn97gm6bbcdf/Shrek%204%20%282010%29.mkv',
        descripcion: 'Instalado en su vida matrimonial y totalmente domesticado, Shrek empieza a extrañar los días en los que él se sentía como un verdadero ogro.'
    },
    {
        id: 63,
        titulo: 'El terror llama a su puerta (1986)',
        genero: 'Terror',
        ano: 1986,
        imagen: 'https://th.bing.com/th/id/OIP.rXlJzIll2y0UrbxvQ8gGrAAAAA?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/scl/fi/8dvr9uqoj4noieabfexr3/El-terror-llama-a-su-puerta-1986.mkv?rlkey=81e585kdde0hmexm4rxfcx10f&',
        descripcion: 'Parásitos extraterrestres, que transforman a sus víctimas en zombis, andan sueltos por una ciudad universitaria.'
    },
    {
        id: 64,
        titulo: 'Camino hacia el terror (2003)',
        genero: 'Terror',
        ano: 2003,
        imagen: 'https://th.bing.com/th/id/R.3da4796dedbfbd223fef9810cd1f0a6d?rik=CN8RrllAxYfQgA&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/9puyr433szb6h8t/camino%20hacia%20el%20terror%20%282003%29.mkv',
        descripcion: 'Seis personas quedan atrapadas en un bosque de Virginia y son perseguidas por un grupo de caníbales de las montañas.'
    },
    {
        id: 65,
        titulo: 'Camino hacia el terror 2 (2007)',
        genero: 'Terror',
        ano: 2007,
        imagen: 'https://th.bing.com/th/id/OIP.q3VSW7zoUAlJW0ok5Oc-DAHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/wd6ybkep7f8f0s4/camino%20hacia%20el%20terror%202%20%282007%29.mkv',
        descripcion: 'Caníbales desquiciados aterrorizan a un grupo de participantes que compiten en un programa de televisión en las tierras de Virginia Occidental.'
    },
    {
        id: 66,
        titulo: 'Camino hacia el terror 3 (2009)',
        genero: 'Terror',
        ano: 2009,
        imagen: 'https://th.bing.com/th/id/OIP.mCRaCg7lF1chFwpca8R_DgAAAA?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/b4ql08wjcusqqlt/camino%20hacia%20el%20terror%203%20%282009%29.mkv',
        descripcion: 'Unos amigos incrédulos y convictos fugitivos descubren a unos caníbales mutantes en el bosque.'
    },
    {
        id: 67,
        titulo: 'Camino hacia el terror 4 (2011)',
        genero: 'Terror',
        ano: 2011,
        imagen: 'https://th.bing.com/th/id/OIP.y6nMoxZjB9zC28elCwr8IQHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/5bwvkklg63u0vpa/camino%20hacia%20el%20terror%204%20%282011%29.mkv',
        descripcion: 'Jóvenes amigos luchan con mutantes deformes en el interior de un sanatorio abandonado.'
    },
    {
        id: 68,
        titulo: 'Camino hacia el terror 5 (2012)',
        genero: 'Terror',
        ano: 2012,
        imagen: 'https://th.bing.com/th/id/OIP.IOTojzKWrKqGTrXboC2AhwHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/vws7qclwgjohwjv/camino%20hacia%20el%20terror%205%20%282012%29.mkv',
        descripcion: 'Un pequeño pueblo minero celebra un festival de disfraces que se convierte en un baño de sangre cuando una familia de caníbales ataca.'
    },
    {
        id: 69,
        titulo: 'Camino hacia el terror 6 (2014)',
        genero: 'Terror',
        ano: 2014,
        imagen: 'https://th.bing.com/th/id/R.c10520174ce90d3bf983500e5528a355?rik=01cWQ8NtLfS%2fkQ&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/tu8ui09fsgilnwk/camino%20hacia%20el%20terror%206%20%282014%29.mkv',
        descripcion: 'Caníbales sanguinarios aterrorizan a un propietario de un hotel y a sus amigos en los bosques del oeste de Virginia.'
    },
    {
        id: 70,
        titulo: 'Men Terror en las sombras (2022)',
        genero: 'Terror',
        ano: 2022,
        imagen: 'https://th.bing.com/th/id/OIP.mgi3HPK0sdxzgGmIwbQkigHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/vqrj7q041hy906m/Men%20%282022%29.mkv',
        descripcion: 'Cuando Harper se retira al campo después de una tragedia personal, las fuerzas oscuras del bosque la acechan.'
    },
    {
        id: 71,
        titulo: 'Sombras del Terror (2019)',
        genero: 'Terror',
        ano: 2019,
        imagen: 'https://th.bing.com/th/id/OIP.PQz-IFcK2DeatUfPD6AU1QHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/y2c5itinc8sey5d/Sombras%20del%20Terror%20%282019%29.mkv',
        descripcion: 'Cuando Harper se retira al campo después de una tragedia personal, las fuerzas oscuras del bosque la acechan.'
    },
    {
        id: 72,
        titulo: 'The Witcher: La pesadilla del lobo (2021)',
        genero: 'Anime/Fantasía',
        ano: 2021,
        imagen: 'https://th.bing.com/th/id/OIP.MrBmAY-fVlqlHrP40OULEAHaEZ?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/p25un60cns8sp1s/the%20witcher%20lpdl.mkv',
        descripcion: 'Vesemir asesina monstruos por el oro y la gloria, pero cuando se alza una nueva amenaza, se ve obligado a enfrentar los demonios de su pasado.'
    },
    {
        id: 73,
        titulo: 'Pesadilla en el Infierno (2018)',
        genero: 'Terror',
        ano: 2018,
        imagen: 'https://th.bing.com/th/id/OIP.5VGGmqrL8tyD1NufybnEugHaDo?w=287&h=171&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/e762wjywjvwxev1/Pesadilla%20en%20el%20Infierno%20%282018%29%20.mkv',
        descripcion: 'Una madre se reencuentra con sus dos hijas en la vivienda en la que, una noche de hace 16 años, tuvo que defenderlas de una banda de criminales.'
    },
    {
        id: 74,
        titulo: 'Pesadilla en La Calle Elm (1984)',
        genero: 'Terror',
        ano: 1984,
        imagen: 'https://th.bing.com/th/id/OIP.yL6pk56eIFIiRrMJdhu83gHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/mebj0wquj1d480i/Pesadilla%20en%20La%20Calle%20Elm%20%281984%29%20.mkv',
        descripcion: 'Un grupo de adolescentes sufre pesadillas horrendas en las que un ser deforme los persigue.'
    },
    {
        id: 75,
        titulo: 'Pesadilla en La Calle Elm 2: La Venganza de Freddy (1985)',
        genero: 'Terror',
        ano: 1985,
        imagen: 'https://th.bing.com/th/id/OIP.1jtSrfixkz1b0foNeDZnwAHaEK?w=254&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/vq6782dqk741iew/Pesadilla%20en%20La%20Calle%20Elm%202_%20La%20Venganza%20de%20Freddy%20%281985%29%20.mkv',
        descripcion: 'Una familia llega a una casa donde se habían cometido crímenes y el hijo comienza a tener pesadillas horribles.'
    },
    {
        id: 76,
        titulo: 'Pesadilla en La Calle Elm 3: Los Guerreros del Sueño (1987)',
        genero: 'Terror',
        ano: 1987,
        imagen: 'https://th.bing.com/th/id/OIP.g0GVKU2FlNbWOOFij4jFIgHaEK?w=269&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/9qyzzhkj0oknl54/Pesadilla%20en%20La%20Calle%20Elm%203_%20Los%20Guerreros%20del%20Sue%C3%B1o%20%281987%29%20.mkv',
        descripcion: 'Jóvenes que comparten pesadillas similares en una institución se unen para librarse de la influencia de Freddy Krueger.'
    },
    {
        id: 77,
        titulo: 'Pesadilla en La Calle Elm 4: El Amo del Sueño (1988)',
        genero: 'Terror',
        ano: 1988,
        imagen: 'https://th.bing.com/th/id/OIP.Mn5OqBVPrtwzARFVBmpvBQHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/t955dhic2aukpk5/Pesadilla%20en%20La%20Calle%20Elm%204_%20El%20Amo%20del%20Sue%C3%B1o%20%281988%29%20.mkv',
        descripcion: 'Una adolescente usa el poder de sus amigos difuntos para terminar con el reinado de terror de Freddy Krueger.'
    },
    {
        id: 78,
        titulo: 'Pesadilla en La Calle Elm 5: El Niño de Los Sueños (1989)',
        genero: 'Terror',
        ano: 1989,
        imagen: 'https://th.bing.com/th/id/OIP.kUULsO_bYt9dXyjHwgr-1QHaE9?w=295&h=197&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/t955dhic2aukpk5/Pesadilla%20en%20La%20Calle%20Elm%204_%20El%20Amo%20del%20Sue%C3%B1o%20%281988%29%20.mkv',
        descripcion: 'Una joven lucha desesperadamente por proteger el alma de su bebé, aún no nacido, de las garras del cruel Freddy Krueger.'
    },
    {
        id: 79,
        titulo: 'Pesadilla en La Calle Elm 6: La Muerte de Freddy (1991)',
        genero: 'Terror',
        ano: 1991,
        imagen: 'https://th.bing.com/th/id/OIP.APaaQb00G6sVCG1bmvCTIgHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/bbidyng4z21lwak/Pesadilla%20en%20La%20Calle%20Elm%206_%20La%20Muerte%20de%20Freddy%20%281991%29%20.mkv',
        descripcion: 'El hijo de Freddy lucha contra su padre para terminar la propagación de las pesadillas creadas por él a todo el mundo.'
    },
    {
        id: 80,
        titulo: 'Pesadilla en La Calle Elm 7: La Nueva Pesadilla de Wes Craven (1994)',
        genero: 'Terror',
        ano: 1994,
        imagen: 'https://th.bing.com/th/id/OIP.DmevM7xpw0ZeVPb8_9xLtQAAAA?w=186&h=270&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/i25yjm9gilh06fi/Pesadilla%20en%20La%20Calle%20Elm%207_%20La%20Nueva%20Pesadilla%20de%20Wes%20Craven%20%281994%29%20.mkv',
        descripcion: 'Wes Craven vuelve a reunir al elenco original de la película A Nightmare on Elm Street para filmar la última entrega de la saga.'
    },
    {
        id: 81,
        titulo: 'Pesadilla en La Calle Elm 8: El Origen (2010)',
        genero: 'Terror',
        ano: 2010,
        imagen: 'https://th.bing.com/th/id/OIP.V29eBVj8ZcKJTJbxf0pglgHaEG?w=303&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/nr45wpyll8p92oe/Pesadilla%20en%20La%20Calle%20Elm%208_%20El%20Origen%20%282010%29%20.mkv',
        descripcion: 'Durante una cena en el Springwood Diner, Dean Russell cae dormido y se encuentra con un hombre deformado que lo ataca en su sueño.'
    },
    {
        id: 82,
        titulo: 'La Masacre De Texas (1974)',
        genero: 'Terror',
        ano: 1974,
        imagen: 'https://th.bing.com/th/id/OIP._ba3sihvL_AOLbdfKUWuSAAAAA?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/v15fevo5gy58jep/La%20Masacre%20De%20Texas%20%281974%29.mkv',
        descripcion: 'Un grupo de jóvenes se pierde en Texas y termina encontrándose con asesinos dementes que los persiguen con motosierras.'
    },
    {
        id: 83,
        titulo: 'Guerra sin reglas (2024)',
        genero: 'Acción',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP._zwu8s0tfzYlsgtDbcTwIQHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/scl/fi/elei1pieszu4klmpa1z54/Guerra-sin-reglas-2024.mkv?rlkey=40fx5unpyhhspqc25hyh3db7e&st=htt9lsfr&',
        descripcion: 'Esta es una de las mejores peliculas del año 2024, Solo en cines'
    },
    {
        id: 84,
        titulo: 'El cazador de sueños (2003)',
        genero: 'Terror',
        ano: 2003,
        imagen: 'https://th.bing.com/th/id/OIP.QS6WzJe-GFuSdfX4307gwgHaEK?w=267&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/5vfmrtb4hu9kerky6pup1/El-cazador-de-sue-os-2003.mkv?rlkey=wjp9h8bybmuumpefk4o128fsc&st=3lqdu0q9&',
        descripcion: 'Un grupo de jóvenes se encuentra con fuerzas sobrenaturales en el desierto.'
    },
    {
        id: 85,
        titulo: 'Skywalkers una historia de amor (2024)',
        genero: 'Romance',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.v0llLoQRq9incg3TPJNdSAHaEK?w=252&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/wnc0avdn11wi7g5zhtz9g/Skywalkers-una-historia-de-amor-2024.mkv?rlkey=itrqf3e5t1x88ndgby995091x&st=6446xis0&',
        descripcion: 'Una conmovedora historia de amor que trasciende las estrellas.'
    },
    {
        id: 86,
        titulo: 'Amor mentiras y sangre (2024)',
        genero: 'Thriller/Romance',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.4Cel5CgDefeC4Q8ZGFA7_AHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/qjc54b4ywqo3lz4j7cfev/Amor-mentiras-y-sangre-2024.mkv?rlkey=6os2mt9smrus0vbxzbavkwv1r&st=u74dz4xt&',
        descripcion: 'Una historia de amor llena de intrigas y secretos oscuros.'
    },
    {
        id: 87,
        titulo: 'Observados (2024)',
        genero: 'Suspenso',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.P3V2QeEjlSmhHxWTEwA0ZQAAAA?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/scl/fi/649hch9gqis4nagnbra1r/Observados-2024.mkv?rlkey=t4xr5b65uofk69n7x0vckpvt4&st=axc68bog&',
        descripcion: 'Un grupo de amigos se da cuenta de que están siendo vigilados por una fuerza desconocida.'
    },
    {
        id: 88,
        titulo: 'Monkey man El despertar de la bestia (2024)',
        genero: 'Acción/Aventura',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.fbbrf-1Q8lVC3soTfkEYLgHaEK?w=262&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/f1msl2qbbdbvmyjscka2g/Monkey-man-El-despertar-de-la-bestia-2024.mkv?rlkey=zqbhogzxhckxcy422xrdk48ei&st=tq1143sa&',
        descripcion: 'Un héroe inesperado se enfrenta a una antigua bestia que amenaza su hogar.'
    },
    {
        id: 89,
        titulo: 'Canta y no llores (2024)',
        genero: 'Musical/Comedia',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.odkA0Vlje9_tVyslNxqwJwHaDl?w=318&h=169&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/jbqoszdjz5s0v58f49lr6/Canta-y-no-llores-2024.mkv?rlkey=q0j3sbprfzupaatkn9gjwgxyj&st=h719w5zm&',
        descripcion: 'Una divertida comedia musical sobre la amistad y el poder de la música.'
    },
    {
        id: 90,
        titulo: 'Furiosa de la saga mad max (2024)',
        genero: 'Acción/Ciencia Ficción',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.e2C2vriEPJFo2bIbZ7dKnQHaDt?w=306&h=175&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/mfyor649b6txpvspn563z/Furiosa-de-la-saga-mad-max-2024.mkv?rlkey=k4389l85itfuamt665r04o3u2&st=5ttxtu3g&',
        descripcion: 'La historia de Furiosa antes de convertirse en la guerrera que todos conocemos.'
    },
    {
        id: 91,
        titulo: 'Guerra Civil (2024)',
        genero: 'Drama/Acción',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.fUojLMRYWdl4oz4bf3Xh6gHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/sxdy5rmn3x9ovb52y709m/Guerra-Civil-2024.mkv?rlkey=9e36nta2o72sy484qtd7h1j28&st=ui3hiafi&',
        descripcion: 'Un intenso drama sobre los conflictos que dividen a una nación.'
    },
    {
        id: 92,
        titulo: 'Mi querida Oni (2024)',
        genero: 'Fantasía/Aventura',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.tR4iCkpBLAC6E_FHGZ_jygHaEK?w=271&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/14sy71qow8cis2p5o4xvc/Mi-querida-oni-2024.mkv?rlkey=8u5agtt62plpp8jv6z2hb7tqg&st=quo6q38b&',
        descripcion: 'Una joven se embarca en una aventura mágica con un espíritu guardián.'
    },
    {
        id: 93,
        titulo: 'Abigail (2024)',
        genero: 'Fantasía/Aventura',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.8KsGEc970hWkZK4wakLwbAAAAA?w=302&h=175&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/ig05vxvetcoj5d0hd8ehf/Abigail-2024.mkv?rlkey=fnkvowdaootzip6t0os7g9ogu&st=60yh6oz1&',
        descripcion: 'Una historia épica sobre el viaje de una joven para descubrir su verdadero destino.'
    },
    {
        id: 94,
        titulo: 'Dos chicas a la fuga (2024)',
        genero: 'Comedia/Acción',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.ye9rRE_OsK1-tPzD-RHk0AHaEK?w=245&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/0fy4jjxhvthdfc955hfl2/Dos-chicas-a-la-fuga-2024.mkv?rlkey=8rxem87tkl9xp4xn1chbewq9z&',
        descripcion: 'Dos amigas se embarcan en una loca aventura mientras intentan escapar de sus problemas.'
    },
    {
        id: 95,
        titulo: 'Godzilla y Kong el nuevo imperio (2024)',
        genero: 'Acción/Ciencia Ficción',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.0525EkqlGqLSz0c7rnr9YAAAAA?w=273&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/vi8nv8ck073sse6bt0ckh/Godzilla-y-Kong-el-nuevo-imperio-2024.mkv?rlkey=btg3im9gld3wxgmyn2bs2zc5k&st=cpcua50o&',
        descripcion: 'Godzilla y Kong unen fuerzas para enfrentar una nueva amenaza que pone en peligro su mundo.'
    },
    {
        id: 96,
        titulo: 'Godzilla: El Planeta de los Monstruos (2017)',
        genero: 'Animación/Ciencia Ficción',
        ano: 2017,
        imagen: 'https://th.bing.com/th/id/OIP.TfEqmi5TRSDQEj1S0u7xkAHaDt?w=265&h=174&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/fzi8v3h2g2z7e8v/Godzilla%20El%20Planeta%20de%20los%20Monstruos%20%282017%29.mkv',
        descripcion: 'La humanidad regresa a la Tierra para enfrentarse a Godzilla en una batalla épica.'
    },
    {
        id: 97,
        titulo: 'Godzilla II Rey de los monstruos (2019)',
        genero: 'Acción/Ciencia Ficción',
        ano: 2019,
        imagen: 'https://th.bing.com/th/id/OIP.ijmiN8xF_U_OE-lKOHkl6AHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/taf5q0qr0faofb4/Godzilla_%20Rey%20de%20los%20monstruos%20%282019%29%20.mkv',
        descripcion: 'La batalla definitiva entre los titanes se desata cuando Godzilla enfrenta a nuevas amenazas.'
    },
    {
        id: 98,
        titulo: 'Godzilla: Ciudad al filo de la batalla (2018)',
        genero: 'Animación/Ciencia Ficción',
        ano: 2018,
        imagen: 'https://th.bing.com/th/id/R.538648831c0e66ed578f1bfd34849950?rik=OaOl31duT0flNg&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/aatzz54q7cbs3m5/Godzilla%20Ciudad%20al%20filo%20de%20la%20batalla%20%282018%29.mp4',
        descripcion: 'La humanidad lucha por sobrevivir en un mundo dominado por monstruos.'
    },
    {
        id: 99,
        titulo: 'Megalodón (2018)',
        genero: 'Acción/Terror',
        ano: 2018,
        imagen: 'https://th.bing.com/th/id/OIP.qMl3dgSuwCvhsQBaBTVsGwHaEK?w=315&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/yfu4lfh46ckahqu/Megalod%C3%B3n%20%282018%29.mkv',
        descripcion: 'Un grupo de científicos se enfrenta a un antiguo depredador marino que amenaza sus vidas.'
    },
    {
        id: 100,
        titulo: 'Megalodón 2 el gran abismo (2023)',
        genero: 'Acción/Terror',
        ano: 2023,
        imagen: 'https://th.bing.com/th/id/OIP.PXxXWaujSL1tmp6W1oRYBQHaEK?w=267&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/1x8b7qw914a0bplip1fkv/Megalod-n-2-el-gran-abismo-2023.mkv?rlkey=vz038m07sei33t0kn13nzy8fe&',
        descripcion: 'La secuela de Megalodón sigue la lucha por sobrevivir ante un nuevo ataque de este monstruo prehistórico.'
    },
    {
        id: 101,
        titulo: 'La primera profecía (2024)',
        genero: 'Acción/Terror',
        ano: 2024,
        imagen: 'https://th.bing.com/th/id/OIP.CCIgua2kXagqo91Xgqwk4QHaEK?w=259&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/scl/fi/q6rm4gimp6yi9g9jvg1ub/La-primera-profec-a-2024.mkv?rlkey=vvbw4q6d86vyrcwt5o2ks7s6n&st=t5utitf8&',
        descripcion: 'La lucha por el dominio de la Tierra continúa con la llegada de gran Megalodon Rey del Agua'
    },

    {
        id: 102,
        titulo: 'Megamente (2010)',
        genero: 'Animación/Comedia',
        ano: 2010,
        imagen: 'https://th.bing.com/th/id/OIP.eqL3hx06YRkaR-BIeDm8SAHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/dwh9i33u2g8r7a1/Megamente%20%282010%29.mkv',
        descripcion: 'Megamente es un villano que finalmente derrota a su enemigo, el héroe Metroman. Sin embargo, se da cuenta de que sin un rival, su vida carece de propósito. A medida que busca un nuevo desafío, descubre lo que realmente significa ser un héroe.'
    },
    {
        id: 102,
        titulo: 'Rápido Y Furiosos 1 (2001)',
        genero: 'Acción/Crimen',
        ano: 2001,
        imagen: 'https://th.bing.com/th/id/OIP.L8iz80AKbwRcP0PWEepfQQHaEK?w=272&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/m3eindwr4lvgnt9/R%C3%A1pido%20Y%20Furioso%201%20%282001%29.mkv',
        descripcion: 'Un policía encubierto se infiltra en el mundo de las carreras callejeras para atrapar a un grupo de ladrones de camiones. A medida que se adentra en este mundo, desarrolla lazos con los corredores. La lealtad y la traición se entrelazan en esta emocionante historia.'
    },
    {
        id: 103,
        titulo: 'Rápido Y Furiosos 2 (2003)',
        genero: 'Acción/Crimen',
        ano: 2003,
        imagen: 'https://th.bing.com/th/id/R.a09f2aad406602531e07a2e5ace09afc?rik=4lF1bIcSdMWa7g&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/axfm9ljqdv2u0dn/R%C3%A1pido%20Y%20Furioso%202%20%282003%29.mkv',
        descripcion: 'Después de ser liberado de la cárcel, el ex-policía Brian O Conner se une a su amigo Roman Pearce para desmantelar una red de tráfico de drogas.Con carreras de alta velocidad y acción trepidante, deben demostrar su lealtad mientras enfrentan peligros mortales.'
    },
    {
        id: 104,
        titulo: 'Rápido Y Furiosos 3 (2006)',
        genero: 'Acción/Crimen',
        ano: 2006,
        imagen: 'https://th.bing.com/th/id/OIP.J_BAtUVGzFd1EsVA5WacbQHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/aoely0rut7ex602/R%C3%A1pido%20Y%20Furioso%203%20%282006%29.mkv',
        descripcion: 'En Tokio, un joven corredor se enfrenta a la cultura del drift y a un poderoso rival. Al unirse a un grupo de corredores, debe aprender a navegar por un mundo de velocidad y traición. La lealtad se pone a prueba en esta emocionante entrega.'
    },
    {
        id: 105,
        titulo: 'Rápido Y Furiosos 4 (2009)',
        genero: 'Acción/Crimen',
        ano: 2009,
        imagen: 'https://th.bing.com/th/id/OIP.J8Nw6YIoTm5yi9aY4VWhdwHaH1?w=168&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/1d1ia4txdglg85z/R%C3%A1pido%20Y%20Furioso%204%20%282009%29.mkv',
        descripcion: 'Los antiguos amigos Brian O Conner y Dominic Toretto se ven obligados a unirse nuevamente para enfrentar a un peligroso narcotraficante.Con carreras emocionantes y giros inesperados, deben superar sus diferencias para lograr la justicia.'
    },
    {
        id: 106,
        titulo: 'Rápido Y Furiosos 5 (2012)',
        genero: 'Acción/Crimen',
        ano: 2012,
        imagen: 'https://th.bing.com/th/id/R.3835201c6f0a6d226d42e12b173faa3d?rik=qqnwGFxx64HdWQ&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/qcs33zrezp7hrj7/R%C3%A1pido%20Y%20Furioso%205%20%282012%29.mkv',
        descripcion: 'Dominic y su equipo planean un gran golpe en Brasil mientras son perseguidos por un agente federal. Con la adrenalina al máximo, deben ejecutar su plan con precisión. La acción y la camaradería se entrelazan en esta emocionante entrega.'
    },
    {
        id: 107,
        titulo: 'Rápido Y Furiosos 6 (2013)',
        genero: 'Acción/Crimen',
        ano: 2013,
        imagen: 'https://th.bing.com/th/id/OIP.T55lCne1O6i5XimfoN4PNgHaEK?w=253&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/10x66tc8x3218p3/R%C3%A1pido%20Y%20Furioso%206%20%282013%29.mkv',
        descripcion: 'El equipo de Dominic es reclutado para detener a un grupo de criminales que utilizan coches de alta velocidad para perpetrar sus delitos. Con la familia en juego, se enfrentan a desafíos que pondrán a prueba sus habilidades y lealtades.'
    },
    {
        id: 108,
        titulo: 'Rápido Y Furiosos 7 (2015)',
        genero: 'Acción/Crimen',
        ano: 2015,
        imagen: 'https://th.bing.com/th/id/OIP.mfgVqOTMiwFQOXbbcdnEigHaEK?w=291&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/osb23jhz4nb1q4z/R%C3%A1pido%20Y%20Furioso%207%20%282015%29.mkv',
        descripcion: 'Después de la derrota de Owen Shaw, su hermano busca venganza contra Dominic y su equipo. Con una carrera contra el tiempo, deben enfrentarse a un enemigo formidable mientras protegen a sus seres queridos.'
    },
    {
        id: 109,
        titulo: 'Rápido Y Furiosos 8 (2017)',
        genero: 'Acción/Crimen',
        ano: 2017,
        imagen: 'https://th.bing.com/th/id/OIP.iiD_qB4Y7A4sYu9g1M4UDQHaEK?w=237&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        url: 'https://www.dropbox.com/s/imi7mtwg6pr3j26/R%C3%A1pido%20Y%20Furioso%208%20%282017%29.mkv',
        descripcion: 'Cuando un nuevo enemigo aparece, Dom se ve obligado a traicionar a su familia. El equipo debe unirse para detener una amenaza global mientras enfrentan la traición y luchan por la redención.'
    },
    {
        id: 110,
        titulo: 'Rápido Y Furiosos 9 (2021)',
        genero: 'Acción/Crimen',
        ano: 2021,
        imagen: 'https://th.bing.com/th/id/R.cfe09267b74dc3a26889c412f640dddb?rik=O3lBCcUSku2Fvg&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/d10gh0fm0kx55f9/ryf9.mkv',
        descripcion: 'Dom y su equipo enfrentan a un nuevo enemigo que resulta ser el hermano perdido de Dom. Con la familia en juego, deben superar viejos rencores y unirse para salvar el mundo.'
    }, {
        id: 111,
        titulo: 'Rápidos y furiosos X (2023)',
        genero: 'Acción/Crimen',
        ano: 2023,
        imagen: 'https://th.bing.com/th/id/OIP.-g1PtUkmvFf9FkObSuZXUAHaE8?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/t52ue8f3rqwpiw2/R%C3%A1pidos%20y%20Furiosos%20X%20%282023%29.mkv',
        descripcion: 'La familia Toretto se enfrenta a nuevos desafíos globales mientras luchan contra un enemigo formidable. Con carreras de alta velocidad y acción trepidante, deben unirse para proteger lo que más aman. La lealtad y la amistad se ponen a prueba en esta emocionante entrega.'
    },
    {
        id: 112,
        titulo: 'El terror llama a su puerta (1986)',
        genero: 'Terror',
        ano: 1986,
        imagen: 'https://th.bing.com/th/id/R.06a8b6f94cf861c67b9c622380d7b358?rik=6L0rkqs%2f2rgUwQ&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/scl/fi/8dvr9uqoj4noieabfexr3/El-terror-llama-a-su-puerta-1986.mkv?rlkey=81e585kdde0hmexm4rxfcx10f&',
        descripcion: 'Parásitos extraterrestres transforman a sus víctimas en zombis en una ciudad universitaria. A medida que el caos se desata, un grupo de estudiantes debe luchar por sobrevivir. La tensión aumenta mientras intentan descubrir la verdad detrás de la invasión.'
    },
    {
        id: 113,
        titulo: 'Camino hacia el terror (2003)',
        genero: 'Terror',
        ano: 2003,
        imagen: 'https://th.bing.com/th/id/OIP.Ajl3M3gPWRRhyOMl5dd-3QHaEK?rs=1&pid=ImgDetMain',
        url: 'https://www.dropbox.com/s/9puyr433szb6h8t/camino%20hacia%20el%20terror%20%282003%29.mkv',
        descripcion: 'Seis personas quedan atrapadas en un bosque de Virginia y son perseguidas por caníbales desfigurados. La lucha por la supervivencia se convierte en una pesadilla aterradora. Cada decisión puede ser fatal mientras intentan escapar de sus captores.'
    },
    {
        id: 120,
        titulo: 'Batman: El caballero de la noche asciende (2012)',
        genero: 'Acción/Superhéroes',
        ano: 2012,
        imagen: 'https://th.bing.com/th/id/R.68c0810580467cba88b354c011a4f105?rik=6Xji182UCOvr9A&pid=ImgRaw&r=0',
        url: 'https://www.dropbox.com/s/bj3jo6vgpjws2zz/Batman%20El%20caballero%20de%20la%20noche%20asciende%20%282012%29.mkv',
        descripcion: 'Batman regresa para enfrentar una nueva amenaza que pone en peligro Gotham. Con la ayuda de aliados inesperados, debe superar sus propios demonios. La lucha entre el bien y el mal alcanza su clímax en esta emocionante conclusión.'
    },
]
module.exports = BaseDatos; // Asegúrate de que esto esté presente


// export default BaseDatos