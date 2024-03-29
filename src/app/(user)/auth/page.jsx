import AuthContainer from "./AuthContainer";

export default function Auth() {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="p-4 shadow rounded-md border border-gray-400 lg:w-[30%] md:w-[60%] w-[90%]">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          دیجی شاپ
        </h1>
        <AuthContainer />
      </div>
    </section>
  );
}
