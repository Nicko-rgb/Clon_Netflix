const dataComedia =[
    {
        id:1,
        nombre:"Scary Movie (2000)",
        url:"https://www.dropbox.com/s/nedhf5p7lkf9vhd/Scary%20Movie%20%282000%29%20.mkv",
        descripcion:"Una parodia de los filmes de asesinatos donde un homicida vengativo acecha a un grupo de adolescentes."
    },
    {
        id:2,
        nombre:"Scary Movie 2 (2001)",
        url:"https://www.dropbox.com/s/whh2bxwvu66zb5z/Scary%20Movie%202%20Otra%20pel%C3%ADcula%20de%20miedo%20%282011%29.mkv",
        descripcion:"Un profesor engaña a cuatro adolescentes y los hace visitar una mansión hechizada para estudiar el sueño."
    },
    {
        id:3,
        nombre:"Scary Movie 3 (2003)",
        url:"https://www.dropbox.com/s/ye77vja6lyrsb93/Scary%20Movie%203%20%282003%29%20.mkv",
        descripcion:"En su afán de encontrar una noticia que impulse su carrera, la periodista Cindy Campbell descubre que la Tierra está amenazada por una serie de hechos terroríficos. La joven debe luchar para evitar que el mal se apodere del mundo otra vez."
    },
    {
        id:4,
        nombre:"Scary Movie 4 (2006)",
        url:"https://www.dropbox.com/s/apm5ih61yzoq89s/Scary%20Movie%204%20%282006%29%20.mkv",
        descripcion:"Cindy Campbell y su alocada y sexi amiga Brenda, hacen equipo con el apuesto, pero inepto Tom Ryan, para salvar al mundo de una violenta invasión extraterrestre, con parodias de películas famosas como War of the Worlds, Saw II, Million Dollar Baby y The Village. Entre las celebridades se incluyen a Carmen Electra, Shaquille O'Neal, Dr. Phil McGraw, Bill Pullman, Molly Shannon y Michael Madsen."
    },
    {
        id:5,
        nombre:"Scary Movie 5 (2013)",
        url:"https://www.dropbox.com/s/ode22tt8chlqjt9/Scary%20Movie%205%20%282013%29%20.mkv",
        descripcion:"Dan y Jody empiezan a observar fenómenos extraños en su casa tras volver del hospital con su bebé. La pareja descubre que está siendo acosada por una presencia demoníaca y con la ayuda de expertos cualificados intentarán deshacerse del maléfico ser."
    },
    {
        id:6,
        nombre:"Son como niños (2010)",
        url:"https://www.dropbox.com/s/afowdoqemmayc8s/Son%20como%20ni%C3%B1os%20%282010%29%20.mkv",
        descripcion:"Un grupo de amigos y excompañeros descubren que envejecer no siempre significa madurar cuando se reúnen para honrar la memoria de su entrenador de baloncesto."
    },
    {
        id:7,
        nombre:"Son como niños 2 (2013)",
        url:"https://www.dropbox.com/s/o70sh7gs4tnna0y/Son%20como%20ni%C3%B1os%202%20%282013%29%20.mkv",
        descripcion:"Tres años después de la reunión que volvió a unirlo a sus amigos de la infancia, Lenny Feder regresa junto a su familia a su pueblo natal para poder estar más cerca de sus amigos."
    },
    {
        id:8,
        nombre:"Y donde estan las rubias (2004)",
        url:"https://www.dropbox.com/s/t44d6pqzq2aibn5/Y%20donde%20estan%20las%20rubias%20%282004%29.mkv",
        descripcion:"Dos torpes agentes del FBI se hacen pasar por dos chicas de la alta sociedad para investigar una serie de secuestros. No obstante, mientras preparan su plan, descubren que irrumpir en la clase privilegiada es mucho más duro de lo que creían."
    },
    {
        id:9,
        nombre:"Chiquito pero poderoso (2006)",
        url:"https://www.dropbox.com/s/ozgmfd5n60ysgsa/Little%20Man%20%282006%29.mkv",
        descripcion:"Un pequeño fugitivo de la ley finge ser un niño para poder llegar hasta una gema robada que está oculta en la bolsa de una mujer."
    },
    {
        id:10,
        nombre:"Shaolin Soccer (2001)",
        url:"https://www.dropbox.com/s/dlvrkwhghixxqha/Shaolin%20Soccer%20%282001%29.mkv",
        descripcion:"Durante toda su vida, un hombre normal y corriente ha sido ninguneado. Sin embargo, nunca ha dejado de creer que todos los problemas del mundo podrían arreglarse con un poco de kung-fu. Convencido de sus ideas, se alía con una banda de inadaptados, seis amigos que fueron maestros de kung-fu en su juventud, para formar un equipo de fútbol y participar en una competición. Juntos pondrán en práctica sus talentos ocultos en un terreno totalmente nuevo, cambiando el fútbol para siempre."
    },
    {
        id:11,
        nombre:"El ascenso de las tortugas Ninja (2022)",
        url:"https://www.dropbox.com/s/tai6innccjzmjw0/El%20ascenso%20de%20las%20tortugas%20Ninja%20%282022%29.mkv",
        descripcion:"Un extraño llamado Casey Jones llega del futuro para advertir a los mutantes de una inminente invasión de la fuerza alienígena más peligrosa de la galaxia: los Krang."
    },
    {
        id:12,
        nombre:"Tortugas Ninja caos mutante (2023)",
        url:"https://www.dropbox.com/scl/fi/mvww9xrsf241wxscfy4tb/Tortugas-Ninja-caos-mutante-2023.mkv?rlkey=45gouv2nuau6j17jyen0pjueq&",
        descripcion:"Tras pasar años ocultándose, los hermanos tortuga quieren ganarse el corazón de los neoyorquinos con la ayuda de su nueva amiga, April, quien colabora con ellos en la lucha contra unos criminales. Sin embargo, terminan enfrentándose a mutantes."
    },
    {
        id:13,
        nombre:"Bad Boys (1995)",
        url:"https://www.dropbox.com/s/l23rvbdarnckhmp/Bad%20Boys%20%281995%29%20.mkv",
        descripcion:"Dos policías de Miami tienen 72 horas para encontrar 100 millones de dólares en heroína robada del almacén de evidencias de su comisaría, pero, para lograrlo, deben intercambiar sus identidades."
    },
    {
        id:14,
        nombre:"Bad Boys 2 (2003)",
        url:"https://www.dropbox.com/s/rgud7d9h9h8bmxz/Bad%20Boys%202%20%282003%29%20.mkv",
        descripcion:"Los detectives Mike Lowrey y Marcus Burnett tratan de detener a un narcotraficante que está inundando de éxtasis las calles de Miami y, para lograrlo, cuentan esta vez con la ayuda de alguien muy especial: la hermana de Marcus."
    },
    {
        id:15,
        nombre:"Bad Boys para siempre (2020)",
        url:"https://www.dropbox.com/s/cp622ylpql2u10b/Bad%20Boys%20para%20siempre%20%282020%29%20.mkv",
        descripcion:"Los veteranos agentes Mike Lowery y Marcus Burnett vuelven a colaborar para detener a Armando Armas, el violento líder de un cartel de la droga afincado en Miami. En esta ocasión, los apoya el equipo AMMO, un grupo de élite del Departamento de Policía de Miami."
    },
    {
        id:16,
        nombre:"Spiderman a través del spider verso (2023)",
        url:"https://www.dropbox.com/scl/fi/s1kyoa993ojl0segyn3ur/Spiderman-a-trav-s-del-spider-verso-2023.mkv?rlkey=hhq7j3eps6my58gmy13yzx4bn&",
        descripcion:"Después de reunirse con Gwen Stacy, el amigable vecino de tiempo completo de Brooklyn Spiderman, es lanzado a través del multiverso, donde se encuentra a un equipo de gente araña encomendada con proteger su mera existencia."
    },
    {
        id:17,
        nombre:"El Gato con Botas El último deseo (2022)",
        url:"https://www.dropbox.com/s/s4003uqyqcd7oyt/El%20gato%20con%20botas%20el%20%C3%BAltimo%20deseo%20%282022%29.mkv",
        descripcion:"El Gato con Botas descubre que, debido a su pasión por la aventura, ha gastado ya 8 de sus 9 vidas. Por tanto, emprende un peligroso viaje en busca del legendario Último Deseo para solicitar que le restauren las vidas que ya perdió."
    },
    {
        id:18,
        nombre:"El gato con botas (2011)",
        url:"https://www.dropbox.com/s/129amaxh8dwzzgm/El%20gato%20con%20botas%20%282011%29.mkv",
        descripcion:"El famoso gato tiene la aventura de su vida cuando une fuerzas con Humpty Dumpty y la gata Kitty para robarse al ganso de los huevos de oro."
    },
    {
        id:19,
        nombre:"Shrek (2001)",
        url:"https://www.dropbox.com/s/x8ky43bombl0s1o/Shrek%20%282001%29.mkv",
        descripcion:"Un ogro llamado Shrek vive en su pantano, pero su preciada soledad se ve súbitamente interrumpida por la invasión de los ruidosos personajes de los cuentos de hadas. Todos fueron expulsados de sus reinos por el malvado Lord Farquaad. Decidido a salvar su hogar, Shrek hace un trato con Farquaad y se prepara para rescatar a la princesa Fiona, quien será la esposa de Farquaad."
    },
    {
        id:20,
        nombre:"Shrek 2 (2004)",
        url:"https://www.dropbox.com/s/ra87ty17hsij189/Shrek%202%20%282004%29.mkv",
        descripcion:"En esta ocasión, Shrek debe enfrentarse al mayor de los problemas que se podía imaginar: conocer a sus suegros"
    },
    {
        id:21,
        nombre:"Shrek 3 (2007)",
        url:"https://www.dropbox.com/s/fq15i7ncczcz6xk/Shrek%203%20%282007%29.mkv",
        descripcion:"Cuando el Rey Harold enferma, Shrek y la Princesa Fiona descubren que tendrán que dirigir la Tierra Muy Muy Lejana a menos que puedan encontrar al Príncipe Artie, el verdadero heredero, y llevarlo a casa. Desafortunadamente, no tiene interés en ser rey; no obstante, Shrek, Burro y el Gato con Botas planean recuperarlo. Mientras tanto, la Princesa Fiona le pide ayuda a sus compañeras heroínas para alejar del trono al Príncipe Encantador."
    },
    {
        id:22,
        nombre:"Shrek 4 (2010)",
        url:"https://www.dropbox.com/s/owevn97gm6bbcdf/Shrek%204%20%282010%29.mkv",
        descripcion:"Instalado en su vida matrimonial y totalmente domesticado, Shrek empieza a extrañar los días en los que él se sentía como un verdadero ogro. Engañado para firmar un contrato con el tortuoso Rumpelstiltskin, él se encuentra a sí mismo en una versión alterna de Muy Muy Lejano, donde los ogros son cazados, Rumpelstiltskin manda, y él y Fiona nunca se conocieron. Shrek debe hallar la forma de cancelar el contrato para restaurar su mundo y reclamar su amor verdadero"
    },


]

export default dataComedia