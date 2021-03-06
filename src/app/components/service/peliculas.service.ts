import { Injectable } from '@angular/core';

export interface Pelicula {
  nombre: string;
  sipnopsis: string;
  img: string;
  estreno: string;
  genero: string;
  duracion: string;
  pais: string;
  direccion: string;
  reparto: string;
  productora: string;
  distribucion: string;
  trailler?:string,
  idx?: number;
}
@Injectable()
export class PeliculasService {
  private peliculas: Pelicula[] = [
    {
      nombre: 'Avengers',
      sipnopsis:
        'El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.',
      img: 'assets/img/avenger.jpg',
      estreno: '27 de abril de 2012',
      genero: 'Acción, ciencia ficción',
      duracion: '143 minutos',
      pais: 'Estados Unidos',
      direccion: 'Anthony y Joe Russo',
      reparto:
        'Robert Downey Jr. como Tony Stark / Iron Man, Chris Evans como Steve Rogers / Capitán América, Mark Ruffalo como Bruce Banner / Hulk, Chris Hemsworth como Thor, Scarlett Johansson como Natasha Romanoff / Viuda Negra, Jeremy Renner como Clint Barton / Ojo de Halcón, Tom Hiddleston como Loki, Samuel L. Jackson como Nick Fury',
      productora: 'Marvel Studios',
      distribucion: 'Walt Disney Studios Motion Pictures, Paramount Pictures',
      trailler: 'assets/traillers/The Avengers_ Los Vengadores - Tráiler Oficial - Doblado.mp4'
    },
    {
      nombre: 'Avenger End Game',
      sipnopsis:
        'Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.',
      img: 'assets/img/avenger-end-game.jpg',
      estreno: '22 de abril de 2019',
      genero: 'Superhéroes Acción Ciencia ficción',
      duracion: '181 minutos',
      pais: 'Estados Unidos',
      direccion: 'Anthony y Joe Russo',
      reparto:
        "Robert Downey Jr. como Tony Stark / Iron Man, Chris Evans como Steve Rogers / Capitán América, Mark Ruffalo como Bruce Banner / Hulk, Chris Hemsworth como Thor, Scarlett Johansson como Natasha Romanoff / Viuda Negra, Jeremy Renner como Clint Barton / Ojo de Halcón, Tom Hiddleston como Loki, Samuel L. Jackson como Nick Fury, Paul Rudd como Scott Lang / Ant-Man, Brie Larson como Carol Danvers / Capitana Marvel, Don Cheadle como James, 'Rhodey' Rhodes / Máquina de Guerra, Karen Gillan como Nebula, Bradley Cooper como Rocket Raccoon, Josh Brolin como Thanos, Benedict Cumberbatch como el Dr. Stephen Strange, Chadwick Boseman como T'Challa / Black Panther, Elizabeth Olsen como Wanda Maximoff / Scarlet Witch, Tom Holland como Peter Parker / Spider-Man / Iron Spider, Chris Pratt como Peter Quill / Star-Lord, Vin Diesel como Groot",
      productora: 'Marvel Studios',
      distribucion: 'Walt Disney Studios Motion Pictures, Paramount Pictures',
    },

    {
      nombre: 'Avenger Infiniti War',
      sipnopsis:
        'Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.',
      img: 'assets/img/avenger-infinity-war.jpg',
      estreno: '27 de abril de 2018',
      genero: 'Acción, Aventura, Ciencia ficción, Fantasía, Superhéroes',
      duracion: '149 minutos',
      pais: 'Estados Unidos',
      direccion: 'Anthony y Joe Russo',
      reparto:
        "Robert Downey Jr. como Tony Stark / Iron Man, Chris Evans como Steve Rogers / Capitán América, Mark Ruffalo como Bruce Banner / Hulk, Chris Hemsworth como Thor, Scarlett Johansson como Natasha Romanoff / Viuda Negra, Jeremy Renner como Clint Barton / Ojo de Halcón, Tom Hiddleston como Loki, Samuel L. Jackson como Nick Fury, Paul Rudd como Scott Lang / Ant-Man, Brie Larson como Carol Danvers / Capitana Marvel, Don Cheadle como James 'Rhodey' Rhodes / Máquina de Guerra, Karen Gillan como Nebula, Bradley Cooper como Rocket Raccoon, Josh Brolin como Thanos, Benedict Cumberbatch como el Dr. Stephen Strange, Chadwick Boseman como T'Challa / Black Panther, Elizabeth Olsen como Wanda Maximoff / Scarlet Witch, Tom Holland como Peter Parker / Spider-Man / Iron Spider, Chris Pratt como Peter Quill / Star-Lord, Vin Diesel como Groot, Zoe Saldana como Gamora, Paul Bettany como Visión",
      productora: 'Marvel Studios',
      distribucion: 'Walt Disney Studios Motion Pictures, Paramount Pictures',
    },
    {
      nombre: 'Avengers: Age of Ultron',
      sipnopsis:
        'Los Vengadores se reúnen de nuevo y juntan sus fuerzas con las de los recién llegados Quicksilver y Bruja Escarlata para luchar contra un robot maquiavélico llamado Ultrón, el cual Tony Stark creó con el fin de defender la paz, pero resultó defectuoso y ahora pretende exterminar a toda la humanidad.',
      img: 'assets/img/Avengers-Age-of-Ultron-Poster.jpg',
      estreno: '13 de abril de 2015',
      genero: 'Acción, ciencia ficción',
      duracion: '141 minutos',
      pais: 'Estados Unidos',
      direccion: 'Anthony y Joe Russo',
      reparto:
        'Robert Downey Jr. como Tony Stark / Iron Man, Chris Evans como Steve Rogers / Capitán América, Mark Ruffalo como Bruce Banner / Hulk, Chris Hemsworth como Thor, Scarlett Johansson como Natasha Romanoff / Viuda Negra, Jeremy Renner como Clint Barton / Ojo de Halcón, Tom Hiddleston como Loki, Samuel L. Jackson como Nick Fury, Aaron Taylor-Johnson como Pietro Maximoff / Quicksilver, Elizabeth Olsen como Wanda Maximoff / Bruja Escarlata, Paul Bettany como J.A.R.V.I.S. y Visión, Cobie Smulders como Maria Hill, Anthony Mackie como Sam Wilson / Falcon, James Spader como Ultrón',
      productora: 'Marvel Studios',
      distribucion: 'Walt Disney Studios Motion Pictures, Paramount Pictures',
    },
    {
      nombre: 'Forrest Gump',
      sipnopsis:
        'Forrest Gump, un joven sureño, tenaz e inocente, es protagonista de acontecimientos cruciales en la historia de los Estados Unidos.',
      img: 'assets/img/forrest-gump.jpg',
      estreno: '1994',
      genero: 'Comedia, Drama',
      duracion: '142 minutos',
      pais: 'Estados Unidos',
      direccion: 'Robert Zemeckis',
      reparto:
        'Tom Hanks, Robin Wright, Gary Sinise, Mykelti Williamson, Sally Field, Michael Conner,  Humphreys',
      productora: 'Paramount Pictures',
      distribucion: 'Paramount Pictures',
    },
    {
      nombre: 'The Hobbit: An Unexpected Journey',
      sipnopsis:
        'Bilbo Bolsón lleva una vida sencilla con sus compañeros hobbits en la comarca, hasta que el mago Gandalf llega y lo convence de unirse a un grupo de enanos para recuperar el reino de Erebor. El viaje lleva a Bilbo en un camino a través de tierras peligrosas llenas de orcos, goblins y otras amenazas, además de su encuentro con Gollum y un sencillo anillo de oro que está unido al destino de la Tierra Media de una forma que Bilbo no puede imaginarse.',
      img: 'assets/img/hobbit.jpg',
      estreno: '28 de noviembe del 2012',
      genero: 'Aventuras, Fantasía, heroica, Acción, Drama',
      duracion: '169 minutos',
      pais: 'Nueva Zelanda, Estados Unidos',
      direccion: 'Peter Jackson',
      reparto:
        'Ian Mckellen, Martin Freeman, Richard Armitage, James Nesbitt, Ken Stott, Sylvester McCoy, Barry Humphries, Cate Blanchett, Ian Holm, Christopher Lee, Hugo Weaving, Elijah Wood,Andy Serkis',
      productora: '	Metro-Goldwyn-Mayer, New Line Cinema, Wingnut Films',
      distribucion: 'Warner Bros. Pictures',
    },
    {
      nombre: 'The Hobbit: La desolación de Smaug',
      sipnopsis:
        'El Hobbit: la desolación de Smaug narra la continuación de la aventura de Bilbo Baggins en su periplo junto al mago Gandalf y trece Enanos liderados por Thorin Escudo de Roble, en una épica búsqueda para recuperar la Montaña Solitaria y el Reino Enano de Erebor.',
      img: 'assets/img/hobbit-2.jpg',
      estreno: '13 de diciembe del 2013',
      genero: 'Aventuras, Fantasía, heroica, Acción, Drama',
      duracion: '161 minutos',
      pais: 'Nueva Zelanda, Estados Unidos',
      direccion: 'Peter Jackson',
      reparto:
        'Ian Mckellen,Martin Freeman,Richard Armitage, Benedict Cumberbatch, Evangeline Lilly, Lee Pace, Luke Evans, Stephen Fry, Ken Stott, James Nesbitt, Orlando Bloom',
      productora: '	Metro-Goldwyn-Mayer, New Line Cinema, Wingnut Films',
      distribucion: 'Warner Bros. Pictures',
    },
    {
      nombre: 'The Hobbit: La batalla de los 5 ejercitos',
      sipnopsis:
        'Mientras Smaug lanza su ira ardiente contra los ciudadanos de la Ciudad del Lago, Sauron envía legiones de orcos a atacar la Montaña Solitaria. La Tierra está en peligro cuando hombres, enanos y elfos deben decidir si se unen o son destruidos.',
      img: 'assets/img/hobbit-3.jpg',
      estreno: '2014',
      genero: 'Aventuras, Fantasía, heroica, Acción, Drama',
      duracion: '144 minutos',
      pais: 'Nueva Zelanda, Estados Unidos',
      direccion: 'Peter Jackson',
      reparto:
        "Ian Mckellen, Martin Freeman, Richard Armitage, Evangeline Lilly, Luke Evans,Lee Pace, Benedict Cumberbatch, Ken Stott, Aidan Turner, Dean O'Gorman, Billy Connolly, Graham McTavish, James Nesbitt, Stephen Fry, Ryan Gage, Cate Blanchett, Ian Holm, Christopher Lee, Hugo Weaving,Orlando Bloom",
      productora: '	Metro-Goldwyn-Mayer, New Line Cinema, Wingnut Films',
      distribucion: 'Warner Bros. Pictures',
    },
    {
      nombre: 'Iron Man',
      sipnopsis:
        'Un empresario millonario construye un traje blindado y lo usa para combatir el crimen y el terrorismo.',
      img: 'assets/img/iron-man.jpg',
      estreno: '30 de abril del 2008',
      genero: 'Acción, Ciencia Ficción',
      duracion: '126 minutos',
      pais: 'Estados Unidos',
      direccion: 'Jon Favreau',
      reparto:
        'Robert Downey Jr., Terrence Howard, Gwyneth Paltrow, Shaun Toub, Paul Bettany, Jeff Bridges',
      productora: '	Malver Studios',
      distribucion: 'Paramount Pictures',
    },
    {
      nombre: 'Iron Man 2',
      sipnopsis:
        'Con el mundo ahora consciente de que él es Iron Man, el millonario inventor Tony Stark debe forjar nuevas alianzas y confrontar a un enemigo nuevo y poderoso.',
      img: 'assets/img/iron-man-2.jpg',
      estreno: '26 de abril del 2010',
      genero: 'Acción, Ciencia Ficción',
      duracion: '124 minutos',
      pais: 'Estados Unidos',
      direccion: 'Jon Favreau',
      reparto:
        'Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Scarlett Johansson, Sam Rockwell, Paul Bettany, Mickey Rourke, Samuel L. Jackson',
      productora: '	Malver Studios',
      distribucion: 'Paramount Pictures',
    },

    {
      nombre: 'Iron Man 3',
      sipnopsis:
        'El descarado y brillante Tony Stark, tras ver destruido todo su universo personal, debe encontrar y enfrentarse a un enemigo cuyo poder no conoce límites. Este viaje pondrá a prueba su entereza una y otra vez, y le obligará a confiar en su ingenio.',
      img: 'assets/img/iron-man-3.jpg',
      estreno: '14 de abril del 2013',
      genero: 'Acción, Ciencia Ficción',
      duracion: '131 minutos',
      pais: 'Estados Unidos',
      direccion: 'Shane Black',
      reparto:
        'Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Guy Pearce, Rebecca Hall, Stéphanie Szostak, James Badge Dale, Jon Favreau, Ben Kingsley',
      productora: '	Malver Studios',
      distribucion: 'Paramount Pictures',
    },

    {
      nombre: 'The Joker',
      sipnopsis:
        'Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.',
      img: 'assets/img/joker.jpeg',
      estreno: '31 de agosto del 2019',
      genero: 'Drama, Suspenso, Crimen',
      duracion: '122 minutos',
      pais: 'Estados Unidos',
      direccion: 'Todd Phillips',
      reparto:
        'Joaquin Phoenix,Robert De Niro, Zazie Beetz, Frances Conroy,Brett Cullen, Glenn Fleshler, Bill Camp, Shea Whigham, Marc Maron',
      productora:
        'DC Films, Village Roadshow Pictures, Bron Creative, Joint Effort Productions, Sikelia Productions',
      distribucion: 'Warner Bros. Pictures',
    },

    {
      nombre: 'The Joker',
      sipnopsis:
        'Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.',
      img: 'assets/img/joker.jpeg',
      estreno: '31 de agosto del 2019',
      genero: 'Drama, Suspenso, Crimen',
      duracion: '122 minutos',
      pais: 'Estados Unidos',
      direccion: 'Todd Phillips',
      reparto:
        'Joaquin Phoenix,Robert De Niro, Zazie Beetz, Frances Conroy,Brett Cullen, Glenn Fleshler, Bill Camp, Shea Whigham, Marc Maron',
      productora:
        'DC Films, Village Roadshow Pictures, Bron Creative, Joint Effort Productions, Sikelia Productions',
      distribucion: 'Warner Bros. Pictures',
    },

    {
      nombre: 'El Señor De Los Anillos: La Comunidad Del Anillo',
      sipnopsis:
        'Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único, capaz de otorgar un poder ilimitado al que la posea, con la finalidad de destruirlo. Sin embargo, fuerzas malignas muy poderosas quieren arrebatárselo.',
      img: 'assets/img/TLOTR-comunidad-anillo.jpg',
      estreno: '2001',
      genero: 'Aventuras, Fantasia, Épica',
      duracion: '178 minutos',
      pais: 'Nueva Zelanda',
      direccion: 'Peter Jackson',
      reparto:
        'Elijah Wood, Ian McKellen, Liv Tyler, Viggo Mortensen, Sean Astin, Cate Blanchett, John Rhys-Davies, Billy Boyd, Dominic Monaghan, Orlando Bloom, Sean Bean, Ian Holm',
      productora: 'WingNut Films The Saul Zaentz Company',
      distribucion: 'New Line Cinema',
    },

    {
      nombre: 'El Señor De Los Anillos: Las Dos Torres',
      sipnopsis:
        'Gollum guía a Frodo y Sam a Mordor mientras Aragorn y sus compañeros defienden a Rohan del bestial ejército de Saruman.',
      img: 'assets/img/TLOTR-2-torres.jpg',
      estreno: '2002',
      genero: 'Aventuras, Fantasia, Épica',
      duracion: '172  minutos',
      pais: 'Nueva Zelanda',
      direccion: 'Peter Jackson',
      reparto:
        '	Elijah Wood, Ian McKellen, Liv Tyler, Viggo Mortensen, Sean Astin, John Rhys-Davies, Christopher Lee, Orlando Bloom, Miranda Otto, Andy Serkis',
      productora: 'WingNut Films The Saul Zaentz Company',
      distribucion: 'New Line Cinema',
    },

    {
      nombre: 'El Señor De Los Anillos: El Retorno Del Rey',
      sipnopsis:
        'Frodo, Sam y Gollum se acercan al monte del Destino, donde destruirán el anillo o perecerán en el intento. Mientras, Aragorn y sus compañeros se enfrentan a las monstruosas tropas de Sauron.',
      img: 'assets/img/TLOTR-el-retorno-del-rey.jpg',
      estreno: '17 de diciembre del 2003',
      genero: 'Aventuras, Fantasia, Épica',
      duracion: '201  minutos',
      pais: 'Nueva Zelanda',
      direccion: 'Peter Jackson',
      reparto:
        'Elijah Wood, Ian McKellen, Liv Tyler, Viggo Mortensen, Sean Astin, Andy Serkis',
      productora: 'WingNut Films The Saul Zaentz Company',
      distribucion: 'New Line Cinema',
    },

    {
      nombre: 'Venom',
      sipnopsis:
        'El periodista Eddie Brock está investigando a Carlton Drake, el célebre fundador de Life Foundation. Brock establece una simbiosis con un ente alienígena que le ofrece superpoderes, pero el ser se apodera de su personalidad y lo vuelve perverso.',
      img: 'assets/img/Venom.jpg',
      estreno: '5 de octubre del 2018',
      genero: 'Acción, Ciencia ficción, Superhéroes',
      duracion: '112  minutos',
      pais: 'Estados Unidos',
      direccion: 'Ruben Fleischer',
      reparto:
        'Tom Hardy, Michelle Williams, Riz Ahmed, Scott Hazem, Reid Scott',
      productora:
        'Columbia Pictures Marvel Entertainment Arad Productions, Inc. Tencent Pictures Matt Tolmach Productions Pascal Pictures',
      distribucion: 'Sony Pictures Releasing',
    },

    {
      nombre: 'X-men: Apocalipse',
      sipnopsis:
        'Apocalipsis, el mutante más poderoso, despierta tras miles de años de letargo y pretende destruir a toda la humanidad. Para lograrlo, recluta a un equipo de peligrosos mutantes, encabezados por Magneto. Sólo un grupo de jóvenes mutantes, dirigidos por el Profesor X y Mística, podrán impedirlo.',
      img: 'assets/img/X-MEN APOCALIPSE.jpg',
      estreno: '27 de mayo del 2016',
      genero: 'Acción, Ciencia ficción, Superhéroes',
      duracion: '2h 14 minutos',
      pais: 'Estados Unidos',
      direccion: 'Bryan Singer',
      reparto:
        'James McAvoy, Michael Fassbender, Jennifer Lawrence, Rose Byrne, Oscar Isaac, Nicholas Hoult, Evan Peters, Tye Sheridan, Sophie Turner, Olivia Munn,Lucas Till',
      productora:
        "The Donners' Company Bad Hat Harry Productions Kinberg Genre TSG Entertainment Marvel Entertainment",
      distribucion: '20th Century Fox',
    },
  ];
  constructor() {
    console.log(this.peliculas);
  }

  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }

  getPelicula(idx: string) {
    return this.peliculas[idx];
  }

  buscarPeliculas(termino: string): Pelicula[] {
    let peliculasArr: Pelicula[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.peliculas.length; i++) {
      let pelicula = this.peliculas[i];
      let nombre = pelicula.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        pelicula.idx = i;
        peliculasArr.push(pelicula);
      }
    }
    return peliculasArr;
  }
}
