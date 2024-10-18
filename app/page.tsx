import SubscribeForm from "./ui/SubscribeForm";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <h1 className="text-2xl">Home page</h1>
      </div>
      <div>
        <SubscribeForm />
      </div>
    </main>
  );
}
