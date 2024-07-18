// script.js
let chart;
let fullData;
let labels = [];
let datasets = {};

document.addEventListener('DOMContentLoaded', function() {
    fetch('port_stat_records.json')
        .then(response => response.json())
        .then(data => {
            fullData = data;
            labels = data.map(entry => entry.date);
            datasets = {

                '2048.zip': {
                    label: '2048',
                    data: data.map(entry => entry.stats['2048.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'a7xpg.zip': {
                    label: 'A7Xpg',
                    data: data.map(entry => entry.stats['a7xpg.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'abes_adventure.zip': {
                    label: 'Abe&lsquo;s Amazing Adventure',
                    data: data.map(entry => entry.stats['abes_adventure.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'abombniball.zip': {
                    label: 'Abombniball',
                    data: data.map(entry => entry.stats['abombniball.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'absolutereflex.zip': {
                    label: 'Absolute Reflex',
                    data: data.map(entry => entry.stats['absolutereflex.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'abuse.zip': {
                    label: 'Abuse',
                    data: data.map(entry => entry.stats['abuse.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'alchemyquest.zip': {
                    label: 'Alchemy Quest',
                    data: data.map(entry => entry.stats['alchemyquest.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'alephone-marathon.zip': {
                    label: 'Aleph-One Marathon 1',
                    data: data.map(entry => entry.stats['alephone-marathon.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'alephone-marathon2.zip': {
                    label: 'Aleph-One Marathon 2',
                    data: data.map(entry => entry.stats['alephone-marathon2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'alephone-marathoninfinity.zip': {
                    label: 'Aleph-One Marathon Infinity',
                    data: data.map(entry => entry.stats['alephone-marathoninfinity.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'alienblaster.zip': {
                    label: 'Alien Blaster',
                    data: data.map(entry => entry.stats['alienblaster.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'alienpogs.zip': {
                    label: 'Alien Pogs From Outer Space',
                    data: data.map(entry => entry.stats['alienpogs.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'aliensquatter.zip': {
                    label: 'Alien Squatter',
                    data: data.map(entry => entry.stats['aliensquatter.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'am2r.zip': {
                    label: 'AM2R',
                    data: data.map(entry => entry.stats['am2r.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'anarch.zip': {
                    label: 'Anarch',
                    data: data.map(entry => entry.stats['anarch.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'angband.zip': {
                    label: 'Angband',
                    data: data.map(entry => entry.stats['angband.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'annalynn.zip': {
                    label: 'Annalynn',
                    data: data.map(entry => entry.stats['annalynn.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'anodyne.zip': {
                    label: 'Anodyne',
                    data: data.map(entry => entry.stats['anodyne.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'apocrunner.zip': {
                    label: 'Apoc Runner',
                    data: data.map(entry => entry.stats['apocrunner.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'apotris.zip': {
                    label: 'Apotris',
                    data: data.map(entry => entry.stats['apotris.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'apricots.zip': {
                    label: 'Apricots',
                    data: data.map(entry => entry.stats['apricots.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'arkovstower.zip': {
                    label: 'Arkovs Tower',
                    data: data.map(entry => entry.stats['arkovstower.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'armagetronad.zip': {
                    label: 'Armagetron Advanced',
                    data: data.map(entry => entry.stats['armagetronad.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'asylum.zip': {
                    label: 'Asylum',
                    data: data.map(entry => entry.stats['asylum.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'augustus.zip': {
                    label: 'Augustus',
                    data: data.map(entry => entry.stats['augustus.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'avp.zip': {
                    label: 'Alien vs Predator',
                    data: data.map(entry => entry.stats['avp.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'axiom.verge.zip': {
                    label: 'Axiom Verge',
                    data: data.map(entry => entry.stats['axiom.verge.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'balatro.zip': {
                    label: 'Balatro',
                    data: data.map(entry => entry.stats['balatro.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'banana.duck.zip': {
                    label: 'Banana Duck',
                    data: data.map(entry => entry.stats['banana.duck.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bananaguy2.zip': {
                    label: 'Bananaguy 2',
                    data: data.map(entry => entry.stats['bananaguy2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bananaguyclassic.zip': {
                    label: 'Bananaguy Classic',
                    data: data.map(entry => entry.stats['bananaguyclassic.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'barbarian.zip': {
                    label: 'Barbarian',
                    data: data.map(entry => entry.stats['barbarian.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'battalion.zip': {
                    label: 'Battalion',
                    data: data.map(entry => entry.stats['battalion.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bbja.zip': {
                    label: 'Blues Brothers: Jukebox Adventure',
                    data: data.map(entry => entry.stats['bbja.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'beat2x.zip': {
                    label: 'Beat2x',
                    data: data.map(entry => entry.stats['beat2x.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bermuda_syndrome.zip': {
                    label: 'Bermuda Syndrome',
                    data: data.map(entry => entry.stats['bermuda_syndrome.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'billyfrontier.zip': {
                    label: 'Billy Frontier',
                    data: data.map(entry => entry.stats['billyfrontier.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bittriprunner2.zip': {
                    label: 'BIT.TRIP Presents... Runner2: Future Legend of Rhythm Alien',
                    data: data.map(entry => entry.stats['bittriprunner2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'blastius.zip': {
                    label: 'Blastius',
                    data: data.map(entry => entry.stats['blastius.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bleed.zip': {
                    label: 'Bleed',
                    data: data.map(entry => entry.stats['bleed.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bleed2.zip': {
                    label: 'Bleed 2',
                    data: data.map(entry => entry.stats['bleed2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'blobby.volley2.zip': {
                    label: 'Blobby Volley 2',
                    data: data.map(entry => entry.stats['blobby.volley2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'blobwars.zip': {
                    label: 'Blob Wars: Metal Blob Solid',
                    data: data.map(entry => entry.stats['blobwars.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'block.attack.zip': {
                    label: 'Block Attack',
                    data: data.map(entry => entry.stats['block.attack.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'blockdude_playdate.zip': {
                    label: 'Blockdude Playdate',
                    data: data.map(entry => entry.stats['blockdude_playdate.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'blockout2.zip': {
                    label: 'BlockOut II',
                    data: data.map(entry => entry.stats['blockout2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'blood.zip': {
                    label: 'Blood',
                    data: data.map(entry => entry.stats['blood.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'blossomtales2.zip': {
                    label: 'Blossom Tales II',
                    data: data.map(entry => entry.stats['blossomtales2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bluerevolver.zip': {
                    label: 'BLUE REVOLVER',
                    data: data.map(entry => entry.stats['bluerevolver.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'blues.brothers.zip': {
                    label: 'Blues Brothers',
                    data: data.map(entry => entry.stats['blues.brothers.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bnbmax.zip': {
                    label: 'Bumpers & Broadswords Maximum',
                    data: data.map(entry => entry.stats['bnbmax.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bnbtourn.zip': {
                    label: 'Bumpers & Broadswords Tournament',
                    data: data.map(entry => entry.stats['bnbtourn.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'boneraiserminions.zip': {
                    label: 'Boneraiser Minions',
                    data: data.map(entry => entry.stats['boneraiserminions.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'boni.zip': {
                    label: 'Boni+',
                    data: data.map(entry => entry.stats['boni.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bootlegbox.zip': {
                    label: 'Bootleg Box',
                    data: data.map(entry => entry.stats['bootlegbox.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'botbreak.zip': {
                    label: 'Botbreak',
                    data: data.map(entry => entry.stats['botbreak.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'botvice.zip': {
                    label: 'Bot Vice',
                    data: data.map(entry => entry.stats['botvice.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bowlingcross.zip': {
                    label: 'Bowling Cross',
                    data: data.map(entry => entry.stats['bowlingcross.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bravedogsroad.zip': {
                    label: 'Brave Dogs Road',
                    data: data.map(entry => entry.stats['bravedogsroad.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'breaker.zip': {
                    label: 'Breaker',
                    data: data.map(entry => entry.stats['breaker.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'brogue.zip': {
                    label: 'Brogue',
                    data: data.map(entry => entry.stats['brogue.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bstone-aog.zip': {
                    label: 'Blake Stone Aliens of Gold',
                    data: data.map(entry => entry.stats['bstone-aog.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bstone-ps.zip': {
                    label: 'Blake Stone Planet Strike',
                    data: data.map(entry => entry.stats['bstone-ps.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bugdom.zip': {
                    label: 'Bugdom',
                    data: data.map(entry => entry.stats['bugdom.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bugscraper.zip': {
                    label: 'Bugscraper',
                    data: data.map(entry => entry.stats['bugscraper.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bumpersbroadswords.zip': {
                    label: 'Bumpers & Broadswords',
                    data: data.map(entry => entry.stats['bumpersbroadswords.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bunnysflowers.zip': {
                    label: 'Bunny&lsquo;s Flowers',
                    data: data.map(entry => entry.stats['bunnysflowers.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'burst.zip': {
                    label: 'Burst',
                    data: data.map(entry => entry.stats['burst.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bytepath.zip': {
                    label: 'BYTEPATH',
                    data: data.map(entry => entry.stats['bytepath.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'bzflag.zip': {
                    label: 'BZFlag',
                    data: data.map(entry => entry.stats['bzflag.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'c-dogs.zip': {
                    label: 'C-Dogs',
                    data: data.map(entry => entry.stats['c-dogs.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cannonball-lr.zip': {
                    label: 'Cannonball',
                    data: data.map(entry => entry.stats['cannonball-lr.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cannonball-st.zip': {
                    label: 'Cannonball Standalone',
                    data: data.map(entry => entry.stats['cannonball-st.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cardswithpersonalities.zip': {
                    label: 'Cards with Personalities',
                    data: data.map(entry => entry.stats['cardswithpersonalities.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'carmageddon.zip': {
                    label: 'Carmageddon',
                    data: data.map(entry => entry.stats['carmageddon.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'carriesorderup.zip': {
                    label: 'Carries&lsquo; Order Up',
                    data: data.map(entry => entry.stats['carriesorderup.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cataclysm-dda.zip': {
                    label: 'Cataclysm: Dark Days Ahead',
                    data: data.map(entry => entry.stats['cataclysm-dda.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'catacomb.zip': {
                    label: 'Catacomb II',
                    data: data.map(entry => entry.stats['catacomb.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'catacomb89.zip': {
                    label: 'Catacomb (1989)',
                    data: data.map(entry => entry.stats['catacomb89.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cattactics.zip': {
                    label: 'Cat Tactics',
                    data: data.map(entry => entry.stats['cattactics.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cave.story-evo.zip': {
                    label: 'Cave Story (Evo)',
                    data: data.map(entry => entry.stats['cave.story-evo.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cave.story.zip': {
                    label: 'Cave Story lr',
                    data: data.map(entry => entry.stats['cave.story.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cavebuster.zip': {
                    label: 'Cave Buster',
                    data: data.map(entry => entry.stats['cavebuster.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cavecrawler.zip': {
                    label: 'Cave Crawler',
                    data: data.map(entry => entry.stats['cavecrawler.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'caveexpress.zip': {
                    label: 'Cave Express',
                    data: data.map(entry => entry.stats['caveexpress.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cavepacker.zip': {
                    label: 'Cave Packer',
                    data: data.map(entry => entry.stats['cavepacker.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cceleste.zip': {
                    label: 'Celeste Classic',
                    data: data.map(entry => entry.stats['cceleste.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'chargekid.zip': {
                    label: 'Charge Kid',
                    data: data.map(entry => entry.stats['chargekid.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'chasm.zip': {
                    label: 'Chasm',
                    data: data.map(entry => entry.stats['chasm.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'chessisstupid.zip': {
                    label: 'Chess is Stupid',
                    data: data.map(entry => entry.stats['chessisstupid.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'chipndale.zip': {
                    label: 'Chip n Dale Rescue Rangers: Remastered',
                    data: data.map(entry => entry.stats['chipndale.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cityglitch.zip': {
                    label: 'cityglitch',
                    data: data.map(entry => entry.stats['cityglitch.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cleavingcaliber.zip': {
                    label: 'Cleaving Caliber',
                    data: data.map(entry => entry.stats['cleavingcaliber.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cliff_hanger.zip': {
                    label: 'Cliff Hanger',
                    data: data.map(entry => entry.stats['cliff_hanger.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'climb.zip': {
                    label: 'Climb',
                    data: data.map(entry => entry.stats['climb.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'clockwind.zip': {
                    label: 'Clockwind',
                    data: data.map(entry => entry.stats['clockwind.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'colorlines.zip': {
                    label: 'ColorLines',
                    data: data.map(entry => entry.stats['colorlines.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'commander.genius.zip': {
                    label: 'Commander Genius',
                    data: data.map(entry => entry.stats['commander.genius.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'corsixth.zip': {
                    label: 'CorsixTH',
                    data: data.map(entry => entry.stats['corsixth.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cosmo-engine.zip': {
                    label: 'Cosmo-Engine',
                    data: data.map(entry => entry.stats['cosmo-engine.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cromagrally.zip': {
                    label: 'Cro-Mag Rally',
                    data: data.map(entry => entry.stats['cromagrally.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cropsmare.zip': {
                    label: 'Cropsmare!',
                    data: data.map(entry => entry.stats['cropsmare.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'crystalsamalgam.zip': {
                    label: 'Crystals of Amalgam',
                    data: data.map(entry => entry.stats['crystalsamalgam.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'curseball.zip': {
                    label: 'Curseball',
                    data: data.map(entry => entry.stats['curseball.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'curseofthearrow.zip': {
                    label: 'Curse of the Arrow',
                    data: data.map(entry => entry.stats['curseofthearrow.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'cybarian.zip': {
                    label: 'Cybarian',
                    data: data.map(entry => entry.stats['cybarian.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'daikatana.zip': {
                    label: 'Daikatana',
                    data: data.map(entry => entry.stats['daikatana.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'darksheep.zip': {
                    label: 'Dark Sheep',
                    data: data.map(entry => entry.stats['darksheep.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'davegnukem.zip': {
                    label: 'Dave Gnukem',
                    data: data.map(entry => entry.stats['davegnukem.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'daydreamer.zip': {
                    label: 'Daydreamer',
                    data: data.map(entry => entry.stats['daydreamer.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'deadicedeluxe.zip': {
                    label: 'Dead Ice Deluxe',
                    data: data.map(entry => entry.stats['deadicedeluxe.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'deep_sleep.zip': {
                    label: 'Deep Sleep',
                    data: data.map(entry => entry.stats['deep_sleep.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'defshot.zip': {
                    label: 'Defshot',
                    data: data.map(entry => entry.stats['defshot.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'demonizer.zip': {
                    label: 'Demonizer',
                    data: data.map(entry => entry.stats['demonizer.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'demonkeep.zip': {
                    label: 'Demon Keep',
                    data: data.map(entry => entry.stats['demonkeep.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'demonstone64.zip': {
                    label: 'Demonstone64',
                    data: data.map(entry => entry.stats['demonstone64.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'depthsoflimbo.zip': {
                    label: 'Depths of Limbo',
                    data: data.map(entry => entry.stats['depthsoflimbo.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'derclou.zip': {
                    label: 'Der Clou!',
                    data: data.map(entry => entry.stats['derclou.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'descent.zip': {
                    label: 'Descent',
                    data: data.map(entry => entry.stats['descent.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'descent2.zip': {
                    label: 'Descent II',
                    data: data.map(entry => entry.stats['descent2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'descent3.zip': {
                    label: 'Descent III',
                    data: data.map(entry => entry.stats['descent3.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'destructivator.zip': {
                    label: 'Destructivator',
                    data: data.map(entry => entry.stats['destructivator.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'destructivator2.zip': {
                    label: 'Destructivator 2',
                    data: data.map(entry => entry.stats['destructivator2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'devilutionx.zip': {
                    label: 'DevilutionX',
                    data: data.map(entry => entry.stats['devilutionx.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'dfencervstheorb.zip': {
                    label: 'D-FENCER VS THE ORB',
                    data: data.map(entry => entry.stats['dfencervstheorb.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'dinothawr.zip': {
                    label: 'Dinothawr',
                    data: data.map(entry => entry.stats['dinothawr.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'diverdown.zip': {
                    label: 'Diver Down',
                    data: data.map(entry => entry.stats['diverdown.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'domeromantik.zip': {
                    label: 'Dome Romantik',
                    data: data.map(entry => entry.stats['domeromantik.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'donut.dodo.zip': {
                    label: 'Donut Dodo',
                    data: data.map(entry => entry.stats['donut.dodo.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'doom3.zip': {
                    label: 'Doom 3',
                    data: data.map(entry => entry.stats['doom3.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'drally.zip': {
                    label: 'dRally',
                    data: data.map(entry => entry.stats['drally.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'drbloodshot.zip': {
                    label: 'Dr. Bloodshot',
                    data: data.map(entry => entry.stats['drbloodshot.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'drilbertiidiggeredoo.zip': {
                    label: 'Drilbert II Diggeredoo',
                    data: data.map(entry => entry.stats['drilbertiidiggeredoo.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'drinkndrive.zip': {
                    label: 'Drink&lsquo;n&lsquo;Drive',
                    data: data.map(entry => entry.stats['drinkndrive.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'droid7.zip': {
                    label: 'DROID7',
                    data: data.map(entry => entry.stats['droid7.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'duke.nukem.3d.zip': {
                    label: 'Duke Nukem 3D',
                    data: data.map(entry => entry.stats['duke.nukem.3d.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'duke3dawo.zip': {
                    label: 'Duke Nukem 3D - Alien World Order',
                    data: data.map(entry => entry.stats['duke3dawo.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'dungeonrush.zip': {
                    label: 'DungeonRush',
                    data: data.map(entry => entry.stats['dungeonrush.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'dungeonsouls.zip': {
                    label: 'Dungeon Souls',
                    data: data.map(entry => entry.stats['dungeonsouls.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'dynamate_playdate.zip': {
                    label: 'Dynamate Playdate',
                    data: data.map(entry => entry.stats['dynamate_playdate.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'echo_chamber.zip': {
                    label: 'Echo Chamber',
                    data: data.map(entry => entry.stats['echo_chamber.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'edna.zip': {
                    label: 'Edna - Out of Sight',
                    data: data.map(entry => entry.stats['edna.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'eity.zip': {
                    label: 'Eity',
                    data: data.map(entry => entry.stats['eity.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'elecdude.zip': {
                    label: 'Elec Dude',
                    data: data.map(entry => entry.stats['elecdude.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'emojimerge.zip': {
                    label: 'Emoji Merge',
                    data: data.map(entry => entry.stats['emojimerge.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'endlessdungeon.zip': {
                    label: 'Endless Dungeon',
                    data: data.map(entry => entry.stats['endlessdungeon.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'enigma.zip': {
                    label: 'Enigma',
                    data: data.map(entry => entry.stats['enigma.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'escape.zip': {
                    label: 'Escape',
                    data: data.map(entry => entry.stats['escape.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'everpatch.zip': {
                    label: 'Everpatch',
                    data: data.map(entry => entry.stats['everpatch.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'exhumed.zip': {
                    label: 'Exhumed',
                    data: data.map(entry => entry.stats['exhumed.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'exult.zip': {
                    label: 'Exult',
                    data: data.map(entry => entry.stats['exult.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'ez.zip': {
                    label: 'E.Z',
                    data: data.map(entry => entry.stats['ez.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'f-zeropocket.zip': {
                    label: 'F-Zero Pocket',
                    data: data.map(entry => entry.stats['f-zeropocket.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'f1race.zip': {
                    label: 'F1 Race',
                    data: data.map(entry => entry.stats['f1race.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'f1spirit.zip': {
                    label: 'F1 Spirit',
                    data: data.map(entry => entry.stats['f1spirit.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'fade_to_black.zip': {
                    label: 'F2bgl',
                    data: data.map(entry => entry.stats['fade_to_black.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'faithdemonsiege.zip': {
                    label: 'FAITH: Demon Siege',
                    data: data.map(entry => entry.stats['faithdemonsiege.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'falling_time.zip': {
                    label: 'Falling Time',
                    data: data.map(entry => entry.stats['falling_time.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'fallout1.zip': {
                    label: 'Fallout 1',
                    data: data.map(entry => entry.stats['fallout1.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'fallout2.zip': {
                    label: 'Fallout 2',
                    data: data.map(entry => entry.stats['fallout2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'farmner.zip': {
                    label: 'Farmner',
                    data: data.map(entry => entry.stats['farmner.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'feather.park.zip': {
                    label: 'Feather Park',
                    data: data.map(entry => entry.stats['feather.park.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'fheroes2.zip': {
                    label: 'Free Heroes of Might and Magic II',
                    data: data.map(entry => entry.stats['fheroes2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'fightorperish.zip': {
                    label: 'Fight or Perish',
                    data: data.map(entry => entry.stats['fightorperish.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'final_quest.zip': {
                    label: 'Final Quest',
                    data: data.map(entry => entry.stats['final_quest.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'finding_paradise.zip': {
                    label: 'Finding Paradise',
                    data: data.map(entry => entry.stats['finding_paradise.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'fire_and_fondness2.zip': {
                    label: 'Fire and Fondness 2',
                    data: data.map(entry => entry.stats['fire_and_fondness2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'firearrow.zip': {
                    label: 'Fire Arrow (Remastered)',
                    data: data.map(entry => entry.stats['firearrow.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'flare.zip': {
                    label: 'Flare Engine',
                    data: data.map(entry => entry.stats['flare.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'flywrench.zip': {
                    label: 'Flywrench',
                    data: data.map(entry => entry.stats['flywrench.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'forager.zip': {
                    label: 'Forager',
                    data: data.map(entry => entry.stats['forager.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'forgodden.zip': {
                    label: 'Forgodden',
                    data: data.map(entry => entry.stats['forgodden.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'formula_1_playdate.zip': {
                    label: 'Formula 1 Playdate',
                    data: data.map(entry => entry.stats['formula_1_playdate.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'foxtower.zip': {
                    label: 'Fox Tower',
                    data: data.map(entry => entry.stats['foxtower.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'freedom.planet.zip': {
                    label: 'Freedom Planet',
                    data: data.map(entry => entry.stats['freedom.planet.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'freedroid.zip': {
                    label: 'FreedroidRPG',
                    data: data.map(entry => entry.stats['freedroid.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'freegemas.zip': {
                    label: 'Freegemas',
                    data: data.map(entry => entry.stats['freegemas.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'freeserf.zip': {
                    label: 'FreeSerf',
                    data: data.map(entry => entry.stats['freeserf.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'freesiege.zip': {
                    label: 'FreeSiege',
                    data: data.map(entry => entry.stats['freesiege.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'freesynd.zip': {
                    label: 'Freesynd',
                    data: data.map(entry => entry.stats['freesynd.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'frozen-bubble.zip': {
                    label: 'Frozen Bubble',
                    data: data.map(entry => entry.stats['frozen-bubble.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'fungusreaper.zip': {
                    label: 'Fungus Reaper',
                    data: data.map(entry => entry.stats['fungusreaper.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'galaxyforcesv2.zip': {
                    label: 'Galaxy Forces 2',
                    data: data.map(entry => entry.stats['galaxyforcesv2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'gaurodan.zip': {
                    label: 'Gaurodan',
                    data: data.map(entry => entry.stats['gaurodan.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'gcrash.zip': {
                    label: 'Geometry Crash',
                    data: data.map(entry => entry.stats['gcrash.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'gemrb.zip': {
                    label: 'GemRB',
                    data: data.map(entry => entry.stats['gemrb.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'geometrystrike.zip': {
                    label: 'Geometry Strike',
                    data: data.map(entry => entry.stats['geometrystrike.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'gigalomania.zip': {
                    label: 'Gigalomania',
                    data: data.map(entry => entry.stats['gigalomania.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'gmu.music.player.zip': {
                    label: 'Gmu Music Player',
                    data: data.map(entry => entry.stats['gmu.music.player.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'gnurobbo.zip': {
                    label: 'GNU Robbo',
                    data: data.map(entry => entry.stats['gnurobbo.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'goinghomerevisited.zip': {
                    label: 'Going Home Revisited',
                    data: data.map(entry => entry.stats['goinghomerevisited.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'grafx2.zip': {
                    label: 'Grafx2',
                    data: data.map(entry => entry.stats['grafx2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'gravitycircuit.zip': {
                    label: 'Gravity Circuit',
                    data: data.map(entry => entry.stats['gravitycircuit.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'grimstorm.zip': {
                    label: 'Grimstorm',
                    data: data.map(entry => entry.stats['grimstorm.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'gta3.zip': {
                    label: 'Grand Theft Auto 3',
                    data: data.map(entry => entry.stats['gta3.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'gtavc.zip': {
                    label: 'Grand Theft Auto Vice City',
                    data: data.map(entry => entry.stats['gtavc.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'gumgem.zip': {
                    label: 'Gumgem',
                    data: data.map(entry => entry.stats['gumgem.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'gumgirlgb.zip': {
                    label: 'GUM GIRL Gameboy Edition',
                    data: data.map(entry => entry.stats['gumgirlgb.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'gunsandguns.zip': {
                    label: 'Guns and Guns',
                    data: data.map(entry => entry.stats['gunsandguns.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hakopalace.zip': {
                    label: 'Hakopalace',
                    data: data.map(entry => entry.stats['hakopalace.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'half-life.zip': {
                    label: 'Half-Life',
                    data: data.map(entry => entry.stats['half-life.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hallowseve.zip': {
                    label: 'Hallow&lsquo;s Eve',
                    data: data.map(entry => entry.stats['hallowseve.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hawkthorne.zip': {
                    label: 'Community: Journey to the Center of Hawkthorne',
                    data: data.map(entry => entry.stats['hawkthorne.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'heart.of.darkness.zip': {
                    label: 'Heart of Darkness',
                    data: data.map(entry => entry.stats['heart.of.darkness.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'heboris-sdl.zip': {
                    label: 'Heboris C7-EX',
                    data: data.map(entry => entry.stats['heboris-sdl.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'help.no.brake.zip': {
                    label: 'HELP! NO BRAKE',
                    data: data.map(entry => entry.stats['help.no.brake.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hex-a-hop.zip': {
                    label: 'Hex-A-Hop',
                    data: data.map(entry => entry.stats['hex-a-hop.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hexen2.zip': {
                    label: 'Hexen 2',
                    data: data.map(entry => entry.stats['hexen2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hftsr.zip': {
                    label: 'Hunt for the Shadow Rider',
                    data: data.map(entry => entry.stats['hftsr.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hijinx.zip': {
                    label: 'Hijinx',
                    data: data.map(entry => entry.stats['hijinx.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hocoslamfy.zip': {
                    label: 'Hocoslamfy',
                    data: data.map(entry => entry.stats['hocoslamfy.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'holonomy.zip': {
                    label: 'Holonomy',
                    data: data.map(entry => entry.stats['holonomy.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'honeyguardian.zip': {
                    label: 'Honey Guardian',
                    data: data.map(entry => entry.stats['honeyguardian.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hota.zip': {
                    label: 'Heart Of The Alien Redux',
                    data: data.map(entry => entry.stats['hota.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hotlinesanzu.zip': {
                    label: 'Hotline Sanzu',
                    data: data.map(entry => entry.stats['hotlinesanzu.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hoverboard.zip': {
                    label: 'xkcd Hoverboard',
                    data: data.map(entry => entry.stats['hoverboard.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hovertank3d.zip': {
                    label: 'Hovertank 3D',
                    data: data.map(entry => entry.stats['hovertank3d.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'humming.out.zip': {
                    label: 'Humming Out',
                    data: data.map(entry => entry.stats['humming.out.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hunters.zip': {
                    label: 'Hunters',
                    data: data.map(entry => entry.stats['hunters.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hurrican.zip': {
                    label: 'Hurrican',
                    data: data.map(entry => entry.stats['hurrican.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hydorah.zip': {
                    label: 'Super Hydorah',
                    data: data.map(entry => entry.stats['hydorah.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hydra.castle.labyrinth.zip': {
                    label: 'Hydra Castle Labyrinth',
                    data: data.map(entry => entry.stats['hydra.castle.labyrinth.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hyper.jump.zip': {
                    label: 'hyper JUMP',
                    data: data.map(entry => entry.stats['hyper.jump.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'hyperfight.zip': {
                    label: 'Hyperfight',
                    data: data.map(entry => entry.stats['hyperfight.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'iconoclasts.zip': {
                    label: 'Iconoclasts',
                    data: data.map(entry => entry.stats['iconoclasts.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'iichantra_pear.zip': {
                    label: 'iiChantra',
                    data: data.map(entry => entry.stats['iichantra_pear.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'inertiablast.zip': {
                    label: 'Inertia Blast',
                    data: data.map(entry => entry.stats['inertiablast.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'infra_arcana.zip': {
                    label: 'Infra Arcana',
                    data: data.map(entry => entry.stats['infra_arcana.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'invaders.zip': {
                    label: 'Invaders',
                    data: data.map(entry => entry.stats['invaders.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'ioawn4t.zip': {
                    label: 'If On A Winter&lsquo;s Night, Four Travelers',
                    data: data.map(entry => entry.stats['ioawn4t.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'iortcw.zip': {
                    label: 'Return to Castle Wolfenstein',
                    data: data.map(entry => entry.stats['iortcw.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'ironferret.zip': {
                    label: 'IRON FERRET',
                    data: data.map(entry => entry.stats['ironferret.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'jazz2.zip': {
                    label: 'Jazz2 Resurrection',
                    data: data.map(entry => entry.stats['jazz2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'jediacademy.zip': {
                    label: 'Star Wars Jedi Knight - Jedi Academy',
                    data: data.map(entry => entry.stats['jediacademy.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'jedioutcast.zip': {
                    label: 'Star Wars Jedi Knight II - Jedi Outcast',
                    data: data.map(entry => entry.stats['jedioutcast.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'jetsetwilly.zip': {
                    label: 'Jet Set Willy',
                    data: data.map(entry => entry.stats['jetsetwilly.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'jugglrx.zip': {
                    label: 'JUGGLRX',
                    data: data.map(entry => entry.stats['jugglrx.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'jumpnbump.zip': {
                    label: 'Jump n Bump',
                    data: data.map(entry => entry.stats['jumpnbump.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'jumpoffthebridge.zip': {
                    label: 'Jump Off The Bridge',
                    data: data.map(entry => entry.stats['jumpoffthebridge.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'justanotherpong.zip': {
                    label: 'Just Another Pong',
                    data: data.map(entry => entry.stats['justanotherpong.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'kemonorogue.zip': {
                    label: 'Kemono Rogue',
                    data: data.map(entry => entry.stats['kemonorogue.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'kenslabyrinth.zip': {
                    label: 'Ken&lsquo;s Labyrinth',
                    data: data.map(entry => entry.stats['kenslabyrinth.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'kingofmachines.zip': {
                    label: 'King of Machines',
                    data: data.map(entry => entry.stats['kingofmachines.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'klorets.zip': {
                    label: 'Klorets',
                    data: data.map(entry => entry.stats['klorets.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'kobodeluxe.zip': {
                    label: 'Kobo Deluxe',
                    data: data.map(entry => entry.stats['kobodeluxe.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'labremnants.zip': {
                    label: 'Lab Remnants',
                    data: data.map(entry => entry.stats['labremnants.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'labyrinthoflegendaryloot.zip': {
                    label: 'Labyrinth of Legendary Loot',
                    data: data.map(entry => entry.stats['labyrinthoflegendaryloot.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'laserkombat.zip': {
                    label: 'Laser Kombat',
                    data: data.map(entry => entry.stats['laserkombat.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'lawnbusterforhire.zip': {
                    label: 'Lawn Buster for Hire',
                    data: data.map(entry => entry.stats['lawnbusterforhire.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'lbreakouthd.zip': {
                    label: 'LBreakoutHD',
                    data: data.map(entry => entry.stats['lbreakouthd.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'lierolibre.zip': {
                    label: 'LieroLibre',
                    data: data.map(entry => entry.stats['lierolibre.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'liltanks.zip': {
                    label: 'Lil Tanks',
                    data: data.map(entry => entry.stats['liltanks.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'lineoff.zip': {
                    label: 'Lineoff',
                    data: data.map(entry => entry.stats['lineoff.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'lisathebashful.zip': {
                    label: 'LISA: The Bashful',
                    data: data.map(entry => entry.stats['lisathebashful.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'lisathehopeful.zip': {
                    label: 'LISA: The Hopeful',
                    data: data.map(entry => entry.stats['lisathehopeful.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'lisathejoyful.zip': {
                    label: 'LISA: The Joyful',
                    data: data.map(entry => entry.stats['lisathejoyful.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'lisathepainful.zip': {
                    label: 'LISA: The Painful',
                    data: data.map(entry => entry.stats['lisathepainful.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'lisathepointless.zip': {
                    label: 'LISA: The Pointless',
                    data: data.map(entry => entry.stats['lisathepointless.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'lisathetimeless.zip': {
                    label: 'LISA: The Timeless',
                    data: data.map(entry => entry.stats['lisathetimeless.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'lisatheunbreakable.zip': {
                    label: 'LISA: The Unbreakable',
                    data: data.map(entry => entry.stats['lisatheunbreakable.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'lisatheundone.zip': {
                    label: 'LISA: The Undone',
                    data: data.map(entry => entry.stats['lisatheundone.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'littlefroggame.zip': {
                    label: 'Little Frog Game',
                    data: data.map(entry => entry.stats['littlefroggame.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'littlerunmo.zip': {
                    label: 'Little Runmo',
                    data: data.map(entry => entry.stats['littlerunmo.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'lode.zip': {
                    label: 'Lode',
                    data: data.map(entry => entry.stats['lode.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'loderunneronline.zip': {
                    label: 'Lode Runner Online',
                    data: data.map(entry => entry.stats['loderunneronline.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'loopcat.zip': {
                    label: 'Loop Cat',
                    data: data.map(entry => entry.stats['loopcat.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'love.zip': {
                    label: 'LOVE by Fred Wood',
                    data: data.map(entry => entry.stats['love.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'love3.zip': {
                    label: 'LOVE 3',
                    data: data.map(entry => entry.stats['love3.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'luck.be.a.landlord.zip': {
                    label: 'Luck be a Landlord',
                    data: data.map(entry => entry.stats['luck.be.a.landlord.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'luminousslash.zip': {
                    label: 'Luminous Slash',
                    data: data.map(entry => entry.stats['luminousslash.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'mableandthewood.zip': {
                    label: 'Mable and the Wood',
                    data: data.map(entry => entry.stats['mableandthewood.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'magicvigilante.zip': {
                    label: 'Magic Vigilante',
                    data: data.map(entry => entry.stats['magicvigilante.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'magnibox.zip': {
                    label: 'Magnibox',
                    data: data.map(entry => entry.stats['magnibox.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'maldita.castilla.zip': {
                    label: 'Maldita Castilla',
                    data: data.map(entry => entry.stats['maldita.castilla.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'manicminer.zip': {
                    label: 'Manic Miner',
                    data: data.map(entry => entry.stats['manicminer.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'margot_beatrice_adventure.zip': {
                    label: 'Margot-Béatrice Adventure',
                    data: data.map(entry => entry.stats['margot_beatrice_adventure.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'maxdownforce.zip': {
                    label: 'Max Downforce',
                    data: data.map(entry => entry.stats['maxdownforce.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'maximilien_adventure.zip': {
                    label: 'Maximilien Adventure',
                    data: data.map(entry => entry.stats['maximilien_adventure.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'meandmyshadow.zip': {
                    label: 'Me and My Shadow',
                    data: data.map(entry => entry.stats['meandmyshadow.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'megaman.zip': {
                    label: 'Megaman Rock N Roll',
                    data: data.map(entry => entry.stats['megaman.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'meritous.zip': {
                    label: 'Meritous',
                    data: data.map(entry => entry.stats['meritous.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'metanethunterg4.zip': {
                    label: 'Metanet Hunter G4',
                    data: data.map(entry => entry.stats['metanethunterg4.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'mightymike.zip': {
                    label: 'Mighty Mike',
                    data: data.map(entry => entry.stats['mightymike.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'mimisdeliverydash.zip': {
                    label: 'Mimi&lsquo;s Delivery Dash',
                    data: data.map(entry => entry.stats['mimisdeliverydash.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'minesector.zip': {
                    label: 'MineSector',
                    data: data.map(entry => entry.stats['minesector.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'minetest.zip': {
                    label: 'Minetest',
                    data: data.map(entry => entry.stats['minetest.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'minit.zip': {
                    label: 'Minit',
                    data: data.map(entry => entry.stats['minit.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'mirrormagic.zip': {
                    label: 'Mirror Magic',
                    data: data.map(entry => entry.stats['mirrormagic.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'missdriller.zip': {
                    label: 'Miss Driller',
                    data: data.map(entry => entry.stats['missdriller.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'missiledancer.zip': {
                    label: 'Missile Dancer',
                    data: data.map(entry => entry.stats['missiledancer.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'mobility.zip': {
                    label: 'Mobility',
                    data: data.map(entry => entry.stats['mobility.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'mojotron.zip': {
                    label: 'Mojotron - Robot Wars',
                    data: data.map(entry => entry.stats['mojotron.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'moonlight.zip': {
                    label: 'Moonlight',
                    data: data.map(entry => entry.stats['moonlight.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'moonlightnew.zip': {
                    label: 'Moonlight New',
                    data: data.map(entry => entry.stats['moonlightnew.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'mr.boom.zip': {
                    label: 'Mr Boom',
                    data: data.map(entry => entry.stats['mr.boom.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'mreader.zip': {
                    label: 'mReader',
                    data: data.map(entry => entry.stats['mreader.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'mrrescue.zip': {
                    label: 'Mr. Rescue',
                    data: data.map(entry => entry.stats['mrrescue.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'multimanicminer.zip': {
                    label: 'Multi Player Manic Miner',
                    data: data.map(entry => entry.stats['multimanicminer.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'multris.zip': {
                    label: 'Multris',
                    data: data.map(entry => entry.stats['multris.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'murtop.zip': {
                    label: 'Murtop',
                    data: data.map(entry => entry.stats['murtop.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'mutant_tank_knights.zip': {
                    label: 'Mutant Tank Knights',
                    data: data.map(entry => entry.stats['mutant_tank_knights.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'mystikbelle.zip': {
                    label: 'Mystik Belle',
                    data: data.map(entry => entry.stats['mystikbelle.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'mythos.zip': {
                    label: 'Mythos',
                    data: data.map(entry => entry.stats['mythos.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nainainights.zip': {
                    label: 'NAi NAi Nights-Nokia Edition',
                    data: data.map(entry => entry.stats['nainainights.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nam.zip': {
                    label: 'NAM',
                    data: data.map(entry => entry.stats['nam.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nanobounce.zip': {
                    label: 'Nanobounce',
                    data: data.map(entry => entry.stats['nanobounce.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nanosaur.zip': {
                    label: 'Nanosaur',
                    data: data.map(entry => entry.stats['nanosaur.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nanosaur2.zip': {
                    label: 'Nanosaur 2',
                    data: data.map(entry => entry.stats['nanosaur2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nebulus.zip': {
                    label: 'Nebulus',
                    data: data.map(entry => entry.stats['nebulus.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'neogensokyo.zip': {
                    label: 'Neo-Gensokyo',
                    data: data.map(entry => entry.stats['neogensokyo.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'neoncityriders.zip': {
                    label: 'Neon City Riders',
                    data: data.map(entry => entry.stats['neoncityriders.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'ner.zip': {
                    label: 'Ner',
                    data: data.map(entry => entry.stats['ner.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'neverball.zip': {
                    label: 'Neverball',
                    data: data.map(entry => entry.stats['neverball.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nfs2se.zip': {
                    label: 'Need For Speed II SE',
                    data: data.map(entry => entry.stats['nfs2se.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nidhogg.zip': {
                    label: 'Nidhogg',
                    data: data.map(entry => entry.stats['nidhogg.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nkaruga.zip': {
                    label: 'nKaruga',
                    data: data.map(entry => entry.stats['nkaruga.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nonny.zip': {
                    label: 'Nonny',
                    data: data.map(entry => entry.stats['nonny.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nonstopspaceprobe.zip': {
                    label: 'Non-Stop Space Probe',
                    data: data.map(entry => entry.stats['nonstopspaceprobe.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'noparachute.zip': {
                    label: 'No Parachute',
                    data: data.map(entry => entry.stats['noparachute.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nothing.zip': {
                    label: 'Nothing',
                    data: data.map(entry => entry.stats['nothing.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'notransmission.zip': {
                    label: 'No Transmission',
                    data: data.map(entry => entry.stats['notransmission.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nova_pinball.zip': {
                    label: 'Nova Pinball',
                    data: data.map(entry => entry.stats['nova_pinball.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'npuzzle.zip': {
                    label: 'NPuzzle',
                    data: data.map(entry => entry.stats['npuzzle.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nuclearthronemobile.zip': {
                    label: 'Nuclear Throne Mobile',
                    data: data.map(entry => entry.stats['nuclearthronemobile.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nulldrifter.zip': {
                    label: 'Null Drifter',
                    data: data.map(entry => entry.stats['nulldrifter.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'nvpw.zip': {
                    label: 'NOT VERY PRO WRESTLING',
                    data: data.map(entry => entry.stats['nvpw.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'ocda.zip': {
                    label: 'OCDA',
                    data: data.map(entry => entry.stats['ocda.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'oceansheart.zip': {
                    label: 'Ocean&lsquo;s Heart',
                    data: data.map(entry => entry.stats['oceansheart.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'oddworld.zip': {
                    label: 'Oddworld: Abes Oddysee Exoddus',
                    data: data.map(entry => entry.stats['oddworld.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'omegastrike.zip': {
                    label: 'Omega Strike',
                    data: data.map(entry => entry.stats['omegastrike.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'openblok.zip': {
                    label: 'OpenBlok',
                    data: data.map(entry => entry.stats['openblok.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'openclaw.zip': {
                    label: 'OpenClaw',
                    data: data.map(entry => entry.stats['openclaw.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'openfodder.zip': {
                    label: 'OpenFodder',
                    data: data.map(entry => entry.stats['openfodder.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'openggs.zip': {
                    label: 'Open Great Giana Sisters',
                    data: data.map(entry => entry.stats['openggs.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'openjazz.zip': {
                    label: 'OpenJazz',
                    data: data.map(entry => entry.stats['openjazz.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'openmrac.zip': {
                    label: 'OpenMRac',
                    data: data.map(entry => entry.stats['openmrac.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'openomf.zip': {
                    label: 'OpenOMF',
                    data: data.map(entry => entry.stats['openomf.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'openrct2.zip': {
                    label: 'OpenRCT2',
                    data: data.map(entry => entry.stats['openrct2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'opensupaplex.zip': {
                    label: 'OpenSupaplex',
                    data: data.map(entry => entry.stats['opensupaplex.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'opensyobon.zip': {
                    label: 'OpenSyobon',
                    data: data.map(entry => entry.stats['opensyobon.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'opentyrian.zip': {
                    label: 'OpenTyrian',
                    data: data.map(entry => entry.stats['opentyrian.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'openxcom.zip': {
                    label: 'OpenXcom Extended',
                    data: data.map(entry => entry.stats['openxcom.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'oquonie.zip': {
                    label: 'Oquonie',
                    data: data.map(entry => entry.stats['oquonie.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'osanasrevenge.zip': {
                    label: 'Osana&lsquo;s Revenge',
                    data: data.map(entry => entry.stats['osanasrevenge.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'ottomatic.zip': {
                    label: 'Otto Matic',
                    data: data.map(entry => entry.stats['ottomatic.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'outofammo.zip': {
                    label: 'Out of Ammo',
                    data: data.map(entry => entry.stats['outofammo.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'overgun.zip': {
                    label: 'OverGun',
                    data: data.map(entry => entry.stats['overgun.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'owlboy.zip': {
                    label: 'Owlboy',
                    data: data.map(entry => entry.stats['owlboy.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'pacman.zip': {
                    label: 'Pacman',
                    data: data.map(entry => entry.stats['pacman.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'panicroom.zip': {
                    label: 'Panic Room',
                    data: data.map(entry => entry.stats['panicroom.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'panzerpaladin.zip': {
                    label: 'Panzer Paladin',
                    data: data.map(entry => entry.stats['panzerpaladin.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'paused.zip': {
                    label: 'PAUSED',
                    data: data.map(entry => entry.stats['paused.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'pekka-kana-2.zip': {
                    label: 'Pekka Kana 2',
                    data: data.map(entry => entry.stats['pekka-kana-2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'pigeon.zip': {
                    label: 'Pigeon Ascent',
                    data: data.map(entry => entry.stats['pigeon.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'pinball_disc_room.zip': {
                    label: 'Pinball Disc Room',
                    data: data.map(entry => entry.stats['pinball_disc_room.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'pingo.zip': {
                    label: 'Pingo',
                    data: data.map(entry => entry.stats['pingo.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'pixelheat.zip': {
                    label: 'Beat of The PixelHeat',
                    data: data.map(entry => entry.stats['pixelheat.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'planetwaves.zip': {
                    label: 'Planet Waves',
                    data: data.map(entry => entry.stats['planetwaves.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'plaqueattackremake.zip': {
                    label: 'Plaque Attack Remake',
                    data: data.map(entry => entry.stats['plaqueattackremake.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'plumberssdl.zip': {
                    label: 'Plumbers Don&lsquo;t Wear Ties',
                    data: data.map(entry => entry.stats['plumberssdl.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'pockettactics.zip': {
                    label: 'Pocket Tactics',
                    data: data.map(entry => entry.stats['pockettactics.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'pocketwondersport.zip': {
                    label: 'Pocket Wonder Sport',
                    data: data.map(entry => entry.stats['pocketwondersport.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'postvoid.zip': {
                    label: 'Post Void',
                    data: data.map(entry => entry.stats['postvoid.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'powder.zip': {
                    label: 'Powder',
                    data: data.map(entry => entry.stats['powder.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'powerlevel.zip': {
                    label: 'Power Level',
                    data: data.map(entry => entry.stats['powerlevel.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'ppengui.zip': {
                    label: 'Pepper Pengui',
                    data: data.map(entry => entry.stats['ppengui.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'prehistorik.2.zip': {
                    label: 'Prehistorik 2',
                    data: data.map(entry => entry.stats['prehistorik.2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'profadeluxe.zip': {
                    label: 'Abu Simbel Profanation Deluxe',
                    data: data.map(entry => entry.stats['profadeluxe.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'prototype.zip': {
                    label: 'Prototype',
                    data: data.map(entry => entry.stats['prototype.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'psebay.zip': {
                    label: 'Psebay',
                    data: data.map(entry => entry.stats['psebay.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'pulstario.zip': {
                    label: 'Pulstario',
                    data: data.map(entry => entry.stats['pulstario.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'pupaipospacedx.zip': {
                    label: 'PuPaiPo Space Deluxe',
                    data: data.map(entry => entry.stats['pupaipospacedx.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'puremetal.zip': {
                    label: 'Pure Metal: Feature 1',
                    data: data.map(entry => entry.stats['puremetal.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'putridshotultra.zip': {
                    label: 'Putrid Shot Ultra',
                    data: data.map(entry => entry.stats['putridshotultra.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'puztrix_playdate.zip': {
                    label: 'Puztrix Playdate',
                    data: data.map(entry => entry.stats['puztrix_playdate.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'pyk.zip': {
                    label: 'Pyk',
                    data: data.map(entry => entry.stats['pyk.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'quake.2.zip': {
                    label: 'Quake 2',
                    data: data.map(entry => entry.stats['quake.2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'quake.zip': {
                    label: 'Quake 1',
                    data: data.map(entry => entry.stats['quake.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'quake3.zip': {
                    label: 'Quake 3',
                    data: data.map(entry => entry.stats['quake3.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'quakespasm.zip': {
                    label: 'Quakespasm',
                    data: data.map(entry => entry.stats['quakespasm.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'rakuen.zip': {
                    label: 'Rakuen',
                    data: data.map(entry => entry.stats['rakuen.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'randungeon.zip': {
                    label: 'Randungeon',
                    data: data.map(entry => entry.stats['randungeon.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'raptor.zip': {
                    label: 'Raptor',
                    data: data.map(entry => entry.stats['raptor.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'rawgl.zip': {
                    label: 'RAWGL',
                    data: data.map(entry => entry.stats['rawgl.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'rebound.zip': {
                    label: 'Rebound',
                    data: data.map(entry => entry.stats['rebound.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'redhandsomehood.zip': {
                    label: 'Red Handsome Hood',
                    data: data.map(entry => entry.stats['redhandsomehood.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'redneck.rampage.rides.again.zip': {
                    label: 'Redneck Rampage 2',
                    data: data.map(entry => entry.stats['redneck.rampage.rides.again.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'redneck.rampage.zip': {
                    label: 'Redneck Rampage 1',
                    data: data.map(entry => entry.stats['redneck.rampage.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'redtrees.zip': {
                    label: 'Red Trees',
                    data: data.map(entry => entry.stats['redtrees.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'relichunters.zip': {
                    label: 'Relic Hunters',
                    data: data.map(entry => entry.stats['relichunters.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'reminiscence.zip': {
                    label: 'Reminiscence',
                    data: data.map(entry => entry.stats['reminiscence.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'render96ex.zip': {
                    label: 'Render96ex',
                    data: data.map(entry => entry.stats['render96ex.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'restore.portmaster.zip': {
                    label: 'Restore PortMaster',
                    data: data.map(entry => entry.stats['restore.portmaster.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'retrotime.zip': {
                    label: 'Retro Time',
                    data: data.map(entry => entry.stats['retrotime.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'revbros.zip': {
                    label: 'Reverse Bros',
                    data: data.map(entry => entry.stats['revbros.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'ri_li.zip': {
                    label: 'Ri-li',
                    data: data.map(entry => entry.stats['ri_li.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'rick.dangerous.zip': {
                    label: 'Rick Dangerous',
                    data: data.map(entry => entry.stats['rick.dangerous.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'rigelengine.zip': {
                    label: 'Rigel Engine',
                    data: data.map(entry => entry.stats['rigelengine.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'riptale.zip': {
                    label: 'Riptale',
                    data: data.map(entry => entry.stats['riptale.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'rite.zip': {
                    label: 'RITE',
                    data: data.map(entry => entry.stats['rite.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'rlone.zip': {
                    label: 'Rlone: A Rogue Clone',
                    data: data.map(entry => entry.stats['rlone.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'rlvm.zip': {
                    label: 'Rlvm',
                    data: data.map(entry => entry.stats['rlvm.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'road.invaders.zip': {
                    label: 'Road Invaders',
                    data: data.map(entry => entry.stats['road.invaders.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'rocksndiamonds.zip': {
                    label: 'Rocks N Diamonds',
                    data: data.map(entry => entry.stats['rocksndiamonds.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'roguelight.zip': {
                    label: 'Roguelight',
                    data: data.map(entry => entry.stats['roguelight.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'rota.zip': {
                    label: 'ROTA',
                    data: data.map(entry => entry.stats['rota.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'rotationalshift.zip': {
                    label: 'Rotational Shift',
                    data: data.map(entry => entry.stats['rotationalshift.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'rott.zip': {
                    label: 'Rise Of The Triad',
                    data: data.map(entry => entry.stats['rott.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'russiansubwaydogs.zip': {
                    label: 'Russian Subway Dogs',
                    data: data.map(entry => entry.stats['russiansubwaydogs.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'rvgl.zip': {
                    label: 'RVGL',
                    data: data.map(entry => entry.stats['rvgl.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'rwatch.zip': {
                    label: 'R&Watch-Dobtopus',
                    data: data.map(entry => entry.stats['rwatch.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'satryn.zip': {
                    label: 'Satryn',
                    data: data.map(entry => entry.stats['satryn.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'savant.zip': {
                    label: 'Savant Ascent',
                    data: data.map(entry => entry.stats['savant.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'scaletheskulltower.zip': {
                    label: 'Scale the Skull Tower',
                    data: data.map(entry => entry.stats['scaletheskulltower.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sdlpop.zip': {
                    label: 'SDLPoP',
                    data: data.map(entry => entry.stats['sdlpop.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sdlsopwith.zip': {
                    label: 'SDL Sopwith',
                    data: data.map(entry => entry.stats['sdlsopwith.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'secretteagarden.zip': {
                    label: 'Secret Tea Garden',
                    data: data.map(entry => entry.stats['secretteagarden.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'serioussam-tfe.zip': {
                    label: 'Serious Sam - The First Encounter',
                    data: data.map(entry => entry.stats['serioussam-tfe.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'serioussam-tse.zip': {
                    label: 'Serious Sam - The Second Encounter',
                    data: data.map(entry => entry.stats['serioussam-tse.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sevenkingdoms.zip': {
                    label: 'Seven Kingdoms - Ancient Adversaries',
                    data: data.map(entry => entry.stats['sevenkingdoms.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'shadow.warrior.zip': {
                    label: 'Shadow Warrior',
                    data: data.map(entry => entry.stats['shadow.warrior.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'shippy.zip': {
                    label: 'Shippy',
                    data: data.map(entry => entry.stats['shippy.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'shipwreck.zip': {
                    label: 'Shipwreck',
                    data: data.map(entry => entry.stats['shipwreck.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'shovel.knight.zip': {
                    label: 'Shovel Knight Treasure Trove',
                    data: data.map(entry => entry.stats['shovel.knight.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'shrubnaut.zip': {
                    label: 'Shrubnaut',
                    data: data.map(entry => entry.stats['shrubnaut.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'siegeofosaka.zip': {
                    label: 'Siege of Osaka',
                    data: data.map(entry => entry.stats['siegeofosaka.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'simonsqrev.zip': {
                    label: 'Castlevania 2 Simon&lsquo;s Quest &lsquo;Revamped&lsquo;',
                    data: data.map(entry => entry.stats['simonsqrev.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'simplesokoban.zip': {
                    label: 'Simple Sokoban',
                    data: data.map(entry => entry.stats['simplesokoban.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'skifree.zip': {
                    label: 'SkiFree',
                    data: data.map(entry => entry.stats['skifree.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'skijump3.zip': {
                    label: 'SkiJump3',
                    data: data.map(entry => entry.stats['skijump3.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sm.zip': {
                    label: 'Super Metroid (Redux Included)',
                    data: data.map(entry => entry.stats['sm.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'smoothiegalaxy.zip': {
                    label: 'Smoothie Galaxy',
                    data: data.map(entry => entry.stats['smoothiegalaxy.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'smworld.zip': {
                    label: 'Super Mario World (and All Stars)',
                    data: data.map(entry => entry.stats['smworld.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'snaklipse.zip': {
                    label: 'Snaklipse',
                    data: data.map(entry => entry.stats['snaklipse.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sneakr.zip': {
                    label: 'SneakR',
                    data: data.map(entry => entry.stats['sneakr.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sneggpit.zip': {
                    label: 'Sneggpit',
                    data: data.map(entry => entry.stats['sneggpit.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'snkrx.zip': {
                    label: 'SNKRX',
                    data: data.map(entry => entry.stats['snkrx.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'snout.zip': {
                    label: 'SnOut',
                    data: data.map(entry => entry.stats['snout.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'soh.zip': {
                    label: 'Ship of Harkinian',
                    data: data.map(entry => entry.stats['soh.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'soh2.zip': {
                    label: 'Ship of Harkinian 2',
                    data: data.map(entry => entry.stats['soh2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sokobrawn.zip': {
                    label: 'Sokobrawn',
                    data: data.map(entry => entry.stats['sokobrawn.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sonic.1.zip': {
                    label: 'Sonic 1',
                    data: data.map(entry => entry.stats['sonic.1.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sonic.2.zip': {
                    label: 'Sonic 2',
                    data: data.map(entry => entry.stats['sonic.2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sonic.cd.zip': {
                    label: 'Sonic CD',
                    data: data.map(entry => entry.stats['sonic.cd.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sonic.mania.zip': {
                    label: 'Sonic Mania',
                    data: data.map(entry => entry.stats['sonic.mania.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sonic1sms.zip': {
                    label: 'Sonic 1 SMS Remake',
                    data: data.map(entry => entry.stats['sonic1sms.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sonic2sms.zip': {
                    label: 'Sonic 2 SMS Remake',
                    data: data.map(entry => entry.stats['sonic2sms.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sonic3sms.zip': {
                    label: 'Sonic 3 SMS Remake',
                    data: data.map(entry => entry.stats['sonic3sms.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sorr.zip': {
                    label: 'SorR',
                    data: data.map(entry => entry.stats['sorr.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'space.cadet.pinball.zip': {
                    label: 'Space Cadet Pinball',
                    data: data.map(entry => entry.stats['space.cadet.pinball.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'spacewingwar.zip': {
                    label: 'Spacewing War',
                    data: data.map(entry => entry.stats['spacewingwar.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'spearmintmountain.zip': {
                    label: 'Spearmint Mountain',
                    data: data.map(entry => entry.stats['spearmintmountain.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'spectralslash.zip': {
                    label: 'Spectral Slash',
                    data: data.map(entry => entry.stats['spectralslash.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'spellsling.zip': {
                    label: 'Spell Sling',
                    data: data.map(entry => entry.stats['spellsling.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'spelltower.zip': {
                    label: 'Spell Tower',
                    data: data.map(entry => entry.stats['spelltower.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'spelunky.zip': {
                    label: 'Spelunky',
                    data: data.map(entry => entry.stats['spelunky.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'spinch.zip': {
                    label: 'Spinch',
                    data: data.map(entry => entry.stats['spinch.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'spooky.zip': {
                    label: 'Spooky Ghosts Dot Com',
                    data: data.map(entry => entry.stats['spooky.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'srb2.zip': {
                    label: 'Sonic Robo Blast 2',
                    data: data.map(entry => entry.stats['srb2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'srb2kart.zip': {
                    label: 'Sonic RB2 Kart',
                    data: data.map(entry => entry.stats['srb2kart.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'starboy.zip': {
                    label: 'StarBoy',
                    data: data.map(entry => entry.stats['starboy.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'starcatcher.zip': {
                    label: 'Starcatcher',
                    data: data.map(entry => entry.stats['starcatcher.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'stardewvalley.zip': {
                    label: 'Stardew Valley',
                    data: data.map(entry => entry.stats['stardewvalley.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'stargrovescramble.zip': {
                    label: 'Stargrove Scramble',
                    data: data.map(entry => entry.stats['stargrovescramble.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'starvsthegame.zip': {
                    label: 'Star vs. the Game',
                    data: data.map(entry => entry.stats['starvsthegame.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'steelassault.zip': {
                    label: 'Steel Assault',
                    data: data.map(entry => entry.stats['steelassault.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'stop_the_eggspress.zip': {
                    label: 'Stop The Egg Eggspress',
                    data: data.map(entry => entry.stats['stop_the_eggspress.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'strangeadventures.zip': {
                    label: 'Strange Adventures in Infinite Space',
                    data: data.map(entry => entry.stats['strangeadventures.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'streetsofclaus.zip': {
                    label: 'Streets of Claus',
                    data: data.map(entry => entry.stats['streetsofclaus.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'strikeysisters.zip': {
                    label: 'Strikey Sisters',
                    data: data.map(entry => entry.stats['strikeysisters.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sudokul.zip': {
                    label: 'SuDokuL',
                    data: data.map(entry => entry.stats['sudokul.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sulka.zip': {
                    label: 'Sulka',
                    data: data.map(entry => entry.stats['sulka.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sunsetshaped.zip': {
                    label: 'Sunset Shaped',
                    data: data.map(entry => entry.stats['sunsetshaped.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'sunsetwitchclassic.zip': {
                    label: 'Sunset Witch Classic',
                    data: data.map(entry => entry.stats['sunsetwitchclassic.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'super.mario.war.zip': {
                    label: 'Super Mario War',
                    data: data.map(entry => entry.stats['super.mario.war.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'supercakeboy.zip': {
                    label: 'Super Cakeboy',
                    data: data.map(entry => entry.stats['supercakeboy.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'supercratebox.zip': {
                    label: 'Super Crate Box',
                    data: data.map(entry => entry.stats['supercratebox.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'superdrome.bugs.zip': {
                    label: 'SuperDrome Bugs',
                    data: data.map(entry => entry.stats['superdrome.bugs.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'supermeatboy.zip': {
                    label: 'Super Meat Boy',
                    data: data.map(entry => entry.stats['supermeatboy.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'supermegazero.zip': {
                    label: 'Super Mega Zero',
                    data: data.map(entry => entry.stats['supermegazero.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'superraftboatclassic.zip': {
                    label: 'Super Raft Boat Classic',
                    data: data.map(entry => entry.stats['superraftboatclassic.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'superrobotninjagirl.zip': {
                    label: 'Super Robot Ninja Girl',
                    data: data.map(entry => entry.stats['superrobotninjagirl.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'superstarpath.zip': {
                    label: 'Super Star Path',
                    data: data.map(entry => entry.stats['superstarpath.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'supertux.zip': {
                    label: 'SuperTux',
                    data: data.map(entry => entry.stats['supertux.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'supertuxkart.zip': {
                    label: 'SuperTuxKart',
                    data: data.map(entry => entry.stats['supertuxkart.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'superxyx.zip': {
                    label: 'SuperXYX',
                    data: data.map(entry => entry.stats['superxyx.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'swapwoodquestr.zip': {
                    label: 'Swapwood Quest R',
                    data: data.map(entry => entry.stats['swapwoodquestr.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'tailsadventure.zip': {
                    label: 'Tails Adventure Remake',
                    data: data.map(entry => entry.stats['tailsadventure.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'tamatool.zip': {
                    label: 'Tamatool',
                    data: data.map(entry => entry.stats['tamatool.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'thecurseofissyos.zip': {
                    label: 'The Curse Of Issyos',
                    data: data.map(entry => entry.stats['thecurseofissyos.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'thelegendoflumina.zip': {
                    label: 'The Legend Of Lumina',
                    data: data.map(entry => entry.stats['thelegendoflumina.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'thermomorph.zip': {
                    label: 'Thermomorph',
                    data: data.map(entry => entry.stats['thermomorph.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'thestarlitescape.zip': {
                    label: 'The Starlit Escape',
                    data: data.map(entry => entry.stats['thestarlitescape.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'thesunandmoon.zip': {
                    label: 'The Sun and Moon',
                    data: data.map(entry => entry.stats['thesunandmoon.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'threecoins.zip': {
                    label: 'Insert Three Coins',
                    data: data.map(entry => entry.stats['threecoins.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'thwack.zip': {
                    label: 'Thwack',
                    data: data.map(entry => entry.stats['thwack.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'tileworld.zip': {
                    label: 'Tile World',
                    data: data.map(entry => entry.stats['tileworld.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'timespinner.zip': {
                    label: 'Timespinner',
                    data: data.map(entry => entry.stats['timespinner.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'tiny-crate.zip': {
                    label: 'Tiny Crate',
                    data: data.map(entry => entry.stats['tiny-crate.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'tinystg.zip': {
                    label: 'TinySTG',
                    data: data.map(entry => entry.stats['tinystg.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'titan_tactics.zip': {
                    label: 'Titan Tactics',
                    data: data.map(entry => entry.stats['titan_tactics.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'tmntsr.zip': {
                    label: 'TMNT: Shredder&lsquo;s Revenge',
                    data: data.map(entry => entry.stats['tmntsr.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'to_the_moon.zip': {
                    label: 'To the Moon',
                    data: data.map(entry => entry.stats['to_the_moon.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'tomb.raider.1.zip': {
                    label: 'Tomb Raider 1',
                    data: data.map(entry => entry.stats['tomb.raider.1.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'towerfall.zip': {
                    label: 'TowerFall Ascension',
                    data: data.map(entry => entry.stats['towerfall.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'towerfortress.zip': {
                    label: 'Tower Fortress',
                    data: data.map(entry => entry.stats['towerfortress.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'trickykeys.zip': {
                    label: 'Tricky Keys',
                    data: data.map(entry => entry.stats['trickykeys.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'trickykeys2.zip': {
                    label: 'Tricky Keys 2',
                    data: data.map(entry => entry.stats['trickykeys2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'trogdorrb.zip': {
                    label: 'Trogdor Reburninated',
                    data: data.map(entry => entry.stats['trogdorrb.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'trolley.delayma.zip': {
                    label: 'Trolley Delayma',
                    data: data.map(entry => entry.stats['trolley.delayma.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'tube64.zip': {
                    label: 'Tube64',
                    data: data.map(entry => entry.stats['tube64.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'tunics.zip': {
                    label: 'Tunics!',
                    data: data.map(entry => entry.stats['tunics.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'turbotabletennis.zip': {
                    label: 'TurboTableTennis',
                    data: data.map(entry => entry.stats['turbotabletennis.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'twodie.zip': {
                    label: 'Two Die',
                    data: data.map(entry => entry.stats['twodie.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'ubermoshcollection.zip': {
                    label: 'Ubermosh Collection',
                    data: data.map(entry => entry.stats['ubermoshcollection.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'udlrmodify.zip': {
                    label: 'UDLR_Modify',
                    data: data.map(entry => entry.stats['udlrmodify.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'ultimatestunts.zip': {
                    label: 'Ultimate Stunts',
                    data: data.map(entry => entry.stats['ultimatestunts.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'ultimatetapankaikki.zip': {
                    label: 'Ultimate Tapan Kaikki',
                    data: data.map(entry => entry.stats['ultimatetapankaikki.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'undertale.zip': {
                    label: 'Undertale',
                    data: data.map(entry => entry.stats['undertale.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'upo.zip': {
                    label: 'Upo',
                    data: data.map(entry => entry.stats['upo.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'uqm.zip': {
                    label: 'Ur-Quan Masters',
                    data: data.map(entry => entry.stats['uqm.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'valhalla.zip': {
                    label: 'VA-11 Hall-A: Cyberpunk Bartender Action',
                    data: data.map(entry => entry.stats['valhalla.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'vanillara.zip': {
                    label: 'VanillaRA',
                    data: data.map(entry => entry.stats['vanillara.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'vanillatd.zip': {
                    label: 'VanillaTD',
                    data: data.map(entry => entry.stats['vanillatd.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'vcmi.zip': {
                    label: 'VCMI - Heroes of Might and Magic III',
                    data: data.map(entry => entry.stats['vcmi.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'viralreload.zip': {
                    label: 'Viral Reload',
                    data: data.map(entry => entry.stats['viralreload.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'vvvvvv.zip': {
                    label: 'VVVVVV',
                    data: data.map(entry => entry.stats['vvvvvv.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'wakingmars.zip': {
                    label: 'Waking Mars',
                    data: data.map(entry => entry.stats['wakingmars.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'waternet.zip': {
                    label: 'Waternet',
                    data: data.map(entry => entry.stats['waternet.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'wetspot2.zip': {
                    label: 'Wetspot 2',
                    data: data.map(entry => entry.stats['wetspot2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'widelands.zip': {
                    label: 'Widelands',
                    data: data.map(entry => entry.stats['widelands.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'wipeout.zip': {
                    label: 'Wipeout',
                    data: data.map(entry => entry.stats['wipeout.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'wizardchase.zip': {
                    label: 'Wizardchase',
                    data: data.map(entry => entry.stats['wizardchase.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'wizardorb.zip': {
                    label: 'Wizard Orb',
                    data: data.map(entry => entry.stats['wizardorb.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'wizznic.zip': {
                    label: 'Wizznic',
                    data: data.map(entry => entry.stats['wizznic.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'wordlesdl.zip': {
                    label: 'Wordle SDL',
                    data: data.map(entry => entry.stats['wordlesdl.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'wordswithfreds.zip': {
                    label: 'Words With Freds',
                    data: data.map(entry => entry.stats['wordswithfreds.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'world.war.ii.gi.zip': {
                    label: 'World War II GI',
                    data: data.map(entry => entry.stats['world.war.ii.gi.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'worldofgoo.zip': {
                    label: 'World of Goo',
                    data: data.map(entry => entry.stats['worldofgoo.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'worship_vector.zip': {
                    label: 'Worship Vector',
                    data: data.map(entry => entry.stats['worship_vector.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'xenonvalkyrie.zip': {
                    label: 'Xenon Valkyrie',
                    data: data.map(entry => entry.stats['xenonvalkyrie.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'yarntown.zip': {
                    label: 'Yarntown',
                    data: data.map(entry => entry.stats['yarntown.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'yatka.zip': {
                    label: 'Yatka',
                    data: data.map(entry => entry.stats['yatka.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'yellowjacket.zip': {
                    label: 'Y E L L O W - J A C K E T',
                    data: data.map(entry => entry.stats['yellowjacket.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'youdiedbanry.zip': {
                    label: 'You Died But a Necromancer Revived You',
                    data: data.map(entry => entry.stats['youdiedbanry.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'youhave10s2023.zip': {
                    label: 'You Have 10 Seconds (2023)',
                    data: data.map(entry => entry.stats['youhave10s2023.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'z-warp.zip': {
                    label: 'Z-Warp',
                    data: data.map(entry => entry.stats['z-warp.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zelda-bookofmudora.zip': {
                    label: 'The Legend of Zelda: The Book of Mudora',
                    data: data.map(entry => entry.stats['zelda-bookofmudora.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zelda-mercurischest.zip': {
                    label: 'The Legend of Zelda: Mercuris&lsquo; Chest (DEMO)',
                    data: data.map(entry => entry.stats['zelda-mercurischest.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zelda-mysteryofsolarusdx.zip': {
                    label: 'The Legend of Zelda: Mystery of Solarus DX',
                    data: data.map(entry => entry.stats['zelda-mysteryofsolarusdx.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zelda-mysteryofsolarusxd.zip': {
                    label: 'The Legend of Zelda: Mystery of Solarus XD',
                    data: data.map(entry => entry.stats['zelda-mysteryofsolarusxd.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zelda-roth-se.zip': {
                    label: 'The Legend of Zelda: Return of the Hylian SE',
                    data: data.map(entry => entry.stats['zelda-roth-se.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zelda3.zip': {
                    label: 'Zelda A Link to The Past',
                    data: data.map(entry => entry.stats['zelda3.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zelda3t.zip': {
                    label: 'Zelda Time to Triumph',
                    data: data.map(entry => entry.stats['zelda3t.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zelda_roth.zip': {
                    label: 'Zelda Return Of The Hylian',
                    data: data.map(entry => entry.stats['zelda_roth.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zeldansq.zip': {
                    label: 'Zelda Navi&lsquo;s Quest',
                    data: data.map(entry => entry.stats['zeldansq.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zeldaolb.zip': {
                    label: 'Zelda Oni Link Begins',
                    data: data.map(entry => entry.stats['zeldaolb.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zeldaxd-mercurischess.zip': {
                    label: 'The Legend of Zelda: Mercuris Chess',
                    data: data.map(entry => entry.stats['zeldaxd-mercurischess.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zeldoschallenge.zip': {
                    label: 'The Legend of Zelda: Zeldo&lsquo;s Challenge',
                    data: data.map(entry => entry.stats['zeldoschallenge.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zeldoschallenge2.zip': {
                    label: 'The Legend of Zelda: Zeldo&lsquo;s Challenge 2',
                    data: data.map(entry => entry.stats['zeldoschallenge2.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zeroranger.zip': {
                    label: 'ZeroRanger',
                    data: data.map(entry => entry.stats['zeroranger.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'zgloom.zip': {
                    label: 'ZGloom',
                    data: data.map(entry => entry.stats['zgloom.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'ziggurat.zip': {
                    label: 'Ziggurat',
                    data: data.map(entry => entry.stats['ziggurat.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'znax.zip': {
                    label: 'Znax',
                    data: data.map(entry => entry.stats['znax.zip']),
                    borderColor: getRandomColor(),
                    fill: false
                },
                'total_downloads': {
                    label: 'Total Downloads',
                    data: data.map(entry => entry.stats['total_downloads']),
                    borderColor: getRandomColor(),
                    fill: false
                }            };

            populateDateSelectors(labels);

            const ctx = document.getElementById('myChart').getContext('2d');
            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [datasets['total_downloads']]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Date'
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Value'
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});

function populateDateSelectors(dates) {
    const startDateSelect = document.getElementById('startDate');
    const endDateSelect = document.getElementById('endDate');

    startDateSelect.min = dates[0];
    startDateSelect.max = dates[dates.length - 1];
    endDateSelect.min = dates[0];
    endDateSelect.max = dates[dates.length - 1];

    startDateSelect.value = dates[0];
    endDateSelect.value = dates[dates.length - 1];
}

function updateChart() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const startIndex = labels.indexOf(startDate);
    const endIndex = labels.indexOf(endDate) + 1;

    const filteredLabels = labels.slice(startIndex, endIndex);
    const filteredDatasets = chart.data.datasets.map(dataset => ({
        ...dataset,
        data: dataset.data.slice(startIndex, endIndex)
    }));

    chart.data.labels = filteredLabels;
    chart.data.datasets = filteredDatasets;
    chart.update();
}

function toggleDataset(datasetKey) {
    const existingDataset = chart.data.datasets.find(dataset => dataset.label === datasets[datasetKey].label);
    if (existingDataset) {
        // Remove the dataset if it already exists
        chart.data.datasets = chart.data.datasets.filter(dataset => dataset.label !== datasets[datasetKey].label);
    } else {
        // Add the dataset if it doesn't exist
        const newDataset = {
            label: datasets[datasetKey].label,
            data: fullData.map(entry => entry.stats[datasetKey]),
            borderColor: getRandomColor(),
            fill: false
        };
        chart.data.datasets.push(newDataset);
    }
    updateChart(); // Ensure chart is updated with date filters
}

// Helper function to generate random colors for each dataset
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
