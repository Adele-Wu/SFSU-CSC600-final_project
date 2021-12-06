-- NOTE: I figured we'd want this for the section on SQL
PRAGMA foreign_keys;

-- NOTE: For the SQL assignment, we could have them normalize
-- this database farther. Perhaps they can learn about SERIAL and
-- then go implement a way to change a room_name without losing
-- references by using a FOREIGN KEY into a rooms table with an 
-- int primary key.
CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	artist text NOT NULL,
	album text NOT NULL,
	notes varchar NOT NULL
);

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (1, 'Ode to Joy (Dubstep Remix)', 'Beethoven', 'Symphony No.9', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (2, 'Avatar’s Love', 'Jeremy Zuckerman', 'Avatar The Last Airbender OST', 'C4 E4 G4 B4 D4 F4 A4 C5 E4 G4 B4 D5 F4 A4 D5 F5 E5 C5 B4 G4 E4 C5 B4 G4 E4 C5 B4 G4 E4 C5 B4 G4 E4 F4 E4 F4 C4 F4 E4 F4 E4 C4 F4 E4 F4 C4 F4 E4 F4 E4 C4 C5 B4 G4 E4 C5 B4 G4 E4 C5 B4 G4 E4 C5 B4 G4 E4');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (3, 'Twinkle Twinkle Little Star', 'Jane Taylor', 'Lullaby', 'C4 C4 G4 G4 A4 A4 G4 F4 F4 E4 E4 D4 D4 C4 G4 G4 F4 F4 E4 E4 D4 G4 G4 F4 F4 E4 E4 D4 C4 C4 G4 G4 A4 A4 G4 F4 F4 E4 E4 D4 D4 C4');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (4, 'Jingle Bells', 'James Pierpont', 'Christmas', 'E4 E4 E4 E4 E4 E4 E4 G4 C4 D4 E4 F4 F4 F4 F4 F4 E4 E4 E4 E4 E4 D4 D4 E4 D4 G4 E4 E4 E4 E4 E4 E4 E4 G4 C4 D4 E4 F4 F4 F4 F4 F4 E4 E4 E4 E4 G4 G4 F4 D4 C4');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (5, 'Stay', 'The Kid Laroi, Justin Bieber', 'F*ck Love 3: Over You', 'B2 F1 E2 E2 E2 C3 E2 E2 B2 F1 E2 E2 E2 C3 E2 E2');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (6, 'Peaches', 'Justin Bieber', 'Justice', 'D4 D4 D4 D4 D4 D4 C4 E4 C4 A3 C4 C4 D4 D4 D4 D4 D4 D4 C4 E4 C4 A3 C4 C4 G4 F4 E4 D4 D4 D4 C4 E4 C4 C4 C4 C4 G4 F4 E4 D4 D4 D4 C4 E4 C4 C4 C4 C4 C4 D4 E4 E4 D4 F4 E4 D4 C4 D4 D4 D4 E4 D4 C4 B3 C4 B3 A3');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (7, 'Come Get Her', 'Rae Sremmurd', 'SremmLife', 'E3 A4 B4 C4 E3 E3 F3 F3 F3 E3 D4 E3 E3 A4 B4 C4 E3 E3 F3 F3 F3 E3 D4 E3');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (8, 'FFVII Victory Fanfare', 'Nobuo Uematsu', 'FF VII', 'C4 C4 C4 C4 A3 B3 C4 B3 C4');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (9, 'For River Johnnys Version', 'Kan R Gao', 'To the Moon', 'E4 F4 E4 F4 E4 F4 E4 F4 E4 F4 E4 F4 E4 F4 E4 F4 E4 F4 E4 F4 E4 F4 E4 F4 E4 F4 E4 D4 E4 F4 G4 F4');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (10, 'Spider Dance', 'Toby Fox', 'UNDERTALE', 'F6 C6 A5 F5 B5 Bb5 Bb5 A5 E5 F5 C6 B5 A5 B5 C6 E5 F5');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (11, 'Imperial March', 'John Williams', 'The Empire Strikes Back', 'A5 A5 A5 F5 C6 A5 F5 C6 A5');

INSERT INTO songs (id, song_title, artist, album, notes)
VALUES (12, 'US', 'Sidhu', 'SMW', 'G#4 G#4 B4 G#4 B4 C#4 B4 B4 Bb4 G#4 G#4 G#4 Bb4 B4 G#4 B4 G#4 B4 C#4');

INSERT INTO songs (id, song_title, artist, album, notes)
VALUES (13, 'Way Back Then', 'Jung Jaeil', 'Squid Game', 'B4 B4 B4 B4 B4 B4 E5 B4 B4 A4 G4 A4 B4');