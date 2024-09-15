
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
    </section>

  );
}

export default App;
