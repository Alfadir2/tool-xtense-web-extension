/**
 * @author OGSteam
 * @license GNU/GPL
 */

/************************ Locales & Lang ********************************/
/* Fonction d'implementation des locales, lang */

function Ximplements(object, implement) {
    for (var i in implement) object[i] = implement[i];
}
/* Fonction initialisation des locales des status (retours OGSPY) */

function initLocales() {

    Ximplements(XtenseLocales, {
        'fr': {
            'spy reports': {
                'groups': {
                    'resources': 'Ressources',
                    'buildings': 'Bâtiment',
                    'defense': 'Défense',
                    'fleet': 'Flottes',
                    'researchs': 'Recherche',
                    'comment': 'Commentaire'
                },
                'units': {
                    'resources': {
                        601: 'metal',
                        602: 'crystal',
                        603: 'deuterium',
                        604: 'energy'
                    },
                    'buildings': {
                        1: 'Mine de métal',
                        2: 'Mine de cristal',
                        3: 'Synthétiseur de deutérium',
                        4: 'Centrale électrique solaire',
                        12: 'Centrale électrique de fusion',
                        14: 'Usine de robots',
                        15: 'Usine de nanites',
                        21: 'Chantier spatial',
                        22: 'Hangar de métal',
                        23: 'Hangar de cristal',
                        24: 'Réservoir de deutérium',
                        31: 'Laboratoire de recherche',
                        33: 'Terraformeur',
                        34: 'Dépôt de ravitaillement',
                        44: 'Silo de missiles',
                        41: 'Base lunaire',
                        42: 'Phalange de capteur',
                        43: 'Porte de saut spatial'
                    },
                    'researchs': {
                        106: 'Technologie Espionnage',
                        108: 'Technologie Ordinateur',
                        109: 'Technologie Armes',
                        110: 'Technologie Bouclier',
                        111: 'Technologie Protection des vaisseaux spatiaux',
                        113: 'Technologie .nerg.tique',
                        114: 'Technologie hyperespace',
                        115: 'Réacteur à combustion',
                        117: 'Réacteur à impulsion',
                        118: 'Propulsion hyperespace',
                        120: 'Technologie Laser',
                        121: 'Technologie à ions',
                        122: 'Technologie Plasma',
                        123: 'Réseau de recherche intergalactique',
                        124: 'Astrophysique',
                        199: 'Technologie Graviton'
                    },
                    'fleet': {
                        202: 'Petit transporteur',
                        203: 'Grand transporteur',
                        204: 'Chasseur léger',
                        205: 'Chasseur lourd',
                        206: 'Croiseur',
                        207: 'Vaisseau de bataille',
                        208: 'Vaisseau de colonisation',
                        209: 'Recycleur',
                        210: 'Sonde d`espionnage',
                        211: 'Bombardier',
                        212: 'Satellite solaire',
                        213: 'Destructeur',
                        214: 'Étoile de la mort',
                        215: 'Traqueur'
                    },
                    'defense': {
                        401: 'Lanceur de missiles',
                        402: 'Artillerie laser légère',
                        403: 'Artillerie laser lourde',
                        404: 'Canon de Gauss',
                        405: 'Artillerie à ions',
                        406: 'Lanceur de plasma',
                        407: 'Petit bouclier',
                        408: 'Grand bouclier',
                        502: 'Missile d`interception',
                        503: 'Missile Interplanétaire'
                    },
                    'comment': {}
                },
                'ogameAPI_link': 'ogame-api'
            },
            'combat report': {
                'units': {
                    'fleet': {
                        202: 'P.transp.',
                        203: 'G.transp.',
                        204: 'Ch.léger',
                        205: 'Ch.lourd',
                        206: 'Croiseur',
                        207: 'V.bataille',
                        208: 'Vaisseau de colonisation',
                        209: 'Recycleur',
                        210: 'Sonde',
                        211: 'Bombardier',
                        212: 'Sat.sol.',
                        213: 'Destr.',
                        214: 'Rip',
                        215: 'Traqueur'
                    },
                    'defense': {
                        401: 'Missile',
                        402: 'L.léger.',
                        403: 'L.lourd',
                        404: 'Can.Gauss',
                        405: 'Art.ions',
                        406: 'Lanc.plasma',
                        407: 'P.bouclier',
                        408: 'G.bouclier'
                    }
                },
                'unitsCost': {
                    202: 4000,
                    203: 12000,
                    204: 4000,
                    205: 10000,
                    206: 29000,
                    207: 60000,
                    208: 40000,
                    209: 18000,
                    210: 1000,
                    211: 90000,
                    212: 2500,
                    213: 125000,
                    214: 10000000,
                    215: 85000,
                    401: 2000,
                    402: 2000,
                    403: 8000,
                    404: 37000,
                    405: 8000,
                    406: 130000,
                    407: 20000,
                    408: 130000
                },
                'regxps': {
                    'time': '/(\d+).(\d+).(\d+)\s(\d+):(\d+):(\d+)/',
                    'round': {
                        'a_nb': 'La flotte attaquante tire ([\\d|\\.]*) fois ',
                        'a_shoot': 'avec une force totale de ([\\d|\\.]*) sur le défenseur.',
                        'd_bcl': 'Les boucliers du défenseur absorbent ([\\d|\\.]*) points de dommage.',
                        'd_nb': 'La flotte de défense tire ([\\d|\\.]*) fois',
                        'd_shoot': 'sur l`attaquant avec une force de ([\\d|\\.]*)\. Les boucliers',
                        'a_bcl': ' de l`attaquant absorbent ([\\d|\\.]*) points de dommage'
                    },
                    'result': {
                        'win': {
                            'win_metal': 'metal',
                            'win_cristal': 'crystal',
                            'win_deut': 'deuterium'
                        },
                        'deb': {
                            'deb_metal': 'metal',
                            'deb_cristal': 'crystal'
                        },
                        'a_lost': 'L`attaquant a perdu au total (.*) unités.',
                        'd_lost': 'Le défenseur a perdu au total (.*) unités.'
                    },
                    'weapons': {
                        'arm': 'weaponPercentage',
                        'bcl': 'shieldPercentage',
                        'coq': 'armorPercentage'
                    },
                    'moon': 'formant ainsi une lune',
                    'moonprob': 'une lune est de (\\d+) %',
                    'attack': 'Attaquant',
                    'defense': 'Défenseur',
                    'nul': 'match nul',
                    'attack_win': 'L`attaquant a gagné la bataille',
                    'ogameAPI_link': 'ogame-api'
                }
            },
            'messages': {
                'espionage of': 'Rapport d`espionnage de',
                'unespionage prob': 'Probabilité de contre-espionnage ',
                'activity': '(\\d+)</font> dernières minutes',
                'moon': 'type',
                'espionnage action': 'Activité d`espionnage',
                'fleet command': 'Tour de contrôle',
                'expedition result': 'Résultat de l`expédition ',
                'fleet': 'Flotte',
                'harvesting': 'exploitation du champ de débris',
                'combat of': 'Rapport de combat',
                'combat defence': 'Bataille de',
                'trade message 1': 'Livraison de ressources par',
                'trade message 2': 'Arriv.*e sur une plan.*te',
                'antimatiere': 'antimatière'
            },
            'dates': {
                'messages': {
                    regexp: '(\\d+).(\\d+).(\\d+)[^\\d]+(\\d+):(\\d+):(\\d+)',
                    fields: {
                        year: 3,
                        month: 2,
                        day: 1,
                        hour: 4,
                        min: 5,
                        sec: 6
                    }
                },
                'messagesRC': {
                    regexp: '(\\d+).(\\d+).(\\d+)\\s(\\d+):(\\d+):(\\d+)',
                    fields: {
                        year: 3,
                        month: 2,
                        day: 1,
                        hour: 4,
                        min: 5,
                        sec: 6
                    }
                }
            }
        },

        'en': {
            'spy reports': {
                'groups': {
                    'resources': 'Resources',
                    'buildings': 'Buildings',
                    'defense': 'Defense',
                    'fleet': 'Fleet',
                    'researchs': 'Research'
                },
                'units': {
                    'resources': {
                        601: 'Metal',
                        602: 'Crystal',
                        603: 'Deuterium',
                        604: 'Energy'
                    },
                    'buildings': {
                        1: 'Metal Mine',
                        2: 'Crystal Mine',
                        3: 'Deuterium Synthesizer',
                        4: 'Solar Plant',
                        12: 'Fusion Reactor',
                        14: 'Robotics Factory',
                        15: 'Nanite Factory',
                        21: 'Shipyard',
                        22: 'Metal Storage',
                        23: 'Crystal Storage',
                        24: 'Deuterium Tank',
                        31: 'Research Lab',
                        33: 'Terraformer',
                        34: 'Alliance Depot',
                        44: 'Missile Silo',
                        41: 'Lunar Base',
                        42: 'Sensor Phalanx',
                        43: 'Jump Gate'
                    },
                    'researchs': {
                        106: 'Espionage Technology',
                        108: 'Computer Technology',
                        109: 'Weapons Technology',
                        110: 'Shielding Technology',
                        111: 'Armour Technology',
                        113: 'Energy Technology',
                        114: 'Hyperspace Technology',
                        115: 'Combustion Drive',
                        117: 'Impulse Drive',
                        118: 'Hyperspace Drive',
                        120: 'Laser Technology',
                        121: 'Ion Technology',
                        122: 'Plasma Technology',
                        123: 'Intergalactic Research Network',
                        124: 'Expedition Technology',
                        199: 'Graviton Technology'
                    },
                    'fleet': {
                        202: 'Small Cargo',
                        203: 'Large Cargo',
                        204: 'Light Fighter',
                        205: 'Heavy Fighter',
                        206: 'Cruiser',
                        207: 'Battleship',
                        208: 'Colony Ship',
                        209: 'Recycler',
                        210: 'Espionage Probe',
                        211: 'Bomber',
                        212: 'Solar Satellite',
                        213: 'Destroyer',
                        214: 'Deathstar',
                        215: 'Battlecruiser'
                    },
                    'defense': {
                        401: 'Rocket Launcher',
                        402: 'Light Laser',
                        403: 'Heavy Laser',
                        404: 'Gauss Cannon',
                        405: 'Ion Cannon',
                        406: 'Plasma Turret',
                        407: 'Small Shield Dome',
                        408: 'Large Shield Dome',
                        502: 'Anti-Ballistic Missiles',
                        503: 'Interplanetary Missiles'
                    }
                }
            },


            'dates': {
                'messages': {
                    regexp: '(\\d+)-(\\d+)[^\\d]+(\\d+):(\\d+):(\\d+)',
                    fields: {
                        year: -1,
                        month: 1,
                        day: 2,
                        hour: 3,
                        min: 4,
                        sec: 5
                    }
                }
            },

            'messages': {
                'espionage of': 'Espionage report of',
                'espionage prob': 'Chance of counter-espionage',
                'fleet command': 'Fleet Command',
                'expedition result': 'Expedition Result \\[(\\d+:\\d+:\\d+)\\]',
                'espionnage action': 'Espionage action',
                'fleet': 'Fleet',
                'harvesting': 'Harvesting report from DF'
            }
        },
        'br': {
            'spy reports': {
                'groups': {
                    'resources': 'Ressources',
                    'buildings': 'Bâtiment',
                    'defense': 'Défense',
                    'fleet': 'Flottes',
                    'researchs': 'Recherche',
                    'comment': 'Commentaire'
                },
                'units': {
                    'resources': {
                        601: 'metal',
                        602: 'crystal',
                        603: 'deuterium',
                        604: 'energy'
                    },
                    'buildings': {
                        1: 'Mine de métal',
                        2: 'Mine de cristal',
                        3: 'Synthétiseur de deutérium',
                        4: 'Centrale électrique solaire',
                        12: 'Centrale électrique de fusion',
                        14: 'Usine de robots',
                        15: 'Usine de nanites',
                        21: 'Chantier spatial',
                        22: 'Hangar de métal',
                        23: 'Hangar de cristal',
                        24: 'Réservoir de deutérium',
                        31: 'Laboratoire de recherche',
                        33: 'Terraformeur',
                        34: 'Dépôt de ravitaillement',
                        44: 'Silo de missiles',
                        41: 'Base lunaire',
                        42: 'Phalange de capteur',
                        43: 'Porte de saut spatial'
                    },
                    'researchs': {
                        106: 'Technologie Espionnage',
                        108: 'Technologie Ordinateur',
                        109: 'Technologie Armes',
                        110: 'Technologie Bouclier',
                        111: 'Technologie Protection des vaisseaux spatiaux',
                        113: 'Technologie .nerg.tique',
                        114: 'Technologie hyperespace',
                        115: 'Réacteur à combustion',
                        117: 'Réacteur à impulsion',
                        118: 'Propulsion hyperespace',
                        120: 'Technologie Laser',
                        121: 'Technologie à ions',
                        122: 'Technologie Plasma',
                        123: 'Réseau de recherche intergalactique',
                        124: 'Astrophysique',
                        199: 'Technologie Graviton'
                    },
                    'fleet': {
                        202: 'Petit transporteur',
                        203: 'Grand transporteur',
                        204: 'Chasseur léger',
                        205: 'Chasseur lourd',
                        206: 'Croiseur',
                        207: 'Vaisseau de bataille',
                        208: 'Vaisseau de colonisation',
                        209: 'Recycleur',
                        210: 'Sonde d`espionnage',
                        211: 'Bombardier',
                        212: 'Satellite solaire',
                        213: 'Destructeur',
                        214: 'Étoile de la mort',
                        215: 'Traqueur'
                    },
                    'defense': {
                        401: 'Lanceur de missiles',
                        402: 'Artillerie laser légère',
                        403: 'Artillerie laser lourde',
                        404: 'Canon de Gauss',
                        405: 'Artillerie à ions',
                        406: 'Lanceur de plasma',
                        407: 'Petit bouclier',
                        408: 'Grand bouclier',
                        502: 'Missile d`interception',
                        503: 'Missile Interplanétaire'
                    },
                    'comment': {}
                },
                'ogameAPI_link': 'ogame-api'
            },
            'combat report': {
                'units': {
                    'fleet': {
                        202: 'P.transp.',
                        203: 'G.transp.',
                        204: 'Ch.léger',
                        205: 'Ch.lourd',
                        206: 'Croiseur',
                        207: 'V.bataille',
                        208: 'Vaisseau de colonisation',
                        209: 'Recycleur',
                        210: 'Sonde',
                        211: 'Bombardier',
                        212: 'Sat.sol.',
                        213: 'Destr.',
                        214: 'Rip',
                        215: 'Traqueur'
                    },
                    'defense': {
                        401: 'Missile',
                        402: 'L.léger.',
                        403: 'L.lourd',
                        404: 'Can.Gauss',
                        405: 'Art.ions',
                        406: 'Lanc.plasma',
                        407: 'P.bouclier',
                        408: 'G.bouclier'
                    }
                },
                'unitsCost': {
                    202: 4000,
                    203: 12000,
                    204: 4000,
                    205: 10000,
                    206: 29000,
                    207: 60000,
                    208: 40000,
                    209: 18000,
                    210: 1000,
                    211: 90000,
                    212: 2500,
                    213: 125000,
                    214: 10000000,
                    215: 85000,
                    401: 2000,
                    402: 2000,
                    403: 8000,
                    404: 37000,
                    405: 8000,
                    406: 130000,
                    407: 20000,
                    408: 130000
                },
                'regxps': {
                    'time': '/(\d+).(\d+).(\d+)\s(\d+):(\d+):(\d+)/',
                    'round': {
                        'a_nb': 'La flotte attaquante tire ([\\d|\\.]*) fois ',
                        'a_shoot': 'avec une force totale de ([\\d|\\.]*) sur le défenseur.',
                        'd_bcl': 'Les boucliers du défenseur absorbent ([\\d|\\.]*) points de dommage.',
                        'd_nb': 'La flotte de défense tire ([\\d|\\.]*) fois',
                        'd_shoot': 'sur l`attaquant avec une force de ([\\d|\\.]*)\. Les boucliers',
                        'a_bcl': ' de l`attaquant absorbent ([\\d|\\.]*) points de dommage'
                    },
                    'result': {
                        'win': {
                            'win_metal': 'metal',
                            'win_cristal': 'crystal',
                            'win_deut': 'deuterium'
                        },
                        'deb': {
                            'deb_metal': 'metal',
                            'deb_cristal': 'crystal'
                        },
                        'a_lost': 'L`attaquant a perdu au total (.*) unités.',
                        'd_lost': 'Le défenseur a perdu au total (.*) unités.'
                    },
                    'weapons': {
                        'arm': 'weaponPercentage',
                        'bcl': 'shieldPercentage',
                        'coq': 'armorPercentage'
                    },
                    'moon': 'formant ainsi une lune',
                    'moonprob': 'une lune est de (\\d+) %',
                    'attack': 'Attaquant',
                    'defense': 'Défenseur',
                    'nul': 'match nul',
                    'attack_win': 'L`attaquant a gagné la bataille',
                    'ogameAPI_link': 'ogame-api'
                }
            },
            'messages': {
                'espionage of': 'Rapport d`espionnage de',
                'unespionage prob': 'Probabilité de contre-espionnage ',
                'activity': '(\\d+)</font> dernières minutes',
                'moon': 'type',
                'espionnage action': 'Activité d`espionnage',
                'fleet command': 'Tour de contrôle',
                'expedition result': 'Résultat de l`expédition ',
                'fleet': 'Flotte',
                'harvesting': 'exploitation du champ de débris',
                'combat of': 'Rapport de combat',
                'combat defence': 'Bataille de',
                'trade message 1': 'Livraison de ressources par',
                'trade message 2': 'Arriv.*e sur une plan.*te',
                'antimatiere': 'antimatière'
            },
            'dates': {
                'messages': {
                    regexp: '(\\d+).(\\d+).(\\d+)[^\\d]+(\\d+):(\\d+):(\\d+)',
                    fields: {
                        year: 3,
                        month: 2,
                        day: 1,
                        hour: 4,
                        min: 5,
                        sec: 6
                    }
                },
                'messagesRC': {
                    regexp: '(\\d+).(\\d+).(\\d+)\\s(\\d+):(\\d+):(\\d+)',
                    fields: {
                        year: 3,
                        month: 2,
                        day: 1,
                        hour: 4,
                        min: 5,
                        sec: 6
                    }
                }
            }
        }
    })
}