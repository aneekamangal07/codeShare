import { CodeEditor } from "@/components/Editor";
import NavBar from "@/components/NavBar";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <NavBar />

      <CodeEditor />
    </div>
  );
}
