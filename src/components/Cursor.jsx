const Cursor = () => {
    const cursors = document.querySelector(".cursor");
    var timeout;

    document.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y= e.clientY;
        cursors.style.top = y + "px";
        cursors.style.left = x + "px";
        cursors.style.display = "block";

        function mouseStopped() {
            cursors.style.display = "none";
        }
        clearTimeout(timeout);
        timeout= setTimeout(mouseStopped, 1000)
    })

    document.addEventListener("mouseout", () => {
        cursors.style.display = "none";
    })
  return (
    <div className='cursor'></div>
  )
}

export default Cursor