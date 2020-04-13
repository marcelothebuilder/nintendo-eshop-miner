import { expect } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import { buildSlug } from "./SlugBuilder";

describe("SlugBuilder", () => {
  afterEach(() => sinon.restore());

  it("should create zelda slug", () => {
    expect(buildSlug("switch")("The Legend of Zelda: Breath of the Wild")).to.be.eq(
      "the-legend-of-zelda-breath-of-the-wild-switch",
    );
  });

  it("should create links awakening slug", () => {
    expect(buildSlug("switch")("The Legend of Zelda: Link's Awakening")).to.be.eq(
      "the-legend-of-zelda-links-awakening-switch",
    );
  });

  it("should create 3 Little Pigs & Bad Wolf  slug", () => {
    expect(buildSlug("switch")("3 Little Pigs & Bad Wolf")).to.be.eq("3-little-pigs-and-bad-wolf-switch");
  });

  it("should create #Breakforcist Battle slug", () => {
    expect(buildSlug("switch")("#Breakforcist Battle")).to.be.eq("breakforcist-battle-switch");
  });

  it("should create ŌKAMI™ HD slug", () => {
    expect(buildSlug("switch")("ŌKAMI™ HD")).to.be.eq("okami-hd-switch");
  });

  it("should create 64.0 slug", () => {
    expect(buildSlug("switch")("64.0")).to.be.eq("640-switch");
  });

  it.skip("should create Xenon Valkyrie+ slug", () => {
    expect(buildSlug("switch")("Xenon Valkyrie+")).to.be.eq("xenon-valkyrie-plus-switch");
  });

  // ŌKAMI™ HD
  // okami-hd-switch

  it("should build slugs correctly", () => {
    expect(buildSlug("switch")("1-2-Switch")).to.be.eq("1-2-switch");
    expect(buildSlug("switch")("ARMS")).to.be.eq("arms-switch");
    expect(buildSlug("switch")("Mario Kart 8 Deluxe")).to.be.eq("mario-kart-8-deluxe-switch");
    expect(buildSlug("switch")("Splatoon 2")).to.be.eq("splatoon-2-switch");
    expect(buildSlug("switch")("Super Mario Odyssey")).to.be.eq("super-mario-odyssey-switch");
    expect(buildSlug("switch")("The Legend of Zelda: Breath of the Wild")).to.be.eq(
      "the-legend-of-zelda-breath-of-the-wild-switch",
    );
    expect(buildSlug("switch")("Disgaea 5 Complete")).to.be.eq("disgaea-5-complete-switch");
    expect(buildSlug("switch")("HAS-BEEN HEROES")).to.be.eq("has-been-heroes-switch");
    expect(buildSlug("switch")("Just Dance 2017")).to.be.eq("just-dance-2017-switch");
    expect(buildSlug("switch")("Super Bomberman R")).to.be.eq("super-bomberman-r-switch");
    expect(buildSlug("switch")("ULTRA STREET FIGHTER II: The Final Challengers")).to.be.eq(
      "ultra-street-fighter-ii-the-final-challengers-switch",
    );
    expect(buildSlug("switch")("Fire Emblem Warriors")).to.be.eq("fire-emblem-warriors-switch");
    expect(buildSlug("switch")("Rayman Legends: Definitive Edition")).to.be.eq(
      "rayman-legends-definitive-edition-switch",
    );
    expect(buildSlug("switch")("Puyo Puyo™ Tetris®")).to.be.eq("puyo-puyo-tetris-switch");
    expect(buildSlug("switch")("LEGO® CITY Undercover")).to.be.eq("lego-city-undercover-switch");
    expect(buildSlug("switch")("The Elder Scrolls V: Skyrim®")).to.be.eq("the-elder-scrolls-v-skyrim-switch");
    expect(buildSlug("switch")("Minecraft: Nintendo Switch Edition")).to.be.eq(
      "minecraft-nintendo-switch-edition-switch",
    );
    expect(buildSlug("switch")("Fate/EXTELLA: The Umbral Star")).to.be.eq("fate-extella-the-umbral-star-switch");
    expect(buildSlug("switch")("Battle Chasers: Nightwar")).to.be.eq("battle-chasers-nightwar-switch");
    expect(buildSlug("switch")("Cars 3: Driven to Win")).to.be.eq("cars-3-driven-to-win-switch");
    expect(buildSlug("switch")("Pokkén Tournament DX")).to.be.eq("pokken-tournament-dx-switch");
    expect(buildSlug("switch")("Mario + Rabbids® Kingdom Battle")).to.be.eq("mario-rabbids-kingdom-battle-switch");
    expect(buildSlug("switch")("Xenoblade Chronicles 2")).to.be.eq("xenoblade-chronicles-2-switch");
    expect(buildSlug("switch")("EA SPORTS™ FIFA 18")).to.be.eq("ea-sports-fifa-18-switch");
    expect(buildSlug("switch")("NBA 2K18")).to.be.eq("nba-2k18-switch");
    expect(buildSlug("switch")("Sonic Forces™")).to.be.eq("sonic-forces-switch");
    expect(buildSlug("switch")("Cave Story+")).to.be.eq("cave-story-switch");
    expect(buildSlug("switch")("LEGO® Worlds")).to.be.eq("lego-worlds-switch");
    expect(buildSlug("switch")("WWE 2K18")).to.be.eq("wwe-2k18-switch");
    expect(buildSlug("switch")("The Binding of Isaac: Afterbirth+")).to.be.eq("the-binding-of-isaac-afterbirth-switch");
    expect(buildSlug("switch")("DRAGON BALL XENOVERSE 2 for Nintendo Switch")).to.be.eq(
      "dragon-ball-xenoverse-2-for-nintendo-switch",
    );
    expect(buildSlug("switch")("L.A. Noire")).to.be.eq("la-noire-switch");
    expect(buildSlug("switch")("Kirby Star Allies")).to.be.eq("kirby-star-allies-switch");
    expect(buildSlug("switch")("DOOM")).to.be.eq("doom-switch");
    expect(buildSlug("switch")("Wolfenstein II: The New Colossus")).to.be.eq("wolfenstein-ii-the-new-colossus-switch");
    expect(buildSlug("switch")("Dragon Quest Builders")).to.be.eq("dragon-quest-builders-switch");
    expect(buildSlug("switch")("The LEGO® NINJAGO® Movie Videogame")).to.be.eq(
      "the-lego-ninjago-movie-videogame-switch",
    );
    expect(buildSlug("switch")("One Piece: Unlimited World Red - Deluxe Edition")).to.be.eq(
      "one-piece-unlimited-world-red-deluxe-edition-switch",
    );
    expect(buildSlug("switch")("Unbox: Newbie's Adventure")).to.be.eq("unbox-newbies-adventure-switch");
    expect(buildSlug("switch")("Just Dance 2018®")).to.be.eq("just-dance-2018-switch");
    expect(buildSlug("switch")("Sine Mora EX")).to.be.eq("sine-mora-ex-switch");
    expect(buildSlug("switch")("Touhou Kobuto V: Burst Battle")).to.be.eq("touhou-kobuto-v-burst-battle-switch");
    expect(buildSlug("switch")("Syberia")).to.be.eq("syberia-switch");
    expect(buildSlug("switch")("Monopoly for Nintendo Switch")).to.be.eq("monopoly-for-nintendo-switch");
    expect(buildSlug("switch")("This Is the Police")).to.be.eq("this-is-the-police-switch");
    expect(buildSlug("switch")("Nights of Azure 2: Bride of the New Moon")).to.be.eq(
      "nights-of-azure-2-bride-of-the-new-moon-switch",
    );
    expect(buildSlug("switch")("Farming Simulator Nintendo Switch Edition")).to.be.eq(
      "farming-simulator-nintendo-switch-edition-switch",
    );
    expect(buildSlug("switch")("Cartoon Network: Battle Crashers")).to.be.eq("cartoon-network-battle-crashers-switch");
    expect(buildSlug("switch")("Ben 10")).to.be.eq("ben-10-switch");
    expect(buildSlug("switch")("MXGP3 - The Official Motocross Videogame")).to.be.eq(
      "mxgp3-the-official-motocross-videogame-switch",
    );
    expect(buildSlug("switch")("Super Putty Squad")).to.be.eq("super-putty-squad-switch");
    expect(buildSlug("switch")("Rocket League®")).to.be.eq("rocket-league-switch");
    expect(buildSlug("switch")("Lumo")).to.be.eq("lumo-switch");
    expect(buildSlug("switch")("Batman - The Telltale Series")).to.be.eq("batman-the-telltale-series-switch");
    expect(buildSlug("switch")("Portal Knights")).to.be.eq("portal-knights-switch");
    expect(buildSlug("switch")("Ginger: Beyond the Crystal")).to.be.eq("ginger-beyond-the-crystal-switch");
    expect(buildSlug("switch")("Let's Sing 2018")).to.be.eq("lets-sing-2018-switch");
    expect(buildSlug("switch")("Snow Moto Racing Freedom")).to.be.eq("snow-moto-racing-freedom-switch");
    expect(buildSlug("switch")("Aqua Moto Racing Utopia")).to.be.eq("aqua-moto-racing-utopia-switch");
    expect(buildSlug("switch")("Gear.Club Unlimited")).to.be.eq("gearclub-unlimited-switch");
    expect(buildSlug("switch")("SUPERBEAT XONiC EX")).to.be.eq("superbeat-xonic-ex-switch");
    expect(buildSlug("switch")("LEGO® MARVEL Super Heroes 2")).to.be.eq("lego-marvel-super-heroes-2-switch");
    expect(buildSlug("switch")("Syberia 2")).to.be.eq("syberia-2-switch");
    expect(buildSlug("switch")("Bayonetta 2")).to.be.eq("bayonetta-2-switch");
    expect(buildSlug("switch")("LOST SPHEAR")).to.be.eq("lost-sphear-switch");
    expect(buildSlug("switch")("Runner3")).to.be.eq("runner3-switch");
    expect(buildSlug("switch")("The World Ends With You -Final Remix-")).to.be.eq(
      "the-world-ends-with-you-final-remix-switch",
    );
    expect(buildSlug("switch")("Hyrule Warriors: Definitive Edition")).to.be.eq(
      "hyrule-warriors-definitive-edition-switch",
    );
    expect(buildSlug("switch")("Dark Souls™: Remastered")).to.be.eq("dark-souls-remastered-switch");
    expect(buildSlug("switch")("Donkey Kong Country: Tropical Freeze")).to.be.eq(
      "donkey-kong-country-tropical-freeze-switch",
    );
    expect(buildSlug("switch")("Mario Tennis Aces")).to.be.eq("mario-tennis-aces-switch");
    expect(buildSlug("switch")("SNK HEROINES Tag Team Frenzy")).to.be.eq("snk-heroines-tag-team-frenzy-switch");
    expect(buildSlug("switch")("Ys VIII: Lacrimosa of DANA")).to.be.eq("ys-viii-lacrimosa-of-dana-switch");
    expect(buildSlug("switch")("Scribblenauts: Showdown")).to.be.eq("scribblenauts-showdown-switch");
    expect(buildSlug("switch")("Tales of the Tiny Planet")).to.be.eq("tales-of-the-tiny-planet-switch");
    expect(buildSlug("switch")("Island Flight Simulator")).to.be.eq("island-flight-simulator-switch");
    expect(buildSlug("switch")("3D MiniGolf")).to.be.eq("3d-minigolf-switch");
    expect(buildSlug("switch")("PAYDAY 2")).to.be.eq("payday-2-switch");
    expect(buildSlug("switch")("The Longest Five Minutes")).to.be.eq("the-longest-five-minutes-switch");
    expect(buildSlug("switch")("Monster Energy Supercross - The Official Videogame")).to.be.eq(
      "monster-energy-supercross-the-official-videogame-switch",
    );
    expect(buildSlug("switch")("A.O.T. 2")).to.be.eq("aot-2-switch");
    expect(buildSlug("switch")("Little Nightmares™ Complete Edition")).to.be.eq(
      "little-nightmares-complete-edition-switch",
    );
    expect(buildSlug("switch")("Sushi Striker: The Way of Sushido")).to.be.eq(
      "sushi-striker-the-way-of-sushido-switch",
    );
    expect(buildSlug("switch")("Crash Bandicoot™ N. Sane Trilogy")).to.be.eq("crash-bandicoot-n-sane-trilogy-switch");
    expect(buildSlug("switch")("South Park™: The Fractured But Whole™")).to.be.eq(
      "south-park-the-fractured-but-whole-switch",
    );
    expect(buildSlug("switch")("Captain Toad: Treasure Tracker")).to.be.eq("captain-toad-treasure-tracker-switch");
    expect(buildSlug("switch")("Travis Strikes Again: No More Heroes")).to.be.eq(
      "travis-strikes-again-no-more-heroes-switch",
    );
    expect(buildSlug("switch")("OCTOPATH TRAVELER")).to.be.eq("octopath-traveler-switch");
    expect(buildSlug("switch")("Gem Smashers")).to.be.eq("gem-smashers-switch");
    expect(buildSlug("switch")("Gal*Gun 2")).to.be.eq("gal-gun-2-switch");
    expect(buildSlug("switch")("Super Chariot")).to.be.eq("super-chariot-switch");
    expect(buildSlug("switch")("Penny-Punching Princess")).to.be.eq("penny-punching-princess-switch");
    expect(buildSlug("switch")("Atelier Lydie & Suelle ~The Alchemists and the Mysterious Paintings~")).to.be.eq(
      "atelier-lydie-and-suelle-the-alchemists-and-the-mysterious-paintings-switch",
    );
    expect(buildSlug("switch")("Urban Trial Playground")).to.be.eq("urban-trial-playground-switch");
    expect(buildSlug("switch")("Firefighters – The Simulation")).to.be.eq("firefighters-the-simulation-switch");
    expect(buildSlug("switch")("Firefighters: Airport Fire Department")).to.be.eq(
      "firefighters-airport-fire-department-switch",
    );
    expect(buildSlug("switch")("Shantae: Half- Genie Hero Ultimate Edition")).to.be.eq(
      "shantae-half-genie-hero-ultimate-edition-switch",
    );
    expect(buildSlug("switch")("Hello Kitty Kruisers With Sanrio Friends")).to.be.eq(
      "hello-kitty-kruisers-with-sanrio-friends-switch",
    );
    expect(buildSlug("switch")("Street Fighter™ 30th Anniversary Collection")).to.be.eq(
      "street-fighter-30th-anniversary-collection-switch",
    );
    expect(buildSlug("switch")("ONE PIECE: PIRATE WARRIORS 3 - Deluxe Edition")).to.be.eq(
      "one-piece-pirate-warriors-3-deluxe-edition-switch",
    );
    expect(buildSlug("switch")("Professional Construction – The Simulation")).to.be.eq(
      "professional-construction-the-simulation-switch",
    );
    expect(buildSlug("switch")("Happy Birthdays")).to.be.eq("happy-birthdays-switch");
    expect(buildSlug("switch")("GO VACATION")).to.be.eq("go-vacation-switch");
    expect(buildSlug("switch")("Shining Resonance Refrain")).to.be.eq("shining-resonance-refrain-switch");
    expect(buildSlug("switch")("Pokémon: Let's Go, Pikachu!")).to.be.eq("pokemon-lets-go-pikachu-switch");
    expect(buildSlug("switch")("Pokémon: Let's Go, Eevee!")).to.be.eq("pokemon-lets-go-eevee-switch");
    expect(buildSlug("switch")("LEGO® The Incredibles")).to.be.eq("lego-the-incredibles-switch");
    expect(buildSlug("switch")("Yesterday Origins")).to.be.eq("yesterday-origins-switch");
    expect(buildSlug("switch")("Fallen Legion: Rise to Glory")).to.be.eq("fallen-legion-rise-to-glory-switch");
    expect(buildSlug("switch")("Legend of Kay Anniversary")).to.be.eq("legend-of-kay-anniversary-switch");
    expect(buildSlug("switch")("Vegas Party")).to.be.eq("vegas-party-switch");
    expect(buildSlug("switch")("Harvest Moon: Light of Hope Special Edition")).to.be.eq(
      "harvest-moon-light-of-hope-special-edition-switch",
    );
    expect(buildSlug("switch")("Minecraft")).to.be.eq("minecraft-switch");
    expect(buildSlug("switch")("Flashback")).to.be.eq("flashback-switch");
    expect(buildSlug("switch")("Monster Hunter Generations Ultimate™")).to.be.eq(
      "monster-hunter-generations-ultimate-switch",
    );
    expect(buildSlug("switch")("DAEMON X MACHINA")).to.be.eq("daemon-x-machina-switch");
    expect(buildSlug("switch")("Super Mario Party")).to.be.eq("super-mario-party-switch");
    expect(buildSlug("switch")("Overcooked! 2")).to.be.eq("overcooked-2-switch");
    expect(buildSlug("switch")("DRAGON BALL® FighterZ")).to.be.eq("dragon-ball-fighterz-switch");
    expect(buildSlug("switch")("Killer Queen Black")).to.be.eq("killer-queen-black-switch");
    expect(buildSlug("switch")("EA SPORTS™ FIFA 19")).to.be.eq("ea-sports-fifa-19-switch");
    expect(buildSlug("switch")("Mahjong Deluxe 3")).to.be.eq("mahjong-deluxe-3-switch");
    expect(buildSlug("switch")("Fire Emblem: Three Houses")).to.be.eq("fire-emblem-three-houses-switch");
    expect(buildSlug("switch")("Wasteland 2: Director's Cut")).to.be.eq("wasteland-2-directors-cut-switch");
    expect(buildSlug("switch")("All-Star Fruit Racing")).to.be.eq("all-star-fruit-racing-switch");
    expect(buildSlug("switch")("The Lost Child")).to.be.eq("the-lost-child-switch");
    expect(buildSlug("switch")("BLAZBLUE CROSS TAG BATTLE")).to.be.eq("blazblue-cross-tag-battle-switch");
    expect(buildSlug("switch")("Grave Danger")).to.be.eq("grave-danger-switch");
    expect(buildSlug("switch")("de Blob")).to.be.eq("de-blob-switch");
    expect(buildSlug("switch")("MotoGP™18")).to.be.eq("motogp-18-switch");
    expect(buildSlug("switch")("Super Smash Bros. Ultimate")).to.be.eq("super-smash-bros-ultimate-switch");
    expect(buildSlug("switch")("Cartoon Network Adventure Time: Pirates of the Enchiridion")).to.be.eq(
      "cartoon-network-adventure-time-pirates-of-the-enchiridion-switch",
    );
    expect(buildSlug("switch")("Hotel Transylvania 3: Monsters Overboard")).to.be.eq(
      "hotel-transylvania-3-monsters-overboard-switch",
    );
    expect(buildSlug("switch")("Hello Neighbor")).to.be.eq("hello-neighbor-switch");
    expect(buildSlug("switch")("Titan Quest")).to.be.eq("titan-quest-switch");
    expect(buildSlug("switch")("State of Mind")).to.be.eq("state-of-mind-switch");
    expect(buildSlug("switch")("My Riding Stables – Life with Horses")).to.be.eq(
      "my-riding-stables-life-with-horses-switch",
    );
    expect(buildSlug("switch")("Valkyria Chronicles 4")).to.be.eq("valkyria-chronicles-4-switch");
    expect(buildSlug("switch")("Diablo III: Eternal Collection")).to.be.eq("diablo-iii-eternal-collection-switch");
    expect(buildSlug("switch")("Victor Vran Overkill Edition")).to.be.eq("victor-vran-overkill-edition-switch");
    expect(buildSlug("switch")("Goosebumps The Game")).to.be.eq("goosebumps-the-game-switch");
    expect(buildSlug("switch")("de Blob 2")).to.be.eq("de-blob-2-switch");
    expect(buildSlug("switch")("God Wars The Complete Legend")).to.be.eq("god-wars-the-complete-legend-switch");
    expect(buildSlug("switch")("Big Buck Hunter Arcade")).to.be.eq("big-buck-hunter-arcade-switch");
    expect(buildSlug("switch")("NBA 2K19")).to.be.eq("nba-2k19-switch");
    expect(buildSlug("switch")("New Super Mario Bros. U Deluxe")).to.be.eq("new-super-mario-bros-u-deluxe-switch");
    expect(buildSlug("switch")("FINAL FANTASY XII THE ZODIAC AGE")).to.be.eq("final-fantasy-xii-the-zodiac-age-switch");
    expect(buildSlug("switch")("Yoshi's Crafted World")).to.be.eq("yoshis-crafted-world-switch");
    expect(buildSlug("switch")("Little Dragons Café")).to.be.eq("little-dragons-cafe-switch");
    expect(buildSlug("switch")("Scribblenauts Mega Pack")).to.be.eq("scribblenauts-mega-pack-switch");
    expect(buildSlug("switch")("Legendary Fishing")).to.be.eq("legendary-fishing-switch");
    expect(buildSlug("switch")("Nickelodeon Kart Racers")).to.be.eq("nickelodeon-kart-racers-switch");
    expect(buildSlug("switch")("Rapala Fishing Pro Series")).to.be.eq("rapala-fishing-pro-series-switch");
    expect(buildSlug("switch")("Paw Patrol: On a Roll!")).to.be.eq("paw-patrol-on-a-roll-switch");
    expect(buildSlug("switch")("Labyrinth of Refrain: Coven of Dusk")).to.be.eq(
      "labyrinth-of-refrain-coven-of-dusk-switch",
    );
    expect(buildSlug("switch")("LEGO® Harry Potter™ Collection")).to.be.eq("lego-harry-potter-collection-switch");
    expect(buildSlug("switch")("This Is The Police 2")).to.be.eq("this-is-the-police-2-switch");
    expect(buildSlug("switch")("Project Highrise: Architect's Edition")).to.be.eq(
      "project-highrise-architects-edition-switch",
    );
    expect(buildSlug("switch")("Giana Sisters: Twisted Dreams - Owltimate Edition")).to.be.eq(
      "giana-sisters-twisted-dreams-owltimate-edition-switch",
    );
    expect(buildSlug("switch")("NAMCO MUSEUM™ ARCADE PAC™")).to.be.eq("namco-museum-arcade-pac-switch");
    expect(buildSlug("switch")("Pilot Sports")).to.be.eq("pilot-sports-switch");
    expect(buildSlug("switch")("Fitness Boxing")).to.be.eq("fitness-boxing-switch");
    expect(buildSlug("switch")("Chicken Range")).to.be.eq("chicken-range-switch");
    expect(buildSlug("switch")("GRIP")).to.be.eq("grip-switch");
    expect(buildSlug("switch")("Disgaea 1 Complete")).to.be.eq("disgaea-1-complete-switch");
    expect(buildSlug("switch")("Trailblazers")).to.be.eq("trailblazers-switch");
    expect(buildSlug("switch")("NBA 2K Playgrounds 2")).to.be.eq("nba-2k-playgrounds-2-switch");
    expect(buildSlug("switch")("Taiko no Tatsujin: Drum'n'Fun!")).to.be.eq("taiko-no-tatsujin-drumnfun-switch");
    expect(buildSlug("switch")("Syberia 3")).to.be.eq("syberia-3-switch");
    expect(buildSlug("switch")("MY HERO ONE'S JUSTICE")).to.be.eq("my-hero-ones-justice-switch");
    expect(buildSlug("switch")("LEGO® DC Super-Villains")).to.be.eq("lego-dc-super-villains-switch");
    expect(buildSlug("switch")("Carnival Games®")).to.be.eq("carnival-games-switch");
    expect(buildSlug("switch")("Sid Meier's Civilization VI")).to.be.eq("sid-meiers-civilization-vi-switch");
    expect(buildSlug("switch")("Just Dance® 2019")).to.be.eq("just-dance-2019-switch");
    expect(buildSlug("switch")("Moto Racer 4")).to.be.eq("moto-racer-4-switch");
    expect(buildSlug("switch")("Let's Sing 2019")).to.be.eq("lets-sing-2019-switch");
    expect(buildSlug("switch")("Sports Party")).to.be.eq("sports-party-switch");
    expect(buildSlug("switch")("Yomawari: The Long Night Collection")).to.be.eq(
      "yomawari-the-long-night-collection-switch",
    );
    expect(buildSlug("switch")("Crayola Scoot")).to.be.eq("crayola-scoot-switch");
    expect(buildSlug("switch")("Tennis World Tour")).to.be.eq("tennis-world-tour-switch");
    expect(buildSlug("switch")("Death Mark")).to.be.eq("death-mark-switch");
    expect(buildSlug("switch")("Hello Neighbor Hide and Seek")).to.be.eq("hello-neighbor-hide-and-seek-switch");
    expect(buildSlug("switch")("Bibi Blocksberg – Big Broom Race 3")).to.be.eq(
      "bibi-blocksberg-big-broom-race-3-switch",
    );
    expect(buildSlug("switch")("Mutant Football League: Dynasty Edition")).to.be.eq(
      "mutant-football-league-dynasty-edition-switch",
    );
    expect(buildSlug("switch")("Valiant Hearts: The Great War®")).to.be.eq("valiant-hearts-the-great-war-switch");
    expect(buildSlug("switch")("Syberia 1 & 2")).to.be.eq("syberia-1-and-2-switch");
    expect(buildSlug("switch")("Spintires: MudRunner - American Wilds")).to.be.eq(
      "spintires-mudrunner-american-wilds-switch",
    );
    expect(buildSlug("switch")("SNK 40th ANNIVERSARY COLLECTION")).to.be.eq("snk-40th-anniversary-collection-switch");
    expect(buildSlug("switch")("Cabela's: The Hunt - Championship Edition")).to.be.eq(
      "cabelas-the-hunt-championship-edition-switch",
    );
    expect(buildSlug("switch")("Windstorm")).to.be.eq("windstorm-switch");
    expect(buildSlug("switch")("Bass Pro Shops: The Strike - Championship Edition")).to.be.eq(
      "bass-pro-shops-the-strike-championship-edition-switch",
    );
    expect(buildSlug("switch")("Bibi & Tina – Adventures with Horses")).to.be.eq(
      "bibi-and-tina-adventures-with-horses-switch",
    );
    expect(buildSlug("switch")("ATV Drift & Tricks")).to.be.eq("atv-drift-and-tricks-switch");
    expect(buildSlug("switch")("Panda Hero")).to.be.eq("panda-hero-switch");
    expect(buildSlug("switch")("Bendy and the Ink Machine™")).to.be.eq("bendy-and-the-ink-machine-switch");
    expect(buildSlug("switch")("Asterix & Obelix XXL 2")).to.be.eq("asterix-and-obelix-xxl-2-switch");
    expect(buildSlug("switch")("Harvest Life")).to.be.eq("harvest-life-switch");
    expect(buildSlug("switch")("Gelly Break")).to.be.eq("gelly-break-switch");
    expect(buildSlug("switch")("SEGA® Mega Drive Classics™")).to.be.eq("sega-mega-drive-classics-switch");
    expect(buildSlug("switch")("RollerCoaster Tycoon Adventures")).to.be.eq("rollercoaster-tycoon-adventures-switch");
    expect(buildSlug("switch")("Tales of Vesperia™: Definitive Edition")).to.be.eq(
      "tales-of-vesperia-definitive-edition-switch",
    );
    expect(buildSlug("switch")("Toki")).to.be.eq("toki-switch");
    expect(buildSlug("switch")("Professional Farmer: Nintendo Switch Edition")).to.be.eq(
      "professional-farmer-nintendo-switch-edition-switch",
    );
    expect(buildSlug("switch")("3D Billiards - Pool & Snooker")).to.be.eq("3d-billiards-pool-and-snooker-switch");
    expect(buildSlug("switch")("ARK: Survival Evolved")).to.be.eq("ark-survival-evolved-switch");
    expect(buildSlug("switch")("Gear.Club Unlimited 2")).to.be.eq("gearclub-unlimited-2-switch");
    expect(buildSlug("switch")("Ultimate Runner")).to.be.eq("ultimate-runner-switch");
    expect(buildSlug("switch")("MARVEL ULTIMATE ALLIANCE 3: The Black Order")).to.be.eq(
      "marvel-ultimate-alliance-3-the-black-order-switch",
    );
    expect(buildSlug("switch")("V-Rally 4")).to.be.eq("v-rally-4-switch");
    expect(buildSlug("switch")("My Little Riding Champion")).to.be.eq("my-little-riding-champion-switch");
    expect(buildSlug("switch")("BLAZBLUE CENTRALFICTION Special Edition")).to.be.eq(
      "blazblue-centralfiction-special-edition-switch",
    );
    expect(buildSlug("switch")("DreamWorks Dragons Dawn of New Riders")).to.be.eq(
      "dreamworks-dragons-dawn-of-new-riders-switch",
    );
    expect(buildSlug("switch")("Monster Energy Supercross - The Official Videogame 2")).to.be.eq(
      "monster-energy-supercross-the-official-videogame-2-switch",
    );
    expect(buildSlug("switch")("The Raven Remastered")).to.be.eq("the-raven-remastered-switch");
    expect(buildSlug("switch")("RIOT - Civil Unrest")).to.be.eq("riot-civil-unrest-switch");
    expect(buildSlug("switch")("Atari Flashback Classics")).to.be.eq("atari-flashback-classics-switch");
    expect(buildSlug("switch")("Xenon Racer")).to.be.eq("xenon-racer-switch");
    expect(buildSlug("switch")("Sphinx and the Cursed Mummy")).to.be.eq("sphinx-and-the-cursed-mummy-switch");
    expect(buildSlug("switch")("Dragon Marked for Death: Advanced Attackers")).to.be.eq(
      "dragon-marked-for-death-advanced-attackers-switch",
    );
    expect(buildSlug("switch")("Dragon Marked for Death: Frontline Fighters")).to.be.eq(
      "dragon-marked-for-death-frontline-fighters-switch",
    );
    expect(buildSlug("switch")("The Book of Unwritten Tales 2")).to.be.eq("the-book-of-unwritten-tales-2-switch");
    expect(buildSlug("switch")("Aragami - Shadow Edition")).to.be.eq("aragami-shadow-edition-switch");
    expect(buildSlug("switch")("Constructor Plus")).to.be.eq("constructor-plus-switch");
    expect(buildSlug("switch")("Trials® Rising")).to.be.eq("trials-rising-switch");
    expect(buildSlug("switch")("ASTRAL CHAIN™")).to.be.eq("astral-chain-switch");
    expect(buildSlug("switch")("The Legend of Zelda: Link's Awakening")).to.be.eq(
      "the-legend-of-zelda-links-awakening-switch",
    );
    expect(buildSlug("switch")("DRAGON QUEST® XI S: Echoes of an Elusive Age – Definitive Edition")).to.be.eq(
      "dragon-quest-xi-s-echoes-of-an-elusive-age-definitive-edition-switch",
    );
    expect(buildSlug("switch")("DRAGON QUEST BUILDERS 2")).to.be.eq("dragon-quest-builders-2-switch");
    expect(buildSlug("switch")("Assassin's Creed® III Remastered")).to.be.eq("assassins-creed-iii-remastered-switch");
    expect(buildSlug("switch")("STEINS;GATE ELITE")).to.be.eq("steins-gate-elite-switch");
    expect(buildSlug("switch")("Sonic Mania")).to.be.eq("sonic-mania-switch");
    expect(buildSlug("switch")("I am Setsuna")).to.be.eq("i-am-setsuna-switch");
    expect(buildSlug("switch")("RiME")).to.be.eq("rime-switch");
    expect(buildSlug("switch")("ACA NEOGEO THE KING OF FIGHTERS '98")).to.be.eq(
      "aca-neogeo-the-king-of-fighters-98-switch",
    );
    expect(buildSlug("switch")("ACA NEOGEO SHOCK TROOPERS")).to.be.eq("aca-neogeo-shock-troopers-switch");
    expect(buildSlug("switch")("ACA NEOGEO METAL SLUG 3")).to.be.eq("aca-neogeo-metal-slug-3-switch");
    expect(buildSlug("switch")("Shovel Knight: Specter of Torment")).to.be.eq(
      "shovel-knight-specter-of-torment-switch",
    );
    expect(buildSlug("switch")("FAST RMX")).to.be.eq("fast-rmx-switch");
    expect(buildSlug("switch")("Blaster Master Zero")).to.be.eq("blaster-master-zero-switch");
    expect(buildSlug("switch")("ACA NEOGEO WORLD HEROES PERFECT")).to.be.eq("aca-neogeo-world-heroes-perfect-switch");
    expect(buildSlug("switch")("SteamWorld Dig 2")).to.be.eq("steamworld-dig-2-switch");
    expect(buildSlug("switch")("ACA NEOGEO NAM-1975")).to.be.eq("aca-neogeo-nam-1975-switch");
    expect(buildSlug("switch")("ACA NEOGEO WAKU WAKU 7")).to.be.eq("aca-neogeo-waku-waku-7-switch");
    expect(buildSlug("switch")("New Frontier Days ~Founding Pioneers~")).to.be.eq(
      "new-frontier-days-founding-pioneers-switch",
    );
    expect(buildSlug("switch")("Vroom in the night sky")).to.be.eq("vroom-in-the-night-sky-switch");
    expect(buildSlug("switch")("VOEZ")).to.be.eq("voez-switch");
    expect(buildSlug("switch")("Othello")).to.be.eq("othello-switch");
    expect(buildSlug("switch")("Overcooked: Special Edition")).to.be.eq("overcooked-special-edition-switch");
    expect(buildSlug("switch")("The Escapists 2")).to.be.eq("the-escapists-2-switch");
    expect(buildSlug("switch")("RIVE: Ultimate Edition")).to.be.eq("rive-ultimate-edition-switch");
    expect(buildSlug("switch")("Wargroove")).to.be.eq("wargroove-switch");
    expect(buildSlug("switch")("ACA NEOGEO THE KING OF FIGHTERS '94")).to.be.eq(
      "aca-neogeo-the-king-of-fighters-94-switch",
    );
    expect(buildSlug("switch")("TumbleSeed")).to.be.eq("tumbleseed-switch");
    expect(buildSlug("switch")("Yooka-Laylee")).to.be.eq("yooka-laylee-switch");
    expect(buildSlug("switch")("ACA NEOGEO METAL SLUG")).to.be.eq("aca-neogeo-metal-slug-switch");
    expect(buildSlug("switch")("ACA NEOGEO ALPHA MISSION II")).to.be.eq("aca-neogeo-alpha-mission-ii-switch");
    expect(buildSlug("switch")("ACA NEOGEO NEO TURF MASTERS")).to.be.eq("aca-neogeo-neo-turf-masters-switch");
    expect(buildSlug("switch")("Shakedown: Hawaii")).to.be.eq("shakedown-hawaii-switch");
    expect(buildSlug("switch")("Flipping Death")).to.be.eq("flipping-death-switch");
    expect(buildSlug("switch")("Little Inferno")).to.be.eq("little-inferno-switch");
    expect(buildSlug("switch")("Human Resource Machine")).to.be.eq("human-resource-machine-switch");
    expect(buildSlug("switch")("World of Goo")).to.be.eq("world-of-goo-switch");
    expect(buildSlug("switch")("The Jackbox Party Pack 3")).to.be.eq("the-jackbox-party-pack-3-switch");
    expect(buildSlug("switch")("Wonder Boy: The Dragon's Trap")).to.be.eq("wonder-boy-the-dragons-trap-switch");
    expect(buildSlug("switch")("ACA NEOGEO SAMURAI SHODOWN IV")).to.be.eq("aca-neogeo-samurai-shodown-iv-switch");
    expect(buildSlug("switch")("ACA NEOGEO FATAL FURY")).to.be.eq("aca-neogeo-fatal-fury-switch");
    expect(buildSlug("switch")("ACA NEOGEO BLAZING STAR")).to.be.eq("aca-neogeo-blazing-star-switch");
    expect(buildSlug("switch")("ACA NEOGEO OVER TOP")).to.be.eq("aca-neogeo-over-top-switch");
    expect(buildSlug("switch")("Mr. Shifty")).to.be.eq("mr-shifty-switch");
    expect(buildSlug("switch")("KAMIKO")).to.be.eq("kamiko-switch");
    expect(buildSlug("switch")("NAMCO MUSEUM™")).to.be.eq("namco-museum-switch");
    expect(buildSlug("switch")("Astro Duel Deluxe")).to.be.eq("astro-duel-deluxe-switch");
    expect(buildSlug("switch")("ACA NEOGEO GAROU: MARK OF THE WOLVES")).to.be.eq(
      "aca-neogeo-garou-mark-of-the-wolves-switch",
    );
    expect(buildSlug("switch")("ACA NEOGEO GALAXY FIGHT: UNIVERSAL WARRIORS")).to.be.eq(
      "aca-neogeo-galaxy-fight-universal-warriors-switch",
    );
    expect(buildSlug("switch")("ACA NEOGEO THE KING OF FIGHTERS '99")).to.be.eq(
      "aca-neogeo-the-king-of-fighters-99-switch",
    );
    expect(buildSlug("switch")("ACA NEOGEO LAST RESORT")).to.be.eq("aca-neogeo-last-resort-switch");
    expect(buildSlug("switch")("Shantae: Half-Genie Hero")).to.be.eq("shantae-half-genie-hero-switch");
    expect(buildSlug("switch")("Dark Witch Music Episode: Rudymical")).to.be.eq(
      "dark-witch-music-episode-rudymical-switch",
    );
    expect(buildSlug("switch")("Thumper")).to.be.eq("thumper-switch");
    expect(buildSlug("switch")("Flip Wars")).to.be.eq("flip-wars-switch");
    expect(buildSlug("switch")("GoNNER")).to.be.eq("gonner-switch");
    expect(buildSlug("switch")("ACA NEOGEO SHOCK TROOPERS 2nd Squad")).to.be.eq(
      "aca-neogeo-shock-troopers-2nd-squad-switch",
    );
    expect(buildSlug("switch")("Oceanhorn - Monster of Uncharted Seas")).to.be.eq(
      "oceanhorn-monster-of-uncharted-seas-switch",
    );
    expect(buildSlug("switch")("ACA NEOGEO MAGICAL DROP II")).to.be.eq("aca-neogeo-magical-drop-ii-switch");
    expect(buildSlug("switch")("ACA NEOGEO FATAL FURY 2")).to.be.eq("aca-neogeo-fatal-fury-2-switch");
    expect(buildSlug("switch")("MIGHTY GUNVOLT BURST")).to.be.eq("mighty-gunvolt-burst-switch");
    expect(buildSlug("switch")("ACA NEOGEO SENGOKU")).to.be.eq("aca-neogeo-sengoku-switch");
    expect(buildSlug("switch")("Physical Contact: SPEED")).to.be.eq("physical-contact-speed-switch");
    expect(buildSlug("switch")("ACA NEOGEO FATAL FURY SPECIAL")).to.be.eq("aca-neogeo-fatal-fury-special-switch");
    expect(buildSlug("switch")("ACA NEOGEO METAL SLUG 2")).to.be.eq("aca-neogeo-metal-slug-2-switch");
    expect(buildSlug("switch")("Death Squared")).to.be.eq("death-squared-switch");
    expect(buildSlug("switch")("Bulb Boy")).to.be.eq("bulb-boy-switch");
    expect(buildSlug("switch")("IMPLOSION")).to.be.eq("implosion-switch");
    expect(buildSlug("switch")("Vaccine")).to.be.eq("vaccine-switch");
    expect(buildSlug("switch")("Shephy")).to.be.eq("shephy-switch");
    expect(buildSlug("switch")("I and Me")).to.be.eq("i-and-me-switch");
    expect(buildSlug("switch")("ACA NEOGEO SAMURAI SHODOWN")).to.be.eq("aca-neogeo-samurai-shodown-switch");
    expect(buildSlug("switch")("ACA NEOGEO SUPER SIDEKICKS")).to.be.eq("aca-neogeo-super-sidekicks-switch");
    expect(buildSlug("switch")("Infinite Minigolf")).to.be.eq("infinite-minigolf-switch");
    expect(buildSlug("switch")("Retro City Rampage DX")).to.be.eq("retro-city-rampage-dx-switch");
    expect(buildSlug("switch")("Levels+ : Addictive Puzzle Game")).to.be.eq("levels-addictive-puzzle-game-switch");
    expect(buildSlug("switch")("PAC-MAN VS. Free Multiplayer-only Ver.")).to.be.eq(
      "pac-man-vs-free-multiplayer-only-ver-switch",
    );
    expect(buildSlug("switch")("Ultra Hyperball")).to.be.eq("ultra-hyperball-switch");
    expect(buildSlug("switch")("BOOST BEAST")).to.be.eq("boost-beast-switch");
    expect(buildSlug("switch")("Qbics Paint")).to.be.eq("qbics-paint-switch");
    expect(buildSlug("switch")("Use Your Words")).to.be.eq("use-your-words-switch");
    expect(buildSlug("switch")("IRONCAST")).to.be.eq("ironcast-switch");
    expect(buildSlug("switch")("Slime-san")).to.be.eq("slime-san-switch");
    expect(buildSlug("switch")("ACA NEOGEO AERO FIGHTERS 2")).to.be.eq("aca-neogeo-aero-fighters-2-switch");
    expect(buildSlug("switch")("Puzzle Adventure Blockle")).to.be.eq("puzzle-adventure-blockle-switch");
    expect(buildSlug("switch")("Physical Contact: 2048")).to.be.eq("physical-contact-2048-switch");
    expect(buildSlug("switch")("Rocket Fist")).to.be.eq("rocket-fist-switch");
    expect(buildSlug("switch")("STRIKERS1945 for Nintendo Switch")).to.be.eq("strikers1945-for-nintendo-switch");
    expect(buildSlug("switch")("GUNBARICH for Nintendo Switch™")).to.be.eq("gunbarich-for-nintendo-switch");
    expect(buildSlug("switch")("The Jackbox Party Pack")).to.be.eq("the-jackbox-party-pack-switch");
    expect(buildSlug("switch")("Severed")).to.be.eq("severed-switch");
    expect(buildSlug("switch")("The Jackbox Party Pack 2")).to.be.eq("the-jackbox-party-pack-2-switch");
    expect(buildSlug("switch")("Troll and I™")).to.be.eq("troll-and-i-switch");
    expect(buildSlug("switch")("ACA NEOGEO THE KING OF FIGHTERS 2000")).to.be.eq(
      "aca-neogeo-the-king-of-fighters-2000-switch",
    );
    expect(buildSlug("switch")("Piczle Lines DX")).to.be.eq("piczle-lines-dx-switch");
    expect(buildSlug("switch")("forma.8")).to.be.eq("forma8-switch");
    expect(buildSlug("switch")("ACA NEOGEO MAGICIAN LORD")).to.be.eq("aca-neogeo-magician-lord-switch");
    expect(buildSlug("switch")("Phantom Trigger")).to.be.eq("phantom-trigger-switch");
    expect(buildSlug("switch")("Yoku's Island Express")).to.be.eq("yokus-island-express-switch");
    expect(buildSlug("switch")("Monster Boy and the Cursed Kingdom")).to.be.eq(
      "monster-boy-and-the-cursed-kingdom-switch",
    );
    expect(buildSlug("switch")("Nine Parchments")).to.be.eq("nine-parchments-switch");
    expect(buildSlug("switch")("Azure Striker GUNVOLT: STRIKER PACK")).to.be.eq(
      "azure-striker-gunvolt-striker-pack-switch",
    );
    expect(buildSlug("switch")("Away: Journey to the Unexpected")).to.be.eq("away-journey-to-the-unexpected-switch");
    expect(buildSlug("switch")("ACA NEOGEO ZED BLADE")).to.be.eq("aca-neogeo-zed-blade-switch");
    expect(buildSlug("switch")("ACA NEOGEO PUZZLED")).to.be.eq("aca-neogeo-puzzled-switch");
    expect(buildSlug("switch")("Sky Ride")).to.be.eq("sky-ride-switch");
    expect(buildSlug("switch")("R.B.I. Baseball 17")).to.be.eq("rbi-baseball-17-switch");
    expect(buildSlug("switch")("Lichtspeer: Double Speer Edition")).to.be.eq("lichtspeer-double-speer-edition-switch");
    expect(buildSlug("switch")("ACA NEOGEO BLUE'S JOURNEY")).to.be.eq("aca-neogeo-blues-journey-switch");
    expect(buildSlug("switch")("NeuroVoider")).to.be.eq("neurovoider-switch");
    expect(buildSlug("switch")("Quest of Dungeons")).to.be.eq("quest-of-dungeons-switch");
    expect(buildSlug("switch")("League of Evil")).to.be.eq("league-of-evil-switch");
    expect(buildSlug("switch")("Semispheres")).to.be.eq("semispheres-switch");
    expect(buildSlug("switch")("Double Dragon 4")).to.be.eq("double-dragon-4-switch");
    expect(buildSlug("switch")("Conga Master Party!")).to.be.eq("conga-master-party-switch");
    expect(buildSlug("switch")("ACA NEOGEO SPIN MASTER")).to.be.eq("aca-neogeo-spin-master-switch");
    expect(buildSlug("switch")("Morphies Law")).to.be.eq("morphies-law-switch");
    expect(buildSlug("switch")("Arcade Archives Mario Bros.")).to.be.eq("arcade-archives-mario-bros-switch");
    expect(buildSlug("switch")("Kingdom: New Lands")).to.be.eq("kingdom-new-lands-switch");
    expect(buildSlug("switch")("Robonauts")).to.be.eq("robonauts-switch");
    expect(buildSlug("switch")("36 Fragments of Midnight")).to.be.eq("36-fragments-of-midnight-switch");
    expect(buildSlug("switch")("Thimbleweed Park")).to.be.eq("thimbleweed-park-switch");
    expect(buildSlug("switch")("INVERSUS Deluxe")).to.be.eq("inversus-deluxe-switch");
    expect(buildSlug("switch")("Arena of Valor")).to.be.eq("arena-of-valor-switch");
    expect(buildSlug("switch")("ACA NEOGEO ART OF FIGHTING")).to.be.eq("aca-neogeo-art-of-fighting-switch");
    expect(buildSlug("switch")("DEEMO")).to.be.eq("deemo-switch");
    expect(buildSlug("switch")("Physical Contact: Picture Place")).to.be.eq("physical-contact-picture-place-switch");
    expect(buildSlug("switch")("Binaries")).to.be.eq("binaries-switch");
    expect(buildSlug("switch")("PICROSS S")).to.be.eq("picross-s-switch");
    expect(buildSlug("switch")("Lovers in a Dangerous Spacetime")).to.be.eq("lovers-in-a-dangerous-spacetime-switch");
    expect(buildSlug("switch")("ACA NEOGEO BURNING FIGHT")).to.be.eq("aca-neogeo-burning-fight-switch");
    expect(buildSlug("switch")("Pankapu")).to.be.eq("pankapu-switch");
    expect(buildSlug("switch")("BUTCHER")).to.be.eq("butcher-switch");
    expect(buildSlug("switch")("Sparkle 2")).to.be.eq("sparkle-2-switch");
    expect(buildSlug("switch")("Golf Story")).to.be.eq("golf-story-switch");
    expect(buildSlug("switch")("Axiom Verge")).to.be.eq("axiom-verge-switch");
    expect(buildSlug("switch")("Ninja Shodown")).to.be.eq("ninja-shodown-switch");
    expect(buildSlug("switch")("ACA NEOGEO THE KING OF FIGHTERS '95")).to.be.eq(
      "aca-neogeo-the-king-of-fighters-95-switch",
    );
    expect(buildSlug("switch")("Squareboy vs Bullies: Arena Edition")).to.be.eq(
      "squareboy-vs-bullies-arena-edition-switch",
    );
    expect(buildSlug("switch")("ACA NEOGEO METAL SLUG X")).to.be.eq("aca-neogeo-metal-slug-x-switch");
    expect(buildSlug("switch")("Oxenfree")).to.be.eq("oxenfree-switch");
    expect(buildSlug("switch")("Tower Of Babel")).to.be.eq("tower-of-babel-switch");
    expect(buildSlug("switch")("JYDGE")).to.be.eq("jydge-switch");
    expect(buildSlug("switch")("Yono and the Celestial Elephants")).to.be.eq("yono-and-the-celestial-elephants-switch");
    expect(buildSlug("switch")("The Count Lucanor")).to.be.eq("the-count-lucanor-switch");
    expect(buildSlug("switch")("88 Heroes - 98 Heroes Edition")).to.be.eq("88-heroes-98-heroes-edition-switch");
    expect(buildSlug("switch")("Neon Chrome")).to.be.eq("neon-chrome-switch");
    expect(buildSlug("switch")("Wulverblade")).to.be.eq("wulverblade-switch");
    expect(buildSlug("switch")("Don't Knock Twice")).to.be.eq("dont-knock-twice-switch");
    expect(buildSlug("switch")("Tiny Barbarian DX")).to.be.eq("tiny-barbarian-dx-switch");
    expect(buildSlug("switch")("Revenant Saga")).to.be.eq("revenant-saga-switch");
    expect(buildSlug("switch")("The Jackbox Party Pack 4")).to.be.eq("the-jackbox-party-pack-4-switch");
    expect(buildSlug("switch")("Rogue Trooper Redux")).to.be.eq("rogue-trooper-redux-switch");
    expect(buildSlug("switch")("ACA NEOGEO MUTATION NATION")).to.be.eq("aca-neogeo-mutation-nation-switch");
    expect(buildSlug("switch")("Putty Pals")).to.be.eq("putty-pals-switch");
    expect(buildSlug("switch")("ACA NEOGEO ROBO ARMY")).to.be.eq("aca-neogeo-robo-army-switch");
    expect(buildSlug("switch")("Knight Terrors")).to.be.eq("knight-terrors-switch");
    expect(buildSlug("switch")("Party Golf")).to.be.eq("party-golf-switch");
    expect(buildSlug("switch")("Elliot Quest")).to.be.eq("elliot-quest-switch");
    expect(buildSlug("switch")("The Mummy Demastered")).to.be.eq("the-mummy-demastered-switch");
    expect(buildSlug("switch")("Wheels of Aurelia")).to.be.eq("wheels-of-aurelia-switch");
    expect(buildSlug("switch")("Time Recoil")).to.be.eq("time-recoil-switch");
    expect(buildSlug("switch")("Splasher")).to.be.eq("splasher-switch");
    expect(buildSlug("switch")("Moon Hunters")).to.be.eq("moon-hunters-switch");
    expect(buildSlug("switch")("Violett")).to.be.eq("violett-switch");
    expect(buildSlug("switch")("King Oddball")).to.be.eq("king-oddball-switch");
    expect(buildSlug("switch")("ZOMBIE GOLD RUSH")).to.be.eq("zombie-gold-rush-switch");
    expect(buildSlug("switch")("Super Beat Sports™")).to.be.eq("super-beat-sports-switch");
    expect(buildSlug("switch")("Chess Ultra")).to.be.eq("chess-ultra-switch");
    expect(buildSlug("switch")("Heroes of the Monkey Tavern")).to.be.eq("heroes-of-the-monkey-tavern-switch");
    expect(buildSlug("switch")("ACA NEOGEO ART OF FIGHTING 3")).to.be.eq("aca-neogeo-art-of-fighting-3-switch");
    expect(buildSlug("switch")("Sparkle 2 EVO")).to.be.eq("sparkle-2-evo-switch");
    expect(buildSlug("switch")("Perception")).to.be.eq("perception-switch");
    expect(buildSlug("switch")("Octodad: Dadliest Catch")).to.be.eq("octodad-dadliest-catch-switch");
    expect(buildSlug("switch")("ACA NEOGEO KARNOV'S REVENGE")).to.be.eq("aca-neogeo-karnovs-revenge-switch");
    expect(buildSlug("switch")("Tallowmere")).to.be.eq("tallowmere-switch");
    expect(buildSlug("switch")("ACA NEOGEO STREET HOOP")).to.be.eq("aca-neogeo-street-hoop-switch");
    expect(buildSlug("switch")("Antiquia Lost")).to.be.eq("antiquia-lost-switch");
    expect(buildSlug("switch")("Rock 'N Racing Off Road DX")).to.be.eq("rock-n-racing-off-road-dx-switch");
    expect(buildSlug("switch")("Transcripted")).to.be.eq("transcripted-switch");
    expect(buildSlug("switch")("VVVVVV")).to.be.eq("vvvvvv-switch");
    expect(buildSlug("switch")("Maria The Witch")).to.be.eq("maria-the-witch-switch");
    expect(buildSlug("switch")("Spellspire")).to.be.eq("spellspire-switch");
    expect(buildSlug("switch")("Aces of the Luftwaffe - Squadron")).to.be.eq("aces-of-the-luftwaffe-squadron-switch");
    expect(buildSlug("switch")("Dead Synchronicity: Tomorrow Comes Today")).to.be.eq(
      "dead-synchronicity-tomorrow-comes-today-switch",
    );
    expect(buildSlug("switch")("Stick It to The Man")).to.be.eq("stick-it-to-the-man-switch");
    expect(buildSlug("switch")("Battle Chef Brigade")).to.be.eq("battle-chef-brigade-switch");
    expect(buildSlug("switch")("Xenoraid")).to.be.eq("xenoraid-switch");
    expect(buildSlug("switch")("Unepic")).to.be.eq("unepic-switch");
    expect(buildSlug("switch")("Kid Tripp")).to.be.eq("kid-tripp-switch");
    expect(buildSlug("switch")("Worms W.M.D")).to.be.eq("worms-wmd-switch");
    expect(buildSlug("switch")("Mantis Burn Racing")).to.be.eq("mantis-burn-racing-switch");
    expect(buildSlug("switch")("Resident Evil Revelations 2")).to.be.eq("resident-evil-revelations-2-switch");
    expect(buildSlug("switch")("Resident Evil Revelations")).to.be.eq("resident-evil-revelations-switch");
    expect(buildSlug("switch")("ACA NEOGEO SOCCER BRAWL")).to.be.eq("aca-neogeo-soccer-brawl-switch");
    expect(buildSlug("switch")("Poi: Explorer Edition")).to.be.eq("poi-explorer-edition-switch");
    expect(buildSlug("switch")("Letter Quest Remastered")).to.be.eq("letter-quest-remastered-switch");
    expect(buildSlug("switch")("Crimsonland")).to.be.eq("crimsonland-switch");
    expect(buildSlug("switch")("Arcade Archives Traverse USA")).to.be.eq("arcade-archives-traverse-usa-switch");
    expect(buildSlug("switch")("OPUS: The Day We Found Earth")).to.be.eq("opus-the-day-we-found-earth-switch");
    expect(buildSlug("switch")("ACA NEOGEO WORLD HEROES")).to.be.eq("aca-neogeo-world-heroes-switch");
    expect(buildSlug("switch")("Star Ghost")).to.be.eq("star-ghost-switch");
    expect(buildSlug("switch")("Caveman Warriors")).to.be.eq("caveman-warriors-switch");
    expect(buildSlug("switch")("Embers of Mirrim")).to.be.eq("embers-of-mirrim-switch");
    expect(buildSlug("switch")("ACORN Tactics")).to.be.eq("acorn-tactics-switch");
    expect(buildSlug("switch")("MUJO")).to.be.eq("mujo-switch");
    expect(buildSlug("switch")("Bayonetta")).to.be.eq("bayonetta-switch");
    expect(buildSlug("switch")("Human: Fall Flat")).to.be.eq("human-fall-flat-switch");
    expect(buildSlug("switch")("ACA NEOGEO TOP HUNTER RODDY & CATHY")).to.be.eq(
      "aca-neogeo-top-hunter-roddy-and-cathy-switch",
    );
    expect(buildSlug("switch")("Phantom Breaker: Battle Grounds Overdrive")).to.be.eq(
      "phantom-breaker-battle-grounds-overdrive-switch",
    );
    expect(buildSlug("switch")("Dimension Drive")).to.be.eq("dimension-drive-switch");
    expect(buildSlug("switch")("Vostok Inc.")).to.be.eq("vostok-inc-switch");
    expect(buildSlug("switch")("Slain: Back From Hell")).to.be.eq("slain-back-from-hell-switch");
    expect(buildSlug("switch")("Puzzle Box Maker")).to.be.eq("puzzle-box-maker-switch");
    expect(buildSlug("switch")("Tennis in the Face")).to.be.eq("tennis-in-the-face-switch");
    expect(buildSlug("switch")("The Sexy Brutale")).to.be.eq("the-sexy-brutale-switch");
    expect(buildSlug("switch")("Mutant Mudds Collection")).to.be.eq("mutant-mudds-collection-switch");
    expect(buildSlug("switch")("Teslagrad")).to.be.eq("teslagrad-switch");
    expect(buildSlug("switch")("ACA NEOGEO THE LAST BLADE")).to.be.eq("aca-neogeo-the-last-blade-switch");
    expect(buildSlug("switch")("One More Dungeon")).to.be.eq("one-more-dungeon-switch");
    expect(buildSlug("switch")("The End Is Nigh")).to.be.eq("the-end-is-nigh-switch");
    expect(buildSlug("switch")("GUNBIRD for Nintendo Switch")).to.be.eq("gunbird-for-nintendo-switch");
    expect(buildSlug("switch")("Yōdanji")).to.be.eq("yodanji-switch");
    expect(buildSlug("switch")("Stern Pinball Arcade")).to.be.eq("stern-pinball-arcade-switch");
    expect(buildSlug("switch")("SteamWorld Heist: Ultimate Edition")).to.be.eq(
      "steamworld-heist-ultimate-edition-switch",
    );
    expect(buildSlug("switch")("Max: The Curse of Brotherhood")).to.be.eq("max-the-curse-of-brotherhood-switch");
    expect(buildSlug("switch")("Hiragana Pixel Party")).to.be.eq("hiragana-pixel-party-switch");
    expect(buildSlug("switch")("Plantera Deluxe")).to.be.eq("plantera-deluxe-switch");
    expect(buildSlug("switch")("Pinball FX3")).to.be.eq("pinball-fx3-switch");
    expect(buildSlug("switch")("Bleed")).to.be.eq("bleed-switch");
    expect(buildSlug("switch")("Poly Bridge")).to.be.eq("poly-bridge-switch");
    expect(buildSlug("switch")("Crawl")).to.be.eq("crawl-switch");
    expect(buildSlug("switch")("Tiny Troopers Joint Ops XL")).to.be.eq("tiny-troopers-joint-ops-xl-switch");
    expect(buildSlug("switch")("Romancing SaGa 2")).to.be.eq("romancing-saga-2-switch");
    expect(buildSlug("switch")("FruitFall Crush")).to.be.eq("fruitfall-crush-switch");
    expect(buildSlug("switch")("DragonFangZ - The Rose & Dungeon of Time")).to.be.eq(
      "dragonfangz-the-rose-and-dungeon-of-time-switch",
    );
    expect(buildSlug("switch")("ACA NEOGEO PULSTAR")).to.be.eq("aca-neogeo-pulstar-switch");
    expect(buildSlug("switch")("Gorogoa")).to.be.eq("gorogoa-switch");
    expect(buildSlug("switch")("The Deer God")).to.be.eq("the-deer-god-switch");
    expect(buildSlug("switch")("Mom Hid My Game!")).to.be.eq("mom-hid-my-game-switch");
    expect(buildSlug("switch")("Brawlout")).to.be.eq("brawlout-switch");
    expect(buildSlug("switch")("Enter the Gungeon")).to.be.eq("enter-the-gungeon-switch");
    expect(buildSlug("switch")("Arcade Archives VS. SUPER MARIO BROS.")).to.be.eq(
      "arcade-archives-vs-super-mario-bros-switch",
    );
    expect(buildSlug("switch")("Blossom Tales: The Sleeping King")).to.be.eq("blossom-tales-the-sleeping-king-switch");
    expect(buildSlug("switch")("The Next Penelope")).to.be.eq("the-next-penelope-switch");
    expect(buildSlug("switch")("Frederic: Resurrection of Music")).to.be.eq("frederic-resurrection-of-music-switch");
    expect(buildSlug("switch")("Floor Kids")).to.be.eq("floor-kids-switch");
    expect(buildSlug("switch")("The Coma: Recut")).to.be.eq("the-coma-recut-switch");
    expect(buildSlug("switch")("60 Seconds!")).to.be.eq("60-seconds-switch");
    expect(buildSlug("switch")("Bloody Zombies")).to.be.eq("bloody-zombies-switch");
    expect(buildSlug("switch")("Guns, Gore and Cannoli")).to.be.eq("guns-gore-and-cannoli-switch");
    expect(buildSlug("switch")("Pic-a-Pix Deluxe")).to.be.eq("pic-a-pix-deluxe-switch");
    expect(buildSlug("switch")("Hammerwatch")).to.be.eq("hammerwatch-switch");
    expect(buildSlug("switch")("Woodle Tree Adventures")).to.be.eq("woodle-tree-adventures-switch");
    expect(buildSlug("switch")("TINY METAL")).to.be.eq("tiny-metal-switch");
    expect(buildSlug("switch")("Heart&Slash")).to.be.eq("heartandslash-switch");
    expect(buildSlug("switch")("Energy Cycle")).to.be.eq("energy-cycle-switch");
    expect(buildSlug("switch")("RXN -Raijin-")).to.be.eq("rxn-raijin-switch");
    expect(buildSlug("switch")("Stikbold! A Dodgeball Adventure DELUXE")).to.be.eq(
      "stikbold-a-dodgeball-adventure-deluxe-switch",
    );
    expect(buildSlug("switch")("ACA NEOGEO THE KING OF FIGHTERS '96")).to.be.eq(
      "aca-neogeo-the-king-of-fighters-96-switch",
    );
    expect(buildSlug("switch")("ACA NEOGEO KING OF THE MONSTERS")).to.be.eq("aca-neogeo-king-of-the-monsters-switch");
    expect(buildSlug("switch")("Never Stop Sneakin'")).to.be.eq("never-stop-sneakin-switch");
    expect(buildSlug("switch")("Grand Prix Rock 'N Racing")).to.be.eq("grand-prix-rock-n-racing-switch");
    expect(buildSlug("switch")("Furi")).to.be.eq("furi-switch");
    expect(buildSlug("switch")("Sparkle Unleashed")).to.be.eq("sparkle-unleashed-switch");
    expect(buildSlug("switch")("Moorhuhn Knights & Castles")).to.be.eq("moorhuhn-knights-and-castles-switch");
    expect(buildSlug("switch")("NBA Playgrounds - Enhanced Edition")).to.be.eq(
      "nba-playgrounds-enhanced-edition-switch",
    );
    expect(buildSlug("switch")("Black The Fall")).to.be.eq("black-the-fall-switch");
    expect(buildSlug("switch")("OF MICE AND SAND -REVISED-")).to.be.eq("of-mice-and-sand-revised-switch");
    expect(buildSlug("switch")("Azkend 2: The World Beneath")).to.be.eq("azkend-2-the-world-beneath-switch");
    expect(buildSlug("switch")("Vesta")).to.be.eq("vesta-switch");
    expect(buildSlug("switch")("Nuclien")).to.be.eq("nuclien-switch");
    expect(buildSlug("switch")("Gunhouse")).to.be.eq("gunhouse-switch");
    expect(buildSlug("switch")("Energy Invasion")).to.be.eq("energy-invasion-switch");
    expect(buildSlug("switch")("World to the West")).to.be.eq("world-to-the-west-switch");
    expect(buildSlug("switch")("Super Meat Boy")).to.be.eq("super-meat-boy-switch");
    expect(buildSlug("switch")("ACA NEOGEO ART OF FIGHTING 2")).to.be.eq("aca-neogeo-art-of-fighting-2-switch");
    expect(buildSlug("switch")("InnerSpace")).to.be.eq("innerspace-switch");
    expect(buildSlug("switch")("ChromaGun")).to.be.eq("chromagun-switch");
    expect(buildSlug("switch")("Rally Racers")).to.be.eq("rally-racers-switch");
    expect(buildSlug("switch")("Nightmare Boy")).to.be.eq("nightmare-boy-switch");
    expect(buildSlug("switch")("Shu")).to.be.eq("shu-switch");
    expect(buildSlug("switch")("Energy Balance")).to.be.eq("energy-balance-switch");
    expect(buildSlug("switch")("Oh...Sir! The Insult Simulator")).to.be.eq("ohsir-the-insult-simulator-switch");
    expect(buildSlug("switch")("Oh...Sir! The Hollywood Roast")).to.be.eq("ohsir-the-hollywood-roast-switch");
    expect(buildSlug("switch")("Arcade Archives DOUBLE DRAGON")).to.be.eq("arcade-archives-double-dragon-switch");
    expect(buildSlug("switch")("ACA NEOGEO WORLD HEROES 2")).to.be.eq("aca-neogeo-world-heroes-2-switch");
    expect(buildSlug("switch")("ACA NEOGEO POWER SPIKES II")).to.be.eq("aca-neogeo-power-spikes-ii-switch");
    expect(buildSlug("switch")("Ambition of the Slimes")).to.be.eq("ambition-of-the-slimes-switch");
    expect(buildSlug("switch")("Baseball Riot")).to.be.eq("baseball-riot-switch");
    expect(buildSlug("switch")("BRAWL")).to.be.eq("brawl-switch");
    expect(buildSlug("switch")("ATOMIK: RunGunJumpGun")).to.be.eq("atomik-rungunjumpgun-switch");
    expect(buildSlug("switch")("Super One More Jump")).to.be.eq("super-one-more-jump-switch");
    expect(buildSlug("switch")("Dustoff Heli Rescue 2")).to.be.eq("dustoff-heli-rescue-2-switch");
    expect(buildSlug("switch")("ZERO GUNNER 2- for Nintendo Switch")).to.be.eq("zero-gunner-2-for-nintendo-switch");
    expect(buildSlug("switch")("FANTASY HERO ～unsigned legacy～")).to.be.eq("fantasy-hero-unsigned-legacy-switch");
    expect(buildSlug("switch")("Qbik")).to.be.eq("qbik-switch");
    expect(buildSlug("switch")("Castle of Heart")).to.be.eq("castle-of-heart-switch");
    expect(buildSlug("switch")("Arcade Archives Kid Niki Radical Ninja")).to.be.eq(
      "arcade-archives-kid-niki-radical-ninja-switch",
    );
    expect(buildSlug("switch")("ACA NEOGEO SAMURAI SHODOWN II")).to.be.eq("aca-neogeo-samurai-shodown-ii-switch");
    expect(buildSlug("switch")("Sky Force Reloaded")).to.be.eq("sky-force-reloaded-switch");
    expect(buildSlug("switch")("SteamWorld Dig")).to.be.eq("steamworld-dig-switch");
    expect(buildSlug("switch")("STRIKERS 1945 II for Nintendo Switch")).to.be.eq(
      "strikers-1945-ii-for-nintendo-switch",
    );
    expect(buildSlug("switch")("Aegis Defenders")).to.be.eq("aegis-defenders-switch");
    expect(buildSlug("switch")("EARTH WARS")).to.be.eq("earth-wars-switch");
    expect(buildSlug("switch")("TorqueL -Physics Modified Edition-")).to.be.eq(
      "torquel-physics-modified-edition-switch",
    );
    expect(buildSlug("switch")("Shiftlings - Enhanced Edition")).to.be.eq("shiftlings-enhanced-edition-switch");
    expect(buildSlug("switch")("Frederic 2: Evil Strikes Back")).to.be.eq("frederic-2-evil-strikes-back-switch");
    expect(buildSlug("switch")("AeternoBlade")).to.be.eq("aeternoblade-switch");
    expect(buildSlug("switch")("Her Majesty's SPIFFING")).to.be.eq("her-majestys-spiffing-switch");
    expect(buildSlug("switch")("Disc Jam")).to.be.eq("disc-jam-switch");
    expect(buildSlug("switch")("Mad Carnage")).to.be.eq("mad-carnage-switch");
    expect(buildSlug("switch")("The Men of Yoshiwara: Kikuya")).to.be.eq("the-men-of-yoshiwara-kikuya-switch");
    expect(buildSlug("switch")("Draw a Stickman: EPIC 2")).to.be.eq("draw-a-stickman-epic-2-switch");
    expect(buildSlug("switch")("Arcade Archives CRAZY CLIMBER")).to.be.eq("arcade-archives-crazy-climber-switch");
    expect(buildSlug("switch")("Typoman")).to.be.eq("typoman-switch");
    expect(buildSlug("switch")("Premium Pool Arena")).to.be.eq("premium-pool-arena-switch");
    expect(buildSlug("switch")("Owlboy")).to.be.eq("owlboy-switch");
    expect(buildSlug("switch")("Black Hole")).to.be.eq("black-hole-switch");
    expect(buildSlug("switch")("Crypt of the NecroDancer: Nintendo Switch Edition")).to.be.eq(
      "crypt-of-the-necrodancer-nintendo-switch-edition-switch",
    );
    expect(buildSlug("switch")("Joe Dever's Lone Wolf")).to.be.eq("joe-devers-lone-wolf-switch");
    expect(buildSlug("switch")("ACA NEOGEO 2020 SUPER BASEBALL")).to.be.eq("aca-neogeo-2020-super-baseball-switch");
    expect(buildSlug("switch")("ACA NEOGEO FATAL FURY 3")).to.be.eq("aca-neogeo-fatal-fury-3-switch");
    expect(buildSlug("switch")("AQUA KITTY UDX")).to.be.eq("aqua-kitty-udx-switch");
    expect(buildSlug("switch")("Old Man's Journey")).to.be.eq("old-mans-journey-switch");
    expect(buildSlug("switch")("The Darkside Detective")).to.be.eq("the-darkside-detective-switch");
    expect(buildSlug("switch")("Millie")).to.be.eq("millie-switch");
    expect(buildSlug("switch")("Manticore - Galaxy on Fire")).to.be.eq("manticore-galaxy-on-fire-switch");
    expect(buildSlug("switch")("The Fall Part 2: Unbound")).to.be.eq("the-fall-part-2-unbound-switch");
    expect(buildSlug("switch")("Mulaka")).to.be.eq("mulaka-switch");
    expect(buildSlug("switch")("Wanderjahr TryAgainOrWalkAway")).to.be.eq("wanderjahr-tryagainorwalkaway-switch");
    expect(buildSlug("switch")("Samurai Aces for Nintendo Switch™")).to.be.eq("samurai-aces-for-nintendo-switch");
    expect(buildSlug("switch")("Super Toy Cars")).to.be.eq("super-toy-cars-switch");
    expect(buildSlug("switch")("Ace of Seafood")).to.be.eq("ace-of-seafood-switch");
    expect(buildSlug("switch")("Xeodrifter")).to.be.eq("xeodrifter-switch");
    expect(buildSlug("switch")("Toki Tori 2+: Nintendo Switch Edition")).to.be.eq(
      "toki-tori-2-nintendo-switch-edition-switch",
    );
    expect(buildSlug("switch")("PAC-MAN™ Championship Edition 2 PLUS")).to.be.eq(
      "pac-man-championship-edition-2-plus-switch",
    );
    expect(buildSlug("switch")("Radiation Island")).to.be.eq("radiation-island-switch");
    expect(buildSlug("switch")("Twin Robots: Ultimate Edition")).to.be.eq("twin-robots-ultimate-edition-switch");
    expect(buildSlug("switch")("Space Dave")).to.be.eq("space-dave-switch");
    expect(buildSlug("switch")("Dragon Sinker")).to.be.eq("dragon-sinker-switch");
    expect(buildSlug("switch")("Puzzle Puppers")).to.be.eq("puzzle-puppers-switch");
    expect(buildSlug("switch")("Layers of Fear: Legacy")).to.be.eq("layers-of-fear-legacy-switch");
    expect(buildSlug("switch")("Packet Queen #")).to.be.eq("packet-queen-switch");
    expect(buildSlug("switch")("Arcade Archives HEROIC EPISODE")).to.be.eq("arcade-archives-heroic-episode-switch");
    expect(buildSlug("switch")("Hollow")).to.be.eq("hollow-switch");
    expect(buildSlug("switch")("ACA NEOGEO MAGICAL DROP III")).to.be.eq("aca-neogeo-magical-drop-iii-switch");
    expect(buildSlug("switch")("A Normal Lost Phone")).to.be.eq("a-normal-lost-phone-switch");
    expect(buildSlug("switch")("Superola and the Lost Burgers")).to.be.eq("superola-and-the-lost-burgers-switch");
    expect(buildSlug("switch")("10 Second Run RETURNS")).to.be.eq("10-second-run-returns-switch");
    expect(buildSlug("switch")("Detention")).to.be.eq("detention-switch");
    expect(buildSlug("switch")("NORTH")).to.be.eq("north-switch");
    expect(buildSlug("switch")("Fear Effect Sedna")).to.be.eq("fear-effect-sedna-switch");
    expect(buildSlug("switch")("Steredenn: Binary Stars")).to.be.eq("steredenn-binary-stars-switch");
    expect(buildSlug("switch")("Bridge Constructor Portal")).to.be.eq("bridge-constructor-portal-switch");
    expect(buildSlug("switch")("The Final Station")).to.be.eq("the-final-station-switch");
    expect(buildSlug("switch")("Little Triangle")).to.be.eq("little-triangle-switch");
    expect(buildSlug("switch")("Spacecats with Lasers")).to.be.eq("spacecats-with-lasers-switch");
    expect(buildSlug("switch")("Spot The Difference")).to.be.eq("spot-the-difference-switch");
    expect(buildSlug("switch")("A Hole New World")).to.be.eq("a-hole-new-world-switch");
    expect(buildSlug("switch")("Outlast: Bundle of Terror")).to.be.eq("outlast-bundle-of-terror-switch");
    expect(buildSlug("switch")("Arcade Archives STAR FORCE")).to.be.eq("arcade-archives-star-force-switch");
    expect(buildSlug("switch")("ACA NEOGEO SENGOKU 2")).to.be.eq("aca-neogeo-sengoku-2-switch");
    expect(buildSlug("switch")("Subsurface Circular")).to.be.eq("subsurface-circular-switch");
    expect(buildSlug("switch")("Damascus Gear Operation Tokyo")).to.be.eq("damascus-gear-operation-tokyo-switch");
    expect(buildSlug("switch")("Poisoft Thud Card")).to.be.eq("poisoft-thud-card-switch");
    expect(buildSlug("switch")("Totes the Goat")).to.be.eq("totes-the-goat-switch");
    expect(buildSlug("switch")("ACA NEOGEO REAL BOUT FATAL FURY")).to.be.eq("aca-neogeo-real-bout-fatal-fury-switch");
    expect(buildSlug("switch")("30-in-1 Game Collection: Volume 1")).to.be.eq(
      "30-in-1-game-collection-volume-1-switch",
    );
    expect(buildSlug("switch")("The Trail: Frontier Challenge")).to.be.eq("the-trail-frontier-challenge-switch");
    expect(buildSlug("switch")("I, Zombie")).to.be.eq("i-zombie-switch");
    expect(buildSlug("switch")("Bombslinger")).to.be.eq("bombslinger-switch");
    expect(buildSlug("switch")("Bleed 2")).to.be.eq("bleed-2-switch");
    expect(buildSlug("switch")("Grid Mania")).to.be.eq("grid-mania-switch");
    expect(buildSlug("switch")("One Eyed Kutkh")).to.be.eq("one-eyed-kutkh-switch");
    expect(buildSlug("switch")("TurtlePop: Journey to Freedom")).to.be.eq("turtlepop-journey-to-freedom-switch");
    expect(buildSlug("switch")("Outlast 2")).to.be.eq("outlast-2-switch");
    expect(buildSlug("switch")("Bit Dungeon+")).to.be.eq("bit-dungeon-switch");
    expect(buildSlug("switch")("Sparkle 3 Genesis")).to.be.eq("sparkle-3-genesis-switch");
    expect(buildSlug("switch")("Midnight Deluxe")).to.be.eq("midnight-deluxe-switch");
    expect(buildSlug("switch")("EARTHLOCK")).to.be.eq("earthlock-switch");
    expect(buildSlug("switch")("Coffin Dodgers")).to.be.eq("coffin-dodgers-switch");
    expect(buildSlug("switch")("Kona")).to.be.eq("kona-switch");
    expect(buildSlug("switch")("Shantae and the Pirate's Curse")).to.be.eq("shantae-and-the-pirates-curse-switch");
    expect(buildSlug("switch")("WorldNeverland - Elnea Kingdom")).to.be.eq("worldneverland-elnea-kingdom-switch");
    expect(buildSlug("switch")("Danmaku Unlimited 3")).to.be.eq("danmaku-unlimited-3-switch");
    expect(buildSlug("switch")("Spy Chameleon")).to.be.eq("spy-chameleon-switch");
    expect(buildSlug("switch")("Gekido Kintaro's Revenge")).to.be.eq("gekido-kintaros-revenge-switch");
    expect(buildSlug("switch")("Deep Ones")).to.be.eq("deep-ones-switch");
    expect(buildSlug("switch")("ŌKAMI™ HD")).to.be.eq("okami-hd-switch");
    expect(buildSlug("switch")("Metropolis: Lux Obscura")).to.be.eq("metropolis-lux-obscura-switch");
    expect(buildSlug("switch")("ACA NEOGEO AERO FIGHTERS 3")).to.be.eq("aca-neogeo-aero-fighters-3-switch");
    expect(buildSlug("switch")("Toki Tori")).to.be.eq("toki-tori-switch");
    expect(buildSlug("switch")("Spiral Splatter")).to.be.eq("spiral-splatter-switch");
    expect(buildSlug("switch")("Neonwall")).to.be.eq("neonwall-switch");
    expect(buildSlug("switch")("Clustertruck")).to.be.eq("clustertruck-switch");
    expect(buildSlug("switch")("Last Day of June")).to.be.eq("last-day-of-june-switch");
    expect(buildSlug("switch")("Tesla vs Lovecraft")).to.be.eq("tesla-vs-lovecraft-switch");
    expect(buildSlug("switch")("OPUS: Rocket of Whispers")).to.be.eq("opus-rocket-of-whispers-switch");
    expect(buildSlug("switch")("ACA NEOGEO WORLD HEROES 2 JET")).to.be.eq("aca-neogeo-world-heroes-2-jet-switch");
    expect(buildSlug("switch")("Slayaway Camp: Butcher's Cut")).to.be.eq("slayaway-camp-butchers-cut-switch");
    expect(buildSlug("switch")("Swim Out")).to.be.eq("swim-out-switch");
    expect(buildSlug("switch")("Gate Of Doom")).to.be.eq("gate-of-doom-switch");
    expect(buildSlug("switch")("Alteric")).to.be.eq("alteric-switch");
    expect(buildSlug("switch")("NO THING")).to.be.eq("no-thing-switch");
    expect(buildSlug("switch")("The Adventures of Bertram Fiddle: Episode 1: A Dreadly Business")).to.be.eq(
      "the-adventures-of-bertram-fiddle-episode-1-a-dreadly-business-switch",
    );
    expect(buildSlug("switch")("Super Rocket Shootout")).to.be.eq("super-rocket-shootout-switch");
    expect(buildSlug("switch")("SOL DIVIDE -SWORD OF DARKNESS- for Nintendo Switch")).to.be.eq(
      "sol-divide-sword-of-darkness-for-nintendo-switch",
    );
    expect(buildSlug("switch")("Arcade Archives MOON PATROL")).to.be.eq("arcade-archives-moon-patrol-switch");
    expect(buildSlug("switch")("EAT BEAT DEADSPIKE-san")).to.be.eq("eat-beat-deadspike-san-switch");
    expect(buildSlug("switch")("Unholy Heights")).to.be.eq("unholy-heights-switch");
    expect(buildSlug("switch")("It's Spring Again")).to.be.eq("its-spring-again-switch");
    expect(buildSlug("switch")("Masters of Anima")).to.be.eq("masters-of-anima-switch");
    expect(buildSlug("switch")("Gotcha Racing 2nd")).to.be.eq("gotcha-racing-2nd-switch");
    expect(buildSlug("switch")("Word Search by POWGI")).to.be.eq("word-search-by-powgi-switch");
    expect(buildSlug("switch")("ACA NEOGEO SENGOKU 3")).to.be.eq("aca-neogeo-sengoku-3-switch");
    expect(buildSlug("switch")("Warp Shift")).to.be.eq("warp-shift-switch");
    expect(buildSlug("switch")("Farm Expert 2018 for Nintendo Switch™")).to.be.eq(
      "farm-expert-2018-for-nintendo-switch",
    );
    expect(buildSlug("switch")("Burly Men at Sea")).to.be.eq("burly-men-at-sea-switch");
    expect(buildSlug("switch")("Devious Dungeon")).to.be.eq("devious-dungeon-switch");
    expect(buildSlug("switch")("Shadow Bug")).to.be.eq("shadow-bug-switch");
    expect(buildSlug("switch")("D/Generation")).to.be.eq("d-generation-switch");
    expect(buildSlug("switch")("Animated Jigsaws: Beautiful Japanese Scenery")).to.be.eq(
      "animated-jigsaws-beautiful-japanese-scenery-switch",
    );
    expect(buildSlug("switch")("Lode Runner Legacy")).to.be.eq("lode-runner-legacy-switch");
    expect(buildSlug("switch")("BAFL - Brakes Are For Losers")).to.be.eq("bafl-brakes-are-for-losers-switch");
    expect(buildSlug("switch")("Arcade Archives PUNCH-OUT!!")).to.be.eq("arcade-archives-punch-out-switch");
    expect(buildSlug("switch")("Arcade Archives Ninja-Kid")).to.be.eq("arcade-archives-ninja-kid-switch");
    expect(buildSlug("switch")("TENGAI for Nintendo Switch")).to.be.eq("tengai-for-nintendo-switch");
    expect(buildSlug("switch")("Zombillie")).to.be.eq("zombillie-switch");
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Bad Dudes")).to.be.eq("johnny-turbos-arcade-bad-dudes-switch");
    expect(buildSlug("switch")("ACA NEOGEO SAMURAI SHODOWN III")).to.be.eq("aca-neogeo-samurai-shodown-iii-switch");
    expect(buildSlug("switch")("#Breakforcist Battle")).to.be.eq("breakforcist-battle-switch");
    expect(buildSlug("switch")("The Bunker")).to.be.eq("the-bunker-switch");
    expect(buildSlug("switch")("12 orbits")).to.be.eq("12-orbits-switch");
    expect(buildSlug("switch")("Sally's Law")).to.be.eq("sallys-law-switch");
    expect(buildSlug("switch")("Octocopter: Double or Squids")).to.be.eq("octocopter-double-or-squids-switch");
    expect(buildSlug("switch")("Sling Ming")).to.be.eq("sling-ming-switch");
    expect(buildSlug("switch")("MEMBRANE")).to.be.eq("membrane-switch");
    expect(buildSlug("switch")("Don’t Starve: Nintendo Switch Edition")).to.be.eq(
      "don-t-starve-nintendo-switch-edition-switch",
    );
    expect(buildSlug("switch")("Infernium")).to.be.eq("infernium-switch");
    expect(buildSlug("switch")("ACA NEOGEO Gururin")).to.be.eq("aca-neogeo-gururin-switch");
    expect(buildSlug("switch")("Asdivine Hearts")).to.be.eq("asdivine-hearts-switch");
    expect(buildSlug("switch")("Super Daryl Deluxe")).to.be.eq("super-daryl-deluxe-switch");
    expect(buildSlug("switch")("Splat the Fruit")).to.be.eq("splat-the-fruit-switch");
    expect(buildSlug("switch")("Drone Fight")).to.be.eq("drone-fight-switch");
    expect(buildSlug("switch")("Streets of Red - Devil's Dare Deluxe")).to.be.eq(
      "streets-of-red-devils-dare-deluxe-switch",
    );
    expect(buildSlug("switch")("The Way Remastered")).to.be.eq("the-way-remastered-switch");
    expect(buildSlug("switch")("Dragon Blaze for Nintendo Switch")).to.be.eq("dragon-blaze-for-nintendo-switch");
    expect(buildSlug("switch")("Die for Valhalla!")).to.be.eq("die-for-valhalla-switch");
    expect(buildSlug("switch")("Zotrix: Solar Division")).to.be.eq("zotrix-solar-division-switch");
    expect(buildSlug("switch")("Skies of Fury DX")).to.be.eq("skies-of-fury-dx-switch");
    expect(buildSlug("switch")("Where Are My Friends?")).to.be.eq("where-are-my-friends-switch");
    expect(buildSlug("switch")("Pirates: All Aboard!")).to.be.eq("pirates-all-aboard-switch");
    expect(buildSlug("switch")("Wild Guns™ Reloaded")).to.be.eq("wild-guns-reloaded-switch");
    expect(buildSlug("switch")("Ninja Striker!")).to.be.eq("ninja-striker-switch");
    expect(buildSlug("switch")("DragoDino")).to.be.eq("dragodino-switch");
    expect(buildSlug("switch")("Neo ATLAS 1469")).to.be.eq("neo-atlas-1469-switch");
    expect(buildSlug("switch")("Sky Rogue")).to.be.eq("sky-rogue-switch");
    expect(buildSlug("switch")("Save the Ninja Clan")).to.be.eq("save-the-ninja-clan-switch");
    expect(buildSlug("switch")("Sumer")).to.be.eq("sumer-switch");
    expect(buildSlug("switch")("Agatha Knife")).to.be.eq("agatha-knife-switch");
    expect(buildSlug("switch")("Jotun: Valhalla Edition")).to.be.eq("jotun-valhalla-edition-switch");
    expect(buildSlug("switch")("ACA NEOGEO REAL BOUT FATAL FURY SPECIAL")).to.be.eq(
      "aca-neogeo-real-bout-fatal-fury-special-switch",
    );
    expect(buildSlug("switch")("Another Lost Phone: Laura's Story")).to.be.eq("another-lost-phone-lauras-story-switch");
    expect(buildSlug("switch")("Skee-Ball")).to.be.eq("skee-ball-switch");
    expect(buildSlug("switch")("Sparkle ZERO")).to.be.eq("sparkle-zero-switch");
    expect(buildSlug("switch")("Nihilumbra")).to.be.eq("nihilumbra-switch");
    expect(buildSlug("switch")("Bouncy Bob")).to.be.eq("bouncy-bob-switch");
    expect(buildSlug("switch")("Goetia")).to.be.eq("goetia-switch");
    expect(buildSlug("switch")("NARUTO SHIPPUDEN: Ultimate Ninja STORM Trilogy")).to.be.eq(
      "naruto-shippuden-ultimate-ninja-storm-trilogy-switch",
    );
    expect(buildSlug("switch")("NARUTO SHIPPUDEN: Ultimate Ninja STORM 3 Full Burst HD")).to.be.eq(
      "naruto-shippuden-ultimate-ninja-storm-3-full-burst-hd-switch",
    );
    expect(buildSlug("switch")("Immortal Redneck")).to.be.eq("immortal-redneck-switch");
    expect(buildSlug("switch")("NARUTO SHIPPUDEN: Ultimate Ninja STORM 2")).to.be.eq(
      "naruto-shippuden-ultimate-ninja-storm-2-switch",
    );
    expect(buildSlug("switch")("Late Shift")).to.be.eq("late-shift-switch");
    expect(buildSlug("switch")("Saturday Morning RPG")).to.be.eq("saturday-morning-rpg-switch");
    expect(buildSlug("switch")("Hyper Sentinel")).to.be.eq("hyper-sentinel-switch");
    expect(buildSlug("switch")("Death Road to Canada")).to.be.eq("death-road-to-canada-switch");
    expect(buildSlug("switch")("NARUTO: Ultimate Ninja STORM")).to.be.eq("naruto-ultimate-ninja-storm-switch");
    expect(buildSlug("switch")("Light Fall")).to.be.eq("light-fall-switch");
    expect(buildSlug("switch")("A Robot Named Fight")).to.be.eq("a-robot-named-fight-switch");
    expect(buildSlug("switch")("Arcade Archives 10-Yard Fight")).to.be.eq("arcade-archives-10-yard-fight-switch");
    expect(buildSlug("switch")("KORG Gadget for Nintendo Switch")).to.be.eq("korg-gadget-for-nintendo-switch");
    expect(buildSlug("switch")("ACA NEOGEO GHOST PILOTS")).to.be.eq("aca-neogeo-ghost-pilots-switch");
    expect(buildSlug("switch")("Super Saurio Fly")).to.be.eq("super-saurio-fly-switch");
    expect(buildSlug("switch")("SKYPEACE")).to.be.eq("skypeace-switch");
    expect(buildSlug("switch")("Yonder: The Cloud Catcher Chronicles")).to.be.eq(
      "yonder-the-cloud-catcher-chronicles-switch",
    );
    expect(buildSlug("switch")("The Adventures of Elena Temple")).to.be.eq("the-adventures-of-elena-temple-switch");
    expect(buildSlug("switch")("ACA NEOGEO STAKES WINNER")).to.be.eq("aca-neogeo-stakes-winner-switch");
    expect(buildSlug("switch")("Wizard of Legend")).to.be.eq("wizard-of-legend-switch");
    expect(buildSlug("switch")("Timberman VS")).to.be.eq("timberman-vs-switch");
    expect(buildSlug("switch")("Don't Die, Mr Robot!")).to.be.eq("dont-die-mr-robot-switch");
    expect(buildSlug("switch")("L.F.O. -Lost Future Omega-")).to.be.eq("lfo-lost-future-omega-switch");
    expect(buildSlug("switch")("Animal Super Squad")).to.be.eq("animal-super-squad-switch");
    expect(buildSlug("switch")("Perfect Angle")).to.be.eq("perfect-angle-switch");
    expect(buildSlug("switch")("Raging Justice")).to.be.eq("raging-justice-switch");
    expect(buildSlug("switch")("ACA NEOGEO SUPER SIDEKICKS 2")).to.be.eq("aca-neogeo-super-sidekicks-2-switch");
    expect(buildSlug("switch")("Disco Dodgeball - REMIX")).to.be.eq("disco-dodgeball-remix-switch");
    expect(buildSlug("switch")("Arcade Archives TERRA CRESTA")).to.be.eq("arcade-archives-terra-cresta-switch");
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Sly Spy")).to.be.eq("johnny-turbos-arcade-sly-spy-switch");
    expect(buildSlug("switch")("Dungeon Rushers")).to.be.eq("dungeon-rushers-switch");
    expect(buildSlug("switch")("The Fall")).to.be.eq("the-fall-switch");
    expect(buildSlug("switch")("Suicide Guy")).to.be.eq("suicide-guy-switch");
    expect(buildSlug("switch")("Garage")).to.be.eq("garage-switch");
    expect(buildSlug("switch")("Knights of Pen and Paper +1 Deluxier Edition")).to.be.eq(
      "knights-of-pen-and-paper-1-deluxier-edition-switch",
    );
    expect(buildSlug("switch")("FRAMED Collection")).to.be.eq("framed-collection-switch");
    expect(buildSlug("switch")("PixelJunk® Monsters 2")).to.be.eq("pixeljunk-monsters-2-switch");
    expect(buildSlug("switch")("Mega Man Legacy Collection 2")).to.be.eq("mega-man-legacy-collection-2-switch");
    expect(buildSlug("switch")("Three Fourths Home: Extended Edition")).to.be.eq(
      "three-fourths-home-extended-edition-switch",
    );
    expect(buildSlug("switch")("Mega Man Legacy Collection")).to.be.eq("mega-man-legacy-collection-switch");
    expect(buildSlug("switch")("Fairune Collection")).to.be.eq("fairune-collection-switch");
    expect(buildSlug("switch")("TouchBattleTankSP")).to.be.eq("touchbattletanksp-switch");
    expect(buildSlug("switch")("InkSplosion")).to.be.eq("inksplosion-switch");
    expect(buildSlug("switch")("The Pinball Arcade")).to.be.eq("the-pinball-arcade-switch");
    expect(buildSlug("switch")("ACA NEOGEO BASEBALL STARS PROFESSIONAL")).to.be.eq(
      "aca-neogeo-baseball-stars-professional-switch",
    );
    expect(buildSlug("switch")("The Mystery of the Hudson Case")).to.be.eq("the-mystery-of-the-hudson-case-switch");
    expect(buildSlug("switch")("White Night")).to.be.eq("white-night-switch");
    expect(buildSlug("switch")("Henry The Hamster Handler")).to.be.eq("henry-the-hamster-handler-switch");
    expect(buildSlug("switch")("Splitter Critters")).to.be.eq("splitter-critters-switch");
    expect(buildSlug("switch")("Invisiballs")).to.be.eq("invisiballs-switch");
    expect(buildSlug("switch")("Never Stop")).to.be.eq("never-stop-switch");
    expect(buildSlug("switch")("The Banner Saga")).to.be.eq("the-banner-saga-switch");
    expect(buildSlug("switch")("Shape of the World")).to.be.eq("shape-of-the-world-switch");
    expect(buildSlug("switch")("Alchemic Jousts")).to.be.eq("alchemic-jousts-switch");
    expect(buildSlug("switch")('Calculation Castle : Greco\'s Ghostly Challenge "Addition"')).to.be.eq(
      "calculation-castle-grecos-ghostly-challenge-addition-switch",
    );
    expect(buildSlug("switch")("Arcade Archives Ikki")).to.be.eq("arcade-archives-ikki-switch");
    expect(buildSlug("switch")("FOX n FORESTS")).to.be.eq("fox-n-forests-switch");
    expect(buildSlug("switch")("SilverStarChess")).to.be.eq("silverstarchess-switch");
    expect(buildSlug("switch")("ATOMINE")).to.be.eq("atomine-switch");
    expect(buildSlug("switch")("Lost Sea")).to.be.eq("lost-sea-switch");
    expect(buildSlug("switch")("Baobabs Mausoleum Ep.1: Ovnifagos Don't Eat Flamingos")).to.be.eq(
      "baobabs-mausoleum-ep1-ovnifagos-dont-eat-flamingos-switch",
    );
    expect(buildSlug("switch")("ACA NEOGEO TOP PLAYER’S GOLF")).to.be.eq("aca-neogeo-top-player-s-golf-switch");
    expect(buildSlug("switch")("Punch Club")).to.be.eq("punch-club-switch");
    expect(buildSlug("switch")('Calculation Castle: Greco\'s Ghostly Challenge "Multiplication"')).to.be.eq(
      "calculation-castle-grecos-ghostly-challenge-multiplication-switch",
    );
    expect(buildSlug("switch")('Calculation Castle: Greco\'s Ghostly Challenge "Subtraction"')).to.be.eq(
      "calculation-castle-grecos-ghostly-challenge-subtraction-switch",
    );
    expect(buildSlug("switch")('Calculation Castle : Greco\'s Ghostly Challenge "Division"')).to.be.eq(
      "calculation-castle-grecos-ghostly-challenge-division-switch",
    );
    expect(buildSlug("switch")("Legendary Eleven")).to.be.eq("legendary-eleven-switch");
    expect(buildSlug("switch")("Jurassic Pinball")).to.be.eq("jurassic-pinball-switch");
    expect(buildSlug("switch")("Pokémon Quest")).to.be.eq("pokemon-quest-switch");
    expect(buildSlug("switch")("ACA NEOGEO NINJA COMBAT")).to.be.eq("aca-neogeo-ninja-combat-switch");
    expect(buildSlug("switch")("N++ (NPLUSPLUS)")).to.be.eq("n-nplusplus-switch");
    expect(buildSlug("switch")("Bloodstained: Curse of the Moon")).to.be.eq("bloodstained-curse-of-the-moon-switch");
    expect(buildSlug("switch")("Mecha Storm")).to.be.eq("mecha-storm-switch");
    expect(buildSlug("switch")("Zen Bound 2")).to.be.eq("zen-bound-2-switch");
    expect(buildSlug("switch")("Escape Game : Aloha")).to.be.eq("escape-game-aloha-switch");
    expect(buildSlug("switch")("Ikaruga")).to.be.eq("ikaruga-switch");
    expect(buildSlug("switch")("Quad Fighter K")).to.be.eq("quad-fighter-k-switch");
    expect(buildSlug("switch")("Shift Quantum")).to.be.eq("shift-quantum-switch");
    expect(buildSlug("switch")("Songbringer")).to.be.eq("songbringer-switch");
    expect(buildSlug("switch")("Pirate Pop Plus")).to.be.eq("pirate-pop-plus-switch");
    expect(buildSlug("switch")("Milanoir")).to.be.eq("milanoir-switch");
    expect(buildSlug("switch")("Kitten Squad")).to.be.eq("kitten-squad-switch");
    expect(buildSlug("switch")("ICEY")).to.be.eq("icey-switch");
    expect(buildSlug("switch")("6180 the moon")).to.be.eq("6180-the-moon-switch");
    expect(buildSlug("switch")("Mushroom Wars 2")).to.be.eq("mushroom-wars-2-switch");
    expect(buildSlug("switch")("Super Sportmatchen")).to.be.eq("super-sportmatchen-switch");
    expect(buildSlug("switch")("Operation Hardcore")).to.be.eq("operation-hardcore-switch");
    expect(buildSlug("switch")("Jumping Joe & Friends")).to.be.eq("jumping-joe-and-friends-switch");
    expect(buildSlug("switch")("West of Loathing")).to.be.eq("west-of-loathing-switch");
    expect(buildSlug("switch")("Discovery")).to.be.eq("discovery-switch");
    expect(buildSlug("switch")("Defoliation")).to.be.eq("defoliation-switch");
    expect(buildSlug("switch")("World Soccer Pinball")).to.be.eq("world-soccer-pinball-switch");
    expect(buildSlug("switch")("Samurai Defender: Ninja Warfare")).to.be.eq("samurai-defender-ninja-warfare-switch");
    expect(buildSlug("switch")("Banner Saga 2")).to.be.eq("banner-saga-2-switch");
    expect(buildSlug("switch")("ACA NEOGEO RIDING HERO")).to.be.eq("aca-neogeo-riding-hero-switch");
    expect(buildSlug("switch")("Them Bombs!")).to.be.eq("them-bombs-switch");
    expect(buildSlug("switch")("Grab the Bottle")).to.be.eq("grab-the-bottle-switch");
    expect(buildSlug("switch")("GRIDD: Retroenhanced")).to.be.eq("gridd-retroenhanced-switch");
    expect(buildSlug("switch")("Shaq Fu: A Legend Reborn")).to.be.eq("shaq-fu-a-legend-reborn-switch");
    expect(buildSlug("switch")("A Magical High School Girl")).to.be.eq("a-magical-high-school-girl-switch");
    expect(buildSlug("switch")("Fortnite")).to.be.eq("fortnite-switch");
    expect(buildSlug("switch")("Fallout Shelter")).to.be.eq("fallout-shelter-switch");
    expect(buildSlug("switch")("Jolt Family Robot Racer")).to.be.eq("jolt-family-robot-racer-switch");
    expect(buildSlug("switch")("Hexologic")).to.be.eq("hexologic-switch");
    expect(buildSlug("switch")("Parallel")).to.be.eq("parallel-switch");
    expect(buildSlug("switch")("One Strike")).to.be.eq("one-strike-switch");
    expect(buildSlug("switch")("Lost in Harmony")).to.be.eq("lost-in-harmony-switch");
    expect(buildSlug("switch")("Neverout")).to.be.eq("neverout-switch");
    expect(buildSlug("switch")("Otto")).to.be.eq("otto-switch");
    expect(buildSlug("switch")("Paladins")).to.be.eq("paladins-switch");
    expect(buildSlug("switch")("ACA NEOGEO SUPER SIDEKICKS 3 : THE NEXT GLORY")).to.be.eq(
      "aca-neogeo-super-sidekicks-3-the-next-glory-switch",
    );
    expect(buildSlug("switch")("Spelunker Party!")).to.be.eq("spelunker-party-switch");
    expect(buildSlug("switch")("Muddledash")).to.be.eq("muddledash-switch");
    expect(buildSlug("switch")("Beekyr Reloaded")).to.be.eq("beekyr-reloaded-switch");
    expect(buildSlug("switch")("WHIP! WHIP!")).to.be.eq("whip-whip-switch");
    expect(buildSlug("switch")("Soccer Slammers")).to.be.eq("soccer-slammers-switch");
    expect(buildSlug("switch")("Scalextric")).to.be.eq("scalextric-switch");
    expect(buildSlug("switch")("Arcade Archives DONKEY KONG")).to.be.eq("arcade-archives-donkey-kong-switch");
    expect(buildSlug("switch")("ACA NEOGEO THE LAST BLADE 2")).to.be.eq("aca-neogeo-the-last-blade-2-switch");
    expect(buildSlug("switch")("GUNBIRD2 for Nintendo Switch")).to.be.eq("gunbird2-for-nintendo-switch");
    expect(buildSlug("switch")("Paranautical Activity")).to.be.eq("paranautical-activity-switch");
    expect(buildSlug("switch")("Pode")).to.be.eq("pode-switch");
    expect(buildSlug("switch")("Chameleon Run Deluxe Edition")).to.be.eq("chameleon-run-deluxe-edition-switch");
    expect(buildSlug("switch")("INK")).to.be.eq("ink-switch");
    expect(buildSlug("switch")("Bomb Chicken")).to.be.eq("bomb-chicken-switch");
    expect(buildSlug("switch")("R.B.I. Baseball 18")).to.be.eq("rbi-baseball-18-switch");
    expect(buildSlug("switch")("Just Shapes & Beats")).to.be.eq("just-shapes-and-beats-switch");
    expect(buildSlug("switch")("Drawful 2")).to.be.eq("drawful-2-switch");
    expect(buildSlug("switch")("D/Generation : The Original")).to.be.eq("d-generation-the-original-switch");
    expect(buildSlug("switch")("The Journey Down: Chapter One")).to.be.eq("the-journey-down-chapter-one-switch");
    expect(buildSlug("switch")("Air Mail")).to.be.eq("air-mail-switch");
    expect(buildSlug("switch")("Bloons TD 5")).to.be.eq("bloons-td-5-switch");
    expect(buildSlug("switch")("Moorhuhn Remake")).to.be.eq("moorhuhn-remake-switch");
    expect(buildSlug("switch")("1917 - The Alien Invasion DX")).to.be.eq("1917-the-alien-invasion-dx-switch");
    expect(buildSlug("switch")("Kill The Bad Guy")).to.be.eq("kill-the-bad-guy-switch");
    expect(buildSlug("switch")("Dream Alone")).to.be.eq("dream-alone-switch");
    expect(buildSlug("switch")("Figment")).to.be.eq("figment-switch");
    expect(buildSlug("switch")("Miles & Kilo")).to.be.eq("miles-and-kilo-switch");
    expect(buildSlug("switch")("Waking Violet")).to.be.eq("waking-violet-switch");
    expect(buildSlug("switch")("Lanota")).to.be.eq("lanota-switch");
    expect(buildSlug("switch")("Angels of Death")).to.be.eq("angels-of-death-switch");
    expect(buildSlug("switch")("Fossil Hunters")).to.be.eq("fossil-hunters-switch");
    expect(buildSlug("switch")("LUMINES REMASTERED")).to.be.eq("lumines-remastered-switch");
    expect(buildSlug("switch")("ACA NEOGEO Money Puzzle Exchanger")).to.be.eq(
      "aca-neogeo-money-puzzle-exchanger-switch",
    );
    expect(buildSlug("switch")("Arcade Archives Renegade")).to.be.eq("arcade-archives-renegade-switch");
    expect(buildSlug("switch")("SpiritSphere DX")).to.be.eq("spiritsphere-dx-switch");
    expect(buildSlug("switch")("Cubikolor")).to.be.eq("cubikolor-switch");
    expect(buildSlug("switch")("INSIDE")).to.be.eq("inside-switch");
    expect(buildSlug("switch")("Photon Cube")).to.be.eq("photon-cube-switch");
    expect(buildSlug("switch")("LIMBO")).to.be.eq("limbo-switch");
    expect(buildSlug("switch")("Runbow")).to.be.eq("runbow-switch");
    expect(buildSlug("switch")("Anima: Gate of Memories - The Nameless Chronicles")).to.be.eq(
      "anima-gate-of-memories-the-nameless-chronicles-switch",
    );
    expect(buildSlug("switch")("Anima: Gate of Memories")).to.be.eq("anima-gate-of-memories-switch");
    expect(buildSlug("switch")("Anima: Gate of Memories - Arcane Edition")).to.be.eq(
      "anima-gate-of-memories-arcane-edition-switch",
    );
    expect(buildSlug("switch")("Mega Man X Legacy Collection 2")).to.be.eq("mega-man-x-legacy-collection-2-switch");
    expect(buildSlug("switch")("Mega Man X Legacy Collection")).to.be.eq("mega-man-x-legacy-collection-switch");
    expect(buildSlug("switch")("The Journey Down: Chapter Two")).to.be.eq("the-journey-down-chapter-two-switch");
    expect(buildSlug("switch")("Survive! MR.CUBE")).to.be.eq("survive-mrcube-switch");
    expect(buildSlug("switch")("Super Volley Blast")).to.be.eq("super-volley-blast-switch");
    expect(buildSlug("switch")("VERTICAL STRIKE ENDLESS CHALLENGE")).to.be.eq(
      "vertical-strike-endless-challenge-switch",
    );
    expect(buildSlug("switch")("Pato Box")).to.be.eq("pato-box-switch");
    expect(buildSlug("switch")("Ghost 1.0")).to.be.eq("ghost-10-switch");
    expect(buildSlug("switch")("Fill-a-Pix: Phil's Epic Adventure")).to.be.eq("fill-a-pix-phils-epic-adventure-switch");
    expect(buildSlug("switch")("Voxel Shot for Nintendo Switch")).to.be.eq("voxel-shot-for-nintendo-switch");
    expect(buildSlug("switch")("The Journey Down: Chapter Three")).to.be.eq("the-journey-down-chapter-three-switch");
    expect(buildSlug("switch")("Rento Fortune Monolit")).to.be.eq("rento-fortune-monolit-switch");
    expect(buildSlug("switch")("Squids Odyssey")).to.be.eq("squids-odyssey-switch");
    expect(buildSlug("switch")("Heroki")).to.be.eq("heroki-switch");
    expect(buildSlug("switch")("Pocket Rumble")).to.be.eq("pocket-rumble-switch");
    expect(buildSlug("switch")("Flat Heroes")).to.be.eq("flat-heroes-switch");
    expect(buildSlug("switch")("Candle: The Power of the Flame")).to.be.eq("candle-the-power-of-the-flame-switch");
    expect(buildSlug("switch")("Final Light, The Prison")).to.be.eq("final-light-the-prison-switch");
    expect(buildSlug("switch")("Ultra Space Battle Brawl")).to.be.eq("ultra-space-battle-brawl-switch");
    expect(buildSlug("switch")("ASSAULT GUNNERS HD EDITION")).to.be.eq("assault-gunners-hd-edition-switch");
    expect(buildSlug("switch")("ACA NEOGEO SAMURAI SHODOWN V")).to.be.eq("aca-neogeo-samurai-shodown-v-switch");
    expect(buildSlug("switch")("Awkward")).to.be.eq("awkward-switch");
    expect(buildSlug("switch")("Yuso")).to.be.eq("yuso-switch");
    expect(buildSlug("switch")("Burnstar")).to.be.eq("burnstar-switch");
    expect(buildSlug("switch")("Hunting Simulator")).to.be.eq("hunting-simulator-switch");
    expect(buildSlug("switch")("Hand of Fate 2")).to.be.eq("hand-of-fate-2-switch");
    expect(buildSlug("switch")("20XX")).to.be.eq("20xx-switch");
    expect(buildSlug("switch")("The Lion's Song")).to.be.eq("the-lions-song-switch");
    expect(buildSlug("switch")("Another World")).to.be.eq("another-world-switch");
    expect(buildSlug("switch")("VSR: Void Space Racing")).to.be.eq("vsr-void-space-racing-switch");
    expect(buildSlug("switch")("RADIO HAMMER STATION")).to.be.eq("radio-hammer-station-switch");
    expect(buildSlug("switch")("GALAK-Z: Variant S")).to.be.eq("galak-z-variant-s-switch");
    expect(buildSlug("switch")("Holy Potatoes! A Weapon Shop?!")).to.be.eq("holy-potatoes-a-weapon-shop-switch");
    expect(buildSlug("switch")("Banner Saga 3")).to.be.eq("banner-saga-3-switch");
    expect(buildSlug("switch")("ACA NEOGEO THE SUPER SPY")).to.be.eq("aca-neogeo-the-super-spy-switch");
    expect(buildSlug("switch")("Red Hot Ricochet")).to.be.eq("red-hot-ricochet-switch");
    expect(buildSlug("switch")("Frost")).to.be.eq("frost-switch");
    expect(buildSlug("switch")("Epic Loon")).to.be.eq("epic-loon-switch");
    expect(buildSlug("switch")("Darts Up")).to.be.eq("darts-up-switch");
    expect(buildSlug("switch")("Tanzia")).to.be.eq("tanzia-switch");
    expect(buildSlug("switch")("Star Story: The Horizon Escape")).to.be.eq("star-story-the-horizon-escape-switch");
    expect(buildSlug("switch")("Mugsters")).to.be.eq("mugsters-switch");
    expect(buildSlug("switch")("Arcade Archives City CONNECTION")).to.be.eq("arcade-archives-city-connection-switch");
    expect(buildSlug("switch")("No Heroes Here")).to.be.eq("no-heroes-here-switch");
    expect(buildSlug("switch")("Animal Rivals: Nintendo Switch Edition")).to.be.eq(
      "animal-rivals-nintendo-switch-edition-switch",
    );
    expect(buildSlug("switch")("Lost Phone Stories")).to.be.eq("lost-phone-stories-switch");
    expect(buildSlug("switch")("The VideoKid")).to.be.eq("the-videokid-switch");
    expect(buildSlug("switch")("Beat Rush")).to.be.eq("beat-rush-switch");
    expect(buildSlug("switch")("Hungry Shark® World")).to.be.eq("hungry-shark-world-switch");
    expect(buildSlug("switch")("1979 Revolution: Black Friday")).to.be.eq("1979-revolution-black-friday-switch");
    expect(buildSlug("switch")("ACA NEOGEO LEAGUE BOWLING")).to.be.eq("aca-neogeo-league-bowling-switch");
    expect(buildSlug("switch")('Pure / Electric Love "Look at my eyes!" - Moe Yamauchi -')).to.be.eq(
      "pure-electric-love-look-at-my-eyes-moe-yamauchi-switch",
    );
    expect(buildSlug("switch")("State of Anarchy: Master of Mayhem")).to.be.eq(
      "state-of-anarchy-master-of-mayhem-switch",
    );
    expect(buildSlug("switch")('Pure / Electric Love "Everyone else!" - Ema Sakura -')).to.be.eq(
      "pure-electric-love-everyone-else-ema-sakura-switch",
    );
    expect(buildSlug("switch")("The Mooseman")).to.be.eq("the-mooseman-switch");
    expect(buildSlug("switch")("Sausage Sports Club")).to.be.eq("sausage-sports-club-switch");
    expect(buildSlug("switch")("Crush Your Enemies!")).to.be.eq("crush-your-enemies-switch");
    expect(buildSlug("switch")("Pool Panic")).to.be.eq("pool-panic-switch");
    expect(buildSlug("switch")("Battle Supremacy")).to.be.eq("battle-supremacy-switch");
    expect(buildSlug("switch")("NoReload Heroes")).to.be.eq("noreload-heroes-switch");
    expect(buildSlug("switch")("Arcade Archives Sky Skipper")).to.be.eq("arcade-archives-sky-skipper-switch");
    expect(buildSlug("switch")("Touhou Genso Wanderer Reloaded")).to.be.eq("touhou-genso-wanderer-reloaded-switch");
    expect(buildSlug("switch")('Pure / Electric Love "What do you want?" - Eri Kitami -')).to.be.eq(
      "pure-electric-love-what-do-you-want-eri-kitami-switch",
    );
    expect(buildSlug("switch")("Guts & Glory")).to.be.eq("guts-and-glory-switch");
    expect(buildSlug("switch")("Werewolf Pinball")).to.be.eq("werewolf-pinball-switch");
    expect(buildSlug("switch")("Zaccaria Pinball")).to.be.eq("zaccaria-pinball-switch");
    expect(buildSlug("switch")("Piczle Lines DX 500 More Puzzles!")).to.be.eq(
      "piczle-lines-dx-500-more-puzzles-switch",
    );
    expect(buildSlug("switch")("Chicken Assassin: Reloaded")).to.be.eq("chicken-assassin-reloaded-switch");
    expect(buildSlug("switch")("ACA NEOGEO THE KING OF FIGHTERS '97")).to.be.eq(
      "aca-neogeo-the-king-of-fighters-97-switch",
    );
    expect(buildSlug("switch")("Arcade Archives OMEGA FIGHTER")).to.be.eq("arcade-archives-omega-fighter-switch");
    expect(buildSlug("switch")("Bud Spencer & Terence Hill - Slaps And Beans")).to.be.eq(
      "bud-spencer-and-terence-hill-slaps-and-beans-switch",
    );
    expect(buildSlug("switch")("Semblance")).to.be.eq("semblance-switch");
    expect(buildSlug("switch")("Unexplored")).to.be.eq("unexplored-switch");
    expect(buildSlug("switch")("Crossing Souls")).to.be.eq("crossing-souls-switch");
    expect(buildSlug("switch")("2064: Read Only Memories INTEGRAL")).to.be.eq(
      "2064-read-only-memories-integral-switch",
    );
    expect(buildSlug("switch")("Cosmic Star Heroine")).to.be.eq("cosmic-star-heroine-switch");
    expect(buildSlug("switch")("Dawn of the Breakers")).to.be.eq("dawn-of-the-breakers-switch");
    expect(buildSlug("switch")("Code of Princess EX")).to.be.eq("code-of-princess-ex-switch");
    expect(buildSlug("switch")("In Between")).to.be.eq("in-between-switch");
    expect(buildSlug("switch")("Element")).to.be.eq("element-switch");
    expect(buildSlug("switch")("Toby: The Secret Mine")).to.be.eq("toby-the-secret-mine-switch");
    expect(buildSlug("switch")("Guns, Gore and Cannoli 2")).to.be.eq("guns-gore-and-cannoli-2-switch");
    expect(buildSlug("switch")("NOT A HERO: SUPER SNAZZY EDITION")).to.be.eq("not-a-hero-super-snazzy-edition-switch");
    expect(buildSlug("switch")("ACA NEOGEO PREHISTORIC ISLE 2")).to.be.eq("aca-neogeo-prehistoric-isle-2-switch");
    expect(buildSlug("switch")("Road To Ballhalla")).to.be.eq("road-to-ballhalla-switch");
    expect(buildSlug("switch")("Iconoclasts")).to.be.eq("iconoclasts-switch");
    expect(buildSlug("switch")("Eekeemoo - Splinters of the Dark Shard")).to.be.eq(
      "eekeemoo-splinters-of-the-dark-shard-switch",
    );
    expect(buildSlug("switch")("Salt and Sanctuary")).to.be.eq("salt-and-sanctuary-switch");
    expect(buildSlug("switch")("KenshŌ")).to.be.eq("kensho-switch");
    expect(buildSlug("switch")("GREEN")).to.be.eq("green-switch");
    expect(buildSlug("switch")("The Inner World - The Last Wind Monk")).to.be.eq(
      "the-inner-world-the-last-wind-monk-switch",
    );
    expect(buildSlug("switch")("Treadnauts")).to.be.eq("treadnauts-switch");
    expect(buildSlug("switch")("Pixel Action Heroes")).to.be.eq("pixel-action-heroes-switch");
    expect(buildSlug("switch")("The Inner World")).to.be.eq("the-inner-world-switch");
    expect(buildSlug("switch")("BlobCat")).to.be.eq("blobcat-switch");
    expect(buildSlug("switch")("PICROSS S2")).to.be.eq("picross-s2-switch");
    expect(buildSlug("switch")("Red's Kingdom")).to.be.eq("reds-kingdom-switch");
    expect(buildSlug("switch")("ACA NEOGEO METAL SLUG 4")).to.be.eq("aca-neogeo-metal-slug-4-switch");
    expect(buildSlug("switch")("Behind The Screen")).to.be.eq("behind-the-screen-switch");
    expect(buildSlug("switch")("Sigi - A Fart for Melusina")).to.be.eq("sigi-a-fart-for-melusina-switch");
    expect(buildSlug("switch")("Megaton Rainfall")).to.be.eq("megaton-rainfall-switch");
    expect(buildSlug("switch")("Loot Monkey: Bling Palace")).to.be.eq("loot-monkey-bling-palace-switch");
    expect(buildSlug("switch")("Robbotto")).to.be.eq("robbotto-switch");
    expect(buildSlug("switch")("Slam Land")).to.be.eq("slam-land-switch");
    expect(buildSlug("switch")("Keep Talking and Nobody Explodes")).to.be.eq("keep-talking-and-nobody-explodes-switch");
    expect(buildSlug("switch")("Arcade Archives Kid's Horehore Daisakusen")).to.be.eq(
      "arcade-archives-kids-horehore-daisakusen-switch",
    );
    expect(buildSlug("switch")("Sky Gamblers: Storm Raiders")).to.be.eq("sky-gamblers-storm-raiders-switch");
    expect(buildSlug("switch")("Claws of Furry")).to.be.eq("claws-of-furry-switch");
    expect(buildSlug("switch")("Defunct")).to.be.eq("defunct-switch");
    expect(buildSlug("switch")("SubaraCity")).to.be.eq("subaracity-switch");
    expect(buildSlug("switch")("Minit")).to.be.eq("minit-switch");
    expect(buildSlug("switch")("Shut Eye")).to.be.eq("shut-eye-switch");
    expect(buildSlug("switch")("Shio")).to.be.eq("shio-switch");
    expect(buildSlug("switch")("Next Up Hero")).to.be.eq("next-up-hero-switch");
    expect(buildSlug("switch")("Night Trap - 25th Anniversary Edition")).to.be.eq(
      "night-trap-25th-anniversary-edition-switch",
    );
    expect(buildSlug("switch")("Nightmares from the Deep 2: The Siren`s Call")).to.be.eq(
      "nightmares-from-the-deep-2-the-siren-s-call-switch",
    );
    expect(buildSlug("switch")("TETRA's Escape")).to.be.eq("tetras-escape-switch");
    expect(buildSlug("switch")("Detective Gallo")).to.be.eq("detective-gallo-switch");
    expect(buildSlug("switch")("Hacky Zack")).to.be.eq("hacky-zack-switch");
    expect(buildSlug("switch")("Spectrum")).to.be.eq("spectrum-switch");
    expect(buildSlug("switch")("Flood of Light")).to.be.eq("flood-of-light-switch");
    expect(buildSlug("switch")("FLIP OVER FROG")).to.be.eq("flip-over-frog-switch");
    expect(buildSlug("switch")("Freedom Planet")).to.be.eq("freedom-planet-switch");
    expect(buildSlug("switch")("Ninjin: Clash of Carrots")).to.be.eq("ninjin-clash-of-carrots-switch");
    expect(buildSlug("switch")("ACA NEOGEO REAL BOUT FATAL FURY 2")).to.be.eq(
      "aca-neogeo-real-bout-fatal-fury-2-switch",
    );
    expect(buildSlug("switch")("Kero Blaster")).to.be.eq("kero-blaster-switch");
    expect(buildSlug("switch")("Old School Musical")).to.be.eq("old-school-musical-switch");
    expect(buildSlug("switch")("CastleStorm")).to.be.eq("castlestorm-switch");
    expect(buildSlug("switch")("FunBox Party")).to.be.eq("funbox-party-switch");
    expect(buildSlug("switch")("EXTREME POKER")).to.be.eq("extreme-poker-switch");
    expect(buildSlug("switch")("Prison Architect: Nintendo Switch Edition")).to.be.eq(
      "prison-architect-nintendo-switch-edition-switch",
    );
    expect(buildSlug("switch")("Moonlighter")).to.be.eq("moonlighter-switch");
    expect(buildSlug("switch")("Polygod")).to.be.eq("polygod-switch");
    expect(buildSlug("switch")("Windjammers")).to.be.eq("windjammers-switch");
    expect(buildSlug("switch")("Bad North")).to.be.eq("bad-north-switch");
    expect(buildSlug("switch")("The Gardens Between")).to.be.eq("the-gardens-between-switch");
    expect(buildSlug("switch")("Tiny Hands Adventure")).to.be.eq("tiny-hands-adventure-switch");
    expect(buildSlug("switch")("This War of Mine: Complete Edition")).to.be.eq(
      "this-war-of-mine-complete-edition-switch",
    );
    expect(buildSlug("switch")("Terraria")).to.be.eq("terraria-switch");
    expect(buildSlug("switch")("Out of The Box")).to.be.eq("out-of-the-box-switch");
    expect(buildSlug("switch")("Streets of Rogue")).to.be.eq("streets-of-rogue-switch");
    expect(buildSlug("switch")("Kentucky Robo Chicken")).to.be.eq("kentucky-robo-chicken-switch");
    expect(buildSlug("switch")("EVERSPACE™ - Stellar Edition")).to.be.eq("everspace-stellar-edition-switch");
    expect(buildSlug("switch")("Baba Is You")).to.be.eq("baba-is-you-switch");
    expect(buildSlug("switch")("Realpolitiks")).to.be.eq("realpolitiks-switch");
    expect(buildSlug("switch")("ACA NEOGEO CROSSED SWORDS")).to.be.eq("aca-neogeo-crossed-swords-switch");
    expect(buildSlug("switch")("Toy Stunt Bike: Tiptop's Trials")).to.be.eq("toy-stunt-bike-tiptops-trials-switch");
    expect(buildSlug("switch")("Western 1849 Reloaded")).to.be.eq("western-1849-reloaded-switch");
    expect(buildSlug("switch")("Mini Metro")).to.be.eq("mini-metro-switch");
    expect(buildSlug("switch")("Fernz Gate")).to.be.eq("fernz-gate-switch");
    expect(buildSlug("switch")("The Low Road")).to.be.eq("the-low-road-switch");
    expect(buildSlug("switch")("NEKOPARA Vol.1")).to.be.eq("nekopara-vol1-switch");
    expect(buildSlug("switch")("The Walking Dead: The Final Season - Season Pass")).to.be.eq(
      "the-walking-dead-the-final-season-season-pass-switch",
    );
    expect(buildSlug("switch")("The Walking Dead: The Complete First Season")).to.be.eq(
      "the-walking-dead-the-complete-first-season-switch",
    );
    expect(buildSlug("switch")("Blade Strangers")).to.be.eq("blade-strangers-switch");
    expect(buildSlug("switch")("The Messenger")).to.be.eq("the-messenger-switch");
    expect(buildSlug("switch")("Bastion")).to.be.eq("bastion-switch");
    expect(buildSlug("switch")("Azure Reflections")).to.be.eq("azure-reflections-switch");
    expect(buildSlug("switch")("TowerFall")).to.be.eq("towerfall-switch");
    expect(buildSlug("switch")("Earthworms")).to.be.eq("earthworms-switch");
    expect(buildSlug("switch")("My Farm")).to.be.eq("my-farm-switch");
    expect(buildSlug("switch")("Haunted Dungeons: Hyakki Castle")).to.be.eq("haunted-dungeons-hyakki-castle-switch");
    expect(buildSlug("switch")("Chiki-Chiki Boxy Racers")).to.be.eq("chiki-chiki-boxy-racers-switch");
    expect(buildSlug("switch")("Fall of Light: Darkest Edition")).to.be.eq("fall-of-light-darkest-edition-switch");
    expect(buildSlug("switch")("ACA NEOGEO FOOTBALL FRENZY")).to.be.eq("aca-neogeo-football-frenzy-switch");
    expect(buildSlug("switch")("Arcade Archives ARGUS")).to.be.eq("arcade-archives-argus-switch");
    expect(buildSlug("switch")("Hover")).to.be.eq("hover-switch");
    expect(buildSlug("switch")("Phantaruk")).to.be.eq("phantaruk-switch");
    expect(buildSlug("switch")("The Warlock of Firetop Mountain: Goblin Scourge Edition!")).to.be.eq(
      "the-warlock-of-firetop-mountain-goblin-scourge-edition-switch",
    );
    expect(buildSlug("switch")("Moonfall Ultimate")).to.be.eq("moonfall-ultimate-switch");
    expect(buildSlug("switch")("PLANET ALPHA")).to.be.eq("planet-alpha-switch");
    expect(buildSlug("switch")("Lifeless Planet: Premiere Edition")).to.be.eq(
      "lifeless-planet-premiere-edition-switch",
    );
    expect(buildSlug("switch")("Gnomes Garden 3: The thief of castles")).to.be.eq(
      "gnomes-garden-3-the-thief-of-castles-switch",
    );
    expect(buildSlug("switch")("SENRAN KAGURA Reflexions")).to.be.eq("senran-kagura-reflexions-switch");
    expect(buildSlug("switch")("Slice, Dice & Rice")).to.be.eq("slice-dice-and-rice-switch");
    expect(buildSlug("switch")("Nefarious")).to.be.eq("nefarious-switch");
    expect(buildSlug("switch")("Nintendo Entertainment System – Nintendo Switch Online")).to.be.eq(
      "nintendo-entertainment-system-nintendo-switch-online-switch",
    );
    expect(buildSlug("switch")("Gone Home")).to.be.eq("gone-home-switch");
    expect(buildSlug("switch")("Shikhondo: Soul Eater")).to.be.eq("shikhondo-soul-eater-switch");
    expect(buildSlug("switch")("Broforce")).to.be.eq("broforce-switch");
    expect(buildSlug("switch")("Siegecraft Commander")).to.be.eq("siegecraft-commander-switch");
    expect(buildSlug("switch")("Mega Man 11")).to.be.eq("mega-man-11-switch");
    expect(buildSlug("switch")("Mummy Pinball")).to.be.eq("mummy-pinball-switch");
    expect(buildSlug("switch")("Surgeon Simulator CPR")).to.be.eq("surgeon-simulator-cpr-switch");
    expect(buildSlug("switch")("Zarvot")).to.be.eq("zarvot-switch");
    expect(buildSlug("switch")("Treasure Stack")).to.be.eq("treasure-stack-switch");
    expect(buildSlug("switch")("FullBlast")).to.be.eq("fullblast-switch");
    expect(buildSlug("switch")("Dust: An Elysian Tail")).to.be.eq("dust-an-elysian-tail-switch");
    expect(buildSlug("switch")("Super Inefficient Golf")).to.be.eq("super-inefficient-golf-switch");
    expect(buildSlug("switch")("The Jackbox Party Pack 5")).to.be.eq("the-jackbox-party-pack-5-switch");
    expect(buildSlug("switch")("LevelHead")).to.be.eq("levelhead-switch");
    expect(buildSlug("switch")("Grandpa and the Zombies")).to.be.eq("grandpa-and-the-zombies-switch");
    expect(buildSlug("switch")("Think of the Children")).to.be.eq("think-of-the-children-switch");
    expect(buildSlug("switch")("CAPCOM BEAT 'EM UP BUNDLE")).to.be.eq("capcom-beat-em-up-bundle-switch");
    expect(buildSlug("switch")("Untitled Goose Game")).to.be.eq("untitled-goose-game-switch");
    expect(buildSlug("switch")("The World Next Door")).to.be.eq("the-world-next-door-switch");
    expect(buildSlug("switch")("Transistor")).to.be.eq("transistor-switch");
    expect(buildSlug("switch")("Cities: Skylines - Nintendo Switch™ Edition")).to.be.eq(
      "cities-skylines-nintendo-switch-edition-switch",
    );
    expect(buildSlug("switch")("Danger Mouse: The Danger Games")).to.be.eq("danger-mouse-the-danger-games-switch");
    expect(buildSlug("switch")("FINAL FANTASY XV POCKET EDITION HD")).to.be.eq(
      "final-fantasy-xv-pocket-edition-hd-switch",
    );
    expect(buildSlug("switch")("Desert Child")).to.be.eq("desert-child-switch");
    expect(buildSlug("switch")("STAY")).to.be.eq("stay-switch");
    expect(buildSlug("switch")("Doughlings: Arcade")).to.be.eq("doughlings-arcade-switch");
    expect(buildSlug("switch")("Time Carnage")).to.be.eq("time-carnage-switch");
    expect(buildSlug("switch")("Light Fingers")).to.be.eq("light-fingers-switch");
    expect(buildSlug("switch")("Armello")).to.be.eq("armello-switch");
    expect(buildSlug("switch")("ACA NEOGEO AGGRESSORS OF DARK KOMBAT")).to.be.eq(
      "aca-neogeo-aggressors-of-dark-kombat-switch",
    );
    expect(buildSlug("switch")("Shadow Fight 2")).to.be.eq("shadow-fight-2-switch");
    expect(buildSlug("switch")("The Spectrum Retreat")).to.be.eq("the-spectrum-retreat-switch");
    expect(buildSlug("switch")("The Mahjong Huntress")).to.be.eq("the-mahjong-huntress-switch");
    expect(buildSlug("switch")("Arcade Archives RYGAR")).to.be.eq("arcade-archives-rygar-switch");
    expect(buildSlug("switch")("Broken Age")).to.be.eq("broken-age-switch");
    expect(buildSlug("switch")("Spider Solitaire F")).to.be.eq("spider-solitaire-f-switch");
    expect(buildSlug("switch")("Superbrothers: Sword & Sworcery EP")).to.be.eq(
      "superbrothers-sword-and-sworcery-ep-switch",
    );
    expect(buildSlug("switch")("Super Dungeon Tactics")).to.be.eq("super-dungeon-tactics-switch");
    expect(buildSlug("switch")("Ultimate Chicken Horse")).to.be.eq("ultimate-chicken-horse-switch");
    expect(buildSlug("switch")("SEGA AGES Sonic The Hedgehog")).to.be.eq("sega-ages-sonic-the-hedgehog-switch");
    expect(buildSlug("switch")("Whispering Willows")).to.be.eq("whispering-willows-switch");
    expect(buildSlug("switch")("SEGA AGES Thunder Force IV")).to.be.eq("sega-ages-thunder-force-iv-switch");
    expect(buildSlug("switch")("Tricky Towers")).to.be.eq("tricky-towers-switch");
    expect(buildSlug("switch")("A Case of Distrust")).to.be.eq("a-case-of-distrust-switch");
    expect(buildSlug("switch")("Broken Sword 5 - the Serpent's Curse")).to.be.eq(
      "broken-sword-5-the-serpents-curse-switch",
    );
    expect(buildSlug("switch")("Animated Jigsaws: Japanese Women")).to.be.eq("animated-jigsaws-japanese-women-switch");
    expect(buildSlug("switch")("Rooms: The Adventure of Anne & George")).to.be.eq(
      "rooms-the-adventure-of-anne-and-george-switch",
    );
    expect(buildSlug("switch")("ACA NEOGEO CYBER-LIP")).to.be.eq("aca-neogeo-cyber-lip-switch");
    expect(buildSlug("switch")("Retimed")).to.be.eq("retimed-switch");
    expect(buildSlug("switch")("Mitsurugi Kamui Hikae")).to.be.eq("mitsurugi-kamui-hikae-switch");
    expect(buildSlug("switch")("Risk of Rain")).to.be.eq("risk-of-rain-switch");
    expect(buildSlug("switch")("Omvorm")).to.be.eq("omvorm-switch");
    expect(buildSlug("switch")("South Park™ : The Stick of Truth™")).to.be.eq("south-park-the-stick-of-truth-switch");
    expect(buildSlug("switch")("Oh My Godheads: Party Edition")).to.be.eq("oh-my-godheads-party-edition-switch");
    expect(buildSlug("switch")("Rise and Shine")).to.be.eq("rise-and-shine-switch");
    expect(buildSlug("switch")("Alwa's Awakening")).to.be.eq("alwas-awakening-switch");
    expect(buildSlug("switch")("Arcade Archives EXCITEBIKE")).to.be.eq("arcade-archives-excitebike-switch");
    expect(buildSlug("switch")("MagiCat")).to.be.eq("magicat-switch");
    expect(buildSlug("switch")("Reigns: Kings & Queens")).to.be.eq("reigns-kings-and-queens-switch");
    expect(buildSlug("switch")("The Escapists: Complete Edition")).to.be.eq("the-escapists-complete-edition-switch");
    expect(buildSlug("switch")("A Gummy's Life")).to.be.eq("a-gummys-life-switch");
    expect(buildSlug("switch")("Vertical Drop Heroes HD")).to.be.eq("vertical-drop-heroes-hd-switch");
    expect(buildSlug("switch")("Eternum Ex")).to.be.eq("eternum-ex-switch");
    expect(buildSlug("switch")("Debris Infinity")).to.be.eq("debris-infinity-switch");
    expect(buildSlug("switch")("oOo: Ascension")).to.be.eq("ooo-ascension-switch");
    expect(buildSlug("switch")("Revenant Dogma")).to.be.eq("revenant-dogma-switch");
    expect(buildSlug("switch")("Boom Ball: Boost Edition")).to.be.eq("boom-ball-boost-edition-switch");
    expect(buildSlug("switch")("Gaokao.Love.100Days")).to.be.eq("gaokaolove100days-switch");
    expect(buildSlug("switch")("Moorhuhn Wanted")).to.be.eq("moorhuhn-wanted-switch");
    expect(buildSlug("switch")("Dokuro")).to.be.eq("dokuro-switch");
    expect(buildSlug("switch")("ACA NEOGEO THE KING OF FIGHTERS 2001")).to.be.eq(
      "aca-neogeo-the-king-of-fighters-2001-switch",
    );
    expect(buildSlug("switch")("Monster Loves You")).to.be.eq("monster-loves-you-switch");
    expect(buildSlug("switch")("Jack N' Jill DX")).to.be.eq("jack-n-jill-dx-switch");
    expect(buildSlug("switch")("Find The Balance")).to.be.eq("find-the-balance-switch");
    expect(buildSlug("switch")("Tangrams Deluxe")).to.be.eq("tangrams-deluxe-switch");
    expect(buildSlug("switch")("Wandersong")).to.be.eq("wandersong-switch");
    expect(buildSlug("switch")("Frutakia 2")).to.be.eq("frutakia-2-switch");
    expect(buildSlug("switch")("Mark of the Ninja: Remastered")).to.be.eq("mark-of-the-ninja-remastered-switch");
    expect(buildSlug("switch")("True Fear: Forsaken Souls - Part 1")).to.be.eq(
      "true-fear-forsaken-souls-part-1-switch",
    );
    expect(buildSlug("switch")("Art of Balance")).to.be.eq("art-of-balance-switch");
    expect(buildSlug("switch")("The Midnight Sanctuary")).to.be.eq("the-midnight-sanctuary-switch");
    expect(buildSlug("switch")("Hot Gimmick Cosplay-jong for Nintendo Switch")).to.be.eq(
      "hot-gimmick-cosplay-jong-for-nintendo-switch",
    );
    expect(buildSlug("switch")("Demon's Crystals")).to.be.eq("demons-crystals-switch");
    expect(buildSlug("switch")("Jettomero: Hero of the Universe")).to.be.eq("jettomero-hero-of-the-universe-switch");
    expect(buildSlug("switch")("Bombing Busters")).to.be.eq("bombing-busters-switch");
    expect(buildSlug("switch")("Shift Happens")).to.be.eq("shift-happens-switch");
    expect(buildSlug("switch")("Splash Blast Panic")).to.be.eq("splash-blast-panic-switch");
    expect(buildSlug("switch")("Tied Together")).to.be.eq("tied-together-switch");
    expect(buildSlug("switch")("KEMONO FRIENDS PICROSS")).to.be.eq("kemono-friends-picross-switch");
    expect(buildSlug("switch")("Black and White Bushido")).to.be.eq("black-and-white-bushido-switch");
    expect(buildSlug("switch")("Chasm")).to.be.eq("chasm-switch");
    expect(buildSlug("switch")("Trouserheart")).to.be.eq("trouserheart-switch");
    expect(buildSlug("switch")("Guacamelee! Super Turbo Championship Edition")).to.be.eq(
      "guacamelee-super-turbo-championship-edition-switch",
    );
    expect(buildSlug("switch")("Batman: The Enemy Within")).to.be.eq("batman-the-enemy-within-switch");
    expect(buildSlug("switch")("Child of Light® Ultimate Edition")).to.be.eq("child-of-light-ultimate-edition-switch");
    expect(buildSlug("switch")("911 Operator")).to.be.eq("911-operator-switch");
    expect(buildSlug("switch")("Super Hyperactive Ninja")).to.be.eq("super-hyperactive-ninja-switch");
    expect(buildSlug("switch")("ACA NEOGEO ZUPAPA!")).to.be.eq("aca-neogeo-zupapa-switch");
    expect(buildSlug("switch")("Dungeon Village")).to.be.eq("dungeon-village-switch");
    expect(buildSlug("switch")("Joggernauts")).to.be.eq("joggernauts-switch");
    expect(buildSlug("switch")("Battle Group 2")).to.be.eq("battle-group-2-switch");
    expect(buildSlug("switch")("Friday the 13th: Killer Puzzle")).to.be.eq("friday-the-13th-killer-puzzle-switch");
    expect(buildSlug("switch")("Personality and Psychology Premium")).to.be.eq(
      "personality-and-psychology-premium-switch",
    );
    expect(buildSlug("switch")("Drift Legends")).to.be.eq("drift-legends-switch");
    expect(buildSlug("switch")("Madorica Real Estate")).to.be.eq("madorica-real-estate-switch");
    expect(buildSlug("switch")("Hot Springs Story")).to.be.eq("hot-springs-story-switch");
    expect(buildSlug("switch")("Knock-Knock")).to.be.eq("knock-knock-switch");
    expect(buildSlug("switch")("SkyScrappers")).to.be.eq("skyscrappers-switch");
    expect(buildSlug("switch")("Puzzle Wall")).to.be.eq("puzzle-wall-switch");
    expect(buildSlug("switch")("Game Dev Story")).to.be.eq("game-dev-story-switch");
    expect(buildSlug("switch")("I Hate Running Backwards")).to.be.eq("i-hate-running-backwards-switch");
    expect(buildSlug("switch")("ACA NEOGEO 3 COUNT BOUT")).to.be.eq("aca-neogeo-3-count-bout-switch");
    expect(buildSlug("switch")("BLACK BIRD")).to.be.eq("black-bird-switch");
    expect(buildSlug("switch")("The Legend of Evil")).to.be.eq("the-legend-of-evil-switch");
    expect(buildSlug("switch")("Word Puzzles by POWGI")).to.be.eq("word-puzzles-by-powgi-switch");
    expect(buildSlug("switch")("Halloween Pinball")).to.be.eq("halloween-pinball-switch");
    expect(buildSlug("switch")("Season Match HD")).to.be.eq("season-match-hd-switch");
    expect(buildSlug("switch")("Valkyria Chronicles")).to.be.eq("valkyria-chronicles-switch");
    expect(buildSlug("switch")("Save me Mr Tako: Tasukete Tako-San")).to.be.eq(
      "save-me-mr-tako-tasukete-tako-san-switch",
    );
    expect(buildSlug("switch")("Passpartout: The Starving Artist")).to.be.eq("passpartout-the-starving-artist-switch");
    expect(buildSlug("switch")("Pinstripe")).to.be.eq("pinstripe-switch");
    expect(buildSlug("switch")("SpiderSolitaire BLACK")).to.be.eq("spidersolitaire-black-switch");
    expect(buildSlug("switch")("Aqua TV")).to.be.eq("aqua-tv-switch");
    expect(buildSlug("switch")("Color Zen Kids")).to.be.eq("color-zen-kids-switch");
    expect(buildSlug("switch")("The Shapeshifting Detective")).to.be.eq("the-shapeshifting-detective-switch");
    expect(buildSlug("switch")("Battlezone Gold Edition")).to.be.eq("battlezone-gold-edition-switch");
    expect(buildSlug("switch")("Momonga Pinball Adventures")).to.be.eq("momonga-pinball-adventures-switch");
    expect(buildSlug("switch")("ACA NEOGEO STRIKERS 1945 PLUS")).to.be.eq("aca-neogeo-strikers-1945-plus-switch");
    expect(buildSlug("switch")("Varion")).to.be.eq("varion-switch");
    expect(buildSlug("switch")("7 Billion Humans")).to.be.eq("7-billion-humans-switch");
    expect(buildSlug("switch")("Full Metal Furies")).to.be.eq("full-metal-furies-switch");
    expect(buildSlug("switch")("Pizza Titan Ultra")).to.be.eq("pizza-titan-ultra-switch");
    expect(buildSlug("switch")("Swap This!")).to.be.eq("swap-this-switch");
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Heavy Burger")).to.be.eq(
      "johnny-turbos-arcade-heavy-burger-switch",
    );
    expect(buildSlug("switch")("EXORDER")).to.be.eq("exorder-switch");
    expect(buildSlug("switch")("Speed Brawl")).to.be.eq("speed-brawl-switch");
    expect(buildSlug("switch")("SINNER: Sacrifice for Redemption")).to.be.eq("sinner-sacrifice-for-redemption-switch");
    expect(buildSlug("switch")("Arcade Archives Ninja-Kid II")).to.be.eq("arcade-archives-ninja-kid-ii-switch");
    expect(buildSlug("switch")("Suicide Guy: Sleepin' Deeply")).to.be.eq("suicide-guy-sleepin-deeply-switch");
    expect(buildSlug("switch")("SkyTime")).to.be.eq("skytime-switch");
    expect(buildSlug("switch")("Feral Fury")).to.be.eq("feral-fury-switch");
    expect(buildSlug("switch")("Dracula's Legacy")).to.be.eq("draculas-legacy-switch");
    expect(buildSlug("switch")("Adventures of Bertram Fiddle Episode 2: A Bleaker Predicklement")).to.be.eq(
      "adventures-of-bertram-fiddle-episode-2-a-bleaker-predicklement-switch",
    );
    expect(buildSlug("switch")("WORLD OF FINAL FANTASY MAXIMA")).to.be.eq("world-of-final-fantasy-maxima-switch");
    expect(buildSlug("switch")("ACA NEOGEO SAVAGE REIGN")).to.be.eq("aca-neogeo-savage-reign-switch");
    expect(buildSlug("switch")("Storm In A Teacup")).to.be.eq("storm-in-a-teacup-switch");
    expect(buildSlug("switch")("Car Quest")).to.be.eq("car-quest-switch");
    expect(buildSlug("switch")("MechaNika")).to.be.eq("mechanika-switch");
    expect(buildSlug("switch")("Astebreed")).to.be.eq("astebreed-switch");
    expect(buildSlug("switch")("DEADBOLT")).to.be.eq("deadbolt-switch");
    expect(buildSlug("switch")("Marble It Up!")).to.be.eq("marble-it-up-switch");
    expect(buildSlug("switch")("Arcade Archives ALPHA MISSION")).to.be.eq("arcade-archives-alpha-mission-switch");
    expect(buildSlug("switch")("Freaky Awesome")).to.be.eq("freaky-awesome-switch");
    expect(buildSlug("switch")("1001 Ultimate Mahjong ™ 2")).to.be.eq("1001-ultimate-mahjong-2-switch");
    expect(buildSlug("switch")("PIANISTA")).to.be.eq("pianista-switch");
    expect(buildSlug("switch")("Rogue Legacy")).to.be.eq("rogue-legacy-switch");
    expect(buildSlug("switch")("Fly O'Clock")).to.be.eq("fly-oclock-switch");
    expect(buildSlug("switch")("Trivial Pursuit Live!")).to.be.eq("trivial-pursuit-live-switch");
    expect(buildSlug("switch")("Forgotton Anne")).to.be.eq("forgotton-anne-switch");
    expect(buildSlug("switch")("RISK: The Game of Global Domination")).to.be.eq(
      "risk-the-game-of-global-domination-switch",
    );
    expect(buildSlug("switch")("Horizon Chase Turbo")).to.be.eq("horizon-chase-turbo-switch");
    expect(buildSlug("switch")("Demetrios - The BIG Cynical Adventure")).to.be.eq(
      "demetrios-the-big-cynical-adventure-switch",
    );
    expect(buildSlug("switch")("Grim Fandango Remastered")).to.be.eq("grim-fandango-remastered-switch");
    expect(buildSlug("switch")("Crashlands")).to.be.eq("crashlands-switch");
    expect(buildSlug("switch")("Hidden Folks")).to.be.eq("hidden-folks-switch");
    expect(buildSlug("switch")("ACA NEOGEO PLEASURE GOAL: 5 ON 5 MINI SOCCER")).to.be.eq(
      "aca-neogeo-pleasure-goal-5-on-5-mini-soccer-switch",
    );
    expect(buildSlug("switch")("CricktoGame: Nintendo Switch Edition")).to.be.eq(
      "cricktogame-nintendo-switch-edition-switch",
    );
    expect(buildSlug("switch")("Gal Metal")).to.be.eq("gal-metal-switch");
    expect(buildSlug("switch")("Fairy Tale Puzzles ～Magic Objects～")).to.be.eq(
      "fairy-tale-puzzles-magic-objects-switch",
    );
    expect(buildSlug("switch")("The Bug Butcher")).to.be.eq("the-bug-butcher-switch");
    expect(buildSlug("switch")("Machinarium")).to.be.eq("machinarium-switch");
    expect(buildSlug("switch")("Circle of Sumo")).to.be.eq("circle-of-sumo-switch");
    expect(buildSlug("switch")("Luke & Rebecca")).to.be.eq("luke-and-rebecca-switch");
    expect(buildSlug("switch")("Numbala")).to.be.eq("numbala-switch");
    expect(buildSlug("switch")("Steven Universe: Save the Light")).to.be.eq("steven-universe-save-the-light-switch");
    expect(buildSlug("switch")("OK K.O.! Let’s Play Heroes")).to.be.eq("ok-ko-let-s-play-heroes-switch");
    expect(buildSlug("switch")("The MISSING: J.J. Macfield and the Island of Memories")).to.be.eq(
      "the-missing-jj-macfield-and-the-island-of-memories-switch",
    );
    expect(buildSlug("switch")("Party Hard")).to.be.eq("party-hard-switch");
    expect(buildSlug("switch")("Operation Pig")).to.be.eq("operation-pig-switch");
    expect(buildSlug("switch")("Elemental Knights R")).to.be.eq("elemental-knights-r-switch");
    expect(buildSlug("switch")("Rage in Peace")).to.be.eq("rage-in-peace-switch");
    expect(buildSlug("switch")("Chalk Dash Carnival")).to.be.eq("chalk-dash-carnival-switch");
    expect(buildSlug("switch")("Croc's World")).to.be.eq("crocs-world-switch");
    expect(buildSlug("switch")("Sky Force Anniversary")).to.be.eq("sky-force-anniversary-switch");
    expect(buildSlug("switch")("BRAWLHALLA")).to.be.eq("brawlhalla-switch");
    expect(buildSlug("switch")("Shadow of Loot Box")).to.be.eq("shadow-of-loot-box-switch");
    expect(buildSlug("switch")("Saboteur!")).to.be.eq("saboteur-switch");
    expect(buildSlug("switch")("Escape Doodland")).to.be.eq("escape-doodland-switch");
    expect(buildSlug("switch")("Deru - The Art of Cooperation")).to.be.eq("deru-the-art-of-cooperation-switch");
    expect(buildSlug("switch")("Noir Chronicles: City of Crime")).to.be.eq("noir-chronicles-city-of-crime-switch");
    expect(buildSlug("switch")("Picture Painting Puzzle 1000!")).to.be.eq("picture-painting-puzzle-1000-switch");
    expect(buildSlug("switch")("Roarr! Jurassic Edition")).to.be.eq("roarr-jurassic-edition-switch");
    expect(buildSlug("switch")("Road Redemption")).to.be.eq("road-redemption-switch");
    expect(buildSlug("switch")("Toast Time: Smash Up!")).to.be.eq("toast-time-smash-up-switch");
    expect(buildSlug("switch")("Trine Enchanted Edition")).to.be.eq("trine-enchanted-edition-switch");
    expect(buildSlug("switch")("Timber Tennis: Versus")).to.be.eq("timber-tennis-versus-switch");
    expect(buildSlug("switch")("Arcade Archives URBAN CHAMPION")).to.be.eq("arcade-archives-urban-champion-switch");
    expect(buildSlug("switch")("Word Sudoku by POWGI")).to.be.eq("word-sudoku-by-powgi-switch");
    expect(buildSlug("switch")("Solitaire")).to.be.eq("solitaire-switch");
    expect(buildSlug("switch")("ABZÛ")).to.be.eq("abzu-switch");
    expect(buildSlug("switch")("Arcade Archives Atomic Robo-Kid")).to.be.eq("arcade-archives-atomic-robo-kid-switch");
    expect(buildSlug("switch")("ACA NEOGEO THRASH RALLY")).to.be.eq("aca-neogeo-thrash-rally-switch");
    expect(buildSlug("switch")("Mimpi Dreams")).to.be.eq("mimpi-dreams-switch");
    expect(buildSlug("switch")("Deployment")).to.be.eq("deployment-switch");
    expect(buildSlug("switch")("Akihabara - Feel the Rhythm Remixed")).to.be.eq(
      "akihabara-feel-the-rhythm-remixed-switch",
    );
    expect(buildSlug("switch")("Desktop Soccer")).to.be.eq("desktop-soccer-switch");
    expect(buildSlug("switch")("Coffee Crisis")).to.be.eq("coffee-crisis-switch");
    expect(buildSlug("switch")("YouTube")).to.be.eq("youtube-switch");
    expect(buildSlug("switch")("ROCK BOSHERS DX: Director's Cut")).to.be.eq("rock-boshers-dx-directors-cut-switch");
    expect(buildSlug("switch")("ACA NEOGEO STAKES WINNER 2")).to.be.eq("aca-neogeo-stakes-winner-2-switch");
    expect(buildSlug("switch")("GensokyoDefenders")).to.be.eq("gensokyodefenders-switch");
    expect(buildSlug("switch")("ROCKETSROCKETSROCKETS")).to.be.eq("rocketsrocketsrockets-switch");
    expect(buildSlug("switch")("Mahjong")).to.be.eq("mahjong-switch");
    expect(buildSlug("switch")("Palm Reading Premium")).to.be.eq("palm-reading-premium-switch");
    expect(buildSlug("switch")("Tinboy")).to.be.eq("tinboy-switch");
    expect(buildSlug("switch")("R-Type Dimensions EX")).to.be.eq("r-type-dimensions-ex-switch");
    expect(buildSlug("switch")("99Vidas - Definitive Edition")).to.be.eq("99vidas-definitive-edition-switch");
    expect(buildSlug("switch")("Super Hydorah")).to.be.eq("super-hydorah-switch");
    expect(buildSlug("switch")("Onimusha: Warlords")).to.be.eq("onimusha-warlords-switch");
    expect(buildSlug("switch")("Mars: Chaos Menace")).to.be.eq("mars-chaos-menace-switch");
    expect(buildSlug("switch")("Mother Russia Bleeds")).to.be.eq("mother-russia-bleeds-switch");
    expect(buildSlug("switch")("Soap Dodgem")).to.be.eq("soap-dodgem-switch");
    expect(buildSlug("switch")("SOLITAIRE BATTLE ROYAL")).to.be.eq("solitaire-battle-royal-switch");
    expect(buildSlug("switch")("Youtubers Life OMG Edition")).to.be.eq("youtubers-life-omg-edition-switch");
    expect(buildSlug("switch")("Warframe")).to.be.eq("warframe-switch");
    expect(buildSlug("switch")("Steamburg")).to.be.eq("steamburg-switch");
    expect(buildSlug("switch")("Zeus Quest Remastered")).to.be.eq("zeus-quest-remastered-switch");
    expect(buildSlug("switch")("The First Tree")).to.be.eq("the-first-tree-switch");
    expect(buildSlug("switch")("Destruction")).to.be.eq("destruction-switch");
    expect(buildSlug("switch")("Coloring Book")).to.be.eq("coloring-book-switch");
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Super Burger Time")).to.be.eq(
      "johnny-turbos-arcade-super-burger-time-switch",
    );
    expect(buildSlug("switch")("SEGA AGES Phantasy Star")).to.be.eq("sega-ages-phantasy-star-switch");
    expect(buildSlug("switch")("Nidhogg 2")).to.be.eq("nidhogg-2-switch");
    expect(buildSlug("switch")("Ms. Splosion Man")).to.be.eq("ms-splosion-man-switch");
    expect(buildSlug("switch")("WAKU WAKU SWEETS")).to.be.eq("waku-waku-sweets-switch");
    expect(buildSlug("switch")("kuso")).to.be.eq("kuso-switch");
    expect(buildSlug("switch")("Gnomes Garden")).to.be.eq("gnomes-garden-switch");
    expect(buildSlug("switch")("Screencheat: Unplugged")).to.be.eq("screencheat-unplugged-switch");
    expect(buildSlug("switch")("Hyperide: Vector Raid")).to.be.eq("hyperide-vector-raid-switch");
    expect(buildSlug("switch")("Crimson Keep")).to.be.eq("crimson-keep-switch");
    expect(buildSlug("switch")("Forever Forest")).to.be.eq("forever-forest-switch");
    expect(buildSlug("switch")("Julie's Sweets")).to.be.eq("julies-sweets-switch");
    expect(buildSlug("switch")("Energy Cycle Edge")).to.be.eq("energy-cycle-edge-switch");
    expect(buildSlug("switch")("Cattails")).to.be.eq("cattails-switch");
    expect(buildSlug("switch")("Basketball")).to.be.eq("basketball-switch");
    expect(buildSlug("switch")("Mordheim: Warband Skirmish")).to.be.eq("mordheim-warband-skirmish-switch");
    expect(buildSlug("switch")("Guacamelee! 2")).to.be.eq("guacamelee-2-switch");
    expect(buildSlug("switch")("Stardust Galaxy Warriors: Stellar Climax")).to.be.eq(
      "stardust-galaxy-warriors-stellar-climax-switch",
    );
    expect(buildSlug("switch")("Marenian Tavern Story: Patty and the Hungry God")).to.be.eq(
      "marenian-tavern-story-patty-and-the-hungry-god-switch",
    );
    expect(buildSlug("switch")("ACA NEOGEO KING OF THE MONSTERS 2")).to.be.eq(
      "aca-neogeo-king-of-the-monsters-2-switch",
    );
    expect(buildSlug("switch")("Arcade Archives ROUTE 16")).to.be.eq("arcade-archives-route-16-switch");
    expect(buildSlug("switch")("SMITE")).to.be.eq("smite-switch");
    expect(buildSlug("switch")("Starman")).to.be.eq("starman-switch");
    expect(buildSlug("switch")("Big Bash Boom")).to.be.eq("big-bash-boom-switch");
    expect(buildSlug("switch")("Hunter's Legacy: Purrfect Edition")).to.be.eq("hunters-legacy-purrfect-edition-switch");
    expect(buildSlug("switch")("Secret Files: Tunguska")).to.be.eq("secret-files-tunguska-switch");
    expect(buildSlug("switch")("NAIRI: Tower of Shirin")).to.be.eq("nairi-tower-of-shirin-switch");
    expect(buildSlug("switch")("OkunoKA")).to.be.eq("okunoka-switch");
    expect(buildSlug("switch")("INSTANT TENNIS")).to.be.eq("instant-tennis-switch");
    expect(buildSlug("switch")("Color Zen")).to.be.eq("color-zen-switch");
    expect(buildSlug("switch")("Abyss")).to.be.eq("abyss-switch");
    expect(buildSlug("switch")("ACA NEOGEO NEO GEO CUP '98: THE ROAD TO THE VICTORY")).to.be.eq(
      "aca-neogeo-neo-geo-cup-98-the-road-to-the-victory-switch",
    );
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Wizard Fire")).to.be.eq(
      "johnny-turbos-arcade-wizard-fire-switch",
    );
    expect(buildSlug("switch")("Monica e a Guarda dos Coelhos")).to.be.eq("monica-e-a-guarda-dos-coelhos-switch");
    expect(buildSlug("switch")("Atelier Meruru ~The Apprentice of Arland~ DX")).to.be.eq(
      "atelier-meruru-the-apprentice-of-arland-dx-switch",
    );
    expect(buildSlug("switch")("Son of a Witch")).to.be.eq("son-of-a-witch-switch");
    expect(buildSlug("switch")("Battle Princess Madelyn")).to.be.eq("battle-princess-madelyn-switch");
    expect(buildSlug("switch")("Rival Megagun")).to.be.eq("rival-megagun-switch");
    expect(buildSlug("switch")("Race Arcade")).to.be.eq("race-arcade-switch");
    expect(buildSlug("switch")("Sundered: Eldritch Edition")).to.be.eq("sundered-eldritch-edition-switch");
    expect(buildSlug("switch")("LongStory")).to.be.eq("longstory-switch");
    expect(buildSlug("switch")("Atelier Totori ~The Adventurer of Arland~ DX")).to.be.eq(
      "atelier-totori-the-adventurer-of-arland-dx-switch",
    );
    expect(buildSlug("switch")("Atelier Rorona ~The Alchemist of Arland~ DX")).to.be.eq(
      "atelier-rorona-the-alchemist-of-arland-dx-switch",
    );
    expect(buildSlug("switch")("Xenon Valkyrie+")).to.be.eq("xenon-valkyrie-switch");
    expect(buildSlug("switch")("Almightree: The Last Dreamer")).to.be.eq("almightree-the-last-dreamer-switch");
    expect(buildSlug("switch")("Arcade Archives DOUBLE DRAGON II The Revenge")).to.be.eq(
      "arcade-archives-double-dragon-ii-the-revenge-switch",
    );
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Shoot Out")).to.be.eq("johnny-turbos-arcade-shoot-out-switch");
    expect(buildSlug("switch")("ACA NEOGEO TWINKLE STAR SPRITES")).to.be.eq("aca-neogeo-twinkle-star-sprites-switch");
    expect(buildSlug("switch")("Omensight: Definitive Edition")).to.be.eq("omensight-definitive-edition-switch");
    expect(buildSlug("switch")("Wondershot")).to.be.eq("wondershot-switch");
    expect(buildSlug("switch")("Mana Spark")).to.be.eq("mana-spark-switch");
    expect(buildSlug("switch")("Ivanych vs. Eared Beast")).to.be.eq("ivanych-vs-eared-beast-switch");
    expect(buildSlug("switch")("Koloro")).to.be.eq("koloro-switch");
    expect(buildSlug("switch")("Knights of Pen & Paper 2 Deluxiest Edition")).to.be.eq(
      "knights-of-pen-and-paper-2-deluxiest-edition-switch",
    );
    expect(buildSlug("switch")("YIIK: A Postmodern RPG")).to.be.eq("yiik-a-postmodern-rpg-switch");
    expect(buildSlug("switch")("Bury me, my Love")).to.be.eq("bury-me-my-love-switch");
    expect(buildSlug("switch")("Katamari Damacy REROLL")).to.be.eq("katamari-damacy-reroll-switch");
    expect(buildSlug("switch")("Inside My Radio")).to.be.eq("inside-my-radio-switch");
    expect(buildSlug("switch")("Solar Flux")).to.be.eq("solar-flux-switch");
    expect(buildSlug("switch")("GRIS")).to.be.eq("gris-switch");
    expect(buildSlug("switch")("Kingdom Two Crowns")).to.be.eq("kingdom-two-crowns-switch");
    expect(buildSlug("switch")("Lazy Galaxy: Rebel Story")).to.be.eq("lazy-galaxy-rebel-story-switch");
    expect(buildSlug("switch")("Ethan: Meteor Hunter")).to.be.eq("ethan-meteor-hunter-switch");
    expect(buildSlug("switch")("ACA NEOGEO METAL SLUG 5")).to.be.eq("aca-neogeo-metal-slug-5-switch");
    expect(buildSlug("switch")("Pic-a-Pix Pieces")).to.be.eq("pic-a-pix-pieces-switch");
    expect(buildSlug("switch")("Arcade Archives ATHENA")).to.be.eq("arcade-archives-athena-switch");
    expect(buildSlug("switch")("Aaero: Complete Edition")).to.be.eq("aaero-complete-edition-switch");
    expect(buildSlug("switch")("A Ch'ti Bundle")).to.be.eq("a-chti-bundle-switch");
    expect(buildSlug("switch")("Chronus Arc")).to.be.eq("chronus-arc-switch");
    expect(buildSlug("switch")("Doodle God: Evolution")).to.be.eq("doodle-god-evolution-switch");
    expect(buildSlug("switch")("Knights of Pen and Paper Bundle")).to.be.eq("knights-of-pen-and-paper-bundle-switch");
    expect(buildSlug("switch")("Bring Them Home")).to.be.eq("bring-them-home-switch");
    expect(buildSlug("switch")("Rain World")).to.be.eq("rain-world-switch");
    expect(buildSlug("switch")("Dreamwalker")).to.be.eq("dreamwalker-switch");
    expect(buildSlug("switch")("Firewatch")).to.be.eq("firewatch-switch");
    expect(buildSlug("switch")("Awe")).to.be.eq("awe-switch");
    expect(buildSlug("switch")("99Seconds")).to.be.eq("99seconds-switch");
    expect(buildSlug("switch")("Donut County")).to.be.eq("donut-county-switch");
    expect(buildSlug("switch")("ToeJam & Earl: Back in the Groove!")).to.be.eq(
      "toejam-and-earl-back-in-the-groove-switch",
    );
    expect(buildSlug("switch")("Odium to the Core")).to.be.eq("odium-to-the-core-switch");
    expect(buildSlug("switch")("Guess the Character")).to.be.eq("guess-the-character-switch");
    expect(buildSlug("switch")("City Builder")).to.be.eq("city-builder-switch");
    expect(buildSlug("switch")("Party Arcade")).to.be.eq("party-arcade-switch");
    expect(buildSlug("switch")("InkyPen")).to.be.eq("inkypen-switch");
    expect(buildSlug("switch")("Digerati Indie Bundle: INK & Hacky Zack")).to.be.eq(
      "digerati-indie-bundle-ink-and-hacky-zack-switch",
    );
    expect(buildSlug("switch")("JCB Pioneer: Mars")).to.be.eq("jcb-pioneer-mars-switch");
    expect(buildSlug("switch")("The Aquatic Adventure of the Last Human")).to.be.eq(
      "the-aquatic-adventure-of-the-last-human-switch",
    );
    expect(buildSlug("switch")("Mad Age & This Guy")).to.be.eq("mad-age-and-this-guy-switch");
    expect(buildSlug("switch")("Uncanny Valley")).to.be.eq("uncanny-valley-switch");
    expect(buildSlug("switch")("Horizon Shift '81")).to.be.eq("horizon-shift-81-switch");
    expect(buildSlug("switch")("Blacksea Odyssey")).to.be.eq("blacksea-odyssey-switch");
    expect(buildSlug("switch")("Catastronauts")).to.be.eq("catastronauts-switch");
    expect(buildSlug("switch")("Omega Strike")).to.be.eq("omega-strike-switch");
    expect(buildSlug("switch")("Leopoldo Manquiseil")).to.be.eq("leopoldo-manquiseil-switch");
    expect(buildSlug("switch")("Dynamite Fishing - World Games")).to.be.eq("dynamite-fishing-world-games-switch");
    expect(buildSlug("switch")("Clouds & Sheep 2")).to.be.eq("clouds-and-sheep-2-switch");
    expect(buildSlug("switch")("RAZED")).to.be.eq("razed-switch");
    expect(buildSlug("switch")("Super Hero Fight Club: Reloaded")).to.be.eq("super-hero-fight-club-reloaded-switch");
    expect(buildSlug("switch")("The Keep")).to.be.eq("the-keep-switch");
    expect(buildSlug("switch")("Revertia")).to.be.eq("revertia-switch");
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Heavy Barrel")).to.be.eq(
      "johnny-turbos-arcade-heavy-barrel-switch",
    );
    expect(buildSlug("switch")("DYNASTY WARRIORS 8: Xtreme Legends Definitive Edition")).to.be.eq(
      "dynasty-warriors-8-xtreme-legends-definitive-edition-switch",
    );
    expect(buildSlug("switch")("Arcade Archives DONKEY KONG JR.")).to.be.eq("arcade-archives-donkey-kong-jr-switch");
    expect(buildSlug("switch")("Sheltered")).to.be.eq("sheltered-switch");
    expect(buildSlug("switch")("ACA NEOGEO PUZZLE BOBBLE")).to.be.eq("aca-neogeo-puzzle-bobble-switch");
    expect(buildSlug("switch")("Jewel Fever 2")).to.be.eq("jewel-fever-2-switch");
    expect(buildSlug("switch")("Pipe Push Paradise")).to.be.eq("pipe-push-paradise-switch");
    expect(buildSlug("switch")("Tetraminos")).to.be.eq("tetraminos-switch");
    expect(buildSlug("switch")("ACA NEOGEO THE KING OF FIGHTERS 2002")).to.be.eq(
      "aca-neogeo-the-king-of-fighters-2002-switch",
    );
    expect(buildSlug("switch")("Samsara: Deluxe Edition")).to.be.eq("samsara-deluxe-edition-switch");
    expect(buildSlug("switch")("Mech Rage")).to.be.eq("mech-rage-switch");
    expect(buildSlug("switch")("Diggerman")).to.be.eq("diggerman-switch");
    expect(buildSlug("switch")("Venture Towns")).to.be.eq("venture-towns-switch");
    expect(buildSlug("switch")("Unicornicopia")).to.be.eq("unicornicopia-switch");
    expect(buildSlug("switch")("TRYBIT LOGIC")).to.be.eq("trybit-logic-switch");
    expect(buildSlug("switch")("Octahedron: Transfixed Edition")).to.be.eq("octahedron-transfixed-edition-switch");
    expect(buildSlug("switch")("MIND: Path to Thalamus")).to.be.eq("mind-path-to-thalamus-switch");
    expect(buildSlug("switch")("Johnny Turbo’s Arcade: Express Raider")).to.be.eq(
      "johnny-turbo-s-arcade-express-raider-switch",
    );
    expect(buildSlug("switch")("Don't Sink")).to.be.eq("dont-sink-switch");
    expect(buildSlug("switch")("Mahjong Solitaire Refresh")).to.be.eq("mahjong-solitaire-refresh-switch");
    expect(buildSlug("switch")("Hardway Party")).to.be.eq("hardway-party-switch");
    expect(buildSlug("switch")("Brick Breaker")).to.be.eq("brick-breaker-switch");
    expect(buildSlug("switch")("Mentori Puzzle")).to.be.eq("mentori-puzzle-switch");
    expect(buildSlug("switch")("At Sundown: Shots In The Dark")).to.be.eq("at-sundown-shots-in-the-dark-switch");
    expect(buildSlug("switch")("Pang Adventures")).to.be.eq("pang-adventures-switch");
    expect(buildSlug("switch")("HoPiKo")).to.be.eq("hopiko-switch");
    expect(buildSlug("switch")("Neko Navy - Daydream Edition")).to.be.eq("neko-navy-daydream-edition-switch");
    expect(buildSlug("switch")("Feudal Alloy")).to.be.eq("feudal-alloy-switch");
    expect(buildSlug("switch")("Guns of Mercy - Rangers Edition")).to.be.eq("guns-of-mercy-rangers-edition-switch");
    expect(buildSlug("switch")("Planet RIX-13")).to.be.eq("planet-rix-13-switch");
    expect(buildSlug("switch")("Everything")).to.be.eq("everything-switch");
    expect(buildSlug("switch")("Gnomes Garden 2")).to.be.eq("gnomes-garden-2-switch");
    expect(buildSlug("switch")("BQM -BlockQuest Maker-")).to.be.eq("bqm-blockquest-maker-switch");
    expect(buildSlug("switch")("Caveblazers")).to.be.eq("caveblazers-switch");
    expect(buildSlug("switch")("Stellar Interface")).to.be.eq("stellar-interface-switch");
    expect(buildSlug("switch")("ACA NEOGEO RAGNAGARD")).to.be.eq("aca-neogeo-ragnagard-switch");
    expect(buildSlug("switch")("Left-Right: The Mansion")).to.be.eq("left-right-the-mansion-switch");
    expect(buildSlug("switch")("Grab Lab")).to.be.eq("grab-lab-switch");
    expect(buildSlug("switch")("Number Place 10000")).to.be.eq("number-place-10000-switch");
    expect(buildSlug("switch")("LEGRAND LEGACY: Tale of the Fatebounds")).to.be.eq(
      "legrand-legacy-tale-of-the-fatebounds-switch",
    );
    expect(buildSlug("switch")("Snowboarding The Next Phase")).to.be.eq("snowboarding-the-next-phase-switch");
    expect(buildSlug("switch")("Apocalipsis Wormwood Edition")).to.be.eq("apocalipsis-wormwood-edition-switch");
    expect(buildSlug("switch")("Lightseekers")).to.be.eq("lightseekers-switch");
    expect(buildSlug("switch")("Clock Simulator")).to.be.eq("clock-simulator-switch");
    expect(buildSlug("switch")("SEGA AGES Out Run")).to.be.eq("sega-ages-out-run-switch");
    expect(buildSlug("switch")("Elli")).to.be.eq("elli-switch");
    expect(buildSlug("switch")("GEM CRASH")).to.be.eq("gem-crash-switch");
    expect(buildSlug("switch")("Big Crown: Showdown")).to.be.eq("big-crown-showdown-switch");
    expect(buildSlug("switch")("Momodora: Reverie Under the Moonlight")).to.be.eq(
      "momodora-reverie-under-the-moonlight-switch",
    );
    expect(buildSlug("switch")("Crash™ Team Racing Nitro-Fueled")).to.be.eq("crash-team-racing-nitro-fueled-switch");
    expect(buildSlug("switch")("DYING: Reborn - Nintendo Switch™ Edition")).to.be.eq(
      "dying-reborn-nintendo-switch-edition-switch",
    );
    expect(buildSlug("switch")("ACA NEOGEO KIZUNA ENCOUNTER")).to.be.eq("aca-neogeo-kizuna-encounter-switch");
    expect(buildSlug("switch")("Old School Racer 2")).to.be.eq("old-school-racer-2-switch");
    expect(buildSlug("switch")("Combat Core")).to.be.eq("combat-core-switch");
    expect(buildSlug("switch")("Fragment of Marine")).to.be.eq("fragment-of-marine-switch");
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Nitro Ball")).to.be.eq("johnny-turbos-arcade-nitro-ball-switch");
    expect(buildSlug("switch")("Build a Bridge!")).to.be.eq("build-a-bridge-switch");
    expect(buildSlug("switch")("Mega Mall Story")).to.be.eq("mega-mall-story-switch");
    expect(buildSlug("switch")("Voxel Sword")).to.be.eq("voxel-sword-switch");
    expect(buildSlug("switch")("The Shrouded Isle")).to.be.eq("the-shrouded-isle-switch");
    expect(buildSlug("switch")("#KILLALLZOMBIES")).to.be.eq("killallzombies-switch");
    expect(buildSlug("switch")("Inops")).to.be.eq("inops-switch");
    expect(buildSlug("switch")("Dragon's Lair Trilogy")).to.be.eq("dragons-lair-trilogy-switch");
    expect(buildSlug("switch")("Fairy Fencer F Advent Dark Force")).to.be.eq("fairy-fencer-f-advent-dark-force-switch");
    expect(buildSlug("switch")("Mages of Mystralia")).to.be.eq("mages-of-mystralia-switch");
    expect(buildSlug("switch")("Pandemic")).to.be.eq("pandemic-switch");
    expect(buildSlug("switch")("The Office Quest")).to.be.eq("the-office-quest-switch");
    expect(buildSlug("switch")("Gunman Clive HD Collection")).to.be.eq("gunman-clive-hd-collection-switch");
    expect(buildSlug("switch")("Crazy Strike Bowling EX")).to.be.eq("crazy-strike-bowling-ex-switch");
    expect(buildSlug("switch")("Pikuniku")).to.be.eq("pikuniku-switch");
    expect(buildSlug("switch")("Airheart - Tales of broken Wings")).to.be.eq("airheart-tales-of-broken-wings-switch");
    expect(buildSlug("switch")("IHUGU")).to.be.eq("ihugu-switch");
    expect(buildSlug("switch")("Rampage Knights")).to.be.eq("rampage-knights-switch");
    expect(buildSlug("switch")("My Exotic Farm 2018")).to.be.eq("my-exotic-farm-2018-switch");
    expect(buildSlug("switch")("Solitaire Klondike BLACK")).to.be.eq("solitaire-klondike-black-switch");
    expect(buildSlug("switch")("FutureGrind")).to.be.eq("futuregrind-switch");
    expect(buildSlug("switch")("Spot The Differences: Party!")).to.be.eq("spot-the-differences-party-switch");
    expect(buildSlug("switch")("99Moves")).to.be.eq("99moves-switch");
    expect(buildSlug("switch")("JackQuest: The Tale of the Sword")).to.be.eq("jackquest-the-tale-of-the-sword-switch");
    expect(buildSlug("switch")("Mars or Die!")).to.be.eq("mars-or-die-switch");
    expect(buildSlug("switch")("My Memory of Us")).to.be.eq("my-memory-of-us-switch");
    expect(buildSlug("switch")("ACA NEOGEO NINJA MASTER'S")).to.be.eq("aca-neogeo-ninja-masters-switch");
    expect(buildSlug("switch")("Necrosphere Deluxe")).to.be.eq("necrosphere-deluxe-switch");
    expect(buildSlug("switch")("Piczle Colors")).to.be.eq("piczle-colors-switch");
    expect(buildSlug("switch")("Fight of Gods")).to.be.eq("fight-of-gods-switch");
    expect(buildSlug("switch")("Drowning")).to.be.eq("drowning-switch");
    expect(buildSlug("switch")("Zombie Night Terror")).to.be.eq("zombie-night-terror-switch");
    expect(buildSlug("switch")("Johnny Turbo's Arcade Joe and Mac Caveman Ninja")).to.be.eq(
      "johnny-turbos-arcade-joe-and-mac-caveman-ninja-switch",
    );
    expect(buildSlug("switch")("Achtung! Cthulhu Tactics")).to.be.eq("achtung-cthulhu-tactics-switch");
    expect(buildSlug("switch")("Cinderella - An Interactive Fairytale")).to.be.eq(
      "cinderella-an-interactive-fairytale-switch",
    );
    expect(buildSlug("switch")("Cursed Castilla")).to.be.eq("cursed-castilla-switch");
    expect(buildSlug("switch")("Asdivine Hearts II")).to.be.eq("asdivine-hearts-ii-switch");
    expect(buildSlug("switch")("UTOPIA 9 - A Volatile Vacation")).to.be.eq("utopia-9-a-volatile-vacation-switch");
    expect(buildSlug("switch")("SteamWorld Quest: Hand of Gilgamech")).to.be.eq(
      "steamworld-quest-hand-of-gilgamech-switch",
    );
    expect(buildSlug("switch")("Unruly Heroes")).to.be.eq("unruly-heroes-switch");
    expect(buildSlug("switch")("Swords & Soldiers")).to.be.eq("swords-and-soldiers-switch");
    expect(buildSlug("switch")("Goat Simulator: The GOATY")).to.be.eq("goat-simulator-the-goaty-switch");
    expect(buildSlug("switch")("Ancient Rush 2")).to.be.eq("ancient-rush-2-switch");
    expect(buildSlug("switch")("Heroes Trials")).to.be.eq("heroes-trials-switch");
    expect(buildSlug("switch")("Sleep Tight")).to.be.eq("sleep-tight-switch");
    expect(buildSlug("switch")("Paladin")).to.be.eq("paladin-switch");
    expect(buildSlug("switch")("The Path of Motus")).to.be.eq("the-path-of-motus-switch");
    expect(buildSlug("switch")("Forager")).to.be.eq("forager-switch");
    expect(buildSlug("switch")("My Arctic Farm 2018")).to.be.eq("my-arctic-farm-2018-switch");
    expect(buildSlug("switch")("Thea: The Awakening")).to.be.eq("thea-the-awakening-switch");
    expect(buildSlug("switch")("Gabbuchi")).to.be.eq("gabbuchi-switch");
    expect(buildSlug("switch")("Stray Cat Doors")).to.be.eq("stray-cat-doors-switch");
    expect(buildSlug("switch")("Forgotten Tales - Day of the Dead")).to.be.eq("forgotten-tales-day-of-the-dead-switch");
    expect(buildSlug("switch")("Akihabara CRASH! 123STAGE+1")).to.be.eq("akihabara-crash-123stage-1-switch");
    expect(buildSlug("switch")("Arcade Archives BOMB JACK")).to.be.eq("arcade-archives-bomb-jack-switch");
    expect(buildSlug("switch")("Zombie Panic in Wonderland DX")).to.be.eq("zombie-panic-in-wonderland-dx-switch");
    expect(buildSlug("switch")("Fishing Star World Tour")).to.be.eq("fishing-star-world-tour-switch");
    expect(buildSlug("switch")("LOVE")).to.be.eq("love-switch");
    expect(buildSlug("switch")("Monkey Wall")).to.be.eq("monkey-wall-switch");
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Two Crude Dudes")).to.be.eq(
      "johnny-turbos-arcade-two-crude-dudes-switch",
    );
    expect(buildSlug("switch")("Tokyo School Life")).to.be.eq("tokyo-school-life-switch");
    expect(buildSlug("switch")("New Star Manager")).to.be.eq("new-star-manager-switch");
    expect(buildSlug("switch")("Defense Grid 2")).to.be.eq("defense-grid-2-switch");
    expect(buildSlug("switch")("Evoland Legendary Edition")).to.be.eq("evoland-legendary-edition-switch");
    expect(buildSlug("switch")("Downwell")).to.be.eq("downwell-switch");
    expect(buildSlug("switch")("Bleep Bloop")).to.be.eq("bleep-bloop-switch");
    expect(buildSlug("switch")("BOMBFEST")).to.be.eq("bombfest-switch");
    expect(buildSlug("switch")("Halcyon 6: Starbase Commander")).to.be.eq("halcyon-6-starbase-commander-switch");
    expect(buildSlug("switch")("planetarian")).to.be.eq("planetarian-switch");
    expect(buildSlug("switch")("Hyperide")).to.be.eq("hyperide-switch");
    expect(buildSlug("switch")("Ape Out")).to.be.eq("ape-out-switch");
    expect(buildSlug("switch")("NEKOPARA Vol.2")).to.be.eq("nekopara-vol2-switch");
    expect(buildSlug("switch")("Eggggg - The platform puker")).to.be.eq("eggggg-the-platform-puker-switch");
    expect(buildSlug("switch")("Estiman")).to.be.eq("estiman-switch");
    expect(buildSlug("switch")("Hell Warders")).to.be.eq("hell-warders-switch");
    expect(buildSlug("switch")("TETRIS 99")).to.be.eq("tetris-99-switch");
    expect(buildSlug("switch")("Farm Together")).to.be.eq("farm-together-switch");
    expect(buildSlug("switch")("The Liar Princess and the Blind Prince")).to.be.eq(
      "the-liar-princess-and-the-blind-prince-switch",
    );
    expect(buildSlug("switch")("The Stillness of the Wind")).to.be.eq("the-stillness-of-the-wind-switch");
    expect(buildSlug("switch")("Arcade Archives MOON CRESTA")).to.be.eq("arcade-archives-moon-cresta-switch");
    expect(buildSlug("switch")("Magic Scroll Tactics")).to.be.eq("magic-scroll-tactics-switch");
    expect(buildSlug("switch")("City of Brass")).to.be.eq("city-of-brass-switch");
    expect(buildSlug("switch")("Avenger Bird")).to.be.eq("avenger-bird-switch");
    expect(buildSlug("switch")("Tangledeep")).to.be.eq("tangledeep-switch");
    expect(buildSlug("switch")("Shanky: The Vegan`s Nightmare")).to.be.eq("shanky-the-vegan-s-nightmare-switch");
    expect(buildSlug("switch")("Glass Masquerade")).to.be.eq("glass-masquerade-switch");
    expect(buildSlug("switch")("TORIDAMA: Brave Challenge")).to.be.eq("toridama-brave-challenge-switch");
    expect(buildSlug("switch")("Spoiler Alert")).to.be.eq("spoiler-alert-switch");
    expect(buildSlug("switch")("Onigiri")).to.be.eq("onigiri-switch");
    expect(buildSlug("switch")("FREECELL BATTLE KING")).to.be.eq("freecell-battle-king-switch");
    expect(buildSlug("switch")("Robothorium")).to.be.eq("robothorium-switch");
    expect(buildSlug("switch")("X-Morph: Defense")).to.be.eq("x-morph-defense-switch");
    expect(buildSlug("switch")("Reverie: Sweet As Edition")).to.be.eq("reverie-sweet-as-edition-switch");
    expect(buildSlug("switch")("Iron Crypticle")).to.be.eq("iron-crypticle-switch");
    expect(buildSlug("switch")("Odallus: The Dark Call")).to.be.eq("odallus-the-dark-call-switch");
    expect(buildSlug("switch")("Stunt Kite Party")).to.be.eq("stunt-kite-party-switch");
    expect(buildSlug("switch")("Pocket Academy")).to.be.eq("pocket-academy-switch");
    expect(buildSlug("switch")("Sky Gamblers - Afterburner")).to.be.eq("sky-gamblers-afterburner-switch");
    expect(buildSlug("switch")("Oniken: Unstoppable Edition")).to.be.eq("oniken-unstoppable-edition-switch");
    expect(buildSlug("switch")("V.O.I.D.")).to.be.eq("void-switch");
    expect(buildSlug("switch")("Gnomes Garden: New Home")).to.be.eq("gnomes-garden-new-home-switch");
    expect(buildSlug("switch")("Pillar")).to.be.eq("pillar-switch");
    expect(buildSlug("switch")("Observer")).to.be.eq("observer-switch");
    expect(buildSlug("switch")("Commander Keen in Keen Dreams")).to.be.eq("commander-keen-in-keen-dreams-switch");
    expect(buildSlug("switch")("ACA NEOGEO PUZZLE BOBBLE 2")).to.be.eq("aca-neogeo-puzzle-bobble-2-switch");
    expect(buildSlug("switch")("Surfingers")).to.be.eq("surfingers-switch");
    expect(buildSlug("switch")("Access Denied")).to.be.eq("access-denied-switch");
    expect(buildSlug("switch")("Percy's Predicament Deluxe")).to.be.eq("percys-predicament-deluxe-switch");
    expect(buildSlug("switch")("Pizza Parking")).to.be.eq("pizza-parking-switch");
    expect(buildSlug("switch")("KYUB")).to.be.eq("kyub-switch");
    expect(buildSlug("switch")("OlliOlli: Switch Stance")).to.be.eq("olliolli-switch-stance-switch");
    expect(buildSlug("switch")("TOUHOU SKY ARENA -MATSURI- CLIMAX")).to.be.eq("touhou-sky-arena-matsuri-climax-switch");
    expect(buildSlug("switch")("Alvastia Chronicles")).to.be.eq("alvastia-chronicles-switch");
    expect(buildSlug("switch")("Strikey Sisters")).to.be.eq("strikey-sisters-switch");
    expect(buildSlug("switch")("Minesweeper Genius")).to.be.eq("minesweeper-genius-switch");
    expect(buildSlug("switch")("Ghoulboy")).to.be.eq("ghoulboy-switch");
    expect(buildSlug("switch")("The Journey Down Trilogy")).to.be.eq("the-journey-down-trilogy-switch");
    expect(buildSlug("switch")("RemiLore")).to.be.eq("remilore-switch");
    expect(buildSlug("switch")("Cinders")).to.be.eq("cinders-switch");
    expect(buildSlug("switch")("Modern Combat Blackout")).to.be.eq("modern-combat-blackout-switch");
    expect(buildSlug("switch")("Tales of the Orient - The Rising Sun")).to.be.eq(
      "tales-of-the-orient-the-rising-sun-switch",
    );
    expect(buildSlug("switch")("Mimic Hunter")).to.be.eq("mimic-hunter-switch");
    expect(buildSlug("switch")("Riddled Corpses EX")).to.be.eq("riddled-corpses-ex-switch");
    expect(buildSlug("switch")("Space Lift Danger Panic!")).to.be.eq("space-lift-danger-panic-switch");
    expect(buildSlug("switch")("Astrology and Horoscopes Premium")).to.be.eq("astrology-and-horoscopes-premium-switch");
    expect(buildSlug("switch")("Guess the Word")).to.be.eq("guess-the-word-switch");
    expect(buildSlug("switch")("Pet Care")).to.be.eq("pet-care-switch");
    expect(buildSlug("switch")("Chocobo's Mystery Dungeon EVERY BUDDY!")).to.be.eq(
      "chocobos-mystery-dungeon-every-buddy-switch",
    );
    expect(buildSlug("switch")("FINAL FANTASY IX")).to.be.eq("final-fantasy-ix-switch");
    expect(buildSlug("switch")("R.B.I. Baseball 19")).to.be.eq("rbi-baseball-19-switch");
    expect(buildSlug("switch")("FINAL FANTASY VII")).to.be.eq("final-fantasy-vii-switch");
    expect(buildSlug("switch")("Nice Slice")).to.be.eq("nice-slice-switch");
    expect(buildSlug("switch")("Captain StarONE")).to.be.eq("captain-starone-switch");
    expect(buildSlug("switch")("Duck Hunting Challenge")).to.be.eq("duck-hunting-challenge-switch");
    expect(buildSlug("switch")("Alchemic Dungeons DX")).to.be.eq("alchemic-dungeons-dx-switch");
    expect(buildSlug("switch")("Dungeon Stars")).to.be.eq("dungeon-stars-switch");
    expect(buildSlug("switch")("Degrees of Separation")).to.be.eq("degrees-of-separation-switch");
    expect(buildSlug("switch")("Arcade Archives FRONT LINE")).to.be.eq("arcade-archives-front-line-switch");
    expect(buildSlug("switch")("Mindball Play")).to.be.eq("mindball-play-switch");
    expect(buildSlug("switch")("DELTARUNE Chapter 1")).to.be.eq("deltarune-chapter-1-switch");
    expect(buildSlug("switch")("Awesome Pea")).to.be.eq("awesome-pea-switch");
    expect(buildSlug("switch")("BATTLLOON")).to.be.eq("battlloon-switch");
    expect(buildSlug("switch")("Almost There: The Platformer")).to.be.eq("almost-there-the-platformer-switch");
    expect(buildSlug("switch")("Trine 2: Complete Story")).to.be.eq("trine-2-complete-story-switch");
    expect(buildSlug("switch")("YUMENIKKI -DREAM DIARY-")).to.be.eq("yumenikki-dream-diary-switch");
    expect(buildSlug("switch")("Devil Engine")).to.be.eq("devil-engine-switch");
    expect(buildSlug("switch")("Rotating Brave")).to.be.eq("rotating-brave-switch");
    expect(buildSlug("switch")("Pirates Pinball")).to.be.eq("pirates-pinball-switch");
    expect(buildSlug("switch")("BlazeRush")).to.be.eq("blazerush-switch");
    expect(buildSlug("switch")("Raining Coins")).to.be.eq("raining-coins-switch");
    expect(buildSlug("switch")("I wanna fly")).to.be.eq("i-wanna-fly-switch");
    expect(buildSlug("switch")("Swords & Soldiers 2 Shawarmageddon")).to.be.eq(
      "swords-and-soldiers-2-shawarmageddon-switch",
    );
    expect(buildSlug("switch")("Creepy Road")).to.be.eq("creepy-road-switch");
    expect(buildSlug("switch")("Klondike Solitaire")).to.be.eq("klondike-solitaire-switch");
    expect(buildSlug("switch")("Tardy")).to.be.eq("tardy-switch");
    expect(buildSlug("switch")("The Rainsdowne Players")).to.be.eq("the-rainsdowne-players-switch");
    expect(buildSlug("switch")("Overdriven Reloaded: Special Edition")).to.be.eq(
      "overdriven-reloaded-special-edition-switch",
    );
    expect(buildSlug("switch")("Hive Jump")).to.be.eq("hive-jump-switch");
    expect(buildSlug("switch")("Darkest Dungeon®")).to.be.eq("darkest-dungeon-switch");
    expect(buildSlug("switch")("Paper Wars: Cannon Fodder Devastated")).to.be.eq(
      "paper-wars-cannon-fodder-devastated-switch",
    );
    expect(buildSlug("switch")("Velocity®2X")).to.be.eq("velocity-2x-switch");
    expect(buildSlug("switch")("The Swindle")).to.be.eq("the-swindle-switch");
    expect(buildSlug("switch")("Shovel Knight: Treasure Trove")).to.be.eq("shovel-knight-treasure-trove-switch");
    expect(buildSlug("switch")("POOL")).to.be.eq("pool-switch");
    expect(buildSlug("switch")("Peace, Death! Complete Edition")).to.be.eq("peace-death-complete-edition-switch");
    expect(buildSlug("switch")("Party Trivia")).to.be.eq("party-trivia-switch");
    expect(buildSlug("switch")("Air Hockey")).to.be.eq("air-hockey-switch");
    expect(buildSlug("switch")("Iris School of Wizardry -Vinculum Hearts-")).to.be.eq(
      "iris-school-of-wizardry-vinculum-hearts-switch",
    );
    expect(buildSlug("switch")("BILLIARD")).to.be.eq("billiard-switch");
    expect(buildSlug("switch")("Battery Jam")).to.be.eq("battery-jam-switch");
    expect(buildSlug("switch")("Catch 'Em! Goldfish Scooping")).to.be.eq("catch-em-goldfish-scooping-switch");
    expect(buildSlug("switch")("The Golf")).to.be.eq("the-golf-switch");
    expect(buildSlug("switch")("Ayakashi Koi Gikyoku -Forbidden Romance with Mysterious Spirit-")).to.be.eq(
      "ayakashi-koi-gikyoku-forbidden-romance-with-mysterious-spirit-switch",
    );
    expect(buildSlug("switch")("THE Card: Poker, Texas hold 'em, Blackjack and Page One")).to.be.eq(
      "the-card-poker-texas-hold-em-blackjack-and-page-one-switch",
    );
    expect(buildSlug("switch")("The Amazing Shinsengumi: Heroes in Love")).to.be.eq(
      "the-amazing-shinsengumi-heroes-in-love-switch",
    );
    expect(buildSlug("switch")("Gakuen Club")).to.be.eq("gakuen-club-switch");
    expect(buildSlug("switch")("The Men of Yoshiwara: Ohgiya")).to.be.eq("the-men-of-yoshiwara-ohgiya-switch");
    expect(buildSlug("switch")("Earth Atlantis")).to.be.eq("earth-atlantis-switch");
    expect(buildSlug("switch")("STARSHIP AVENGER Operation: Take Back Earth")).to.be.eq(
      "starship-avenger-operation-take-back-earth-switch",
    );
    expect(buildSlug("switch")("Völgarr the Viking")).to.be.eq("volgarr-the-viking-switch");
    expect(buildSlug("switch")("BINGO for Nintendo Switch")).to.be.eq("bingo-for-nintendo-switch");
    expect(buildSlug("switch")("Perry Pig Jump")).to.be.eq("perry-pig-jump-switch");
    expect(buildSlug("switch")("Hexa Maze")).to.be.eq("hexa-maze-switch");
    expect(buildSlug("switch")("Snipperclips – Cut it out, together!")).to.be.eq(
      "snipperclips-cut-it-out-together-switch",
    );
    expect(buildSlug("switch")("ClusterPuck 99")).to.be.eq("clusterpuck-99-switch");
    expect(buildSlug("switch")("Plague Road")).to.be.eq("plague-road-switch");
    expect(buildSlug("switch")("M.A.C.E. Space Shooter")).to.be.eq("mace-space-shooter-switch");
    expect(buildSlug("switch")("Spheroids")).to.be.eq("spheroids-switch");
    expect(buildSlug("switch")("Marble Power Blast")).to.be.eq("marble-power-blast-switch");
    expect(buildSlug("switch")("Mecho Tales")).to.be.eq("mecho-tales-switch");
    expect(buildSlug("switch")("Valthirian Arc: Hero School Story")).to.be.eq(
      "valthirian-arc-hero-school-story-switch",
    );
    expect(buildSlug("switch")("Super Ping Pong Trick Shot")).to.be.eq("super-ping-pong-trick-shot-switch");
    expect(buildSlug("switch")("BOXBOY! + BOXGIRL!")).to.be.eq("boxboy-boxgirl-switch");
    expect(buildSlug("switch")("Hyper Light Drifter - Special Edition")).to.be.eq(
      "hyper-light-drifter-special-edition-switch",
    );
    expect(buildSlug("switch")("Celeste")).to.be.eq("celeste-switch");
    expect(buildSlug("switch")("Into the Breach")).to.be.eq("into-the-breach-switch");
    expect(buildSlug("switch")("Night in the Woods")).to.be.eq("night-in-the-woods-switch");
    expect(buildSlug("switch")("Tactical Mind")).to.be.eq("tactical-mind-switch");
    expect(buildSlug("switch")("Brave Dungeon + Dark Witch's Story:COMBAT")).to.be.eq(
      "brave-dungeon-dark-witchs-story-combat-switch",
    );
    expect(buildSlug("switch")("Persian Nights: Sands of Wonders")).to.be.eq("persian-nights-sands-of-wonders-switch");
    expect(buildSlug("switch")("Dead Fun Pack: Penguins and Aliens Strikes Again")).to.be.eq(
      "dead-fun-pack-penguins-and-aliens-strikes-again-switch",
    );
    expect(buildSlug("switch")("Bad Dream: Coma")).to.be.eq("bad-dream-coma-switch");
    expect(buildSlug("switch")("The King's Bird")).to.be.eq("the-kings-bird-switch");
    expect(buildSlug("switch")("Regalia: Of Men and Monarchs - Royal Edition")).to.be.eq(
      "regalia-of-men-and-monarchs-royal-edition-switch",
    );
    expect(buildSlug("switch")("Solstice Chronicles: MIA")).to.be.eq("solstice-chronicles-mia-switch");
    expect(buildSlug("switch")("The Bridge")).to.be.eq("the-bridge-switch");
    expect(buildSlug("switch")("Mercury Race")).to.be.eq("mercury-race-switch");
    expect(buildSlug("switch")("Teddy the Wanderer: Kayaking")).to.be.eq("teddy-the-wanderer-kayaking-switch");
    expect(buildSlug("switch")("WILL: A Wonderful World")).to.be.eq("will-a-wonderful-world-switch");
    expect(buildSlug("switch")("World Conqueror X")).to.be.eq("world-conqueror-x-switch");
    expect(buildSlug("switch")("Food Truck Tycoon")).to.be.eq("food-truck-tycoon-switch");
    expect(buildSlug("switch")("Tumblestone")).to.be.eq("tumblestone-switch");
    expect(buildSlug("switch")("Conduct TOGETHER!")).to.be.eq("conduct-together-switch");
    expect(buildSlug("switch")("AGARTHA-S")).to.be.eq("agartha-s-switch");
    expect(buildSlug("switch")("Job the Leprechaun")).to.be.eq("job-the-leprechaun-switch");
    expect(buildSlug("switch")("Enigmatis 2: The Mists of Ravenwood")).to.be.eq(
      "enigmatis-2-the-mists-of-ravenwood-switch",
    );
    expect(buildSlug("switch")("Mercenaries Wings: The False Phoenix")).to.be.eq(
      "mercenaries-wings-the-false-phoenix-switch",
    );
    expect(buildSlug("switch")("Shelter Generations")).to.be.eq("shelter-generations-switch");
    expect(buildSlug("switch")("Fishing Universe Simulator")).to.be.eq("fishing-universe-simulator-switch");
    expect(buildSlug("switch")("Merchants of Kaidan")).to.be.eq("merchants-of-kaidan-switch");
    expect(buildSlug("switch")("My Brother Rabbit")).to.be.eq("my-brother-rabbit-switch");
    expect(buildSlug("switch")("Spartan")).to.be.eq("spartan-switch");
    expect(buildSlug("switch")("Fe")).to.be.eq("fe-switch");
    expect(buildSlug("switch")("The Adventure Pals")).to.be.eq("the-adventure-pals-switch");
    expect(buildSlug("switch")("Magic Nations")).to.be.eq("magic-nations-switch");
    expect(buildSlug("switch")("Flinthook")).to.be.eq("flinthook-switch");
    expect(buildSlug("switch")("The Long Reach")).to.be.eq("the-long-reach-switch");
    expect(buildSlug("switch")("Soulblight")).to.be.eq("soulblight-switch");
    expect(buildSlug("switch")("Cake Laboratory")).to.be.eq("cake-laboratory-switch");
    expect(buildSlug("switch")("Car Mechanic Simulator")).to.be.eq("car-mechanic-simulator-switch");
    expect(buildSlug("switch")("Aperion Cyberstorm")).to.be.eq("aperion-cyberstorm-switch");
    expect(buildSlug("switch")("Morphite")).to.be.eq("morphite-switch");
    expect(buildSlug("switch")("Storm Boy")).to.be.eq("storm-boy-switch");
    expect(buildSlug("switch")("UNO")).to.be.eq("uno-switch");
    expect(buildSlug("switch")("Monkey King: Master of the Clouds")).to.be.eq(
      "monkey-king-master-of-the-clouds-switch",
    );
    expect(buildSlug("switch")("Space Ribbon")).to.be.eq("space-ribbon-switch");
    expect(buildSlug("switch")("Santa Tracker")).to.be.eq("santa-tracker-switch");
    expect(buildSlug("switch")("Green Game: TimeSwapper")).to.be.eq("green-game-timeswapper-switch");
    expect(buildSlug("switch")("Serial Cleaner")).to.be.eq("serial-cleaner-switch");
    expect(buildSlug("switch")("Manual Samuel")).to.be.eq("manual-samuel-switch");
    expect(buildSlug("switch")("Beholder: Complete Edition")).to.be.eq("beholder-complete-edition-switch");
    expect(buildSlug("switch")("When Ski Lifts Go Wrong")).to.be.eq("when-ski-lifts-go-wrong-switch");
    expect(buildSlug("switch")("Red Game Without a Great Name")).to.be.eq("red-game-without-a-great-name-switch");
    expect(buildSlug("switch")("Rogue Aces")).to.be.eq("rogue-aces-switch");
    expect(buildSlug("switch")("The Flame in the Flood: Complete Edition")).to.be.eq(
      "the-flame-in-the-flood-complete-edition-switch",
    );
    expect(buildSlug("switch")("Snake Pass")).to.be.eq("snake-pass-switch");
    expect(buildSlug("switch")("Pumped BMX Pro")).to.be.eq("pumped-bmx-pro-switch");
    expect(buildSlug("switch")("Smoke And Sacrifice")).to.be.eq("smoke-and-sacrifice-switch");
    expect(buildSlug("switch")("Bomber Crew")).to.be.eq("bomber-crew-switch");
    expect(buildSlug("switch")("Quarantine Circular")).to.be.eq("quarantine-circular-switch");
    expect(buildSlug("switch")("Destiny's Princess: A War Story, A Love Story")).to.be.eq(
      "destinys-princess-a-war-story-a-love-story-switch",
    );
    expect(buildSlug("switch")("Nightshade／百花百狼")).to.be.eq("nightshade-switch");
    expect(buildSlug("switch")("Disease -Hidden Object-")).to.be.eq("disease-hidden-object-switch");
    expect(buildSlug("switch")("Enchanting Mahjong Match")).to.be.eq("enchanting-mahjong-match-switch");
    expect(buildSlug("switch")("ESCAPE TRICK: 35 Fateful Enigmas")).to.be.eq("escape-trick-35-fateful-enigmas-switch");
    expect(buildSlug("switch")("Blue Rider")).to.be.eq("blue-rider-switch");
    expect(buildSlug("switch")("Knock 'Em Down! Bowling")).to.be.eq("knock-em-down-bowling-switch");
    expect(buildSlug("switch")("Tennis")).to.be.eq("tennis-switch");
    expect(buildSlug("switch")("Kitty Love -Way to look for love-")).to.be.eq("kitty-love-way-to-look-for-love-switch");
    expect(buildSlug("switch")("Iro Hero")).to.be.eq("iro-hero-switch");
    expect(buildSlug("switch")("Funghi Puzzle Funghi Explosion")).to.be.eq("funghi-puzzle-funghi-explosion-switch");
    expect(buildSlug("switch")("The Charming Empire")).to.be.eq("the-charming-empire-switch");
    expect(buildSlug("switch")("THE Number Puzzle")).to.be.eq("the-number-puzzle-switch");
    expect(buildSlug("switch")("Pub Encounter")).to.be.eq("pub-encounter-switch");
    expect(buildSlug("switch")("Graceful Explosion Machine")).to.be.eq("graceful-explosion-machine-switch");
    expect(buildSlug("switch")("GUILT BATTLE ARENA")).to.be.eq("guilt-battle-arena-switch");
    expect(buildSlug("switch")("Cluedo")).to.be.eq("cluedo-switch");
    expect(buildSlug("switch")("Ice Cream Surfer")).to.be.eq("ice-cream-surfer-switch");
    expect(buildSlug("switch")("Balance Blox")).to.be.eq("balance-blox-switch");
    expect(buildSlug("switch")("Riptide GP: Renegade")).to.be.eq("riptide-gp-renegade-switch");
    expect(buildSlug("switch")("Six Sides of the World")).to.be.eq("six-sides-of-the-world-switch");
    expect(buildSlug("switch")("Ping Pong Trick Shot EVOLUTION")).to.be.eq("ping-pong-trick-shot-evolution-switch");
    expect(buildSlug("switch")("Bubble Shooter DX")).to.be.eq("bubble-shooter-dx-switch");
    expect(buildSlug("switch")("The Infectious Madness of Doctor Dekker")).to.be.eq(
      "the-infectious-madness-of-doctor-dekker-switch",
    );
    expect(buildSlug("switch")("Animal Hunter Z")).to.be.eq("animal-hunter-z-switch");
    expect(buildSlug("switch")("Beach Buggy Racing")).to.be.eq("beach-buggy-racing-switch");
    expect(buildSlug("switch")("Uurnog Uurnlimited")).to.be.eq("uurnog-uurnlimited-switch");
    expect(buildSlug("switch")("Tachyon Project")).to.be.eq("tachyon-project-switch");
    expect(buildSlug("switch")("Spencer")).to.be.eq("spencer-switch");
    expect(buildSlug("switch")("Dexteritrip")).to.be.eq("dexteritrip-switch");
    expect(buildSlug("switch")("Super Blackjack Battle 2 Turbo Edition - The Card Warriors")).to.be.eq(
      "super-blackjack-battle-2-turbo-edition-the-card-warriors-switch",
    );
    expect(buildSlug("switch")("Nippon Marathon")).to.be.eq("nippon-marathon-switch");
    expect(buildSlug("switch")("Swamp Defense 2")).to.be.eq("swamp-defense-2-switch");
    expect(buildSlug("switch")("Super Treasure Arena")).to.be.eq("super-treasure-arena-switch");
    expect(buildSlug("switch")("Hollow Knight")).to.be.eq("hollow-knight-switch");
    expect(buildSlug("switch")("Dead Cells")).to.be.eq("dead-cells-switch");
    expect(buildSlug("switch")("Stardew Valley")).to.be.eq("stardew-valley-switch");
    expect(buildSlug("switch")("UNDERTALE")).to.be.eq("undertale-switch");
    expect(buildSlug("switch")("Mercenaries Saga Chronicles")).to.be.eq("mercenaries-saga-chronicles-switch");
    expect(buildSlug("switch")("Viviette")).to.be.eq("viviette-switch");
    expect(buildSlug("switch")("PAN-PAN A tiny big adventure")).to.be.eq("pan-pan-a-tiny-big-adventure-switch");
    expect(buildSlug("switch")("Startide")).to.be.eq("startide-switch");
    expect(buildSlug("switch")("Cycle 28")).to.be.eq("cycle-28-switch");
    expect(buildSlug("switch")("Double Cross")).to.be.eq("double-cross-switch");
    expect(buildSlug("switch")("ANIMUS")).to.be.eq("animus-switch");
    expect(buildSlug("switch")("Glaive: Brick Breaker")).to.be.eq("glaive-brick-breaker-switch");
    expect(buildSlug("switch")("Bedtime Blues")).to.be.eq("bedtime-blues-switch");
    expect(buildSlug("switch")("Koi DX")).to.be.eq("koi-dx-switch");
    expect(buildSlug("switch")("Warhammer Quest")).to.be.eq("warhammer-quest-switch");
    expect(buildSlug("switch")("Slay the Spire")).to.be.eq("slay-the-spire-switch");
    expect(buildSlug("switch")("Snake vs Snake")).to.be.eq("snake-vs-snake-switch");
    expect(buildSlug("switch")("De Mambo")).to.be.eq("de-mambo-switch");
    expect(buildSlug("switch")("Doom & Destiny")).to.be.eq("doom-and-destiny-switch");
    expect(buildSlug("switch")("'n Verlore Verstand")).to.be.eq("n-verlore-verstand-switch");
    expect(buildSlug("switch")("Flowlines VS")).to.be.eq("flowlines-vs-switch");
    expect(buildSlug("switch")("Oxyjet")).to.be.eq("oxyjet-switch");
    expect(buildSlug("switch")("Cast of the Seven Godsends")).to.be.eq("cast-of-the-seven-godsends-switch");
    expect(buildSlug("switch")("Mercenary Kings: Reloaded Edition")).to.be.eq(
      "mercenary-kings-reloaded-edition-switch",
    );
    expect(buildSlug("switch")("The Room")).to.be.eq("the-room-switch");
    expect(buildSlug("switch")("Carcassonne")).to.be.eq("carcassonne-switch");
    expect(buildSlug("switch")("Ludomania")).to.be.eq("ludomania-switch");
    expect(buildSlug("switch")("The Walking Vegetables: Radical Edition")).to.be.eq(
      "the-walking-vegetables-radical-edition-switch",
    );
    expect(buildSlug("switch")("Warplanes: WW2 Dogfight")).to.be.eq("warplanes-ww2-dogfight-switch");
    expect(buildSlug("switch")("GIGANTIC ARMY")).to.be.eq("gigantic-army-switch");
    expect(buildSlug("switch")("Daggerhood")).to.be.eq("daggerhood-switch");
    expect(buildSlug("switch")("Caterpillar Royale")).to.be.eq("caterpillar-royale-switch");
    expect(buildSlug("switch")("Q.U.B.E. 2")).to.be.eq("qube-2-switch");
    expect(buildSlug("switch")("Braveland Trilogy")).to.be.eq("braveland-trilogy-switch");
    expect(buildSlug("switch")("Assault Android Cactus+")).to.be.eq("assault-android-cactus-switch");
    expect(buildSlug("switch")("Ninja Village")).to.be.eq("ninja-village-switch");
    expect(buildSlug("switch")("ACA NEOGEO THE KING OF FIGHTERS 2003")).to.be.eq(
      "aca-neogeo-the-king-of-fighters-2003-switch",
    );
    expect(buildSlug("switch")("Anodyne")).to.be.eq("anodyne-switch");
    expect(buildSlug("switch")("Croc's World Run")).to.be.eq("crocs-world-run-switch");
    expect(buildSlug("switch")("Arcade Archives ICE CLIMBER")).to.be.eq("arcade-archives-ice-climber-switch");
    expect(buildSlug("switch")("Fimbul")).to.be.eq("fimbul-switch");
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Super Real Darwin")).to.be.eq(
      "johnny-turbos-arcade-super-real-darwin-switch",
    );
    expect(buildSlug("switch")("Monster Dynamite")).to.be.eq("monster-dynamite-switch");
    expect(buildSlug("switch")("History 2048")).to.be.eq("history-2048-switch");
    expect(buildSlug("switch")("Pixel Devil and the Broken Cartridge")).to.be.eq(
      "pixel-devil-and-the-broken-cartridge-switch",
    );
    expect(buildSlug("switch")("Rad Rodgers Radical Edition")).to.be.eq("rad-rodgers-radical-edition-switch");
    expect(buildSlug("switch")("The LEGO Movie 2 Videogame")).to.be.eq("the-lego-movie-2-videogame-switch");
    expect(buildSlug("switch")("My Girlfriend is a Mermaid!?")).to.be.eq("my-girlfriend-is-a-mermaid-switch");
    expect(buildSlug("switch")("The Lost Light of Sisu")).to.be.eq("the-lost-light-of-sisu-switch");
    expect(buildSlug("switch")("Valley")).to.be.eq("valley-switch");
    expect(buildSlug("switch")("Crash Dummy")).to.be.eq("crash-dummy-switch");
    expect(buildSlug("switch")("SKYHILL")).to.be.eq("skyhill-switch");
    expect(buildSlug("switch")("Pokémon Shield")).to.be.eq("pokemon-shield-switch");
    expect(buildSlug("switch")("Pokémon Sword")).to.be.eq("pokemon-sword-switch");
    expect(buildSlug("switch")("Bard's Gold - Nintendo Switch Edition")).to.be.eq(
      "bards-gold-nintendo-switch-edition-switch",
    );
    expect(buildSlug("switch")("Dark Quest 2")).to.be.eq("dark-quest-2-switch");
    expect(buildSlug("switch")("Phoenix Wright: Ace Attorney Trilogy")).to.be.eq(
      "phoenix-wright-ace-attorney-trilogy-switch",
    );
    expect(buildSlug("switch")("BombFall")).to.be.eq("bombfall-switch");
    expect(buildSlug("switch")("GALAK-Z: The Void: Deluxe Edition")).to.be.eq("galak-z-the-void-deluxe-edition-switch");
    expect(buildSlug("switch")("12 is Better Than 6")).to.be.eq("12-is-better-than-6-switch");
    expect(buildSlug("switch")("Unknown Fate")).to.be.eq("unknown-fate-switch");
    expect(buildSlug("switch")("Resident Evil")).to.be.eq("resident-evil-switch");
    expect(buildSlug("switch")("Resident Evil 0")).to.be.eq("resident-evil-0-switch");
    expect(buildSlug("switch")("Resident Evil 4")).to.be.eq("resident-evil-4-switch");
    expect(buildSlug("switch")("ACA NEOGEO THE ULTIMATE 11: SNK FOOTBALL CHAMPIONSHIP")).to.be.eq(
      "aca-neogeo-the-ultimate-11-snk-football-championship-switch",
    );
    expect(buildSlug("switch")("izneo")).to.be.eq("izneo-switch");
    expect(buildSlug("switch")("Queen’s Quest 2: Stories of Forgotten Past")).to.be.eq(
      "queen-s-quest-2-stories-of-forgotten-past-switch",
    );
    expect(buildSlug("switch")("Space War Arena")).to.be.eq("space-war-arena-switch");
    expect(buildSlug("switch")("World Tree Marché")).to.be.eq("world-tree-marche-switch");
    expect(buildSlug("switch")("Duck Game")).to.be.eq("duck-game-switch");
    expect(buildSlug("switch")("Monument Builders Rushmore")).to.be.eq("monument-builders-rushmore-switch");
    expect(buildSlug("switch")("Unravel Two")).to.be.eq("unravel-two-switch");
    expect(buildSlug("switch")("Hard West")).to.be.eq("hard-west-switch");
    expect(buildSlug("switch")("Trüberbrook")).to.be.eq("truberbrook-switch");
    expect(buildSlug("switch")("Sushi Time!")).to.be.eq("sushi-time-switch");
    expect(buildSlug("switch")("Moero Chronicle™ Hyper")).to.be.eq("moero-chronicle-hyper-switch");
    expect(buildSlug("switch")("Fate/EXTELLA LINK")).to.be.eq("fate-extella-link-switch");
    expect(buildSlug("switch")("Blood Waves")).to.be.eq("blood-waves-switch");
    expect(buildSlug("switch")("Paperbound Brawlers")).to.be.eq("paperbound-brawlers-switch");
    expect(buildSlug("switch")("The Caligula Effect: Overdose")).to.be.eq("the-caligula-effect-overdose-switch");
    expect(buildSlug("switch")("Beat Cop")).to.be.eq("beat-cop-switch");
    expect(buildSlug("switch")("Mahjong Stories: Vampire Romance")).to.be.eq("mahjong-stories-vampire-romance-switch");
    expect(buildSlug("switch")("Motorsport Manager for Nintendo Switch™")).to.be.eq(
      "motorsport-manager-for-nintendo-switch",
    );
    expect(buildSlug("switch")("She Remembered Caterpillars")).to.be.eq("she-remembered-caterpillars-switch");
    expect(buildSlug("switch")("Homo Machina")).to.be.eq("homo-machina-switch");
    expect(buildSlug("switch")("Twist & Match")).to.be.eq("twist-and-match-switch");
    expect(buildSlug("switch")("Azure Saga: Pathfinder DELUXE Edition")).to.be.eq(
      "azure-saga-pathfinder-deluxe-edition-switch",
    );
    expect(buildSlug("switch")("Arcade Archives IKARI WARRIORS")).to.be.eq("arcade-archives-ikari-warriors-switch");
    expect(buildSlug("switch")("Freecell Solitaire")).to.be.eq("freecell-solitaire-switch");
    expect(buildSlug("switch")("Unit 4")).to.be.eq("unit-4-switch");
    expect(buildSlug("switch")("Dusty Raging Fist")).to.be.eq("dusty-raging-fist-switch");
    expect(buildSlug("switch")("Quest for the Golden Duck")).to.be.eq("quest-for-the-golden-duck-switch");
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Joe and Mac Returns")).to.be.eq(
      "johnny-turbos-arcade-joe-and-mac-returns-switch",
    );
    expect(buildSlug("switch")("Little Shopping")).to.be.eq("little-shopping-switch");
    expect(buildSlug("switch")("Golf Peaks")).to.be.eq("golf-peaks-switch");
    expect(buildSlug("switch")("Bonds of the Skies")).to.be.eq("bonds-of-the-skies-switch");
    expect(buildSlug("switch")("The Red Strings Club")).to.be.eq("the-red-strings-club-switch");
    expect(buildSlug("switch")("Dungeons & Aliens")).to.be.eq("dungeons-and-aliens-switch");
    expect(buildSlug("switch")("Claybook")).to.be.eq("claybook-switch");
    expect(buildSlug("switch")("Bargain Hunter")).to.be.eq("bargain-hunter-switch");
    expect(buildSlug("switch")("Alien Cruise")).to.be.eq("alien-cruise-switch");
    expect(buildSlug("switch")("Neon Caves")).to.be.eq("neon-caves-switch");
    expect(buildSlug("switch")("My Jurassic Farm 2018")).to.be.eq("my-jurassic-farm-2018-switch");
    expect(buildSlug("switch")("Windscape")).to.be.eq("windscape-switch");
    expect(buildSlug("switch")("Apocryph: an old-school shooter")).to.be.eq("apocryph-an-old-school-shooter-switch");
    expect(buildSlug("switch")("Bad Dream: Fever")).to.be.eq("bad-dream-fever-switch");
    expect(buildSlug("switch")("Teddy The Wanderer: Mountain Hike")).to.be.eq(
      "teddy-the-wanderer-mountain-hike-switch",
    );
    expect(buildSlug("switch")("Our World Is Ended.")).to.be.eq("our-world-is-ended-switch");
    expect(buildSlug("switch")("The Mystery of Woolley Mountain")).to.be.eq("the-mystery-of-woolley-mountain-switch");
    expect(buildSlug("switch")("Assault On Metaltron")).to.be.eq("assault-on-metaltron-switch");
    expect(buildSlug("switch")("SpellKeeper")).to.be.eq("spellkeeper-switch");
    expect(buildSlug("switch")("SYMMETRY")).to.be.eq("symmetry-switch");
    expect(buildSlug("switch")("Not Not - A Brain Buster")).to.be.eq("not-not-a-brain-buster-switch");
    expect(buildSlug("switch")("Dragon's Dogma: Dark Arisen")).to.be.eq("dragons-dogma-dark-arisen-switch");
    expect(buildSlug("switch")("Elevator...to the Moon! Turbo Champion's Edition")).to.be.eq(
      "elevatorto-the-moon-turbo-champions-edition-switch",
    );
    expect(buildSlug("switch")("RICO")).to.be.eq("rico-switch");
    expect(buildSlug("switch")("Hook")).to.be.eq("hook-switch");
    expect(buildSlug("switch")("Arcade Archives ELEVATOR ACTION")).to.be.eq("arcade-archives-elevator-action-switch");
    expect(buildSlug("switch")("Lyrica")).to.be.eq("lyrica-switch");
    expect(buildSlug("switch")("Grand Prix Story")).to.be.eq("grand-prix-story-switch");
    expect(buildSlug("switch")("Reptilian Rebellion")).to.be.eq("reptilian-rebellion-switch");
    expect(buildSlug("switch")("Witch & Hero")).to.be.eq("witch-and-hero-switch");
    expect(buildSlug("switch")("Super Phantom Cat: Remake")).to.be.eq("super-phantom-cat-remake-switch");
    expect(buildSlug("switch")("StarDrone")).to.be.eq("stardrone-switch");
    expect(buildSlug("switch")("Block-a-Pix Deluxe")).to.be.eq("block-a-pix-deluxe-switch");
    expect(buildSlug("switch")("Ultrawings")).to.be.eq("ultrawings-switch");
    expect(buildSlug("switch")("Air Conflicts: Pacific Carriers")).to.be.eq("air-conflicts-pacific-carriers-switch");
    expect(buildSlug("switch")("Air Conflicts: Secret Wars")).to.be.eq("air-conflicts-secret-wars-switch");
    expect(buildSlug("switch")("Inventioneers")).to.be.eq("inventioneers-switch");
    expect(buildSlug("switch")("Vaporum")).to.be.eq("vaporum-switch");
    expect(buildSlug("switch")("Croixleur Sigma")).to.be.eq("croixleur-sigma-switch");
    expect(buildSlug("switch")("Turok")).to.be.eq("turok-switch");
    expect(buildSlug("switch")("Super Kickers League")).to.be.eq("super-kickers-league-switch");
    expect(buildSlug("switch")("Peasant Knight")).to.be.eq("peasant-knight-switch");
    expect(buildSlug("switch")("Blaster Master Zero 2")).to.be.eq("blaster-master-zero-2-switch");
    expect(buildSlug("switch")("Nuclear Throne")).to.be.eq("nuclear-throne-switch");
    expect(buildSlug("switch")("Cuphead")).to.be.eq("cuphead-switch");
    expect(buildSlug("switch")("Katana ZERO")).to.be.eq("katana-zero-switch");
    expect(buildSlug("switch")("My Time at Portia")).to.be.eq("my-time-at-portia-switch");
    expect(buildSlug("switch")("My Friend Pedro")).to.be.eq("my-friend-pedro-switch");
    expect(buildSlug("switch")("Stranger Things 3: The Game")).to.be.eq("stranger-things-3-the-game-switch");
    expect(buildSlug("switch")("Cadence of Hyrule – Crypt of the NecroDancer Featuring The Legend of Zelda")).to.be.eq(
      "cadence-of-hyrule-crypt-of-the-necrodancer-featuring-the-legend-of-zelda-switch",
    );
    expect(buildSlug("switch")("OMG Zombies!")).to.be.eq("omg-zombies-switch");
    expect(buildSlug("switch")("Gems of War")).to.be.eq("gems-of-war-switch");
    expect(buildSlug("switch")("Impossible Mission")).to.be.eq("impossible-mission-switch");
    expect(buildSlug("switch")("Pitfall Planet")).to.be.eq("pitfall-planet-switch");
    expect(buildSlug("switch")("JUNK PLANET")).to.be.eq("junk-planet-switch");
    expect(buildSlug("switch")("Switch 'N' Shoot")).to.be.eq("switch-n-shoot-switch");
    expect(buildSlug("switch")("Undead's Building")).to.be.eq("undeads-building-switch");
    expect(buildSlug("switch")("ACA NEOGEO BASEBALL STARS 2")).to.be.eq("aca-neogeo-baseball-stars-2-switch");
    expect(buildSlug("switch")("Among the Sleep - Enhanced Edition")).to.be.eq(
      "among-the-sleep-enhanced-edition-switch",
    );
    expect(buildSlug("switch")("James Pond Codename: RoboCod")).to.be.eq("james-pond-codename-robocod-switch");
    expect(buildSlug("switch")("Snow Battle Princess Sayuki")).to.be.eq("snow-battle-princess-sayuki-switch");
    expect(buildSlug("switch")("Event Horizon")).to.be.eq("event-horizon-switch");
    expect(buildSlug("switch")("Street Basketball")).to.be.eq("street-basketball-switch");
    expect(buildSlug("switch")("Monster Slayers")).to.be.eq("monster-slayers-switch");
    expect(buildSlug("switch")("GOKEN")).to.be.eq("goken-switch");
    expect(buildSlug("switch")("SEGA AGES Gain Ground")).to.be.eq("sega-ages-gain-ground-switch");
    expect(buildSlug("switch")("SEGA AGES Alex Kidd in Miracle World")).to.be.eq(
      "sega-ages-alex-kidd-in-miracle-world-switch",
    );
    expect(buildSlug("switch")("Mortal Kombat 11")).to.be.eq("mortal-kombat-11-switch");
    expect(buildSlug("switch")("President F.net")).to.be.eq("president-fnet-switch");
    expect(buildSlug("switch")("UNI")).to.be.eq("uni-switch");
    expect(buildSlug("switch")("Warparty")).to.be.eq("warparty-switch");
    expect(buildSlug("switch")("The Princess Guide")).to.be.eq("the-princess-guide-switch");
    expect(buildSlug("switch")("GODS Remastered")).to.be.eq("gods-remastered-switch");
    expect(buildSlug("switch")("METAGAL")).to.be.eq("metagal-switch");
    expect(buildSlug("switch")("Cel Damage HD")).to.be.eq("cel-damage-hd-switch");
    expect(buildSlug("switch")("Back to Bed")).to.be.eq("back-to-bed-switch");
    expect(buildSlug("switch")("Nelke & the Legendary Alchemists ~Ateliers of the New World~")).to.be.eq(
      "nelke-and-the-legendary-alchemists-ateliers-of-the-new-world-switch",
    );
    expect(buildSlug("switch")("Royal Adviser")).to.be.eq("royal-adviser-switch");
    expect(buildSlug("switch")("Quadle")).to.be.eq("quadle-switch");
    expect(buildSlug("switch")("Silence")).to.be.eq("silence-switch");
    expect(buildSlug("switch")("Cook, Serve, Delicious! 2!!")).to.be.eq("cook-serve-delicious-2-switch");
    expect(buildSlug("switch")("Power Rangers: Battle for the Grid")).to.be.eq(
      "power-rangers-battle-for-the-grid-switch",
    );
    expect(buildSlug("switch")("SMASHING THE BATTLE")).to.be.eq("smashing-the-battle-switch");
    expect(buildSlug("switch")("War Theatre")).to.be.eq("war-theatre-switch");
    expect(buildSlug("switch")("Yet Another Zombie Defense HD")).to.be.eq("yet-another-zombie-defense-hd-switch");
    expect(buildSlug("switch")("Bow to Blood: Last Captain Standing")).to.be.eq(
      "bow-to-blood-last-captain-standing-switch",
    );
    expect(buildSlug("switch")("Moai VI: Unexpected Guests")).to.be.eq("moai-vi-unexpected-guests-switch");
    expect(buildSlug("switch")("Bot Vice")).to.be.eq("bot-vice-switch");
    expect(buildSlug("switch")("Airfield Mania")).to.be.eq("airfield-mania-switch");
    expect(buildSlug("switch")("Zombie Scrapper")).to.be.eq("zombie-scrapper-switch");
    expect(buildSlug("switch")("Hob: The Definitive Edition")).to.be.eq("hob-the-definitive-edition-switch");
    expect(buildSlug("switch")("Arcade Archives Armed F")).to.be.eq("arcade-archives-armed-f-switch");
    expect(buildSlug("switch")("GIGA WRECKER ALT.")).to.be.eq("giga-wrecker-alt-switch");
    expect(buildSlug("switch")("Shadowgate")).to.be.eq("shadowgate-switch");
    expect(buildSlug("switch")("ASCENDANCE")).to.be.eq("ascendance-switch");
    expect(buildSlug("switch")("Sephirothic Stories")).to.be.eq("sephirothic-stories-switch");
    expect(buildSlug("switch")("MUSYNX")).to.be.eq("musynx-switch");
    expect(buildSlug("switch")("The friends of Ringo Ishikawa")).to.be.eq("the-friends-of-ringo-ishikawa-switch");
    expect(buildSlug("switch")("Pressure Overdrive")).to.be.eq("pressure-overdrive-switch");
    expect(buildSlug("switch")("Godly Corp")).to.be.eq("godly-corp-switch");
    expect(buildSlug("switch")("Circuits")).to.be.eq("circuits-switch");
    expect(buildSlug("switch")("Shadow Blade: Reload")).to.be.eq("shadow-blade-reload-switch");
    expect(buildSlug("switch")("Istanbul: Digital Edition")).to.be.eq("istanbul-digital-edition-switch");
    expect(buildSlug("switch")("Way of the Passive Fist")).to.be.eq("way-of-the-passive-fist-switch");
    expect(buildSlug("switch")("Modern Tales: Age of Invention")).to.be.eq("modern-tales-age-of-invention-switch");
    expect(buildSlug("switch")("Mechstermination Force")).to.be.eq("mechstermination-force-switch");
    expect(buildSlug("switch")("12 Labours of Hercules")).to.be.eq("12-labours-of-hercules-switch");
    expect(buildSlug("switch")("Safety First!")).to.be.eq("safety-first-switch");
    expect(buildSlug("switch")("Windstorm - Ari's Arrival")).to.be.eq("windstorm-aris-arrival-switch");
    expect(buildSlug("switch")("Moto Rush GT")).to.be.eq("moto-rush-gt-switch");
    expect(buildSlug("switch")("Box Align")).to.be.eq("box-align-switch");
    expect(buildSlug("switch")("Super Star Path")).to.be.eq("super-star-path-switch");
    expect(buildSlug("switch")("UglyDolls: An Imperfect Adventure")).to.be.eq(
      "uglydolls-an-imperfect-adventure-switch",
    );
    expect(buildSlug("switch")("Minefield")).to.be.eq("minefield-switch");
    expect(buildSlug("switch")("OVERWHELM")).to.be.eq("overwhelm-switch");
    expect(buildSlug("switch")("Darksiders Warmastered Edition")).to.be.eq("darksiders-warmastered-edition-switch");
    expect(buildSlug("switch")("Reigns: Game of Thrones")).to.be.eq("reigns-game-of-thrones-switch");
    expect(buildSlug("switch")("Doggie Ninja The Golden Mission")).to.be.eq("doggie-ninja-the-golden-mission-switch");
    expect(buildSlug("switch")("Jungle Z")).to.be.eq("jungle-z-switch");
    expect(buildSlug("switch")("Death Coming")).to.be.eq("death-coming-switch");
    expect(buildSlug("switch")("Feather")).to.be.eq("feather-switch");
    expect(buildSlug("switch")("Rolling Sky")).to.be.eq("rolling-sky-switch");
    expect(buildSlug("switch")("Path to Mnemosyne")).to.be.eq("path-to-mnemosyne-switch");
    expect(buildSlug("switch")("Vandals")).to.be.eq("vandals-switch");
    expect(buildSlug("switch")("Xtreme Club Racing")).to.be.eq("xtreme-club-racing-switch");
    expect(buildSlug("switch")("Type:Rider")).to.be.eq("type-rider-switch");
    expect(buildSlug("switch")("Active Soccer 2019")).to.be.eq("active-soccer-2019-switch");
    expect(buildSlug("switch")("SUPER DRAGON BALL HEROES WORLD MISSION")).to.be.eq(
      "super-dragon-ball-heroes-world-mission-switch",
    );
    expect(buildSlug("switch")("Arcade Archives DONKEY KONG 3")).to.be.eq("arcade-archives-donkey-kong-3-switch");
    expect(buildSlug("switch")("SlabWell: The Quest For Kaktun's Alpaca")).to.be.eq(
      "slabwell-the-quest-for-kaktuns-alpaca-switch",
    );
    expect(buildSlug("switch")("The Demon Crystal")).to.be.eq("the-demon-crystal-switch");
    expect(buildSlug("switch")("Hellblade: Senua's Sacrifice")).to.be.eq("hellblade-senuas-sacrifice-switch");
    expect(buildSlug("switch")("Beyond Enemy Lines: Covert Operations")).to.be.eq(
      "beyond-enemy-lines-covert-operations-switch",
    );
    expect(buildSlug("switch")("Super Weekend Mode")).to.be.eq("super-weekend-mode-switch");
    expect(buildSlug("switch")("Out There: Ω The Alliance")).to.be.eq("out-there-the-alliance-switch");
    expect(buildSlug("switch")("Black Paradox")).to.be.eq("black-paradox-switch");
    expect(buildSlug("switch")("Tanks Meet Zombies")).to.be.eq("tanks-meet-zombies-switch");
    expect(buildSlug("switch")("Sniper Elite V2 Remastered")).to.be.eq("sniper-elite-v2-remastered-switch");
    expect(buildSlug("switch")("VA-11 Hall-A: Cyberpunk Bartender Action")).to.be.eq(
      "va-11-hall-a-cyberpunk-bartender-action-switch",
    );
    expect(buildSlug("switch")("Table Top Racing: World Tour - Nitro Edition")).to.be.eq(
      "table-top-racing-world-tour-nitro-edition-switch",
    );
    expect(buildSlug("switch")("Kotodama: The 7 Mysteries of Fujisawa")).to.be.eq(
      "kotodama-the-7-mysteries-of-fujisawa-switch",
    );
    expect(buildSlug("switch")("Deponia")).to.be.eq("deponia-switch");
    expect(buildSlug("switch")("Greco’s Hall of Kanji　Learn Japanese< Beginner >")).to.be.eq(
      "greco-s-hall-of-kanji-learn-japanese-beginner-switch",
    );
    expect(buildSlug("switch")("Cafeteria Nipponica")).to.be.eq("cafeteria-nipponica-switch");
    expect(buildSlug("switch")("DayD: Through Time")).to.be.eq("dayd-through-time-switch");
    expect(buildSlug("switch")("The Padre")).to.be.eq("the-padre-switch");
    expect(buildSlug("switch")("Slime Tactics")).to.be.eq("slime-tactics-switch");
    expect(buildSlug("switch")("Arcade Archives TIME PILOT")).to.be.eq("arcade-archives-time-pilot-switch");
    expect(buildSlug("switch")("Hell is Other Demons")).to.be.eq("hell-is-other-demons-switch");
    expect(buildSlug("switch")("Sudoku Relax")).to.be.eq("sudoku-relax-switch");
    expect(buildSlug("switch")("Lost King's Lullaby")).to.be.eq("lost-kings-lullaby-switch");
    expect(buildSlug("switch")("Warhammer Age of Sigmar: Champions")).to.be.eq(
      "warhammer-age-of-sigmar-champions-switch",
    );
    expect(buildSlug("switch")("the Knight & the Dragon")).to.be.eq("the-knight-and-the-dragon-switch");
    expect(buildSlug("switch")("You Died but a Necromancer revived you")).to.be.eq(
      "you-died-but-a-necromancer-revived-you-switch",
    );
    expect(buildSlug("switch")("Dawn of Survivors")).to.be.eq("dawn-of-survivors-switch");
    expect(buildSlug("switch")("Evil Defenders")).to.be.eq("evil-defenders-switch");
    expect(buildSlug("switch")("SAINTS ROW®: THE THIRD™ - THE FULL PACKAGE")).to.be.eq(
      "saints-row-the-third-the-full-package-switch",
    );
    expect(buildSlug("switch")("GoatPunks")).to.be.eq("goatpunks-switch");
    expect(buildSlug("switch")("Dragon Pinball")).to.be.eq("dragon-pinball-switch");
    expect(buildSlug("switch")("Risky Rescue")).to.be.eq("risky-rescue-switch");
    expect(buildSlug("switch")("Rogue Bit")).to.be.eq("rogue-bit-switch");
    expect(buildSlug("switch")("Masquerada: Songs and Shadows")).to.be.eq("masquerada-songs-and-shadows-switch");
    expect(buildSlug("switch")("ACA NEOGEO SAMURAI SHODOWN V SPECIAL")).to.be.eq(
      "aca-neogeo-samurai-shodown-v-special-switch",
    );
    expect(buildSlug("switch")("Arcade Classics Anniversary Collection")).to.be.eq(
      "arcade-classics-anniversary-collection-switch",
    );
    expect(buildSlug("switch")("Construction Machines Simulator")).to.be.eq("construction-machines-simulator-switch");
    expect(buildSlug("switch")("Croc's World 2")).to.be.eq("crocs-world-2-switch");
    expect(buildSlug("switch")("Everybody, Hearts!")).to.be.eq("everybody-hearts-switch");
    expect(buildSlug("switch")("Iron Snout")).to.be.eq("iron-snout-switch");
    expect(buildSlug("switch")("Secrets of Magic - The Book of Spells")).to.be.eq(
      "secrets-of-magic-the-book-of-spells-switch",
    );
    expect(buildSlug("switch")("Witch Thief")).to.be.eq("witch-thief-switch");
    expect(buildSlug("switch")("Crashbots")).to.be.eq("crashbots-switch");
    expect(buildSlug("switch")("Venture Kid")).to.be.eq("venture-kid-switch");
    expect(buildSlug("switch")("Crystal Crisis")).to.be.eq("crystal-crisis-switch");
    expect(buildSlug("switch")("Cytus α")).to.be.eq("cytus-switch");
    expect(buildSlug("switch")("Dig Dog")).to.be.eq("dig-dog-switch");
    expect(buildSlug("switch")("PICROSS S3")).to.be.eq("picross-s3-switch");
    expect(buildSlug("switch")("Strike Suit Zero: Director's Cut")).to.be.eq("strike-suit-zero-directors-cut-switch");
    expect(buildSlug("switch")("Joe Jump Impossible Quest")).to.be.eq("joe-jump-impossible-quest-switch");
    expect(buildSlug("switch")("AngerForce: Reloaded for Nintendo Switch")).to.be.eq(
      "angerforce-reloaded-for-nintendo-switch",
    );
    expect(buildSlug("switch")("Theatre Tales")).to.be.eq("theatre-tales-switch");
    expect(buildSlug("switch")("Robox")).to.be.eq("robox-switch");
    expect(buildSlug("switch")("Gym Hero - Idle Fitness Tycoon")).to.be.eq("gym-hero-idle-fitness-tycoon-switch");
    expect(buildSlug("switch")("Shadows of Adam")).to.be.eq("shadows-of-adam-switch");
    expect(buildSlug("switch")("HexaGravity")).to.be.eq("hexagravity-switch");
    expect(buildSlug("switch")("Ding Dong XL")).to.be.eq("ding-dong-xl-switch");
    expect(buildSlug("switch")("Gyro Boss DX")).to.be.eq("gyro-boss-dx-switch");
    expect(buildSlug("switch")("Zeroptian Invasion")).to.be.eq("zeroptian-invasion-switch");
    expect(buildSlug("switch")("Lapis x Labyrinth")).to.be.eq("lapis-x-labyrinth-switch");
    expect(buildSlug("switch")("Shalnor Legends: Sacred Lands")).to.be.eq("shalnor-legends-sacred-lands-switch");
    expect(buildSlug("switch")("Frane: Dragons' Odyssey")).to.be.eq("frane-dragons-odyssey-switch");
    expect(buildSlug("switch")("Super Cane Magic ZERO")).to.be.eq("super-cane-magic-zero-switch");
    expect(buildSlug("switch")("Rollin' Eggz")).to.be.eq("rollin-eggz-switch");
    expect(buildSlug("switch")("The Little Acre")).to.be.eq("the-little-acre-switch");
    expect(buildSlug("switch")("Panty Party")).to.be.eq("panty-party-switch");
    expect(buildSlug("switch")("Isoland")).to.be.eq("isoland-switch");
    expect(buildSlug("switch")("Isoland 2 - Ashes of Time")).to.be.eq("isoland-2-ashes-of-time-switch");
    expect(buildSlug("switch")("The Swords of Ditto: Mormo's Curse")).to.be.eq(
      "the-swords-of-ditto-mormos-curse-switch",
    );
    expect(buildSlug("switch")("Defend your Castle")).to.be.eq("defend-your-castle-switch");
    expect(buildSlug("switch")("TerraTech")).to.be.eq("terratech-switch");
    expect(buildSlug("switch")("For The King")).to.be.eq("for-the-king-switch");
    expect(buildSlug("switch")("39 Days to Mars")).to.be.eq("39-days-to-mars-switch");
    expect(buildSlug("switch")("Blazing Beaks")).to.be.eq("blazing-beaks-switch");
    expect(buildSlug("switch")("Arcade Archives PSYCHO SOLDIER")).to.be.eq("arcade-archives-psycho-soldier-switch");
    expect(buildSlug("switch")("Monster Puzzle")).to.be.eq("monster-puzzle-switch");
    expect(buildSlug("switch")("Super Star Blast")).to.be.eq("super-star-blast-switch");
    expect(buildSlug("switch")("Puyo Puyo Champions")).to.be.eq("puyo-puyo-champions-switch");
    expect(buildSlug("switch")("Arcade Archives TERRA FORCE")).to.be.eq("arcade-archives-terra-force-switch");
    expect(buildSlug("switch")("Puzzle Herder")).to.be.eq("puzzle-herder-switch");
    expect(buildSlug("switch")("FINAL FANTASY X/X-2 HD Remaster")).to.be.eq("final-fantasy-x-x-2-hd-remaster-switch");
    expect(buildSlug("switch")("Redout")).to.be.eq("redout-switch");
    expect(buildSlug("switch")("Hotel Dracula")).to.be.eq("hotel-dracula-switch");
    expect(buildSlug("switch")("Darkest Hunters")).to.be.eq("darkest-hunters-switch");
    expect(buildSlug("switch")("Super Blood Hockey")).to.be.eq("super-blood-hockey-switch");
    expect(buildSlug("switch")("Bird Game +")).to.be.eq("bird-game-switch");
    expect(buildSlug("switch")("Preventive Strike")).to.be.eq("preventive-strike-switch");
    expect(buildSlug("switch")("Lost Artifacts: Soulstone")).to.be.eq("lost-artifacts-soulstone-switch");
    expect(buildSlug("switch")("Hellmut: The Badass from Hell")).to.be.eq("hellmut-the-badass-from-hell-switch");
    expect(buildSlug("switch")("European Conqueror X")).to.be.eq("european-conqueror-x-switch");
    expect(buildSlug("switch")("Reverse Crawl")).to.be.eq("reverse-crawl-switch");
    expect(buildSlug("switch")("FUN! FUN! Animal Park")).to.be.eq("fun-fun-animal-park-switch");
    expect(buildSlug("switch")("Meow Motors")).to.be.eq("meow-motors-switch");
    expect(buildSlug("switch")("Undead Horde")).to.be.eq("undead-horde-switch");
    expect(buildSlug("switch")("MachiKnights -Blood bagos-")).to.be.eq("machiknights-blood-bagos-switch");
    expect(buildSlug("switch")("INFERNO CLIMBER: REBORN")).to.be.eq("inferno-climber-reborn-switch");
    expect(buildSlug("switch")("My Big Sister")).to.be.eq("my-big-sister-switch");
    expect(buildSlug("switch")("Akane")).to.be.eq("akane-switch");
    expect(buildSlug("switch")("WONDER BOY RETURNS REMIX")).to.be.eq("wonder-boy-returns-remix-switch");
    expect(buildSlug("switch")("Car Mechanic Manager")).to.be.eq("car-mechanic-manager-switch");
    expect(buildSlug("switch")("Darkwood")).to.be.eq("darkwood-switch");
    expect(buildSlug("switch")("OTTTD: Over The Top Tower Defence")).to.be.eq(
      "otttd-over-the-top-tower-defence-switch",
    );
    expect(buildSlug("switch")("Car Trader")).to.be.eq("car-trader-switch");
    expect(buildSlug("switch")("Animated Jigsaws Collection")).to.be.eq("animated-jigsaws-collection-switch");
    expect(buildSlug("switch")("Devious Dungeon 2")).to.be.eq("devious-dungeon-2-switch");
    expect(buildSlug("switch")("Atelier Lulua ~The Scion of Arland~")).to.be.eq(
      "atelier-lulua-the-scion-of-arland-switch",
    );
    expect(buildSlug("switch")("Dragon Snakes")).to.be.eq("dragon-snakes-switch");
    expect(buildSlug("switch")("Gunlord X")).to.be.eq("gunlord-x-switch");
    expect(buildSlug("switch")("Rock of Ages 2: Bigger & Boulder™")).to.be.eq(
      "rock-of-ages-2-bigger-and-boulder-switch",
    );
    expect(buildSlug("switch")("Octogeddon")).to.be.eq("octogeddon-switch");
    expect(buildSlug("switch")("HEROINE ANTHEM ZERO episode 1")).to.be.eq("heroine-anthem-zero-episode-1-switch");
    expect(buildSlug("switch")("Arcade Archives NINJA GAIDEN")).to.be.eq("arcade-archives-ninja-gaiden-switch");
    expect(buildSlug("switch")("Pocket League Story")).to.be.eq("pocket-league-story-switch");
    expect(buildSlug("switch")("Star Sky")).to.be.eq("star-sky-switch");
    expect(buildSlug("switch")("Thief Simulator")).to.be.eq("thief-simulator-switch");
    expect(buildSlug("switch")("Project Nimbus: Complete Edition")).to.be.eq("project-nimbus-complete-edition-switch");
    expect(buildSlug("switch")("American Fugitive")).to.be.eq("american-fugitive-switch");
    expect(buildSlug("switch")("KORAL")).to.be.eq("koral-switch");
    expect(buildSlug("switch")("Chicken Rider")).to.be.eq("chicken-rider-switch");
    expect(buildSlug("switch")("We. The Revolution")).to.be.eq("we-the-revolution-switch");
    expect(buildSlug("switch")("Leisure Suit Larry - Wet Dreams Don't Dry")).to.be.eq(
      "leisure-suit-larry-wet-dreams-dont-dry-switch",
    );
    expect(buildSlug("switch")("Back in 1995")).to.be.eq("back-in-1995-switch");
    expect(buildSlug("switch")("Blades of Time")).to.be.eq("blades-of-time-switch");
    expect(buildSlug("switch")("Skelly Selest")).to.be.eq("skelly-selest-switch");
    expect(buildSlug("switch")("Arcade Archives Buta san")).to.be.eq("arcade-archives-buta-san-switch");
    expect(buildSlug("switch")("Castlevania Anniversary Collection")).to.be.eq(
      "castlevania-anniversary-collection-switch",
    );
    expect(buildSlug("switch")("Light Tracer")).to.be.eq("light-tracer-switch");
    expect(buildSlug("switch")("Super Life of Pixel")).to.be.eq("super-life-of-pixel-switch");
    expect(buildSlug("switch")("Your Toy")).to.be.eq("your-toy-switch");
    expect(buildSlug("switch")("GUILTY GEAR")).to.be.eq("guilty-gear-switch");
    expect(buildSlug("switch")("GUILTY GEAR XX ACCENT CORE PLUS R")).to.be.eq(
      "guilty-gear-xx-accent-core-plus-r-switch",
    );
    expect(buildSlug("switch")("The Last Door - Complete Edition")).to.be.eq("the-last-door-complete-edition-switch");
    expect(buildSlug("switch")("Super Mario Maker 2")).to.be.eq("super-mario-maker-2-switch");
    expect(buildSlug("switch")("Let's Go Nuts")).to.be.eq("lets-go-nuts-switch");
    expect(buildSlug("switch")("Tales From Space: Mutant Blobs Attack")).to.be.eq(
      "tales-from-space-mutant-blobs-attack-switch",
    );
    expect(buildSlug("switch")("Ages of Mages: The Last Keeper")).to.be.eq("ages-of-mages-the-last-keeper-switch");
    expect(buildSlug("switch")("Townsmen - A Kingdom Rebuilt")).to.be.eq("townsmen-a-kingdom-rebuilt-switch");
    expect(buildSlug("switch")("My Lovely Daughter")).to.be.eq("my-lovely-daughter-switch");
    expect(buildSlug("switch")("World Soccer")).to.be.eq("world-soccer-switch");
    expect(buildSlug("switch")("Crypt of the Serpent King")).to.be.eq("crypt-of-the-serpent-king-switch");
    expect(buildSlug("switch")("Refunct")).to.be.eq("refunct-switch");
    expect(buildSlug("switch")("Anarcute")).to.be.eq("anarcute-switch");
    expect(buildSlug("switch")("Chime Sharp")).to.be.eq("chime-sharp-switch");
    expect(buildSlug("switch")("Warlock's Tower")).to.be.eq("warlocks-tower-switch");
    expect(buildSlug("switch")("Team Sonic Racing™")).to.be.eq("team-sonic-racing-switch");
    expect(buildSlug("switch")("Yu-Gi-Oh! Legacy of the Duelist: Link Evolution!")).to.be.eq(
      "yu-gi-oh-legacy-of-the-duelist-link-evolution-switch",
    );
    expect(buildSlug("switch")("Battle Worlds: Kronos")).to.be.eq("battle-worlds-kronos-switch");
    expect(buildSlug("switch")("Super Arcade Soccer")).to.be.eq("super-arcade-soccer-switch");
    expect(buildSlug("switch")("Brothers: A Tale of Two Sons")).to.be.eq("brothers-a-tale-of-two-sons-switch");
    expect(buildSlug("switch")("Little Friends: Dogs & Cats")).to.be.eq("little-friends-dogs-and-cats-switch");
    expect(buildSlug("switch")("Furwind")).to.be.eq("furwind-switch");
    expect(buildSlug("switch")("Happy Words")).to.be.eq("happy-words-switch");
    expect(buildSlug("switch")("Watermelon Party")).to.be.eq("watermelon-party-switch");
    expect(buildSlug("switch")("Monkey Business")).to.be.eq("monkey-business-switch");
    expect(buildSlug("switch")("Arcade Archives IMAGE FIGHT")).to.be.eq("arcade-archives-image-fight-switch");
    expect(buildSlug("switch")("Alternate Jake Hunter: DAEDALUS The Awakening of Golden Jazz")).to.be.eq(
      "alternate-jake-hunter-daedalus-the-awakening-of-golden-jazz-switch",
    );
    expect(buildSlug("switch")("Bloodstained: Ritual of the Night")).to.be.eq(
      "bloodstained-ritual-of-the-night-switch",
    );
    expect(buildSlug("switch")("Ragtag Adventurers")).to.be.eq("ragtag-adventurers-switch");
    expect(buildSlug("switch")("GoFishing 3D")).to.be.eq("gofishing-3d-switch");
    expect(buildSlug("switch")("MotoGP™19")).to.be.eq("motogp-19-switch");
    expect(buildSlug("switch")("TT Isle of Man - Ride on the Edge")).to.be.eq("tt-isle-of-man-ride-on-the-edge-switch");
    expect(buildSlug("switch")("Spell Casting: Purrfectly Portable Edition")).to.be.eq(
      "spell-casting-purrfectly-portable-edition-switch",
    );
    expect(buildSlug("switch")("30-in-1 Game Collection: Volume 2")).to.be.eq(
      "30-in-1-game-collection-volume-2-switch",
    );
    expect(buildSlug("switch")("Word Wheel by POWGI")).to.be.eq("word-wheel-by-powgi-switch");
    expect(buildSlug("switch")("WORLDEND SYNDROME")).to.be.eq("worldend-syndrome-switch");
    expect(buildSlug("switch")("Dyna Bomb")).to.be.eq("dyna-bomb-switch");
    expect(buildSlug("switch")("Vectronom")).to.be.eq("vectronom-switch");
    expect(buildSlug("switch")("SWORD ART ONLINE: Hollow Realization Deluxe Edition")).to.be.eq(
      "sword-art-online-hollow-realization-deluxe-edition-switch",
    );
    expect(buildSlug("switch")("Fort Boyard")).to.be.eq("fort-boyard-switch");
    expect(buildSlug("switch")("Super Tennis Blast")).to.be.eq("super-tennis-blast-switch");
    expect(buildSlug("switch")("Realm Royale")).to.be.eq("realm-royale-switch");
    expect(buildSlug("switch")("Red Siren: Space Defense")).to.be.eq("red-siren-space-defense-switch");
    expect(buildSlug("switch")("Gato Roboto")).to.be.eq("gato-roboto-switch");
    expect(buildSlug("switch")("Selma and the Wisp")).to.be.eq("selma-and-the-wisp-switch");
    expect(buildSlug("switch")("Slender: The Arrival")).to.be.eq("slender-the-arrival-switch");
    expect(buildSlug("switch")("Warlocks 2: God Slayers")).to.be.eq("warlocks-2-god-slayers-switch");
    expect(buildSlug("switch")("Captain Cat")).to.be.eq("captain-cat-switch");
    expect(buildSlug("switch")("Tiny Derby")).to.be.eq("tiny-derby-switch");
    expect(buildSlug("switch")("Super Neptunia™ RPG")).to.be.eq("super-neptunia-rpg-switch");
    expect(buildSlug("switch")("Perchang")).to.be.eq("perchang-switch");
    expect(buildSlug("switch")("The Sushi Spinnery")).to.be.eq("the-sushi-spinnery-switch");
    expect(buildSlug("switch")("Cricket 19")).to.be.eq("cricket-19-switch");
    expect(buildSlug("switch")("Muse Dash")).to.be.eq("muse-dash-switch");
    expect(buildSlug("switch")("She and the Light Bearer")).to.be.eq("she-and-the-light-bearer-switch");
    expect(buildSlug("switch")("PlataGO! Super Platform Game Maker")).to.be.eq(
      "platago-super-platform-game-maker-switch",
    );
    expect(buildSlug("switch")("Desktop Table Tennis")).to.be.eq("desktop-table-tennis-switch");
    expect(buildSlug("switch")("Duke of Defense")).to.be.eq("duke-of-defense-switch");
    expect(buildSlug("switch")("PixARK")).to.be.eq("pixark-switch");
    expect(buildSlug("switch")("Season Match 2")).to.be.eq("season-match-2-switch");
    expect(buildSlug("switch")("Arcade Archives ALPINE SKI")).to.be.eq("arcade-archives-alpine-ski-switch");
    expect(buildSlug("switch")("Golem Gates")).to.be.eq("golem-gates-switch");
    expect(buildSlug("switch")("Geki Yaba Runner Anniversary Edition")).to.be.eq(
      "geki-yaba-runner-anniversary-edition-switch",
    );
    expect(buildSlug("switch")("Hue")).to.be.eq("hue-switch");
    expect(buildSlug("switch")("Legend of the Tetrarchs")).to.be.eq("legend-of-the-tetrarchs-switch");
    expect(buildSlug("switch")("Summer Sports Games")).to.be.eq("summer-sports-games-switch");
    expect(buildSlug("switch")("Prime World: Defenders")).to.be.eq("prime-world-defenders-switch");
    expect(buildSlug("switch")("Neon Junctions")).to.be.eq("neon-junctions-switch");
    expect(buildSlug("switch")("The Savior's Gang")).to.be.eq("the-saviors-gang-switch");
    expect(buildSlug("switch")("Soccer Pinball")).to.be.eq("soccer-pinball-switch");
    expect(buildSlug("switch")("Tyr : Chains of Valhalla")).to.be.eq("tyr-chains-of-valhalla-switch");
    expect(buildSlug("switch")("Vosaria: Lair of the Forgotten")).to.be.eq("vosaria-lair-of-the-forgotten-switch");
    expect(buildSlug("switch")("PICO PARK")).to.be.eq("pico-park-switch");
    expect(buildSlug("switch")("ARTIFACT ADVENTURE GAIDEN DX")).to.be.eq("artifact-adventure-gaiden-dx-switch");
    expect(buildSlug("switch")("Bullet Battle: Evolution")).to.be.eq("bullet-battle-evolution-switch");
    expect(buildSlug("switch")("Super Skelemania")).to.be.eq("super-skelemania-switch");
    expect(buildSlug("switch")("Timespinner")).to.be.eq("timespinner-switch");
    expect(buildSlug("switch")("Boxing Champs")).to.be.eq("boxing-champs-switch");
    expect(buildSlug("switch")("Car Mayhem")).to.be.eq("car-mayhem-switch");
    expect(buildSlug("switch")("Dead Dungeon")).to.be.eq("dead-dungeon-switch");
    expect(buildSlug("switch")("Radiation City")).to.be.eq("radiation-city-switch");
    expect(buildSlug("switch")("Phantom Doctrine")).to.be.eq("phantom-doctrine-switch");
    expect(buildSlug("switch")("Doodle God: Crime City")).to.be.eq("doodle-god-crime-city-switch");
    expect(buildSlug("switch")("War Tech Fighters")).to.be.eq("war-tech-fighters-switch");
    expect(buildSlug("switch")("SEGA AGES Wonder Boy: Monster Land")).to.be.eq(
      "sega-ages-wonder-boy-monster-land-switch",
    );
    expect(buildSlug("switch")("Arcade Archives Solomon's Key")).to.be.eq("arcade-archives-solomons-key-switch");
    expect(buildSlug("switch")("Dandy Dungeon - Legend of Brave Yamada -")).to.be.eq(
      "dandy-dungeon-legend-of-brave-yamada-switch",
    );
    expect(buildSlug("switch")("Mainlining")).to.be.eq("mainlining-switch");
    expect(buildSlug("switch")("Desktop Baseball")).to.be.eq("desktop-baseball-switch");
    expect(buildSlug("switch")("Citizens of Space")).to.be.eq("citizens-of-space-switch");
    expect(buildSlug("switch")("Submerged")).to.be.eq("submerged-switch");
    expect(buildSlug("switch")("Toon War")).to.be.eq("toon-war-switch");
    expect(buildSlug("switch")("Etherborn")).to.be.eq("etherborn-switch");
    expect(buildSlug("switch")("Sea King")).to.be.eq("sea-king-switch");
    expect(buildSlug("switch")("Chiki-Chiki Boxy Pro Wrestling")).to.be.eq("chiki-chiki-boxy-pro-wrestling-switch");
    expect(buildSlug("switch")("Police Stories")).to.be.eq("police-stories-switch");
    expect(buildSlug("switch")("Forest Home")).to.be.eq("forest-home-switch");
    expect(buildSlug("switch")("Rally Rock 'N Racing")).to.be.eq("rally-rock-n-racing-switch");
    expect(buildSlug("switch")("Dauntless")).to.be.eq("dauntless-switch");
    expect(buildSlug("switch")("Catan")).to.be.eq("catan-switch");
    expect(buildSlug("switch")("Demolition Crew")).to.be.eq("demolition-crew-switch");
    expect(buildSlug("switch")("Skulls of the Shogun: Bone-A-Fide Edition")).to.be.eq(
      "skulls-of-the-shogun-bone-a-fide-edition-switch",
    );
    expect(buildSlug("switch")("THE LAST REMNANT Remastered")).to.be.eq("the-last-remnant-remastered-switch");
    expect(buildSlug("switch")("Mario & Sonic at the Olympic Games Tokyo 2020")).to.be.eq(
      "mario-and-sonic-at-the-olympic-games-tokyo-2020-switch",
    );
    expect(buildSlug("switch")("Collection of Mana")).to.be.eq("collection-of-mana-switch");
    expect(buildSlug("switch")("CONTRA ROGUE CORPS")).to.be.eq("contra-rogue-corps-switch");
    expect(buildSlug("switch")("Contra Anniversary Collection")).to.be.eq("contra-anniversary-collection-switch");
    expect(buildSlug("switch")("New Super Lucky's Tale")).to.be.eq("new-super-luckys-tale-switch");
    expect(buildSlug("switch")("Luigi's Mansion 3")).to.be.eq("luigis-mansion-3-switch");
    expect(buildSlug("switch")("Resident Evil 5")).to.be.eq("resident-evil-5-switch");
    expect(buildSlug("switch")("Resident Evil 6")).to.be.eq("resident-evil-6-switch");
    expect(buildSlug("switch")("The Witcher 3: Wild Hunt – Complete Edition")).to.be.eq(
      "the-witcher-3-wild-hunt-complete-edition-switch",
    );
    expect(buildSlug("switch")("TRIALS of MANA")).to.be.eq("trials-of-mana-switch");
    expect(buildSlug("switch")("Dead by Daylight")).to.be.eq("dead-by-daylight-switch");
    expect(buildSlug("switch")("Animal Crossing: New Horizons")).to.be.eq("animal-crossing-new-horizons-switch");
    expect(buildSlug("switch")("RAD")).to.be.eq("rad-switch");
    expect(buildSlug("switch")("Goonya Fighter")).to.be.eq("goonya-fighter-switch");
    expect(buildSlug("switch")("The Childs Sight")).to.be.eq("the-childs-sight-switch");
    expect(buildSlug("switch")("Arcade Archives POOYAN")).to.be.eq("arcade-archives-pooyan-switch");
    expect(buildSlug("switch")("Baobabs Mausoleum Ep.2: 1313 Barnabas Dead End Drive")).to.be.eq(
      "baobabs-mausoleum-ep2-1313-barnabas-dead-end-drive-switch",
    );
    expect(buildSlug("switch")("Graveyard Keeper")).to.be.eq("graveyard-keeper-switch");
    expect(buildSlug("switch")("Azuran Tales: TRIALS")).to.be.eq("azuran-tales-trials-switch");
    expect(buildSlug("switch")("Pure Mahjong")).to.be.eq("pure-mahjong-switch");
    expect(buildSlug("switch")("Rolling Gunner")).to.be.eq("rolling-gunner-switch");
    expect(buildSlug("switch")("Yooka-Laylee and the Impossible Lair")).to.be.eq(
      "yooka-laylee-and-the-impossible-lair-switch",
    );
    expect(buildSlug("switch")("Deer Drive Legends")).to.be.eq("deer-drive-legends-switch");
    expect(buildSlug("switch")("Verlet Swing")).to.be.eq("verlet-swing-switch");
    expect(buildSlug("switch")("Real Drift Racing")).to.be.eq("real-drift-racing-switch");
    expect(buildSlug("switch")("ZOMB")).to.be.eq("zomb-switch");
    expect(buildSlug("switch")("SENRAN KAGURA Peach Ball")).to.be.eq("senran-kagura-peach-ball-switch");
    expect(buildSlug("switch")("Professor Lupo and his Horrible Pets")).to.be.eq(
      "professor-lupo-and-his-horrible-pets-switch",
    );
    expect(buildSlug("switch")("NEKOPARA Vol.3")).to.be.eq("nekopara-vol3-switch");
    expect(buildSlug("switch")("Another Sight")).to.be.eq("another-sight-switch");
    expect(buildSlug("switch")("Blade II - The Return Of Evil")).to.be.eq("blade-ii-the-return-of-evil-switch");
    expect(buildSlug("switch")("Queen's Quest 3: The End of Dawn")).to.be.eq("queens-quest-3-the-end-of-dawn-switch");
    expect(buildSlug("switch")("OVIVO")).to.be.eq("ovivo-switch");
    expect(buildSlug("switch")("Hyperlight Ultimate")).to.be.eq("hyperlight-ultimate-switch");
    expect(buildSlug("switch")("Word Mesh")).to.be.eq("word-mesh-switch");
    expect(buildSlug("switch")("Driving School Original")).to.be.eq("driving-school-original-switch");
    expect(buildSlug("switch")("CLANNAD")).to.be.eq("clannad-switch");
    expect(buildSlug("switch")("Epic Astro Story")).to.be.eq("epic-astro-story-switch");
    expect(buildSlug("switch")("Arcade Archives WILD WESTERN")).to.be.eq("arcade-archives-wild-western-switch");
    expect(buildSlug("switch")("Home Escape")).to.be.eq("home-escape-switch");
    expect(buildSlug("switch")("Q-YO Blaster")).to.be.eq("q-yo-blaster-switch");
    expect(buildSlug("switch")("Rain City")).to.be.eq("rain-city-switch");
    expect(buildSlug("switch")("Secret Files 2: Puritas Cordis")).to.be.eq("secret-files-2-puritas-cordis-switch");
    expect(buildSlug("switch")("Cybarian: The Time Traveling Warrior")).to.be.eq(
      "cybarian-the-time-traveling-warrior-switch",
    );
    expect(buildSlug("switch")("Miner Warfare")).to.be.eq("miner-warfare-switch");
    expect(buildSlug("switch")("Devil May Cry")).to.be.eq("devil-may-cry-switch");
    expect(buildSlug("switch")("Red Faction Guerrilla Re-Mars-tered")).to.be.eq(
      "red-faction-guerrilla-re-mars-tered-switch",
    );
    expect(buildSlug("switch")("Lines X")).to.be.eq("lines-x-switch");
    expect(buildSlug("switch")("SEGA AGES Virtua Racing")).to.be.eq("sega-ages-virtua-racing-switch");
    expect(buildSlug("switch")("Human Rocket Person")).to.be.eq("human-rocket-person-switch");
    expect(buildSlug("switch")("Attack of the Toy Tanks")).to.be.eq("attack-of-the-toy-tanks-switch");
    expect(buildSlug("switch")("Siralim 3")).to.be.eq("siralim-3-switch");
    expect(buildSlug("switch")("Bitlogic - A Cyberpunk Arcade Adventure")).to.be.eq(
      "bitlogic-a-cyberpunk-arcade-adventure-switch",
    );
    expect(buildSlug("switch")("Distrust")).to.be.eq("distrust-switch");
    expect(buildSlug("switch")("Nelly Cootalot: The Fowl Fleet")).to.be.eq("nelly-cootalot-the-fowl-fleet-switch");
    expect(buildSlug("switch")("Maddening Euphoria")).to.be.eq("maddening-euphoria-switch");
    expect(buildSlug("switch")("Hamsterdam")).to.be.eq("hamsterdam-switch");
    expect(buildSlug("switch")("STANDBY")).to.be.eq("standby-switch");
    expect(buildSlug("switch")("Irony Curtain: From Matryoshka with Love")).to.be.eq(
      "irony-curtain-from-matryoshka-with-love-switch",
    );
    expect(buildSlug("switch")("LOST ORBIT: Terminal Velocity")).to.be.eq("lost-orbit-terminal-velocity-switch");
    expect(buildSlug("switch")("Wayout")).to.be.eq("wayout-switch");
    expect(buildSlug("switch")("Redneck Skeet Shooting")).to.be.eq("redneck-skeet-shooting-switch");
    expect(buildSlug("switch")("Grass Cutter - Mutated Lawns")).to.be.eq("grass-cutter-mutated-lawns-switch");
    expect(buildSlug("switch")("KILL la KILL - IF")).to.be.eq("kill-la-kill-if-switch");
    expect(buildSlug("switch")("BATTLESHIP")).to.be.eq("battleship-switch");
    expect(buildSlug("switch")("SolSeraph")).to.be.eq("solseraph-switch");
    expect(buildSlug("switch")("Raiden V: Director's Cut")).to.be.eq("raiden-v-directors-cut-switch");
    expect(buildSlug("switch")("GOD EATER 3")).to.be.eq("god-eater-3-switch");
    expect(buildSlug("switch")("Soldam: Drop, Connect, Erase")).to.be.eq("soldam-drop-connect-erase-switch");
    expect(buildSlug("switch")("Ankh Guardian - Treasure of the Demon's Temple")).to.be.eq(
      "ankh-guardian-treasure-of-the-demons-temple-switch",
    );
    expect(buildSlug("switch")("Penguin Wars")).to.be.eq("penguin-wars-switch");
    expect(buildSlug("switch")("Asdivine Dios")).to.be.eq("asdivine-dios-switch");
    expect(buildSlug("switch")("DOBUTSU SHOGI WORLD")).to.be.eq("dobutsu-shogi-world-switch");
    expect(buildSlug("switch")("Dead in Vinland - True Viking edition")).to.be.eq(
      "dead-in-vinland-true-viking-edition-switch",
    );
    expect(buildSlug("switch")("Psyvariar Delta")).to.be.eq("psyvariar-delta-switch");
    expect(buildSlug("switch")("Astro Bears")).to.be.eq("astro-bears-switch");
    expect(buildSlug("switch")("Pawarumi")).to.be.eq("pawarumi-switch");
    expect(buildSlug("switch")("Arcade Archives CLU CLU LAND")).to.be.eq("arcade-archives-clu-clu-land-switch");
    expect(buildSlug("switch")("Blazing Chrome")).to.be.eq("blazing-chrome-switch");
    expect(buildSlug("switch")("Robbie Swifthand and the Orb of Mysteries")).to.be.eq(
      "robbie-swifthand-and-the-orb-of-mysteries-switch",
    );
    expect(buildSlug("switch")("Fantasy Strike")).to.be.eq("fantasy-strike-switch");
    expect(buildSlug("switch")("What Remains of Edith Finch")).to.be.eq("what-remains-of-edith-finch-switch");
    expect(buildSlug("switch")("Dream Daddy: A Dad Dating Simulator")).to.be.eq(
      "dream-daddy-a-dad-dating-simulator-switch",
    );
    expect(
      buildSlug("switch")("LAYTON'S MYSTERY JOURNEY™: Katrielle and the Millionaires' Conspiracy Deluxe Edition"),
    ).to.be.eq("laytons-mystery-journey-katrielle-and-the-millionaires-conspiracy-deluxe-edition-switch");
    expect(buildSlug("switch")("World Of Riders")).to.be.eq("world-of-riders-switch");
    expect(buildSlug("switch")("Bus Fix 2019")).to.be.eq("bus-fix-2019-switch");
    expect(buildSlug("switch")("Hero Express")).to.be.eq("hero-express-switch");
    expect(buildSlug("switch")("Paradox Soul")).to.be.eq("paradox-soul-switch");
    expect(buildSlug("switch")("Super Mutant Alien Assault")).to.be.eq("super-mutant-alien-assault-switch");
    expect(buildSlug("switch")("Bubsy: Paws on Fire!")).to.be.eq("bubsy-paws-on-fire-switch");
    expect(buildSlug("switch")("Redeemer: Enhanced Edition")).to.be.eq("redeemer-enhanced-edition-switch");
    expect(buildSlug("switch")("Arcade Archives Ninja Spirit")).to.be.eq("arcade-archives-ninja-spirit-switch");
    expect(buildSlug("switch")("Metaloid: Origin")).to.be.eq("metaloid-origin-switch");
    expect(buildSlug("switch")("Laser Kitty Pow Pow")).to.be.eq("laser-kitty-pow-pow-switch");
    expect(buildSlug("switch")("Bubble Cats Rescue")).to.be.eq("bubble-cats-rescue-switch");
    expect(buildSlug("switch")("Mad Bullets")).to.be.eq("mad-bullets-switch");
    expect(buildSlug("switch")("Ziggurat")).to.be.eq("ziggurat-switch");
    expect(buildSlug("switch")("Tarot Readings Premium")).to.be.eq("tarot-readings-premium-switch");
    expect(buildSlug("switch")("Desktop Bowling")).to.be.eq("desktop-bowling-switch");
    expect(buildSlug("switch")("Jim is Moving Out!")).to.be.eq("jim-is-moving-out-switch");
    expect(buildSlug("switch")("3 Little Pigs & Bad Wolf")).to.be.eq("3-little-pigs-and-bad-wolf-switch");
    expect(buildSlug("switch")("Bouncy Bullets")).to.be.eq("bouncy-bullets-switch");
    expect(buildSlug("switch")("TINY METAL: FULL METAL RUMBLE")).to.be.eq("tiny-metal-full-metal-rumble-switch");
    expect(buildSlug("switch")("Royal Roads")).to.be.eq("royal-roads-switch");
    expect(buildSlug("switch")("FIA European Truck Racing Championship")).to.be.eq(
      "fia-european-truck-racing-championship-switch",
    );
    expect(buildSlug("switch")("Vektor Wars")).to.be.eq("vektor-wars-switch");
    expect(buildSlug("switch")('Tactics V: "Obsidian Brigade"')).to.be.eq("tactics-v-obsidian-brigade-switch");
    expect(buildSlug("switch")("Mutant Year Zero: Road to Eden – Deluxe Edition")).to.be.eq(
      "mutant-year-zero-road-to-eden-deluxe-edition-switch",
    );
    expect(buildSlug("switch")("Remothered: Tormented Fathers")).to.be.eq("remothered-tormented-fathers-switch");
    expect(buildSlug("switch")("Zombie Driver Immortal Edition")).to.be.eq("zombie-driver-immortal-edition-switch");
    expect(buildSlug("switch")("Forklift - The Simulation")).to.be.eq("forklift-the-simulation-switch");
    expect(buildSlug("switch")("Archlion Saga")).to.be.eq("archlion-saga-switch");
    expect(buildSlug("switch")("World Cruise Story")).to.be.eq("world-cruise-story-switch");
    expect(buildSlug("switch")("Songbird Symphony")).to.be.eq("songbird-symphony-switch");
    expect(buildSlug("switch")("Arcade Archives Shusse Ozumo")).to.be.eq("arcade-archives-shusse-ozumo-switch");
    expect(buildSlug("switch")("Fobia")).to.be.eq("fobia-switch");
    expect(buildSlug("switch")("Switchy Road")).to.be.eq("switchy-road-switch");
    expect(buildSlug("switch")("Quest Hunter")).to.be.eq("quest-hunter-switch");
    expect(buildSlug("switch")("Adrenaline Rush - Miami Drive")).to.be.eq("adrenaline-rush-miami-drive-switch");
    expect(buildSlug("switch")("Alien Escape")).to.be.eq("alien-escape-switch");
    expect(buildSlug("switch")("Mini Trains")).to.be.eq("mini-trains-switch");
    expect(buildSlug("switch")("Tetsumo Party")).to.be.eq("tetsumo-party-switch");
    expect(buildSlug("switch")("Lethal League Blaze")).to.be.eq("lethal-league-blaze-switch");
    expect(buildSlug("switch")("Titans Pinball")).to.be.eq("titans-pinball-switch");
    expect(buildSlug("switch")("Lust for Darkness")).to.be.eq("lust-for-darkness-switch");
    expect(buildSlug("switch")("Seeders Puzzle Reboot")).to.be.eq("seeders-puzzle-reboot-switch");
    expect(buildSlug("switch")("Burger Chef Tycoon")).to.be.eq("burger-chef-tycoon-switch");
    expect(buildSlug("switch")("High Noon Revolver")).to.be.eq("high-noon-revolver-switch");
    expect(buildSlug("switch")("Eagle Island")).to.be.eq("eagle-island-switch");
    expect(buildSlug("switch")("Rise: Race The Future")).to.be.eq("rise-race-the-future-switch");
    expect(buildSlug("switch")("Run the Fan")).to.be.eq("run-the-fan-switch");
    expect(buildSlug("switch")("Growtopia®")).to.be.eq("growtopia-switch");
    expect(buildSlug("switch")("Mochi Mochi Boy")).to.be.eq("mochi-mochi-boy-switch");
    expect(buildSlug("switch")("The Tower of Beatrice")).to.be.eq("the-tower-of-beatrice-switch");
    expect(buildSlug("switch")("Chroma Squad")).to.be.eq("chroma-squad-switch");
    expect(buildSlug("switch")("Arcade Archives THE NINJA WARRIORS")).to.be.eq(
      "arcade-archives-the-ninja-warriors-switch",
    );
    expect(buildSlug("switch")("Caladrius Blaze")).to.be.eq("caladrius-blaze-switch");
    expect(buildSlug("switch")("Gunpowder on The Teeth: Arcade")).to.be.eq("gunpowder-on-the-teeth-arcade-switch");
    expect(buildSlug("switch")("PICROSS LORD OF THE NAZARICK")).to.be.eq("picross-lord-of-the-nazarick-switch");
    expect(buildSlug("switch")("Star Wars™ Pinball")).to.be.eq("star-wars-pinball-switch");
    expect(buildSlug("switch")("TERRORHYTHM (TRRT)")).to.be.eq("terrorhythm-trrt-switch");
    expect(buildSlug("switch")("The Forbidden Arts")).to.be.eq("the-forbidden-arts-switch");
    expect(buildSlug("switch")("Umihara Kawase Fresh!")).to.be.eq("umihara-kawase-fresh-switch");
    expect(buildSlug("switch")("Sheep in Hell")).to.be.eq("sheep-in-hell-switch");
    expect(buildSlug("switch")("Sweet Witches")).to.be.eq("sweet-witches-switch");
    expect(buildSlug("switch")("Shinobi Spirits S: Legend of Heroes")).to.be.eq(
      "shinobi-spirits-s-legend-of-heroes-switch",
    );
    expect(buildSlug("switch")("Super Mega Baseball 2: Ultimate Edition")).to.be.eq(
      "super-mega-baseball-2-ultimate-edition-switch",
    );
    expect(buildSlug("switch")("Friday the 13th: The Game Ultimate Slasher Edition")).to.be.eq(
      "friday-the-13th-the-game-ultimate-slasher-edition-switch",
    );
    expect(buildSlug("switch")("Smoots Summer Games")).to.be.eq("smoots-summer-games-switch");
    expect(buildSlug("switch")("Collide-a-Ball 2")).to.be.eq("collide-a-ball-2-switch");
    expect(buildSlug("switch")("Automachef")).to.be.eq("automachef-switch");
    expect(buildSlug("switch")("Garage Mechanic Simulator")).to.be.eq("garage-mechanic-simulator-switch");
    expect(buildSlug("switch")("Sniper Elite 3 Ultimate Edition")).to.be.eq("sniper-elite-3-ultimate-edition-switch");
    expect(buildSlug("switch")("Mighty Switch Force! Collection")).to.be.eq("mighty-switch-force-collection-switch");
    expect(buildSlug("switch")("Ittle Dew")).to.be.eq("ittle-dew-switch");
    expect(buildSlug("switch")("Hoggy2")).to.be.eq("hoggy2-switch");
    expect(buildSlug("switch")("Super Jumpy Ball")).to.be.eq("super-jumpy-ball-switch");
    expect(buildSlug("switch")("Solo: Islands of the Heart")).to.be.eq("solo-islands-of-the-heart-switch");
    expect(buildSlug("switch")("Swaps and Traps")).to.be.eq("swaps-and-traps-switch");
    expect(buildSlug("switch")("ONINAKI")).to.be.eq("oninaki-switch");
    expect(buildSlug("switch")("The Church in the Darkness")).to.be.eq("the-church-in-the-darkness-switch");
    expect(buildSlug("switch")("Woodle Tree 2: Deluxe")).to.be.eq("woodle-tree-2-deluxe-switch");
    expect(buildSlug("switch")("Damsel")).to.be.eq("damsel-switch");
    expect(buildSlug("switch")("The Original Mobile Games")).to.be.eq("the-original-mobile-games-switch");
    expect(buildSlug("switch")("Catch a Duck")).to.be.eq("catch-a-duck-switch");
    expect(buildSlug("switch")("Whipseey and the Lost Atlas")).to.be.eq("whipseey-and-the-lost-atlas-switch");
    expect(buildSlug("switch")("Arcade Archives ROAD FIGHTER")).to.be.eq("arcade-archives-road-fighter-switch");
    expect(buildSlug("switch")("Subdivision Infinity DX")).to.be.eq("subdivision-infinity-dx-switch");
    expect(buildSlug("switch")("Animal Fight Club")).to.be.eq("animal-fight-club-switch");
    expect(buildSlug("switch")("The Drama Queen Murder")).to.be.eq("the-drama-queen-murder-switch");
    expect(buildSlug("switch")("Never Give Up")).to.be.eq("never-give-up-switch");
    expect(buildSlug("switch")("Kiai Resonance")).to.be.eq("kiai-resonance-switch");
    expect(buildSlug("switch")("Cryogear")).to.be.eq("cryogear-switch");
    expect(buildSlug("switch")("Illusion of L'Phalcia")).to.be.eq("illusion-of-lphalcia-switch");
    expect(buildSlug("switch")("Dungeon Warfare")).to.be.eq("dungeon-warfare-switch");
    expect(buildSlug("switch")("Sudoku Relax 2 Summer Waves")).to.be.eq("sudoku-relax-2-summer-waves-switch");
    expect(buildSlug("switch")("Omega Labyrinth Life")).to.be.eq("omega-labyrinth-life-switch");
    expect(buildSlug("switch")("Pillars of Eternity: Complete Edition")).to.be.eq(
      "pillars-of-eternity-complete-edition-switch",
    );
    expect(buildSlug("switch")("Classic Games Collection Vol.1")).to.be.eq("classic-games-collection-vol1-switch");
    expect(buildSlug("switch")("Trine 3:  The Artifacts of Power")).to.be.eq("trine-3-the-artifacts-of-power-switch");
    expect(buildSlug("switch")("The House of Da Vinci")).to.be.eq("the-house-of-da-vinci-switch");
    expect(buildSlug("switch")("DOOM 3")).to.be.eq("doom-3-switch");
    expect(buildSlug("switch")("DOOM (1993)")).to.be.eq("doom-1993-switch");
    expect(buildSlug("switch")("DOOM II (Classic)")).to.be.eq("doom-ii-classic-switch");
    expect(buildSlug("switch")("Doughlings: Invasion")).to.be.eq("doughlings-invasion-switch");
    expect(buildSlug("switch")("Rogue Singularity")).to.be.eq("rogue-singularity-switch");
    expect(buildSlug("switch")("Welcome to Hanwell")).to.be.eq("welcome-to-hanwell-switch");
    expect(buildSlug("switch")("Divine Ascent")).to.be.eq("divine-ascent-switch");
    expect(buildSlug("switch")("Spyro™ Reignited Trilogy")).to.be.eq("spyro-reignited-trilogy-switch");
    expect(buildSlug("switch")("Super Wiloo Demake")).to.be.eq("super-wiloo-demake-switch");
    expect(buildSlug("switch")("Saboteur II: Avenging Angel")).to.be.eq("saboteur-ii-avenging-angel-switch");
    expect(buildSlug("switch")("Exception")).to.be.eq("exception-switch");
    expect(buildSlug("switch")("Taimumari: Complete Edition")).to.be.eq("taimumari-complete-edition-switch");
    expect(buildSlug("switch")("Root Letter: Last Answer")).to.be.eq("root-letter-last-answer-switch");
    expect(buildSlug("switch")("Turok 2: Seeds of Evil")).to.be.eq("turok-2-seeds-of-evil-switch");
    expect(buildSlug("switch")("Raiders of the North Sea")).to.be.eq("raiders-of-the-north-sea-switch");
    expect(buildSlug("switch")("Escape from the Universe")).to.be.eq("escape-from-the-universe-switch");
    expect(buildSlug("switch")("Bear With Me: The Lost Robots")).to.be.eq("bear-with-me-the-lost-robots-switch");
    expect(buildSlug("switch")("Shadows 2: Perfidia")).to.be.eq("shadows-2-perfidia-switch");
    expect(buildSlug("switch")("Epic Clicker Journey")).to.be.eq("epic-clicker-journey-switch");
    expect(buildSlug("switch")("Agent A: A puzzle in disguise")).to.be.eq("agent-a-a-puzzle-in-disguise-switch");
    expect(buildSlug("switch")("#RaceDieRun")).to.be.eq("racedierun-switch");
    expect(buildSlug("switch")("Fell Seal: Arbiter's Mark")).to.be.eq("fell-seal-arbiters-mark-switch");
    expect(buildSlug("switch")("Wreckin' Ball Adventure")).to.be.eq("wreckin-ball-adventure-switch");
    expect(buildSlug("switch")("M.A.C.E. Tower Defense")).to.be.eq("mace-tower-defense-switch");
    expect(buildSlug("switch")("Pelican and Medjed")).to.be.eq("pelican-and-medjed-switch");
    expect(buildSlug("switch")("Wordsweeper by POWGI")).to.be.eq("wordsweeper-by-powgi-switch");
    expect(buildSlug("switch")("Oh!Edo Towns")).to.be.eq("oh-edo-towns-switch");
    expect(buildSlug("switch")("The Pyraplex")).to.be.eq("the-pyraplex-switch");
    expect(buildSlug("switch")("Sudoku Universe")).to.be.eq("sudoku-universe-switch");
    expect(buildSlug("switch")("Arcade Archives VICTORY ROAD")).to.be.eq("arcade-archives-victory-road-switch");
    expect(buildSlug("switch")("VASARA Collection")).to.be.eq("vasara-collection-switch");
    expect(buildSlug("switch")("Plague Inc: Evolved")).to.be.eq("plague-inc-evolved-switch");
    expect(buildSlug("switch")("Swallow Up")).to.be.eq("swallow-up-switch");
    expect(buildSlug("switch")("Fat City")).to.be.eq("fat-city-switch");
    expect(buildSlug("switch")("Neverlast")).to.be.eq("neverlast-switch");
    expect(buildSlug("switch")("Sagebrush")).to.be.eq("sagebrush-switch");
    expect(buildSlug("switch")("FAR: Lone Sails")).to.be.eq("far-lone-sails-switch");
    expect(buildSlug("switch")("Gun Gun Pixies")).to.be.eq("gun-gun-pixies-switch");
    expect(buildSlug("switch")("DC Universe™ Online")).to.be.eq("dc-universe-online-switch");
    expect(buildSlug("switch")("PC Building Simulator")).to.be.eq("pc-building-simulator-switch");
    expect(buildSlug("switch")("AER Memories of Old")).to.be.eq("aer-memories-of-old-switch");
    expect(buildSlug("switch")("Pix the Cat")).to.be.eq("pix-the-cat-switch");
    expect(buildSlug("switch")("Hyperdrive Massacre")).to.be.eq("hyperdrive-massacre-switch");
    expect(buildSlug("switch")("SWORD ART ONLINE: FATAL BULLET Complete Edition")).to.be.eq(
      "sword-art-online-fatal-bullet-complete-edition-switch",
    );
    expect(buildSlug("switch")("Fin and the Ancient Mystery")).to.be.eq("fin-and-the-ancient-mystery-switch");
    expect(buildSlug("switch")("Quench")).to.be.eq("quench-switch");
    expect(buildSlug("switch")("Our Flick Erasers")).to.be.eq("our-flick-erasers-switch");
    expect(buildSlug("switch")("SEGA AGES Puyo Puyo")).to.be.eq("sega-ages-puyo-puyo-switch");
    expect(buildSlug("switch")("SEGA AGES Space Harrier")).to.be.eq("sega-ages-space-harrier-switch");
    expect(buildSlug("switch")("Milkmaid of the Milky Way")).to.be.eq("milkmaid-of-the-milky-way-switch");
    expect(buildSlug("switch")("Tap Skaters")).to.be.eq("tap-skaters-switch");
    expect(buildSlug("switch")("Grave Keeper")).to.be.eq("grave-keeper-switch");
    expect(buildSlug("switch")("Arcade Archives X MULTIPLY")).to.be.eq("arcade-archives-x-multiply-switch");
    expect(buildSlug("switch")("PictoQuest")).to.be.eq("pictoquest-switch");
    expect(buildSlug("switch")("Everdark Tower")).to.be.eq("everdark-tower-switch");
    expect(buildSlug("switch")("Hookbots")).to.be.eq("hookbots-switch");
    expect(buildSlug("switch")("Lines Infinite")).to.be.eq("lines-infinite-switch");
    expect(buildSlug("switch")("Anode")).to.be.eq("anode-switch");
    expect(buildSlug("switch")("Beholder 2")).to.be.eq("beholder-2-switch");
    expect(buildSlug("switch")("Ellen")).to.be.eq("ellen-switch");
    expect(buildSlug("switch")("IN-VERT")).to.be.eq("in-vert-switch");
    expect(buildSlug("switch")("Gravity Duck")).to.be.eq("gravity-duck-switch");
    expect(buildSlug("switch")("Heave Ho")).to.be.eq("heave-ho-switch");
    expect(buildSlug("switch")("Snooker 19")).to.be.eq("snooker-19-switch");
    expect(buildSlug("switch")("Edna & Harvey: Harvey's New Eyes")).to.be.eq("edna-and-harvey-harveys-new-eyes-switch");
    expect(buildSlug("switch")("Mary Skelter 2")).to.be.eq("mary-skelter-2-switch");
    expect(buildSlug("switch")("Pantsu Hunter: Back to the 90s")).to.be.eq("pantsu-hunter-back-to-the-90s-switch");
    expect(buildSlug("switch")("The Vanishing of Ethan Carter")).to.be.eq("the-vanishing-of-ethan-carter-switch");
    expect(buildSlug("switch")("Arcade Archives VS. GRADIUS")).to.be.eq("arcade-archives-vs-gradius-switch");
    expect(buildSlug("switch")("Hotline Miami Collection")).to.be.eq("hotline-miami-collection-switch");
    expect(buildSlug("switch")("SUPERHOT")).to.be.eq("superhot-switch");
    expect(buildSlug("switch")("Torchlight II")).to.be.eq("torchlight-ii-switch");
    expect(buildSlug("switch")("Creature in the Well")).to.be.eq("creature-in-the-well-switch");
    expect(buildSlug("switch")("Northgard")).to.be.eq("northgard-switch");
    expect(buildSlug("switch")("Ori and the Blind Forest: Definitive Edition")).to.be.eq(
      "ori-and-the-blind-forest-definitive-edition-switch",
    );
    expect(buildSlug("switch")("EarthNight")).to.be.eq("earthnight-switch");
    expect(buildSlug("switch")("Risk of Rain 2")).to.be.eq("risk-of-rain-2-switch");
    expect(buildSlug("switch")("Instant Sports")).to.be.eq("instant-sports-switch");
    expect(buildSlug("switch")("Freedom Finger")).to.be.eq("freedom-finger-switch");
    expect(buildSlug("switch")("Skellboy")).to.be.eq("skellboy-switch");
    expect(buildSlug("switch")("The Touryst")).to.be.eq("the-touryst-switch");
    expect(buildSlug("switch")("Mr Blaster")).to.be.eq("mr-blaster-switch");
    expect(buildSlug("switch")("Space Cows")).to.be.eq("space-cows-switch");
    expect(buildSlug("switch")("Little Racer")).to.be.eq("little-racer-switch");
    expect(buildSlug("switch")("Headliner: NoviNews")).to.be.eq("headliner-novinews-switch");
    expect(buildSlug("switch")("GRANDIA HD Collection")).to.be.eq("grandia-hd-collection-switch");
    expect(buildSlug("switch")("Mekabolt")).to.be.eq("mekabolt-switch");
    expect(buildSlug("switch")("Duck Life: Battle")).to.be.eq("duck-life-battle-switch");
    expect(buildSlug("switch")("Vambrace: Cold Soul")).to.be.eq("vambrace-cold-soul-switch");
    expect(buildSlug("switch")("Path of Sin: Greed")).to.be.eq("path-of-sin-greed-switch");
    expect(buildSlug("switch")("Ghostbusters: The Video Game Remastered")).to.be.eq(
      "ghostbusters-the-video-game-remastered-switch",
    );
    expect(buildSlug("switch")("Invisigun Reloaded")).to.be.eq("invisigun-reloaded-switch");
    expect(buildSlug("switch")("Deadlings")).to.be.eq("deadlings-switch");
    expect(buildSlug("switch")("Lanternium")).to.be.eq("lanternium-switch");
    expect(buildSlug("switch")("ESport Manager")).to.be.eq("esport-manager-switch");
    expect(buildSlug("switch")("Grand Brix Shooter")).to.be.eq("grand-brix-shooter-switch");
    expect(buildSlug("switch")("Brunch Club")).to.be.eq("brunch-club-switch");
    expect(buildSlug("switch")("The Sinking City")).to.be.eq("the-sinking-city-switch");
    expect(buildSlug("switch")("Farm Mystery")).to.be.eq("farm-mystery-switch");
    expect(buildSlug("switch")("Arcade Archives WATER SKI")).to.be.eq("arcade-archives-water-ski-switch");
    expect(buildSlug("switch")("Lost Castle")).to.be.eq("lost-castle-switch");
    expect(buildSlug("switch")("Damascus Gear Operation Osaka")).to.be.eq("damascus-gear-operation-osaka-switch");
    expect(buildSlug("switch")("A Duel Hand Disaster: Trackher")).to.be.eq("a-duel-hand-disaster-trackher-switch");
    expect(buildSlug("switch")("Invasion of Alien X - Earth in Crisis")).to.be.eq(
      "invasion-of-alien-x-earth-in-crisis-switch",
    );
    expect(buildSlug("switch")("Hyperforma")).to.be.eq("hyperforma-switch");
    expect(buildSlug("switch")("Wilmot's Warehouse")).to.be.eq("wilmots-warehouse-switch");
    expect(buildSlug("switch")("Pacific Wings")).to.be.eq("pacific-wings-switch");
    expect(buildSlug("switch")("FINAL FANTASY VIII Remastered")).to.be.eq("final-fantasy-viii-remastered-switch");
    expect(buildSlug("switch")("FUZE4 Nintendo Switch")).to.be.eq("fuze4-nintendo-switch");
    expect(buildSlug("switch")("Gnomes Garden: Lost King")).to.be.eq("gnomes-garden-lost-king-switch");
    expect(buildSlug("switch")("LEGO® Jurassic World")).to.be.eq("lego-jurassic-world-switch");
    expect(buildSlug("switch")("Legend of the Skyfish")).to.be.eq("legend-of-the-skyfish-switch");
    expect(buildSlug("switch")("Close to the Sun")).to.be.eq("close-to-the-sun-switch");
    expect(buildSlug("switch")("Rest in Pieces")).to.be.eq("rest-in-pieces-switch");
    expect(buildSlug("switch")("Trine 4: The Nightmare Prince")).to.be.eq("trine-4-the-nightmare-prince-switch");
    expect(buildSlug("switch")("BARRIER X")).to.be.eq("barrier-x-switch");
    expect(buildSlug("switch")("Wuppo: Definitive Edition")).to.be.eq("wuppo-definitive-edition-switch");
    expect(buildSlug("switch")("Gurgamoth")).to.be.eq("gurgamoth-switch");
    expect(buildSlug("switch")("The Ninja Saviors: Return of the Warriors")).to.be.eq(
      "the-ninja-saviors-return-of-the-warriors-switch",
    );
    expect(buildSlug("switch")("Headspun")).to.be.eq("headspun-switch");
    expect(buildSlug("switch")("Boreal Blade")).to.be.eq("boreal-blade-switch");
    expect(buildSlug("switch")("Blasphemous")).to.be.eq("blasphemous-switch");
    expect(buildSlug("switch")("OBAKEIDORO!")).to.be.eq("obakeidoro-switch");
    expect(buildSlug("switch")("Pocket Clothier")).to.be.eq("pocket-clothier-switch");
    expect(buildSlug("switch")("Hopping girl KOHANE Jumping Kingdom: Princess of the Black Rabbit")).to.be.eq(
      "hopping-girl-kohane-jumping-kingdom-princess-of-the-black-rabbit-switch",
    );
    expect(buildSlug("switch")("Asdivine Menace")).to.be.eq("asdivine-menace-switch");
    expect(buildSlug("switch")("Battle Supremacy - Ground Assault")).to.be.eq("battle-supremacy-ground-assault-switch");
    expect(buildSlug("switch")("Spice and Wolf VR")).to.be.eq("spice-and-wolf-vr-switch");
    expect(buildSlug("switch")("River City Girls")).to.be.eq("river-city-girls-switch");
    expect(buildSlug("switch")("Inferno 2")).to.be.eq("inferno-2-switch");
    expect(buildSlug("switch")("Fifty Words by POWGI")).to.be.eq("fifty-words-by-powgi-switch");
    expect(buildSlug("switch")("The Battle Of Mahjong")).to.be.eq("the-battle-of-mahjong-switch");
    expect(buildSlug("switch")("NBA 2K20")).to.be.eq("nba-2k20-switch");
    expect(buildSlug("switch")("Arcade Archives Pinball")).to.be.eq("arcade-archives-pinball-switch");
    expect(buildSlug("switch")("SpaceColorsRunner")).to.be.eq("spacecolorsrunner-switch");
    expect(buildSlug("switch")("Into the Dead 2")).to.be.eq("into-the-dead-2-switch");
    expect(buildSlug("switch")("AI: THE SOMNIUM FILES")).to.be.eq("ai-the-somnium-files-switch");
    expect(buildSlug("switch")("Bulletstorm: Duke of Switch Edition")).to.be.eq(
      "bulletstorm-duke-of-switch-edition-switch",
    );
    expect(buildSlug("switch")("Sydney Hunter and the Curse of the Mayan")).to.be.eq(
      "sydney-hunter-and-the-curse-of-the-mayan-switch",
    );
    expect(buildSlug("switch")("Domiverse")).to.be.eq("domiverse-switch");
    expect(buildSlug("switch")("Himno")).to.be.eq("himno-switch");
    expect(buildSlug("switch")("Wand Wars")).to.be.eq("wand-wars-switch");
    expect(buildSlug("switch")("Super Nintendo Entertainment System - Nintendo Switch Online")).to.be.eq(
      "super-nintendo-entertainment-system-nintendo-switch-online-switch",
    );
    expect(buildSlug("switch")("The Long Journey Home")).to.be.eq("the-long-journey-home-switch");
    expect(buildSlug("switch")("Jet Kave Adventure")).to.be.eq("jet-kave-adventure-switch");
    expect(buildSlug("switch")("Deadly Premonition 2: A Blessing in Disguise")).to.be.eq(
      "deadly-premonition-2-a-blessing-in-disguise-switch",
    );
    expect(buildSlug("switch")("Return of the Obra Dinn")).to.be.eq("return-of-the-obra-dinn-switch");
    expect(buildSlug("switch")("GRID™ Autosport")).to.be.eq("grid-autosport-switch");
    expect(buildSlug("switch")("Devil May Cry 2")).to.be.eq("devil-may-cry-2-switch");
    expect(buildSlug("switch")("DOOM 64")).to.be.eq("doom-64-switch");
    expect(buildSlug("switch")("Xenoblade Chronicles: Definitive Edition")).to.be.eq(
      "xenoblade-chronicles-definitive-edition-switch",
    );
    expect(buildSlug("switch")("Divinity: Original Sin 2 - Definitive Edition")).to.be.eq(
      "divinity-original-sin-2-definitive-edition-switch",
    );
    expect(buildSlug("switch")("Deadly Premonition Origins")).to.be.eq("deadly-premonition-origins-switch");
    expect(buildSlug("switch")("Pig Eat Ball")).to.be.eq("pig-eat-ball-switch");
    expect(buildSlug("switch")("Super Kirby Clash")).to.be.eq("super-kirby-clash-switch");
    expect(buildSlug("switch")("Little Town Hero")).to.be.eq("little-town-hero-switch");
    expect(buildSlug("switch")("Arcade Archives VIGILANTE")).to.be.eq("arcade-archives-vigilante-switch");
    expect(buildSlug("switch")("Gunvolt Chronicles: Luminous Avenger iX")).to.be.eq(
      "gunvolt-chronicles-luminous-avenger-ix-switch",
    );
    expect(buildSlug("switch")("Molecats")).to.be.eq("molecats-switch");
    expect(buildSlug("switch")("If My Heart Had Wings")).to.be.eq("if-my-heart-had-wings-switch");
    expect(buildSlug("switch")("Just Black Jack")).to.be.eq("just-black-jack-switch");
    expect(buildSlug("switch")("Puzzle Quest: The Legend Returns")).to.be.eq("puzzle-quest-the-legend-returns-switch");
    expect(buildSlug("switch")("Battle Supremacy - Evolution")).to.be.eq("battle-supremacy-evolution-switch");
    expect(buildSlug("switch")("DISTRAINT: Deluxe Edition")).to.be.eq("distraint-deluxe-edition-switch");
    expect(buildSlug("switch")("Candleman")).to.be.eq("candleman-switch");
    expect(buildSlug("switch")("Super Dodgeball Beats")).to.be.eq("super-dodgeball-beats-switch");
    expect(buildSlug("switch")("Ritual")).to.be.eq("ritual-switch");
    expect(buildSlug("switch")("The Eyes of Ara")).to.be.eq("the-eyes-of-ara-switch");
    expect(buildSlug("switch")("CHOP")).to.be.eq("chop-switch");
    expect(buildSlug("switch")("KAIJU KHAOS")).to.be.eq("kaiju-khaos-switch");
    expect(buildSlug("switch")("Tyd wag vir Niemand")).to.be.eq("tyd-wag-vir-niemand-switch");
    expect(buildSlug("switch")("Atomic Heist")).to.be.eq("atomic-heist-switch");
    expect(buildSlug("switch")("Niffelheim")).to.be.eq("niffelheim-switch");
    expect(buildSlug("switch")("80 DAYS")).to.be.eq("80-days-switch");
    expect(buildSlug("switch")("Spellworm")).to.be.eq("spellworm-switch");
    expect(buildSlug("switch")("Call of Cthulhu")).to.be.eq("call-of-cthulhu-switch");
    expect(buildSlug("switch")("Oliver's Adventures in the Fairyland")).to.be.eq(
      "olivers-adventures-in-the-fairyland-switch",
    );
    expect(buildSlug("switch")("Galaxy Champions TV")).to.be.eq("galaxy-champions-tv-switch");
    expect(buildSlug("switch")("EA SPORTS™ FIFA 20 Nintendo Switch™ Legacy Edition")).to.be.eq(
      "ea-sports-fifa-20-nintendo-switch-legacy-edition-switch",
    );
    expect(buildSlug("switch")("Throne Quest Deluxe")).to.be.eq("throne-quest-deluxe-switch");
    expect(buildSlug("switch")("The Tenth Line Special Edition")).to.be.eq("the-tenth-line-special-edition-switch");
    expect(buildSlug("switch")("Zenith")).to.be.eq("zenith-switch");
    expect(buildSlug("switch")("Island Maze")).to.be.eq("island-maze-switch");
    expect(buildSlug("switch")("Amnesia: Collection")).to.be.eq("amnesia-collection-switch");
    expect(buildSlug("switch")("Omen Exitio: Plague")).to.be.eq("omen-exitio-plague-switch");
    expect(buildSlug("switch")("Zombieland: Double Tap- Road Trip")).to.be.eq("zombieland-double-tap-road-trip-switch");
    expect(buildSlug("switch")("Newt One")).to.be.eq("newt-one-switch");
    expect(buildSlug("switch")("Yellow Fins")).to.be.eq("yellow-fins-switch");
    expect(buildSlug("switch")("Arcade Archives TRACK & FIELD")).to.be.eq("arcade-archives-track-and-field-switch");
    expect(buildSlug("switch")("Golazo!")).to.be.eq("golazo-switch");
    expect(buildSlug("switch")("MISTOVER")).to.be.eq("mistover-switch");
    expect(buildSlug("switch")("Street Outlaws: The List")).to.be.eq("street-outlaws-the-list-switch");
    expect(buildSlug("switch")("Overland")).to.be.eq("overland-switch");
    expect(buildSlug("switch")("Asphalt 9: Legends")).to.be.eq("asphalt-9-legends-switch");
    expect(buildSlug("switch")("Scheming Through The Zombie Apocalypse: The Beginning")).to.be.eq(
      "scheming-through-the-zombie-apocalypse-the-beginning-switch",
    );
    expect(buildSlug("switch")("Castle Crashers Remastered")).to.be.eq("castle-crashers-remastered-switch");
    expect(buildSlug("switch")("Neon Drive")).to.be.eq("neon-drive-switch");
    expect(buildSlug("switch")("Paper Dolls Original")).to.be.eq("paper-dolls-original-switch");
    expect(buildSlug("switch")("Angry Bunnies: Colossal Carrot Crusade")).to.be.eq(
      "angry-bunnies-colossal-carrot-crusade-switch",
    );
    expect(buildSlug("switch")("JUMANJI: The Video Game")).to.be.eq("jumanji-the-video-game-switch");
    expect(buildSlug("switch")("The Alliance Alive HD Remastered")).to.be.eq("the-alliance-alive-hd-remastered-switch");
    expect(buildSlug("switch")("Car Mechanic Simulator Pocket Edition")).to.be.eq(
      "car-mechanic-simulator-pocket-edition-switch",
    );
    expect(buildSlug("switch")("Akash: Path of the Five")).to.be.eq("akash-path-of-the-five-switch");
    expect(buildSlug("switch")("Megaquarium")).to.be.eq("megaquarium-switch");
    expect(buildSlug("switch")("CROSSNIQ+")).to.be.eq("crossniq-switch");
    expect(buildSlug("switch")("Trine: Ultimate Collection")).to.be.eq("trine-ultimate-collection-switch");
    expect(buildSlug("switch")("Rebel Cops")).to.be.eq("rebel-cops-switch");
    expect(buildSlug("switch")("Hidden")).to.be.eq("hidden-switch");
    expect(buildSlug("switch")("Reel Fishing: Road Trip Adventure")).to.be.eq(
      "reel-fishing-road-trip-adventure-switch",
    );
    expect(buildSlug("switch")("VAMPYR")).to.be.eq("vampyr-switch");
    expect(buildSlug("switch")("Summer Sweetheart")).to.be.eq("summer-sweetheart-switch");
    expect(buildSlug("switch")("Raging Loop")).to.be.eq("raging-loop-switch");
    expect(buildSlug("switch")("Eight-Minute Empire: Complete Edition")).to.be.eq(
      "eight-minute-empire-complete-edition-switch",
    );
    expect(buildSlug("switch")("FLYING GIRL STRIKER")).to.be.eq("flying-girl-striker-switch");
    expect(buildSlug("switch")("CASE: Animatronics")).to.be.eq("case-animatronics-switch");
    expect(buildSlug("switch")("Habroxia")).to.be.eq("habroxia-switch");
    expect(buildSlug("switch")("Arcade Archives TIME TUNNEL")).to.be.eq("arcade-archives-time-tunnel-switch");
    expect(buildSlug("switch")("Race with Ryan")).to.be.eq("race-with-ryan-switch");
    expect(buildSlug("switch")("One-Way Ticket")).to.be.eq("one-way-ticket-switch");
    expect(buildSlug("switch")("Ice Age Scrat's Nutty Adventure")).to.be.eq("ice-age-scrats-nutty-adventure-switch");
    expect(buildSlug("switch")("Paper Train")).to.be.eq("paper-train-switch");
    expect(buildSlug("switch")("Ball Attraction")).to.be.eq("ball-attraction-switch");
    expect(buildSlug("switch")("BurgerTime Party!")).to.be.eq("burgertime-party-switch");
    expect(buildSlug("switch")("Sayonara Wild Hearts")).to.be.eq("sayonara-wild-hearts-switch");
    expect(buildSlug("switch")("Darksiders II Deathinitive Edition")).to.be.eq(
      "darksiders-ii-deathinitive-edition-switch",
    );
    expect(buildSlug("switch")("Cubixx")).to.be.eq("cubixx-switch");
    expect(buildSlug("switch")("Barry Bradford's Putt Panic Party")).to.be.eq(
      "barry-bradfords-putt-panic-party-switch",
    );
    expect(buildSlug("switch")("Button Button Up!")).to.be.eq("button-button-up-switch");
    expect(buildSlug("switch")("Reaper")).to.be.eq("reaper-switch");
    expect(buildSlug("switch")("Hexagroove: Tactical DJ")).to.be.eq("hexagroove-tactical-dj-switch");
    expect(buildSlug("switch")("Spirit Hunter: NG")).to.be.eq("spirit-hunter-ng-switch");
    expect(buildSlug("switch")("DRAGON QUEST")).to.be.eq("dragon-quest-switch");
    expect(buildSlug("switch")("DRAGON QUEST II: Luminaries of the Legendary Line")).to.be.eq(
      "dragon-quest-ii-luminaries-of-the-legendary-line-switch",
    );
    expect(buildSlug("switch")("DRAGON QUEST III: The Seeds of Salvation")).to.be.eq(
      "dragon-quest-iii-the-seeds-of-salvation-switch",
    );
    expect(buildSlug("switch")("Neo Cab")).to.be.eq("neo-cab-switch");
    expect(buildSlug("switch")("Talk it Out: Handheld Game")).to.be.eq("talk-it-out-handheld-game-switch");
    expect(buildSlug("switch")("Rimelands: Hammer of Thor")).to.be.eq("rimelands-hammer-of-thor-switch");
    expect(buildSlug("switch")("2048 Battles")).to.be.eq("2048-battles-switch");
    expect(buildSlug("switch")("Chop is Dish")).to.be.eq("chop-is-dish-switch");
    expect(buildSlug("switch")("Baldur's Gate and Baldur's Gate II: Enhanced Editions")).to.be.eq(
      "baldurs-gate-and-baldurs-gate-ii-enhanced-editions-switch",
    );
    expect(buildSlug("switch")("Petoons Party")).to.be.eq("petoons-party-switch");
    expect(buildSlug("switch")("Dreaming Canvas")).to.be.eq("dreaming-canvas-switch");
    expect(buildSlug("switch")("Detective Dolittle")).to.be.eq("detective-dolittle-switch");
    expect(buildSlug("switch")("Cyber Protocol")).to.be.eq("cyber-protocol-switch");
    expect(buildSlug("switch")("The Tiny Bang Story")).to.be.eq("the-tiny-bang-story-switch");
    expect(buildSlug("switch")("YU-NO: A girl who chants love at the bound of this world")).to.be.eq(
      "yu-no-a-girl-who-chants-love-at-the-bound-of-this-world-switch",
    );
    expect(buildSlug("switch")("Fight'N Rage")).to.be.eq("fightn-rage-switch");
    expect(buildSlug("switch")("A Winter's Daydream")).to.be.eq("a-winters-daydream-switch");
    expect(buildSlug("switch")("Destiny Connect: Tick-Tock Travelers")).to.be.eq(
      "destiny-connect-tick-tock-travelers-switch",
    );
    expect(buildSlug("switch")("Super Monkey Ball: Banana Blitz HD")).to.be.eq(
      "super-monkey-ball-banana-blitz-hd-switch",
    );
    expect(buildSlug("switch")("Reventure")).to.be.eq("reventure-switch");
    expect(buildSlug("switch")("STELLATUM")).to.be.eq("stellatum-switch");
    expect(buildSlug("switch")("One Night Stand")).to.be.eq("one-night-stand-switch");
    expect(buildSlug("switch")("Bee Simulator")).to.be.eq("bee-simulator-switch");
    expect(buildSlug("switch")("Old School RPG Bundle")).to.be.eq("old-school-rpg-bundle-switch");
    expect(buildSlug("switch")("Dusk Diver")).to.be.eq("dusk-diver-switch");
    expect(buildSlug("switch")("Super Crate Box")).to.be.eq("super-crate-box-switch");
    expect(buildSlug("switch")("Children of Morta")).to.be.eq("children-of-morta-switch");
    expect(buildSlug("switch")("Rabi-Ribi")).to.be.eq("rabi-ribi-switch");
    expect(buildSlug("switch")("Tic-Tac-Letters by POWGI")).to.be.eq("tic-tac-letters-by-powgi-switch");
    expect(buildSlug("switch")("WRC 8 FIA World Rally Championship")).to.be.eq(
      "wrc-8-fia-world-rally-championship-switch",
    );
    expect(buildSlug("switch")("fault - milestone one")).to.be.eq("fault-milestone-one-switch");
    expect(buildSlug("switch")("Beats Runner")).to.be.eq("beats-runner-switch");
    expect(buildSlug("switch")("Contraptions")).to.be.eq("contraptions-switch");
    expect(buildSlug("switch")("Super Street: Racer")).to.be.eq("super-street-racer-switch");
    expect(buildSlug("switch")("Freecell Solitaire Deluxe")).to.be.eq("freecell-solitaire-deluxe-switch");
    expect(buildSlug("switch")("Soul Knight")).to.be.eq("soul-knight-switch");
    expect(buildSlug("switch")("StarBlox Inc.")).to.be.eq("starblox-inc-switch");
    expect(buildSlug("switch")("Community Inc")).to.be.eq("community-inc-switch");
    expect(buildSlug("switch")("Felix The Reaper")).to.be.eq("felix-the-reaper-switch");
    expect(buildSlug("switch")("Spooky Ghosts Dot Com")).to.be.eq("spooky-ghosts-dot-com-switch");
    expect(buildSlug("switch")("Sublevel Zero Redux")).to.be.eq("sublevel-zero-redux-switch");
    expect(buildSlug("switch")("Battle Planet - Judgement Day")).to.be.eq("battle-planet-judgement-day-switch");
    expect(buildSlug("switch")("Planescape: Torment and Icewind Dale: Enhanced Editions")).to.be.eq(
      "planescape-torment-and-icewind-dale-enhanced-editions-switch",
    );
    expect(buildSlug("switch")("Teddy Gangs")).to.be.eq("teddy-gangs-switch");
    expect(buildSlug("switch")("Mable & The Wood")).to.be.eq("mable-and-the-wood-switch");
    expect(buildSlug("switch")("Soulslayer")).to.be.eq("soulslayer-switch");
    expect(buildSlug("switch")("STAR WARS™ Jedi Knight II: Jedi Outcast™")).to.be.eq(
      "star-wars-jedi-knight-ii-jedi-outcast-switch",
    );
    expect(buildSlug("switch")("Pet Shop Snacks")).to.be.eq("pet-shop-snacks-switch");
    expect(buildSlug("switch")("Arcade Archives Karate Champ")).to.be.eq("arcade-archives-karate-champ-switch");
    expect(buildSlug("switch")("Little Briar Rose")).to.be.eq("little-briar-rose-switch");
    expect(buildSlug("switch")("Pocket Stables")).to.be.eq("pocket-stables-switch");
    expect(buildSlug("switch")("Lethis - Path of Progress")).to.be.eq("lethis-path-of-progress-switch");
    expect(buildSlug("switch")("Creepy Brawlers")).to.be.eq("creepy-brawlers-switch");
    expect(buildSlug("switch")("A Knight's Quest")).to.be.eq("a-knights-quest-switch");
    expect(buildSlug("switch")("Family Tree")).to.be.eq("family-tree-switch");
    expect(buildSlug("switch")("Bibi & Tina at the horse farm")).to.be.eq("bibi-and-tina-at-the-horse-farm-switch");
    expect(buildSlug("switch")("Silk")).to.be.eq("silk-switch");
    expect(buildSlug("switch")("The Big Journey")).to.be.eq("the-big-journey-switch");
    expect(buildSlug("switch")("Queen's Quest 4: Sacred Truce")).to.be.eq("queens-quest-4-sacred-truce-switch");
    expect(buildSlug("switch")("Monochrome Order")).to.be.eq("monochrome-order-switch");
    expect(buildSlug("switch")("Secret Files Sam Peters")).to.be.eq("secret-files-sam-peters-switch");
    expect(buildSlug("switch")("Doraemon Story of Seasons")).to.be.eq("doraemon-story-of-seasons-switch");
    expect(buildSlug("switch")("Super Box Land Demake")).to.be.eq("super-box-land-demake-switch");
    expect(buildSlug("switch")("SEGA AGES Columns II: A Voyage Through Time")).to.be.eq(
      "sega-ages-columns-ii-a-voyage-through-time-switch",
    );
    expect(buildSlug("switch")("SEGA AGES Ichidant-R")).to.be.eq("sega-ages-ichidant-r-switch");
    expect(buildSlug("switch")("Duped")).to.be.eq("duped-switch");
    expect(buildSlug("switch")("Safari Pinball")).to.be.eq("safari-pinball-switch");
    expect(buildSlug("switch")("The Stretchers")).to.be.eq("the-stretchers-switch");
    expect(buildSlug("switch")("Cat Quest II")).to.be.eq("cat-quest-ii-switch");
    expect(buildSlug("switch")("BDSM: Big Drunk Satanic Massacre")).to.be.eq("bdsm-big-drunk-satanic-massacre-switch");
    expect(buildSlug("switch")("Battlestar Galactica Deadlock")).to.be.eq("battlestar-galactica-deadlock-switch");
    expect(buildSlug("switch")("Eliza")).to.be.eq("eliza-switch");
    expect(buildSlug("switch")("Worse Than Death")).to.be.eq("worse-than-death-switch");
    expect(buildSlug("switch")("Billy Bomber")).to.be.eq("billy-bomber-switch");
    expect(buildSlug("switch")("Day and Night")).to.be.eq("day-and-night-switch");
    expect(buildSlug("switch")("Eternal Card Game")).to.be.eq("eternal-card-game-switch");
    expect(buildSlug("switch")("Midnight Evil")).to.be.eq("midnight-evil-switch");
    expect(buildSlug("switch")("River City Melee Mach!!")).to.be.eq("river-city-melee-mach-switch");
    expect(buildSlug("switch")("Gleaner Heights")).to.be.eq("gleaner-heights-switch");
    expect(buildSlug("switch")("ZikSquare")).to.be.eq("ziksquare-switch");
    expect(buildSlug("switch")("Yuri")).to.be.eq("yuri-switch");
    expect(buildSlug("switch")("Arcade Archives THE LEGEND OF KAGE")).to.be.eq(
      "arcade-archives-the-legend-of-kage-switch",
    );
    expect(buildSlug("switch")("The Bradwell Conspiracy")).to.be.eq("the-bradwell-conspiracy-switch");
    expect(buildSlug("switch")("Where the Bees Make Honey")).to.be.eq("where-the-bees-make-honey-switch");
    expect(buildSlug("switch")("CrunchTime")).to.be.eq("crunchtime-switch");
    expect(buildSlug("switch")("Digimon Story Cyber Sleuth: Complete Edition")).to.be.eq(
      "digimon-story-cyber-sleuth-complete-edition-switch",
    );
    expect(buildSlug("switch")("Dr Kawashima’s Brain Training for Nintendo Switch")).to.be.eq(
      "dr-kawashima-s-brain-training-for-nintendo-switch",
    );
    expect(buildSlug("switch")("King's Heir: Rise to the Throne")).to.be.eq("kings-heir-rise-to-the-throne-switch");
    expect(buildSlug("switch")("Stranded Sails - Explorers of the Cursed Islands")).to.be.eq(
      "stranded-sails-explorers-of-the-cursed-islands-switch",
    );
    expect(buildSlug("switch")("Corpse Party: Blood Drive")).to.be.eq("corpse-party-blood-drive-switch");
    expect(buildSlug("switch")("Puzzle Book")).to.be.eq("puzzle-book-switch");
    expect(buildSlug("switch")("Shipped")).to.be.eq("shipped-switch");
    expect(buildSlug("switch")("AeternoBlade II")).to.be.eq("aeternoblade-ii-switch");
    expect(buildSlug("switch")("Sparklite")).to.be.eq("sparklite-switch");
    expect(buildSlug("switch")("Ni No Kuni Remastered: Wrath of the White Witch")).to.be.eq(
      "ni-no-kuni-remastered-wrath-of-the-white-witch-switch",
    );
    expect(buildSlug("switch")("Dark Devotion")).to.be.eq("dark-devotion-switch");
    expect(buildSlug("switch")("Alchemist's Castle")).to.be.eq("alchemists-castle-switch");
    expect(buildSlug("switch")("Asterix & Obelix XXL3: The Crystal Menhir")).to.be.eq(
      "asterix-and-obelix-xxl3-the-crystal-menhir-switch",
    );
    expect(buildSlug("switch")("Disgaea 4 Complete+")).to.be.eq("disgaea-4-complete-switch");
    expect(buildSlug("switch")("Just Ignore Them")).to.be.eq("just-ignore-them-switch");
    expect(buildSlug("switch")("Xeno Crisis")).to.be.eq("xeno-crisis-switch");
    expect(buildSlug("switch")("Anthill")).to.be.eq("anthill-switch");
    expect(buildSlug("switch")("Straimium Immortaly")).to.be.eq("straimium-immortaly-switch");
    expect(buildSlug("switch")("Spaceland")).to.be.eq("spaceland-switch");
    expect(buildSlug("switch")("Override: Mech City Brawl – Super Charged Mega Edition")).to.be.eq(
      "override-mech-city-brawl-super-charged-mega-edition-switch",
    );
    expect(buildSlug("switch")("Miniature - The Story Puzzle")).to.be.eq("miniature-the-story-puzzle-switch");
    expect(buildSlug("switch")("Harvest Moon: Mad Dash")).to.be.eq("harvest-moon-mad-dash-switch");
    expect(buildSlug("switch")("Tangle Tower")).to.be.eq("tangle-tower-switch");
    expect(buildSlug("switch")("Oniken: Unstoppable Edition & Odallus: The Dark Call Bundle")).to.be.eq(
      "oniken-unstoppable-edition-and-odallus-the-dark-call-bundle-switch",
    );
    expect(buildSlug("switch")("Skullgirls 2nd Encore")).to.be.eq("skullgirls-2nd-encore-switch");
    expect(buildSlug("switch")("Worbital")).to.be.eq("worbital-switch");
    expect(buildSlug("switch")("Kine")).to.be.eq("kine-switch");
    expect(buildSlug("switch")("A Hat in Time")).to.be.eq("a-hat-in-time-switch");
    expect(buildSlug("switch")("Pixel Gladiator")).to.be.eq("pixel-gladiator-switch");
    expect(buildSlug("switch")("The Jackbox Party Pack 6")).to.be.eq("the-jackbox-party-pack-6-switch");
    expect(buildSlug("switch")("Roof Rage")).to.be.eq("roof-rage-switch");
    expect(buildSlug("switch")("Soul Searching")).to.be.eq("soul-searching-switch");
    expect(buildSlug("switch")("Zumba® Burn It Up!")).to.be.eq("zumba-burn-it-up-switch");
    expect(buildSlug("switch")("Ghost Blade HD")).to.be.eq("ghost-blade-hd-switch");
    expect(buildSlug("switch")("Garfield Kart Furious Racing")).to.be.eq("garfield-kart-furious-racing-switch");
    expect(buildSlug("switch")("Arcade Archives VS. CASTLEVANIA")).to.be.eq("arcade-archives-vs-castlevania-switch");
    expect(buildSlug("switch")("Tower Climb")).to.be.eq("tower-climb-switch");
    expect(buildSlug("switch")("Winter Sports Games")).to.be.eq("winter-sports-games-switch");
    expect(buildSlug("switch")("MilkChoco")).to.be.eq("milkchoco-switch");
    expect(buildSlug("switch")("Monaco: Complete Edition")).to.be.eq("monaco-complete-edition-switch");
    expect(buildSlug("switch")("Sea Salt")).to.be.eq("sea-salt-switch");
    expect(buildSlug("switch")("bayala - the game")).to.be.eq("bayala-the-game-switch");
    expect(buildSlug("switch")("Rawr-Off")).to.be.eq("rawr-off-switch");
    expect(buildSlug("switch")("Spirit Roots")).to.be.eq("spirit-roots-switch");
    expect(buildSlug("switch")("Pizza Bar Tycoon")).to.be.eq("pizza-bar-tycoon-switch");
    expect(buildSlug("switch")("Horror Pinball Bundle")).to.be.eq("horror-pinball-bundle-switch");
    expect(buildSlug("switch")("puzzlement")).to.be.eq("puzzlement-switch");
    expect(buildSlug("switch")("Windmill Kings")).to.be.eq("windmill-kings-switch");
    expect(buildSlug("switch")("Earthfall: Alien Horde")).to.be.eq("earthfall-alien-horde-switch");
    expect(buildSlug("switch")("Dark Veer")).to.be.eq("dark-veer-switch");
    expect(buildSlug("switch")("Fear of Traffic")).to.be.eq("fear-of-traffic-switch");
    expect(buildSlug("switch")("The Park")).to.be.eq("the-park-switch");
    expect(buildSlug("switch")("PBA Pro Bowling")).to.be.eq("pba-pro-bowling-switch");
    expect(buildSlug("switch")("Door Kickers: Action Squad")).to.be.eq("door-kickers-action-squad-switch");
    expect(buildSlug("switch")("Tennis Go")).to.be.eq("tennis-go-switch");
    expect(buildSlug("switch")("Super Mega Space Blaster Special Turbo")).to.be.eq(
      "super-mega-space-blaster-special-turbo-switch",
    );
    expect(buildSlug("switch")("Just Dance® 2020")).to.be.eq("just-dance-2020-switch");
    expect(buildSlug("switch")("Deep Space Rush")).to.be.eq("deep-space-rush-switch");
    expect(buildSlug("switch")("Ghost Parade")).to.be.eq("ghost-parade-switch");
    expect(buildSlug("switch")("Ultra Off-Road 2019: Alaska")).to.be.eq("ultra-off-road-2019-alaska-switch");
    expect(buildSlug("switch")("Tamashii")).to.be.eq("tamashii-switch");
    expect(buildSlug("switch")("Disney Classic Games: Aladdin and The Lion King")).to.be.eq(
      "disney-classic-games-aladdin-and-the-lion-king-switch",
    );
    expect(buildSlug("switch")("Polyroll")).to.be.eq("polyroll-switch");
    expect(buildSlug("switch")("Yaga")).to.be.eq("yaga-switch");
    expect(buildSlug("switch")("Sky Gamblers - Storm Raiders 2")).to.be.eq("sky-gamblers-storm-raiders-2-switch");
    expect(buildSlug("switch")("Double Switch - 25th Anniversary Edition")).to.be.eq(
      "double-switch-25th-anniversary-edition-switch",
    );
    expect(buildSlug("switch")("Réussir : Code de la Route (French Highway Code)")).to.be.eq(
      "reussir-code-de-la-route-french-highway-code-switch",
    );
    expect(buildSlug("switch")("Mononoke Slashdown")).to.be.eq("mononoke-slashdown-switch");
    expect(buildSlug("switch")("The Legend of Dark Witch")).to.be.eq("the-legend-of-dark-witch-switch");
    expect(buildSlug("switch")("Skybolt Zack")).to.be.eq("skybolt-zack-switch");
    expect(buildSlug("switch")("Vortex Attack EX")).to.be.eq("vortex-attack-ex-switch");
    expect(buildSlug("switch")("Desktop Rugby")).to.be.eq("desktop-rugby-switch");
    expect(buildSlug("switch")("Juicy Realm")).to.be.eq("juicy-realm-switch");
    expect(buildSlug("switch")("Otokomizu")).to.be.eq("otokomizu-switch");
    expect(buildSlug("switch")("Squidgies Takeover")).to.be.eq("squidgies-takeover-switch");
    expect(buildSlug("switch")("Party Treats")).to.be.eq("party-treats-switch");
    expect(buildSlug("switch")("Arcade Archives GOLF")).to.be.eq("arcade-archives-golf-switch");
    expect(buildSlug("switch")("Let's Sing 2020")).to.be.eq("lets-sing-2020-switch");
    expect(buildSlug("switch")("Perseverance")).to.be.eq("perseverance-switch");
    expect(buildSlug("switch")("One Person Story")).to.be.eq("one-person-story-switch");
    expect(buildSlug("switch")("Disney TSUM TSUM FESTIVAL")).to.be.eq("disney-tsum-tsum-festival-switch");
    expect(buildSlug("switch")("Jewel Rotation")).to.be.eq("jewel-rotation-switch");
    expect(buildSlug("switch")("The Mims Beginning")).to.be.eq("the-mims-beginning-switch");
    expect(buildSlug("switch")("STURMWIND EX")).to.be.eq("sturmwind-ex-switch");
    expect(buildSlug("switch")("Ships")).to.be.eq("ships-switch");
    expect(buildSlug("switch")("64.0")).to.be.eq("640-switch");
    expect(buildSlug("switch")("Mountain Rescue Simulator")).to.be.eq("mountain-rescue-simulator-switch");
    expect(buildSlug("switch")("Galactic Defence Squadron")).to.be.eq("galactic-defence-squadron-switch");
    expect(buildSlug("switch")("Delta Squad")).to.be.eq("delta-squad-switch");
    expect(buildSlug("switch")("Atelier Ryza: Ever Darkness and the Secret Hideout")).to.be.eq(
      "atelier-ryza-ever-darkness-and-the-secret-hideout-switch",
    );
    expect(buildSlug("switch")("Headsnatchers")).to.be.eq("headsnatchers-switch");
    expect(buildSlug("switch")("Construction Simulator 2 US - Console Edition")).to.be.eq(
      "construction-simulator-2-us-console-edition-switch",
    );
    expect(buildSlug("switch")("Agony")).to.be.eq("agony-switch");
    expect(buildSlug("switch")("Munchkin: Quacked Quest")).to.be.eq("munchkin-quacked-quest-switch");
    expect(buildSlug("switch")("Incredible Mandy")).to.be.eq("incredible-mandy-switch");
    expect(buildSlug("switch")("Strike Force - War on Terror")).to.be.eq("strike-force-war-on-terror-switch");
    expect(buildSlug("switch")("Rocket Wars")).to.be.eq("rocket-wars-switch");
    expect(buildSlug("switch")("MONKEY BARRELS")).to.be.eq("monkey-barrels-switch");
    expect(buildSlug("switch")("The Manga Works")).to.be.eq("the-manga-works-switch");
    expect(buildSlug("switch")("Tokyo Dark – Remembrance –")).to.be.eq("tokyo-dark-remembrance-switch");
    expect(buildSlug("switch")("STAY COOL, KOBAYASHI-SAN!: A RIVER CITY RANSOM STORY")).to.be.eq(
      "stay-cool-kobayashi-san-a-river-city-ransom-story-switch",
    );
    expect(buildSlug("switch")("Perils of Baking")).to.be.eq("perils-of-baking-switch");
    expect(buildSlug("switch")("Labyrinth of the Witch")).to.be.eq("labyrinth-of-the-witch-switch");
    expect(buildSlug("switch")("Strange Telephone")).to.be.eq("strange-telephone-switch");
    expect(buildSlug("switch")("Asdivine Kamura")).to.be.eq("asdivine-kamura-switch");
    expect(buildSlug("switch")("Desktop Dodgeball")).to.be.eq("desktop-dodgeball-switch");
    expect(buildSlug("switch")("Black Future '88")).to.be.eq("black-future-88-switch");
    expect(buildSlug("switch")("The Wardrobe: Even Better Edition")).to.be.eq(
      "the-wardrobe-even-better-edition-switch",
    );
    expect(buildSlug("switch")("Arcade Archives Mr.GOEMON")).to.be.eq("arcade-archives-mrgoemon-switch");
    expect(buildSlug("switch")("House of Golf")).to.be.eq("house-of-golf-switch");
    expect(buildSlug("switch")("Baobabs Mausoleum Ep.3: Un Pato en Muertoburgo")).to.be.eq(
      "baobabs-mausoleum-ep3-un-pato-en-muertoburgo-switch",
    );
    expect(buildSlug("switch")("THE GRISAIA TRILOGY")).to.be.eq("the-grisaia-trilogy-switch");
    expect(buildSlug("switch")("Romancing SaGa 3")).to.be.eq("romancing-saga-3-switch");
    expect(buildSlug("switch")("Push the Crate")).to.be.eq("push-the-crate-switch");
    expect(buildSlug("switch")("8-Ball Pocket")).to.be.eq("8-ball-pocket-switch");
    expect(buildSlug("switch")("Woven")).to.be.eq("woven-switch");
    expect(buildSlug("switch")("Ritual: Crown of Horns")).to.be.eq("ritual-crown-of-horns-switch");
    expect(buildSlug("switch")("Tactical Mind 2")).to.be.eq("tactical-mind-2-switch");
    expect(buildSlug("switch")("Twister Road")).to.be.eq("twister-road-switch");
    expect(buildSlug("switch")("Football Game")).to.be.eq("football-game-switch");
    expect(buildSlug("switch")("Truck Simulator USA")).to.be.eq("truck-simulator-usa-switch");
    expect(buildSlug("switch")("Fractured Minds")).to.be.eq("fractured-minds-switch");
    expect(buildSlug("switch")("MEANDERS")).to.be.eq("meanders-switch");
    expect(buildSlug("switch")("ANIMUS: Harbinger")).to.be.eq("animus-harbinger-switch");
    expect(buildSlug("switch")("Thief of Thieves: Season One")).to.be.eq("thief-of-thieves-season-one-switch");
    expect(buildSlug("switch")("The Lord of the Rings: Adventure Card Game")).to.be.eq(
      "the-lord-of-the-rings-adventure-card-game-switch",
    );
    expect(buildSlug("switch")("DRAW CHILLY")).to.be.eq("draw-chilly-switch");
    expect(buildSlug("switch")("SIMULACRA")).to.be.eq("simulacra-switch");
    expect(buildSlug("switch")("Zen Chess Collection")).to.be.eq("zen-chess-collection-switch");
    expect(buildSlug("switch")("Mad Games Tycoon")).to.be.eq("mad-games-tycoon-switch");
    expect(buildSlug("switch")("holedown")).to.be.eq("holedown-switch");
    expect(buildSlug("switch")("Riverbond")).to.be.eq("riverbond-switch");
    expect(buildSlug("switch")("Arcade Archives T.N.K III")).to.be.eq("arcade-archives-tnk-iii-switch");
    expect(buildSlug("switch")("Mars Power Industries")).to.be.eq("mars-power-industries-switch");
    expect(buildSlug("switch")("Sudoku Relax 3 Autumn Leaves")).to.be.eq("sudoku-relax-3-autumn-leaves-switch");
    expect(buildSlug("switch")("HAUNTED: Halloween '86")).to.be.eq("haunted-halloween-86-switch");
    expect(buildSlug("switch")("Balthazar's Dream")).to.be.eq("balthazars-dream-switch");
    expect(buildSlug("switch")("BLACKSAD: Under the Skin")).to.be.eq("blacksad-under-the-skin-switch");
    expect(buildSlug("switch")("Must Dash Amigos")).to.be.eq("must-dash-amigos-switch");
    expect(buildSlug("switch")("Tick Tock: A Tale for Two")).to.be.eq("tick-tock-a-tale-for-two-switch");
    expect(buildSlug("switch")("Jamestown+")).to.be.eq("jamestown-switch");
    expect(buildSlug("switch")("REKT! High Octane Stunts")).to.be.eq("rekt-high-octane-stunts-switch");
    expect(buildSlug("switch")("Rally Road")).to.be.eq("rally-road-switch");
    expect(buildSlug("switch")("Still There")).to.be.eq("still-there-switch");
    expect(buildSlug("switch")("Go! Fish Go!")).to.be.eq("go-fish-go-switch");
    expect(buildSlug("switch")("Overlanders")).to.be.eq("overlanders-switch");
    expect(buildSlug("switch")("Bubble Bobble 4 Friends")).to.be.eq("bubble-bobble-4-friends-switch");
    expect(buildSlug("switch")("Dead End Job")).to.be.eq("dead-end-job-switch");
    expect(buildSlug("switch")("Narcos: Rise of the Cartels")).to.be.eq("narcos-rise-of-the-cartels-switch");
    expect(buildSlug("switch")("Bloo Kid 2")).to.be.eq("bloo-kid-2-switch");
    expect(buildSlug("switch")("Home Sheep Home: Farmageddon Party Edition")).to.be.eq(
      "home-sheep-home-farmageddon-party-edition-switch",
    );
    expect(buildSlug("switch")("Raining Blobs")).to.be.eq("raining-blobs-switch");
    expect(buildSlug("switch")("SaGa SCARLET GRACE: AMBITIONS™")).to.be.eq("saga-scarlet-grace-ambitions-switch");
    expect(buildSlug("switch")("Widget Satchel")).to.be.eq("widget-satchel-switch");
    expect(buildSlug("switch")("Story of a Gladiator")).to.be.eq("story-of-a-gladiator-switch");
    expect(buildSlug("switch")("Demon Pit")).to.be.eq("demon-pit-switch");
    expect(buildSlug("switch")("SoccerDie: Cosmic Cup")).to.be.eq("soccerdie-cosmic-cup-switch");
    expect(buildSlug("switch")("Real Heroes: Firefighter")).to.be.eq("real-heroes-firefighter-switch");
    expect(buildSlug("switch")("XenoRaptor")).to.be.eq("xenoraptor-switch");
    expect(buildSlug("switch")("Big Pharma")).to.be.eq("big-pharma-switch");
    expect(buildSlug("switch")("Tiny Gladiators")).to.be.eq("tiny-gladiators-switch");
    expect(buildSlug("switch")("Scarlett Mysteries: Cursed Child")).to.be.eq("scarlett-mysteries-cursed-child-switch");
    expect(buildSlug("switch")("GROOVE COASTER WAI WAI PARTY!!!!")).to.be.eq("groove-coaster-wai-wai-party-switch");
    expect(buildSlug("switch")("Electronic Super Joy")).to.be.eq("electronic-super-joy-switch");
    expect(buildSlug("switch")("Castle of no Escape 2")).to.be.eq("castle-of-no-escape-2-switch");
    expect(buildSlug("switch")("Color.Motif Deluxe")).to.be.eq("colormotif-deluxe-switch");
    expect(buildSlug("switch")("Biolab Wars")).to.be.eq("biolab-wars-switch");
    expect(buildSlug("switch")("Arcade Archives Yie Ar KUNG-FU")).to.be.eq("arcade-archives-yie-ar-kung-fu-switch");
    expect(buildSlug("switch")("Some Distant Memory")).to.be.eq("some-distant-memory-switch");
    expect(buildSlug("switch")("Decay of Logos")).to.be.eq("decay-of-logos-switch");
    expect(buildSlug("switch")("The Unicorn Princess")).to.be.eq("the-unicorn-princess-switch");
    expect(buildSlug("switch")("Alien: Isolation")).to.be.eq("alien-isolation-switch");
    expect(buildSlug("switch")("League of the Shield")).to.be.eq("league-of-the-shield-switch");
    expect(buildSlug("switch")("Beast Quest")).to.be.eq("beast-quest-switch");
    expect(buildSlug("switch")("Event Horizon: Space Defense")).to.be.eq("event-horizon-space-defense-switch");
    expect(buildSlug("switch")("Farabel")).to.be.eq("farabel-switch");
    expect(buildSlug("switch")("Lots of Slots")).to.be.eq("lots-of-slots-switch");
    expect(buildSlug("switch")("Pine")).to.be.eq("pine-switch");
    expect(buildSlug("switch")("JigSaw Solace")).to.be.eq("jigsaw-solace-switch");
    expect(buildSlug("switch")("Where the Water Tastes Like Wine")).to.be.eq("where-the-water-tastes-like-wine-switch");
    expect(buildSlug("switch")("Bouncy Bob 2")).to.be.eq("bouncy-bob-2-switch");
    expect(buildSlug("switch")("SuperEpic: The Entertainment War")).to.be.eq("superepic-the-entertainment-war-switch");
    expect(buildSlug("switch")("Marblelous Animals")).to.be.eq("marblelous-animals-switch");
    expect(buildSlug("switch")("Breathing Fear")).to.be.eq("breathing-fear-switch");
    expect(buildSlug("switch")("Five Nights at Freddy's")).to.be.eq("five-nights-at-freddys-switch");
    expect(buildSlug("switch")("Five Nights at Freddy's 2")).to.be.eq("five-nights-at-freddys-2-switch");
    expect(buildSlug("switch")("Five Nights at Freddy's 3")).to.be.eq("five-nights-at-freddys-3-switch");
    expect(buildSlug("switch")("Call Of Juarez: Gunslinger")).to.be.eq("call-of-juarez-gunslinger-switch");
    expect(buildSlug("switch")("Five Nights at Freddy's 4")).to.be.eq("five-nights-at-freddys-4-switch");
    expect(buildSlug("switch")("FoxyLand")).to.be.eq("foxyland-switch");
    expect(buildSlug("switch")("Cube Creator X")).to.be.eq("cube-creator-x-switch");
    expect(buildSlug("switch")("Chameleon")).to.be.eq("chameleon-switch");
    expect(buildSlug("switch")("Knowledge Trainer: Trivia")).to.be.eq("knowledge-trainer-trivia-switch");
    expect(buildSlug("switch")("Regions of Ruin")).to.be.eq("regions-of-ruin-switch");
    expect(buildSlug("switch")("True Fear: Forsaken Souls - Part 2")).to.be.eq(
      "true-fear-forsaken-souls-part-2-switch",
    );
    expect(buildSlug("switch")("SNACK WORLD: THE DUNGEON CRAWL – GOLD")).to.be.eq(
      "snack-world-the-dungeon-crawl-gold-switch",
    );
    expect(buildSlug("switch")("Aldred Knight")).to.be.eq("aldred-knight-switch");
    expect(buildSlug("switch")("Monster Jam Steel Titans")).to.be.eq("monster-jam-steel-titans-switch");
    expect(buildSlug("switch")("Defenders of Ekron: Definitive Edition")).to.be.eq(
      "defenders-of-ekron-definitive-edition-switch",
    );
    expect(buildSlug("switch")("Arcade Archives IN THE HUNT")).to.be.eq("arcade-archives-in-the-hunt-switch");
    expect(buildSlug("switch")("Gemstone Keeper")).to.be.eq("gemstone-keeper-switch");
    expect(buildSlug("switch")("Nyan Cat: Lost in Space")).to.be.eq("nyan-cat-lost-in-space-switch");
    expect(buildSlug("switch")("Indie Gems Bundle - Explosions Edition")).to.be.eq(
      "indie-gems-bundle-explosions-edition-switch",
    );
    expect(buildSlug("switch")("Amazing Brick Breaker")).to.be.eq("amazing-brick-breaker-switch");
    expect(buildSlug("switch")("Skelittle: A Giant Party!")).to.be.eq("skelittle-a-giant-party-switch");
    expect(buildSlug("switch")("NekoMiko")).to.be.eq("nekomiko-switch");
    expect(buildSlug("switch")("Professional Farmer: American Dream")).to.be.eq(
      "professional-farmer-american-dream-switch",
    );
    expect(buildSlug("switch")("TheNightfall")).to.be.eq("thenightfall-switch");
    expect(buildSlug("switch")("Trover Saves the Universe")).to.be.eq("trover-saves-the-universe-switch");
    expect(buildSlug("switch")("Monster Bugs Eat People")).to.be.eq("monster-bugs-eat-people-switch");
    expect(buildSlug("switch")("Happy Animals Bowling")).to.be.eq("happy-animals-bowling-switch");
    expect(buildSlug("switch")("Drunk-Fu: Wasted Masters")).to.be.eq("drunk-fu-wasted-masters-switch");
    expect(buildSlug("switch")("Deathtrap Dungeon Trilogy")).to.be.eq("deathtrap-dungeon-trilogy-switch");
    expect(buildSlug("switch")("Nonograms Prophecy")).to.be.eq("nonograms-prophecy-switch");
    expect(buildSlug("switch")("Strike Force Kitty")).to.be.eq("strike-force-kitty-switch");
    expect(buildSlug("switch")("Railway Empire - Nintendo Switch Edition")).to.be.eq(
      "railway-empire-nintendo-switch-edition-switch",
    );
    expect(buildSlug("switch")("Immortal Planet")).to.be.eq("immortal-planet-switch");
    expect(buildSlug("switch")("Rush Rally 3")).to.be.eq("rush-rally-3-switch");
    expect(buildSlug("switch")("Space Pioneer")).to.be.eq("space-pioneer-switch");
    expect(buildSlug("switch")("Rescue Tale")).to.be.eq("rescue-tale-switch");
    expect(buildSlug("switch")("Assassin’s Creed®: The Rebel Collection")).to.be.eq(
      "assassin-s-creed-the-rebel-collection-switch",
    );
    expect(buildSlug("switch")("Tools Up!")).to.be.eq("tools-up-switch");
    expect(buildSlug("switch")("Down to Hell")).to.be.eq("down-to-hell-switch");
    expect(buildSlug("switch")("Bowling")).to.be.eq("bowling-switch");
    expect(buildSlug("switch")("Mirror")).to.be.eq("mirror-switch");
    expect(buildSlug("switch")("Fishing: Barents Sea Complete Edition")).to.be.eq(
      "fishing-barents-sea-complete-edition-switch",
    );
    expect(buildSlug("switch")("Chaos on Deponia")).to.be.eq("chaos-on-deponia-switch");
    expect(buildSlug("switch")("March to a Million")).to.be.eq("march-to-a-million-switch");
    expect(buildSlug("switch")("DreamBall")).to.be.eq("dreamball-switch");
    expect(buildSlug("switch")("Voxel Galaxy")).to.be.eq("voxel-galaxy-switch");
    expect(buildSlug("switch")("Arcade Archives HYPER SPORTS")).to.be.eq("arcade-archives-hyper-sports-switch");
    expect(buildSlug("switch")("Maitetsu: Pure Station")).to.be.eq("maitetsu-pure-station-switch");
    expect(buildSlug("switch")("Junior League Sports 3-in-1 Collection")).to.be.eq(
      "junior-league-sports-3-in-1-collection-switch",
    );
    expect(buildSlug("switch")("Junior League Sports - Soccer")).to.be.eq("junior-league-sports-soccer-switch");
    expect(buildSlug("switch")("Junior League Sports - Ice Hockey")).to.be.eq("junior-league-sports-ice-hockey-switch");
    expect(buildSlug("switch")("Junior League Sports - Basketball")).to.be.eq("junior-league-sports-basketball-switch");
    expect(buildSlug("switch")("Space Blaze")).to.be.eq("space-blaze-switch");
    expect(buildSlug("switch")("Wizards of Brandel")).to.be.eq("wizards-of-brandel-switch");
    expect(buildSlug("switch")("Dual Brain Vol.1: Calculation")).to.be.eq("dual-brain-vol1-calculation-switch");
    expect(buildSlug("switch")("Smash Rush")).to.be.eq("smash-rush-switch");
    expect(buildSlug("switch")("Neverwinter Nights: Enhanced Edition")).to.be.eq(
      "neverwinter-nights-enhanced-edition-switch",
    );
    expect(buildSlug("switch")("Barbarous: Tavern of Emyr")).to.be.eq("barbarous-tavern-of-emyr-switch");
    expect(buildSlug("switch")("Travel Mosaics: A Paris Tour")).to.be.eq("travel-mosaics-a-paris-tour-switch");
    expect(buildSlug("switch")("Akuto: Showdown")).to.be.eq("akuto-showdown-switch");
    expect(buildSlug("switch")("Mushroom Quest")).to.be.eq("mushroom-quest-switch");
    expect(buildSlug("switch")("Funny Bunny Adventures")).to.be.eq("funny-bunny-adventures-switch");
    expect(buildSlug("switch")("Drawngeon: Dungeons of Ink and Paper")).to.be.eq(
      "drawngeon-dungeons-of-ink-and-paper-switch",
    );
    expect(buildSlug("switch")("Get Me Outta Here")).to.be.eq("get-me-outta-here-switch");
    expect(buildSlug("switch")("Rift Keeper")).to.be.eq("rift-keeper-switch");
    expect(buildSlug("switch")("Farming Simulator 20")).to.be.eq("farming-simulator-20-switch");
    expect(buildSlug("switch")("Shovel Knight: King of Cards")).to.be.eq("shovel-knight-king-of-cards-switch");
    expect(buildSlug("switch")("Cardpocalypse")).to.be.eq("cardpocalypse-switch");
    expect(buildSlug("switch")("GENSOU Skydrift")).to.be.eq("gensou-skydrift-switch");
    expect(buildSlug("switch")("Sacred Stones")).to.be.eq("sacred-stones-switch");
    expect(buildSlug("switch")("STAR OCEAN FIRST DEPARTURE R")).to.be.eq("star-ocean-first-departure-r-switch");
    expect(buildSlug("switch")("Shovel Knight Showdown")).to.be.eq("shovel-knight-showdown-switch");
    expect(buildSlug("switch")("Arcade Archives TwinBee")).to.be.eq("arcade-archives-twinbee-switch");
    expect(buildSlug("switch")("WARHAMMER 40,000: SPACE WOLF")).to.be.eq("warhammer-40-000-space-wolf-switch");
    expect(buildSlug("switch")("Arcade Archives FROGGER")).to.be.eq("arcade-archives-frogger-switch");
    expect(buildSlug("switch")("Soul Axiom Rebooted")).to.be.eq("soul-axiom-rebooted-switch");
    expect(buildSlug("switch")("60 Parsecs!")).to.be.eq("60-parsecs-switch");
    expect(buildSlug("switch")("DEMON'S TILT")).to.be.eq("demons-tilt-switch");
    expect(buildSlug("switch")("Football Manager 2020 Touch")).to.be.eq("football-manager-2020-touch-switch");
    expect(buildSlug("switch")("Willy Jetman: Astromonkey's Revenge")).to.be.eq(
      "willy-jetman-astromonkeys-revenge-switch",
    );
    expect(buildSlug("switch")("Super Crush KO")).to.be.eq("super-crush-ko-switch");
    expect(buildSlug("switch")("Streets of Rage 4")).to.be.eq("streets-of-rage-4-switch");
    expect(buildSlug("switch")("Murder by Numbers")).to.be.eq("murder-by-numbers-switch");
    expect(buildSlug("switch")("Oddworld: Stranger's Wrath")).to.be.eq("oddworld-strangers-wrath-switch");
    expect(buildSlug("switch")("The Talos Principle: Deluxe Edition")).to.be.eq(
      "the-talos-principle-deluxe-edition-switch",
    );
    expect(buildSlug("switch")("STEINS;GATE: My Darling's Embrace")).to.be.eq("steins-gate-my-darlings-embrace-switch");
    expect(buildSlug("switch")("STEINS;GATE 0")).to.be.eq("steins-gate-0-switch");
    expect(buildSlug("switch")("BATTOJUTSU")).to.be.eq("battojutsu-switch");
    expect(buildSlug("switch")("Clumsy Rush")).to.be.eq("clumsy-rush-switch");
    expect(buildSlug("switch")("Link-a-Pix Deluxe")).to.be.eq("link-a-pix-deluxe-switch");
    expect(buildSlug("switch")("JDM Racing")).to.be.eq("jdm-racing-switch");
    expect(buildSlug("switch")("Seaking Hunter")).to.be.eq("seaking-hunter-switch");
    expect(buildSlug("switch")("Warhammer Quest 2: The End Times")).to.be.eq("warhammer-quest-2-the-end-times-switch");
    expect(buildSlug("switch")("Melbits World")).to.be.eq("melbits-world-switch");
    expect(buildSlug("switch")("JurassicExcite")).to.be.eq("jurassicexcite-switch");
    expect(buildSlug("switch")("Aborigenus")).to.be.eq("aborigenus-switch");
    expect(buildSlug("switch")("Never Again")).to.be.eq("never-again-switch");
    expect(buildSlug("switch")("KUUKIYOMI: Consider It!")).to.be.eq("kuukiyomi-consider-it-switch");
    expect(buildSlug("switch")("Offroad Racing - Buggy X ATV X Moto")).to.be.eq(
      "offroad-racing-buggy-x-atv-x-moto-switch",
    );
    expect(buildSlug("switch")("Jets'n'Guns")).to.be.eq("jetsnguns-switch");
    expect(buildSlug("switch")("Sorry, James")).to.be.eq("sorry-james-switch");
    expect(buildSlug("switch")("Family Tennis SP")).to.be.eq("family-tennis-sp-switch");
    expect(buildSlug("switch")("Crazy Zen Mini Golf")).to.be.eq("crazy-zen-mini-golf-switch");
    expect(buildSlug("switch")("Blackmoor 2")).to.be.eq("blackmoor-2-switch");
    expect(buildSlug("switch")("Mega Man Zero/ZX Legacy Collection")).to.be.eq(
      "mega-man-zero-zx-legacy-collection-switch",
    );
    expect(buildSlug("switch")("Technosphere")).to.be.eq("technosphere-switch");
    expect(buildSlug("switch")("The Adventures of Elena Temple: Definitive Edition")).to.be.eq(
      "the-adventures-of-elena-temple-definitive-edition-switch",
    );
    expect(buildSlug("switch")("SUPER TRENCH ATTACK")).to.be.eq("super-trench-attack-switch");
    expect(buildSlug("switch")("Ashen")).to.be.eq("ashen-switch");
    expect(buildSlug("switch")("Prison Princess")).to.be.eq("prison-princess-switch");
    expect(buildSlug("switch")("Gunma's Ambition  -You and me are Gunma-")).to.be.eq(
      "gunmas-ambition-you-and-me-are-gunma-switch",
    );
    expect(buildSlug("switch")("Roll'd")).to.be.eq("rolld-switch");
    expect(buildSlug("switch")("AO Tennis 2")).to.be.eq("ao-tennis-2-switch");
    expect(buildSlug("switch")("Sheep Patrol")).to.be.eq("sheep-patrol-switch");
    expect(buildSlug("switch")("Tower of Babel - no mercy")).to.be.eq("tower-of-babel-no-mercy-switch");
    expect(buildSlug("switch")("Atelier Dusk Trilogy Deluxe Pack")).to.be.eq("atelier-dusk-trilogy-deluxe-pack-switch");
    expect(buildSlug("switch")("Roombo: First Blood")).to.be.eq("roombo-first-blood-switch");
    expect(buildSlug("switch")("Princess Maker Go!Go! Princess")).to.be.eq("princess-maker-go-go-princess-switch");
    expect(buildSlug("switch")("PRINCESS MAKER -FAERY TALES COME TRUE-")).to.be.eq(
      "princess-maker-faery-tales-come-true-switch",
    );
    expect(buildSlug("switch")("Atelier Escha & Logy: Alchemists of the Dusk Sky DX")).to.be.eq(
      "atelier-escha-and-logy-alchemists-of-the-dusk-sky-dx-switch",
    );
    expect(buildSlug("switch")("Atelier Shallie: Alchemists of the Dusk Sea DX")).to.be.eq(
      "atelier-shallie-alchemists-of-the-dusk-sea-dx-switch",
    );
    expect(buildSlug("switch")("Deponia Doomsday")).to.be.eq("deponia-doomsday-switch");
    expect(buildSlug("switch")("Goodbye Deponia")).to.be.eq("goodbye-deponia-switch");
    expect(buildSlug("switch")("Pulstario")).to.be.eq("pulstario-switch");
    expect(buildSlug("switch")("Arcade Archives VS. BALLOON FIGHT")).to.be.eq(
      "arcade-archives-vs-balloon-fight-switch",
    );
    expect(buildSlug("switch")("Nurse Love Syndrome")).to.be.eq("nurse-love-syndrome-switch");
    expect(buildSlug("switch")("Nurse Love Addiction")).to.be.eq("nurse-love-addiction-switch");
    expect(buildSlug("switch")("Croc's World 3")).to.be.eq("crocs-world-3-switch");
    expect(buildSlug("switch")("It came from space and ate our brains")).to.be.eq(
      "it-came-from-space-and-ate-our-brains-switch",
    );
    expect(buildSlug("switch")("Sisters Royale: Five Sisters Under Fire")).to.be.eq(
      "sisters-royale-five-sisters-under-fire-switch",
    );
    expect(buildSlug("switch")("Demolish & Build 2018")).to.be.eq("demolish-and-build-2018-switch");
    expect(buildSlug("switch")("Cooking Tycoons - 3 in 1 Bundle")).to.be.eq("cooking-tycoons-3-in-1-bundle-switch");
    expect(buildSlug("switch")("Aviary Attorney: Definitive Edition")).to.be.eq(
      "aviary-attorney-definitive-edition-switch",
    );
    expect(buildSlug("switch")("LASTFIGHT")).to.be.eq("lastfight-switch");
    expect(buildSlug("switch")("Psikyo Shooting Stars Alpha")).to.be.eq("psikyo-shooting-stars-alpha-switch");
    expect(buildSlug("switch")("Ultimate Racing 2D")).to.be.eq("ultimate-racing-2d-switch");
    expect(buildSlug("switch")("Squidlit")).to.be.eq("squidlit-switch");
    expect(buildSlug("switch")("Arcade Archives Penguin-Kun Wars")).to.be.eq("arcade-archives-penguin-kun-wars-switch");
    expect(buildSlug("switch")("Nicky - The Home Alone Golf Ball")).to.be.eq("nicky-the-home-alone-golf-ball-switch");
    expect(buildSlug("switch")("140")).to.be.eq("140-switch");
    expect(buildSlug("switch")("THOTH")).to.be.eq("thoth-switch");
    expect(buildSlug("switch")("Jump Gunners")).to.be.eq("jump-gunners-switch");
    expect(buildSlug("switch")("Invisible Fist")).to.be.eq("invisible-fist-switch");
    expect(buildSlug("switch")("Planetary Defense Force")).to.be.eq("planetary-defense-force-switch");
    expect(buildSlug("switch")("Ash of Gods: Redemption")).to.be.eq("ash-of-gods-redemption-switch");
    expect(buildSlug("switch")("Brief Battles")).to.be.eq("brief-battles-switch");
    expect(buildSlug("switch")("Worlds of Magic: Planar Conquest")).to.be.eq("worlds-of-magic-planar-conquest-switch");
    expect(buildSlug("switch")("Adventure Pinball Bundle")).to.be.eq("adventure-pinball-bundle-switch");
    expect(buildSlug("switch")("Football, Tactics & Glory")).to.be.eq("football-tactics-and-glory-switch");
    expect(buildSlug("switch")("Sir Eatsalot")).to.be.eq("sir-eatsalot-switch");
    expect(buildSlug("switch")("Anime Studio Story")).to.be.eq("anime-studio-story-switch");
    expect(buildSlug("switch")("Pokémon Mystery Dungeon: Rescue Team DX")).to.be.eq(
      "pokemon-mystery-dungeon-rescue-team-dx-switch",
    );
    expect(buildSlug("switch")("SEGA AGES Shinobi")).to.be.eq("sega-ages-shinobi-switch");
    expect(buildSlug("switch")("SEGA AGES Fantasy Zone")).to.be.eq("sega-ages-fantasy-zone-switch");
    expect(buildSlug("switch")("Seek Hearts")).to.be.eq("seek-hearts-switch");
    expect(buildSlug("switch")("Mosaic")).to.be.eq("mosaic-switch");
    expect(buildSlug("switch")("To the Moon")).to.be.eq("to-the-moon-switch");
    expect(buildSlug("switch")("PuPaiPo Space Deluxe")).to.be.eq("pupaipo-space-deluxe-switch");
    expect(buildSlug("switch")("Dreamwalker: Never Fall Asleep")).to.be.eq("dreamwalker-never-fall-asleep-switch");
    expect(buildSlug("switch")("Dual Brain Vol.2: Reflex")).to.be.eq("dual-brain-vol2-reflex-switch");
    expect(buildSlug("switch")("Doggie Ninja The Burning Strikers")).to.be.eq(
      "doggie-ninja-the-burning-strikers-switch",
    );
    expect(buildSlug("switch")("Arcade Archives EXERION")).to.be.eq("arcade-archives-exerion-switch");
    expect(buildSlug("switch")("Extreme Trucks Simulator")).to.be.eq("extreme-trucks-simulator-switch");
    expect(buildSlug("switch")("Spider Solitaire")).to.be.eq("spider-solitaire-switch");
    expect(buildSlug("switch")("Red Bow")).to.be.eq("red-bow-switch");
    expect(buildSlug("switch")("Lumini")).to.be.eq("lumini-switch");
    expect(buildSlug("switch")("Witch & Hero 2")).to.be.eq("witch-and-hero-2-switch");
    expect(buildSlug("switch")("Eclipse: Edge of Light")).to.be.eq("eclipse-edge-of-light-switch");
    expect(buildSlug("switch")("HYPERCHARGE Unboxed")).to.be.eq("hypercharge-unboxed-switch");
    expect(buildSlug("switch")("Ciel Fledge: A Daughter Raising Simulator")).to.be.eq(
      "ciel-fledge-a-daughter-raising-simulator-switch",
    );
    expect(buildSlug("switch")("Lydia")).to.be.eq("lydia-switch");
    expect(buildSlug("switch")("Ember")).to.be.eq("ember-switch");
    expect(buildSlug("switch")("Monster Energy Supercross - The Official Videogame 3")).to.be.eq(
      "monster-energy-supercross-the-official-videogame-3-switch",
    );
    expect(buildSlug("switch")("Actual Sunlight")).to.be.eq("actual-sunlight-switch");
    expect(buildSlug("switch")("SpeedRunners")).to.be.eq("speedrunners-switch");
    expect(buildSlug("switch")("The Station")).to.be.eq("the-station-switch");
    expect(buildSlug("switch")("Caveman Chuck")).to.be.eq("caveman-chuck-switch");
    expect(buildSlug("switch")("Robots under attack!")).to.be.eq("robots-under-attack-switch");
    expect(buildSlug("switch")("Kentucky Route Zero: TV Edition")).to.be.eq("kentucky-route-zero-tv-edition-switch");
    expect(buildSlug("switch")("Curious Cases")).to.be.eq("curious-cases-switch");
    expect(buildSlug("switch")("Not Tonight: Take Back Control Edition")).to.be.eq(
      "not-tonight-take-back-control-edition-switch",
    );
    expect(buildSlug("switch")("So Many Me: Extended Edition")).to.be.eq("so-many-me-extended-edition-switch");
    expect(buildSlug("switch")("Syder Reloaded")).to.be.eq("syder-reloaded-switch");
    expect(buildSlug("switch")("Please The Gods")).to.be.eq("please-the-gods-switch");
    expect(buildSlug("switch")("Music Racer")).to.be.eq("music-racer-switch");
    expect(buildSlug("switch")("Nerved")).to.be.eq("nerved-switch");
    expect(buildSlug("switch")("The Dark Crystal: Age of Resistance Tactics")).to.be.eq(
      "the-dark-crystal-age-of-resistance-tactics-switch",
    );
    expect(buildSlug("switch")("Coffee Talk")).to.be.eq("coffee-talk-switch");
    expect(buildSlug("switch")("Heroland")).to.be.eq("heroland-switch");
    expect(buildSlug("switch")("Devil May Cry 3 Special Edition")).to.be.eq("devil-may-cry-3-special-edition-switch");
    expect(buildSlug("switch")("Without Escape")).to.be.eq("without-escape-switch");
    expect(buildSlug("switch")("Where Angels Cry: Tears of the Fallen Collector's Edition")).to.be.eq(
      "where-angels-cry-tears-of-the-fallen-collectors-edition-switch",
    );
    expect(buildSlug("switch")("198X")).to.be.eq("198x-switch");
    expect(buildSlug("switch")("CODE SHIFTER")).to.be.eq("code-shifter-switch");
    expect(buildSlug("switch")("Bookbound Brigade")).to.be.eq("bookbound-brigade-switch");
    expect(buildSlug("switch")("OmoTomO")).to.be.eq("omotomo-switch");
    expect(buildSlug("switch")("Sinless")).to.be.eq("sinless-switch");
    expect(buildSlug("switch")("JEWEL WARS")).to.be.eq("jewel-wars-switch");
    expect(buildSlug("switch")("Classic Snake Adventures")).to.be.eq("classic-snake-adventures-switch");
    expect(buildSlug("switch")("Stories Untold")).to.be.eq("stories-untold-switch");
    expect(buildSlug("switch")("Code: Realize ~Guardian of Rebirth~")).to.be.eq(
      "code-realize-guardian-of-rebirth-switch",
    );
    expect(buildSlug("switch")("KUNAI")).to.be.eq("kunai-switch");
    expect(buildSlug("switch")("Metro: Last Light Redux")).to.be.eq("metro-last-light-redux-switch");
    expect(buildSlug("switch")("SEN: Seven Eight Nine")).to.be.eq("sen-seven-eight-nine-switch");
    expect(buildSlug("switch")("Arcade Archives Bells & Whistles")).to.be.eq(
      "arcade-archives-bells-and-whistles-switch",
    );
    expect(buildSlug("switch")("Metro 2033 Redux")).to.be.eq("metro-2033-redux-switch");
    expect(buildSlug("switch")("Super Tennis")).to.be.eq("super-tennis-switch");
    expect(buildSlug("switch")("FoxyLand 2")).to.be.eq("foxyland-2-switch");
    expect(buildSlug("switch")("Reknum")).to.be.eq("reknum-switch");
    expect(buildSlug("switch")("Just Glide")).to.be.eq("just-glide-switch");
    expect(buildSlug("switch")("It's Raining Fists and Metal")).to.be.eq("its-raining-fists-and-metal-switch");
    expect(buildSlug("switch")("Motorcycle Mechanic Simulator")).to.be.eq("motorcycle-mechanic-simulator-switch");
    expect(buildSlug("switch")("Refreshing Sideways Puzzle Ghost Hammer")).to.be.eq(
      "refreshing-sideways-puzzle-ghost-hammer-switch",
    );
    expect(buildSlug("switch")("The Walking Dead: A New Frontier")).to.be.eq("the-walking-dead-a-new-frontier-switch");
    expect(buildSlug("switch")("The Walking Dead: Season Two")).to.be.eq("the-walking-dead-season-two-switch");
    expect(buildSlug("switch")("Psikyo Shooting Stars Bravo")).to.be.eq("psikyo-shooting-stars-bravo-switch");
    expect(buildSlug("switch")("Milo's Quest")).to.be.eq("milos-quest-switch");
    expect(buildSlug("switch")("Horse Farm")).to.be.eq("horse-farm-switch");
    expect(buildSlug("switch")("Touchdown Pinball")).to.be.eq("touchdown-pinball-switch");
    expect(buildSlug("switch")("Speaking Simulator")).to.be.eq("speaking-simulator-switch");
    expect(buildSlug("switch")("7th Sector")).to.be.eq("7th-sector-switch");
    expect(buildSlug("switch")("Orn: The Tiny Forest Sprite")).to.be.eq("orn-the-tiny-forest-sprite-switch");
    expect(buildSlug("switch")("Sleep Attack")).to.be.eq("sleep-attack-switch");
    expect(buildSlug("switch")("Rune Factory 4 Special")).to.be.eq("rune-factory-4-special-switch");
    expect(buildSlug("switch")("UNDER NIGHT IN-BIRTH Exe:Late[cl-r]")).to.be.eq(
      "under-night-in-birth-exe-late-cl-r-switch",
    );
    expect(buildSlug("switch")("Knights and Bikes")).to.be.eq("knights-and-bikes-switch");
    expect(buildSlug("switch")("Ascendant Hearts")).to.be.eq("ascendant-hearts-switch");
    expect(buildSlug("switch")("Glass Masquerade 2: Illusions")).to.be.eq("glass-masquerade-2-illusions-switch");
    expect(buildSlug("switch")("UnderHero")).to.be.eq("underhero-switch");
    expect(buildSlug("switch")("CRAYON SHINCHAN The Storm Called FLAMING KASUKABE RUNNER!!")).to.be.eq(
      "crayon-shinchan-the-storm-called-flaming-kasukabe-runner-switch",
    );
    expect(buildSlug("switch")("UORiS DX")).to.be.eq("uoris-dx-switch");
    expect(buildSlug("switch")("Arcade Archives XX MISSION")).to.be.eq("arcade-archives-xx-mission-switch");
    expect(buildSlug("switch")("Strike! Ten Pin Bowling")).to.be.eq("strike-ten-pin-bowling-switch");
    expect(buildSlug("switch")("Escape From Chernobyl")).to.be.eq("escape-from-chernobyl-switch");
    expect(buildSlug("switch")("The Town of Light: Deluxe Edition")).to.be.eq(
      "the-town-of-light-deluxe-edition-switch",
    );
    expect(buildSlug("switch")("Bridge Constructor Ultimate Edition")).to.be.eq(
      "bridge-constructor-ultimate-edition-switch",
    );
    expect(buildSlug("switch")("Indie Gems Bundle - JRPG Edition")).to.be.eq("indie-gems-bundle-jrpg-edition-switch");
    expect(buildSlug("switch")("The Turing Test")).to.be.eq("the-turing-test-switch");
    expect(buildSlug("switch")("Darksiders Genesis")).to.be.eq("darksiders-genesis-switch");
    expect(buildSlug("switch")("Super Battle Cards")).to.be.eq("super-battle-cards-switch");
    expect(buildSlug("switch")("Marooners")).to.be.eq("marooners-switch");
    expect(buildSlug("switch")("Crash Drive 2")).to.be.eq("crash-drive-2-switch");
    expect(buildSlug("switch")("Rise of Insanity")).to.be.eq("rise-of-insanity-switch");
    expect(buildSlug("switch")("Thronebreaker: The Witcher Tales")).to.be.eq("thronebreaker-the-witcher-tales-switch");
    expect(buildSlug("switch")("Last Encounter")).to.be.eq("last-encounter-switch");
    expect(buildSlug("switch")("Wide Ocean Big Jacket")).to.be.eq("wide-ocean-big-jacket-switch");
    expect(buildSlug("switch")("ELEA: Paradigm Shift")).to.be.eq("elea-paradigm-shift-switch");
    expect(buildSlug("switch")("Served!")).to.be.eq("served-switch");
    expect(buildSlug("switch")("Just a Phrase by POWGI")).to.be.eq("just-a-phrase-by-powgi-switch");
    expect(buildSlug("switch")("Shiny Ski Resort")).to.be.eq("shiny-ski-resort-switch");
    expect(buildSlug("switch")("LocO-SportS")).to.be.eq("loco-sports-switch");
    expect(buildSlug("switch")("Blood will be Spilled")).to.be.eq("blood-will-be-spilled-switch");
    expect(buildSlug("switch")("Sparkle 4 Tales")).to.be.eq("sparkle-4-tales-switch");
    expect(buildSlug("switch")("Heaven Dust")).to.be.eq("heaven-dust-switch");
    expect(buildSlug("switch")("Tilt Pack")).to.be.eq("tilt-pack-switch");
    expect(buildSlug("switch")("PHAR LAP - Horse Racing Challenge")).to.be.eq("phar-lap-horse-racing-challenge-switch");
    expect(buildSlug("switch")("GREEN The Life Algorithm")).to.be.eq("green-the-life-algorithm-switch");
    expect(buildSlug("switch")("Shred! 2 - ft Sam Pilgrim")).to.be.eq("shred-2-ft-sam-pilgrim-switch");
    expect(buildSlug("switch")("Orbitblazers")).to.be.eq("orbitblazers-switch");
    expect(buildSlug("switch")("Bridge Builder Adventure")).to.be.eq("bridge-builder-adventure-switch");
    expect(buildSlug("switch")("EQQO")).to.be.eq("eqqo-switch");
    expect(buildSlug("switch")("Zero Zero Zero Zero")).to.be.eq("zero-zero-zero-zero-switch");
    expect(buildSlug("switch")("Arcade Archives TECMO BOWL")).to.be.eq("arcade-archives-tecmo-bowl-switch");
    expect(buildSlug("switch")("Super Loop Drive")).to.be.eq("super-loop-drive-switch");
    expect(buildSlug("switch")("Rune Lord")).to.be.eq("rune-lord-switch");
    expect(buildSlug("switch")("Battleground")).to.be.eq("battleground-switch");
    expect(buildSlug("switch")("The Incredible Adventures of Super Panda")).to.be.eq(
      "the-incredible-adventures-of-super-panda-switch",
    );
    expect(buildSlug("switch")("Reed Remastered")).to.be.eq("reed-remastered-switch");
    expect(buildSlug("switch")("Hair Mower 3D")).to.be.eq("hair-mower-3d-switch");
    expect(buildSlug("switch")("SAMURAI SHODOWN")).to.be.eq("samurai-shodown-switch");
    expect(buildSlug("switch")("King Lucas")).to.be.eq("king-lucas-switch");
    expect(buildSlug("switch")("Cosmonauta")).to.be.eq("cosmonauta-switch");
    expect(buildSlug("switch")("Saints Row IV®: Re-Elected™")).to.be.eq("saints-row-iv-re-elected-switch");
    expect(buildSlug("switch")("Two Point Hospital™")).to.be.eq("two-point-hospital-switch");
    expect(buildSlug("switch")("Brotherhood United")).to.be.eq("brotherhood-united-switch");
    expect(buildSlug("switch")("3000th Duel")).to.be.eq("3000th-duel-switch");
    expect(buildSlug("switch")("Rolling Sky 2")).to.be.eq("rolling-sky-2-switch");
    expect(buildSlug("switch")("Double Dragon & Kunio-kun: Retro Brawler Bundle")).to.be.eq(
      "double-dragon-and-kunio-kun-retro-brawler-bundle-switch",
    );
    expect(buildSlug("switch")("The Man With The Ivory Cane")).to.be.eq("the-man-with-the-ivory-cane-switch");
    expect(buildSlug("switch")("Lines XL")).to.be.eq("lines-xl-switch");
    expect(buildSlug("switch")("Dual Brain Vol.3: Shapes")).to.be.eq("dual-brain-vol3-shapes-switch");
    expect(buildSlug("switch")("Arcade Archives SAINT DRAGON")).to.be.eq("arcade-archives-saint-dragon-switch");
    expect(buildSlug("switch")("Kitty Maestro")).to.be.eq("kitty-maestro-switch");
    expect(buildSlug("switch")("SEGA AGES Puyo Puyo 2")).to.be.eq("sega-ages-puyo-puyo-2-switch");
    expect(buildSlug("switch")("Florence")).to.be.eq("florence-switch");
    expect(buildSlug("switch")("Super Korotama")).to.be.eq("super-korotama-switch");
    expect(buildSlug("switch")("Speedway Racing")).to.be.eq("speedway-racing-switch");
    expect(buildSlug("switch")("Pokémon HOME")).to.be.eq("pokemon-home-switch");
    expect(buildSlug("switch")("Fishing Adventure")).to.be.eq("fishing-adventure-switch");
    expect(buildSlug("switch")("Help Me Doctor")).to.be.eq("help-me-doctor-switch");
    expect(buildSlug("switch")("Speed Dating for Ghosts")).to.be.eq("speed-dating-for-ghosts-switch");
    expect(buildSlug("switch")("Little Bit War")).to.be.eq("little-bit-war-switch");
    expect(buildSlug("switch")("MathLand")).to.be.eq("mathland-switch");
    expect(buildSlug("switch")("OVERPASS™")).to.be.eq("overpass-switch");
    expect(buildSlug("switch")("Baron: Fur Is Gonna Fly")).to.be.eq("baron-fur-is-gonna-fly-switch");
    expect(buildSlug("switch")("Vasilis")).to.be.eq("vasilis-switch");
    expect(buildSlug("switch")("Bloodroots")).to.be.eq("bloodroots-switch");
    expect(buildSlug("switch")("Otherworldly")).to.be.eq("otherworldly-switch");
    expect(buildSlug("switch")("SEGA AGES Sonic The Hedgehog 2")).to.be.eq("sega-ages-sonic-the-hedgehog-2-switch");
    expect(buildSlug("switch")("Uncharted Tides: Port Royal")).to.be.eq("uncharted-tides-port-royal-switch");
    expect(buildSlug("switch")("Kingdom Rush Frontiers")).to.be.eq("kingdom-rush-frontiers-switch");
    expect(buildSlug("switch")("Knightin'+")).to.be.eq("knightin-switch");
    expect(buildSlug("switch")("Hero must die. Again")).to.be.eq("hero-must-die-again-switch");
    expect(buildSlug("switch")("Hayfever")).to.be.eq("hayfever-switch");
    expect(buildSlug("switch")("Sudoku Relax 4 Winter Snow")).to.be.eq("sudoku-relax-4-winter-snow-switch");
    expect(buildSlug("switch")("Goblin Sword")).to.be.eq("goblin-sword-switch");
    expect(buildSlug("switch")("Go All Out!")).to.be.eq("go-all-out-switch");
    expect(buildSlug("switch")("Fred3ric")).to.be.eq("fred3ric-switch");
    expect(buildSlug("switch")("Wanderlust Travel Stories")).to.be.eq("wanderlust-travel-stories-switch");
    expect(buildSlug("switch")("MouseCraft")).to.be.eq("mousecraft-switch");
    expect(buildSlug("switch")("Arcade Archives SASUKE VS COMMANDER")).to.be.eq(
      "arcade-archives-sasuke-vs-commander-switch",
    );
    expect(buildSlug("switch")("Vitamin Connection")).to.be.eq("vitamin-connection-switch");
    expect(buildSlug("switch")("Ganbare! Super Strikers")).to.be.eq("ganbare-super-strikers-switch");
    expect(buildSlug("switch")("Spartan Fist")).to.be.eq("spartan-fist-switch");
    expect(buildSlug("switch")("Aggelos")).to.be.eq("aggelos-switch");
    expect(buildSlug("switch")("Cat Quest")).to.be.eq("cat-quest-switch");
    expect(buildSlug("switch")("Voxel Pirates")).to.be.eq("voxel-pirates-switch");
    expect(buildSlug("switch")("AvoCuddle")).to.be.eq("avocuddle-switch");
    expect(buildSlug("switch")("Bucket Knight")).to.be.eq("bucket-knight-switch");
    expect(buildSlug("switch")("Ego Protocol: Remastered")).to.be.eq("ego-protocol-remastered-switch");
    expect(buildSlug("switch")("Langrisser I & II")).to.be.eq("langrisser-i-and-ii-switch");
    expect(buildSlug("switch")("Blood Breed")).to.be.eq("blood-breed-switch");
    expect(buildSlug("switch")("Dark Tower")).to.be.eq("dark-tower-switch");
    expect(buildSlug("switch")("Project Starship")).to.be.eq("project-starship-switch");
    expect(buildSlug("switch")("STAB STAB STAB!")).to.be.eq("stab-stab-stab-switch");
    expect(buildSlug("switch")("UBERMOSH:OMEGA")).to.be.eq("ubermosh-omega-switch");
    expect(buildSlug("switch")("Oddmar")).to.be.eq("oddmar-switch");
    expect(buildSlug("switch")("ibb & obb")).to.be.eq("ibb-and-obb-switch");
    expect(buildSlug("switch")("Portal Dogs")).to.be.eq("portal-dogs-switch");
    expect(buildSlug("switch")("Boulder Dash® 30th Anniversary™")).to.be.eq("boulder-dash-30th-anniversary-switch");
    expect(buildSlug("switch")("Escape First")).to.be.eq("escape-first-switch");
    expect(buildSlug("switch")("Warface")).to.be.eq("warface-switch");
    expect(buildSlug("switch")("Ski Sniper")).to.be.eq("ski-sniper-switch");
    expect(buildSlug("switch")("Corridor Z")).to.be.eq("corridor-z-switch");
    expect(buildSlug("switch")("The Unholy Society")).to.be.eq("the-unholy-society-switch");
    expect(buildSlug("switch")("Voxelgram")).to.be.eq("voxelgram-switch");
    expect(buildSlug("switch")("Operencia: The Stolen Sun")).to.be.eq("operencia-the-stolen-sun-switch");
    expect(buildSlug("switch")("Save Koch")).to.be.eq("save-koch-switch");
    expect(buildSlug("switch")("Edgar - Bokbok in Boulzac")).to.be.eq("edgar-bokbok-in-boulzac-switch");
    expect(buildSlug("switch")("Dude, Stop")).to.be.eq("dude-stop-switch");
    expect(buildSlug("switch")("A Sound Plan")).to.be.eq("a-sound-plan-switch");
    expect(buildSlug("switch")("SeaBed")).to.be.eq("seabed-switch");
    expect(buildSlug("switch")("LA-MULANA")).to.be.eq("la-mulana-switch");
    expect(buildSlug("switch")("LA-MULANA 2")).to.be.eq("la-mulana-2-switch");
    expect(buildSlug("switch")("Thief Town")).to.be.eq("thief-town-switch");
    expect(buildSlug("switch")("NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4 ROAD TO BORUTO")).to.be.eq(
      "naruto-shippuden-ultimate-ninja-storm-4-road-to-boruto-switch",
    );
    expect(buildSlug("switch")("No Time to Relax")).to.be.eq("no-time-to-relax-switch");
    expect(buildSlug("switch")("The Adventures of 00 Dilly®")).to.be.eq("the-adventures-of-00-dilly-switch");
    expect(buildSlug("switch")("KATANA KAMI: A Way of the Samurai Story")).to.be.eq(
      "katana-kami-a-way-of-the-samurai-story-switch",
    );
    expect(buildSlug("switch")("Profane")).to.be.eq("profane-switch");
    expect(buildSlug("switch")("Alder's Blood")).to.be.eq("alders-blood-switch");
    expect(buildSlug("switch")("Skull Rogue")).to.be.eq("skull-rogue-switch");
    expect(buildSlug("switch")("BE-A Walker")).to.be.eq("be-a-walker-switch");
    expect(buildSlug("switch")("Breeder Homegrown: Director's Cut")).to.be.eq("breeder-homegrown-directors-cut-switch");
    expect(buildSlug("switch")("Arcade Archives VS. MAH-JONG")).to.be.eq("arcade-archives-vs-mah-jong-switch");
    expect(buildSlug("switch")("Bleed Complete Bundle")).to.be.eq("bleed-complete-bundle-switch");
    expect(buildSlug("switch")("BATTLESLOTHS")).to.be.eq("battlesloths-switch");
    expect(buildSlug("switch")("Gigantosaurus The Game")).to.be.eq("gigantosaurus-the-game-switch");
    expect(buildSlug("switch")("Billion Road")).to.be.eq("billion-road-switch");
    expect(buildSlug("switch")("Half Past Fate")).to.be.eq("half-past-fate-switch");
    expect(buildSlug("switch")("Farmer Sim 2020")).to.be.eq("farmer-sim-2020-switch");
    expect(buildSlug("switch")("Hyperspace Delivery Service")).to.be.eq("hyperspace-delivery-service-switch");
    expect(buildSlug("switch")("Wunderling")).to.be.eq("wunderling-switch");
    expect(buildSlug("switch")("Puzzles for Toddlers & Kids: Animals, Cars and more")).to.be.eq(
      "puzzles-for-toddlers-and-kids-animals-cars-and-more-switch",
    );
    expect(buildSlug("switch")("MADORIS R")).to.be.eq("madoris-r-switch");
    expect(buildSlug("switch")("A Street Cat's Tale")).to.be.eq("a-street-cats-tale-switch");
    expect(buildSlug("switch")("inbento")).to.be.eq("inbento-switch");
    expect(buildSlug("switch")("Lost Horizon")).to.be.eq("lost-horizon-switch");
    expect(buildSlug("switch")("Kairobotica")).to.be.eq("kairobotica-switch");
    expect(buildSlug("switch")("MX Nitro: Unleashed")).to.be.eq("mx-nitro-unleashed-switch");
    expect(buildSlug("switch")("Kemono Heroes")).to.be.eq("kemono-heroes-switch");
    expect(buildSlug("switch")("Dream Gallery")).to.be.eq("dream-gallery-switch");
    expect(buildSlug("switch")("Mystic Vale")).to.be.eq("mystic-vale-switch");
    expect(buildSlug("switch")("Arcade Archives SALAMANDER")).to.be.eq("arcade-archives-salamander-switch");
    expect(buildSlug("switch")("Unlock The King")).to.be.eq("unlock-the-king-switch");
    expect(buildSlug("switch")("Akuarium")).to.be.eq("akuarium-switch");
    expect(buildSlug("switch")("NinNinDays")).to.be.eq("ninnindays-switch");
    expect(buildSlug("switch")("Valfaris")).to.be.eq("valfaris-switch");
    expect(buildSlug("switch")("Afterparty")).to.be.eq("afterparty-switch");
    expect(buildSlug("switch")("Rack N Ruin")).to.be.eq("rack-n-ruin-switch");
    expect(buildSlug("switch")("YOGA MASTER")).to.be.eq("yoga-master-switch");
    expect(buildSlug("switch")("The Story Goes On")).to.be.eq("the-story-goes-on-switch");
    expect(buildSlug("switch")("Swordbreaker The Game")).to.be.eq("swordbreaker-the-game-switch");
    expect(buildSlug("switch")("Grizzland")).to.be.eq("grizzland-switch");
    expect(buildSlug("switch")("Flight Sim 2019")).to.be.eq("flight-sim-2019-switch");
    expect(buildSlug("switch")("Jump, Step, Step")).to.be.eq("jump-step-step-switch");
    expect(buildSlug("switch")("Darts")).to.be.eq("darts-switch");
    expect(buildSlug("switch")("The Complex")).to.be.eq("the-complex-switch");
    expect(buildSlug("switch")("Shadows")).to.be.eq("shadows-switch");
    expect(buildSlug("switch")("Amoeba Battle - Microscopic RTS Action")).to.be.eq(
      "amoeba-battle-microscopic-rts-action-switch",
    );
    expect(buildSlug("switch")("Mist Hunter")).to.be.eq("mist-hunter-switch");
    expect(buildSlug("switch")("Explosive Jake")).to.be.eq("explosive-jake-switch");
    expect(buildSlug("switch")("Syrup and The Ultimate Sweet")).to.be.eq("syrup-and-the-ultimate-sweet-switch");
    expect(buildSlug("switch")("Deep Diving Adventures")).to.be.eq("deep-diving-adventures-switch");
    expect(buildSlug("switch")("DEAD OR SCHOOL")).to.be.eq("dead-or-school-switch");
    expect(buildSlug("switch")("Tower Inferno")).to.be.eq("tower-inferno-switch");
    expect(buildSlug("switch")("Hidden Through Time")).to.be.eq("hidden-through-time-switch");
    expect(buildSlug("switch")("Neon City Riders")).to.be.eq("neon-city-riders-switch");
    expect(buildSlug("switch")("Arcade Archives P.O.W. -PRISONERS OF WAR-")).to.be.eq(
      "arcade-archives-pow-prisoners-of-war-switch",
    );
    expect(buildSlug("switch")("Frozen Friends - Escape the Forest")).to.be.eq(
      "frozen-friends-escape-the-forest-switch",
    );
    expect(buildSlug("switch")("Hidden in Plain Sight")).to.be.eq("hidden-in-plain-sight-switch");
    expect(buildSlug("switch")("Dezatopia")).to.be.eq("dezatopia-switch");
    expect(buildSlug("switch")("Beyond Enemy Lines: Essentials")).to.be.eq("beyond-enemy-lines-essentials-switch");
    expect(buildSlug("switch")("Welcome to Primrose Lake")).to.be.eq("welcome-to-primrose-lake-switch");
    expect(buildSlug("switch")("Factotum 90")).to.be.eq("factotum-90-switch");
    expect(buildSlug("switch")("Rascal Fight")).to.be.eq("rascal-fight-switch");
    expect(buildSlug("switch")("Troubleshooter")).to.be.eq("troubleshooter-switch");
    expect(buildSlug("switch")("Super Destronaut: Land Wars")).to.be.eq("super-destronaut-land-wars-switch");
    expect(buildSlug("switch")("This Strange Realm Of Mine")).to.be.eq("this-strange-realm-of-mine-switch");
    expect(buildSlug("switch")("Pooplers")).to.be.eq("pooplers-switch");
    expect(buildSlug("switch")("Bug Academy")).to.be.eq("bug-academy-switch");
    expect(buildSlug("switch")("Sin Slayers: Enhanced Edition")).to.be.eq("sin-slayers-enhanced-edition-switch");
    expect(buildSlug("switch")("Talisman: Digital Edition")).to.be.eq("talisman-digital-edition-switch");
    expect(buildSlug("switch")("Quell Memento")).to.be.eq("quell-memento-switch");
    expect(buildSlug("switch")("Indie Darling Bundle Vol 2")).to.be.eq("indie-darling-bundle-vol-2-switch");
    expect(buildSlug("switch")("Indie Puzzle Bundle Vol 1")).to.be.eq("indie-puzzle-bundle-vol-1-switch");
    expect(buildSlug("switch")("Nerdook Bundle Vol. 1")).to.be.eq("nerdook-bundle-vol-1-switch");
    expect(buildSlug("switch")("Knight Swap")).to.be.eq("knight-swap-switch");
    expect(buildSlug("switch")("Chapeau")).to.be.eq("chapeau-switch");
    expect(buildSlug("switch")("Roundguard")).to.be.eq("roundguard-switch");
    expect(buildSlug("switch")("Video Poker @ Aces Casino")).to.be.eq("video-poker-aces-casino-switch");
    expect(buildSlug("switch")("Disaster Report 4: Summer Memories")).to.be.eq(
      "disaster-report-4-summer-memories-switch",
    );
    expect(buildSlug("switch")("Silent World")).to.be.eq("silent-world-switch");
    expect(buildSlug("switch")("Adam's Venture®: Origins")).to.be.eq("adams-venture-origins-switch");
    expect(buildSlug("switch")("Repressed")).to.be.eq("repressed-switch");
    expect(buildSlug("switch")("NecroWorm")).to.be.eq("necroworm-switch");
    expect(buildSlug("switch")("Ghost Sweeper")).to.be.eq("ghost-sweeper-switch");
    expect(buildSlug("switch")("Horror Bundle Vol. 1")).to.be.eq("horror-bundle-vol-1-switch");
    expect(buildSlug("switch")("Mekorama")).to.be.eq("mekorama-switch");
    expect(buildSlug("switch")("Ittle Dew 2+")).to.be.eq("ittle-dew-2-switch");
    expect(buildSlug("switch")("Trailer Trashers")).to.be.eq("trailer-trashers-switch");
    expect(buildSlug("switch")("Poly Puzzle")).to.be.eq("poly-puzzle-switch");
    expect(buildSlug("switch")("MY HERO ONE'S JUSTICE 2")).to.be.eq("my-hero-ones-justice-2-switch");
    expect(buildSlug("switch")("Arcade Archives KIKI KAIKAI")).to.be.eq("arcade-archives-kiki-kaikai-switch");
    expect(buildSlug("switch")("The Secret Order: Shadow Breach")).to.be.eq("the-secret-order-shadow-breach-switch");
    expect(buildSlug("switch")("Dandara: Trials of Fear Edition")).to.be.eq("dandara-trials-of-fear-edition-switch");
    expect(buildSlug("switch")("Kitty Powers' Matchmaker: Deluxe Edition")).to.be.eq(
      "kitty-powers-matchmaker-deluxe-edition-switch",
    );
    expect(buildSlug("switch")("ONE PIECE: PIRATE WARRIORS 4")).to.be.eq("one-piece-pirate-warriors-4-switch");
    expect(buildSlug("switch")("Rhythm of the Gods")).to.be.eq("rhythm-of-the-gods-switch");
    expect(buildSlug("switch")("Lust for Darkness: Dawn Edition")).to.be.eq("lust-for-darkness-dawn-edition-switch");
    expect(buildSlug("switch")("Children of Zodiarcs")).to.be.eq("children-of-zodiarcs-switch");
    expect(buildSlug("switch")("Stela")).to.be.eq("stela-switch");
    expect(buildSlug("switch")("Diabolic")).to.be.eq("diabolic-switch");
    expect(buildSlug("switch")("Megabyte Punch")).to.be.eq("megabyte-punch-switch");
    expect(buildSlug("switch")("Vampire: The Masquerade - Coteries of New York")).to.be.eq(
      "vampire-the-masquerade-coteries-of-new-york-switch",
    );
    expect(buildSlug("switch")("Trancelation")).to.be.eq("trancelation-switch");
    expect(buildSlug("switch")("Travel Mosaics 2: Roman Holiday")).to.be.eq("travel-mosaics-2-roman-holiday-switch");
    expect(buildSlug("switch")("Exit the Gungeon")).to.be.eq("exit-the-gungeon-switch");
    expect(buildSlug("switch")("Sky Racket")).to.be.eq("sky-racket-switch");
    expect(buildSlug("switch")("Moving Out")).to.be.eq("moving-out-switch");
    expect(buildSlug("switch")("Faeria")).to.be.eq("faeria-switch");
    expect(buildSlug("switch")("The Last Campfire")).to.be.eq("the-last-campfire-switch");
    expect(buildSlug("switch")("Thunder Paw")).to.be.eq("thunder-paw-switch");
    expect(buildSlug("switch")("Zombie Army Trilogy")).to.be.eq("zombie-army-trilogy-switch");
    expect(buildSlug("switch")("Grand Guilds")).to.be.eq("grand-guilds-switch");
    expect(buildSlug("switch")("Colorgrid")).to.be.eq("colorgrid-switch");
    expect(buildSlug("switch")("Deep Sky Derelicts: Definitive Edition")).to.be.eq(
      "deep-sky-derelicts-definitive-edition-switch",
    );
    expect(buildSlug("switch")("Wurroom")).to.be.eq("wurroom-switch");
    expect(buildSlug("switch")("Red Death")).to.be.eq("red-death-switch");
    expect(buildSlug("switch")("CHAOS CODE -NEW SIGN OF CATASTROPHE-")).to.be.eq(
      "chaos-code-new-sign-of-catastrophe-switch",
    );
    expect(buildSlug("switch")("Arcade Archives FORMATION Z")).to.be.eq("arcade-archives-formation-z-switch");
    expect(buildSlug("switch")("Ultimate Ski Jumping 2020")).to.be.eq("ultimate-ski-jumping-2020-switch");
    expect(buildSlug("switch")("Frosty Jump")).to.be.eq("frosty-jump-switch");
    expect(buildSlug("switch")("Wenjia")).to.be.eq("wenjia-switch");
    expect(buildSlug("switch")("Pocket Mini Golf")).to.be.eq("pocket-mini-golf-switch");
    expect(buildSlug("switch")("Tennis Open 2020")).to.be.eq("tennis-open-2020-switch");
    expect(buildSlug("switch")("Epic Word Search Collection")).to.be.eq("epic-word-search-collection-switch");
    expect(buildSlug("switch")("Towertale")).to.be.eq("towertale-switch");
    expect(buildSlug("switch")("JigSaw Abundance")).to.be.eq("jigsaw-abundance-switch");
    expect(buildSlug("switch")("R.B.I. Baseball 20")).to.be.eq("rbi-baseball-20-switch");
    expect(buildSlug("switch")("Card Game Bundle Vol. 1")).to.be.eq("card-game-bundle-vol-1-switch");
    expect(buildSlug("switch")("Curious Expedition")).to.be.eq("curious-expedition-switch");
    expect(buildSlug("switch")("Ara Fell Enhanced Edition")).to.be.eq("ara-fell-enhanced-edition-switch");
    expect(buildSlug("switch")("Snakeybus")).to.be.eq("snakeybus-switch");
    expect(buildSlug("switch")("Wanba Warriors")).to.be.eq("wanba-warriors-switch");
    expect(buildSlug("switch")("One Step From Eden")).to.be.eq("one-step-from-eden-switch");
    expect(buildSlug("switch")("Duck Souls+")).to.be.eq("duck-souls-switch");
    expect(buildSlug("switch")("Bohemian Killing")).to.be.eq("bohemian-killing-switch");
    expect(buildSlug("switch")("Dogurai")).to.be.eq("dogurai-switch");
    expect(buildSlug("switch")("Lost Artifacts")).to.be.eq("lost-artifacts-switch");
    expect(buildSlug("switch")("HyperParasite")).to.be.eq("hyperparasite-switch");
    expect(buildSlug("switch")("In Other Waters")).to.be.eq("in-other-waters-switch");
    expect(buildSlug("switch")("Slot")).to.be.eq("slot-switch");
    expect(buildSlug("switch")("Wheel of Fortune®")).to.be.eq("wheel-of-fortune-switch");
    expect(buildSlug("switch")("Jeopardy!®")).to.be.eq("jeopardy-switch");
    expect(buildSlug("switch")("Good Job!")).to.be.eq("good-job-switch");
    expect(buildSlug("switch")("51 Worldwide Games")).to.be.eq("51-worldwide-games-switch");
    expect(buildSlug("switch")("BioShock: The Collection")).to.be.eq("bioshock-the-collection-switch");
    expect(buildSlug("switch")("STAR WARS™ Jedi Knight: Jedi Academy")).to.be.eq(
      "star-wars-jedi-knight-jedi-academy-switch",
    );
    expect(buildSlug("switch")("King's Bounty II")).to.be.eq("kings-bounty-ii-switch");
    expect(buildSlug("switch")("Ubongo")).to.be.eq("ubongo-switch");
    expect(buildSlug("switch")("Shinsekai Into the Depths™")).to.be.eq("shinsekai-into-the-depths-switch");
    expect(buildSlug("switch")("Catherine: Full Body")).to.be.eq("catherine-full-body-switch");
    expect(buildSlug("switch")("Convoy: A Tactical Roguelike")).to.be.eq("convoy-a-tactical-roguelike-switch");
    expect(buildSlug("switch")("The Legend of Heroes: Trails of Cold Steel III")).to.be.eq(
      "the-legend-of-heroes-trails-of-cold-steel-iii-switch",
    );
    expect(buildSlug("switch")("Dread Nautical")).to.be.eq("dread-nautical-switch");
    expect(buildSlug("switch")("Galaxy of Pen & Paper +1 Edition")).to.be.eq(
      "galaxy-of-pen-and-paper-1-edition-switch",
    );
    expect(buildSlug("switch")("Totally Reliable Delivery Service")).to.be.eq(
      "totally-reliable-delivery-service-switch",
    );
    expect(buildSlug("switch")("XCOM® 2 Collection")).to.be.eq("xcom-2-collection-switch");
    expect(buildSlug("switch")("Borderlands Legendary Collection")).to.be.eq("borderlands-legendary-collection-switch");
    expect(buildSlug("switch")("Pen and Paper Games Bundle")).to.be.eq("pen-and-paper-games-bundle-switch");
    expect(buildSlug("switch")("Burnout™ Paradise Remastered")).to.be.eq("burnout-paradise-remastered-switch");
    expect(buildSlug("switch")("Panzer Dragoon: Remake")).to.be.eq("panzer-dragoon-remake-switch");
    expect(buildSlug("switch")("FUSER™")).to.be.eq("fuser-switch");
    expect(buildSlug("switch")("Warhammer 40,000: Mechanicus")).to.be.eq("warhammer-40-000-mechanicus-switch");
    expect(buildSlug("switch")("Vigor")).to.be.eq("vigor-switch");
    expect(buildSlug("switch")("Mr. DRILLER DrillLand")).to.be.eq("mr-driller-drillland-switch");
    expect(buildSlug("switch")("Minecraft Dungeons")).to.be.eq("minecraft-dungeons-switch");
    expect(buildSlug("switch")("Gunbrick: Reloaded")).to.be.eq("gunbrick-reloaded-switch");
    expect(buildSlug("switch")("Galaxy Warfighter")).to.be.eq("galaxy-warfighter-switch");
    expect(buildSlug("switch")("The Fox Awaits Me")).to.be.eq("the-fox-awaits-me-switch");
    expect(buildSlug("switch")("Little Busters! Converted Edition")).to.be.eq(
      "little-busters-converted-edition-switch",
    );
    expect(buildSlug("switch")("Arcade Archives IKARI III -THE RESCUE-")).to.be.eq(
      "arcade-archives-ikari-iii-the-rescue-switch",
    );
    expect(buildSlug("switch")("Pocket Harvest")).to.be.eq("pocket-harvest-switch");
    expect(buildSlug("switch")("eSports Legend")).to.be.eq("esports-legend-switch");
    expect(buildSlug("switch")("Help Will Come Tomorrow")).to.be.eq("help-will-come-tomorrow-switch");
    expect(buildSlug("switch")("Boot Hill Bounties")).to.be.eq("boot-hill-bounties-switch");
    expect(buildSlug("switch")("Stones of the Revenant")).to.be.eq("stones-of-the-revenant-switch");
    expect(buildSlug("switch")("Fury Unleashed")).to.be.eq("fury-unleashed-switch");
    expect(buildSlug("switch")("JunkJack")).to.be.eq("junkjack-switch");
    expect(buildSlug("switch")("Save Your Nuts")).to.be.eq("save-your-nuts-switch");
    expect(buildSlug("switch")("Grimvalor")).to.be.eq("grimvalor-switch");
    expect(buildSlug("switch")("Tharsis")).to.be.eq("tharsis-switch");
    expect(buildSlug("switch")("CAN ANDROIDS PRAY: BLUE")).to.be.eq("can-androids-pray-blue-switch");
    expect(buildSlug("switch")("Nirvana Pilot Yume")).to.be.eq("nirvana-pilot-yume-switch");
    expect(buildSlug("switch")("Drift Zone Arcade")).to.be.eq("drift-zone-arcade-switch");
    expect(buildSlug("switch")("RMX Real Motocross")).to.be.eq("rmx-real-motocross-switch");
    expect(buildSlug("switch")("WordHerd")).to.be.eq("wordherd-switch");
    expect(buildSlug("switch")("ITTA")).to.be.eq("itta-switch");
    expect(buildSlug("switch")("OMG Police - Car Chase TV Simulator")).to.be.eq(
      "omg-police-car-chase-tv-simulator-switch",
    );
    expect(buildSlug("switch")("Code: Realize ~Future Blessings~")).to.be.eq("code-realize-future-blessings-switch");
    expect(buildSlug("switch")("Cat Girl Without Salad: Amuse-Bouche")).to.be.eq(
      "cat-girl-without-salad-amuse-bouche-switch",
    );
    expect(buildSlug("switch")("Random Heroes: Gold Edition")).to.be.eq("random-heroes-gold-edition-switch");
    expect(buildSlug("switch")("Ministry of Broadcast")).to.be.eq("ministry-of-broadcast-switch");
    expect(buildSlug("switch")("Depixtion")).to.be.eq("depixtion-switch");
    expect(buildSlug("switch")("Doubles Hard")).to.be.eq("doubles-hard-switch");
    expect(buildSlug("switch")("Fight of Animals")).to.be.eq("fight-of-animals-switch");
    expect(buildSlug("switch")("Freakout: Calamity TV Show")).to.be.eq("freakout-calamity-tv-show-switch");
    expect(buildSlug("switch")("ZHED")).to.be.eq("zhed-switch");
    expect(buildSlug("switch")("Monster Viator")).to.be.eq("monster-viator-switch");
    expect(buildSlug("switch")("Super Space Snake")).to.be.eq("super-space-snake-switch");
    expect(buildSlug("switch")("Desktop Basketball")).to.be.eq("desktop-basketball-switch");
    expect(buildSlug("switch")("Arcade Archives THE TIN STAR")).to.be.eq("arcade-archives-the-tin-star-switch");
    expect(buildSlug("switch")("Finding Teddy 2 : Definitive Edition")).to.be.eq(
      "finding-teddy-2-definitive-edition-switch",
    );
    expect(buildSlug("switch")("1971 Project Helios")).to.be.eq("1971-project-helios-switch");
    expect(buildSlug("switch")("Rover Wars")).to.be.eq("rover-wars-switch");
    expect(buildSlug("switch")("Sunless Sea: Zubmariner Edition")).to.be.eq("sunless-sea-zubmariner-edition-switch");
    expect(buildSlug("switch")("Arcade Spirits")).to.be.eq("arcade-spirits-switch");
    expect(buildSlug("switch")("Slain / Valfaris Big Sugar Bundle")).to.be.eq("slain-valfaris-big-sugar-bundle-switch");
    expect(buildSlug("switch")("Sir Tincan - Adventures in the Castle")).to.be.eq(
      "sir-tincan-adventures-in-the-castle-switch",
    );
    expect(buildSlug("switch")("TY the Tasmanian Tiger HD")).to.be.eq("ty-the-tasmanian-tiger-hd-switch");
    expect(buildSlug("switch")("Rush Rover")).to.be.eq("rush-rover-switch");
    expect(buildSlug("switch")("Path of Giants")).to.be.eq("path-of-giants-switch");
    expect(buildSlug("switch")("Archaica: The Path Of Light")).to.be.eq("archaica-the-path-of-light-switch");
    expect(buildSlug("switch")("Legends of Amberland: The Forgotten Crown")).to.be.eq(
      "legends-of-amberland-the-forgotten-crown-switch",
    );
    expect(buildSlug("switch")("The Otterman Empire")).to.be.eq("the-otterman-empire-switch");
    expect(buildSlug("switch")("Later Daters")).to.be.eq("later-daters-switch");
    expect(buildSlug("switch")("Push the Box")).to.be.eq("push-the-box-switch");
    expect(buildSlug("switch")("Hyper Jam")).to.be.eq("hyper-jam-switch");
    expect(buildSlug("switch")("Lost Artifacts: Golden Island")).to.be.eq("lost-artifacts-golden-island-switch");
    expect(buildSlug("switch")("Blind Men")).to.be.eq("blind-men-switch");
    expect(buildSlug("switch")("Jet Lancer")).to.be.eq("jet-lancer-switch");
    expect(buildSlug("switch")("Car Trader Simulator")).to.be.eq("car-trader-simulator-switch");
    expect(buildSlug("switch")("Damaged In Transit")).to.be.eq("damaged-in-transit-switch");
    expect(buildSlug("switch")("Battle Princess Madelyn Royal Edition")).to.be.eq(
      "battle-princess-madelyn-royal-edition-switch",
    );
    expect(buildSlug("switch")("Null Drifter")).to.be.eq("null-drifter-switch");
    expect(buildSlug("switch")("Kawaii Deathu Desu")).to.be.eq("kawaii-deathu-desu-switch");
    expect(buildSlug("switch")("Black Rainbow")).to.be.eq("black-rainbow-switch");
    expect(buildSlug("switch")("Bridge! 3")).to.be.eq("bridge-3-switch");
    expect(buildSlug("switch")("Super Pixel Racers")).to.be.eq("super-pixel-racers-switch");
    expect(buildSlug("switch")("12 Labours of Hercules II: The Cretan Bull")).to.be.eq(
      "12-labours-of-hercules-ii-the-cretan-bull-switch",
    );
    expect(buildSlug("switch")("Yumeutsutsu Re:After")).to.be.eq("yumeutsutsu-re-after-switch");
    expect(buildSlug("switch")("Yumeutsutsu Re:Master")).to.be.eq("yumeutsutsu-re-master-switch");
    expect(buildSlug("switch")("Dungeon of the Endless")).to.be.eq("dungeon-of-the-endless-switch");
    expect(buildSlug("switch")("Arcade Archives FLAK ATTACK")).to.be.eq("arcade-archives-flak-attack-switch");
    expect(buildSlug("switch")("A Fold Apart")).to.be.eq("a-fold-apart-switch");
    expect(buildSlug("switch")("ACA NEOGEO NINJA COMMANDO")).to.be.eq("aca-neogeo-ninja-commando-switch");
    expect(buildSlug("switch")("Adventure Time: Pirates of the Enchiridion")).to.be.eq(
      "adventure-time-pirates-of-the-enchiridion-switch",
    );
    expect(buildSlug("switch")("ALPHA")).to.be.eq("alpha-switch");
    expect(buildSlug("switch")("Arcade Archives LIFE FORCE")).to.be.eq("arcade-archives-life-force-switch");
    expect(buildSlug("switch")("Arcade Archives MAT MANIA EXCITING HOUR")).to.be.eq(
      "arcade-archives-mat-mania-exciting-hour-switch",
    );
    expect(buildSlug("switch")("Arcade Archives MX5000")).to.be.eq("arcade-archives-mx5000-switch");
    expect(buildSlug("switch")("Arcade Archives Scramble")).to.be.eq("arcade-archives-scramble-switch");
    expect(buildSlug("switch")("Bit Dungeon Plus")).to.be.eq("bit-dungeon-plus-switch");
    expect(buildSlug("switch")("Collidalot")).to.be.eq("collidalot-switch");
    expect(buildSlug("switch")("Dead Fun Pack: Penguins and Aliens Strike Again")).to.be.eq(
      "dead-fun-pack-penguins-and-aliens-strike-again-switch",
    );
    expect(buildSlug("switch")("Deathstate : Abyssal Edition")).to.be.eq("deathstate-abyssal-edition-switch");
    expect(buildSlug("switch")("Flan")).to.be.eq("flan-switch");
    expect(buildSlug("switch")("Frozen Friends")).to.be.eq("frozen-friends-switch");
    expect(buildSlug("switch")("I Am The Hero")).to.be.eq("i-am-the-hero-switch");
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Break Thru")).to.be.eq("johnny-turbos-arcade-break-thru-switch");
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Fighter's History")).to.be.eq(
      "johnny-turbos-arcade-fighters-history-switch",
    );
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Gate Of Doom")).to.be.eq(
      "johnny-turbos-arcade-gate-of-doom-switch",
    );
    expect(buildSlug("switch")("Johnny Turbo's Arcade: Night Slashers")).to.be.eq(
      "johnny-turbos-arcade-night-slashers-switch",
    );
    expect(buildSlug("switch")("JumpHead: Battle4Fun!")).to.be.eq("jumphead-battle4fun-switch");
    expect(buildSlug("switch")("Life Goes On")).to.be.eq("life-goes-on-switch");
    expect(buildSlug("switch")("One Finger Death Punch 2")).to.be.eq("one-finger-death-punch-2-switch");
    expect(buildSlug("switch")("Plunge")).to.be.eq("plunge-switch");
    expect(buildSlug("switch")("Puzzle & Dragons GOLD")).to.be.eq("puzzle-and-dragons-gold-switch");
    expect(buildSlug("switch")("Rainbows, toilets & unicorns")).to.be.eq("rainbows-toilets-and-unicorns-switch");
    expect(buildSlug("switch")("Reaper: Tale of a Pale Swordsman")).to.be.eq("reaper-tale-of-a-pale-swordsman-switch");
    expect(buildSlug("switch")("Ritual: Sorcerer Angel")).to.be.eq("ritual-sorcerer-angel-switch");
    expect(buildSlug("switch")("Rocket Rabbit - Coin Race")).to.be.eq("rocket-rabbit-coin-race-switch");
    expect(buildSlug("switch")("American Ninja Warrior: Challenge")).to.be.eq(
      "american-ninja-warrior-challenge-switch",
    );
    expect(buildSlug("switch")("Battle Chef Brigade Deluxe")).to.be.eq("battle-chef-brigade-deluxe-switch");
    expect(buildSlug("switch")("Football Heroes Turbo")).to.be.eq("football-heroes-turbo-switch");
    expect(buildSlug("switch")("LEGO® NINJAGO® Movie Video Game")).to.be.eq("lego-ninjago-movie-video-game-switch");
    expect(buildSlug("switch")("Lucah: Born of a Dream")).to.be.eq("lucah-born-of-a-dream-switch");
    expect(buildSlug("switch")("Mowin' & Throwin'")).to.be.eq("mowin-and-throwin-switch");
    expect(buildSlug("switch")("Munchkin")).to.be.eq("munchkin-switch");
    expect(buildSlug("switch")("NARUTO SHIPPUDEN: Ultimate Ninja STORM 3 Full Burst")).to.be.eq(
      "naruto-shippuden-ultimate-ninja-storm-3-full-burst-switch",
    );
    expect(buildSlug("switch")("Robot Squad Simulator")).to.be.eq("robot-squad-simulator-switch");
    expect(buildSlug("switch")("SCRAP RUSH!!")).to.be.eq("scrap-rush-switch");
    expect(buildSlug("switch")("SEGA Genesis Classics")).to.be.eq("sega-genesis-classics-switch");
    expect(buildSlug("switch")("Sin Slayers")).to.be.eq("sin-slayers-switch");
    expect(buildSlug("switch")("South Park™: The Fractured but Whole™ - Standard Edition")).to.be.eq(
      "south-park-the-fractured-but-whole-standard-edition-switch",
    );
    expect(buildSlug("switch")("Super Rock Blasters!")).to.be.eq("super-rock-blasters-switch");
    expect(buildSlug("switch")("Unworthy")).to.be.eq("unworthy-switch");
    expect(buildSlug("switch")("Wild Guns&#8482; Reloaded")).to.be.eq("wild-gunsand-8482-reloaded-switch");
    expect(buildSlug("switch")("ARCADE FUZZ")).to.be.eq("arcade-fuzz-switch");
    expect(buildSlug("switch")("BATTLE & CRASH")).to.be.eq("battle-and-crash-switch");
    expect(buildSlug("switch")("Deadly Fighter 2")).to.be.eq("deadly-fighter-2-switch");
    expect(buildSlug("switch")("Dungeon Shooting")).to.be.eq("dungeon-shooting-switch");
    expect(buildSlug("switch")("KADOBAT WARS")).to.be.eq("kadobat-wars-switch");
    expect(buildSlug("switch")("Mah-jongg Puzzle Pai-Sen")).to.be.eq("mah-jongg-puzzle-pai-sen-switch");
    expect(buildSlug("switch")("OTTTD: Over The Top Tower Defense")).to.be.eq(
      "otttd-over-the-top-tower-defense-switch",
    );
    expect(buildSlug("switch")("Please, Don't Touch Anything: Classic")).to.be.eq(
      "please-dont-touch-anything-classic-switch",
    );
    expect(buildSlug("switch")("Revenge of the Bird King")).to.be.eq("revenge-of-the-bird-king-switch");
    expect(buildSlug("switch")("SEGA AGES Lightening Force: Quest for the Darkstar")).to.be.eq(
      "sega-ages-lightening-force-quest-for-the-darkstar-switch",
    );
    expect(buildSlug("switch")("Super Bit Blaster XL")).to.be.eq("super-bit-blaster-xl-switch");
    expect(buildSlug("switch")("Super Destronaut DX")).to.be.eq("super-destronaut-dx-switch");
    expect(buildSlug("switch")("Sword of the Guardian")).to.be.eq("sword-of-the-guardian-switch");
    expect(buildSlug("switch")("Top Run")).to.be.eq("top-run-switch");
    expect(buildSlug("switch")("What the Box?")).to.be.eq("what-the-box-switch");
    expect(buildSlug("switch")("Arc of Alchemist")).to.be.eq("arc-of-alchemist-switch");
    expect(buildSlug("switch")("Cytus a")).to.be.eq("cytus-a-switch");
    expect(buildSlug("switch")("DARK SOULS&#8482;: REMASTERED")).to.be.eq("dark-soulsand-8482-remastered-switch");
    expect(buildSlug("switch")("DODGE HARD")).to.be.eq("dodge-hard-switch");
    expect(buildSlug("switch")("Eternal Edge")).to.be.eq("eternal-edge-switch");
    expect(buildSlug("switch")("Minecraft: Nintendo Switch Edition - Digital Version")).to.be.eq(
      "minecraft-nintendo-switch-edition-digital-version-switch",
    );
    expect(buildSlug("switch")("Overwatch®: Legendary Edition")).to.be.eq("overwatch-legendary-edition-switch");
    expect(buildSlug("switch")("Wolfenstein: Youngblood Deluxe Edition")).to.be.eq(
      "wolfenstein-youngblood-deluxe-edition-switch",
    );
    expect(buildSlug("switch")("Wolfenstein: Youngblood Standard Edition")).to.be.eq(
      "wolfenstein-youngblood-standard-edition-switch",
    );
    expect(buildSlug("switch")("Attack on Titan 2")).to.be.eq("attack-on-titan-2-switch");
    expect(buildSlug("switch")("WARRIORS OROCHI 4")).to.be.eq("warriors-orochi-4-switch");
    expect(buildSlug("switch")("Wolfenstein: Youngblood Trial Edition")).to.be.eq(
      "wolfenstein-youngblood-trial-edition-switch",
    );
    expect(buildSlug("switch")("Axiom Verge 2")).to.be.eq("axiom-verge-2-switch");
    expect(buildSlug("switch")("B.Ark")).to.be.eq("bark-switch");
    expect(buildSlug("switch")("Baldo The guardian owls")).to.be.eq("baldo-the-guardian-owls-switch");
    expect(buildSlug("switch")("BioShock 2 Remastered")).to.be.eq("bioshock-2-remastered-switch");
    expect(buildSlug("switch")("BioShock Infinite: The Complete Edition")).to.be.eq(
      "bioshock-infinite-the-complete-edition-switch",
    );
    expect(buildSlug("switch")("BioShock Remastered")).to.be.eq("bioshock-remastered-switch");
    expect(buildSlug("switch")("Blue Fire")).to.be.eq("blue-fire-switch");
    expect(buildSlug("switch")("Borderlands: Game of the Year Edition")).to.be.eq(
      "borderlands-game-of-the-year-edition-switch",
    );
    expect(buildSlug("switch")("Borderlands: The Handsome Collection")).to.be.eq(
      "borderlands-the-handsome-collection-switch",
    );
    expect(buildSlug("switch")("Bounty Battle")).to.be.eq("bounty-battle-switch");
    expect(buildSlug("switch")("Boyfriend Dungeon")).to.be.eq("boyfriend-dungeon-switch");
    expect(buildSlug("switch")("DRAGON BALL Z Super Butoden")).to.be.eq("dragon-ball-z-super-butoden-switch");
    expect(buildSlug("switch")("Dreamscaper")).to.be.eq("dreamscaper-switch");
    expect(buildSlug("switch")("Dungeon Defenders: Awakened")).to.be.eq("dungeon-defenders-awakened-switch");
    expect(buildSlug("switch")("Eastward")).to.be.eq("eastward-switch");
    expect(buildSlug("switch")("Eldest Souls")).to.be.eq("eldest-souls-switch");
    expect(buildSlug("switch")("Ghost of a Tale")).to.be.eq("ghost-of-a-tale-switch");
    expect(buildSlug("switch")("Gleamlight")).to.be.eq("gleamlight-switch");
    expect(buildSlug("switch")("Liberated")).to.be.eq("liberated-switch");
    expect(buildSlug("switch")("Metro Redux")).to.be.eq("metro-redux-switch");
    expect(buildSlug("switch")("Ninjala")).to.be.eq("ninjala-switch");
    expect(buildSlug("switch")("PixelJunk Eden 2")).to.be.eq("pixeljunk-eden-2-switch");
    expect(buildSlug("switch")("Quantum League")).to.be.eq("quantum-league-switch");
    expect(buildSlug("switch")("Rogue Company")).to.be.eq("rogue-company-switch");
    expect(buildSlug("switch")("Sail Forth")).to.be.eq("sail-forth-switch");
    expect(buildSlug("switch")("Sakuna: Of Rice and Ruin")).to.be.eq("sakuna-of-rice-and-ruin-switch");
    expect(buildSlug("switch")("Skater XL")).to.be.eq("skater-xl-switch");
    expect(buildSlug("switch")("SKYLANDERS® IMAGINATORS")).to.be.eq("skylanders-imaginators-switch");
    expect(buildSlug("switch")("Steven Universe Save the Light & OK K.O.! Let's Play Heroes Combo")).to.be.eq(
      "steven-universe-save-the-light-and-ok-ko-lets-play-heroes-combo-switch",
    );
    expect(buildSlug("switch")("Superliminal")).to.be.eq("superliminal-switch");
    expect(buildSlug("switch")("The Good Life")).to.be.eq("the-good-life-switch");
    expect(buildSlug("switch")("Vigor - Closed Beta")).to.be.eq("vigor-closed-beta-switch");
    expect(buildSlug("switch")("Wolfenstein: Youngblood")).to.be.eq("wolfenstein-youngblood-switch");
    expect(buildSlug("switch")("A Dark Room")).to.be.eq("a-dark-room-switch");
    expect(buildSlug("switch")("Asemblance")).to.be.eq("asemblance-switch");
    expect(buildSlug("switch")("Brave Dungeon + Dark Witch Story:COMBAT")).to.be.eq(
      "brave-dungeon-dark-witch-story-combat-switch",
    );
    expect(buildSlug("switch")("CopperBell")).to.be.eq("copperbell-switch");
    expect(buildSlug("switch")("Dark Tower: RPG Dungeon Puzzle")).to.be.eq("dark-tower-rpg-dungeon-puzzle-switch");
    expect(buildSlug("switch")("Darkest Hunter")).to.be.eq("darkest-hunter-switch");
    expect(buildSlug("switch")("Fledgling Heroes")).to.be.eq("fledgling-heroes-switch");
    expect(buildSlug("switch")("Holy Potatoes! We're In Space?!")).to.be.eq("holy-potatoes-were-in-space-switch");
    expect(buildSlug("switch")("MudRunner - American Wilds")).to.be.eq("mudrunner-american-wilds-switch");
    expect(buildSlug("switch")("Piczle Cross Adventure")).to.be.eq("piczle-cross-adventure-switch");
    expect(buildSlug("switch")("Purrs In Heaven")).to.be.eq("purrs-in-heaven-switch");
    expect(buildSlug("switch")("SELF")).to.be.eq("self-switch");
    expect(buildSlug("switch")("SmuggleCraft")).to.be.eq("smugglecraft-switch");
    expect(buildSlug("switch")("Zeus Quests Remastered")).to.be.eq("zeus-quests-remastered-switch");
    expect(buildSlug("switch")("Caged Garden Cock Robin")).to.be.eq("caged-garden-cock-robin-switch");
    expect(buildSlug("switch")("D/Generation HD")).to.be.eq("d-generation-hd-switch");
    expect(buildSlug("switch")("Enchanted in the Moonlight - Kiryu, Chikage & Yukinojo -")).to.be.eq(
      "enchanted-in-the-moonlight-kiryu-chikage-and-yukinojo-switch",
    );
    expect(buildSlug("switch")("Enchanted in the Moonlight - Miyabi, Kyoga & Samon -")).to.be.eq(
      "enchanted-in-the-moonlight-miyabi-kyoga-and-samon-switch",
    );
    expect(buildSlug("switch")("Indie Gems Bundle - Nonograms edition")).to.be.eq(
      "indie-gems-bundle-nonograms-edition-switch",
    );
    expect(buildSlug("switch")("Kissed by the Baddest Bidder")).to.be.eq("kissed-by-the-baddest-bidder-switch");
    expect(buildSlug("switch")("Mario + Rabbids Kingdom Battle Gold Edition")).to.be.eq(
      "mario-rabbids-kingdom-battle-gold-edition-switch",
    );
    expect(buildSlug("switch")("MazM: Jekyll and Hyde")).to.be.eq("mazm-jekyll-and-hyde-switch");
    expect(buildSlug("switch")("Out There: &#937; The Alliance")).to.be.eq("out-there-and-937-the-alliance-switch");
    expect(buildSlug("switch")("Party Planet")).to.be.eq("party-planet-switch");
    expect(buildSlug("switch")("Starlink: Battle For Atlas Digital Edition")).to.be.eq(
      "starlink-battle-for-atlas-digital-edition-switch",
    );
    expect(buildSlug("switch")("Ultrawings Flat")).to.be.eq("ultrawings-flat-switch");
    expect(buildSlug("switch")("Bash The Bear")).to.be.eq("bash-the-bear-switch");
    expect(buildSlug("switch")("Breakfast Bar Tycoon")).to.be.eq("breakfast-bar-tycoon-switch");
    expect(buildSlug("switch")("Caveman Chuck: Prehistoric Adventure")).to.be.eq(
      "caveman-chuck-prehistoric-adventure-switch",
    );
    expect(buildSlug("switch")("Scrap")).to.be.eq("scrap-switch");
    expect(buildSlug("switch")("Y&#333;danji")).to.be.eq("yand-333-danji-switch");
    expect(buildSlug("switch")("Star-Crossed Myth - The Department of Punishments -")).to.be.eq(
      "star-crossed-myth-the-department-of-punishments-switch",
    );
    expect(buildSlug("switch")("Star-Crossed Myth - The Department of Wishes")).to.be.eq(
      "star-crossed-myth-the-department-of-wishes-switch",
    );
    expect(buildSlug("switch")("Starlink: Battle for Atlas Deluxe Edition")).to.be.eq(
      "starlink-battle-for-atlas-deluxe-edition-switch",
    );
    expect(buildSlug("switch")("Ni no Kuni: Wrath of the White Witch")).to.be.eq(
      "ni-no-kuni-wrath-of-the-white-witch-switch",
    );
    expect(buildSlug("switch")("Pokémon Sword & Pokémon Shield Double Pack Digital Version")).to.be.eq(
      "pokemon-sword-and-pokemon-shield-double-pack-digital-version-switch",
    );
    expect(buildSlug("switch")("Bake ’n Switch")).to.be.eq("bake-n-switch");
    expect(buildSlug("switch")("Blair Witch")).to.be.eq("blair-witch-switch");
    expect(buildSlug("switch")("Cyanide & Happiness - Freakpocalypse: Part 1")).to.be.eq(
      "cyanide-and-happiness-freakpocalypse-part-1-switch",
    );
    expect(buildSlug("switch")("Dicey Dungeons")).to.be.eq("dicey-dungeons-switch");
    expect(buildSlug("switch")("Gal Metal World Tour Edition")).to.be.eq("gal-metal-world-tour-edition-switch");
    expect(buildSlug("switch")("I Am Dead")).to.be.eq("i-am-dead-switch");
    expect(buildSlug("switch")("PHOGS!")).to.be.eq("phogs-switch");
    expect(buildSlug("switch")("Spiritfarer")).to.be.eq("spiritfarer-switch");
    expect(buildSlug("switch")("Sports Story")).to.be.eq("sports-story-switch");
    expect(buildSlug("switch")("Summer in Mara")).to.be.eq("summer-in-mara-switch");
    expect(buildSlug("switch")("The Elder Scrolls: Blades")).to.be.eq("the-elder-scrolls-blades-switch");
    expect(buildSlug("switch")("The Survivalists")).to.be.eq("the-survivalists-switch");
    expect(buildSlug("switch")("ACA NEOGEO BIG TOURNAMENT GOLF")).to.be.eq("aca-neogeo-big-tournament-golf-switch");
    expect(buildSlug("switch")("Blindy")).to.be.eq("blindy-switch");
    expect(buildSlug("switch")("bloxiq")).to.be.eq("bloxiq-switch");
    expect(buildSlug("switch")("SUPERBEAT: XONiC")).to.be.eq("superbeat-xonic-switch");
    expect(buildSlug("switch")("30-in-1 Game Collection")).to.be.eq("30-in-1-game-collection-switch");
    expect(buildSlug("switch")("Theme Park Simulator")).to.be.eq("theme-park-simulator-switch");
    expect(buildSlug("switch")("Trax - Build it Race it")).to.be.eq("trax-build-it-race-it-switch");
    expect(buildSlug("switch")("Minefield Kodobur Yazilim")).to.be.eq("minefield-kodobur-yazilim-switch");
    expect(buildSlug("switch")("Party Crashers")).to.be.eq("party-crashers-switch");
    expect(buildSlug("switch")("Proficient Paddles Deluxe")).to.be.eq("proficient-paddles-deluxe-switch");
    expect(buildSlug("switch")("NAMCO MUSEUM (PAC-MAN VS. Free Multiplayer-only Ver.)")).to.be.eq(
      "namco-museum-pac-man-vs-free-multiplayer-only-ver-switch",
    );
    expect(buildSlug("switch")("SuperMash")).to.be.eq("supermash-switch");
    expect(buildSlug("switch")("2048 CAT")).to.be.eq("2048-cat-switch");
    expect(buildSlug("switch")("America's Greatest Game Shows: Wheel of Fortune & Jeopardy!")).to.be.eq(
      "americas-greatest-game-shows-wheel-of-fortune-and-jeopardy-switch",
    );
    expect(buildSlug("switch")("Animated Jigsaws: Wild Animals")).to.be.eq("animated-jigsaws-wild-animals-switch");
    expect(buildSlug("switch")("Clue: The Classic Mystery Game")).to.be.eq("clue-the-classic-mystery-game-switch");
    expect(buildSlug("switch")("Funghi Explosion")).to.be.eq("funghi-explosion-switch");
    expect(buildSlug("switch")("I am Ball")).to.be.eq("i-am-ball-switch");
    expect(buildSlug("switch")("Kensh&#333;")).to.be.eq("kenshand-333-switch");
    expect(buildSlug("switch")("Lost Phones Stories")).to.be.eq("lost-phones-stories-switch");
    expect(buildSlug("switch")("Please, Don't Touch Anything")).to.be.eq("please-dont-touch-anything-switch");
    expect(buildSlug("switch")("Season Match")).to.be.eq("season-match-switch");
    expect(buildSlug("switch")("Solitaire Deluxe Bundle - 3 in 1")).to.be.eq("solitaire-deluxe-bundle-3-in-1-switch");
    expect(buildSlug("switch")("SUPER DRAGON BALL HEROES WORLD MISSION - Launch Edition")).to.be.eq(
      "super-dragon-ball-heroes-world-mission-launch-edition-switch",
    );
    expect(buildSlug("switch")("Trials Rising Gold Edition")).to.be.eq("trials-rising-gold-edition-switch");
    expect(buildSlug("switch")("Trials Rising Standard Edition")).to.be.eq("trials-rising-standard-edition-switch");
    expect(buildSlug("switch")("Atelier Arland series Deluxe Pack")).to.be.eq(
      "atelier-arland-series-deluxe-pack-switch",
    );
    expect(buildSlug("switch")("Banner Saga 1")).to.be.eq("banner-saga-1-switch");
    expect(buildSlug("switch")("Banner Saga Trilogy")).to.be.eq("banner-saga-trilogy-switch");
    expect(buildSlug("switch")("Best Friend Forever")).to.be.eq("best-friend-forever-switch");
    expect(buildSlug("switch")("Bravely Default™ II")).to.be.eq("bravely-default-ii-switch");
    expect(buildSlug("switch")("Bravely Default™ II Demo")).to.be.eq("bravely-default-ii-demo-switch");
    expect(buildSlug("switch")("Empire of Sin")).to.be.eq("empire-of-sin-switch");
    expect(buildSlug("switch")("LongStory: A dating game for the real world")).to.be.eq(
      "longstory-a-dating-game-for-the-real-world-switch",
    );
    expect(buildSlug("switch")("MetaChampions")).to.be.eq("metachampions-switch");
    expect(buildSlug("switch")("Sky: Children of the Light")).to.be.eq("sky-children-of-the-light-switch");
    expect(buildSlug("switch")("Treachery in Beatdown City")).to.be.eq("treachery-in-beatdown-city-switch");
    expect(buildSlug("switch")("Xenoblade Chronicles 2: Torna ~ The Golden Country")).to.be.eq(
      "xenoblade-chronicles-2-torna-the-golden-country-switch",
    );
    expect(buildSlug("switch")("Eight-Minute Empire")).to.be.eq("eight-minute-empire-switch");
    expect(buildSlug("switch")("Hasbro Game Night")).to.be.eq("hasbro-game-night-switch");
    expect(buildSlug("switch")("Mecho Wars: Desert Ashes")).to.be.eq("mecho-wars-desert-ashes-switch");
    expect(buildSlug("switch")("RISK Global Domination")).to.be.eq("risk-global-domination-switch");
    expect(buildSlug("switch")("Soccer, Tactics & Glory")).to.be.eq("soccer-tactics-and-glory-switch");
    expect(buildSlug("switch")("The Lord of the Rings: Adventure Card Game - Definitive Edition")).to.be.eq(
      "the-lord-of-the-rings-adventure-card-game-definitive-edition-switch",
    );
    expect(buildSlug("switch")("WINGSPAN")).to.be.eq("wingspan-switch");
    expect(buildSlug("switch")("Clubhouse Games™: 51 Worldwide Classics")).to.be.eq(
      "clubhouse-games-51-worldwide-classics-switch",
    );
    expect(buildSlug("switch")("Pool BILLIARD")).to.be.eq("pool-billiard-switch");
    expect(buildSlug("switch")("Super Beat Sports&#8482;")).to.be.eq("super-beat-sportsand-8482-switch");
    expect(buildSlug("switch")("SkateBIRD")).to.be.eq("skatebird-switch");
    expect(buildSlug("switch")("Top Speed: Drag & Fast Racing")).to.be.eq("top-speed-drag-and-fast-racing-switch");
    expect(buildSlug("switch")("TT Isle of Man")).to.be.eq("tt-isle-of-man-switch");
    expect(buildSlug("switch")("Let's Sing Country")).to.be.eq("lets-sing-country-switch");
    expect(buildSlug("switch")("FIFA 18")).to.be.eq("fifa-18-switch");
    expect(buildSlug("switch")("FIFA 19")).to.be.eq("fifa-19-switch");
    expect(buildSlug("switch")("NBA 2K18 Legend Edition")).to.be.eq("nba-2k18-legend-edition-switch");
    expect(buildSlug("switch")("NBA 2K18 Legend Edition Gold")).to.be.eq("nba-2k18-legend-edition-gold-switch");
    expect(buildSlug("switch")("NBA 2K19 20th Anniversary Edition")).to.be.eq(
      "nba-2k19-20th-anniversary-edition-switch",
    );
    expect(buildSlug("switch")("Ring Fit Adventure")).to.be.eq("ring-fit-adventure-switch");
    expect(buildSlug("switch")("Hello Kitty Kruisers")).to.be.eq("hello-kitty-kruisers-switch");
    expect(buildSlug("switch")("Truck Racing Championship")).to.be.eq("truck-racing-championship-switch");
    expect(buildSlug("switch")("Hulu")).to.be.eq("hulu-switch");
  });
});
