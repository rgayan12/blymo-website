"use client"; // This directive enables client-side rendering in Next.js 13 and above
import { useEffect } from "react";

const GoogleCalendarButton = () => {
  useEffect(() => {
    const linkId = "google-calendar-stylesheet";
    const scriptId = "google-calendar-script";
    const buttonId = "google-calendar-initialized";

    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.href =
        "https://calendar.google.com/calendar/scheduling-button-script.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://calendar.google.com/calendar/scheduling-button-script.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const target = document.getElementById("google-calendar-button");
        if (target && !document.getElementById(buttonId)) {
          const button = document.createElement("div");
          button.id = buttonId;
          target.appendChild(button);
          window.calendar.schedulingButton.load({
            url: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3P0OJv3HVyoqUOt4wxx7wrpNtCz-Mn8jWfvPB7WbOsnWsGMTzNDG3vkCQwxx0yLC1B9JHsihCx",
            color: "#31afa9",
            label: "Start New Project",
            target: button,
          });
        }
      };
    }

    return () => {
      const link = document.getElementById(linkId);
      const script = document.getElementById(scriptId);
      if (link) document.head.removeChild(link);
      if (script) document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="google-calendar-button"
      className="mt-9 w-[200px] bg-[#31afa9] font-poppins py-1 px-2 border rounded-full text-center"
    ></div>
  );
};

export default GoogleCalendarButton;
