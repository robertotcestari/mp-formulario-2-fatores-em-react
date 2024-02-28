import { useEffect, useRef, useState } from 'react';

type OtpType = [string, string, string, string, string];

export default function OtpForm() {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [otp, setOtp] = useState<OtpType>(['', '', '', '', '']);

  // useEffect para trazer o foco para o primeiro input
  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    const nextInput = event.currentTarget
      .nextElementSibling as HTMLInputElement | null;

    const index = Number(name.split('-')[1]);

    if (!/^\d*$/.test(value)) {
      return;
    }

    setOtp((prevOtp) => {
      const newOtp: OtpType = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    if (value && nextInput) {
      nextInput.focus();
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    const previousInput = event.currentTarget
      .previousElementSibling as HTMLInputElement | null;
    const nextInput = event.currentTarget
      .nextElementSibling as HTMLInputElement | null;


    if (
      event.key === 'Backspace' &&
      !event.currentTarget.value &&
      previousInput
    ) {
      previousInput.focus();
    }

    if (event.key === 'ArrowLeft') {
      previousInput?.focus();
    }

    if (event.key === 'ArrowRight') {
      nextInput?.focus();
    }
  }

  function handlePaste(event: React.ClipboardEvent<HTMLInputElement>) {
    event.preventDefault();
    const text = event.clipboardData.getData('text');
    const otpArray = text.split('').filter((el) => /^\d*$/.test(el));

    if (otpArray.length !== 5) {
      alert(
        'Ops... você colou um código com formato inválido. O código deverá possuir 5 dígitos numéricos.'
      );
      return;
    }

    setOtp(otpArray as OtpType);
  }

  return (
    <form className="mt-10">
      <div className="flex items-center justify-center gap-3">
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          ref={firstInputRef}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          value={otp[0]}
          name="otp-0"
          required
          maxLength={1}
          type="text"
          className="w-10 p-2 bg-stone-200 text-stone-800 rounded-lg text-3xl text-center"
        />
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          value={otp[1]}
          name="otp-1"
          required
          maxLength={1}
          type="text"
          className="w-10 p-2 bg-stone-200 text-stone-800 rounded-lg text-3xl text-center"
        />
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          value={otp[2]}
          name="otp-2"
          required
          maxLength={1}
          type="text"
          className="w-10 p-2 bg-stone-200 text-stone-800 rounded-lg text-3xl text-center"
        />
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          value={otp[3]}
          name="otp-3"
          required
          maxLength={1}
          type="text"
          className="w-10 p-2 bg-stone-200 text-stone-800 rounded-lg text-3xl text-center"
        />
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          value={otp[4]}
          name="otp-4"
          required
          maxLength={1}
          type="text"
          className="w-10 p-2 bg-stone-200 text-stone-800 rounded-lg text-3xl text-center"
        />
      </div>
      <button
        type="submit"
        className="block px-12 py-3 bg-blue-300 rounded-2xl text-white font-bold text-xl mx-auto mt-10"
      >
        Verificar OTP
      </button>
    </form>
  );
}
