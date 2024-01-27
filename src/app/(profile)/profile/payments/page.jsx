import PaymentsLists from "./PaymentsLists";

export default function PaymentsPage() {
  return (
    <section className="pt-3">
      <header className="flex items-center justify-between py-2">
        <h5 className="text-xl font-semibold ">سفارشات</h5>
      </header>
      <hr className="border-slate-900 mb-3" />
      <PaymentsLists />
    </section>
  );
}
