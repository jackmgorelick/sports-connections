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
    level: "All-Pro",
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
    title: "Iconic Moments",
    level: "MVP",
    groups: [
      {
        category: "The Catch (1981)",
        difficulty: 0,
        items: [
          { type: "player", label: "Joe Montana" },
          { type: "player", label: "Dwight Clark" },
          { type: "team",   label: "49ers" },
          { type: "other",  label: "NFC Title" }
        ]
      },
      {
        category: "Wilt's 100 (1962)",
        difficulty: 1,
        items: [
          { type: "player",   label: "Wilt Chamberlain" },
          { type: "team",     label: "Warriors" },
          { type: "location", label: "Hershey, PA" },
          { type: "other",    label: "100 points" }
        ]
      },
      {
        category: "Aaron's 715 (1974)",
        difficulty: 2,
        items: [
          { type: "player", label: "Hank Aaron" },
          { type: "team",   label: "Braves" },
          { type: "other",  label: "Broke Ruth" },
          { type: "saying", label: "“715”" }
        ]
      },
      {
        category: "Shot Heard Round the World (1951)",
        difficulty: 3,
        items: [
          { type: "player", label: "Bobby Thomson" },
          { type: "team",   label: "Giants" },
          { type: "team",   label: "Brooklyn Dodgers" },
          { type: "saying", label: "“Giants win the pennant!”" }
        ]
      }
    ]
  },

  {
    id: 4,
    title: "Field Marks",
    level: "Pro",
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
    title: "Coach Decoded",
    level: "All-Pro",
    groups: [
      {
        category: "Bill Belichick",
        difficulty: 0,
        items: [
          { type: "saying",  label: "“Do Your Job”" },
          { type: "team",    label: "Patriots" },
          { type: "player",  label: "Tom Brady" },
          { type: "stadium", label: "Gillette Stadium" }
        ]
      },
      {
        category: "Nick Saban",
        difficulty: 1,
        items: [
          { type: "saying",  label: "“The Process”" },
          { type: "team",    label: "Crimson Tide" },
          { type: "player",  label: "Mark Ingram" },
          { type: "location", label: "Tuscaloosa" }
        ]
      },
      {
        category: "Coach K",
        difficulty: 2,
        items: [
          { type: "nickname", label: "“Coach K”" },
          { type: "team",     label: "Blue Devils" },
          { type: "player",   label: "Christian Laettner" },
          { type: "stadium",  label: "Cameron Indoor" }
        ]
      },
      {
        category: "Gregg Popovich",
        difficulty: 3,
        items: [
          { type: "saying",  label: "“Pound the Rock”" },
          { type: "team",    label: "Spurs" },
          { type: "player",  label: "Tim Duncan" },
          { type: "stadium", label: "AT&T Center" }
        ]
      }
    ]
  },

  {
    id: 6,
    title: "Sports Lingo",
    level: "Rookie",
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
    id: 7,
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
    id: 8,
    title: "Up in the Rafters",
    level: "Pro",
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
    id: 9,
    title: "Same First Name",
    level: "Pro",
    groups: [
      {
        category: "Toms",
        difficulty: 0,
        items: [
          { type: "player", label: "Tom Brady" },
          { type: "player", label: "Tom Watson" },
          { type: "player", label: "Tom Glavine" },
          { type: "player", label: "Tom Seaver" }
        ]
      },
      {
        category: "Mikes",
        difficulty: 1,
        items: [
          { type: "player", label: "Mike Trout" },
          { type: "player", label: "Mike Schmidt" },
          { type: "player", label: "Mike Modano" },
          { type: "coach",  label: "Mike Krzyzewski" }
        ]
      },
      {
        category: "Joes",
        difficulty: 2,
        items: [
          { type: "player", label: "Joe Montana" },
          { type: "player", label: "Joe DiMaggio" },
          { type: "player", label: "Joe Burrow" },
          { type: "player", label: "Joe Namath" }
        ]
      },
      {
        category: "Bobbys",
        difficulty: 3,
        items: [
          { type: "player", label: "Bobby Orr" },
          { type: "player", label: "Bobby Hull" },
          { type: "player", label: "Bob Cousy" },
          { type: "coach",  label: "Bobby Knight" }
        ]
      }
    ]
  },

  {
    id: 10,
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
    id: 11,
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
    id: 12,
    title: "Trophy Cabinet",
    level: "All-Pro",
    groups: [
      {
        category: "Heisman Trophy",
        difficulty: 0,
        items: [
          { type: "other",  label: "Stiff-arm pose" },
          { type: "other",  label: "John Heisman" },
          { type: "player", label: "Travis Hunter (2024)" },
          { type: "other",  label: "Downtown Athletic Club" }
        ]
      },
      {
        category: "Cy Young Award",
        difficulty: 1,
        items: [
          { type: "other",  label: "511 wins" },
          { type: "player", label: "Tarik Skubal (AL 2024)" },
          { type: "player", label: "Chris Sale (NL 2024)" },
          { type: "other",  label: "Pitching Triple Crown" }
        ]
      },
      {
        category: "Stanley Cup",
        difficulty: 2,
        items: [
          { type: "other", label: "Lord Stanley" },
          { type: "other", label: "Oldest pro trophy" },
          { type: "team",  label: "Florida Panthers (2024)" },
          { type: "other", label: "Engraved names" }
        ]
      },
      {
        category: "Larry O'Brien Trophy",
        difficulty: 3,
        items: [
          { type: "other", label: "NBA Finals" },
          { type: "other", label: "Former commissioner" },
          { type: "team",  label: "Celtics (2024)" },
          { type: "other", label: "Gold basketball" }
        ]
      }
    ]
  },

  {
    id: 13,
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
    id: 14,
    title: "Elite Stats Clubs",
    level: "Pro",
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
    id: 15,
    title: "Word Players",
    level: "MVP",
    groups: [
      {
        category: "Last names = colors",
        difficulty: 0,
        items: [
          { type: "player", label: "Reggie White" },
          { type: "player", label: "Jim Brown" },
          { type: "player", label: "Draymond Green" },
          { type: "player", label: "Bud Black" }
        ]
      },
      {
        category: "Last names = animals",
        difficulty: 1,
        items: [
          { type: "player", label: "Larry Bird" },
          { type: "player", label: "CeeDee Lamb" },
          { type: "player", label: "AJ Hawk" },
          { type: "player", label: "Randy Wolf" }
        ]
      },
      {
        category: "Last names = occupations",
        difficulty: 2,
        items: [
          { type: "player", label: "Geno Smith" },
          { type: "player", label: "James Cook" },
          { type: "player", label: "Travis Hunter" },
          { type: "player", label: "Vince Carter" }
        ]
      },
      {
        category: "Last names = landscape",
        difficulty: 3,
        items: [
          { type: "player", label: "Grant Hill" },
          { type: "player", label: "Philip Rivers" },
          { type: "player", label: "Tiger Woods" },
          { type: "player", label: "Justin Fields" }
        ]
      }
    ]
  },

  {
    id: 16,
    title: "Behind the Mic",
    level: "All-Pro",
    groups: [
      {
        category: "Play-by-play voices",
        difficulty: 0,
        items: [
          { type: "other", label: "Joe Buck" },
          { type: "other", label: "Jim Nantz" },
          { type: "other", label: "Mike Breen" },
          { type: "other", label: "Ian Eagle" }
        ]
      },
      {
        category: "Game booth analysts",
        difficulty: 1,
        items: [
          { type: "other", label: "Troy Aikman" },
          { type: "other", label: "Tony Romo" },
          { type: "other", label: "Cris Collinsworth" },
          { type: "other", label: "Kirk Herbstreit" }
        ]
      },
      {
        category: "NFL sideline reporters",
        difficulty: 2,
        items: [
          { type: "other", label: "Erin Andrews" },
          { type: "other", label: "Lisa Salters" },
          { type: "other", label: "Melissa Stark" },
          { type: "other", label: "Tracy Wolfson" }
        ]
      },
      {
        category: "Studio personalities",
        difficulty: 3,
        items: [
          { type: "other", label: "Stephen A. Smith" },
          { type: "other", label: "Pat McAfee" },
          { type: "other", label: "Scott Van Pelt" },
          { type: "other", label: "Mike Greenberg" }
        ]
      }
    ]
  },

  {
    id: 17,
    title: "Stadium Songs",
    level: "All-Pro",
    groups: [
      {
        category: "“Sweet Caroline”",
        difficulty: 0,
        items: [
          { type: "other",   label: "Neil Diamond" },
          { type: "team",    label: "Red Sox" },
          { type: "stadium", label: "Fenway Park" },
          { type: "other",   label: "8th inning" }
        ]
      },
      {
        category: "“Take Me Out to the Ballgame”",
        difficulty: 1,
        items: [
          { type: "other",   label: "7th inning stretch" },
          { type: "other",   label: "Harry Caray" },
          { type: "stadium", label: "Wrigley Field" },
          { type: "other",   label: "Cracker Jack" }
        ]
      },
      {
        category: "“Centerfield”",
        difficulty: 2,
        items: [
          { type: "other", label: "John Fogerty" },
          { type: "other", label: "“Put me in Coach”" },
          { type: "other", label: "1985 anthem" },
          { type: "other", label: "Outfield position" }
        ]
      },
      {
        category: "“We Will Rock You”",
        difficulty: 3,
        items: [
          { type: "other", label: "Queen" },
          { type: "other", label: "Stomp-stomp-clap" },
          { type: "other", label: "Stadium intro" },
          { type: "other", label: "Freddie Mercury" }
        ]
      }
    ]
  },

  {
    id: 18,
    title: "Sports Compounds",
    level: "MVP",
    groups: [
      {
        category: "___ DAY",
        difficulty: 0,
        items: [
          { type: "saying", label: "Game" },
          { type: "saying", label: "Opening" },
          { type: "saying", label: "Draft" },
          { type: "saying", label: "Pro" }
        ]
      },
      {
        category: "HOT ___",
        difficulty: 1,
        items: [
          { type: "saying", label: "Streak" },
          { type: "saying", label: "Hand" },
          { type: "saying", label: "Take" },
          { type: "saying", label: "Stove" }
        ]
      },
      {
        category: "HOME ___",
        difficulty: 2,
        items: [
          { type: "saying", label: "Run" },
          { type: "saying", label: "Plate" },
          { type: "saying", label: "Court" },
          { type: "saying", label: "Stretch" }
        ]
      },
      {
        category: "DEAD ___",
        difficulty: 3,
        items: [
          { type: "saying", label: "Heat" },
          { type: "saying", label: "Lock" },
          { type: "saying", label: "Money" },
          { type: "saying", label: "Pool" }
        ]
      }
    ]
  },

  {
    id: 19,
    title: "Sports Idioms",
    level: "MVP",
    groups: [
      {
        category: "Means EASY WIN",
        difficulty: 0,
        items: [
          { type: "saying", label: "Slam Dunk" },
          { type: "saying", label: "Layup" },
          { type: "saying", label: "Walk-off" },
          { type: "saying", label: "Tap-in" }
        ]
      },
      {
        category: "Means UNEXPECTED",
        difficulty: 1,
        items: [
          { type: "saying", label: "Curveball" },
          { type: "saying", label: "Out of Left Field" },
          { type: "saying", label: "Blindside" },
          { type: "saying", label: "Hail Mary" }
        ]
      },
      {
        category: "Means GIVE UP",
        difficulty: 2,
        items: [
          { type: "saying", label: "Throw in the Towel" },
          { type: "saying", label: "Punt" },
          { type: "saying", label: "Tap Out" },
          { type: "saying", label: "Wave the White Flag" }
        ]
      },
      {
        category: "Means FAIL",
        difficulty: 3,
        items: [
          { type: "saying", label: "Strike Out" },
          { type: "saying", label: "Whiff" },
          { type: "saying", label: "Choke" },
          { type: "saying", label: "Fumble" }
        ]
      }
    ]
  },

  {
    id: 20,
    title: "GOAT Code",
    level: "Pro",
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
  },

  {
    id: 25,
    title: "What Follows?",
    level: "MVP",
    groups: [
      {
        category: "___ BALL (pitch types)",
        difficulty: 0,
        items: [
          { type: "saying", label: "Curve" },
          { type: "saying", label: "Knuckle" },
          { type: "saying", label: "Spit" },
          { type: "saying", label: "Screw" }
        ]
      },
      {
        category: "___ SHOT",
        difficulty: 1,
        items: [
          { type: "saying", label: "Slap" },
          { type: "saying", label: "Wrist" },
          { type: "saying", label: "Snap" },
          { type: "saying", label: "Bank" }
        ]
      },
      {
        category: "___ PLAY",
        difficulty: 2,
        items: [
          { type: "saying", label: "Triple" },
          { type: "saying", label: "Double" },
          { type: "saying", label: "Power" },
          { type: "saying", label: "Set" }
        ]
      },
      {
        category: "___ OUT",
        difficulty: 3,
        items: [
          { type: "saying", label: "Strike" },
          { type: "saying", label: "Walk" },
          { type: "saying", label: "Shut" },
          { type: "saying", label: "Time" }
        ]
      }
    ]
  },

  {
    id: 26,
    title: "Prefix Power",
    level: "MVP",
    groups: [
      {
        category: "BIG ___",
        difficulty: 0,
        items: [
          { type: "saying", label: "Game" },
          { type: "saying", label: "Three" },
          { type: "saying", label: "Papi" },
          { type: "saying", label: "Ten" }
        ]
      },
      {
        category: "TRIPLE ___",
        difficulty: 1,
        items: [
          { type: "saying", label: "Crown" },
          { type: "saying", label: "Double" },
          { type: "saying", label: "Play" },
          { type: "saying", label: "Threat" }
        ]
      },
      {
        category: "POWER ___",
        difficulty: 2,
        items: [
          { type: "saying", label: "Forward" },
          { type: "saying", label: "Hitter" },
          { type: "saying", label: "Ranking" },
          { type: "saying", label: "Five" }
        ]
      },
      {
        category: "GAME ___",
        difficulty: 3,
        items: [
          { type: "saying", label: "Plan" },
          { type: "saying", label: "Time" },
          { type: "saying", label: "Day" },
          { type: "saying", label: "Winner" }
        ]
      }
    ]
  }
];
