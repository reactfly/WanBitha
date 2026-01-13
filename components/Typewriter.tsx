
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

  // Reset when words array changes (language toggle)
  useEffect(() => {
    setText('');
    setIsDeleting(false);
    setLoopNum(0);
    setHasStarted(false);
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, startDelay);
    return () => clearTimeout(startTimeout);
  }, [words, startDelay]);

  useEffect(() => {
    if (!hasStarted || words.length === 0) return;

    const i = loopNum % words.length;
    const fullText = words[i];

    const handleTyping = () => {
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? deleteSpeed : typeSpeed);

      if (!isDeleting && text === fullText) {
        if (!loop && loopNum === words.length - 1) return;
        setTypingSpeed(delaySpeed);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(typeSpeed);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typeSpeed, deleteSpeed, delaySpeed, loop, hasStarted]);

  return (
    <span className="inline-block">
      {text}
      <span 
        className="animate-blink ml-1 border-r-4 inline-block h-[1em] translate-y-[0.1em]" 
        style={{ borderColor: cursorColor }}
      >
        &nbsp;
      </span>
    </span>
  );
}
