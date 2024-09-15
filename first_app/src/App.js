
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
        <h1 class="font-title sm:text-sm lg:text-3xl">Grids</h1>
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

    </section>

  );
}

export default App;
