import { Blog, listOfObjects } from "./bloggModule";

export class Post {
  id: string;
  title: string;
  text: string;
  date: string;
  blogId: Blog;
  constructor(
    id: string,
    title: string,
    text: string,
    date: string,
    blogId: Blog
  ) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.date = date;
    this.blogId = blogId;
  }
}

export let listOfPost: Post[] = [];

//
// TILL BLOGG 1
//

let postOne: Post = new Post(
  "1",
  "Inlägg nr 1",
  "Smarta tipsen för att klara dig fram till nästa lön Januari brukar kallas den fattigaste månaden på året. Klassiska tips för att överleva är att dra ner på småkostnader och se över matkontot. Sparekonomen Sharon Lavie kan ge dig flera tips för hur du ska göra för att överleva hela jan",
  "",
  listOfObjects[0]
);
let postTwo: Post = new Post(
  "1",
  "Inlägg nr 2",
  "Smittspridningen av coronaviruset fortsätter att öka runt om i världen. TV4 Nyheternas utrikesreporter Petra Nordlund McGahan rapporterade direkt från Storbritannien och tokyobon Anton Wörmann från Japan.",
  "",
  listOfObjects[0]
);
let postThree: Post = new Post(
  "1",
  "Inlägg nr 3",
  "Varför är det så svårt att hålla en hälsosam vikt och leva i harmoni med våra kroppar? Storbritanniens mest kända läkare, Rangan Chatterjee ger svaren och lösningarna i sin nya bok Viktbalansen.",
  "",
  listOfObjects[0]
);
let postFour: Post = new Post(
  "1",
  "Inlägg nr 4",
  "Oro för ökad smitta efter jul: 'Funkar inte att hålla avstånd i skolan', Lärarna oroliga",
  "",
  listOfObjects[0]
);
let postFive: Post = new Post(
  "1",
  "Inlägg nr 5",
  "Den ryska björnen har ställt sig på bakbenen och viftar varnande med tassarna. Hur rädd ska man vara för hoten från Moskva? Ganska ängslig är jag rädd.",
  "",
  listOfObjects[0]
);
let postSix: Post = new Post(
  "1",
  "Inlägg nr 6",
  "Ett av journalistikens mål är att ge röst till människor. Så vad händer med den - och samhället - när få vill eller vågar tala?",
  "",
  listOfObjects[0]
);
let postSeven: Post = new Post(
  "1",
  "Inlägg nr 7",
  "I slutet av tonåren arbetade jag, liksom uppskattningsvis 25 procent av alla svenska småstadstjejer då, på pub i London. Det var en utmärkt skola för att lära känna engelsmännen i sitt naturliga habitat. Som svensk avnjuter man en rad positiva fördomar i Storbritannien, men det gällde förstås inte alla i pubens personalflora, som nästan uteslutande bestod av unga utlänningar. Östeuropéer sågs på med skepsis redan då.",
  "",
  listOfObjects[0]
);
let postEight: Post = new Post(
  "1",
  "Inlägg nr 8",
  "För några veckor sedan skulle jag bjuda två ruggade journalistveteraner och en vacker redigerare på lunch. Jag ville inte att det skulle vara för enkelt men heller inte tillgjort flott och valde därför järnvägsrestaurangen Luzette på Stockholms Central, en riktig krog med vita dukar och bordsservering och samtidigt med atmosfär av resa och äventyr. Bara ljudet av tågvisslor fattas.",
  "",
  listOfObjects[0]
);
let postNine: Post = new Post(
  "1",
  "Inlägg nr 9",
  "Jag chattade med en vän om min besvikelse efter de två första avsnitten av And just like that …. Det har visserligen gått nästan 20 år sen Sex and the city gick men jag tyckte Carrie, Miranda och Charlotte inte stod att känna igen. Min kompis skrev: ”Jag har tänkt en del på irritationen över att huvudpersonerna stelnat och blivit töntiga. Tydligen har folk ingen realistisk syn på åldrande.”",
  "",
  listOfObjects[0]
);
let postTen: Post = new Post(
  "1",
  "Inlägg nr 10",
  "Ghislaine Maxwell har, till skillnad från sin forne pojkvän och mentor i sexualbrottslighet Jeffrey Epstein, inte haft den goda smaken att ta livet av sig. Det måste ha gjort en hel drös med andra i hennes och Epsteins umgängeskrets – däribland Bill Clinton, Tony Blair, Donald Trump och prins Andrew – ganska nervösa.",
  "",
  listOfObjects[0]
);

listOfPost.push(
  postOne,
  postTwo,
  postThree,
  postFour,
  postFive,
  postSix,
  postSeven,
  postEight,
  postNine,
  postTen
);

//
// TILL BLOGG 2
//

let postOneTwo: Post = new Post(
  "2",
  "Post nr 1",
  "I totally didn’t expect this look to end up so glittery and pink, but hey, it’s Friday, so might as well, right? I’m using the new Rare Beauty products I picked up earlier this week! As you can see, the Discovery Eyeshadow Palette in True to Myself leans very warm. Not my usual style as of late (I’ve been really into cool tones), but I’m having fun with it.",
  "",
  listOfObjects[1]
);
let postTwoTwo: Post = new Post(
  "2",
  "Post nr 2",
  "Yesterday I had a DAY (work has been a little challenging), so I did some therapy of the retail variety at Sephora! I picked up some products from Rare Beauty, a vegan and cruelty-free makeup line by actress, singer (and cooking show host!) Selena Gomez.",
  "",
  listOfObjects[1]
);
let postThreeTwo: Post = new Post(
  "2",
  "Post nr 3",
  "I’ve been hesitant to post any FOTD’s lately because I don’t feel like the makeup I wear on a daily basis is fancy enough. Most of the looks I’ve been wearing are in the “five minute makeup range” these days, but ya know what? I figure I can’t be the only person out there who loves fast, fresh real-life looks. Like, I just got off a video call 15 minutes ago and this was the makeup I was wearing! Hello, real life. So here we go!",
  "",
  listOfObjects[1]
);
let postFourTwo: Post = new Post(
  "2",
  "Post nr 4",
  "Another makeup item of note: for a quick hit of color on your cheeks, load up your blush brush with bronzer and blush. I just take my blush brush and dip it into both pans and then swirl the mix onto my apples. It’s the fastest way for me to get a good amount of color on my face without having to deal with layering and blending. Here I mixed Laura Mercier Blush in Rose with MAC Mineralize Skinfinish in Give Me Sun.",
  "",
  listOfObjects[1]
);
let postFiveTwo: Post = new Post(
  "2",
  "Post nr 5",
  "I’m about to jump on my second video meeting of the day! How’s your Tuesday going? Your friendly neighborhood beauty addict,",
  "",
  listOfObjects[1]
);
let postSixTwo: Post = new Post(
  "2",
  "Post nr 6",
  "Climate change is real, and Tabs the Cat Industries, LLC is doing something about it. It’s a common misconception that Elon Musk’s SpaceX pioneered VTOL (vertical takeoff and landing) rocket technology with the Falcon 9, but it was actually Tabs who came up with the original idea.",
  "",
  listOfObjects[1]
);
let postSevenTwo: Post = new Post(
  "2",
  "Post nr 7",
  "Happy new year, my friend! Along with all the usual wishes for the new year (good luck, good health and all the good things), I hope 2022 treats you with tenderness.",
  "",
  listOfObjects[1]
);
let postEightTwo: Post = new Post(
  "2",
  "Post nr 8",
  "On the beauty front, I hope your makeup bag runneth over with pieces that bring smiles to the corners of your eyes. I hope you find a signature scent that encapsulates your soaring spirit. I hope you find a lipstick and blush combo that lights up your sweet face.",
  "",
  listOfObjects[1]
);
let postNineTwo: Post = new Post(
  "2",
  "Post nr 9",
  "On this last day of 2021, truth be told I’m not feeling the usual sense something ending and something new beginning. In the effort to impart a sense of newness for 2022, today I plan to a few beauty things so I can at least try a little to feel like I’m starting fresh, and yes, of course I have a list!",
  "",
  listOfObjects[1]
);
let postTenTwo: Post = new Post(
  "2",
  "Post nr 10",
  "I still love playing with makeup, of course, but lately I haven’t been wearing as much. Baking and cooking used to be my hobbies, too, but now those things feel like chores since I’m the one in our house who usually feeds everyone. Side note: I can’t remember what it’s like to have food just show up miraculously for breakfast, lunch and dinner. It must’ve been magical!",
  "",
  listOfObjects[1]
);

listOfPost.push(
  postOneTwo,
  postTwoTwo,
  postThreeTwo,
  postFourTwo,
  postFiveTwo,
  postSixTwo,
  postSevenTwo,
  postEightTwo,
  postNineTwo,
  postTenTwo
);

//
// TILL BLOGG 3
//

let postOneThree: Post = new Post(
  "3",
  "Inlägg nr 1",
  "Hej då svarta uniformen från höst och vinter. Under vår och sommar så är det vitt – från topp till tå eller som ett statement-plagg, som är säsongens måste.",
  "",
  listOfObjects[2]
);
let postTwoThree: Post = new Post(
  "3",
  "Inlägg nr 2",
  "Eftersom vi bor i kalla Svergie så är varma kläder ett måste! Årest måste är absolut 'pufferjacket'. Allt ifrån långa till korta, svarta till röda",
  "",
  listOfObjects[2]
);
let postThreeThree: Post = new Post(
  "3",
  "Inlägg nr 3",
  "Höga svart boots är något alla kvinnor borde ha i garderoben. Har man tjocka vader är det bara just to bad.",
  "",
  listOfObjects[2]
);
let postFourThree: Post = new Post(
  "3",
  "Inlägg nr 4",
  "Årest klädkedjor 2021 är: Acne, Arket, H&M, Zara och Weekday ",
  "",
  listOfObjects[2]
);
let postFiveThree: Post = new Post(
  "3",
  "Inlägg nr 5",
  "Sidenpyjamasen är dock inte ett plagg som man omedelbart förknippar med Coco Chanel, men att hon kunde bära upp denna favorit i basgarderoben, det råder det inga tvivel om. ",
  "",
  listOfObjects[2]
);
let postSixThree: Post = new Post(
  "3",
  "Inlägg nr 6",
  "Elegant spetsbehå får gärna titta fram under sidenskjortan.",
  "",
  listOfObjects[2]
);
let postSevenThree: Post = new Post(
  "3",
  "Inlägg nr 7",
  "Modesäsongen 2022 är här, och med den en massa härliga trender.",
  "",
  listOfObjects[2]
);
let postEightThree: Post = new Post(
  "3",
  "Inlägg nr 8",
  "Till våren är det mittenpartiet av kroppen som står i fokus, då bar mage och midja är en trend många designer anammat. Korta toppar eller endast bh kombinerat till lågt skurna byxor och kjolar är det som gäller för den som vill haka på trenden.  ",
  "",
  listOfObjects[2]
);
let postNineThree: Post = new Post(
  "3",
  "Inlägg nr 9",
  "Du behöver inte gå i giftastankar för att vara sugen på vita romantiska klänningar i tyll, spets och broderier: även för den som inte planerar att säga ”ja” finns det en uppsjö fina klänningar att välja mellan. För vem har sagt att man bara kan strosa runt i sin vita drömklänning en gång i livet ...",
  "",
  listOfObjects[2]
);
let postTenThree: Post = new Post(
  "3",
  "Inlägg nr 10",
  "Cut outs har varit på modet en tid, men i vår fullkomligt exploderar trenden, en effekt av att modehusen vill att vi ska visa så mycket hud som möjligt. Det fina med den här trenden är att den kan vara så subtil eller sassy som du vill. Vill du inte visa hud går det till exempel utmärkt att ha ett annat plagg under. ",
  "",
  listOfObjects[2]
);

listOfPost.push(
  postOneThree,
  postTwoThree,
  postThreeThree,
  postFourThree,
  postFiveThree,
  postSixThree,
  postSevenThree,
  postEightThree,
  postNineThree,
  postTenThree
);

//
// TILL BLOGG 4
//

let postOneFour: Post = new Post(
  "4",
  "Inlägg nr",
  "Nu kan man lyssna på julmusik på spotify",
  "",
  listOfObjects[3]
);
let postTwoFour: Post = new Post(
  "4",
  "Inlägg nr",
  "Miley Cyrus senaste pridekonsert var något av det bästa jag sett",
  "",
  listOfObjects[3]
);
let postThreeFour: Post = new Post(
  "4",
  "Inlägg nr",
  "En ny artist att hålla öronen på är Frida Green, debuterade 2021 i mello",
  "",
  listOfObjects[3]
);
let postFourFour: Post = new Post(
  "4",
  "Inlägg nr",
  "Nu räcker det, sluta höja priset spotify!! Vad tycker ni?",
  "",
  listOfObjects[3]
);
let postFiveFour: Post = new Post(
  "4",
  "Inlägg nr",
  "Hur mår ni, idag var jag på en konsert i Mariakyrkan. Jazz ekade i hela lokalen",
  "",
  listOfObjects[3]
);
let postSixFour: Post = new Post(
  "4",
  "Inlägg nr",
  "Glöm inte Rösta på din favoritartist i årets rockbjörn!!",
  "",
  listOfObjects[3]
);
let postSevenFour: Post = new Post(
  "4",
  "Inlägg nr",
  " text musik text musik",
  "",
  listOfObjects[3]
);
let postEightFour: Post = new Post(
  "4",
  "Inlägg nr",
  "Nej nu orkar jag inte lyssna mer",
  "",
  listOfObjects[3]
);
let postNineFour: Post = new Post(
  "4",
  "Inlägg nr",
  "WOW vilken skillnad det är på högtalare och högtalare",
  "",
  listOfObjects[3]
);
let postTenFour: Post = new Post(
  "4",
  "Inlägg nr",
  "Kolla in mina spellistor på spotify",
  "",
  listOfObjects[3]
);

listOfPost.push(
  postOneFour,
  postTwoFour,
  postThreeFour,
  postFourFour,
  postFiveFour,
  postSixFour,
  postSevenFour,
  postEightFour,
  postNineFour,
  postTenFour
);

//
// TILL BLOGG 5
//

let postOneFive: Post = new Post(
  "5",
  "Inlägg nr 1",
  "Tja bloggen, idag har jag varit på kontoret",
  "",
  listOfObjects[4]
);
let postTwoFive: Post = new Post(
  "5",
  "Inlägg nr 2",
  "Hej alla, idag var jag först på kontoret. Efter det träffade jag Lisa och Magnus. Nu ligger jag i soffan",
  "",
  listOfObjects[4]
);
let postThreeFive: Post = new Post(
  "5",
  "Inlägg nr 3",
  "WOW, nytt år. Hur var ert nyår? jag var på megafest och åt buffe. gott",
  "",
  listOfObjects[4]
);
let postFourFive: Post = new Post(
  "5",
  "Inlägg nr 4",
  "Jag kommer ta en paus ifrån bloggen, mycket att göra privat",
  "",
  listOfObjects[4]
);
let postFiveFive: Post = new Post(
  "5",
  "Inlägg nr 5",
  "Idag var jag på mitt först PT pass. Känner mig så svag haha",
  "",
  listOfObjects[4]
);
let postSixFive: Post = new Post(
  "5",
  "Inlägg nr 6",
  "Hej bloggen, idag tog jag ledigt för att njuta av solen och äta lunch på subway. Bästa dagen",
  "",
  listOfObjects[4]
);
let postSevenFive: Post = new Post(
  "5",
  "Inlägg nr 7",
  "Hej allihopa, nu är sommaren snart slut och man börjar jobba igen.",
  "",
  listOfObjects[4]
);
let postEightFive: Post = new Post(
  "5",
  "Inlägg nr 8",
  "Vad är era bästa snackstips? jag lever ju egentligen för lösgodis.",
  "",
  listOfObjects[4]
);
let postNineFive: Post = new Post(
  "5",
  "Inlägg nr 9 ",
  "Idag har jag bara legat i soffan, så inget att uppdatera, hörs",
  "",
  listOfObjects[4]
);
let postTenFive: Post = new Post(
  "5",
  "Inlägg nr 10",
  "Tjatja, idag har jag storstädat lägenheten och även köpt en ny TV!! så ni vet vart helgen kommer spenderas, vad ska ni göra?",
  "",
  listOfObjects[4]
);

listOfPost.push(
  postOneFive,
  postTwoFive,
  postThreeFive,
  postFourFive,
  postFiveFive,
  postSixFive,
  postSevenFive,
  postEightFive,
  postNineFive,
  postTenFive
);

//
// TILL BLOGG 6
//

let postOneSix: Post = new Post(
  "6",
  "Inlägg nr",
  "Idag ska vi träna biceps, kört hårt",
  "",
  listOfObjects[5]
);
let postTwoSix: Post = new Post(
  "6",
  "Inlägg nr",
  "Hur många squats kan ni göra? idag kör vi på 100 i rad. körkörkör",
  "",
  listOfObjects[5]
);
let postThreeSix: Post = new Post(
  "6",
  "Inlägg nr",
  "Godmorgon, nu kör vi löprunda 8km.",
  "",
  listOfObjects[5]
);
let postFourSix: Post = new Post(
  "6",
  "Inlägg nr",
  "Idag vilar jag, ni då? ska även äta gröt med casein, blir så gott",
  "",
  listOfObjects[5]
);
let postFiveSix: Post = new Post(
  "6",
  "Inlägg nr",
  "Nu blir det helkropp på gymmet i 2h, hänger ni med mig?",
  "",
  listOfObjects[5]
);
let postSixSix: Post = new Post(
  "6",
  "Inlägg nr",
  "Jag tränar på SATC, vart tränar ni?",
  "",
  listOfObjects[5]
);
let postSevenSix: Post = new Post(
  "6",
  "Inlägg nr",
  "Idag har jag haft en cheatday, ätit 8000 kalorier, bra för musklerna",
  "",
  listOfObjects[5]
);
let postEightSix: Post = new Post(
  "6",
  "Inlägg nr",
  "Hej alla, idag körde jag både löprunda och benpass på gymmet.",
  "",
  listOfObjects[5]
);
let postNineSix: Post = new Post(
  "6",
  "Inlägg nr",
  "Förkyld, så blir inget idag",
  "",
  listOfObjects[5]
);
let postTenSix: Post = new Post(
  "6",
  "Inlägg nr",
  "Hejhej alla, idag blir det helkropp på gymmet. Glöm inte att dricka pwo för energin...",
  "",
  listOfObjects[5]
);

listOfPost.push(
  postOneSix,
  postTwoSix,
  postThreeSix,
  postFourSix,
  postFiveSix,
  postSixSix,
  postSevenSix,
  postEightSix,
  postNineSix,
  postTenSix
);

//
// TILL BLOGG 7
//

let postOneSeven: Post = new Post(
  "7",
  "Inlägg nr 1",
  "Idag såg jag Don't Look Up 8/10",
  "",
  listOfObjects[6]
);
let postTwoSeven: Post = new Post(
  "7",
  "Inlägg nr 2",
  "Disney Enchanot får 10/10",
  "",
  listOfObjects[6]
);
let postThreeSeven: Post = new Post(
  "7",
  "Inlägg nr 3",
  "Ikväll såg vi The Hustle - en klar 10:a",
  "",
  listOfObjects[6]
);
let postFourSeven: Post = new Post(
  "7",
  "Inlägg nr 4",
  "Thor får 9/10",
  "",
  listOfObjects[6]
);
let postFiveSeven: Post = new Post(
  "7",
  "Inlägg nr 5",
  "Spiderman får 100/10, SE DEN NU!!",
  "",
  listOfObjects[6]
);
let postSixSeven: Post = new Post(
  "7",
  "Inlägg nr 6",
  "Venom  får 7/10",
  "",
  listOfObjects[6]
);
let postSevenSeven: Post = new Post(
  "7",
  "Inlägg nr 7",
  "Idag gick tv:n sönder. Så måste vänta tills imorgon när vi ska köpa ny",
  "",
  listOfObjects[6]
);
let postEightSeven: Post = new Post(
  "7",
  "Inlägg nr 8",
  "Jag vet inte med er, men alla polisskolan är 5/10, men se dem ändå",
  "",
  listOfObjects[6]
);
let postNineSeven: Post = new Post(
  "7",
  "Inlägg nr 9",
  "Såg Red Notice, inte alls vad jag trodde men en stark 7/10",
  "",
  listOfObjects[6]
);
let postTenSeven: Post = new Post(
  "7",
  "Inlägg nr 10",
  "vad ska jag säga, squid game -1/10, spring",
  "",
  listOfObjects[6]
);

listOfPost.push(
  postOneSeven,
  postTwoSeven,
  postThreeSeven,
  postFourSeven,
  postFiveSeven,
  postSixSeven,
  postSevenSeven,
  postEightSeven,
  postNineSeven,
  postTenSeven
);

//
// TILL BLOGG 8
//

let postOneEight: Post = new Post(
  "8",
  "Inlägg nr 1",
  "Det börja bra nästan intressant",
  "",
  listOfObjects[7]
);
let postTwoEight: Post = new Post(
  "8",
  "Inlägg nr 2",
  "Jaja, men kanske lite väl bekant",
  "",
  listOfObjects[7]
);
let postThreeEight: Post = new Post(
  "8",
  "Inlägg nr 3",
  "Vi bygger upp till bryggan min vän",
  "",
  listOfObjects[7]
);
let postFourEight: Post = new Post(
  "8",
  "Inlägg nr 4",
  "Men den kommer inte riktigt än",
  "",
  listOfObjects[7]
);
let postFiveEight: Post = new Post(
  "8",
  "Inlägg nr 5",
  "För vi har en halv vers kvar att köra",
  "",
  listOfObjects[7]
);
let postSixEight: Post = new Post(
  "8",
  "Inlägg nr 6",
  "En repetion, som man brukar göra",
  "",
  listOfObjects[7]
);
let postSevenEight: Post = new Post(
  "8",
  "Inlägg nr 7",
  "Vi bygger upp till bruggan igen och här kommer den äntligen",
  "",
  listOfObjects[7]
);
let postEightEight: Post = new Post(
  "8",
  "Inlägg nr 8",
  "Spänningen stiger inför låtens poäng",
  "",
  listOfObjects[7]
);
let postNineEight: Post = new Post(
  "8",
  "Inlägg nr 9",
  "En riktigt fläskig refräng",
  "",
  listOfObjects[7]
);
let postTenEight: Post = new Post(
  "8",
  "Inlägg nr 10",
  "Och det är kärlek och det är vindar, det är ögon och dem tindrar",
  "",
  listOfObjects[7]
);

listOfPost.push(
  postOneEight,
  postTwoEight,
  postThreeEight,
  postFourEight,
  postFiveEight,
  postSixEight,
  postSevenEight,
  postEightEight,
  postNineEight,
  postTenEight
);

//
// TILL BLOGG 9
//

let postOneNine: Post = new Post(
  "9",
  "Inlägg nr 1",
  "Baddräkt från H&M, solglasögon från Fendi, pärlhalsband från Sophie by Sophie, snäckarmband från Pilgrim. ",
  "",
  listOfObjects[8]
);
let postTwoNine: Post = new Post(
  "9",
  "Inlägg nr 2",
  "Bikini från Ia Bon, solglasögon från Fendi, snäckhalsband från Valerie, litet halsband från Sophie by Sophie.",
  "",
  listOfObjects[8]
);
let postThreeNine: Post = new Post(
  "9",
  "Inlägg nr 3",
  "Klänning från Kappahl, solglasögon från Fendi, väska från Sally Voltaire och systrar. ",
  "",
  listOfObjects[8]
);
let postFourNine: Post = new Post(
  "9",
  "Inlägg nr 4",
  "Tröja från Arket, byxor från H&M, skor från Prada och väska från Gucci",
  "",
  listOfObjects[8]
);
let postFiveNine: Post = new Post(
  "9",
  "Inlägg nr 5",
  "Randig klänning från DVF, skor från Flattered. ",
  "",
  listOfObjects[8]
);
let postSixNine: Post = new Post(
  "9",
  "Inlägg nr 6",
  "Klänning från Rodebjer, solglasögon från Accrue.",
  "",
  listOfObjects[8]
);
let postSevenNine: Post = new Post(
  "9",
  "Inlägg nr 7",
  "Jeans från BikBok, t-shirt från H&M, väska från Little Liffner, skor från Flattered, örhängen från Syster P, solglasögon från Musch, snäckhalsband från Valerie, pärlhalsband och halsband med rosa topas från Sophie by Sophie. ",
  "",
  listOfObjects[8]
);
let postEightNine: Post = new Post(
  "9",
  "Inlägg nr 8",
  "Kavaj från Massimo Dutti, jeans från Carin Wester, solglasögon från Chimi Eyewear, väska från Staud, armband från Charlotte Bonde, pumps från Flattered. ",
  "",
  listOfObjects[8]
);
let postNineNine: Post = new Post(
  "9",
  "Inlägg nr 9",
  "Kjol från Rodebjer, väska från ATP Atelier, skor från H&M.",
  "",
  listOfObjects[8]
);
let postTenNine: Post = new Post(
  "9",
  "Inlägg nr 10",
  "Kavaj från Mango, topp från H&M, kjol från Beck Söndergaard, väska från ATP Atelier, solglasögon från Accrue.",
  "",
  listOfObjects[8]
);

listOfPost.push(
  postOneNine,
  postTwoNine,
  postThreeNine,
  postFourNine,
  postFiveNine,
  postSixNine,
  postSevenNine,
  postEightNine,
  postNineNine,
  postTenNine
);

//
// TILL BLOGG 10
//

let postOneTen: Post = new Post(
  "10",
  "Inlägg nr 1",
  "Mina favoriter från Depends vårsläpp!! Depend har släppt sina vårlack. Depend är alltså lika redo för våren som jag är.  Jag VET att våren inte...",
  "",
  listOfObjects[9]
);
let postTwoTen: Post = new Post(
  "10",
  "Inlägg nr 2",
  "Saltvattenspray – jag har lärt mig att använda det! Tänk att man är en sån beautynörd och fortfarande kan lära sig så basala saker som hur man använder saltvattenspray...",
  "",
  listOfObjects[9]
);
let postThreeTen: Post = new Post(
  "10",
  "Inlägg nr 3",
  "Skadat hår?! Här är 3 bra värmeskydd som hjälper dig! Så många av oss går runt med skadat hår för hår skadas när man färgar, bleker och stylar det. De...",
  "",
  listOfObjects[9]
);
let postFourTen: Post = new Post(
  "10",
  "Inlägg nr 4",
  "Hårfönen som underlättat min volymföning! Att föna håret med rundborste för att bygga upp volym är något som jag verkligen älskar. Jag har haft en...",
  "",
  listOfObjects[9]
);
let postFiveTen: Post = new Post(
  "10",
  "Inlägg nr 5",
  "SE HIT! Om du vill ha en grön sminkning på jul! Jag kommer inte köra en grön sminkning på jul för jag har bestämt mig för en cerise klänning i år....",
  "",
  listOfObjects[9]
);
let postSixTen: Post = new Post(
  "10",
  "Inlägg nr 6",
  "Häng eukalyptus i duschen, det är underbart! Jag har testat att ha eukalyptuskvistar hängandes i duschen och jag testade först och främst för att de är otroligt...",
  "",
  listOfObjects[9]
);
let postSevenTen: Post = new Post(
  "10",
  "Inlägg nr 7",
  "Första hjälpen mot frissigt hår! Fissets säsong är här. Torr luft, kall luft och håret blir till fnöske. Mitt hår tappar glans och blir bara...",
  "",
  listOfObjects[9]
);
let postEightTen: Post = new Post(
  "10",
  "Inlägg nr 8",
  "Jag och Tati Westbrook gillar inte samma, igen! För något år sen så testade jag en foundation som inte bara Tati Westbrook hade hyllat utan även många andra...",
  "",
  listOfObjects[9]
);
let postNineTen: Post = new Post(
  "10",
  "Inlägg nr 9",
  "Krämen som doftar en nyskivad gurka! Jag har testat en kräm i några veckor som jag har mixade åsikter om. I namnet så finns ordet smoothie...",
  "",
  listOfObjects[9]
);
let postTenTen: Post = new Post(
  "10",
  "Inlägg nr 10",
  "Äntligen dags för en sminkning! Känns som att de va en evighet sen jag la upp en sminkning. Det har varit en ganska osminkad höst...",
  "",
  listOfObjects[9]
);

listOfPost.push(
  postOneTen,
  postTwoTen,
  postThreeTen,
  postFourTen,
  postFiveTen,
  postSixTen,
  postSevenTen,
  postEightTen,
  postNineTen,
  postTenTen
);
