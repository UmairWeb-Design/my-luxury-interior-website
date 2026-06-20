import { useScrollProgress } from '../hooks/useInView';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100]">
      <div
        className="h-full scroll-progress transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
