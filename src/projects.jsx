import Disassembler from "./assets/disassembler.png";

export const javaProject = {
  image:
    "https://images.unsplash.com/photo-1715514894643-aedb49942811?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imgAltDescription: "placeholder",
  title: "Assembly Dissasembler",
  finished: true,
  stack: ["java"],
  description:
    "For my computer architecture class we were tasked to write a dissasembler in java that takes some machine code as input and converts it to assembly instructions.",
};

export const reactProject = {
  image:
    "https://img.freepik.com/free-photo/portrait-adorable-cavapoo-dog-holding-tennis-ball-park-sunny-day_181624-59516.jpg?t=st=1713199924~exp=1713203524~hmac=0c3853ead18e9ca1a3940aefb912055fbaf70a500f6976c79b18588d4e3d7801&w=1380",
  imgAltDescription: "placeholder",
  title: "Steam Roll",
  finished: false,
  stack: ["javascript", "react", "node"],
  description: `This project is currently still in development, but the basic idea of the project is to reduce decision fatigue for steam users that may have a lot of games in their steam library and can't choose what to play.
     The app doesn't store any userdata and instead uses the steam-api to access the users library as long as the user has a their account set to  public.
     All you have to do is copy and paste the url of your account or enter your steamid manually. You will then be given 3 rolls and it will return a random game from your steam library.
     Future features I intended to add is a time delay between your 3 rolls, I want people to actually try out the games they rolled. As the main goal was to reduce decision fatigue and having infinite rolls kind of defeats the purpose.
     Along with that I want to add filters such as playtime, genre, etc. 
     `,
};

export const pokemonProject = {
  title: "ASCII Pokemon Game",
  image: Disassembler,
  finished: false,
  stack: ["cpp", "c"],
  description: `During university I took a project-based course focused on learning C and C++ programming languages. The course began with C and transitioned to C++, where each week we were tasked with implementing various features for a console-based Pokémon-like game. This hands-on experience allowed us to progressively build a functional game while enhancing our programming skills in both languages.
    After each week we could either continue to use our code or build on top of the professors code, that way if you weren't able to finish something you could still work on that weeks assignment, I used most of my professors code because the terrain generation he used was better
    But I have decided to re-write the program so I can spend more time understanding some of the more complicated algorithms and implementations like random terrain generation using perlin noise and NPC path finding algorithms.
    `,
};

export const projectsArray = [pokemonProject, reactProject, javaProject];
