import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import birthdaySong from "./assets/happy-birthday.mp3";

const personName = "Champion"

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef(null);

  function fireConfetti() {
    confetti({
      particleCount: 350,
      spread: 120,
      origin: { y: 0.6 },
    });
  }

  function handleOpen() {
    setIsOpened(true);
    fireConfetti();

    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-200 to-purple-200 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center transition-all duration-500">
        {!isOpened ? (
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-gray-700">
              A Special Message For You 💌💖
            </h2>

            <button
              onClick={handleOpen}
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition transform hover:scale-105"
            >
              Open Me
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-[1.45rem] font-bold text-pink-600">
              🎉 Happy Birthday {personName}! 🎂
            </h2>

            <p className="text-gray-700 leading-relaxed text-[1.15rem]">
              Today isn't just about cake and candles. It's about celebrating
              someone truly special. I'm so grateful for you and everything you
              are. May this year bring you joy, growth, laughter, and everything
              your heart desires. Keep shining and never stop being amazing ❤️
            </p>

            <p className="text-sm text-gray-500 italic text-[1rem]">
              — From someone who cares deeply about you 💕
            </p>
          </div>
        )}

        <audio ref={audioRef} src={birthdaySong} />
      </div>
    </div>
  );
}

export default App;
