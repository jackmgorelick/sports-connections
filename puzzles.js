// Each puzzle has 4 groups of 4 items.
// `difficulty`: 0 = yellow (easy), 1 = green, 2 = blue, 3 = purple (trickiest)
// `type`: stadium | player | team | saying | logo | location | nickname |
//         coach | movie | brand | event | tournament | other
//   (used for future image rendering — for now everything renders as text)
// Sports in scope: NFL, NBA, MLB, NHL, Golf, NCAA Basketball, NCAA Football.
// To add a new puzzle, append another object to the PUZZLES array.

const PUZZLES = [
  {
    id: 1,
    title: "Four Cities",
    level: "MVP",
    groups: [
      {
        category: "Boston sports",
        difficulty: 0,
        items: [
          { type: "stadium", label: "Fenway Park" },
          { type: "player",  label: "Bill Russell" },
          { type: "saying",  label: "“Do Your Job”" },
          { type: "team",    label: "Bruins" }
        ]
      },
      {
        category: "Chicago sports",
        difficulty: 1,
        items: [
          { type: "stadium", label: "Wrigley Field" },
          { type: "player",  label: "Walter Payton" },
          { type: "saying",  label: "“Bear Down”" },
          { type: "team",    label: "Blackhawks" }
        ]
      },
      {
        category: "Los Angeles sports",
        difficulty: 2,
        items: [
          { type: "stadium", label: "Dodger Stadium" },
          { type: "player",  label: "Magic Johnson" },
          { type: "saying",  label: "“Showtime”" },
          { type: "team",    label: "Kings" }
        ]
      },
      {
        category: "New York sports",
        difficulty: 3,
        items: [
          { type: "stadium", label: "Yankee Stadium" },
          { type: "player",  label: "Joe Namath" },
          { type: "saying",  label: "“Ya Gotta Believe”" },
          { type: "team",    label: "Rangers" }
        ]
      }
    ]
  },

  {
    id: 2,
    title: "Number Twos",
    level: "MVP",
    groups: [
      {
        category: "Wore #23",
        difficulty: 0,
        items: [
          { type: "player", label: "Michael Jordan" },
          { type: "player", label: "LeBron James" },
          { type: "player", label: "Don Mattingly" },
          { type: "player", label: "Ryne Sandberg" }
        ]
      },
      {
        category: "Famous ___ Park",
        difficulty: 1,
        items: [
          { type: "stadium", label: "Fenway" },
          { type: "stadium", label: "Oracle" },
          { type: "stadium", label: "Citizens Bank" },
          { type: "stadium", label: "Petco" }
        ]
      },
      {
        category: "NFL coaches' mantras",
        difficulty: 2,
        items: [
          { type: "saying", label: "“Do Your Job”" },
          { type: "saying", label: "“Trust the Process”" },
          { type: "saying", label: "“Next Man Up”" },
          { type: "saying", label: "“Climb the Mountain”" }
        ]
      },
      {
        category: "Originally Brooklyn",
        difficulty: 3,
        items: [
          { type: "team", label: "Dodgers" },
          { type: "team", label: "Nets" },
          { type: "team", label: "Americans" },
          { type: "team", label: "Tip-Tops" }
        ]
      }
    ]
  },

  {
    id: 3,
    title: "Iconic Jersey Numbers",
    level: "All-Pro",
    groups: [
      {
        category: "Wore #42",
        difficulty: 0,
        items: [
          { type: "player", label: "Jackie Robinson" },
          { type: "player", label: "Mariano Rivera" },
          { type: "player", label: "Ronnie Lott" },
          { type: "player", label: "Pat Tillman" }
        ]
      },
      {
        category: "Wore #7",
        difficulty: 1,
        items: [
          { type: "player", label: "Mickey Mantle" },
          { type: "player", label: "John Elway" },
          { type: "player", label: "Phil Esposito" },
          { type: "player", label: "Ben Roethlisberger" }
        ]
      },
      {
        category: "Wore #21",
        difficulty: 2,
        items: [
          { type: "player", label: "Roberto Clemente" },
          { type: "player", label: "Tim Duncan" },
          { type: "player", label: "Deion Sanders" },
          { type: "player", label: "LaDainian Tomlinson" }
        ]
      },
      {
        category: "Wore #32",
        difficulty: 3,
        items: [
          { type: "player", label: "Magic Johnson" },
          { type: "player", label: "Jim Brown" },
          { type: "player", label: "Sandy Koufax" },
          { type: "player", label: "Karl Malone" }
        ]
      }
    ]
  },

  {
    id: 4,
    title: "Field Marks",
    level: "All-Pro",
    groups: [
      {
        category: "Fenway Park",
        difficulty: 0,
        items: [
          { type: "stadium", label: "Green Monster" },
          { type: "stadium", label: "Pesky Pole" },
          { type: "saying",  label: "“Sweet Caroline”" },
          { type: "team",    label: "Red Sox" }
        ]
      },
      {
        category: "Lambeau Field",
        difficulty: 1,
        items: [
          { type: "stadium", label: "Frozen Tundra" },
          { type: "saying",  label: "Lambeau Leap" },
          { type: "other",   label: "Cheeseheads" },
          { type: "team",    label: "Packers" }
        ]
      },
      {
        category: "Augusta National",
        difficulty: 2,
        items: [
          { type: "stadium",    label: "Amen Corner" },
          { type: "stadium",    label: "Magnolia Lane" },
          { type: "other",      label: "Green Jacket" },
          { type: "tournament", label: "The Masters" }
        ]
      },
      {
        category: "Madison Square Garden",
        difficulty: 3,
        items: [
          { type: "saying", label: "“World's Most Famous”" },
          { type: "other",  label: "Spike Lee" },
          { type: "player", label: "Willis Reed" },
          { type: "team",   label: "Knicks" }
        ]
      }
    ]
  },

  {
    id: 5,
    title: "Coaching Mount Rushmore",
    level: "Pro",
    groups: [
      {
        category: "NBA coaches",
        difficulty: 0,
        items: [
          { type: "coach", label: "Phil Jackson" },
          { type: "coach", label: "Pat Riley" },
          { type: "coach", label: "Gregg Popovich" },
          { type: "coach", label: "Red Auerbach" }
        ]
      },
      {
        category: "NFL coaches",
        difficulty: 1,
        items: [
          { type: "coach", label: "Vince Lombardi" },
          { type: "coach", label: "Bill Belichick" },
          { type: "coach", label: "Don Shula" },
          { type: "coach", label: "Bill Walsh" }
        ]
      },
      {
        category: "College basketball",
        difficulty: 2,
        items: [
          { type: "coach", label: "John Wooden" },
          { type: "coach", label: "Mike Krzyzewski" },
          { type: "coach", label: "Dean Smith" },
          { type: "coach", label: "Bob Knight" }
        ]
      },
      {
        category: "College football",
        difficulty: 3,
        items: [
          { type: "coach", label: "Nick Saban" },
          { type: "coach", label: "Bear Bryant" },
          { type: "coach", label: "Knute Rockne" },
          { type: "coach", label: "Joe Paterno" }
        ]
      }
    ]
  },

  {
    id: 6,
    title: "NCAA Blue Bloods",
    level: "Pro",
    groups: [
      {
        category: "Duke alums",
        difficulty: 0,
        items: [
          { type: "player", label: "Christian Laettner" },
          { type: "player", label: "Grant Hill" },
          { type: "player", label: "JJ Redick" },
          { type: "player", label: "Zion Williamson" }
        ]
      },
      {
        category: "UNC alums",
        difficulty: 1,
        items: [
          { type: "player", label: "Michael Jordan" },
          { type: "player", label: "James Worthy" },
          { type: "player", label: "Vince Carter" },
          { type: "player", label: "Tyler Hansbrough" }
        ]
      },
      {
        category: "Kentucky alums",
        difficulty: 2,
        items: [
          { type: "player", label: "Anthony Davis" },
          { type: "player", label: "John Wall" },
          { type: "player", label: "Karl-Anthony Towns" },
          { type: "player", label: "DeMarcus Cousins" }
        ]
      },
      {
        category: "Kansas alums",
        difficulty: 3,
        items: [
          { type: "player", label: "Wilt Chamberlain" },
          { type: "player", label: "Paul Pierce" },
          { type: "player", label: "Andrew Wiggins" },
          { type: "player", label: "Joel Embiid" }
        ]
      }
    ]
  },

  {
    id: 7,
    title: "Sports Lingo",
    level: "All-Pro",
    groups: [
      {
        category: "Football terms",
        difficulty: 0,
        items: [
          { type: "saying", label: "Hail Mary" },
          { type: "saying", label: "Pick Six" },
          { type: "saying", label: "Audible" },
          { type: "saying", label: "Blitz" }
        ]
      },
      {
        category: "Basketball terms",
        difficulty: 1,
        items: [
          { type: "saying", label: "Pick and Roll" },
          { type: "saying", label: "Alley-Oop" },
          { type: "saying", label: "Triple-Double" },
          { type: "saying", label: "And-One" }
        ]
      },
      {
        category: "Baseball terms",
        difficulty: 2,
        items: [
          { type: "saying", label: "Grand Slam" },
          { type: "saying", label: "Squeeze Bunt" },
          { type: "saying", label: "Stolen Base" },
          { type: "saying", label: "Triple Play" }
        ]
      },
      {
        category: "Hockey terms",
        difficulty: 3,
        items: [
          { type: "saying", label: "Hat Trick" },
          { type: "saying", label: "Power Play" },
          { type: "saying", label: "Slap Shot" },
          { type: "saying", label: "One-Timer" }
        ]
      }
    ]
  },

  {
    id: 8,
    title: "At the Movies",
    level: "Rookie",
    groups: [
      {
        category: "Football flicks",
        difficulty: 0,
        items: [
          { type: "movie", label: "Rudy" },
          { type: "movie", label: "Friday Night Lights" },
          { type: "movie", label: "Remember the Titans" },
          { type: "movie", label: "The Blind Side" }
        ]
      },
      {
        category: "Baseball flicks",
        difficulty: 1,
        items: [
          { type: "movie", label: "Field of Dreams" },
          { type: "movie", label: "Bull Durham" },
          { type: "movie", label: "The Sandlot" },
          { type: "movie", label: "Major League" }
        ]
      },
      {
        category: "Basketball flicks",
        difficulty: 2,
        items: [
          { type: "movie", label: "Hoosiers" },
          { type: "movie", label: "He Got Game" },
          { type: "movie", label: "White Men Can't Jump" },
          { type: "movie", label: "Space Jam" }
        ]
      },
      {
        category: "Hockey flicks",
        difficulty: 3,
        items: [
          { type: "movie", label: "Slap Shot" },
          { type: "movie", label: "Mighty Ducks" },
          { type: "movie", label: "Miracle" },
          { type: "movie", label: "Goon" }
        ]
      }
    ]
  },

  {
    id: 9,
    title: "Up in the Rafters",
    level: "All-Pro",
    groups: [
      {
        category: "Retired by Yankees",
        difficulty: 0,
        items: [
          { type: "player", label: "Babe Ruth" },
          { type: "player", label: "Lou Gehrig" },
          { type: "player", label: "Mickey Mantle" },
          { type: "player", label: "Derek Jeter" }
        ]
      },
      {
        category: "Retired by Bulls",
        difficulty: 1,
        items: [
          { type: "player", label: "Michael Jordan" },
          { type: "player", label: "Scottie Pippen" },
          { type: "player", label: "Jerry Sloan" },
          { type: "player", label: "Bob Love" }
        ]
      },
      {
        category: "Retired by Canadiens",
        difficulty: 2,
        items: [
          { type: "player", label: "Maurice Richard" },
          { type: "player", label: "Jean Béliveau" },
          { type: "player", label: "Guy Lafleur" },
          { type: "player", label: "Ken Dryden" }
        ]
      },
      {
        category: "Retired by Packers",
        difficulty: 3,
        items: [
          { type: "player", label: "Bart Starr" },
          { type: "player", label: "Brett Favre" },
          { type: "player", label: "Reggie White" },
          { type: "player", label: "Don Hutson" }
        ]
      }
    ]
  },

  {
    id: 10,
    title: "Hockey Immortals",
    level: "Pro",
    groups: [
      {
        category: "Goaltenders",
        difficulty: 0,
        items: [
          { type: "player", label: "Patrick Roy" },
          { type: "player", label: "Martin Brodeur" },
          { type: "player", label: "Ken Dryden" },
          { type: "player", label: "Dominik Hasek" }
        ]
      },
      {
        category: "Defensemen",
        difficulty: 1,
        items: [
          { type: "player", label: "Bobby Orr" },
          { type: "player", label: "Ray Bourque" },
          { type: "player", label: "Nicklas Lidstrom" },
          { type: "player", label: "Paul Coffey" }
        ]
      },
      {
        category: "Centers",
        difficulty: 2,
        items: [
          { type: "player", label: "Wayne Gretzky" },
          { type: "player", label: "Mario Lemieux" },
          { type: "player", label: "Sidney Crosby" },
          { type: "player", label: "Mark Messier" }
        ]
      },
      {
        category: "Wingers",
        difficulty: 3,
        items: [
          { type: "player", label: "Gordie Howe" },
          { type: "player", label: "Maurice Richard" },
          { type: "player", label: "Brett Hull" },
          { type: "player", label: "Jaromir Jagr" }
        ]
      }
    ]
  },

  {
    id: 11,
    title: "Under Center: QB Eras",
    level: "Rookie",
    groups: [
      {
        category: "'60s/'70s legends",
        difficulty: 0,
        items: [
          { type: "player", label: "Johnny Unitas" },
          { type: "player", label: "Bart Starr" },
          { type: "player", label: "Roger Staubach" },
          { type: "player", label: "Joe Namath" }
        ]
      },
      {
        category: "'80s greats",
        difficulty: 1,
        items: [
          { type: "player", label: "Joe Montana" },
          { type: "player", label: "Dan Marino" },
          { type: "player", label: "John Elway" },
          { type: "player", label: "Jim Kelly" }
        ]
      },
      {
        category: "'90s/2000s stars",
        difficulty: 2,
        items: [
          { type: "player", label: "Brett Favre" },
          { type: "player", label: "Peyton Manning" },
          { type: "player", label: "Drew Brees" },
          { type: "player", label: "Steve Young" }
        ]
      },
      {
        category: "Today's gunslingers",
        difficulty: 3,
        items: [
          { type: "player", label: "Patrick Mahomes" },
          { type: "player", label: "Josh Allen" },
          { type: "player", label: "Joe Burrow" },
          { type: "player", label: "Lamar Jackson" }
        ]
      }
    ]
  },

  {
    id: 12,
    title: "Branded",
    level: "Rookie",
    groups: [
      {
        category: "Apparel giants",
        difficulty: 0,
        items: [
          { type: "brand", label: "Nike" },
          { type: "brand", label: "Adidas" },
          { type: "brand", label: "Puma" },
          { type: "brand", label: "Under Armour" }
        ]
      },
      {
        category: "Sports drinks",
        difficulty: 1,
        items: [
          { type: "brand", label: "Gatorade" },
          { type: "brand", label: "Powerade" },
          { type: "brand", label: "BodyArmor" },
          { type: "brand", label: "Liquid I.V." }
        ]
      },
      {
        category: "Signature sneakers",
        difficulty: 2,
        items: [
          { type: "brand", label: "Air Jordan" },
          { type: "brand", label: "LeBron" },
          { type: "brand", label: "Kobe" },
          { type: "brand", label: "Curry" }
        ]
      },
      {
        category: "Equipment makers",
        difficulty: 3,
        items: [
          { type: "brand", label: "Wilson" },
          { type: "brand", label: "Spalding" },
          { type: "brand", label: "Rawlings" },
          { type: "brand", label: "Easton" }
        ]
      }
    ]
  },

  {
    id: 13,
    title: "Gridiron Powerhouses",
    level: "Pro",
    groups: [
      {
        category: "Alabama Crimson Tide",
        difficulty: 0,
        items: [
          { type: "player", label: "Derrick Henry" },
          { type: "player", label: "Mark Ingram" },
          { type: "player", label: "Tua Tagovailoa" },
          { type: "player", label: "Bryce Young" }
        ]
      },
      {
        category: "Notre Dame Irish",
        difficulty: 1,
        items: [
          { type: "player", label: "Joe Montana" },
          { type: "player", label: "Tim Brown" },
          { type: "player", label: "Jerome Bettis" },
          { type: "player", label: "Manti Te'o" }
        ]
      },
      {
        category: "USC Trojans",
        difficulty: 2,
        items: [
          { type: "player", label: "Reggie Bush" },
          { type: "player", label: "Matt Leinart" },
          { type: "player", label: "Carson Palmer" },
          { type: "player", label: "Marcus Allen" }
        ]
      },
      {
        category: "Ohio State Buckeyes",
        difficulty: 3,
        items: [
          { type: "player", label: "Archie Griffin" },
          { type: "player", label: "Eddie George" },
          { type: "player", label: "Troy Smith" },
          { type: "player", label: "Justin Fields" }
        ]
      }
    ]
  },

  {
    id: 14,
    title: "One Team Forever",
    level: "All-Pro",
    groups: [
      {
        category: "NBA lifers",
        difficulty: 0,
        items: [
          { type: "player", label: "Kobe Bryant" },
          { type: "player", label: "Dirk Nowitzki" },
          { type: "player", label: "Tim Duncan" },
          { type: "player", label: "John Stockton" }
        ]
      },
      {
        category: "NFL lifers",
        difficulty: 1,
        items: [
          { type: "player", label: "Walter Payton" },
          { type: "player", label: "Barry Sanders" },
          { type: "player", label: "Jim Brown" },
          { type: "player", label: "Dan Marino" }
        ]
      },
      {
        category: "MLB lifers",
        difficulty: 2,
        items: [
          { type: "player", label: "Cal Ripken Jr." },
          { type: "player", label: "Derek Jeter" },
          { type: "player", label: "Tony Gwynn" },
          { type: "player", label: "Chipper Jones" }
        ]
      },
      {
        category: "NHL lifers",
        difficulty: 3,
        items: [
          { type: "player", label: "Steve Yzerman" },
          { type: "player", label: "Joe Sakic" },
          { type: "player", label: "Henrik Sedin" },
          { type: "player", label: "Daniel Alfredsson" }
        ]
      }
    ]
  },

  {
    id: 15,
    title: "On the Links",
    level: "All-Pro",
    groups: [
      {
        category: "PGA Tour today",
        difficulty: 0,
        items: [
          { type: "player", label: "Scottie Scheffler" },
          { type: "player", label: "Rory McIlroy" },
          { type: "player", label: "Xander Schauffele" },
          { type: "player", label: "Ludvig Åberg" }
        ]
      },
      {
        category: "All-time greats",
        difficulty: 1,
        items: [
          { type: "player", label: "Jack Nicklaus" },
          { type: "player", label: "Arnold Palmer" },
          { type: "player", label: "Ben Hogan" },
          { type: "player", label: "Sam Snead" }
        ]
      },
      {
        category: "Iconic courses",
        difficulty: 2,
        items: [
          { type: "location", label: "Augusta National" },
          { type: "location", label: "Pebble Beach" },
          { type: "location", label: "St. Andrews" },
          { type: "location", label: "Pinehurst" }
        ]
      },
      {
        category: "The four majors",
        difficulty: 3,
        items: [
          { type: "tournament", label: "The Masters" },
          { type: "tournament", label: "US Open" },
          { type: "tournament", label: "The Open" },
          { type: "tournament", label: "PGA Championship" }
        ]
      }
    ]
  },

  {
    id: 16,
    title: "Heisman Through the Years",
    level: "Pro",
    groups: [
      {
        category: "'90s winners",
        difficulty: 0,
        items: [
          { type: "player", label: "Charlie Ward" },
          { type: "player", label: "Eddie George" },
          { type: "player", label: "Charles Woodson" },
          { type: "player", label: "Ricky Williams" }
        ]
      },
      {
        category: "2000s winners",
        difficulty: 1,
        items: [
          { type: "player", label: "Carson Palmer" },
          { type: "player", label: "Reggie Bush" },
          { type: "player", label: "Tim Tebow" },
          { type: "player", label: "Sam Bradford" }
        ]
      },
      {
        category: "2010s winners",
        difficulty: 2,
        items: [
          { type: "player", label: "Cam Newton" },
          { type: "player", label: "Robert Griffin III" },
          { type: "player", label: "Johnny Manziel" },
          { type: "player", label: "Marcus Mariota" }
        ]
      },
      {
        category: "2020s winners",
        difficulty: 3,
        items: [
          { type: "player", label: "Caleb Williams" },
          { type: "player", label: "Jayden Daniels" },
          { type: "player", label: "Travis Hunter" },
          { type: "player", label: "Fernando Mendoza" }
        ]
      }
    ]
  },

  {
    id: 17,
    title: "Frozen Royalty",
    level: "All-Pro",
    groups: [
      {
        category: "Canadiens legends",
        difficulty: 0,
        items: [
          { type: "player", label: "Maurice Richard" },
          { type: "player", label: "Jean Béliveau" },
          { type: "player", label: "Guy Lafleur" },
          { type: "player", label: "Patrick Roy" }
        ]
      },
      {
        category: "Red Wings legends",
        difficulty: 1,
        items: [
          { type: "player", label: "Gordie Howe" },
          { type: "player", label: "Steve Yzerman" },
          { type: "player", label: "Nicklas Lidstrom" },
          { type: "player", label: "Pavel Datsyuk" }
        ]
      },
      {
        category: "Bruins legends",
        difficulty: 2,
        items: [
          { type: "player", label: "Bobby Orr" },
          { type: "player", label: "Ray Bourque" },
          { type: "player", label: "Cam Neely" },
          { type: "player", label: "Phil Esposito" }
        ]
      },
      {
        category: "Maple Leafs legends",
        difficulty: 3,
        items: [
          { type: "player", label: "Mats Sundin" },
          { type: "player", label: "Doug Gilmour" },
          { type: "player", label: "Tim Horton" },
          { type: "player", label: "Darryl Sittler" }
        ]
      }
    ]
  },

  {
    id: 18,
    title: "Dynasties",
    level: "Rookie",
    groups: [
      {
        category: "'60s Celtics",
        difficulty: 0,
        items: [
          { type: "player", label: "Bill Russell" },
          { type: "player", label: "Bob Cousy" },
          { type: "player", label: "John Havlicek" },
          { type: "player", label: "Sam Jones" }
        ]
      },
      {
        category: "Showtime Lakers",
        difficulty: 1,
        items: [
          { type: "player", label: "Magic Johnson" },
          { type: "player", label: "Kareem" },
          { type: "player", label: "James Worthy" },
          { type: "player", label: "Byron Scott" }
        ]
      },
      {
        category: "'90s Bulls",
        difficulty: 2,
        items: [
          { type: "player", label: "Michael Jordan" },
          { type: "player", label: "Scottie Pippen" },
          { type: "player", label: "Dennis Rodman" },
          { type: "player", label: "Steve Kerr" }
        ]
      },
      {
        category: "Warriors dynasty",
        difficulty: 3,
        items: [
          { type: "player", label: "Steph Curry" },
          { type: "player", label: "Klay Thompson" },
          { type: "player", label: "Draymond Green" },
          { type: "player", label: "Kevin Durant" }
        ]
      }
    ]
  },

  {
    id: 19,
    title: "Franchise DNA",
    level: "All-Pro",
    groups: [
      {
        category: "Pittsburgh Steelers",
        difficulty: 0,
        items: [
          { type: "stadium", label: "Acrisure Stadium" },
          { type: "player",  label: "Mean Joe Greene" },
          { type: "saying",  label: "“Steel Curtain”" },
          { type: "other",   label: "Terrible Towel" }
        ]
      },
      {
        category: "Los Angeles Lakers",
        difficulty: 1,
        items: [
          { type: "stadium", label: "Crypto.com Arena" },
          { type: "player",  label: "Jerry West" },
          { type: "saying",  label: "“Showtime”" },
          { type: "other",   label: "Purple & Gold" }
        ]
      },
      {
        category: "New York Yankees",
        difficulty: 2,
        items: [
          { type: "stadium", label: "Yankee Stadium" },
          { type: "player",  label: "Derek Jeter" },
          { type: "saying",  label: "“Bronx Bombers”" },
          { type: "other",   label: "Pinstripes" }
        ]
      },
      {
        category: "Montreal Canadiens",
        difficulty: 3,
        items: [
          { type: "stadium", label: "Bell Centre" },
          { type: "player",  label: "Maurice Richard" },
          { type: "saying",  label: "“Les Habitants”" },
          { type: "other",   label: "Bleu-Blanc-Rouge" }
        ]
      }
    ]
  },

  {
    id: 20,
    title: "Elite Stats Clubs",
    level: "All-Pro",
    groups: [
      {
        category: "NBA 50/40/90 club",
        difficulty: 0,
        items: [
          { type: "player", label: "Larry Bird" },
          { type: "player", label: "Steve Nash" },
          { type: "player", label: "Steph Curry" },
          { type: "player", label: "Kevin Durant" }
        ]
      },
      {
        category: "MLB 500 HR club",
        difficulty: 1,
        items: [
          { type: "player", label: "Babe Ruth" },
          { type: "player", label: "Hank Aaron" },
          { type: "player", label: "Willie Mays" },
          { type: "player", label: "Albert Pujols" }
        ]
      },
      {
        category: "NFL 5,000-yard passers",
        difficulty: 2,
        items: [
          { type: "player", label: "Peyton Manning" },
          { type: "player", label: "Tom Brady" },
          { type: "player", label: "Drew Brees" },
          { type: "player", label: "Matthew Stafford" }
        ]
      },
      {
        category: "NHL 50-in-50 club",
        difficulty: 3,
        items: [
          { type: "player", label: "Maurice Richard" },
          { type: "player", label: "Mike Bossy" },
          { type: "player", label: "Wayne Gretzky" },
          { type: "player", label: "Brett Hull" }
        ]
      }
    ]
  },

  {
    id: 21,
    title: "Hall of Fame Address",
    level: "Rookie",
    groups: [
      {
        category: "Cooperstown (MLB)",
        difficulty: 0,
        items: [
          { type: "player", label: "Babe Ruth" },
          { type: "player", label: "Cy Young" },
          { type: "player", label: "Hank Aaron" },
          { type: "player", label: "Willie Mays" }
        ]
      },
      {
        category: "Canton (NFL)",
        difficulty: 1,
        items: [
          { type: "player", label: "Jim Brown" },
          { type: "player", label: "Joe Montana" },
          { type: "player", label: "Walter Payton" },
          { type: "player", label: "Jerry Rice" }
        ]
      },
      {
        category: "Springfield (NBA)",
        difficulty: 2,
        items: [
          { type: "player", label: "Michael Jordan" },
          { type: "player", label: "Larry Bird" },
          { type: "player", label: "Magic Johnson" },
          { type: "player", label: "Kareem" }
        ]
      },
      {
        category: "Toronto (NHL)",
        difficulty: 3,
        items: [
          { type: "player", label: "Wayne Gretzky" },
          { type: "player", label: "Gordie Howe" },
          { type: "player", label: "Bobby Orr" },
          { type: "player", label: "Mario Lemieux" }
        ]
      }
    ]
  },

  {
    id: 22,
    title: "Behind the Mic",
    level: "All-Pro",
    groups: [
      {
        category: "SportsCenter anchors",
        difficulty: 0,
        items: [
          { type: "other", label: "Stuart Scott" },
          { type: "other", label: "Dan Patrick" },
          { type: "other", label: "Keith Olbermann" },
          { type: "other", label: "Scott Van Pelt" }
        ]
      },
      {
        category: "NBA shouters",
        difficulty: 1,
        items: [
          { type: "other", label: "Stephen A. Smith" },
          { type: "other", label: "Skip Bayless" },
          { type: "other", label: "Charles Barkley" },
          { type: "other", label: "Michael Wilbon" }
        ]
      },
      {
        category: "NFL voices",
        difficulty: 2,
        items: [
          { type: "other", label: "Chris Berman" },
          { type: "other", label: "Mike Greenberg" },
          { type: "other", label: "Adam Schefter" },
          { type: "other", label: "Mike Tirico" }
        ]
      },
      {
        category: "College sideline",
        difficulty: 3,
        items: [
          { type: "other", label: "Lee Corso" },
          { type: "other", label: "Kirk Herbstreit" },
          { type: "other", label: "Dick Vitale" },
          { type: "other", label: "Erin Andrews" }
        ]
      }
    ]
  },

  {
    id: 23,
    title: "Most Valuable",
    level: "Pro",
    groups: [
      {
        category: "Recent NBA MVPs",
        difficulty: 0,
        items: [
          { type: "player", label: "Shai Gilgeous-Alexander" },
          { type: "player", label: "Nikola Jokić" },
          { type: "player", label: "Giannis" },
          { type: "player", label: "Joel Embiid" }
        ]
      },
      {
        category: "Recent NFL MVPs",
        difficulty: 1,
        items: [
          { type: "player", label: "Patrick Mahomes" },
          { type: "player", label: "Matthew Stafford" },
          { type: "player", label: "Lamar Jackson" },
          { type: "player", label: "Josh Allen" }
        ]
      },
      {
        category: "Recent MLB MVPs",
        difficulty: 2,
        items: [
          { type: "player", label: "Aaron Judge" },
          { type: "player", label: "Shohei Ohtani" },
          { type: "player", label: "Bryce Harper" },
          { type: "player", label: "Ronald Acuña Jr." }
        ]
      },
      {
        category: "Recent Hart winners",
        difficulty: 3,
        items: [
          { type: "player", label: "Connor Hellebuyck" },
          { type: "player", label: "Connor McDavid" },
          { type: "player", label: "Nikita Kucherov" },
          { type: "player", label: "Nathan MacKinnon" }
        ]
      }
    ]
  },

  {
    id: 24,
    title: "Record Books",
    level: "Rookie",
    groups: [
      {
        category: "Career home run kings",
        difficulty: 0,
        items: [
          { type: "player", label: "Hank Aaron" },
          { type: "player", label: "Barry Bonds" },
          { type: "player", label: "Babe Ruth" },
          { type: "player", label: "Albert Pujols" }
        ]
      },
      {
        category: "NBA all-time scorers",
        difficulty: 1,
        items: [
          { type: "player", label: "LeBron James" },
          { type: "player", label: "Kareem" },
          { type: "player", label: "Karl Malone" },
          { type: "player", label: "Kobe Bryant" }
        ]
      },
      {
        category: "NHL goal leaders",
        difficulty: 2,
        items: [
          { type: "player", label: "Wayne Gretzky" },
          { type: "player", label: "Alex Ovechkin" },
          { type: "player", label: "Gordie Howe" },
          { type: "player", label: "Jaromir Jagr" }
        ]
      },
      {
        category: "NFL passing yards",
        difficulty: 3,
        items: [
          { type: "player", label: "Tom Brady" },
          { type: "player", label: "Drew Brees" },
          { type: "player", label: "Peyton Manning" },
          { type: "player", label: "Brett Favre" }
        ]
      }
    ]
  },

  {
    id: 25,
    title: "First Overall",
    level: "Pro",
    groups: [
      {
        category: "MLB #1 picks",
        difficulty: 0,
        items: [
          { type: "player", label: "Bryce Harper" },
          { type: "player", label: "Adley Rutschman" },
          { type: "player", label: "Paul Skenes" },
          { type: "player", label: "Eli Willits" }
        ]
      },
      {
        category: "NBA #1 picks",
        difficulty: 1,
        items: [
          { type: "player", label: "LeBron James" },
          { type: "player", label: "Zion Williamson" },
          { type: "player", label: "Victor Wembanyama" },
          { type: "player", label: "Cooper Flagg" }
        ]
      },
      {
        category: "NFL #1 picks",
        difficulty: 2,
        items: [
          { type: "player", label: "Peyton Manning" },
          { type: "player", label: "Trevor Lawrence" },
          { type: "player", label: "Caleb Williams" },
          { type: "player", label: "Cam Ward" }
        ]
      },
      {
        category: "NHL #1 picks",
        difficulty: 3,
        items: [
          { type: "player", label: "Connor McDavid" },
          { type: "player", label: "Connor Bedard" },
          { type: "player", label: "Macklin Celebrini" },
          { type: "player", label: "Matthew Schaefer" }
        ]
      }
    ]
  },

  {
    id: 26,
    title: "Aces",
    level: "Pro",
    groups: [
      {
        category: "'60s/'70s aces",
        difficulty: 0,
        items: [
          { type: "player", label: "Bob Gibson" },
          { type: "player", label: "Sandy Koufax" },
          { type: "player", label: "Steve Carlton" },
          { type: "player", label: "Nolan Ryan" }
        ]
      },
      {
        category: "'80s/'90s aces",
        difficulty: 1,
        items: [
          { type: "player", label: "Roger Clemens" },
          { type: "player", label: "Greg Maddux" },
          { type: "player", label: "Randy Johnson" },
          { type: "player", label: "Pedro Martinez" }
        ]
      },
      {
        category: "2000s/'10s aces",
        difficulty: 2,
        items: [
          { type: "player", label: "Justin Verlander" },
          { type: "player", label: "Clayton Kershaw" },
          { type: "player", label: "Max Scherzer" },
          { type: "player", label: "Felix Hernandez" }
        ]
      },
      {
        category: "Today's aces",
        difficulty: 3,
        items: [
          { type: "player", label: "Tarik Skubal" },
          { type: "player", label: "Paul Skenes" },
          { type: "player", label: "Chris Sale" },
          { type: "player", label: "Zack Wheeler" }
        ]
      }
    ]
  },

  {
    id: 27,
    title: "Skill Players",
    level: "Rookie",
    groups: [
      {
        category: "Wide receivers",
        difficulty: 0,
        items: [
          { type: "player", label: "Jerry Rice" },
          { type: "player", label: "Randy Moss" },
          { type: "player", label: "Calvin Johnson" },
          { type: "player", label: "Larry Fitzgerald" }
        ]
      },
      {
        category: "Running backs",
        difficulty: 1,
        items: [
          { type: "player", label: "Walter Payton" },
          { type: "player", label: "Barry Sanders" },
          { type: "player", label: "Emmitt Smith" },
          { type: "player", label: "Adrian Peterson" }
        ]
      },
      {
        category: "Tight ends",
        difficulty: 2,
        items: [
          { type: "player", label: "Tony Gonzalez" },
          { type: "player", label: "Rob Gronkowski" },
          { type: "player", label: "Travis Kelce" },
          { type: "player", label: "Antonio Gates" }
        ]
      },
      {
        category: "Defensive backs",
        difficulty: 3,
        items: [
          { type: "player", label: "Deion Sanders" },
          { type: "player", label: "Ed Reed" },
          { type: "player", label: "Ronnie Lott" },
          { type: "player", label: "Charles Woodson" }
        ]
      }
    ]
  },

  {
    id: 28,
    title: "GOAT Code",
    level: "All-Pro",
    groups: [
      {
        category: "Tom Brady",
        difficulty: 0,
        items: [
          { type: "team",     label: "Patriots" },
          { type: "nickname", label: "“TB12”" },
          { type: "other",    label: "#12" },
          { type: "coach",    label: "Bill Belichick" }
        ]
      },
      {
        category: "Michael Jordan",
        difficulty: 1,
        items: [
          { type: "team",     label: "Bulls" },
          { type: "nickname", label: "“Air Jordan”" },
          { type: "other",    label: "#23" },
          { type: "coach",    label: "Phil Jackson" }
        ]
      },
      {
        category: "Wayne Gretzky",
        difficulty: 2,
        items: [
          { type: "team",     label: "Oilers" },
          { type: "nickname", label: "“The Great One”" },
          { type: "other",    label: "#99" },
          { type: "player",   label: "Mark Messier" }
        ]
      },
      {
        category: "Tiger Woods",
        difficulty: 3,
        items: [
          { type: "location", label: "Stanford" },
          { type: "nickname", label: "“Tiger”" },
          { type: "location", label: "Augusta" },
          { type: "other",    label: "Red Sunday" }
        ]
      }
    ]
  },

  {
    id: 29,
    title: "Family Name",
    level: "All-Pro",
    groups: [
      {
        category: "Johnsons",
        difficulty: 0,
        items: [
          { type: "player", label: "Magic Johnson" },
          { type: "player", label: "Randy Johnson" },
          { type: "player", label: "Calvin Johnson" },
          { type: "coach",  label: "Jimmy Johnson" }
        ]
      },
      {
        category: "Browns",
        difficulty: 1,
        items: [
          { type: "player", label: "Jim Brown" },
          { type: "player", label: "Tim Brown" },
          { type: "player", label: "Mordecai Brown" },
          { type: "coach",  label: "Larry Brown" }
        ]
      },
      {
        category: "Jacksons",
        difficulty: 2,
        items: [
          { type: "player", label: "Bo Jackson" },
          { type: "coach",  label: "Phil Jackson" },
          { type: "player", label: "Reggie Jackson" },
          { type: "player", label: "Lamar Jackson" }
        ]
      },
      {
        category: "Williamses",
        difficulty: 3,
        items: [
          { type: "player", label: "Ted Williams" },
          { type: "player", label: "Caleb Williams" },
          { type: "coach",  label: "Roy Williams" },
          { type: "player", label: "Ricky Williams" }
        ]
      }
    ]
  },

  {
    id: 30,
    title: "The Improbable",
    level: "MVP",
    groups: [
      {
        category: "28-3 (Super Bowl LI)",
        difficulty: 0,
        items: [
          { type: "player", label: "Tom Brady" },
          { type: "team",   label: "Falcons" },
          { type: "other",  label: "28-3" },
          { type: "player", label: "James White" }
        ]
      },
      {
        category: "2004 ALCS",
        difficulty: 1,
        items: [
          { type: "team",   label: "Red Sox" },
          { type: "team",   label: "Yankees" },
          { type: "other",  label: "Down 3-0" },
          { type: "player", label: "David Ortiz" }
        ]
      },
      {
        category: "Helmet Catch (SB XLII)",
        difficulty: 2,
        items: [
          { type: "player", label: "Eli Manning" },
          { type: "player", label: "David Tyree" },
          { type: "team",   label: "Giants" },
          { type: "other",  label: "18-1 Patriots" }
        ]
      },
      {
        category: "3-1 Lead (2016 NBA Finals)",
        difficulty: 3,
        items: [
          { type: "player", label: "LeBron James" },
          { type: "team",   label: "Cavaliers" },
          { type: "team",   label: "Warriors" },
          { type: "other",  label: "The Block" }
        ]
      }
    ]
  },

  {
    id: 31,
    title: "Iron Streaks",
    level: "MVP",
    groups: [
      {
        category: "Cal Ripken's 2,632",
        difficulty: 0,
        items: [
          { type: "player",   label: "Cal Ripken Jr." },
          { type: "team",     label: "Orioles" },
          { type: "other",    label: "2,632 games" },
          { type: "nickname", label: "“Iron Man”" }
        ]
      },
      {
        category: "DiMaggio's 56-game hit",
        difficulty: 1,
        items: [
          { type: "player",   label: "Joe DiMaggio" },
          { type: "team",     label: "Yankees" },
          { type: "other",    label: "56 games" },
          { type: "nickname", label: "“Joltin' Joe”" }
        ]
      },
      {
        category: "Brett Favre's start streak",
        difficulty: 2,
        items: [
          { type: "player", label: "Brett Favre" },
          { type: "team",   label: "Packers" },
          { type: "other",  label: "297 starts" },
          { type: "other",  label: "QB record" }
        ]
      },
      {
        category: "UCLA's 88-game win streak",
        difficulty: 3,
        items: [
          { type: "coach", label: "John Wooden" },
          { type: "team",  label: "UCLA" },
          { type: "other", label: "88 wins" },
          { type: "other", label: "1971-74" }
        ]
      }
    ]
  },

  {
    id: 32,
    title: "Famous Last Stands",
    level: "MVP",
    groups: [
      {
        category: "Kobe's 60-point farewell",
        difficulty: 0,
        items: [
          { type: "player", label: "Kobe Bryant" },
          { type: "team",   label: "Lakers" },
          { type: "other",  label: "60 points" },
          { type: "saying", label: "“Mamba Out”" }
        ]
      },
      {
        category: "Jeter's last home hit",
        difficulty: 1,
        items: [
          { type: "player",   label: "Derek Jeter" },
          { type: "stadium",  label: "Yankee Stadium" },
          { type: "other",    label: "Walk-off single" },
          { type: "nickname", label: "“The Captain”" }
        ]
      },
      {
        category: "Mariano's mound exit",
        difficulty: 2,
        items: [
          { type: "player", label: "Mariano Rivera" },
          { type: "player", label: "Andy Pettitte" },
          { type: "saying", label: "“Enter Sandman”" },
          { type: "other",  label: "Cutter" }
        ]
      },
      {
        category: "Ortiz's final October",
        difficulty: 3,
        items: [
          { type: "player",   label: "David Ortiz" },
          { type: "team",     label: "Red Sox" },
          { type: "nickname", label: "“Big Papi”" },
          { type: "other",    label: "2016 ALDS" }
        ]
      }
    ]
  }
];
