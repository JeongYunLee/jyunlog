import { ref } from "vue";
function useTheme() {
  const enabled = ref(false);
  const toggleTheme = () => {
    enabled.value = !enabled.value;
    localStorage.setItem("theme", enabled.value ? "dark" : "light");
    setTheme();
  };
  function setTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || !theme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }
  return {
    enabled,
    toggleTheme,
    setTheme
  };
}
const transitionCompletedOnce = ref(false);
const useTransitionTracking = () => {
  const trackTransitionCompleted = () => {
    transitionCompletedOnce.value = true;
  };
  return {
    transitionCompletedOnce,
    trackTransitionCompleted
  };
};
export {
  useTransitionTracking as a,
  useTheme as u
};
//# sourceMappingURL=useTransitionTracking-b0686054.js.map
