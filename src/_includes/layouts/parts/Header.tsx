import type { Site } from "../../../_data.ts";

export default function Header({ title }: Site) {
  return (
    <header class="bg-gray-600 p-4 shadow">
      <div class="mx-auto container">
        <h1 class="text-2xl font-bold text-white">{title}</h1>
      </div>
    </header>
  );
}
