import Typewriter from 'typewriter-effect'

const Typewriters = () => {
  return (
    <div>
        <h1 className="display-4">
            <Typewriter
                onInit={(typewriter) => {
                  typewriter
                  .typeString("Hello, I'm Frida.")
                  
                  .pauseFor(2000)
                  .start();
                }}
            />
        </h1>
    </div>
  )
}

export default Typewriters