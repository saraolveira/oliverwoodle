const students = [
    {
        "name": "Percy Weasley",
        "lastName": "Weasley",
        "sortYear": 1987,
        "house": "Gryffindor",
        "blood": "Pure-blood",
        "gender": "Male",
        "prefect": "yes",
        "headBoy": "yes",
        "quidditch": "No",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B",
        "OotP": "B + M",
        "HBP": "B",
        "DH": "B + M1-2"
    },
    {
        "name": "Oliver Wood",
        "lastName": "Wood",
        "sortYear": 1987,
        "house": "Gryffindor",
        "blood": "Pure-blood/Half-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Keeper",
        "captain": "yes",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B",
        "GoF": "B",
        "OotP": "No",
        "HBP": "No",
        "DH": "B + M2"
    },
    {
        "name": "Penelope Clearwater",
        "lastName": "Clearwater",
        "sortYear": 1987,
        "house": "Ravenclaw",
        "blood": "Muggle-born",
        "gender": "Female",
        "prefect": "yes",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "B + M",
        "PoA": "B",
        "GoF": "No",
        "OotP": "No",
        "HBP": "No",
        "DH": "No"
    },
    {
        "name": "Marcus Flint",
        "lastName": "Flint",
        "sortYear": 1987,
        "house": "Slytherin",
        "blood": "Pure-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Chaser",
        "captain": "yes",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B",
        "GoF": "No",
        "OotP": "No",
        "HBP": "No",
        "DH": "No"
    },
    {
        "name": "Lucian Bole",
        "lastName": "Bole",
        "sortYear": 1988,
        "house": "Slytherin",
        "blood": "Unknown",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Beater",
        "captain": "no",
        "PS": "No",
        "CoS": "B",
        "PoA": "No",
        "GoF": "No",
        "OotP": "No",
        "HBP": "No",
        "DH": "No"
    },
    {
        "name": "Roger Davies",
        "lastName": "Davies",
        "sortYear": 1989,
        "house": "Ravenclaw",
        "blood": "Unknown",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Chaser",
        "captain": "yes",
        "PS": "No",
        "CoS": "No",
        "PoA": "B",
        "GoF": "B + M",
        "OotP": "No",
        "HBP": "No",
        "DH": "No"
    },
    {
        "name": "Cedric Diggory",
        "lastName": "Digorry",
        "sortYear": 1989,
        "house": "Hufflepuff",
        "blood": "Pure-blood",
        "gender": "Male",
        "prefect": "yes",
        "headBoy": "no",
        "quidditch": "Seeker",
        "captain": "yes",
        "PS": "No",
        "CoS": "No",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "No",
        "HBP": "No",
        "DH": "No"
    },
    {
        "name": "Alicia Spinnet",
        "lastName": "Spinnet",
        "sortYear": 1989,
        "house": "Gryffindor",
        "blood": "Pure-blood/Half-blood",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Chaser",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B",
        "OotP": "B + M",
        "HBP": "No",
        "DH": "B"
    },
    {
        "name": "Angelina Johnson",
        "lastName": "Johnson",
        "sortYear": 1989,
        "house": "Gryffindor",
        "blood": "Unknown",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Chaser",
        "captain": "yes",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "No",
        "DH": "B"
    },
    {
        "name": "Lee Jordan",
        "lastName": "Jordan",
        "sortYear": 1989,
        "house": "Gryffindor",
        "blood": "Pure-blood/Half-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Commentator",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B",
        "GoF": "B",
        "OotP": "B + M",
        "HBP": "No",
        "DH": "B"
    },
    {
        "name": "Cassius Warrington",
        "lastName": "Warrington",
        "sortYear": 1989,
        "house": "Slytherin",
        "blood": "Unknown",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Chaser",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "B",
        "GoF": "B",
        "OotP": "B + M",
        "HBP": "No",
        "DH": "No"
    },
    {
        "name": "Fred Weasley",
        "lastName": "Weasley",
        "sortYear": 1989,
        "house": "Gryffindor",
        "blood": "Pure-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Beater",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "George Weasley",
        "lastName": "Weasley",
        "sortYear": 1989,
        "house": "Gryffindor",
        "blood": "Pure-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Beater",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Marcus Belby",
        "lastName": "Belby",
        "sortYear": 1990,
        "house": "Ravenclaw",
        "blood": "Pure-blood/Half-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "No",
        "HBP": "B + M",
        "DH": "No"
    },
    {
        "name": "Katie Bell",
        "lastName": "Bell",
        "sortYear": 1990,
        "house": "Gryffindor",
        "blood": "Pure-blood/Half-blood",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Chaser",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Cormac McLaggen",
        "lastName": "McLaggen",
        "sortYear": 1990,
        "house": "Gryffindor",
        "blood": "Pure-blood/Half-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Keeper",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "No",
        "HBP": "B + M",
        "DH": "M1-2"
    },
    {
        "name": "Cho Chang",
        "lastName": "Change",
        "sortYear": 1990,
        "house": "Ravenclaw",
        "blood": "Pure-blood/Half-blood",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Seeker",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "B",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Terry Boot",
        "lastName": "Boot",
        "sortYear": 1991,
        "house": "Ravenclaw",
        "blood": "Pure-blood/Half-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B",
        "PoA": "No",
        "GoF": "No",
        "OotP": "B + M",
        "HBP": "B",
        "DH": "B"
    },
    {
        "name": "Mandy Brocklehurst",
        "lastName": "Brocklehurst",
        "sortYear": 1991,
        "house": "Ravenclaw",
        "blood": "Half-blood",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "B",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "No",
        "HBP": "No",
        "DH": "No"
    },
    {
        "name": "Padma Patil",
        "lastName": "Patil",
        "sortYear": 1991,
        "house": "Ravenclaw",
        "blood": "Pure-blood/Half-blood",
        "gender": "Female",
        "prefect": "yes",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "B + M",
        "CoS": "No",
        "PoA": "No",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Michael Corner",
        "lastName": "Corner",
        "sortYear": 1991,
        "house": "Ravenclaw",
        "blood": "Half-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "B + M",
        "HBP": "B",
        "DH": "B + M1-2"
    },
    {
        "name": "Lisa Turpin",
        "lastName": "Turpin",
        "sortYear": 1991,
        "house": "Ravenclaw",
        "blood": "Unknown",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "B",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "No",
        "HBP": "No",
        "DH": "No"
    },
    {
        "name": "Anthony Goldstein",
        "lastName": "Goldstein",
        "sortYear": 1991,
        "house": "Ravenclaw",
        "blood": "Half-blood",
        "gender": "Male",
        "prefect": "yes",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "B",
        "HBP": "No",
        "DH": "B"
    },
    {
        "name": "Lavender Brown",
        "lastName": "Brown",
        "sortYear": 1991,
        "house": "Gryffindor",
        "blood": "Pure-blood",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "B",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B",
        "OotP": "B",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Seamus Finnigan",
        "lastName": "Finnigan",
        "sortYear": 1991,
        "house": "Gryffindor",
        "blood": "Half-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Commentator",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Hermione Granger",
        "lastName": "Granger",
        "sortYear": 1991,
        "house": "Gryffindor",
        "blood": "Muggle-born",
        "gender": "Female",
        "prefect": "yes",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Neville Longbottom",
        "lastName": "Longbottom",
        "sortYear": 1991,
        "house": "Gryffindor",
        "blood": "Pure-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Parvati Patil",
        "lastName": "Patil",
        "sortYear": 1991,
        "house": "Gryffindor",
        "blood": "Pure-blood/Half-blood",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B"
    },
    {
        "name": "Harry Potter",
        "lastName": "Potter",
        "sortYear": 1991,
        "house": "Gryffindor",
        "blood": "Half-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Seeker",
        "captain": "yes",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Dean Thomas",
        "lastName": "Thomas",
        "sortYear": 1991,
        "house": "Gryffindor",
        "blood": "Half-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Chaser",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M2"
    },
    {
        "name": "Ron Weasley",
        "lastName": "Weasley",
        "sortYear": 1991,
        "house": "Gryffindor",
        "blood": "Pure-blood",
        "gender": "Male",
        "prefect": "yes",
        "headBoy": "no",
        "quidditch": "Keeper",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Millicent Bulstrode",
        "lastName": "Bulstrode",
        "sortYear": 1991,
        "house": "Slytherin",
        "blood": "Half-blood",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "B",
        "CoS": "B + M",
        "PoA": "No",
        "GoF": "No",
        "OotP": "B",
        "HBP": "No",
        "DH": "No"
    },
    {
        "name": "Vicent Crabbe",
        "lastName": "Crabbe",
        "sortYear": 1991,
        "house": "Slytherin",
        "blood": "Pure-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Beater",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B"
    },
    {
        "name": "Gregory Goyle",
        "lastName": "Goyle",
        "sortYear": 1991,
        "house": "Slytherin",
        "blood": "Pure-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Beater",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Daphne Greengrass",
        "lastName": "Greengrass",
        "sortYear": 1991,
        "house": "Slytherin",
        "blood": "Pure-blood",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "B",
        "HBP": "No",
        "DH": "No"
    },
    {
        "name": "Draco Malfoy",
        "lastName": "Malfoy",
        "sortYear": 1991,
        "house": "Slytherin",
        "blood": "Pure-blood",
        "gender": "Male",
        "prefect": "yes",
        "headBoy": "no",
        "quidditch": "Seeker",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Theo Nott",
        "lastName": "Nott",
        "sortYear": 1991,
        "house": "Slytherin",
        "blood": "Pure-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "B",
        "HBP": "B",
        "DH": "No"
    },
    {
        "name": "Pansy Parkinson",
        "lastName": "Parkinson",
        "sortYear": 1991,
        "house": "Slytherin",
        "blood": "Pure-blood/Half-blood",
        "gender": "Female",
        "prefect": "yes",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "B + M",
        "CoS": "M",
        "PoA": "B + M",
        "GoF": "B",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Blaise Zabini",
        "lastName": "Zabini",
        "sortYear": 1991,
        "house": "Slytherin",
        "blood": "Pure-blood/Half-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Chaser",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "No",
        "HBP": "B + M",
        "DH": "M1-2"
    },
    {
        "name": "Hannah Abott",
        "lastName": "Abott",
        "sortYear": 1991,
        "house": "Hufflepuff",
        "blood": "Half-blood",
        "gender": "Female",
        "prefect": "yes",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "B",
        "CoS": "B + M",
        "PoA": "B",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "No",
        "DH": "B + M1-2"
    },
    {
        "name": "Susan Bones",
        "lastName": "Bones",
        "sortYear": 1991,
        "house": "Hufflepuff",
        "blood": "Half-blood",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "B + M",
        "CoS": "M",
        "PoA": "No",
        "GoF": "No",
        "OotP": "B + M",
        "HBP": "B",
        "DH": "M1-2"
    },
    {
        "name": "Justin Finch-Fletchley",
        "lastName": "Finch-Fletchley",
        "sortYear": 1991,
        "house": "Hufflepuff",
        "blood": "Muggle-born",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "B",
        "CoS": "B + M",
        "PoA": "No",
        "GoF": "B",
        "OotP": "B",
        "HBP": "No",
        "DH": "No"
    },
    {
        "name": "Leanne",
        "lastName": "",
        "sortYear": 1991,
        "house": "Hufflepuff",
        "blood": "Pure-blood/Half-blood",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "No",
        "HBP": "B + M",
        "DH": "M1-2"
    },
    {
        "name": "Ernest Macmillan",
        "lastName": "Macmillan",
        "sortYear": 1991,
        "house": "Hufflepuff",
        "blood": "Pure-blood",
        "gender": "Male",
        "prefect": "yes",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "B + M",
        "PoA": "No",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B",
        "DH": "B + M2"
    },
    {
        "name": "Colin Creevey",
        "lastName": "Creevey",
        "sortYear": 1992,
        "house": "Gryffindor",
        "blood": "Muggle-born",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "B + M",
        "PoA": "B",
        "GoF": "B",
        "OotP": "B + M",
        "HBP": "B",
        "DH": "B"
    },
    {
        "name": "Luna Lovegood",
        "lastName": "Lovegood",
        "sortYear": 1992,
        "house": "Ravenclaw",
        "blood": "Pure-blood/Half-blood",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Ginny Weasley",
        "lastName": "Weasley",
        "sortYear": 1992,
        "house": "Gryffindor",
        "blood": "Pure-blood",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Chaser/Seeker",
        "captain": "no",
        "PS": "B + M",
        "CoS": "B + M",
        "PoA": "B + M",
        "GoF": "B + M",
        "OotP": "B + M",
        "HBP": "B + M",
        "DH": "B + M1-2"
    },
    {
        "name": "Astoria Greengrass",
        "lastName": "Greengrass",
        "sortYear": 1993,
        "house": "Slytherin",
        "blood": "Pure-blood",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "No",
        "HBP": "No",
        "DH": "B + M2"
    },
    {
        "name": "Romilda Vane",
        "lastName": "Vane",
        "sortYear": 1993,
        "house": "Gryffindor",
        "blood": "Pure-blood/Half-blood",
        "gender": "Female",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "No",
        "HBP": "B + M",
        "DH": "M1-2"
    },
    {
        "name": "Nigel Wolpert",
        "lastName": "Wolpert",
        "sortYear": 1994,
        "house": "Gryffindor",
        "blood": "Pure-blood/Half-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "M",
        "OotP": "M",
        "HBP": "M",
        "DH": "M1-2"
    },
    {
        "name": "Denis Creevey",
        "lastName": "Creevey",
        "sortYear": 1994,
        "house": "Gryffindor",
        "blood": "Muggle-born",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "B",
        "OotP": "B",
        "HBP": "B",
        "DH": "No"
    },
    {
        "name": "Jimmy Peakes",
        "lastName": "Peakes",
        "sortYear": 1994,
        "house": "Gryffindor",
        "blood": "Pure-blood/Half-blood",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "Beater",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "No",
        "HBP": "B + M",
        "DH": "B"
    },
    {
        "name": "Euan Abercrombie",
        "lastName": "Abercrombie",
        "sortYear": 1995,
        "house": "Gryffindor",
        "blood": "Unknown",
        "gender": "Male",
        "prefect": "no",
        "headBoy": "no",
        "quidditch": "No",
        "captain": "no",
        "PS": "No",
        "CoS": "No",
        "PoA": "No",
        "GoF": "No",
        "OotP": "B",
        "HBP": "No",
        "DH": "No"
    }
]

const answerList = [ 
    "Lucian Bole","Cedric Diggory","Alicia Spinnet","Katie Bell","Daphne Greengrass","Michael Corner","Justin Finch-Fletchley","Leanne","Harry Potter","Seamus Finnigan","Katie Bell","Hannah Abott","Parvati Patil","Jimmy Peakes","Blaise Zabini","Marcus Belby","Leanne","Parvati Patil","George Weasley","Daphne Greengrass","Theo Nott","Cho Chang","Ernest Macmillan","Parvati Patil","Angelina Johnson","Mandy Brocklehurst","Katie Bell","Marcus Belby","Terry Boot","Padma Patil","Seamus Finnigan","Katie Bell","Ernest Macmillan","Ernest Macmillan","Euan Abercrombie","Marcus Belby","Pansy Parkinson","Lisa Turpin","Oliver Wood","Dean Thomas","Euan Abercrombie","Ernest Macmillan","Cedric Diggory","Euan Abercrombie","Marcus Flint","Marcus Flint","Draco Malfoy","Nigel Wolpert","Denis Creevey","Susan Bones","Millicent Bulstrode","Seamus Finnigan","Vicent Crabbe","Euan Abercrombie","Millicent Bulstrode","George Weasley","Anthony Goldstein","Denis Creevey","Millicent Bulstrode","Cedric Diggory","Cormac McLaggen","Neville Longbottom","Anthony Goldstein","George Weasley","Parvati Patil","Harry Potter","Colin Creevey","Seamus Finnigan","Terry Boot","Dean Thomas","Ernest Macmillan","Jimmy Peakes","Justin Finch-Fletchley","Leanne","Gregory Goyle","Astoria Greengrass","Penelope Clearwater","Harry Potter","Roger Davies","Astoria Greengrass","Lisa Turpin","Millicent Bulstrode","George Weasley","Blaise Zabini","Parvati Patil","Cho Chang","Cormac McLaggen","Neville Longbottom","Alicia Spinnet","Susan Bones","Mandy Brocklehurst","Euan Abercrombie","Cedric Diggory","Nigel Wolpert","Fred Weasley","Roger Davies","Padma Patil","Hermione Granger","Dean Thomas","George Weasley","Ron Weasley","Ginny Weasley","Denis Creevey","Colin Creevey","Cedric Diggory","Leanne","Leanne","Angelina Johnson","Leanne","Alicia Spinnet","Cassius Warrington","Cassius Warrington","Marcus Flint","Oliver Wood","Fred Weasley","Ernest Macmillan","Parvati Patil","Marcus Flint","Penelope Clearwater","Pansy Parkinson","Denis Creevey","Daphne Greengrass","Lisa Turpin","Justin Finch-Fletchley","Hermione Granger","Lee Jordan","Mandy Brocklehurst","Leanne","Jimmy Peakes","Marcus Flint","Cedric Diggory","Ron Weasley","Angelina Johnson","Roger Davies","Hannah Abott","Euan Abercrombie","Ernest Macmillan","Cassius Warrington","Michael Corner","Denis Creevey","Terry Boot","Hermione Granger","Cassius Warrington","Theo Nott","Millicent Bulstrode","Susan Bones","Theo Nott","Dean Thomas","Katie Bell","Colin Creevey","Hermione Granger","Susan Bones","Mandy Brocklehurst","Lavender Brown","Pansy Parkinson","Vicent Crabbe","Draco Malfoy","Millicent Bulstrode","Cassius Warrington","Gregory Goyle","Vicent Crabbe","Seamus Finnigan","Blaise Zabini","Lee Jordan","Marcus Belby","Gregory Goyle","Anthony Goldstein","Cedric Diggory","Denis Creevey","Lisa Turpin","Neville Longbottom","Penelope Clearwater","Neville Longbottom","Fred Weasley","Marcus Belby","Oliver Wood","Daphne Greengrass","Padma Patil","Romilda Vane","Seamus Finnigan","Euan Abercrombie","Dean Thomas","Lisa Turpin","Dean Thomas","Cassius Warrington","Euan Abercrombie","Lee Jordan","Cedric Diggory","Lee Jordan","Ron Weasley","Harry Potter","Ginny Weasley","Draco Malfoy","Euan Abercrombie","Vicent Crabbe","Ernest Macmillan","Angelina Johnson","Millicent Bulstrode","Ron Weasley","Ginny Weasley","Romilda Vane","Lisa Turpin","Cormac McLaggen","Harry Potter","Pansy Parkinson","Hannah Abott","Alicia Spinnet","Fred Weasley","Justin Finch-Fletchley","Cedric Diggory","Daphne Greengrass","Lucian Bole","Katie Bell","Michael Corner","Ron Weasley","Angelina Johnson","Lucian Bole","George Weasley","Roger Davies","Daphne Greengrass","Theo Nott","Luna Lovegood","Terry Boot","Michael Corner","Oliver Wood","Katie Bell","Marcus Belby","Leanne","Parvati Patil","Anthony Goldstein","Padma Patil","Justin Finch-Fletchley","Alicia Spinnet","Nigel Wolpert","Colin Creevey","Ginny Weasley","Roger Davies","Lavender Brown","Hermione Granger","Harry Potter","Pansy Parkinson","Ron Weasley","Vicent Crabbe","Justin Finch-Fletchley","Neville Longbottom","Katie Bell","Theo Nott","Jimmy Peakes","George Weasley","Denis Creevey","Astoria Greengrass","Daphne Greengrass","Mandy Brocklehurst","Roger Davies","Justin Finch-Fletchley","Marcus Belby","Nigel Wolpert","Ginny Weasley","Vicent Crabbe","Cassius Warrington","Cormac McLaggen","Padma Patil","Astoria Greengrass","Penelope Clearwater","Lavender Brown","Theo Nott","Vicent Crabbe","Pansy Parkinson","Lucian Bole","Pansy Parkinson","Parvati Patil","Colin Creevey","Penelope Clearwater","Neville Longbottom","Pansy Parkinson","Neville Longbottom","Justin Finch-Fletchley","Jimmy Peakes","Pansy Parkinson","Pansy Parkinson","Daphne Greengrass","George Weasley","Katie Bell","Oliver Wood","Ernest Macmillan","Draco Malfoy","Lavender Brown","Ron Weasley","Susan Bones","Padma Patil","Marcus Flint","George Weasley","Cho Chang","Hannah Abott","Dean Thomas","Alicia Spinnet","Lucian Bole","Mandy Brocklehurst","Seamus Finnigan","Cassius Warrington","Pansy Parkinson","Roger Davies","Luna Lovegood","Hannah Abott","Leanne","Astoria Greengrass","Oliver Wood","Oliver Wood","Lucian Bole","Alicia Spinnet","Ernest Macmillan","Marcus Belby","Lee Jordan","Leanne","Parvati Patil","Katie Bell","Blaise Zabini","Lisa Turpin","Fred Weasley","Euan Abercrombie","Luna Lovegood","Hannah Abott","George Weasley","Daphne Greengrass","Penelope Clearwater","Mandy Brocklehurst","George Weasley","Penelope Clearwater","Cho Chang","Michael Corner","Romilda Vane","Katie Bell","Lavender Brown","Blaise Zabini","Harry Potter","Fred Weasley","Cormac McLaggen","Mandy Brocklehurst","Lavender Brown","Katie Bell","Gregory Goyle","Marcus Belby","Theo Nott","George Weasley","Cedric Diggory","Theo Nott","Leanne","Astoria Greengrass","Justin Finch-Fletchley","Nigel Wolpert","Cho Chang","Lavender Brown","Parvati Patil","Millicent Bulstrode","Lucian Bole","Euan Abercrombie","Draco Malfoy","Cedric Diggory","Jimmy Peakes","Romilda Vane","Parvati Patil","Neville Longbottom","Daphne Greengrass","Euan Abercrombie","Leanne","Fred Weasley","Lavender Brown","Neville Longbottom","Cedric Diggory","Oliver Wood","Astoria Greengrass","Cormac McLaggen","Jimmy Peakes","Lavender Brown","Fred Weasley","Hermione Granger","Lavender Brown","Padma Patil","Theo Nott","Oliver Wood","Draco Malfoy","Jimmy Peakes","Daphne Greengrass","Oliver Wood","Angelina Johnson","George Weasley","Ron Weasley","Colin Creevey","Penelope Clearwater","Michael Corner","Dean Thomas","Lee Jordan","Parvati Patil","Lavender Brown","Hannah Abott","Ron Weasley","Mandy Brocklehurst","Michael Corner","Astoria Greengrass","Cassius Warrington","Lavender Brown","Neville Longbottom","Alicia Spinnet","Vicent Crabbe","Hannah Abott","Theo Nott","Michael Corner","Lee Jordan","Cho Chang","Euan Abercrombie","Leanne","Ernest Macmillan","Roger Davies","Terry Boot","Draco Malfoy","Hannah Abott","Katie Bell","Hannah Abott","Marcus Belby","Oliver Wood","Roger Davies","Cho Chang","Gregory Goyle","Michael Corner","Roger Davies","Fred Weasley","Lucian Bole","Lisa Turpin","Theo Nott","Neville Longbottom","Marcus Belby","Angelina Johnson","Cormac McLaggen","Ron Weasley","Ginny Weasley","Pansy Parkinson","Colin Creevey","Penelope Clearwater","Katie Bell","George Weasley","Justin Finch-Fletchley","Anthony Goldstein","Astoria Greengrass","Denis Creevey","Lavender Brown","Marcus Belby","Draco Malfoy","Euan Abercrombie","Dean Thomas","Mandy Brocklehurst","Lee Jordan","Michael Corner","Terry Boot","Euan Abercrombie","Cassius Warrington","Dean Thomas","Michael Corner","Dean Thomas","Padma Patil","Cormac McLaggen","Dean Thomas","Alicia Spinnet","Marcus Belby","Michael Corner","Dean Thomas","Katie Bell","Blaise Zabini","Hermione Granger","Ron Weasley","Denis Creevey","Oliver Wood","Cho Chang","Lisa Turpin","Marcus Flint","Denis Creevey","Daphne Greengrass","Blaise Zabini","Parvati Patil","Euan Abercrombie","Parvati Patil","Ron Weasley","Angelina Johnson","Theo Nott","Millicent Bulstrode","Astoria Greengrass","Colin Creevey","Seamus Finnigan","Ernest Macmillan","Colin Creevey","Blaise Zabini","Seamus Finnigan","Theo Nott","Daphne Greengrass","Astoria Greengrass","Padma Patil","Neville Longbottom","Jimmy Peakes","Fred Weasley","Jimmy Peakes","Cedric Diggory","Susan Bones","Padma Patil","Ginny Weasley","Seamus Finnigan","Angelina Johnson","Denis Creevey","Oliver Wood","Terry Boot","Pansy Parkinson","Gregory Goyle","Pansy Parkinson","Mandy Brocklehurst","Michael Corner","Luna Lovegood","Padma Patil","Draco Malfoy","Ron Weasley","Euan Abercrombie","Hermione Granger","Cassius Warrington","Denis Creevey","Terry Boot","Alicia Spinnet","Terry Boot","Mandy Brocklehurst","Colin Creevey","Lucian Bole","Fred Weasley","Penelope Clearwater","Seamus Finnigan","Lee Jordan","Theo Nott","George Weasley","Nigel Wolpert","Theo Nott","Lavender Brown","Colin Creevey","Lucian Bole","Pansy Parkinson","Angelina Johnson","Katie Bell","Hermione Granger","Cho Chang","Leanne","Ernest Macmillan","Marcus Flint","Cho Chang","Lisa Turpin","George Weasley","Terry Boot","Michael Corner","Pansy Parkinson","Terry Boot","Pansy Parkinson","Fred Weasley","Susan Bones","Cormac McLaggen","Astoria Greengrass","Katie Bell","Ginny Weasley","Vicent Crabbe","Parvati Patil","Marcus Flint","Marcus Belby","Anthony Goldstein","Denis Creevey","Leanne","Colin Creevey","Lisa Turpin","Angelina Johnson","Draco Malfoy","Roger Davies","Euan Abercrombie","Gregory Goyle","Romilda Vane","Terry Boot","Theo Nott","Marcus Belby","Marcus Belby","Marcus Belby","Daphne Greengrass","Colin Creevey","Katie Bell","Lavender Brown","Lisa Turpin","Susan Bones","Denis Creevey","Angelina Johnson","Ron Weasley","Romilda Vane","Justin Finch-Fletchley","Oliver Wood","Neville Longbottom","Pansy Parkinson","Penelope Clearwater","Ginny Weasley","Dean Thomas","Colin Creevey","Dean Thomas","Michael Corner","Angelina Johnson","Michael Corner","Neville Longbottom","Daphne Greengrass","Cho Chang","Marcus Flint","Marcus Belby","Mandy Brocklehurst","Daphne Greengrass","Hannah Abott","Michael Corner","Nigel Wolpert","Astoria Greengrass","Susan Bones","Marcus Belby","Euan Abercrombie","Parvati Patil","Romilda Vane","Marcus Belby","Pansy Parkinson","Millicent Bulstrode","Ron Weasley","Seamus Finnigan","Angelina Johnson","Cho Chang","Harry Potter","Angelina Johnson","Anthony Goldstein","Justin Finch-Fletchley","Angelina Johnson","George Weasley","Neville Longbottom","Jimmy Peakes","Marcus Belby","Pansy Parkinson","Katie Bell","Pansy Parkinson","Ernest Macmillan","George Weasley","Ginny Weasley","Gregory Goyle","Leanne","Lee Jordan","Millicent Bulstrode","Oliver Wood","Harry Potter","Marcus Belby","Angelina Johnson","Terry Boot","Marcus Belby","Luna Lovegood","Jimmy Peakes","Jimmy Peakes","Katie Bell","Daphne Greengrass","Draco Malfoy","Hannah Abott","Terry Boot","Vicent Crabbe","Lee Jordan","Ginny Weasley","Harry Potter","Ron Weasley","Dean Thomas","Katie Bell","Gregory Goyle","Lisa Turpin","Blaise Zabini","Hannah Abott","Lee Jordan","Ernest Macmillan","Seamus Finnigan","Neville Longbottom","Marcus Belby","Astoria Greengrass","Euan Abercrombie","Fred Weasley","Michael Corner","Romilda Vane","Astoria Greengrass","Oliver Wood","Fred Weasley","Parvati Patil","Dean Thomas","Marcus Belby","Cho Chang","Vicent Crabbe","Gregory Goyle","Anthony Goldstein","Hermione Granger","Parvati Patil","Fred Weasley","Parvati Patil","Marcus Flint","George Weasley","Padma Patil","Cho Chang","Neville Longbottom","Katie Bell","Michael Corner","Hermione Granger","Lucian Bole","Lee Jordan","Romilda Vane","Oliver Wood","Romilda Vane","Cormac McLaggen","Vicent Crabbe","Dean Thomas","George Weasley","Cedric Diggory","Ginny Weasley","Harry Potter","Terry Boot","Lee Jordan","Lisa Turpin","Harry Potter","Theo Nott","Mandy Brocklehurst","Pansy Parkinson","Ernest Macmillan","Mandy Brocklehurst","Terry Boot","Cedric Diggory","Nigel Wolpert","Gregory Goyle","Denis Creevey","George Weasley","Alicia Spinnet","Ernest Macmillan","George Weasley","Neville Longbottom","Leanne","Cormac McLaggen","Nigel Wolpert","Seamus Finnigan","Marcus Belby","Vicent Crabbe","Denis Creevey","Luna Lovegood","Oliver Wood","Seamus Finnigan","Dean Thomas","Terry Boot","Vicent Crabbe","Ginny Weasley","Cassius Warrington","Seamus Finnigan","Harry Potter","Cormac McLaggen","Alicia Spinnet","Ernest Macmillan","Marcus Flint","Colin Creevey","Harry Potter","Katie Bell","Anthony Goldstein","Lavender Brown","Jimmy Peakes","Angelina Johnson","Anthony Goldstein","Angelina Johnson","Draco Malfoy","Oliver Wood","Michael Corner","George Weasley","Marcus Belby","Luna Lovegood","Theo Nott","Penelope Clearwater","Euan Abercrombie","Vicent Crabbe","Angelina Johnson","Lisa Turpin","Nigel Wolpert","Oliver Wood","Nigel Wolpert","Cormac McLaggen","Astoria Greengrass","Katie Bell","Euan Abercrombie","Padma Patil","Denis Creevey","Blaise Zabini","Lucian Bole","Oliver Wood","Hermione Granger","Oliver Wood","Padma Patil","Oliver Wood","Draco Malfoy","Dean Thomas","Roger Davies","Fred Weasley","Dean Thomas","Draco Malfoy","Lucian Bole","Justin Finch-Fletchley","Terry Boot","Lucian Bole","Theo Nott","Blaise Zabini","Dean Thomas","Marcus Flint","Oliver Wood","Roger Davies","Cormac McLaggen","Vicent Crabbe","Harry Potter","Lee Jordan","Pansy Parkinson","Cassius Warrington","Ginny Weasley","Ron Weasley","Seamus Finnigan","Susan Bones","Lavender Brown","Angelina Johnson","Blaise Zabini","Dean Thomas","Alicia Spinnet","Cormac McLaggen","Cassius Warrington","Marcus Belby","Roger Davies","Hermione Granger","Millicent Bulstrode","Daphne Greengrass","Terry Boot","Fred Weasley","Terry Boot","Hermione Granger","Michael Corner","Marcus Belby","Alicia Spinnet","Marcus Belby","Euan Abercrombie","Neville Longbottom","Ginny Weasley","Blaise Zabini","Luna Lovegood","Susan Bones","Jimmy Peakes","Cho Chang","Hannah Abott","Roger Davies","Harry Potter","Cho Chang","Romilda Vane","Hermione Granger","Romilda Vane","Lavender Brown","Ron Weasley","George Weasley","Luna Lovegood","Jimmy Peakes","Ernest Macmillan","Terry Boot","Padma Patil","Penelope Clearwater","Cassius Warrington","Fred Weasley","Colin Creevey","Cedric Diggory","Seamus Finnigan","Colin Creevey","Astoria Greengrass","Denis Creevey","Ginny Weasley","Astoria Greengrass","Penelope Clearwater","Pansy Parkinson","Theo Nott","Katie Bell","Draco Malfoy","Denis Creevey","Oliver Wood","Draco Malfoy","Angelina Johnson","Oliver Wood","Cormac McLaggen","Ernest Macmillan","Leanne","Colin Creevey","Lavender Brown","Colin Creevey","Theo Nott","Justin Finch-Fletchley","Blaise Zabini","Harry Potter","Susan Bones","Blaise Zabini","George Weasley","Luna Lovegood","Anthony Goldstein","Colin Creevey","Daphne Greengrass","Susan Bones","Theo Nott","Mandy Brocklehurst","Hannah Abott","Vicent Crabbe","Vicent Crabbe","Seamus Finnigan","Alicia Spinnet","Gregory Goyle","Vicent Crabbe","Mandy Brocklehurst","Parvati Patil","Blaise Zabini","Theo Nott","Ernest Macmillan","Penelope Clearwater","Mandy Brocklehurst","Anthony Goldstein","Vicent Crabbe","Marcus Belby","Cormac McLaggen","George Weasley","Luna Lovegood","Cho Chang","Millicent Bulstrode","Cho Chang","Leanne","George Weasley","Alicia Spinnet","Lucian Bole","Neville Longbottom","Daphne Greengrass","Marcus Flint","Theo Nott","Penelope Clearwater","Millicent Bulstrode","Lucian Bole","Katie Bell","Marcus Flint","Penelope Clearwater","Justin Finch-Fletchley","Cho Chang","Cho Chang","Ron Weasley","Luna Lovegood","Lisa Turpin","Anthony Goldstein","Cassius Warrington","Jimmy Peakes","Lavender Brown","Cedric Diggory","Cassius Warrington","Lucian Bole","Hermione Granger","Ginny Weasley","Ernest Macmillan","Hannah Abott","Vicent Crabbe","Euan Abercrombie","Marcus Belby","Cedric Diggory","Marcus Belby","Luna Lovegood","Susan Bones","Susan Bones","Lisa Turpin","Lavender Brown","Blaise Zabini","Angelina Johnson","Oliver Wood","Ron Weasley","George Weasley","Romilda Vane","Marcus Belby","George Weasley","Astoria Greengrass","Astoria Greengrass","Ron Weasley","Daphne Greengrass","Harry Potter","Theo Nott","Hannah Abott","Penelope Clearwater","Cormac McLaggen","Cormac McLaggen","Harry Potter","Fred Weasley","Ginny Weasley","Nigel Wolpert","Hermione Granger","Luna Lovegood","Hannah Abott","Lee Jordan","Michael Corner","Ernest Macmillan","Marcus Flint","Justin Finch-Fletchley","Parvati Patil","Michael Corner","Angelina Johnson","Cho Chang","Roger Davies","Mandy Brocklehurst" 
]

// Get random student each day
const MILLISECONDS_TO_DAYS = 1000 * 60 * 60 * 24

const startDate = new Date(2022, 3, 1)
const msOffset = Date.now() - startDate
const dayOffset = msOffset / MILLISECONDS_TO_DAYS
const index = Math.floor(dayOffset)
const tomorrow = startDate.valueOf() + (index + 1) * MILLISECONDS_TO_DAYS;
const answerName = answerList[index]
const answer = students.find((student) => student.name === answerName)
let attempts = 1
let guesses = 7
let won = "no"
let lost = "no"

const today = new Date(new Date().setHours(0, 0, 0, 0));

const guessContainer = document.querySelector('.guess-container')
const timer = document.getElementById('timer')
const winBox = document.querySelector('.win')
const loseBox = document.querySelector('.lose')
const instructionsBox = document.querySelector('.instr')
let instructions = "no"
const statsBox = document.querySelector('.stats')
const played = document.getElementById('played')
const winpct = document.getElementById('winpct')
const streak = document.getElementById('streak')

loadLocalStorage()

// Local Storage
function preserveGameState() {
    window.localStorage.setItem('attempts', attempts)
    window.localStorage.setItem('guesses', guesses)
    window.localStorage.setItem('guessContainer', guessContainer.innerHTML)
    window.localStorage.setItem('today', today)
}

function updateGames() {
    const totalGames = window.localStorage.getItem('totalGames') || 0
    window.localStorage.setItem('totalGames', Number(totalGames) + 1)
}

function preserveWin() {
    window.localStorage.setItem('won', won)
    window.localStorage.setItem('winBox', winBox.innerHTML)

    const totalWins = window.localStorage.getItem('totalWins') || 0
    window.localStorage.setItem('totalWins', Number(totalWins) + 1)

    const currentStreak = window.localStorage.getItem('currentStreak') || 0
    window.localStorage.setItem('currentStreak', Number(currentStreak) + 1)
}

function preserveLose() {
    window.localStorage.setItem('lost', lost)
    window.localStorage.setItem('loseBox', loseBox.innerHTML)

    window.localStorage.setItem('currentStreak', 0)
}

function updateStats() {
    const totalGames = window.localStorage.getItem('totalGames') || 0
    const totalWins = window.localStorage.getItem('totalWins') || 0
    const pct = Math.round((totalWins/totalGames) * 100) || 0
    const currentStreak = window.localStorage.getItem('currentStreak') || 0

    played.innerHTML = totalGames
    winpct.innerHTML = `${pct}%`
    streak.innerHTML = currentStreak
}

function preserveInstructions() {
    window.localStorage.setItem('instructions', instructions)
}

function loadLocalStorage() {
    let storedToday = window.localStorage.getItem('today')
    if (storedToday != today) {
        localStorage.removeItem('attempts')
        localStorage.removeItem('guesses')
        localStorage.removeItem('won')
        localStorage.removeItem('lost')
        localStorage.removeItem('today')
        localStorage.removeItem('guessContainer')
        localStorage.removeItem('winBox')
        localStorage.removeItem('loseBox')
    }

    attempts = Number(window.localStorage.getItem('attempts')) || attempts
    guesses = Number(window.localStorage.getItem('guesses')) || guesses
    won = window.localStorage.getItem('won')
    lost = window.localStorage.getItem('lost')

    const storedGuessContainer = window.localStorage.getItem('guessContainer')
    if (guessContainer) {
        guessContainer.innerHTML = storedGuessContainer
    }

    const storedWinBox = window.localStorage.getItem('winBox')
    winBox.innerHTML = storedWinBox

    const storedLoseBox = window.localStorage.getItem('loseBox')
    loseBox.innerHTML = storedLoseBox
    
    let isRead = window.localStorage.getItem('instructions')
    if (isRead === "read") {
        instructionsBox.style.display = "none"
    }

    const totalGames = window.localStorage.getItem('totalGames') || 0
    const totalWins = window.localStorage.getItem('totalWins') || 0
    const pct = Math.round((totalWins/totalGames) * 100) || 0
    const currentStreak = window.localStorage.getItem('currentStreak') || 0

    played.innerHTML = totalGames
    winpct.innerHTML = `${pct}%`
    streak.innerHTML = currentStreak
}


// Instructions
const instructionsClose = document.querySelector('.instr-close')

if (instructionsClose) {
    instructionsClose.addEventListener('click', () => {
        instructionsBox.style.display = "none"
        instructions = "read"
        preserveInstructions()
    })
}

const infoBTN = document.querySelector('.info-button')
infoBTN.addEventListener('click', () => {
    instructionsBox.style.display = "flex"
})

// Stats

const statsBTN = document.querySelector('.stats-button')
statsBTN.addEventListener('click', () => {
    statsBox.style.display = "flex"
})

const statsClose = document.querySelector('.stats-close')

statsClose.addEventListener('click', () => {
    statsBox.style.display = "none"
})

// Search & autocomplete
const search = document.querySelector('#hcraes')
const matchList = document.querySelector('.match-list')
search.placeholder = `Make a guess... You have ${guesses} tries left`
let possibleGuesses

const searchStudents = () => {
    let matches = students.filter(student => {
        const regex = new RegExp(`^${search.value}`, 'gi')
        return student.name.match(regex) ||  student.lastName.match(regex)
    })
        
    if (search.value === "") {
        matches = []
        matchList.innerHTML = ''
        matchList.style.display = "none"
    }

    if (matches.length > 0) {
        const matchHTML = matches
            .map(
                match =>
                `<div class="match">${match.name}</div>`
            )
            .join('')

        matchList.innerHTML = matchHTML

        matchList.style.display = "block"
    }

    // Handle guess
    possibleGuesses = document.querySelectorAll('.match')

    possibleGuesses.forEach(possibleGuess => { 
        possibleGuess.addEventListener('click', () => {
            matchList.innerHTML = ""
            matchList.style.display = "none"
            search.value = ""

            let guess = students.find((student) => student.name === possibleGuess.innerHTML)

            let titles 

            if (attempts === 1) {
                gtag ('event', 'game_started')
            }

            if (guess.prefect == "no" && guess.headBoy == "no" && guess.captain == "no") {
                titles = `<div class="achievement">None</div>`
            } else if (guess.prefect == "yes" && guess.headBoy == "no"  && guess.captain == "no") {
                titles = `<div class="achievement">Prefect</div>`
            } else if (guess.prefect == "yes" && guess.headBoy == "yes"  && guess.captain == "no") {
                titles = `
                <div class="achievement">Prefect</div>
                <div class="achievement">Head Boy</div>
                `
            } else if (guess.prefect == "yes" && guess.headBoy == "no"  && guess.captain == "yes") {
                titles = `
                <div class="achievement">Prefect</div>
                <div class="achievement">Quidditch Captain</div>
                `
            } else if (guess.prefect == "no" && guess.headBoy == "no" && guess.captain == "yes") {
                titles = `
                <div class="achievement">Quidditch Captain</div>
                `
            }


            guessContainer.style.display = "block"
            guessContainer.innerHTML += `
            <div class="guess-row guess-row-${attempts}" id="guess${attempts}">
                <div class="student-name guess-box">${guess.name}</div>
                <div class="house guess-box" id="house${attempts}">${guess.house}</div>
                <div class="sort-year guess-box" id="sortYear${attempts}">${guess.sortYear}</div>
                <div class="gender guess-box" id="gender${attempts}">${guess.gender}</div>
                <div class="achievements guess-box" id="achievements${attempts}">${titles}</div>
                <div class="quidditch guess-box" id="quidditch${attempts}">${guess.quidditch}</div>
                <div class="ps guess-box" id="ps${attempts}">${guess.PS}</div>
                <div class="cos guess-box" id="cos${attempts}">${guess.CoS}</div>
                <div class="poa guess-box" id="poa${attempts}">${guess.PoA}</div>
                <div class="gof guess-box" id="gof${attempts}">${guess.GoF}</div>
                <div class="ootp guess-box" id="ootp${attempts}">${guess.OotP}</div>
                <div class="hbp guess-box" id="hbp${attempts}">${guess.HBP}</div>
                <div class="dh guess-box" id="dh${attempts}">${guess.DH}</div>
            </div>    
            `
            let guessRow = document.querySelector('#guess'+attempts)
            guessRow.classList.add("guess-row-animation")

            let previousAttempt = attempts - 1
            let previousGuessRow = document.querySelector('#guess'+previousAttempt)
            if (previousGuessRow) {
                previousGuessRow.classList.remove("guess-row-animation")
            }
            setTimeout(function(){ guessRow.classList.remove("guess-row-animation") }, 500);

            let house = document.querySelector('#house'+attempts)
            let sortYear = document.querySelector('#sortYear'+attempts)
            let quidditch = document.querySelector('#quidditch'+attempts)
            let gender = document.querySelector('#gender'+attempts)
            let achievements = document.querySelector('#achievements'+attempts)
            let ps = document.querySelector('#ps'+attempts)
            let cos = document.querySelector('#cos'+attempts)
            let poa = document.querySelector('#poa'+attempts)
            let gof = document.querySelector('#gof'+attempts)
            let ootp = document.querySelector('#ootp'+attempts)
            let hbp = document.querySelector('#hbp'+attempts)
            let dh = document.querySelector('#dh'+attempts)

            if (guess.name === answer.name) {
                guessRow.classList.add('green')
            }

            if (guess.house === answer.house) {
                house.classList.add('green')
            }

            if (guess.sortYear === answer.sortYear) {
                sortYear.classList.add('green')
            } else if (guess.sortYear === answer.sortYear + 1 || guess.sortYear === answer.sortYear - 1) {
                sortYear.classList.add('yellow')
            }

            if (guess.gender === answer.gender) {
                gender.classList.add('green')
            }

            if (guess.prefect === answer.prefect && guess.headBoy === answer.headBoy && guess.captain === answer.captain) {
                achievements.classList.add('green')
            } else if (guess.prefect === answer.prefect && answer.prefect != "no") {
                achievements.classList.add('yellow')
            } else if (guess.headBoy === answer.headBoy && answer.headBoy != "no") {
                achievements.classList.add('yellow')
            } else if (guess.captain === answer.captain && answer.captain != "no") {
                achievements.classList.add('yellow')
            }

            if (guess.quidditch === answer.quidditch) {
                quidditch.classList.add('green')
            } else if (guess.quidditch != "No" && answer.quidditch != "No") {
                quidditch.classList.add('yellow')
            }

            if (guess.PS === answer.PS) {
                ps.classList.add('green')
            } else if (answer.PS != "No" && guess.PS != "No") {
                ps.classList.add('yellow')
            }

            if (guess.CoS === answer.CoS) {
                cos.classList.add('green')
            } else if (answer.CoS != "No" && guess.CoS != "No") {
                cos.classList.add('yellow')
            }

            if (guess.PoA === answer.PoA) {
                poa.classList.add('green')
            } else if (answer.PoA != "No" && guess.PoA != "No") {
                poa.classList.add('yellow')
            }

            if (guess.GoF === answer.GoF) {
                gof.classList.add('green')
            } else if (answer.GoF != "No" && guess.Gof != "No") {
                gof.classList.add('yellow')
            }

            if (guess.OotP === answer.OotP) {
                ootp.classList.add('green')
            } else if (answer.OotP != "No" && guess.OotP != "No") {
                ootp.classList.add('yellow')
            }

            if (guess.HBP === answer.HBP) {
                hbp.classList.add('green')
            } else if (answer.HBP != "No" && guess.HBP != "No" ) {
                hbp.classList.add('yellow')
            }

            if (guess.DH === answer.DH) {
                dh.classList.add('green')
            } else if (answer.DH != "No" && guess.DH != "No") {
                dh.classList.add('yellow')
            }

            attempts += 1
            guesses -= 1
            search.placeholder = `You have ${guesses} tries left`
            checkGuess(guess)
            handleLose(guess)
            preserveGameState()
        })
    })
} 

search.addEventListener('input', () => {
    searchStudents(search.value)
})

// Handle enter key
search.addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) {
        possibleGuesses[0].click()
    }
})

// Win & lose

function countdown() {
    setInterval(function() {

        const now = new Date().getTime()
    
        const timeLeft = tomorrow - now
    
        const hoursOne = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutesOne = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const secondsOne = Math.floor((timeLeft % (1000 * 60)) / 1000)
    
        function makeMeTwoDigits(n){
            return (n < 10 ? "0" : "") + n;
        }
    
        const hours = makeMeTwoDigits(hoursOne)
        const minutes = makeMeTwoDigits(minutesOne)
        const seconds = makeMeTwoDigits(secondsOne)
    
        document.getElementById("timer").innerHTML = "Come back in " + hours + ":" + minutes + ":" + seconds
        search.placeholder = `Come back in ${hours}:${minutes}:${seconds}`
    
        
    }, 1000);
}

// Win
const winClose = document.querySelector('.win-close')

if (winClose) {
    winClose.addEventListener('click', () => {
        winBox.style.display = "none"
    })
}

const checkGuess = guess => {
    if (guess.name === answer.name) {
        won = "si"
        search.disabled = true

        winBox.style.display = "flex"
        winBox.innerHTML = `
        <i class="fa-solid fa-xmark win-close"></i>
        <div class="win-text">You've won</div>
        <div class="win-text ${answer.house}">The student was ${answerName}</div>
        <div class="win-text" id="timer"></div>
        `

        const closeBTN = document.querySelector('.win-close')

        closeBTN.addEventListener('click', () => {
            winBox.style.display = "none"
        })

        const now = new Date().getTime()

        const timeLeft = tomorrow - now
    
        const hoursOne = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutesOne = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const secondsOne = Math.floor((timeLeft % (1000 * 60)) / 1000)
    
        function makeMeTwoDigits(n){
            return (n < 10 ? "0" : "") + n;
        }
    
        const hours = makeMeTwoDigits(hoursOne)
        const minutes = makeMeTwoDigits(minutesOne)
        const seconds = makeMeTwoDigits(secondsOne)
    
        document.getElementById("timer").innerHTML = "Come back in " + hours + ":" + minutes + ":" + seconds
        search.placeholder = `Come back in ${hours}:${minutes}:${seconds}`

        countdown()
        preserveWin()
        updateGames()
        updateStats()
        gtag ('event', 'game_won', {
            'number_guesses' : attempts
        })
    }   
}

// Lose
const loseClose = document.querySelector('.lose-close')

if (loseClose) {
    loseClose.addEventListener('click', () => {
        loseBox.style.display = "none"
    })
}

const handleLose = guess => {
    if (attempts > 7 && guess.name != answer.name) {
        lost = "si"
        search.disabled = true

        loseBox.style.display = "flex"
        loseBox.innerHTML += `
            <i class="fa-solid fa-xmark lose-close"></i>
            <div class="lose-text">You've lost :(</div>
            <div class="lose-text" id="timer"></div>
        `

        const closeBTN = document.querySelector('.lose-close')

        closeBTN.addEventListener('click', () => {
            loseBox.style.display = "none"
        })

        const now = new Date().getTime()

        const timeLeft = tomorrow - now
    
        const hoursOne = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutesOne = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const secondsOne = Math.floor((timeLeft % (1000 * 60)) / 1000)
    
        function makeMeTwoDigits(n){
            return (n < 10 ? "0" : "") + n;
        }
    
        const hours = makeMeTwoDigits(hoursOne)
        const minutes = makeMeTwoDigits(minutesOne)
        const seconds = makeMeTwoDigits(secondsOne)
    
        document.getElementById("timer").innerHTML = "Come back in " + hours + ":" + minutes + ":" + seconds
        search.placeholder = `Come back in ${hours}:${minutes}:${seconds}`
        
        countdown()
        preserveLose()
        updateGames()
        updateStats()
        gtag ('event', 'game_lost')
    } 
}

if (won === "si") {
    search.disabled = true
    winBox.style.display = "flex"
    countdown()
}

if (lost === "si") {
    search.disabled = true
    loseBox.style.display = "flex"
    countdown()
}
