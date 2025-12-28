import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  loop?: boolean;
  cursorColor?: string;
  startDelay?: number;
}

export default function Typewriter({ 
  words, 
  typeSpeed = 150, 
  deleteSpeed = 100,
  delaySpeed = 2000,
  loop = true,
  cursorColor = 'currentColor',
  startDelay = 0
}: TypewriterProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!hasStarted) return;

    const i = loopNum % words.length;
    const fullText = words[i];

    const handleTyping = () => {
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Typing Speed Logic
      setTypingSpeed(isDeleting ? deleteSpeed : typeSpeed);

      if (!isDeleting && text === fullText) {
        // Finished typing word
        if (!loop && loopNum === words.length - 1) {
          // Stop if no loop and last word
          return;
        }
        // Pause before deleting
        setTypingSpeed(delaySpeed);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        // Finished deleting word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(typeSpeed);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typeSpeed, deleteSpeed, delaySpeed, loop, hasStarted]);

  return (
    <span>
      {text}
      <span 
        className="animate-blink ml-1" 
        style={{ color: cursorColor }}
      >
        |
      </span>
    </span>
  );
}