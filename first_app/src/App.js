
function App() {
  return (
    <section>
      <header className="bg-rose-500 border-b-2 border-sky-500" >
        <h1 className="text-4xl text-teal-400 font-bold text-left">Hello world!</h1>
      </header>
      <p className="text-4xl text-newer-500">This is my Fight Song</p>

      <h3>Alter size depending on screen</h3>
      <p>Take screen customization and add to you tailwindcss.config.js file</p>
      <p className="text-xs lg:text-5xl">Apply to me! == (means this sentence)</p>
      <br/>
      <h3 className="mb-1">Using Arbitary Values</h3>
      <p className="bg-[#acc955] py-2 ">On me am using arbitary values</p>

      <p>I am <span>span</span> and i have been applied a chain style on index.css</p>
    </section>

  );
}

export default App;
