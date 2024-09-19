import blackMyth from "./images/black-myth-wukong-HD-scaled.jpg";
import spider from "./images/backiee-227559-landscape.jpg"
import nature_1 from "./images/pexels-tomas-malik-nature-1.jpg";
import spiderman from "./images/spiderman.jpg";
import winged from "./images/backiee-55830-portrait.jpg";
import warprincess from "./images/backiee-96330-portrait.jpg";
import toby from "./images/tobySpiderman.jpg";
import garField from "./images/andrewGarfield.webp";
import tom from "./images/tomHolland.jpg";
import electro from "./images/electro.jpg"
import venom from "./images/venom.jpg";
import mysterio from "./images/mysterio.jpg";
function App() {
  return (
    <section className="w-screen">
      <header className="bg-rose-500 border-b-2 border-sky-500" >
      <h1 className="text-4xl text-teal-400 font-bold text-left">Hello world!</h1>
      </header>
      <p className="text-4xl text-newer-500">This is my Fight Song</p>

      <h3>Alter size depending on screen</h3>
      <p>Take screen customization and add to you tailwindcss.config.js file</p>
      <p className="sm:text-xs md:text-base lg:text-5xl">Apply to me == (means this sentence)</p>
      <br/>
      <h3 className="mb-1">Using Arbitary Values</h3>
      <p className="bg-[#acc955] py-2 ">On me am using arbitary values</p>

      <p>I am <span>span</span> and i have been applied a chain style on index.css</p>

      <h1>I'm searching for change, i am looking for change</h1>

      <div className="flex flex-row  mt-3">
        <div className="bg-stone-500 w-1/4 pl-2 py-2">
          <p>Table Content</p>
          <div className="mt-1 bg-inherit flex flex-col">
            <p>Airtificial Intelligence</p>
            <p>Distributed Systems</p>
            <p>Cloud Computing</p>
            <p>IT project management</p>
          </div>
        </div>
        <div className="bg-gray-900 w-3/4 text-white pl-2 py-2">
          <p>Content</p>
          <div className="mt-1 bg-inherit flex flex-col">
            <p>Machine learning, Deep Neural Networks</p>
            <p>System sychronization, Scheduling algorithms, Middleware, Load Sharing and Load balancing algorithms</p>
            <p>SaaS, IaaS, Paas, Types of Cloud Computing, Advantages and Disadvantages</p>
            <p>Definition, Characteristics, Project Manager, Implementation of Project Mehtods</p>
          </div>
        </div>
      </div>

      {/* grid practise */}
      <div class="mt-6">
        <h1 class="title">Grids</h1>
        <div class="grid-container">
            <p class="grid-object">1 column</p>
            <p class="grid-object">2 column</p>
            <p class="grid-object col-span-3 bg-slate-400">3 column</p>
            <p class="grid-object">4 column</p>
            <p class="grid-object">5 column</p>
            <p class="grid-object">6 column</p>
        </div>
      </div>

      <div class="grid gap-1 grid-cols-3 m-auto w-11/12 bg-slate-400 p-2">
        <p class="p-1 bg-sky-950 rounded ">1</p>
        <p class="p-1 bg-sky-950 rounded ">2</p>
        <p class="p-1 col-start-2 bg-sky-950 rounded ">3</p>
        <p class="p-1 bg-sky-950 rounded ">4</p>
        <p class="p-1 bg-sky-950 rounded ">5</p>
        <p class="p-1 bg-sky-950 rounded ">6</p>
      </div>

      <h3>Using row-span</h3>
      <div class="grid gap-1 grid-cols-3 m-auto w-11/12 bg-red-300 rounded p-2">
        <p class="p-1 row-span-2 bg-sky-950 rounded ">1 Applying row-span-2</p>
        <p class="p-1 bg-sky-950 rounded">2</p>
        <p class="p-1 col-start-2 bg-sky-950 rounded">3</p>
        <p class="p-1 bg-sky-950 rounded">4</p>
        <p class="p-1 bg-sky-950 rounded">5</p>
        <p class="p-1 bg-sky-950 rounded">6</p>
      </div>


      {/* container */}
      <h1 class="title  mt-5">Container</h1>
      <div class="container columns-3 mx-auto border-4 border-cyan-400 px-3 rounded">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis eros in ante ultrices rutrum. Suspendisse 
          porta enim at nulla ultrices, eget posuere magna finibus. In eu maximus sem. Mauris hendrerit mauris at nisi dignissim
          volutpat sit amet non elit. Etiam ut lacus orci. Vivamus sit amet nibh quis enim consequat lacinia. Duis varius dolor 
          sed nulla bibendum, et sodales arcu semper. </p>
          <p> Nulla ut dolor odio. Ut sodales volutpat ligula. Quisque aliquam enim 
          feugiat enim interdum, in gravida arcu venenatis. Cras et faucibus tortor, eu lacinia nibh. Etiam a libero non urna 
          efficitur dapibus. Mauris consequat ex elit, vel facilisis risus sodales eu.</p>
          <p> Phasellus lacinia lorem et enim ornare tristique volutpat at est. Maecenas non purus id ante aliquet iaculis eu vel nulla. Nullam convallis metus id est scelerisque, eget aliquam lacus sodales. </p>
      </div>

      <div class="container columns-2 mx-auto my-5 bg-slate-900">
        <img src={blackMyth} alt="black myth wukong"/>
        <div>
          <h1 class="font-title text-2xl text-white">Game of the year</h1>
          <p class="mt-4 text-white">Black Myth: Wukong is an action RPG rooted in Chinese mythology. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past. </p>
        </div>
      </div>


      <h1 class="title">Overflow Property</h1>
      {/* overflow attributes/properties */}
      <div class="my-4 p-4 border-2 border-indigo-600">
        <ul class="mt-2 mb-4 list-disc">
          <li>Overflow visible</li>
          <li>Overflow hidden</li>
        </ul>
        {/* <p>class="overflow-visible relative max-w-sm mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5"</p>
        <p>class="absolute -left-6 w-24 h-24 rounded-full shadow-lg</p> */}
        {/* contianer for user profiles */}
        {/* removed container in the class below to enable full width */}
        <div class="mt-6 p-[23px] relative flex flex-row flex-wrap justify-between gap-x-2 gap-y-5 border-2 border-red-500 ">
          
          <div class="relative overflow-visible justify-center items-center flex   p-2 bg-slate-500 rounded w-1/4">
            <img class="absolute -left-3  w-[87px]  h-[87px] rounded-full" src={nature_1}/>
            <div>
              <p class="text-white">Nature</p>
              <p class="text-white">Team Leader</p>
            </div>
          </div>
          {/* overflow hidden */}
          <div class="relative bg-slate-500 p-2 w-1/4 rounded overflow-hidden flex  items-center justify-center">
            <img class="absolute -top-1 -left-4 w-[87px] h-[87px] rounded-full " src={spiderman}/>
            <div>
              <p class="text-white">Daniel Makamu</p>
              <p class="text-white">Project Manager</p>
            </div>
          </div>
          {/* 2 more for practise */}
          <div class="relative flex  items-center justify-center overflow-visible bg-slate-500 rounded w-1/4">
            <img class="w-[87px] h-[87px] rounded-full absolute -left-3 -top-1 " src={winged} />
            <div>
              <p class="text-white">Kery Hilson</p>
              <p class="text-white">Software Developer</p>
            </div>
          </div>
          <div class="relative bg-slate-500 flex  justify-center items-center p-2 overflow-hidden  w-1/4 rounded">
            <img class="w-[87px] h-[87px] absolute -left-3 -top-1 rounded-full" src={warprincess}  />
            <div> 
              <p class="text-white">BlackOps</p>
              <p class="text-white">CyberSec</p>
            </div>
          </div>

        </div>
      </div>
      <div class="flex  flex-row space-x-2 bg-purple-300">
        <div class=" w-[20px] h-[20px] bg-red-500"></div>
        <div class=" w-[20px] h-[20px] bg-red-500"></div>
        <div class=" w-[20px] h-[20px] bg-red-500"></div>
        <div class=" w-[20px] h-[20px] bg-red-500"></div>
      </div>

      <h1 class="title">Overflow-auto property</h1>
      <p class="text-center">My solution from learning</p>

      <div class="relative rounded-xl   my-5 p-6">
        <div class="relative rounded-xl overflow-auto h-[330px] p-5  mx-auto flex flex-col ring-1 ring-orange-300 max-w-sm  space-y-5">
          
          <div class="relative flex flex-row space-x-[72px]   items-center overflow-visible bg-slate-800 rounded p-2 ">
            <img class="w-[87px] h-[87px] rounded-full absolute -left-4" src={toby}/>
            <div class="flex flex-col">
              <p class="text-white">Toby Maguire</p>
              <p class="text-white">Spider-man 1, 2, 3</p>
            </div>
          </div>

          <div class="relative flex items-center space-x-[72px] bg-slate-800 p-2 ">
            <img class="w-[87px] h-[87px] rounded-full absolute -left-4 " src={garField}/>
            <div>
              <p class="text-white">Andrew Garfield</p>
              <p class="text-white">Amazing Spider-man</p>
            </div>
          </div>

          <div class="relative flex flex-row bg-slate-800 p-2  space-x-[72px] rounded"> 
            <img class="w-[87px] h-[87px] rounded-full absolute -left-4 -top-1" src={tom}/>
            <div>
              <p class="text-white">Tom Holland</p>
              <p class="text-white">Spider-man</p>
            </div>
          </div>

          <div class="relative flex flex-row bg-slate-800 p-2 space-x-[72px]  rounded"> 
            <img class="w-[87px] h-[87px] rounded-full absolute -left-4 -top-1" src={venom}/>
            <div>
              <p class="text-white">Tom Hardy</p>
              <p class="text-white">Venom</p>
            </div>
          </div>

          <div class="relative flex flex-row bg-slate-800 p-2 space-x-[72px]  rounded"> 
            <img class="w-[87px] h-[87px] rounded-full absolute -left-4 -top-1" src={mysterio}/>
            <div>
              <p class="text-white">Jake Gyllenhaal</p>
              <p class="text-white">mysterio</p>
            </div>
          </div>

          <div class="relative flex flex-row bg-slate-800 p-2 space-x-[72px] rounded"> 
            <img class="w-[87px] h-[87px] absolute rounded-full  -left-4 -top-1" src={electro}/>
            <div class="ml-5">
              <p class="text-white">Jamie Foxx</p>
              <p class="text-white">Electro</p>
            </div>
          </div>
        </div>
      </div>

      {/* solution from tailwind */}
      <div class="relative rounded-xloverflow-auto my-5 p-8">
        
        <div class="relative bg-slate-500 rounded-xl overflow-auto h-[330px] divide-y divide-slate-200   mx-auto flex flex-col ring-1 ring-orange-300 max-w-sm ">
          <div class="relative flex  space-x-[90px] p-4  items-center overflow-visible  rounded">  {/* container for the img and text */}
            <img alt="spider-characters" class="w-[67px] h-[67px] rounded-full absolute" src={toby}/>
            <div class="flex flex-col">
              <p class="text-white">Toby Maguire</p>
              <p class="text-white">Spider-man 1, 2, 3</p>
            </div>
          </div>

          <div class="relative flex items-center space-x-[90px] overflow-visible p-4">
            <img alt="spider-characters" class="w-[67px] h-[67px] rounded-full absolute left-2  " src={garField}/>
            <div>
              <p class="text-white">Andrew Garfield</p>
              <p class="text-white">Amazing Spider-man</p>
            </div>
          </div>

          <div class="relative flex flex-row  space-x-[90px] rounded overflow-visible p-4"> 
            <img alt="spider-characters" class="w-[67px] h-[67px] rounded-full absolute left-2" src={tom}/>
            <div>
              <p class="text-white">Tom Holland</p>
              <p class="text-white">Spider-man</p>
            </div>
          </div>

          <div class="relative flex flex-row space-x-[90px]  rounded overflow-visible p-4"> 
            <img alt="spider-characters" class="w-[67px] h-[67px] rounded-full absolute left-2" src={venom}/>
            <div>
              <p class="text-white">Tom Hardy</p>
              <p class="text-white">Venom</p>
            </div>
          </div>

          <div class="relative flex flex-row space-x-[90px]  rounded overflow-visible p-4"> 
            <img class="w-[67px] h-[67px] rounded-full absolute left-2" src={mysterio}/>
            <div>
              <p class="text-white">Jake Gyllenhaal</p>
              <p class="text-white">mysterio</p>
            </div>
          </div>

          <div class="relative flex flex-row  p-4 space-x-[90px] overflow-visible rounded"> 
            <img class="w-[67px] h-[67px] absolute rounded-full  left-2 " src={electro}/>
            <div class="ml-5">
              <p class="text-white">Jamie Foxx</p>
              <p class="text-white">Electro</p>
            </div>
          </div>
        </div>
      </div>


      <div>
        <h1 class="title">Horizontal Scrolling</h1>
      </div>
    </section>

  );
}

export default App;
