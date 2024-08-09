// global.d.ts
interface Window {
  calendar: {
    schedulingButton: {
      load: (options: {
        url: string;
        color: string;
        label: string;
        target: HTMLElement | null;
      }) => void;
    };
  };
}
